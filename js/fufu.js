/* ============================================================
   fufu.js - 福福宠物
   ============================================================ */

const FUFU_MESSAGES = ['摸摸福福，这把必赢！', '加油鸭！', '你真好～', '福气满满！', '今天运气爆棚！'];

const fufuPet = {
    visible: localStorage.getItem('fufuPetVisible') !== 'false',
    wasHidden: false,
    bubbleTimer: null,
    jumpTimer: null
};

function initFufuPet() {
    updateFufuAuthState();
}

function updateFufuAuthState() {
    const widget = document.getElementById('fufuWidget');
    const toggle = document.getElementById('fufuToggleBtn');
    if (!widget) return;
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    const unlocked = Boolean(user);
    widget.classList.toggle('is-unlocked', unlocked);
    widget.classList.toggle('is-locked', !unlocked);
    widget.classList.toggle('is-visible', unlocked && fufuPet.visible);
    widget.classList.toggle('is-hidden', unlocked && !fufuPet.visible);
    if (toggle) {
        toggle.innerHTML = fufuPet.visible ? '✕' : '福';
        toggle.setAttribute('aria-label', fufuPet.visible ? '隐藏福福' : '显示福福');
        toggle.setAttribute('title', fufuPet.visible ? '隐藏福福' : '显示福福');
    }
}

function toggleFufuPet() {
    fufuPet.visible = !fufuPet.visible;
    localStorage.setItem('fufuPetVisible', fufuPet.visible ? 'true' : 'false');
    updateFufuAuthState();
    if (fufuPet.visible) showFufuBubble('福福回来啦！', 1600);
}

function triggerFufuJumpSpin() {
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    if (!user || !fufuPet.visible) return;
    const stage = document.getElementById('fufuStage');
    if (!stage) return;
    stage.classList.remove('is-jumping');
    void stage.offsetWidth;
    stage.classList.add('is-jumping');
    clearTimeout(fufuPet.jumpTimer);
    fufuPet.jumpTimer = setTimeout(() => stage.classList.remove('is-jumping'), 900);
}

function showFufuBubble(text, duration = 2500) {
    const bubble = document.getElementById('fufuBubble');
    if (!bubble) return;
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    if (!user || !fufuPet.visible) return;
    bubble.textContent = text;
    bubble.classList.add('active');
    clearTimeout(fufuPet.bubbleTimer);
    fufuPet.bubbleTimer = setTimeout(() => bubble.classList.remove('active'), duration);
}

function handleFufuClick() {
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    if (!user) {
        if (typeof openAuthModal === 'function') openAuthModal();
        return;
    }
    triggerFufuJumpSpin();
    const message = FUFU_MESSAGES[Math.floor(Math.random() * FUFU_MESSAGES.length)];
    showFufuBubble(message, 2500);
}

function showFufuWelcomeBack() {
    showFufuBubble('福气满满！', 1800);
}

function initFufuInteractions() {
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[target="_blank"], .card-btn-play, .blind-play-link');
        if (link) triggerFufuJumpSpin();
    });
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            fufuPet.wasHidden = true;
            return;
        }
        if (fufuPet.wasHidden) {
            fufuPet.wasHidden = false;
            showFufuWelcomeBack();
        }
    });
}

// 暴露到全局
window.fufuPet = fufuPet;
window.initFufuPet = initFufuPet;
window.updateFufuAuthState = updateFufuAuthState;
window.toggleFufuPet = toggleFufuPet;
window.triggerFufuJumpSpin = triggerFufuJumpSpin;
window.showFufuBubble = showFufuBubble;
window.handleFufuClick = handleFufuClick;
window.initFufuInteractions = initFufuInteractions;

