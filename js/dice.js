/* ============================================================
   dice.js - 骰子随机（随缘玩）
   ============================================================ */

let lastDiceId = null;

function rollDice() {
    if (typeof setActivePage === 'function') setActivePage('home');
    
    const floatDiv = document.createElement('div');
    floatDiv.className = 'dice-float';
    floatDiv.innerHTML = `
        <div class="dice-cube">
            <div class="dice-face front">🎲</div>
            <div class="dice-face back">🎲</div>
            <div class="dice-face right">🎲</div>
            <div class="dice-face left">🎲</div>
            <div class="dice-face top">🎲</div>
            <div class="dice-face bottom">🎲</div>
        </div>
    `;
    document.body.appendChild(floatDiv);
    
    let game;
    do {
        game = GAMES_DATA[Math.floor(Math.random() * GAMES_DATA.length)];
    } while (game.id === lastDiceId && GAMES_DATA.length > 1);
    lastDiceId = game.id;
    
    setTimeout(() => {
        floatDiv.remove();
        const t = LANG[currentLang] || LANG.zh;
        activeModalGameId = game.id;
        activeModalMode = 'dice';
        const titleEl = document.getElementById('modalTitle');
        if (titleEl) titleEl.textContent = '🎲 ' + game.name;
        const iconEl = document.getElementById('modalIcon');
        if (iconEl) iconEl.textContent = game.icon;
        const descEl = document.getElementById('modalDesc');
        if (descEl) descEl.textContent = t.gameDescs?.[game.name] || '';
        const playBtn = document.getElementById('modalPlayBtn');
        if (playBtn) {
            playBtn.textContent = t.playInNewWindow;
            playBtn.onclick = () => { playGame(game.id); closeModal(); };
        }
        const rerollBtn = document.getElementById('modalRerollBtn');
        if (rerollBtn) {
            rerollBtn.innerHTML = t.rollAgain;
            rerollBtn.style.display = 'block';
            rerollBtn.onclick = rollDice;
        }
        const introBtn = document.getElementById('modalIntroBtn');
        if (introBtn) {
            introBtn.style.display = 'block';
            introBtn.innerHTML = t.gameIntro;
            introBtn.onclick = () => showGameInfo(game.id);
        }
        document.getElementById('gameModal').classList.add('active');
        renderRecommendations(game.id);
        document.querySelectorAll('.tabbar-item').forEach(t => t.classList.remove('active'));
        const tabDice = document.getElementById('tabDice');
        if (tabDice) tabDice.classList.add('active');
    }, 1000);
}

// 暴露到全局
window.rollDice = rollDice;
window.lastDiceId = lastDiceId;

