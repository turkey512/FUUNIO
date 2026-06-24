/* ============================================================
   modal.js - 游戏弹窗
   ============================================================ */

let activeModalGameId = null;
let activeModalMode = null;

function showGameInfo(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;
    const t = LANG[currentLang] || LANG.zh;
    
    activeModalGameId = game.id;
    activeModalMode = 'intro';
    
    document.getElementById('modalTitle').textContent = game.name;
    document.getElementById('modalIcon').textContent = game.icon;
    document.getElementById('modalDesc').innerHTML = renderGameIntroContent(game, t);
    document.getElementById('modalPlayBtn').textContent = t.playInNewWindow;
    document.getElementById('modalPlayBtn').onclick = () => { playGame(game.id); closeModal(); };
    document.getElementById('modalRerollBtn').style.display = 'none';
    document.getElementById('modalIntroBtn').style.display = 'none';
    document.getElementById('gameModal').classList.add('active');
    renderRecommendations(game.id);
}

function playGame(id) {
    const g = GAMES_DATA.find(g => g.id === id);
    if (!g) return;
    triggerFufuJumpSpin();
    incrementPlayCount(g.id);
    safeOpenExternal(g.url);
}

function closeModal() {
    document.getElementById('gameModal').classList.remove('active');
    document.getElementById('recommendGrid').innerHTML = '';
    document.getElementById('recommendSection').style.display = 'none';
    activeModalGameId = null;
    activeModalMode = null;
}

function safeOpenExternal(url) {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
}

function renderGameIntroContent(game, t) {
    const desc = t.gameDescs?.[game.name] || '';
    return `<p class="intro-summary">${desc}</p>`;
}

function getRecommendedGames(gameId, limit = 3) {
    const currentGame = GAMES_DATA.find(g => g.id === gameId);
    if (!currentGame) return [];
    const candidates = GAMES_DATA.filter(g => g.id !== gameId);
    candidates.forEach(g => {
        g.similarity = g.tags.filter(tag => currentGame.tags.includes(tag)).length;
    });
    candidates.sort((a, b) => b.similarity - a.similarity);
    const recommended = candidates.slice(0, limit);
    while (recommended.length < limit) {
        const remaining = candidates.slice(limit).sort(() => Math.random() - 0.5);
        if (remaining.length === 0) break;
        recommended.push(remaining.shift());
    }
    return recommended.slice(0, limit);
}

function renderRecommendations(gameId) {
    const grid = document.getElementById('recommendGrid');
    const section = document.getElementById('recommendSection');
    const recommended = getRecommendedGames(gameId, 3);
    if (recommended.length === 0) {
        section.style.display = 'none';
        return;
    }
    section.style.display = 'block';
    const t = LANG[currentLang] || LANG.zh;
    const titleEl = section.querySelector('.recommend-title');
    if (titleEl) titleEl.textContent = t.recommendTitle;
    grid.innerHTML = '';
    recommended.forEach(game => {
        const imageUrl = buildGameCoverDataUrl(game, '140x80');
        const card = document.createElement('div');
        card.className = 'recommend-card';
        card.innerHTML = `
            <div class="recommend-thumb" style="background-image:url('${imageUrl}');"></div>
            <div class="recommend-info">
                <div class="recommend-name">${game.name}</div>
                <div class="recommend-desc">${t.gameDescs?.[game.name] || ''}</div>
            </div>
        `;
        card.onclick = () => {
            closeModal();
            setTimeout(() => showGameInfo(game.id), 100);
        };
        grid.appendChild(card);
    });
}

function updateModalButtons() {
    const t = LANG[currentLang] || LANG.zh;
    const playBtn = document.getElementById('modalPlayBtn');
    const rerollBtn = document.getElementById('modalRerollBtn');
    const introBtn = document.getElementById('modalIntroBtn');
    if (playBtn) playBtn.textContent = t.playInNewWindow;
    if (rerollBtn) rerollBtn.innerHTML = t.rollAgain;
    if (introBtn) introBtn.innerHTML = t.gameIntro;
    const titleEl = document.getElementById('recommendSection')?.querySelector('.recommend-title');
    if (titleEl) titleEl.textContent = t.recommendTitle;
}

function refreshActiveGameModal() {
    if (activeModalGameId === null || activeModalGameId === undefined) return;
    const game = GAMES_DATA.find(g => g.id === activeModalGameId);
    if (!game) return;
    const t = LANG[currentLang] || LANG.zh;
    const titleEl = document.getElementById('modalTitle');
    if (titleEl) titleEl.textContent = activeModalMode === 'dice' ? '🎲 ' + game.name : game.name;
    const iconEl = document.getElementById('modalIcon');
    if (iconEl) iconEl.textContent = game.icon;
    const descEl = document.getElementById('modalDesc');
    if (descEl) {
        if (activeModalMode === 'intro') {
            descEl.innerHTML = renderGameIntroContent(game, t);
        } else {
            descEl.textContent = t.gameDescs?.[game.name] || '';
        }
    }
    renderRecommendations(game.id);
}

// 暴露到全局
window.showGameInfo = showGameInfo;
window.playGame = playGame;
window.closeModal = closeModal;
window.safeOpenExternal = safeOpenExternal;
window.renderRecommendations = renderRecommendations;
window.updateModalButtons = updateModalButtons;
window.refreshActiveGameModal = refreshActiveGameModal;
window.activeModalGameId = activeModalGameId;
window.activeModalMode = activeModalMode;

