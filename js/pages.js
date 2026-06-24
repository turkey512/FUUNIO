/* ============================================================
   pages.js - 页面导航（新品尝鲜/创意集市/兴趣营地/游戏公海）
   ============================================================ */

const CREATIVE_WORKS = [
    { name: '张雪峰快跑', author: '', description: '操控角色一路冲刺闪避，在快节奏关卡里挑战反应和路线判断。', tags: ['休闲', '跑酷', '创意'], url: 'https://ottomate.games/zxf/' },
    { name: '曾经的王', author: '', description: '一款带有叙事感的创意网页小游戏，适合短时间体验独特氛围。', tags: ['剧情', '创意', '休闲'], url: 'https://www.bilibili.com/toy/King/index.html' }
];

const NEW_GAME_SUBMISSIONS = [
    { name: '暂无首发作品', author: 'Fuunio', description: '这里会优先展示通过审核的开发者新作。现在可以点击上方按钮提交你的 io 类 HTML 游戏。', tags: ['占位', '开发者投稿'], url: 'https://x.tduckcloud.com/s/zyz5GWYf' }
];

const MK48_RESOURCES = [
    {
        title: '机制详解',
        summary: '从视野、船体、武器、升级路线到战斗节奏，帮助新玩家先理解 mk48.io 的核心规则。',
        detail: '适合先读：弄清楚船只成长、交战距离、火力覆盖和团队协作后，再进入实战会少走弯路。',
        url: 'https://forum.mk49.cyou/tutorial/zh.html'
    },
    {
        title: '新手指南',
        summary: '面向刚入坑玩家的上手路线，重点关注开局选择、基础操作、资源判断和避免被集火。',
        detail: '建议把它当成第一份清单：先熟悉移动和开火，再学习何时撤退、何时追击、何时加入队友战线。',
        url: 'https://docs.qq.com/doc/DSmR4aE5RaXhFZEtE'
    },
    {
        title: '基地冲榜',
        summary: '围绕基地玩法的目标拆解，适合已经会基础操作、想进一步提升效率和排名的玩家。',
        detail: '核心是节奏管理：路线规划、风险控制、队伍分工和战斗收益都要一起看，不能只盯单次击杀。',
        url: 'https://docs.qq.com/doc/DUllwSGl5d1lPUkxG?dver='
    },
    {
        title: '舰艇教程',
        summary: '整理自"鱼鱼将"的舰艇教学帖，保留教程要点入口，不附带评论内容。',
        detail: '当前环境无法稳定抓取论坛正文，页面先提供人工编辑摘要和原帖入口；后续可把帖子正文提取后替换到这个 detail 字段。',
        url: 'https://mk48by049.mbbs.cc/#/thread/detail/6126'
    }
];

function setActivePage(page) {
    state.currentPage = page;
    const homePage = document.getElementById('homePage');
    const newArrivalsPage = document.getElementById('newArrivalsPage');
    const gameSeaPage = document.getElementById('gameSeaPage');
    const creativeMarketPage = document.getElementById('creativeMarketPage');
    const interestPage = document.getElementById('interestPage');
    
    if (homePage) homePage.classList.toggle('active', page === 'home');
    if (newArrivalsPage) newArrivalsPage.classList.toggle('active', page === 'newArrivals');
    if (gameSeaPage) gameSeaPage.classList.toggle('active', page === 'gameSea');
    if (creativeMarketPage) creativeMarketPage.classList.toggle('active', page === 'creativeMarket');
    if (interestPage) interestPage.classList.toggle('active', page === 'interest');
    
    document.querySelectorAll('.tabbar-item').forEach(i => i.classList.remove('active'));
    if (page === 'newArrivals') {
        const tab = document.getElementById('tabNewArrivals');
        if (tab) tab.classList.add('active');
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    } else if (page === 'gameSea') {
        const tab = document.getElementById('tabGameSea');
        if (tab) tab.classList.add('active');
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    } else if (page === 'creativeMarket') {
        const tab = document.getElementById('tabCreativeMarket');
        if (tab) tab.classList.add('active');
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    } else if (page === 'interest') {
        const tab = document.getElementById('tabInterestCamp');
        if (tab) tab.classList.add('active');
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    } else {
        const tab = document.getElementById('tabHome');
        if (tab) tab.classList.add('active');
    }
}

function renderCreativeMarket() {
    const grid = document.getElementById('creativeMarketGrid');
    if (!grid) return;
    const t = LANG[currentLang] || LANG.zh;
    grid.innerHTML = '';
    
    if (!CREATIVE_WORKS.length) {
        grid.innerHTML = `<div class="creative-empty-state">${t.creativeEmpty || '暂无作品'}</div>`;
        return;
    }
    
    CREATIVE_WORKS.forEach(work => {
        const card = document.createElement('article');
        card.className = 'creative-card';
        card.innerHTML = `
            <h3 class="creative-card-title">${work.name}</h3>
            <p class="creative-card-author">@${work.author || 'anonymous'}</p>
            <p class="creative-card-desc">${work.description || ''}</p>
            <div class="creative-tags">${work.tags.map(tag => `<span class="creative-tag">${tag}</span>`).join('')}</div>
            <a class="creative-play-btn" href="${work.url}" target="_blank" rel="noopener noreferrer">${t.playExperience || '立即体验'}</a>
        `;
        grid.appendChild(card);
    });
}

function renderNewArrivals() {
    const grid = document.getElementById('newGamesGrid');
    if (!grid) return;
    const t = LANG[currentLang] || LANG.zh;
    grid.innerHTML = '';
    
    if (!NEW_GAME_SUBMISSIONS.length) {
        grid.innerHTML = `<div class="new-games-empty">${t.newGamesEmpty || '暂无新游戏'}</div>`;
        return;
    }
    
    NEW_GAME_SUBMISSIONS.forEach(game => {
        const card = document.createElement('article');
        card.className = 'new-game-card';
        card.innerHTML = `
            <h3 class="new-game-title">${game.name}</h3>
            <p class="new-game-author">@${game.author || 'anonymous'}</p>
            <p class="new-game-desc">${game.description || ''}</p>
            <div class="new-game-tags">${game.tags.map(tag => `<span class="new-game-tag">${tag}</span>`).join('')}</div>
            <a class="new-game-play" href="${game.url}" target="_blank" rel="noopener noreferrer">${t.playExperience || '立即体验'}</a>
        `;
        grid.appendChild(card);
    });
}

function renderInterestResources() {
    const grid = document.getElementById('interestResourceGrid');
    if (!grid) return;
    const t = LANG[currentLang] || LANG.zh;
    grid.innerHTML = '';
    
    MK48_RESOURCES.forEach(item => {
        const card = document.createElement('article');
        card.className = 'interest-info-card';
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <details>
                <summary>${t.detailsSummary || '展开详情'}</summary>
                <p>${item.detail}</p>
            </details>
            <a class="interest-resource-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${t.viewOriginal || '查看原文'}</a>
        `;
        grid.appendChild(card);
    });
}

function showNewArrivals() {
    setActivePage('newArrivals');
    if (typeof closeModal === 'function') closeModal();
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('active');
    renderNewArrivals();
    if (window.innerWidth <= 1024 && typeof toggleSidebar === 'function') toggleSidebar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showInterestCamp() {
    setActivePage('interest');
    if (typeof closeModal === 'function') closeModal();
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('active');
    renderInterestResources();
    if (window.innerWidth <= 1024 && typeof toggleSidebar === 'function') toggleSidebar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showGameSea() {
    setActivePage('gameSea');
    if (typeof closeModal === 'function') closeModal();
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('active');
    if (window.innerWidth <= 1024 && typeof toggleSidebar === 'function') toggleSidebar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCreativeMarket() {
    setActivePage('creativeMarket');
    if (typeof closeModal === 'function') closeModal();
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('active');
    renderCreativeMarket();
    if (window.innerWidth <= 1024 && typeof toggleSidebar === 'function') toggleSidebar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 暴露到全局
window.setActivePage = setActivePage;
window.renderCreativeMarket = renderCreativeMarket;
window.renderNewArrivals = renderNewArrivals;
window.renderInterestResources = renderInterestResources;
window.showNewArrivals = showNewArrivals;
window.showInterestCamp = showInterestCamp;
window.showGameSea = showGameSea;
window.showCreativeMarket = showCreativeMarket;
window.CREATIVE_WORKS = CREATIVE_WORKS;
window.NEW_GAME_SUBMISSIONS = NEW_GAME_SUBMISSIONS;
window.MK48_RESOURCES = MK48_RESOURCES;

