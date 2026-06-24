/* ============================================================
   sidebar.js - 侧边栏
   ============================================================ */

function toggleSidebar(show) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (!sidebar) return;
    
    if (window.innerWidth > 1024) {
        const shouldExpand = show !== undefined ? show : !document.body.classList.contains('sidebar-expanded');
        document.body.classList.toggle('sidebar-expanded', shouldExpand);
        localStorage.setItem('sidebarExpanded', shouldExpand ? 'true' : 'false');
        sidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        updateSidebarToggleLabel();
        return;
    }
    
    const should = show !== undefined ? show : !sidebar.classList.contains('active');
    sidebar.classList.toggle('active', should);
    if (overlay) overlay.classList.toggle('active', should);
    updateSidebarToggleLabel();
}

function updateSidebarToggleLabel() {
    const btn = document.getElementById('sidebarToggleBtn');
    if (!btn) return;
    const t = LANG[currentLang] || LANG.zh;
    const desktop = window.innerWidth > 1024;
    if (desktop) {
        const expanded = document.body.classList.contains('sidebar-expanded');
        btn.setAttribute('aria-label', expanded ? t.sidebarToggleClose : t.sidebarToggleOpen);
        btn.setAttribute('title', expanded ? t.sidebarToggleClose : t.sidebarToggleOpen);
    } else {
        const active = document.getElementById('sidebar')?.classList.contains('active');
        btn.setAttribute('aria-label', active ? t.sidebarToggleClose : t.sidebarToggleOpen);
        btn.setAttribute('title', active ? t.sidebarToggleClose : t.sidebarToggleOpen);
    }
}

function initSidebarState() {
    const saved = localStorage.getItem('sidebarExpanded');
    document.body.classList.toggle('sidebar-expanded', saved === 'true');
    updateSidebarToggleLabel();
}

// 暴露到全局
window.toggleSidebar = toggleSidebar;
window.updateSidebarToggleLabel = updateSidebarToggleLabel;
window.initSidebarState = initSidebarState;

