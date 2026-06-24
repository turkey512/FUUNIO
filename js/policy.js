/* ============================================================
   policy.js - 政策弹窗（关于/联系我们/FAQ/条款/隐私/Cookie）
   ============================================================ */

var SITE_POLICIES = {
    about: {
        title: '关于本站',
        body: [
            'Fuunio 是一个专注于 .io 游戏及轻量网页游戏的精品导航平台。',
            '我们不存储、不托管任何游戏文件，仅提供游戏官方网站的链接入口。',
            '我们的定位是：做一个有品味、可信赖的游戏发现工具。'
        ]
    },
    contact: {
        title: '联系我们',
        body: [
            '联系邮箱：fuunio@qq.com',
            '我们很期待听到你的声音——无论是推荐游戏、报告问题，还是单纯想聊聊想法。'
        ]
    },
    faq: {
        title: '常见问题',
        body: [
            '问：使用 fuunio 需要注册账号吗？',
            '答：目前不需要。打开网站就能直接浏览和跳转，无需注册或登录。',
            '问：点击游戏卡片后，为什么跳转到另一个网站？',
            '答：我们只提供游戏官网的链接导航，不托管游戏文件。',
            '问：游戏官网打不开或加载很慢怎么办？',
            '答：官网服务器由游戏开发者维护，我们无法控制。建议稍后重试。',
            '问：你们怎么选游戏？',
            '答：我们依据四项标准：网页端即开即玩；官网链接有效且无恶意内容；具备一定玩家基数；玩法具有原创性。'
        ]
    },
    terms: {
        title: '服务条款',
        body: [
            '欢迎访问 fuunio。本站为个人运营的 .io 游戏及轻量网页游戏导航平台。',
            '本站的核心功能是收集、整理并展示优质网页游戏的官方网站链接。',
            '本站现阶段为纯导航工具，不存储、不托管、不修改、不分发任何游戏文件。',
            '用户通过本站跳转至第三方网站后，应遵守该网站的适用条款与隐私政策。',
            '本站的原创内容著作权归本站运营者所有。未经书面许可，禁止复制、修改或用于商业用途。',
            '本站以"现状"及"现有可用性"提供服务，不作任何形式的担保。'
        ]
    },
    privacy: {
        title: '隐私政策',
        body: [
            '我们非常重视你的隐私保护。',
            '本站目前无需注册即可使用全部功能，不强制收集你的个人信息。',
            '当你通过"联系我们"页面的邮箱与我们沟通时，你会主动提供你的电子邮箱地址及邮件内容。',
            '这些信息仅用于回复你的来信，不会用于营销或其他目的。',
            '本站使用极少的本地存储和必要 Cookie，例如记住侧边栏状态。',
            '我们不使用任何追踪类 Cookie、第三方分析工具或广告 Cookie。'
        ]
    },
    cookie: {
        title: 'Cookie 政策',
        body: [
            '我们几乎不使用 Cookie，也不会追踪你。',
            '本站只在一种情况下使用必要的 Cookie：',
            '· 记住侧边栏状态：你是展开了还是收起了侧边栏。',
            '· 记住你是否首次访问：用来判断要不要显示新手引导。',
            '这些 Cookie 是临时的，关闭浏览器就会自动删除。',
            '我们不用追踪类 Cookie、广告 Cookie 或第三方 Cookie。'
        ]
    }
};

function showSitePolicy(key) {
    var policy = SITE_POLICIES[key];
    if (!policy) return;
    var titleEl = document.getElementById('sitePolicyTitle');
    var bodyEl = document.getElementById('sitePolicyBody');
    if (titleEl) titleEl.textContent = policy.title;
    if (bodyEl) {
        var html = '';
        for (var i = 0; i < policy.body.length; i++) {
            html += '<p class="policy-p">' + policy.body[i] + '</p>';
        }
        bodyEl.innerHTML = html;
    }
    var modal = document.getElementById('sitePolicyModal');
    if (modal) modal.classList.add('active');
}

function closeSitePolicyModal() {
    var modal = document.getElementById('sitePolicyModal');
    if (modal) modal.classList.remove('active');
}

function showDiscordInfo() {
    var t = window.LANG ? (window.LANG[window.currentLang] || window.LANG.zh) : { discordSoon: 'Discord 社区即将开放，敬请期待。' };
    alert(t.discordSoon || 'Discord 社区即将开放，敬请期待。');
}

// ===== 暴露到全局 =====
window.SITE_POLICIES = SITE_POLICIES;
window.showSitePolicy = showSitePolicy;
window.closeSitePolicyModal = closeSitePolicyModal;
window.showDiscordInfo = showDiscordInfo;
 
