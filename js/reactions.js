/* ============================================================
   reactions.js - 游戏表情功能
   ============================================================ */

const REACTION_TYPES = ['love', 'meh', 'angry'];

function getReactionCountsFromDom(gameId) {
    const counts = { love: 0, meh: 0, angry: 0 };
    const container = document.querySelector(`.game-reactions[data-game-id="${gameId}"]`);
    if (!container) return counts;
    container.querySelectorAll('.reaction-item').forEach(item => {
        const type = item.dataset.reaction;
        counts[type] = Number(item.querySelector('.count')?.textContent) || 0;
    });
    return counts;
}

function applyReactionState(gameId, counts, userVote) {
    document.querySelectorAll(`.game-reactions[data-game-id="${gameId}"]`).forEach(el => {
        el.querySelectorAll('.reaction-item').forEach(item => {
            const type = item.dataset.reaction;
            const countEl = item.querySelector('.count');
            if (countEl) countEl.textContent = counts[type] || 0;
            item.classList.toggle('voted', userVote === type);
            item.setAttribute('aria-pressed', userVote === type ? 'true' : 'false');
        });
    });
}

async function loadReactions() {
    if (!isSupabaseReady) {
        document.querySelectorAll('.game-reactions').forEach(el => {
            applyReactionState(el.dataset.gameId, { love: 0, meh: 0, angry: 0 }, null);
        });
        return;
    }
    
    try {
        const deviceId = getDeviceId();
        const { data, error } = await supabaseClient
            .from('game_reactions')
            .select('game_id, reaction_type, user_device_id');
        
        if (error) throw error;
        
        const counts = {};
        const userVotes = {};
        
        data.forEach(row => {
            const gameId = row.game_id;
            if (!counts[gameId]) counts[gameId] = { love: 0, meh: 0, angry: 0 };
            if (row.reaction_type) counts[gameId][row.reaction_type]++;
            if (row.user_device_id === deviceId) {
                userVotes[gameId] = row.reaction_type;
            }
        });
        
        document.querySelectorAll('.game-reactions').forEach(el => {
            const gameId = el.dataset.gameId;
            const c = counts[gameId] || { love: 0, meh: 0, angry: 0 };
            const userVote = userVotes[gameId] || null;
            applyReactionState(gameId, c, userVote);
        });
    } catch (err) {
        console.warn('加载表情失败:', err.message);
    }
}

async function handleReactionClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const item = e.currentTarget;
    const container = item.closest('.game-reactions');
    if (!container || item.disabled) return;
    
    const gameId = container.dataset.gameId;
    const type = item.dataset.reaction;
    const deviceId = getDeviceId();
    const previousVote = container.querySelector('.reaction-item.voted')?.dataset.reaction || null;
    const nextVote = previousVote === type ? null : type;
    
    // 乐观更新 UI
    const counts = getReactionCountsFromDom(gameId);
    if (previousVote && counts[previousVote] > 0) counts[previousVote]--;
    if (nextVote) counts[nextVote] = (counts[nextVote] || 0) + 1;
    applyReactionState(gameId, counts, nextVote);
    
    // 弹跳动画
    item.classList.add('bounce');
    setTimeout(() => item.classList.remove('bounce'), 300);
    
    if (!isSupabaseReady) return;
    
    item.disabled = true;
    
    try {
        const { data: existing, error: lookupError } = await supabaseClient
            .from('game_reactions')
            .select('id, reaction_type')
            .eq('game_id', gameId)
            .eq('user_device_id', deviceId);
        
        if (lookupError) throw lookupError;
        
        if (existing?.length > 0 && existing[0].reaction_type === type) {
            await supabaseClient.from('game_reactions').delete().eq('id', existing[0].id);
        } else {
            if (existing?.length > 0) {
                await supabaseClient.from('game_reactions').delete().eq('id', existing[0].id);
            }
            await supabaseClient.from('game_reactions').insert({
                game_id: gameId,
                user_device_id: deviceId,
                reaction_type: type
            });
        }
        
        await loadReactions();
    } catch (err) {
        console.warn('更新表情失败:', err.message);
        await loadReactions();
    } finally {
        item.disabled = false;
    }
}

// 暴露到全局
window.loadReactions = loadReactions;
window.handleReactionClick = handleReactionClick;
window.REACTION_TYPES = REACTION_TYPES;

