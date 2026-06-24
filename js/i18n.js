/* ============================================================
   i18n.js - 多语言
   ============================================================ */

const LANG = {
    zh: {
        logo: 'Fuunio',
        searchPlaceholder: '搜索游戏...',
        all: '全部游戏',
        allGames: '全部游戏',
        hot: '热门游戏',
        hotGames: '热门游戏',
        new: '新游戏',
        newGames: '新游戏',
        action: '动作',
        shooting: '射击',
        survival: '生存',
        casual: '休闲',
        io: '.io游戏',
        strategy: '策略',
        racing: '竞速',
        featured: '热门推荐',
        playNow: '立即游玩',
        loadMore: '加载更多游戏',
        noResults: '未找到相关游戏',
        home: '首页',
        newArrivals: '新品尝鲜',
        dailyBlindBox: '每日盲盒',
        interestCamp: '兴趣营地',
        gameSea: '游戏公海',
        creativeMarket: '创意集市',
        dice: '随缘玩',
        info: '介绍',
        play: '立即玩',
        playInNewWindow: '在新窗口中游玩',
        rollAgain: '🎲 再摇一次',
        gameIntro: '📖 游戏介绍',
        recommendTitle: '猜你喜欢',
        copyright: '© 2026 Fuunio. All rights reserved.',
        footerText: '发现你的下一款挚爱',
        sidebarToggleOpen: '展开侧导航',
        sidebarToggleClose: '收起侧导航',
        popularityPlayed: '人玩过',
        popularityTimes: '次游玩',
        loading: '加载中...',
        playExperience: '🎮 立即体验',
        blindPlay: '🎮 立即开玩',
        blindFallbackDesc: '今天的惊喜已经准备好，点开试试看。',
        detailsSummary: '展开详情',
        viewOriginal: '查看原文',
        creativeEmpty: '🏗️ 创意集市正在建设中',
        newGamesEmpty: '🏗️ 还没有开发者投稿',
        policyTitle: '条款',
        footerPlatform: '平台',
        footerTerms: '条款',
        footerCommunity: '社区',
        footerAbout: '关于我们',
        footerContact: '联系我们',
        footerFaq: '常见问题',
        footerServiceTerms: '服务条款',
        footerPrivacy: '隐私政策',
        footerCookie: 'Cookie政策',
        gameSeaDesc: '把值得一试的网页游戏推荐给 Fuunio。',
        gameRecommendServiceTitle: '游戏推荐服务',
        gameRecommendServiceDesc: '发现好玩的宝藏游戏时，可以直接提交名称、链接和推荐理由。',
        recommendTreasureGame: '📩 推荐宝藏游戏',
        playerLoungeTitle: '玩家大厅',
        playerLoungeDesc: '想和其他玩家聊游戏、报新游、找队友，可以进入 Fuunio 玩家大厅。',
        joinPlayerLounge: '💬 加入玩家大厅',
        gameReportServiceTitle: '游戏报错服务',
        gameReportServiceDesc: '遇到游戏链接打不开、加载异常或内容问题时，可以直接提交报错信息。',
        submitGameIssue: '🛠️ 提交游戏报错',
        submitGame: '📤 提交你的游戏',
        submitWork: '📤 提交你的作品',
        developerInviteTitle: '🎮 你做了一个好玩的 io 游戏？',
        developerInviteIntro: '如果你的游戏是网页端原生运行、即开即玩、有自己独特玩法的，欢迎提交到 Fuunio。',
        developerInviteReview: '通过审核后，你的作品会出现在这里，被真正喜欢 io 游戏的玩家发现。',
        developerInviteGain: '你将获得：专属展示位 / 真实玩家反馈 / 未来付费推广的优先机会',
        developerInviteReject: '我们不接受：换皮抄袭、恶意代码、违法违规内容',
        creativeMarketTitle: '🛠️ 玩家工坊',
        creativeMarketSubtitle: '这里汇集了 Fuunio 玩家自制的 HTML 小游戏，每一款都是创造力的结晶。',
        creativeMarketNote: '本站仅提供作品链接导航，游戏运行于开发者自有服务器。',
        creativeSubmitCopy: '用 HTML 写了好玩的小游戏？来这里展示给更多人玩！',
        creativeLoungeCopy: '进入 QQ 频道，和 Fuunio 玩家一起交流作品、反馈和新玩法。',
        interestTitle: 'mk48.io',
        interestTagline: '指挥你的战舰，在广阔海域中与其他玩家展开生死对决。',
        playNowCta: '🎮 立即开玩',
        joinCommunity: '💬 加入玩家社区',
        interestOverviewTitle: '📖 关于这款游戏',
        interestContributeText: '你有更好的战术心得？或者发现了我们遗漏的技巧？',
        shareGuide: '📤 分享我的攻略',
        interestFooterNew: '探索新游戏 → 新品尝鲜',
        interestFooterCreative: '浏览玩家作品 → 创意集市',
        interestFooterSea: '返回游戏公海',
        newArrivalsSubtitle: '这里展示的是开发者们最新提交的 io 类 HTML 游戏，每一款都热气腾腾。',
        newArrivalsNote: '所有游戏均为开发者自主提交，本站仅提供链接导航。',
        gameSeaKicker: '玩家共创',
        gameDescs: {
            '坦克大作战': '多人坦克对战，抢占阵地',
            '自由钢琴': '在线弹奏美妙音乐',
            'Bloxd.IO': '方块世界，自由建造',
            '风叶穿行': '唯美跑酷，穿越风叶',
            'Battle Dudes': '2D射击对抗，节奏明快',
            'Bellwoods': '宁静的音乐互动体验',
            '赛博徒步': '赛博空间生存挑战',
            '喵喵竞赛': '可爱猫咪多人竞速',
            '太空飞船着陆': '精准操控飞船着陆',
            '纸牌游戏集合': '经典纸牌游戏合集',
            '电子魔方': '3D魔方挑战脑力',
            'Deadswitch3': '激烈枪战，快速射击',
            'Windows7 模拟': '模拟经典Windows7界面',
            'ACFUN 大逃杀': 'A站风格大逃杀游戏',
            'Duck Lings': '小鸭冒险，轻松有趣',
            'Dino Swords': '恐龙持剑，横冲直撞',
            '深海大作战': '海底生物大乱斗',
            'Diep.io': '坦克升级进化，射击对战',
            '挖矿大作战': '挖掘资源，扩张地盘',
            '信任的进化': '关于信任的博弈小游戏',
            '绘迷': '你画我猜，欢乐社交',
            '俄罗斯方块变体': '经典俄罗斯方块新玩法',
            'Flappy Bird': '像素小鸟，点击飞跃',
            'Figure': '逻辑解谜，图形挑战',
            'florr.io': '花朵对战，收集花瓣',
            '塔防小游戏': '建造防御塔，消灭敌人',
            '水果忍者': '切水果，爽快连击',
            'Gridspech': '连接点阵，益智解谜',
            '数独': '经典数字填充游戏',
            '桌游合集': '多款在线桌游任你玩',
            'Gold Digger': '黄金矿工，挖掘宝藏',
            '将军棋': '策略对战，攻城略地',
            '你画我猜': '绘画猜词，多人互动',
            'Flower Game': '花朵主题趣味对战',
            '潜伏者': '暗中潜伏，射击对抗',
            'LP文字游戏': '文字冒险，沉浸体验',
            '江湖论剑': 'AI驱动武侠江湖',
            'Krunker.io': '快节奏FPS射击',
            'Kiomet': '策略扩张，占领领土',
            '滑行者': '画线滑行，自由轨迹',
            '导弹游戏': '操控导弹，击中目标',
            '扫雷': '经典扫雷，逻辑推理',
            '微软小游戏': '微软官方休闲小游戏合集',
            'mk48': '海战模拟，策略对决',
            'Moo Moo': '资源收集，建造村落',
            'Narrow One': '弓箭射击，狭路相逢',
            '永不言弃': '节奏挑战，永不放弃',
            'OGS围棋': '在线围棋对弈',
            '皇冠数独': '数独变体，皇家挑战',
            'Play CS': '网页版CS，枪战对决',
            '棋牌在线对战': '多种棋牌在线对战',
            '忍者大战': '忍者冒险，动作闯关',
            '植物大战僵尸': '经典塔防，植物守护',
            '井字棋': '经典井字棋，简单对战',
            '红毯竞速': '手速比拼，红毯冲刺',
            'SUROI': '大逃杀射击，生存竞技',
            'Skribbl.io': '你画我猜，欢乐派对',
            'Slow Roads': '悠闲驾驶，欣赏风景',
            'Slither.io': '经典贪吃蛇，多人对战',
            'triep.io': '3D射击，立体战场',
            'Taming': '生存驯龙，建造家园',
            '神庙逃亡': '跑酷躲避，逃离神庙',
            '极速矢量': '矢量风格跑酷',
            '黑洞吞噬': '黑洞吞噬，越来越大',
            '维京战争': '维京主题策略对战',
            '什么能打败岩石': '趣味问答，脑洞大开',
            '半挂车停车': '模拟驾驶，精确停车',
            '画物理线条': '物理画线，解决谜题',
            'ZombsRoyale': '大逃杀射击游戏',
            'Zombs.io': '塔防策略，抵御僵尸',
            '1v1.lol': '建造射击，一决胜负',
            '2048': '数字合并，益智挑战',
            'Agar.io': '细胞吞噬，逐渐壮大',
            'Amogus.io': '太空狼人杀，推理社交',
            'Bonk.io': '物理碰撞，欢乐对战',
            'Copter.io': '直升机空战，升级射击',
            'CraftMine.io': '挖矿合成，生存建造',
            'Defly.io': '直升机领地争夺',
            'Drift.io': '漂移赛车，竞速挑战',
            'Gomoku.com': '在线五子棋对战，经典黑白博弈'
        }
    },
    en: {
        logo: 'Fuunio',
        searchPlaceholder: 'Search games...',
        all: 'All Games',
        allGames: 'All Games',
        hot: 'Hot Games',
        hotGames: 'Hot Games',
        new: 'New Games',
        newGames: 'New Games',
        action: 'Action',
        shooting: 'Shooting',
        survival: 'Survival',
        casual: 'Casual',
        io: '.io Games',
        strategy: 'Strategy',
        racing: 'Racing',
        featured: 'Featured',
        playNow: 'Play Now',
        loadMore: 'Load More Games',
        noResults: 'No games found',
        home: 'Home',
        newArrivals: 'New Arrivals',
        dailyBlindBox: 'Daily Box',
        interestCamp: 'Camp',
        gameSea: 'Game Sea',
        creativeMarket: 'Market',
        dice: 'Random Play',
        info: 'Info',
        play: 'Play Now',
        playInNewWindow: 'Play in new window',
        rollAgain: '🎲 Roll Again',
        gameIntro: '📖 Game Info',
        recommendTitle: 'You Might Also Like',
        copyright: '© 2026 Fuunio. All rights reserved.',
        footerText: 'Discover your next favorite game',
        sidebarToggleOpen: 'Open side navigation',
        sidebarToggleClose: 'Collapse side navigation',
        popularityPlayed: 'players',
        popularityTimes: 'plays',
        loading: 'Loading...',
        playExperience: '🎮 Play now',
        blindPlay: '🎮 Play now',
        blindFallbackDesc: 'Today\'s surprise is ready.',
        detailsSummary: 'Show details',
        viewOriginal: 'View source',
        creativeEmpty: '🏗️ Market is under construction',
        newGamesEmpty: '🏗️ No developer submissions yet',
        policyTitle: 'Terms',
        footerPlatform: 'Platform',
        footerTerms: 'Terms',
        footerCommunity: 'Community',
        footerAbout: 'About us',
        footerContact: 'Contact us',
        footerFaq: 'FAQ',
        footerServiceTerms: 'Terms of Service',
        footerPrivacy: 'Privacy Policy',
        footerCookie: 'Cookie Policy',
        gameSeaDesc: 'Recommend worthwhile browser games to Fuunio.',
        gameRecommendServiceTitle: 'Game Recommendation',
        gameRecommendServiceDesc: 'Found a hidden gem? Submit its name, link, and why you recommend it.',
        recommendTreasureGame: '📩 Recommend a game',
        playerLoungeTitle: 'Player Lounge',
        playerLoungeDesc: 'Chat about games, share new finds, or look for teammates.',
        joinPlayerLounge: '💬 Join player lounge',
        gameReportServiceTitle: 'Game Issue Report',
        gameReportServiceDesc: 'If a game link is broken or loading fails, submit an issue report.',
        submitGameIssue: '🛠️ Report issue',
        submitGame: '📤 Submit your game',
        submitWork: '📤 Submit your work',
        developerInviteTitle: '🎮 Built a fun io game?',
        developerInviteIntro: 'If your game runs natively in the browser and starts instantly, submit it to Fuunio.',
        developerInviteReview: 'After review, your work can appear here and be discovered by players.',
        developerInviteGain: 'You get: showcase spot / real player feedback / priority access to paid promotion.',
        developerInviteReject: 'We do not accept: reskins, plagiarism, malicious code, or illegal content.',
        creativeMarketTitle: '🛠️ Player Workshop',
        creativeMarketSubtitle: 'A collection of HTML mini games made by Fuunio players.',
        creativeMarketNote: 'Fuunio only provides navigation links. Games run on developers\' own servers.',
        creativeSubmitCopy: 'Made a fun HTML mini game? Show it here!',
        creativeLoungeCopy: 'Join the QQ channel to discuss works with Fuunio players.',
        interestTitle: 'mk48.io',
        interestTagline: 'Command your warship across open seas and battle other players.',
        playNowCta: '🎮 Play now',
        joinCommunity: '💬 Join community',
        interestOverviewTitle: '📖 About this game',
        interestContributeText: 'Have better tactics or found tips we missed?',
        shareGuide: '📤 Share my guide',
        interestFooterNew: 'Explore new games → New Arrivals',
        interestFooterCreative: 'Browse player works → Market',
        interestFooterSea: 'Back to Game Sea',
        newArrivalsSubtitle: 'Newly submitted io-style HTML games from developers.',
        newArrivalsNote: 'All games are submitted by developers. Fuunio only provides link navigation.',
        gameSeaKicker: 'Player Picks',
        gameDescs: {
            '坦克大作战': 'Multiplayer tank battle',
            '自由钢琴': 'Play piano online',
            'Bloxd.IO': 'Block world, build freely',
            '风叶穿行': 'Dreamy parkour among leaves',
            'Battle Dudes': '2D shooter battle',
            'Bellwoods': 'Peaceful music interaction',
            '赛博徒步': 'Cyber survival challenge',
            '喵喵竞赛': 'Cute cat racing',
            '太空飞船着陆': 'Precision spaceship landing',
            '纸牌游戏集合': 'Classic card games collection',
            '电子魔方': '3D magic cube challenge',
            'Deadswitch3': 'Intense gunfight',
            'Windows7 模拟': 'Simulate classic Windows7',
            'ACFUN 大逃杀': 'ACFUN style battle royale',
            'Duck Lings': 'Duckling adventure',
            'Dino Swords': 'Dinosaur with swords',
            '深海大作战': 'Underwater creature brawl',
            'Diep.io': 'Tank upgrade, shoot battle',
            '挖矿大作战': 'Dig resources, expand',
            '信任的进化': 'Trust evolution game',
            '绘迷': 'Draw and guess',
            '俄罗斯方块变体': 'Tetris variant',
            'Flappy Bird': 'Pixel bird, tap to fly',
            'Figure': 'Logic puzzle shapes',
            'florr.io': 'Flower battle, collect petals',
            '塔防小游戏': 'Tower defense mini game',
            '水果忍者': 'Fruit ninja slash',
            'Gridspech': 'Connect dots puzzle',
            '数独': 'Sudoku number puzzle',
            '桌游合集': 'Online board game collection',
            'Gold Digger': 'Gold miner treasure hunt',
            '将军棋': 'Strategy general chess',
            '你画我猜': 'Drawing & guessing game',
            'Flower Game': 'Flower themed battle',
            '潜伏者': 'Lurker shooter',
            'LP文字游戏': 'Text adventure RPG',
            '江湖论剑': 'AI powered martial arts',
            'Krunker.io': 'Fast-paced FPS',
            'Kiomet': 'Strategy expansion game',
            '滑行者': 'Line rider glide',
            '导弹游戏': 'Missile control game',
            '扫雷': 'Classic minesweeper',
            '微软小游戏': 'Microsoft casual games hub',
            'mk48': 'Naval battle simulation',
            'Moo Moo': 'Gather resources, build',
            'Narrow One': 'Archery duel',
            '永不言弃': 'Never give up rhythm',
            'OGS围棋': 'Online Go game',
            '皇冠数独': 'Queens sudoku variant',
            'Play CS': 'Browser CS shooter',
            '棋牌在线对战': 'Online board/card games',
            '忍者大战': 'Ninja adventure action',
            '植物大战僵尸': 'Plants vs Zombies tower defense',
            '井字棋': 'Tic tac toe classic',
            '红毯竞速': 'Red carpet race',
            'SUROI': 'Battle royale survival',
            'Skribbl.io': 'Draw and guess party',
            'Slow Roads': 'Relaxing drive scenery',
            'Slither.io': 'Classic snake multiplayer',
            'triep.io': '3D shooting battlefield',
            'Taming': 'Survival, tame dragons',
            '神庙逃亡': 'Temple run escape',
            '极速矢量': 'Vector style parkour',
            '黑洞吞噬': 'Black hole swallow',
            '维京战争': 'Viking strategy war',
            '什么能打败岩石': 'Fun Q&A brain teasers',
            '半挂车停车': 'Semi-trailer parking simulation',
            '画物理线条': 'Physics drawing puzzle',
            'ZombsRoyale': 'Battle royale shooter',
            'Zombs.io': 'Tower defense vs zombies',
            '1v1.lol': 'Build and shoot duel',
            '2048': 'Merge numbers puzzle',
            'Agar.io': 'Eat and grow',
            'Amogus.io': 'Space impostor deduction',
            'Bonk.io': 'Physics brawl party',
            'Copter.io': 'Helicopter aerial fight',
            'CraftMine.io': 'Mining & crafting survival',
            'Defly.io': 'Helicopter territory fight',
            'Drift.io': 'Drift racing challenge',
            'Gomoku.com': 'Online Gomoku duel'
        }
    },
    ja: {
        logo: 'Fuunio',
        searchPlaceholder: 'ゲームを検索...',
        all: 'すべてのゲーム',
        allGames: 'すべてのゲーム',
        hot: '人気ゲーム',
        hotGames: '人気ゲーム',
        new: '新しいゲーム',
        newGames: '新しいゲーム',
        action: 'アクション',
        shooting: 'シューティング',
        survival: 'サバイバル',
        casual: 'カジュアル',
        io: '.ioゲーム',
        strategy: 'ストラテジー',
        racing: 'レーシング',
        featured: '特集',
        playNow: '今すぐプレイ',
        loadMore: 'もっとゲームを読み込む',
        noResults: 'ゲームが見つかりません',
        home: 'ホーム',
        newArrivals: '新着',
        dailyBlindBox: 'デイリーボックス',
        interestCamp: '趣味キャンプ',
        gameSea: 'ゲーム公海',
        creativeMarket: '創意マーケット',
        dice: 'ランダムプレイ',
        info: '紹介',
        play: 'プレイ',
        playInNewWindow: '新しいウィンドウでプレイ',
        rollAgain: '🎲 もう一度振る',
        gameIntro: '📖 ゲーム紹介',
        recommendTitle: 'おすすめ',
        copyright: '© 2026 Fuunio. All rights reserved.',
        footerText: '次のお気に入りを発見',
        sidebarToggleOpen: 'サイドナビを開く',
        sidebarToggleClose: 'サイドナビを閉じる',
        popularityPlayed: '人がプレイ',
        popularityTimes: '回プレイ',
        loading: '読み込み中...',
        playExperience: '🎮 今すぐ体験',
        blindPlay: '🎮 今すぐプレイ',
        blindFallbackDesc: '今日のサプライズが用意できました。',
        detailsSummary: '詳細を表示',
        viewOriginal: '原文を見る',
        creativeEmpty: '🏗️ 創意マーケットは準備中です',
        newGamesEmpty: '🏗️ まだ開発者投稿はありません',
        policyTitle: '規約',
        footerPlatform: 'プラットフォーム',
        footerTerms: '規約',
        footerCommunity: 'コミュニティ',
        footerAbout: '私たちについて',
        footerContact: 'お問い合わせ',
        footerFaq: 'よくある質問',
        footerServiceTerms: '利用規約',
        footerPrivacy: 'プライバシーポリシー',
        footerCookie: 'Cookieポリシー',
        gameSeaDesc: '試す価値のあるブラウザゲームを Fuunio に推薦できます。',
        gameRecommendServiceTitle: 'ゲーム推薦サービス',
        gameRecommendServiceDesc: '面白い掘り出し物を見つけたら、名前とリンクを送ってください。',
        recommendTreasureGame: '📩 ゲームを推薦',
        playerLoungeTitle: 'プレイヤーラウンジ',
        playerLoungeDesc: 'ゲームの話、新作共有、チームメイト探しができます。',
        joinPlayerLounge: '💬 ラウンジに参加',
        gameReportServiceTitle: 'ゲーム不具合報告',
        gameReportServiceDesc: 'リンクが開かない、読み込みが異常な場合は報告してください。',
        submitGameIssue: '🛠️ 不具合を報告',
        submitGame: '📤 ゲームを投稿',
        submitWork: '📤 作品を投稿',
        developerInviteTitle: '🎮 楽しい io ゲームを作りましたか？',
        developerInviteIntro: 'ブラウザでそのまま動き、すぐ遊べるゲームを Fuunio に投稿してください。',
        developerInviteReview: '審査後、あなたの作品はここに掲載されます。',
        developerInviteGain: '得られるもの：専用掲載枠 / 実際のプレイヤー反応 / 将来の有料プロモーション優先枠',
        developerInviteReject: '受け付けないもの：リスキン、盗作、悪意あるコード、違法コンテンツ',
        creativeMarketTitle: '🛠️ プレイヤー工房',
        creativeMarketSubtitle: 'Fuunio プレイヤーが自作した HTML ミニゲームを集めた場所です。',
        creativeMarketNote: 'Fuunio は作品リンクの案内のみを行います。',
        creativeSubmitCopy: 'HTML で楽しいミニゲームを作りましたか？ここで多くの人に遊んでもらいましょう。',
        creativeLoungeCopy: 'QQ チャンネルで、Fuunio プレイヤーと作品について交流できます。',
        interestTitle: 'mk48.io',
        interestTagline: '広大な海で戦艦を指揮し、他のプレイヤーと激しく対戦します。',
        playNowCta: '🎮 今すぐプレイ',
        joinCommunity: '💬 コミュニティに参加',
        interestOverviewTitle: '📖 このゲームについて',
        interestContributeText: 'より良い戦術や、見落としているコツを知っていますか？',
        shareGuide: '📤 攻略を共有',
        interestFooterNew: '新しいゲームを見る → 新着',
        interestFooterCreative: 'プレイヤー作品を見る → 創意マーケット',
        interestFooterSea: 'ゲーム公海へ戻る',
        newArrivalsSubtitle: '開発者から新しく投稿された io 系 HTML ゲームを紹介します。',
        newArrivalsNote: 'すべてのゲームは開発者投稿です。Fuunio はリンク案内のみを提供します。',
        gameSeaKicker: 'プレイヤー推薦',
        gameDescs: {
            '坦克大作战': 'マルチプレイヤー戦車バトル',
            '自由钢琴': 'オンラインピアノ演奏',
            'Bloxd.IO': 'ブロックワールド、自由構築',
            '风叶穿行': '葉の間を駆け抜けるパルクール',
            'Battle Dudes': '2Dシューティング対戦',
            'Bellwoods': '静かな音楽体験',
            '赛博徒步': 'サイバーサバイバル',
            '喵喵竞赛': 'かわいい猫のレース',
            '太空飞船着陆': '宇宙船の精密着陸',
            '纸牌游戏集合': 'クラシックカードゲーム集',
            '电子魔方': '3Dルービックキューブ',
            'Deadswitch3': '激しい銃撃戦',
            'Windows7 模拟': '古典的Windows7の模擬',
            'ACFUN 大逃杀': 'A站風バトルロワイヤル',
            'Duck Lings': 'アヒルの子の冒険',
            'Dino Swords': '剣を持った恐竜',
            '深海大作战': '深海生物の乱闘',
            'Diep.io': '戦車アップグレードシューティング',
            '挖矿大作战': '資源採掘と拡張',
            '信任的进化': '信頼の進化ゲーム',
            '绘迷': '絵を描いて当てる',
            '俄罗斯方块变体': 'テトリスの新バリエーション',
            'Flappy Bird': 'フラッピーバード',
            'Figure': 'ロジックパズル図形',
            'florr.io': '花バトル、花びら収集',
            '塔防小游戏': 'タワーディフェンスミニゲーム',
            '水果忍者': 'フルーツ忍者スラッシュ',
            'Gridspech': 'ドット接続パズル',
            '数独': 'ナンプレ数字パズル',
            '桌游合集': 'オンラインボードゲームコレクション',
            'Gold Digger': 'ゴールドラッシュ',
            '将军棋': 'ストラテジー将軍棋',
            '你画我猜': 'お絵かきクイズ',
            'Flower Game': '花テーマの対戦',
            '潜伏者': '潜伏者シューター',
            'LP文字游戏': 'テキストアドベンチャーRPG',
            '江湖论剑': 'AI武侠アクション',
            'Krunker.io': '高速FPS',
            'Kiomet': '戦略拡張ゲーム',
            '滑行者': 'ラインライダー滑走',
            '导弹游戏': 'ミサイルコントロール',
            '扫雷': 'マインスイーパー',
            '微软小游戏': 'Microsoftカジュアルゲーム集',
            'mk48': '海戦シミュレーション',
            'Moo Moo': '資源収集と建築',
            'Narrow One': '弓矢の決闘',
            '永不言弃': 'リズムチャレンジ',
            'OGS围棋': 'オンライン囲碁',
            '皇冠数独': 'クイーンズ数独',
            'Play CS': 'ブラウザ版CS',
            '棋牌在线对战': 'オンライン対戦ボードゲーム',
            '忍者大战': '忍者アドベンチャー',
            '植物大战僵尸': 'プラントvsゾンビタワーディフェンス',
            '井字棋': '三目並べクラシック',
            '红毯竞速': 'レッドカーペットレース',
            'SUROI': 'バトルロワイヤルサバイバル',
            'Skribbl.io': 'お絵かきパーティー',
            'Slow Roads': 'のんびりドライブ',
            'Slither.io': 'クラシックスネークマルチプレイヤー',
            'triep.io': '3Dシューティングバトルフィールド',
            'Taming': 'サバイバル、ドラゴン育成',
            '神庙逃亡': 'テンプルラン脱出',
            '极速矢量': 'ベクタースタイルパルクール',
            '黑洞吞噬': 'ブラックホール吸引',
            '维京战争': 'バイキング戦略戦争',
            '什么能打败岩石': '楽しいクイズ脳トレ',
            '半挂车停车': 'セミトレーラー駐車シミュレーション',
            '画物理线条': '物理お絵かきパズル',
            'ZombsRoyale': 'バトルロワイヤルシューター',
            'Zombs.io': 'ゾンビ防衛タワーディフェンス',
            '1v1.lol': '建築と射撃の決闘',
            '2048': '数字マージパズル',
            'Agar.io': '食べて成長する',
            'Amogus.io': '宇宙人狼推理ゲーム',
            'Bonk.io': '物理バトルパーティー',
            'Copter.io': 'ヘリコプター空中戦',
            'CraftMine.io': '採掘とクラフトサバイバル',
            'Defly.io': 'ヘリ領地争奪戦',
            'Drift.io': 'ドリフトレースチャレンジ',
            'Gomoku.com': 'オンライン五目並べ対戦'
        }
    }
};

let currentLang = localStorage.getItem('preferredLang') || 'zh';

function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.toggle('active');
}

function switchLanguage(lang) {
    if (lang === currentLang) {
        toggleLangDropdown();
        return;
    }
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    
    const langNames = { zh: '中文', en: 'English', ja: '日本語' };
    const currentLangEl = document.getElementById('currentLang');
    if (currentLangEl) currentLangEl.textContent = langNames[lang] || lang;
    
    document.querySelectorAll('.lang-option').forEach(o => {
        o.classList.toggle('active-lang', o.dataset.lang === lang);
    });
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('active');
    
    // 更新所有翻译
    if (typeof updateAllTranslations === 'function') updateAllTranslations();
    if (typeof buildBannerSlides === 'function') buildBannerSlides();
    if (typeof renderCreativeMarket === 'function') renderCreativeMarket();
    if (typeof renderNewArrivals === 'function') renderNewArrivals();
    if (typeof renderInterestResources === 'function') renderInterestResources();
    
    // 刷新游戏列表
    if (typeof renderSkeletons === 'function') renderSkeletons();
    setTimeout(() => {
        const games = typeof filterGames === 'function' ? filterGames() : [];
        if (typeof renderGames === 'function') {
            renderGames(games.slice(0, state.displayedGames || 12));
            if (typeof updateLoadMoreBtn === 'function') updateLoadMoreBtn(games.length);
        }
        if (typeof loadReactions === 'function') loadReactions();
        if (typeof updateModalButtons === 'function') updateModalButtons();
        if (typeof refreshActiveGameModal === 'function') refreshActiveGameModal();
    }, 200);
}

function updateAllTranslations() {
    const t = LANG[currentLang] || LANG.zh;
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : (currentLang === 'ja' ? 'ja' : 'en');
    
    // 搜索框
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    
    // 导航按钮
    const navMap = {
        'newArrivalsNavBtn': t.newArrivals,
        'dailyBlindBoxBtn': t.dailyBlindBox,
        'interestCampNavBtn': t.interestCamp,
        'creativeMarketNavBtn': t.creativeMarket,
        'gameSeaNavBtn': t.gameSea
    };
    Object.entries(navMap).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) {
            const span = el.querySelector('span');
            if (span) span.textContent = text;
        }
    });
    
    // 侧边栏
    document.querySelectorAll('.sidebar-text').forEach(el => {
        const key = el.parentElement?.dataset?.category;
        if (key && t[key]) el.textContent = t[key];
    });
    
    // 标题
    const sectionTitle = document.getElementById('sectionTitle');
    if (sectionTitle) sectionTitle.textContent = t.allGames;
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) loadMoreBtn.textContent = t.loadMore;
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) footerBottom.textContent = t.copyright;
    const footerSlogan = document.getElementById('footerSlogan');
    if (footerSlogan) footerSlogan.textContent = t.footerText;
    
    // 底部导航
    const footerMap = {
        'footerPlatformTitle': t.footerPlatform,
        'footerTermsTitle': t.footerTerms,
        'footerCommunityTitle': t.footerCommunity,
        'footerAboutLink': t.footerAbout,
        'footerContactLink': t.footerContact,
        'footerFaqLink': t.footerFaq,
        'footerServiceTermsLink': t.footerServiceTerms,
        'footerPrivacyLink': t.footerPrivacy,
        'footerCookieLink': t.footerCookie
    };
    Object.entries(footerMap).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });
    
    // 新品尝鲜页面
    const newArrivalsMap = {
        'newArrivalsTitle': t.newArrivals,
        'newArrivalsSubtitle': t.newArrivalsSubtitle,
        'newArrivalsNote': t.newArrivalsNote,
        'developerInviteTitle': t.developerInviteTitle,
        'developerInviteIntro': t.developerInviteIntro,
        'developerInviteReview': t.developerInviteReview,
        'developerInviteGain': t.developerInviteGain,
        'developerInviteReject': t.developerInviteReject,
        'developerSubmitBtn': t.submitGame
    };
    Object.entries(newArrivalsMap).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });
    
    // 游戏公海
    const gameSeaMap = {
        'gameSeaKicker': t.gameSeaKicker,
        'gameSeaTitle': t.gameSea,
        'gameSeaDesc': t.gameSeaDesc,
        'gameRecommendServiceTitle': t.gameRecommendServiceTitle,
        'gameRecommendServiceDesc': t.gameRecommendServiceDesc,
        'recommendTreasureGameBtn': t.recommendTreasureGame,
        'playerLoungeTitle': t.playerLoungeTitle,
        'playerLoungeDesc': t.playerLoungeDesc,
        'joinPlayerLoungeBtn': t.joinPlayerLounge,
        'gameReportServiceTitle': t.gameReportServiceTitle,
        'gameReportServiceDesc': t.gameReportServiceDesc,
        'submitGameIssueBtn': t.submitGameIssue
    };
    Object.entries(gameSeaMap).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });
    
    // 创意集市
    const creativeMap = {
        'creativeMarketTitle': t.creativeMarketTitle,
        'creativeMarketSubtitle': t.creativeMarketSubtitle,
        'creativeMarketNote': t.creativeMarketNote,
        'creativeSubmitBtn': t.submitWork,
        'creativeSubmitCopy': t.creativeSubmitCopy,
        'creativeLoungeBtn': t.joinPlayerLounge,
        'creativeLoungeCopy': t.creativeLoungeCopy
    };
    Object.entries(creativeMap).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });
    
    // 兴趣营地
    const interestMap = {
        'interestTitle': t.interestTitle,
        'interestTagline': t.interestTagline,
        'interestPlayBtn': t.playNowCta,
        'interestCommunityBtn': t.joinCommunity,
        'interestOverviewTitle': t.interestOverviewTitle,
        'interestContributeText': t.interestContributeText,
        'shareGuideBtn': t.shareGuide,
        'interestFooterNew': t.interestFooterNew,
        'interestFooterCreative': t.interestFooterCreative,
        'interestFooterSea': t.interestFooterSea
    };
    Object.entries(interestMap).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });
    
    // Tab bar
    const tabMap = {
        'tabHome': t.home,
        'tabNewArrivals': t.newArrivals,
        'tabInterestCamp': t.interestCamp,
        'tabCreativeMarket': t.creativeMarket,
        'tabGameSea': t.gameSea
    };
    Object.entries(tabMap).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) {
            const span = el.querySelector('span:last-child');
            if (span) span.textContent = text;
        }
    });
    
    // 盲盒
    const blindMap = {
        'blindSlogan': t.blindSlogan,
        'blindBoxHint': t.blindHint
    };
    Object.entries(blindMap).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });
    
    // 弹窗
    const policyTitle = document.getElementById('sitePolicyTitle');
    if (policyTitle) policyTitle.textContent = t.policyTitle;
    if (!document.getElementById('gameModal')?.classList.contains('active')) {
        const modalTitle = document.getElementById('modalTitle');
        if (modalTitle) modalTitle.textContent = t.modalDefaultTitle || '游戏名称';
        const modalDesc = document.getElementById('modalDesc');
        if (modalDesc) modalDesc.textContent = t.modalDefaultDesc || '点击下方按钮在新窗口中打开游戏';
    }
    
    if (typeof updateSidebarToggleLabel === 'function') updateSidebarToggleLabel();
    if (typeof updateAuthUI === 'function') updateAuthUI();
    if (typeof updateModalButtons === 'function') updateModalButtons();
}

// 暴露到全局
window.LANG = LANG;
window.currentLang = currentLang;
window.toggleLangDropdown = toggleLangDropdown;
window.switchLanguage = switchLanguage;
window.updateAllTranslations = updateAllTranslations;