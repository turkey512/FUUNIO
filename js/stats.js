/* ============================================================
   stats.js - 游玩统计 & 后台面板
   ============================================================ */

const playCounts = {};
let statsLoaded = false;

function getGamePlayCount(gameId) {
    return Number.isFinite(playCounts[gameId]) ? playCounts[gameId] : 0;
}

async function initPopularity() {
    // GAMES_DATA 需要从 games.js 导入
    if (typeof GAMES_DATA === 'undefined') {
        console.warn('⚠️ GAMES_DATA 未加载');
        statsLoaded = true;
        return;
    }
    
    GAMES_DATA.forEach(g => { playCounts[g.id] = 0; });
    
    if (!isSupabaseReady) {
        console.warn('⚠️ Supabase 未配置，游玩统计不可用');
        statsLoaded = true;
        return;
    }
    
    try {
        const { data, error } = await supabaseClient.from('game_stats').select('game_id, play_count');
        if (error) throw error;
        
        const existingIds = new Set();
        (data || []).forEach(row => {
            existingIds.add(row.game_id);
            playCounts[row.game_id] = Number(row.play_count) || 0;
        });
        
        const missingRows = GAMES_DATA
            .filter(game => !existingIds.has(game.id))
            .map(game => ({ game_id: game.id, play_count: 0 }));
        
        if (missingRows.length) {
            const { error: insertError } = await supabaseClient.from('game_stats').insert(missingRows);
            if (insertError) console.warn('插入游戏统计失败:', insertError.message);
        }
        
        statsLoaded = true;
    } catch (err) {
        console.warn('加载游戏统计失败:', err.message);
        statsLoaded = true;
    }
}

async function incrementPlayCount(gameId) {
    playCounts[gameId] = getGamePlayCount(gameId) + 1;
    updatePopularityDisplay(gameId);
    
    if (!isSupabaseReady) return;
    
    try {
        const { data, error } = await supabaseClient
            .from('game_stats')
            .select('play_count')
            .eq('game_id', gameId)
            .limit(1);
        
        if (error) throw error;
        
        const currentRow = data?.[0] || null;
        const nextCount = (Number(currentRow?.play_count) || 0) + 1;
        
        if (currentRow) {
            await supabaseClient
                .from('game_stats')
                .update({ play_count: nextCount })
                .eq('game_id', gameId);
        } else {
            await supabaseClient
                .from('game_stats')
                .insert({ game_id: gameId, play_count: nextCount });
        }
        
        playCounts[gameId] = nextCount;
        updatePopularityDisplay(gameId);
    } catch (err) {
        console.warn('更新游玩统计失败:', err.message);
    }
}

function updatePopularityDisplay(gameId) {
    const pop = getGamePlayCount(gameId);
    const t = typeof currentLang !== 'undefined' ? (LANG[currentLang] || LANG.zh) : LANG.zh;
    
    document.querySelectorAll(`[data-game-id="${gameId}"] .popularity-badge`).forEach(el => {
        el.textContent = `🔥 ${pop.toLocaleString()} ${t.popularityPlayed}`;
    });
    
    document.querySelectorAll(`[data-game-id="${gameId}"] .popularity-num-detailed`).forEach(el => {
        el.textContent = `${pop} ${t.popularityTimes}`;
    });
}

async function openStatsPanel() {
    const panel = document.getElementById('statsPanel');
    const status = document.getElementById('statsStatus');
    const wrap = document.getElementById('statsTableWrap');
    
    if (!panel || !status || !wrap) return;
    
    const user = getCurrentUser();
    if (!user || user.email?.toLowerCase() !== ADMIN_EMAIL) {
        alert('仅管理员可查看后台数据面板');
        return;
    }
    
    panel.classList.add('active');
    panel.setAttribute('aria-hidden', 'false');
    status.textContent = '正在查询最近 30 天数据...';
    wrap.innerHTML = '';
    
    if (!isSupabaseReady) {
        status.textContent = 'Supabase 尚未配置，无法查询。';
        return;
    }
    
    try {
        const since = new Date();
        since.setDate(since.getDate() - 29);
        const sinceText = since.toISOString().slice(0, 10);
        
        const { data, error } = await supabaseClient
            .from('daily_visits_stats')
            .select('*')
            .gte('visit_date', sinceText)
            .order('visit_date', { ascending: false })
            .limit(30);
        
        if (error) throw error;
        
        const rows = data || [];
        status.textContent = rows.length ? `共 ${rows.length} 条记录` : '最近 30 天暂无访问数据。';
        
        if (!rows.length) return;
        
        wrap.innerHTML = `
            <table class="stats-table">
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>访问次数</th>
                        <th>独立访客</th>
                        <th>登录用户</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows.map(row => `
                        <tr>
                            <td>${row.visit_date || '-'}</td>
                            <td>${Number(row.visit_count || 0).toLocaleString()}</td>
                            <td>${Number(row.unique_visitors || 0).toLocaleString()}</td>
                            <td>${Number(row.signed_in_users || 0).toLocaleString()}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    } catch (err) {
        status.textContent = `查询失败：${err.message}`;
    }
}

function closeStatsPanel() {
    const panel = document.getElementById('statsPanel');
    if (panel) {
        panel.classList.remove('active');
        panel.setAttribute('aria-hidden', 'true');
    }
}

async function trackDailyVisit() {
    if (!isSupabaseReady) return;
    
    const today = new Date().toISOString().slice(0, 10);
    const deviceId = getDeviceId();
    const key = `fuunio_daily_visit_${today}`;
    
    if (localStorage.getItem(key) === deviceId) return;
    
    try {
        const payload = { visit_date: today, user_device_id: deviceId };
        const user = getCurrentUser();
        if (user?.id) payload.user_id = user.id;
        
        const { error } = await supabaseClient.from('daily_visits').insert(payload);
        if (error) {
            console.debug('Daily visit track skipped:', error.message);
            return;
        }
        localStorage.setItem(key, deviceId);
    } catch (err) {
        console.debug('Daily visit track error:', err.message);
    }
}

