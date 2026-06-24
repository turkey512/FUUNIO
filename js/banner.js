/* ============================================================
   banner.js - 轮播图
   ============================================================ */

let currentBanner = 0;
let bannerInterval = null;

function buildBannerSlides() {
    const sorted = [...GAMES_DATA]
        .sort((a, b) => getGamePlayCount(b.id) - getGamePlayCount(a.id))
        .slice(0, 3);
    
    const wrapper = document.getElementById('bannerWrapper');
    const indicators = document.getElementById('bannerIndicators');
    if (!wrapper || !indicators) return;
    
    wrapper.innerHTML = '';
    indicators.innerHTML = '';
    
    sorted.forEach((game, index) => {
        const imageUrl = buildGameCoverDataUrl(game, '1200x600');
        const t = LANG[currentLang] || LANG.zh;
        
        const slide = document.createElement('div');
        slide.className = 'banner-slide';
        slide.style.backgroundImage = `url('${imageUrl}')`;
        slide.innerHTML = `
            <div class="banner-content">
                <span class="banner-tag">🔥 ${t.featured} Top ${index + 1}</span>
                <h2 class="banner-title">${game.name}</h2>
                <p class="banner-desc">${t.gameDescs?.[game.name] || ''}</p>
                <button class="banner-btn" onclick="playGame(${game.id})">${t.playNow} ▶</button>
            </div>
        `;
        wrapper.appendChild(slide);
        
        const indicator = document.createElement('span');
        indicator.className = 'banner-indicator' + (index === 0 ? ' active' : '');
        indicator.onclick = () => goToBanner(index);
        indicators.appendChild(indicator);
    });
}

function showBanner(i) {
    const wrapper = document.getElementById('bannerWrapper');
    if (!wrapper) return;
    const total = wrapper.children.length;
    if (total === 0) return;
    if (i >= total) i = 0;
    if (i < 0) i = total - 1;
    wrapper.style.transform = `translateX(-${i * 100}%)`;
    document.querySelectorAll('.banner-indicator').forEach((el, idx) => {
        el.classList.toggle('active', idx === i);
    });
    currentBanner = i;
}

function nextBanner() { showBanner(currentBanner + 1); }
function prevBanner() { showBanner(currentBanner - 1); }
function goToBanner(i) { showBanner(i); }

function startBannerAutoPlay() {
    stopBannerAutoPlay();
    bannerInterval = setInterval(nextBanner, 4000);
}

function stopBannerAutoPlay() {
    if (bannerInterval) {
        clearInterval(bannerInterval);
        bannerInterval = null;
    }
}

function initBanner() {
    buildBannerSlides();
    startBannerAutoPlay();
    const carousel = document.getElementById('bannerCarousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopBannerAutoPlay);
        carousel.addEventListener('mouseleave', startBannerAutoPlay);
    }
}

// 暴露到全局
window.buildBannerSlides = buildBannerSlides;
window.showBanner = showBanner;
window.nextBanner = nextBanner;
window.prevBanner = prevBanner;
window.goToBanner = goToBanner;
window.initBanner = initBanner;

