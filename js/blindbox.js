/* ============================================================
   blindbox.js - 每日盲盒
   ============================================================ */

const gamePool = [
    { name: '坦克大作战', description: '多人坦克竞技场，升级火力和机动性。', link: 'https://arras.io/' },
    { name: '自由钢琴', description: '打开浏览器就能弹奏的在线钢琴。', link: 'https://www.autopiano.cn/' },
    { name: 'Bloxd.IO', description: '方块世界里的多人创造和竞技体验。', link: 'https://bloxd.io/' },
    { name: 'Narrow One', description: '快节奏弓箭多人对战。', link: 'https://narrow.one/' },
    { name: '2048', description: '经典数字合成益智游戏。', link: 'https://2048game.com/' }
];

let blindSelectedGame = null;
let blindTimers = [];

function getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function clearBlindTimers() {
    blindTimers.forEach(t => clearTimeout(t));
    blindTimers = [];
}

function openDailyBlindBox() {
    const savedDate = localStorage.getItem('blindbox_date');
    const savedResult = localStorage.getItem('blindbox_result');
    const modal = document.getElementById('dailyBlindModal');
    if (!modal) return;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    clearBlindTimers();
    if (typeof closeModal === 'function') closeModal();
    
    if (savedDate === getTodayKey() && savedResult) {
        try {
            blindSelectedGame = JSON.parse(savedResult);
            showBlindResult(blindSelectedGame);
            return;
        } catch (e) {
            localStorage.removeItem('blindbox_result');
        }
    }
    
    blindSelectedGame = gamePool[Math.floor(Math.random() * gamePool.length)];
    const box = document.getElementById('blindBox');
    if (box) {
        const span = box.querySelector('span');
        if (span) span.textContent = '?';
        box.classList.remove('shake', 'explode');
        box.style.display = 'flex';
    }
    const hint = document.getElementById('blindBoxHint');
    if (hint) hint.style.display = 'block';
    const card = document.getElementById('blindResultCard');
    if (card) {
        card.classList.remove('active');
        card.innerHTML = '';
    }
}

function closeDailyBlindBox() {
    clearBlindTimers();
    const modal = document.getElementById('dailyBlindModal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }
}

function openBlindBoxResult() {
    const box = document.getElementById('blindBox');
    if (!blindSelectedGame || box.classList.contains('shake')) return;
    
    localStorage.setItem('blindbox_date', getTodayKey());
    localStorage.setItem('blindbox_result', JSON.stringify(blindSelectedGame));
    
    box.classList.add('shake');
    setTimeout(() => {
        box.classList.add('explode');
        const span = box.querySelector('span');
        if (span) span.textContent = '🎉';
    }, 400);
    setTimeout(() => showBlindResult(blindSelectedGame), 700);
}

function showBlindResult(game) {
    const card = document.getElementById('blindResultCard');
    if (!card) return;
    const t = LANG[currentLang] || LANG.zh;
    const matchedGame = GAMES_DATA.find(g => g.name === game.name);
    const gameId = matchedGame ? matchedGame.id : null;
    
    card.innerHTML = `
        <div class="blind-result-cover">${game.name.charAt(0) || '?'}</div>
        <h2 class="blind-result-title">${game.name}</h2>
        <p class="blind-result-desc">${t.gameDescs?.[game.name] || game.description || t.blindFallbackDesc || ''}</p>
        <div class="blind-result-actions">
            <a class="blind-play-link" href="${game.link}" target="_blank" rel="noopener noreferrer">${t.blindPlay || '立即开玩'}</a>
            <button class="blind-share-btn" onclick="if(window.showGameInfo) showGameInfo(${gameId}); closeDailyBlindBox();">${t.gameIntro || '游戏介绍'}</button>
        </div>
    `;
    card.classList.add('active');
    const box = document.getElementById('blindBox');
    if (box) box.style.display = 'none';
    const hint = document.getElementById('blindBoxHint');
    if (hint) hint.style.display = 'none';
}

// 暴露到全局
window.openDailyBlindBox = openDailyBlindBox;
window.closeDailyBlindBox = closeDailyBlindBox;
window.openBlindBoxResult = openBlindBoxResult;
window.showBlindResult = showBlindResult;

