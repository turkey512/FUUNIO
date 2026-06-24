/* ============================================================
   games.js - 加载游戏数据 + 所有游戏相关函数
   ============================================================ */

// ===== 状态 =====
let GAMES_DATA = [];
let gamesLoaded = false;
let gamesLoading = false;
let _pendingResolvers = [];

// ===== 状态对象 =====
const state = {
    currentCategory: 'all',
    searchQuery: '',
    displayedGames: 12,
    isLoading: false,
    currentPage: 'home'
};

// ===== 加载游戏数据 =====
async function loadGamesData() {
    if (gamesLoaded && GAMES_DATA.length > 0) {
        return GAMES_DATA;
    }
    
    if (gamesLoading) {
        return new Promise((resolve) => {
            _pendingResolvers.push(resolve);
        });
    }
    
    gamesLoading = true;
    
    try {
        const response = await fetch('js/data/games.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        GAMES_DATA = await response.json();
        gamesLoaded = true;
        console.log(`✅ 游戏数据加载成功，共 ${GAMES_DATA.length} 款游戏`);
    } catch (err) {
        console.error('❌ 加载游戏数据失败:', err.message);
        throw err;
    } finally {
        gamesLoading = false;
        _pendingResolvers.forEach(resolve => resolve(GAMES_DATA));
        _pendingResolvers = [];
    }
    
    window.GAMES_DATA = GAMES_DATA;
    return GAMES_DATA;
}

function waitForGamesData() {
    if (gamesLoaded && GAMES_DATA.length > 0) {
        return Promise.resolve(GAMES_DATA);
    }
    if (gamesLoading) {
        return new Promise((resolve) => {
            _pendingResolvers.push(resolve);
        });
    }
    return loadGamesData();
}

function isGamesDataReady() {
    return gamesLoaded && GAMES_DATA.length > 0;
}

function getGamesData() {
    return GAMES_DATA;
}

// ===== 游戏过滤 =====
function filterGames() {
    if (!gamesLoaded || GAMES_DATA.length === 0) {
        console.warn('⚠️ 游戏数据尚未加载，返回空数组');
        return [];
    }
    
    let filtered = [...GAMES_DATA];
    if (state.currentCategory === 'hot') {
        filtered = filtered.filter(g => g.isHot);
    } else if (state.currentCategory === 'new') {
        filtered = filtered.filter(g => g.isNew);
    } else if (state.currentCategory !== 'all') {
        filtered = filtered.filter(g => g.category === state.currentCategory);
    }
    
    if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        filtered = filtered.filter(g => g.name.toLowerCase().includes(q));
    }
    return filtered;
}

function getGamesCount() {
    return GAMES_DATA.length;
}

function getGameById(id) {
    return GAMES_DATA.find(g => g.id === id);
}

// ===== 游戏封面生成 =====
function parseImageSize(size) {
    const parts = String(size || '400x240').split('x').map(n => parseInt(n, 10));
    return { w: parts[0] || 400, h: parts[1] || 240 };
}

function svgText(value) {
    return String(value || '').replace(/[&<>"']/g, function(ch) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
}

function getGameCoverTheme(game) {
    const themes = {
        shooting: ['#0ea5e9', '#7c3aed', '#020617', '✦'],
        action: ['#ef4444', '#f59e0b', '#111827', '✧'],
        survival: ['#22c55e', '#0f766e', '#052e16', '◆'],
        casual: ['#38bdf8', '#a855f7', '#0f172a', '●'],
        io: ['#06b6d4', '#2563eb', '#082f49', '◎'],
        strategy: ['#a855f7', '#6366f1', '#1e1b4b', '◇'],
        racing: ['#f97316', '#eab308', '#1c1917', '▲']
    };
    return themes[game.category] || themes.casual;
}

function getGameCoverIcon(game) {
    const fallback = {
        shooting: '🎯',
        action: '⚡',
        survival: '🛡️',
        casual: '🎮',
        io: '🌐',
        strategy: '♟️',
        racing: '🏁'
    };
    return (game.icon && game.icon.trim()) ? game.icon : (fallback[game.category] || '🎮');
}

function buildGameCoverDataUrl(game, size) {
    size = size || '400x240';
    var _a = parseImageSize(size),
        w = _a.w,
        h = _a.h;
    var _b = getGameCoverTheme(game),
        c1 = _b[0],
        c2 = _b[1],
        c3 = _b[2],
        mark = _b[3];
    var icon = svgText(getGameCoverIcon(game));
    var name = svgText(game.name);
    var tag = svgText((game.tags && game.tags[0]) || '');
    var titleSize = Math.max(18, Math.round(h * 0.115));
    var tagSize = Math.max(11, Math.round(h * 0.055));
    var iconSize = Math.max(42, Math.round(h * 0.34));
    
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">' +
        '<defs>' +
        '<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="' + c1 + '"/>' +
        '<stop offset="0.52" stop-color="' + c2 + '"/>' +
        '<stop offset="1" stop-color="' + c3 + '"/>' +
        '</linearGradient>' +
        '<radialGradient id="glow" cx="30%" cy="20%" r="70%">' +
        '<stop offset="0" stop-color="#ffffff" stop-opacity="0.28"/>' +
        '<stop offset="1" stop-color="#ffffff" stop-opacity="0"/>' +
        '</radialGradient>' +
        '<filter id="softShadow"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000" flood-opacity="0.35"/></filter>' +
        '</defs>' +
        '<rect width="' + w + '" height="' + h + '" rx="' + Math.round(h * 0.08) + '" fill="url(#bg)"/>' +
        '<rect width="' + w + '" height="' + h + '" rx="' + Math.round(h * 0.08) + '" fill="url(#glow)"/>' +
        '<circle cx="' + Math.round(w * 0.83) + '" cy="' + Math.round(h * 0.08) + '" r="' + Math.round(h * 0.34) + '" fill="#ffffff" opacity="0.08"/>' +
        '<circle cx="' + Math.round(w * 0.12) + '" cy="' + Math.round(h * 0.88) + '" r="' + Math.round(h * 0.38) + '" fill="#000000" opacity="0.13"/>' +
        '<text x="' + Math.round(w * 0.08) + '" y="' + Math.round(h * 0.18) + '" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="' + tagSize + '" font-weight="800" fill="#dbeafe" opacity="0.92">' + tag + '</text>' +
        '<text x="' + Math.round(w * 0.09) + '" y="' + Math.round(h * 0.56) + '" font-size="' + iconSize + '" filter="url(#softShadow)">' + icon + '</text>' +
        '<text x="' + Math.round(w * 0.08) + '" y="' + Math.round(h * 0.82) + '" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="' + titleSize + '" font-weight="900" fill="#ffffff">' + name + '</text>' +
        '<text x="' + Math.round(w * 0.88) + '" y="' + Math.round(h * 0.80) + '" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="' + Math.round(h * 0.16) + '" font-weight="900" fill="#ffffff" opacity="0.18">' + mark + '</text>' +
        '</svg>';
    
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

// ===== 渲染游戏列表 =====
function renderGames(games, append) {
    append = append || false;
    var grid = document.getElementById('gamesGrid');
    if (!grid) return;
    if (!append) grid.innerHTML = '';
    
    var t = window.LANG ? (window.LANG[window.currentLang] || window.LANG.zh) : { noResults: '未找到相关游戏' };
    
    if (games.length === 0 && !append) {
        grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🎮</div><h3 class="empty-title">' + t.noResults + '</h3></div>';
        return;
    }
    
    games.forEach(function(game) {
        if (grid.querySelector('[data-game-id="' + game.id + '"]')) return;
        
        var pop = typeof getGamePlayCount === 'function' ? getGamePlayCount(game.id) : 0;
        var imageUrl = buildGameCoverDataUrl(game);
        var t2 = window.LANG ? (window.LANG[window.currentLang] || window.LANG.zh) : {};
        
        var card = document.createElement('div');
        card.className = 'game-card';
        card.setAttribute('data-game-id', game.id);
        card.innerHTML = 
            '<div class="game-thumb" style="background-image:url(\'' + imageUrl + '\');">' +
            '<div class="popularity-badge">🔥 ' + pop.toLocaleString() + ' ' + (t2.popularityPlayed || '人玩过') + '</div>' +
            '<div class="popularity-num-detailed">' + pop + ' ' + (t2.popularityTimes || '次游玩') + '</div>' +
            '<div class="card-overlay">' +
            '<button class="card-btn card-btn-info" onclick="event.stopPropagation();window.showGameInfo(' + game.id + ')">📖 ' + (t2.info || '介绍') + '</button>' +
            '<button class="card-btn card-btn-play" onclick="event.stopPropagation();window.playGame(' + game.id + ')">▶ ' + (t2.play || '立即玩') + '</button>' +
            '</div>' +
            '</div>' +
            '<div class="game-info">' +
            '<h3 class="game-title">' + game.name + '</h3>' +
            '<div class="game-meta"><span class="game-category">' + game.tags[0] + '</span></div>' +
            '<div class="game-reactions" data-game-id="' + game.id + '">' +
            '<button class="reaction-item" type="button" data-reaction="love" aria-label="love" aria-pressed="false">😍 <span class="count">0</span></button>' +
            '<button class="reaction-item" type="button" data-reaction="meh" aria-label="meh" aria-pressed="false">😐 <span class="count">0</span></button>' +
            '<button class="reaction-item" type="button" data-reaction="angry" aria-label="angry" aria-pressed="false">😡 <span class="count">0</span></button>' +
            '</div>' +
            '</div>';
        
        card.addEventListener('click', function(e) {
            if (e.target.closest('.card-btn') || e.target.closest('.reaction-item')) return;
            if (window.innerWidth <= 1024) {
                var overlay = card.querySelector('.card-overlay');
                document.querySelectorAll('.game-card.overlay-open').forEach(function(c) {
                    if (c !== card) {
                        c.classList.remove('overlay-open');
                        var openedOverlay = c.querySelector('.card-overlay');
                        if (openedOverlay) openedOverlay.classList.remove('show-overlay');
                    }
                });
                card.classList.add('overlay-open');
                overlay.classList.add('show-overlay');
            }
        });
        
        grid.appendChild(card);
        
        card.querySelectorAll('.reaction-item').forEach(function(item) {
            item.addEventListener('click', function(e) {
                if (typeof window.handleReactionClick === 'function') {
                    window.handleReactionClick(e);
                }
            });
        });
    });
    
    var countEl = document.getElementById('gameCount');
    if (countEl) {
        var filtered = filterGames();
        countEl.textContent = '(' + filtered.length + ')';
    }
}

// ===== 骨架屏 =====
function renderSkeletons(count) {
    count = count || 8;
    var grid = document.getElementById('gamesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    for (var i = 0; i < count; i++) {
        var d = document.createElement('div');
        d.className = 'skeleton-card';
        d.innerHTML = 
            '<div class="skeleton skeleton-thumb"></div>' +
            '<div class="skeleton-info">' +
            '<div class="skeleton skeleton-title"></div>' +
            '<div class="skeleton skeleton-meta"></div>' +
            '</div>';
        grid.appendChild(d);
    }
}

// ===== 加载更多 =====
function updateLoadMoreBtn(total) {
    var el = document.getElementById('loadMore');
    if (el) {
        el.style.display = state.displayedGames >= total ? 'none' : 'block';
    }
}

function loadMoreGames() {
    if (state.isLoading) return;
    state.isLoading = true;
    var btn = document.querySelector('.load-more-btn');
    var orig = btn ? btn.textContent : '加载更多';
    var t = window.LANG ? (window.LANG[window.currentLang] || window.LANG.zh) : { loading: '加载中...' };
    if (btn) btn.textContent = t.loading;
    
    setTimeout(function() {
        state.displayedGames += 8;
        var games = filterGames();
        renderGames(games.slice(0, state.displayedGames), true);
        updateLoadMoreBtn(games.length);
        if (typeof window.loadReactions === 'function') window.loadReactions();
        state.isLoading = false;
        if (btn) btn.textContent = orig;
    }, 400);
}

// ===== 分类筛选 =====
function filterByCategory(cat) {
    if (typeof window.setActivePage === 'function') window.setActivePage('home');
    state.currentCategory = cat;
    state.searchQuery = '';
    var input = document.getElementById('searchInput');
    if (input) input.value = '';
    state.displayedGames = 12;
    document.querySelectorAll('.sidebar-item').forEach(function(i) {
        i.classList.toggle('active', i.dataset.category === cat);
    });
    renderSkeletons();
    setTimeout(function() {
        var games = filterGames();
        renderGames(games.slice(0, state.displayedGames));
        updateLoadMoreBtn(games.length);
        if (typeof window.loadReactions === 'function') window.loadReactions();
    }, 200);
    if (window.innerWidth <= 1024 && typeof window.toggleSidebar === 'function') window.toggleSidebar(false);
}

// ===== 搜索 =====
function handleSearch(q) {
    if (typeof window.setActivePage === 'function') window.setActivePage('home');
    state.searchQuery = q.trim();
    state.displayedGames = 12;
    renderSkeletons();
    setTimeout(function() {
        var games = filterGames();
        renderGames(games.slice(0, state.displayedGames));
        updateLoadMoreBtn(games.length);
        if (typeof window.loadReactions === 'function') window.loadReactions();
    }, 200);
}

// ===== 回到首页 =====
function resetToHome() {
    if (typeof window.setActivePage === 'function') window.setActivePage('home');
    state.currentCategory = 'all';
    state.searchQuery = '';
    var input = document.getElementById('searchInput');
    if (input) input.value = '';
    state.displayedGames = 12;
    document.querySelectorAll('.sidebar-item').forEach(function(i) {
        i.classList.toggle('active', i.dataset.category === 'all');
    });
    renderSkeletons();
    setTimeout(function() {
        var games = filterGames();
        renderGames(games.slice(0, state.displayedGames));
        updateLoadMoreBtn(games.length);
        if (typeof window.loadReactions === 'function') window.loadReactions();
    }, 200);
}

// ===== 暴露到全局 =====
window.GAMES_DATA = GAMES_DATA;
window.loadGamesData = loadGamesData;
window.waitForGamesData = waitForGamesData;
window.isGamesDataReady = isGamesDataReady;
window.getGamesData = getGamesData;
window.filterGames = filterGames;
window.getGamesCount = getGamesCount;
window.getGameById = getGameById;
window.buildGameCoverDataUrl = buildGameCoverDataUrl;
window.renderGames = renderGames;
window.renderSkeletons = renderSkeletons;
window.updateLoadMoreBtn = updateLoadMoreBtn;
window.loadMoreGames = loadMoreGames;
window.filterByCategory = filterByCategory;
window.handleSearch = handleSearch;
window.resetToHome = resetToHome;
window.state = state;