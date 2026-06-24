/* ============================================================
   main.js - 入口文件
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Fuunio 启动中...');
    
    // ===== 1. 先加载游戏数据（必须等待完成） =====
    try {
        await loadGamesData();
        console.log('✅ 游戏数据已就绪');
    } catch (err) {
        console.error('❌ 游戏数据加载失败，页面将无法正常显示:', err.message);
        // 显示错误提示
        const grid = document.getElementById('gamesGrid');
        if (grid) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column:1/-1;padding:60px 20px;text-align:center;">
                    <div class="empty-icon">❌</div>
                    <h3 class="empty-title">数据加载失败</h3>
                    <p style="color:var(--steam-text-muted);">请检查网络连接后刷新页面</p>
                    <button onclick="location.reload()" style="margin-top:16px;padding:10px 30px;background:#5c7e10;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:700;">重新加载</button>
                </div>
            `;
        }
        return; // 停止执行
    }
    
    // ===== 2. 侧边栏 =====
    if (typeof initSidebarState === 'function') initSidebarState();
    
    // ===== 3. Auth =====
    if (typeof initAuth === 'function') initAuth();
    
    // ===== 4. 追踪访问 =====
    if (typeof trackDailyVisit === 'function') trackDailyVisit();
    
    // ===== 5. 渲染子页面 =====
    if (typeof renderCreativeMarket === 'function') renderCreativeMarket();
    if (typeof renderNewArrivals === 'function') renderNewArrivals();
    if (typeof renderInterestResources === 'function') renderInterestResources();
    
    // ===== 6. 语言 =====
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && typeof switchLanguage === 'function') {
        switchLanguage(savedLang);
    }
    
    // ===== 7. 游戏列表（数据已就绪） =====
    if (typeof renderSkeletons === 'function') renderSkeletons();
    
    if (typeof initPopularity === 'function') {
        initPopularity().finally(() => {
            if (typeof initBanner === 'function') initBanner();
            const games = typeof filterGames === 'function' ? filterGames() : [];
            if (typeof renderGames === 'function') {
                renderGames(games.slice(0, state.displayedGames || 12));
                if (typeof updateLoadMoreBtn === 'function') updateLoadMoreBtn(games.length);
            }
            if (typeof loadReactions === 'function') loadReactions();
        });
    }
    
    // ===== 8. 福福 =====
    if (typeof initFufuPet === 'function') initFufuPet();
    if (typeof initFufuInteractions === 'function') initFufuInteractions();
    
    // ===== 9. 关闭弹窗（点击背景） =====
    const gameModal = document.getElementById('gameModal');
    if (gameModal) {
        gameModal.addEventListener('click', function(e) {
            if (e.target === this && typeof closeModal === 'function') closeModal();
        });
    }
    
    const dailyBlindModal = document.getElementById('dailyBlindModal');
    if (dailyBlindModal) {
        dailyBlindModal.addEventListener('click', function(e) {
            if (e.target === this && typeof closeDailyBlindBox === 'function') closeDailyBlindBox();
        });
    }
    
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.addEventListener('click', function(e) {
            if (e.target === this && typeof closeAuthModal === 'function') closeAuthModal();
        });
    }
    
    // ===== 10. Auth 表单提交 =====
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', function(e) {
            if (typeof handleAuthSubmit === 'function') handleAuthSubmit(e);
        });
    }
    
    // ===== 11. ESC 键关闭弹窗 =====
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (typeof closeModal === 'function') closeModal();
            if (typeof closeDailyBlindBox === 'function') closeDailyBlindBox();
            if (typeof closeAuthModal === 'function') closeAuthModal();
            const dropdown = document.getElementById('langDropdown');
            if (dropdown) dropdown.classList.remove('active');
            if (window.innerWidth <= 1024 && typeof toggleSidebar === 'function') toggleSidebar(false);
        }
    });
    
    // ===== 12. 点击外部关闭语言下拉 =====
    document.addEventListener('click', function(e) {
        const dd = document.getElementById('langDropdown');
        const sw = document.getElementById('langSwitcher');
        if (dd && dd.classList.contains('active') && sw && !sw.contains(e.target)) {
            dd.classList.remove('active');
        }
    });
    
    // ===== 13. 窗口 resize =====
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            if (sidebar) sidebar.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        }
        if (typeof updateSidebarToggleLabel === 'function') updateSidebarToggleLabel();
    });
    
    // ===== 14. 滚动加载更多 =====
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            if (state.currentPage !== 'home') return;
            if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 300) {
                const games = typeof filterGames === 'function' ? filterGames() : [];
                if (state.displayedGames < games.length && !state.isLoading) {
                    if (typeof loadMoreGames === 'function') loadMoreGames();
                }
            }
        }, 150);
    });
    
    console.log('✅ Fuunio 启动完成');
});
