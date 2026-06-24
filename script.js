        /* Fuunio (fuunio.com)
         * © 2026 Fuunio Team. All rights reserved.
         * 未经授权禁止复制、修改或用于商业用途。
         */
        const CREATIVE_WORKS = [
            { name:'张雪峰快跑', author:'', description:'操控角色一路冲刺闪避，在快节奏关卡里挑战反应和路线判断。', tags:['休闲','跑酷','创意'], url:'https://ottomate.games/zxf/' },
            { name:'曾经的王', author:'', description:'一款带有叙事感的创意网页小游戏，适合短时间体验独特氛围。', tags:['剧情','创意','休闲'], url:'https://www.bilibili.com/toy/King/index.html' }
        ];

        // 新品尝鲜数据：后续手动更新开发者提交游戏时，改这里即可。
        const NEW_GAME_SUBMISSIONS = [
            { name:'暂无首发作品', author:'Fuunio', description:'这里会优先展示通过审核的开发者新作。现在可以点击上方按钮提交你的 io 类 HTML 游戏。', tags:['占位','开发者投稿'], url:'https://x.tduckcloud.com/s/zyz5GWYf' }
        ];

        // mk48.io 兴趣营地资料：标题、摘要、折叠说明和原文链接都可在这里维护。
        const MK48_RESOURCES = [
            {
                title:'机制详解',
                summary:'从视野、船体、武器、升级路线到战斗节奏，帮助新玩家先理解 mk48.io 的核心规则。',
                detail:'适合先读：弄清楚船只成长、交战距离、火力覆盖和团队协作后，再进入实战会少走弯路。',
                url:'https://forum.mk49.cyou/tutorial/zh.html'
            },
            {
                title:'新手指南',
                summary:'面向刚入坑玩家的上手路线，重点关注开局选择、基础操作、资源判断和避免被集火。',
                detail:'建议把它当成第一份清单：先熟悉移动和开火，再学习何时撤退、何时追击、何时加入队友战线。',
                url:'https://docs.qq.com/doc/DSmR4aE5RaXhFZEtE'
            },
            {
                title:'基地冲榜',
                summary:'围绕基地玩法的目标拆解，适合已经会基础操作、想进一步提升效率和排名的玩家。',
                detail:'核心是节奏管理：路线规划、风险控制、队伍分工和战斗收益都要一起看，不能只盯单次击杀。',
                url:'https://docs.qq.com/doc/DUllwSGl5d1lPUkxG?dver='
            },
            {
                title:'舰艇教程',
                summary:'整理自“鱼鱼将”的舰艇教学帖，保留教程要点入口，不附带评论内容。',
                detail:'当前环境无法稳定抓取论坛正文，页面先提供人工编辑摘要和原帖入口；后续可把帖子正文提取后替换到这个 detail 字段。',
                url:'https://mk48by049.mbbs.cc/#/thread/detail/6126'
            }
        ];

        function safeOpenExternal(url) {
            if(!url) return;
            window.open(url, '_blank', 'noopener,noreferrer');
        }

        const SITE_POLICIES = {
            "cookie": {
                        "title": "Cookie 政策",
                        "body": [
                                    "最后更新：2026年6月",
                                    "欢迎来到 fuunio。我们非常重视你的隐私，因此尽可能不收集你的信息。",
                                    "简单来说：我们几乎不使用 Cookie，也不会追踪你。",
                                    "我们用了什么？",
                                    "本站只在一种情况下使用必要的 Cookie：",
                                    "· 记住侧边栏状态：你是展开了还是收起了侧边栏，这样刷新页面后不用重新操作。",
                                    "· 记住你是否首次访问：用来判断要不要显示新手引导，看完就不再打扰你。",
                                    "这些 Cookie 是临时的，关闭浏览器就会自动删除。它们不包含任何个人身份信息。",
                                    "我们不用什么？",
                                    "· 不用追踪类 Cookie：没有 Google Analytics，没有埋点统计。",
                                    "· 不用广告 Cookie：本站不接广告，不分析你的喜好。",
                                    "· 不用第三方 Cookie：不嵌入任何第三方脚本或社交插件。",
                                    "如何管理 Cookie？",
                                    "你可以在浏览器设置中清除或阻止 Cookie。不同浏览器的操作方式略有不同：",
                                    "· Chrome：设置 → 隐私与安全 → Cookie 及其他网站数据",
                                    "· Firefox：选项 → 隐私与安全 → Cookie 与网站数据",
                                    "· Safari：偏好设置 → 隐私 → Cookie 与网站数据",
                                    "· Edge：设置 → 站点权限 → Cookie 与网站数据",
                                    "即使你阻止了 Cookie，fuunio 的核心功能（浏览和跳转游戏）依然可以正常使用，只是侧边栏状态可能无法记忆。",
                                    "更新与联系",
                                    "我们可能会更新本政策，变更会在此页面公布。",
                                    "如有疑问，请通过“联系我们”页面的邮箱与我们联系，我们会在十五个工作日内回复。",
                                    "本政策是《隐私政策》的一部分。",
                                    "—— fuunio"
                        ]
            },
            "faq": {
                        "title": "常见问题",
                        "body": [
                                    "使用相关",
                                    "问：使用 fuunio 需要注册账号吗？",
                                    "答：目前不需要。 现阶段 fuunio 是纯游戏导航工具，打开网站就能直接浏览和跳转，无需注册或登录。未来我们如果推出社区、评论等互动功能，会开放账号注册，届时会提前公告。",
                                    "问：点击游戏卡片后，为什么跳转到另一个网站？",
                                    "答：我们只提供游戏官网的链接导航，不托管游戏文件。点击卡片会在新标签页打开游戏官网，这既是尊重游戏版权，也是为了让你玩到最新、最完整的版本。",
                                    "问：游戏官网打不开或加载很慢怎么办？",
                                    "答：官网服务器由游戏开发者维护，我们无法控制。如遇无法访问，可能是官网临时维护或网络问题，建议稍后重试。如果长时间无法打开，欢迎通过“联系我们”告知，我们会去核实链接有效性。",
                                    "问：支持手机或平板访问吗？",
                                    "答：支持。我们采用响应式设计，会自动适配电脑、平板、手机的屏幕。在移动端，侧边栏会变成汉堡菜单，游戏列表也会切换成适合触屏的单列布局。",
                                    "问：有玩家社区或留言板吗？",
                                    "答：即将推出。 我们正在计划上线玩家留言板，方便大家推荐游戏、交流心得。在留言板上线前，有任何想法都欢迎通过“联系我们”页面告诉我们。",
                                    "游戏收录",
                                    "问：你们怎么选游戏？",
                                    "答： 我们依据四项标准：网页端即开即玩；官网链接有效且无恶意内容；具备一定玩家基数或社区活跃度；玩法具有原创性或代表性。",
                                    "我们珍视每一位用户的信任，所有推荐都基于编辑的真实体验和判断。未来我们可能会为开发者提供付费推广合作选项（如专题展示位），但此类合作内容均会清晰标注，并与编辑推荐明确区分，绝不混淆。",
                                    "问：我想推荐游戏，怎么做？",
                                    "答：欢迎！请通过“联系我们”页面的邮箱，提供游戏名称、官网链接和简短推荐理由。我们会在 7 个工作日内评估并回复。",
                                    "问：发现某款游戏链接失效或不好玩了，可以移除吗？",
                                    "答：可以。请通过邮箱告知我们游戏名称和问题。我们会定期自动检测链接，对用户报错的链接会优先人工核实，确认失效后会及时处理。",
                                    "问：为什么有些游戏需要注册才能玩？",
                                    "答：部分游戏官网（比如一些策略类游戏）要求注册账户，这是游戏官方的规则。我们只提供入口，是否注册由你自己决定。",
                                    "技术与隐私",
                                    "问：网站会收集我的个人信息吗？",
                                    "答：现阶段不会。 我们目前不使用追踪脚本和分析工具，不收集邮箱等个人身份信息。未来如果推出账号注册或订阅功能，我们会严格遵守相关法规，在收集前明确告知并征得你的同意。",
                                    "问：侧边栏为什么有时候会自动收缩？",
                                    "答：侧边栏设计为鼠标悬停自动展开、移出自动收缩，目的是节省屏幕空间，让你浏览游戏时视野更开阔。这个功能在手机上会自动禁用。",
                                    "问：网站加载慢怎么办？",
                                    "答：我们网站是纯静态页面，资源体积很小。如果遇到加载慢，通常与你的网络环境或本地缓存有关，可以试试刷新页面或清理浏览器缓存。如果问题持续，欢迎反馈给我们排查。",
                                    "其他",
                                    "问：网站有广告吗？",
                                    "答：目前没有任何商业广告。 我们正专注于用优质内容服务大家。未来为了支撑网站长期运营，我们可能会引入克制的、不影响浏览体验的商务合作，任何变动都会提前在更新日志中说明。",
                                    "问：可以把你们的游戏列表复制到我网站吗？",
                                    "答：游戏列表是公开信息，但直接大量复制可能涉及不正当竞争。如需引用少量游戏，建议注明来源。如需合作，欢迎通过邮箱联系我们。",
                                    "问：如何获得网站更新通知？",
                                    "答：可以定期查看页面底部的“更新日志”，我们会记录每次的新增游戏、功能修复和变动。邮件订阅或 RSS 暂未推出。",
                                    "问：遇到问题怎么联系你们？",
                                    "答：请通过“联系我们”页面中的官方邮箱发送邮件。建议注明邮件类别（如链接报错、游戏推荐、功能建议），我们会尽快回复。",
                                    "—— fuunio"
                        ]
            },
            "terms": {
                        "title": "服务条款",
                        "body": [
                                    "最后更新：2026年6月",
                                    "欢迎访问 fuunio（以下简称“本站”）。本站为个人运营的 .io 游戏及轻量网页游戏导航平台。请您在使用本站前仔细阅读以下条款。您访问或使用本站，即视为您已阅读、理解并同意接受本服务条款的全部内容。如您不同意本条款的任何部分，请立即停止使用本站。",
                                    "一、服务内容",
                                    "1.1 本站的核心功能是收集、整理并展示优质网页游戏的官方网站链接，通过分类导航、搜索筛选等方式协助用户定位并跳转至目标游戏官网。",
                                    "1.2 本站现阶段为纯导航工具，不存储、不托管、不修改、不分发任何游戏文件。用户通过本站跳转后所接触的全部游戏内容，均由第三方网站提供。",
                                    "1.3 本站保留根据运营需要，随时调整收录范围或网站功能的权利，恕不另行通知。",
                                    "二、用户行为规范",
                                    "2.1 本站现阶段无需注册即可使用，不强制收集个人身份信息。",
                                    "2.2 用户在使用本站过程中，不得从事以下行为：",
                                    "· 利用本站传播违法信息或实施任何违反中华人民共和国法律法规的行为；",
                                    "· 采用自动化脚本、爬虫等手段对本站服务器造成异常负载；",
                                    "· 冒充本站运营者或以本站名义发布信息；",
                                    "· 其他违反公序良俗或损害本站合法权益的行为。",
                                    "2.3 用户通过本站跳转至第三方网站后，应遵守该网站的适用条款与隐私政策。用户与第三方网站之间产生的任何纠纷，由双方自行协商解决，本站不承担调解或连带责任。",
                                    "三、第三方链接免责声明",
                                    "3.1 本站提供的所有游戏链接均为超链接形式，指向第三方网站。对于第三方网站的内容合法性、准确性、安全性、可用性及完整性，本站不作任何明示或默示的保证。",
                                    "3.2 第三方网站可能包含广告、付费项目、用户注册要求或潜在安全风险。用户应自行评估并承担访问第三方网站的全部风险。",
                                    "3.3 游戏官网可能因域名变更、服务器关停、网络限制等原因导致链接失效。本站将定期巡检并尽力更新，但对于链接失效造成的任何不便或损失，本站不承担责任。",
                                    "四、知识产权",
                                    "4.1 本站的原创内容（包括但不限于页面设计、前端代码、编辑推荐语等）的著作权归本站运营者所有。未经书面许可，禁止复制、修改或用于商业用途。",
                                    "4.2 本站展示的游戏名称、图标、截图等素材，其知识产权归各自的权利方所有。本站仅作导航用途，不主张任何相关权利。如权利方认为存在侵权，请依照第六条的程序联系处理。",
                                    "五、免责条款",
                                    "5.1 本站以“现状”及“现有可用性”提供服务，不作任何形式的担保，包括但不限于对服务不中断、信息准确无误的保证。",
                                    "5.2 在法律允许的最大范围内，本站运营者不对因使用或无法使用本站而导致的任何间接损失（如数据丢失、设备损坏、利润损失等）承担责任，即便已被告知发生此类损害的可能性。",
                                    "5.3 用户通过本站跳转至第三方网站后产生的一切风险（如个人信息泄露、财产损失、账号被盗等），由用户与第三方网站自行处理，本站不介入、不承担责任。",
                                    "六、侵权投诉程序",
                                    "6.1 本站尊重知识产权。如您认为本站收录的内容侵犯了您的合法权益，可通过“联系我们”页面的邮箱提交书面通知。",
                                    "6.2 通知应包含：",
                                    "· 权利人的真实姓名或单位名称及有效联系方式；",
                                    "· 权属证明材料（如商标注册证、著作权登记证书）；",
                                    "· 具体侵权内容及对应的本站链接；",
                                    "· 您希望采取的处理措施；",
                                    "· 真实性声明，并承诺承担因虚假通知引发的法律责任。",
                                    "6.3 收到完整材料后，本站将在 48 小时内初步核实，情况属实将及时处理并反馈。",
                                    "七、服务变更与终止",
                                    "7.1 本站有权随时变更、暂停或终止部分或全部服务，恕不另行通知。",
                                    "7.2 因系统维护、故障等原因可能导致暂时无法访问，本站将视情况提前公告，但不对由此造成的不便承担责任。",
                                    "7.3 如用户违反本条款，本站有权在不事先通知的情况下限制其访问权限，并保留追究法律责任的权利。",
                                    "7.4 服务终止后，本条款中的免责声明、知识产权、争议解决等具有持续效力的部分继续有效。",
                                    "八、隐私保护概要",
                                    "8.1 本站现阶段不主动收集用户的个人身份信息。详细说明见《隐私政策》。",
                                    "8.2 简要而言：",
                                    "· 不使用追踪脚本或第三方分析工具；",
                                    "· 不要求注册或登录；",
                                    "· 用户主动发送邮件时的邮箱地址仅用于回复，不用于其他目的。",
                                    "8.3 互联网传输无法保证绝对安全，用户使用本站即表示理解并接受此风险。",
                                    "九、法律适用与争议解决",
                                    "9.1 本条款的解释、效力及履行均适用中华人民共和国法律。",
                                    "9.2 因本条款引发的争议，双方应首先友好协商。协商不成的，可提交本站运营者所在地有管辖权的人民法院诉讼解决。",
                                    "十、条款更新",
                                    "10.1 本站保留随时修订本条款的权利。更新版本将在本页面发布，并标注最后更新日期。",
                                    "10.2 重大变更将通过网站公告等方式提醒用户注意。用户继续使用本站即视为接受修订后的条款。",
                                    "十一、商业化预告",
                                    "为保障本站的可持续运营，未来可能引入克制的商业化机制，包括但不限于：",
                                    "· 为开发者提供带有明确标识的付费推广展示位；",
                                    "· 在游戏跳转链路中接入联盟营销链接。",
                                    "本站承诺：所有商业合作内容均将与编辑推荐明确区分并清晰标注，绝不损害推荐的真实性与用户体验。",
                                    "十二、联系方式",
                                    "如对本条款有任何疑问，或需要报告违规行为，请通过“联系我们”页面的邮箱与我们联系。我们通常在 48 小时内回复（节假日顺延）。",
                                    "—— fuunio"
                        ]
            },
            "about": {
                        "title": "关于本站",
                        "body": [
                                    "最后更新：2026年6月",
                                    "我们是谁",
                                    "Fuunio 是一个专注于 .io 游戏及轻量网页游戏的精品导航平台。我们不存储、不托管任何游戏文件，仅提供游戏官方网站的链接入口，帮助您以最直接的方式发现并进入心仪的游戏。",
                                    "我们的定位是：做一个有品味、可信赖的游戏发现工具。",
                                    "核心功能",
                                    "本站的功能围绕“快速、准确地找到好游戏”这一目标设计：",
                                    "· 分类导航：按玩法类型整理游戏，通过左侧边栏即可快速筛选。侧边栏支持鼠标悬停自动展开/收缩，移动端则自动切换为汉堡菜单。",
                                    "· 一键跳转：点击任意游戏卡片，将在新标签页直接打开游戏官网。无中间页，无弹窗广告，跳转采用 rel=\"noopener noreferrer\" 属性以确保安全。",
                                    "· 实时搜索：顶部搜索框支持按游戏名称实时筛选，响应迅速，并兼容中英日文及拼音首字母缩写检索。",
                                    "· 响应式布局：自动适配电脑、平板与手机屏幕，在不同设备上都能获得良好的浏览体验。",
                                    "· 暗色主题：采用深色背景与高对比度文字，长期浏览不易疲劳，也能更好地衬托色彩鲜艳的游戏封面。",
                                    "· 浏览体验优化：图片采用懒加载技术，滚动至可视区域才开始加载；加载过程中显示骨架屏动画，避免白屏闪烁。",
                                    "收录标准",
                                    "本站目前收录了超过 100 款优质网页游戏，涵盖生存、射击、动作、策略、休闲、模拟等品类。",
                                    "我们坚持明确的收录标准：",
                                    "1. 即开即玩：游戏须在网页端原生运行，无需下载客户端或安装插件（游戏内可选注册不计入必要条件）。",
                                    "2. 链接安全有效：官网稳定可访问，且不包含恶意代码、不跳转至无关页面。",
                                    "3. 质量门槛：游戏须具备一定的玩家基础或社区活跃度。新游戏需有客观评测或开发者公开声明佐证。",
                                    "4. 原创性：非简单克隆或换皮作品，玩法具有自身特色。",
                                    "收录流程：用户推荐 → 初审（链接与内容合规）→ 技术测试（多浏览器/设备兼容性）→ 质量评估 → 收录入库 → 更新日志公示。全流程通常在 5 个工作日内完成。",
                                    "关于公正性：所有收录决定均基于上述标准与真实体验。我们珍视您的信任，未来若推出付费推广合作（如专题展示位），此类内容均会清晰标注，与编辑推荐明确区分。",
                                    "使用说明",
                                    "桌面端：通过左侧边栏选择分类浏览，或使用顶部搜索框查找特定游戏。点击卡片即可在新标签页进入游戏官网。",
                                    "移动端：点击左上角菜单图标呼出分类浮层，选择后自动收起并切换内容。搜索与跳转操作与桌面端一致。",
                                    "提示：所有游戏均运行在其官网上，本站无法控制第三方网站的加载速度、广告或服务器稳定性。如遇链接失效，欢迎通过邮箱反馈。",
                                    "内容维护",
                                    "我们保持以下维护节奏，确保信息有效：",
                                    "· 例行检查：每周对所有链接进行可达性测试。",
                                    "· 失效处理：连续数周不可达的链接将被标记并暂时隐藏。若规定期限内恢复则重新上线，否则正式移除。",
                                    "· 游戏新增：每月至少新增 3 至 5 款游戏。新游戏会先在“最新游戏”分类展示，之后根据数据归入主分类。",
                                    "· 更新日志：页脚提供更新日志入口，详细记录每次的游戏新增、移除及功能变更，按月归档，公开可查。",
                                    "· 反馈驱动：通过邮箱提交的链接报错或推荐，均会进入任务队列，高优先级问题将在 24 小时内人工复核。",
                                    "设计理念",
                                    "我们的每一项决策都遵循以下原则：",
                                    "· 用户优先：功能设计以“是否方便玩家”为唯一标准。目前本站无商业广告，未来若引入商务合作，将严格限制形式与位置，确保不干扰核心浏览体验。",
                                    "· 简洁克制：页面上的每个元素都应有明确功能。我们宁可暂缓实现，也不堆砌用户不关心的冗余信息。",
                                    "· 尊重版权：所有游戏的商标、美术等知识产权均归原权利方所有，本站仅提供链接导航。如权利方认为展示方式不妥，可随时联系处理。",
                                    "· 透明迭代：我们承认当前版本远非完美。更新日志、收录标准、维护记录均公开可查。我们鼓励用户提出建议，每一条有效反馈都会被记录并纳入后续版本考量。",
                                    "如果您对本站有任何疑问或建议，欢迎通过“联系我们”页面的邮箱与我们沟通。感谢您的使用。",
                                    "—— Fuunio"
                        ]
            },
            "contact": {
                        "title": "联系我们",
                        "body": [
                                    "感谢你使用 Fuunio。我们很期待听到你的声音——无论是推荐游戏、报告问题，还是单纯想聊聊想法，都欢迎随时来信。",
                                    "联系邮箱：fuunio@qq.com",
                                    "一、游戏推荐",
                                    "发现了一款好玩的 .io 或轻量网页游戏，但 Fuunio 上还没有？快告诉我们。",
                                    "来信时最好能包含：",
                                    "· 游戏名称",
                                    "· 官方网站链接",
                                    "· 简短推荐理由（比如玩法特色、为什么你觉得值得收录）",
                                    "我们会在 7 个工作日内完成评估并邮件回复你。成功收录的游戏会在“更新日志”中公示。",
                                    "二、链接报错",
                                    "如果点击某个游戏卡片后发现链接失效、跳转错误，或者官网换了新地址，请告诉我们。",
                                    "来信时请说明：",
                                    "· 是哪款游戏",
                                    "· 具体问题（比如“显示404”“域名已过期”“跳到了无关页面”）",
                                    "我们会尽快核实并修复。高频反馈的失效链接会被优先处理。",
                                    "三、功能建议",
                                    "你对网站的功能、交互设计或者分类方式有什么想法吗？无论是大方向还是小细节，我们都想听。",
                                    "来信时可以聊聊：",
                                    "· 涉及的功能模块（比如搜索、侧边栏、游戏卡片等）",
                                    "· 你觉得目前哪里不够好",
                                    "· 你希望改成什么样（有想法的话）",
                                    "每一条合理的建议都会被记录下来，纳入后续版本的迭代计划中。被采纳的建议，我们会把你的名字写在更新日志里致谢（当然，如果你愿意的话）。",
                                    "四、版权相关",
                                    "如果你是某款游戏的权利方，认为 Fuunio 上的展示方式（包括游戏名称、图标、描述等）有不妥之处，请通过邮箱与我们联系。",
                                    "来信时请提供：",
                                    "· 你的身份证明及权利证明",
                                    "· 涉及的具体游戏及对应链接",
                                    "· 你希望我们如何调整（修改描述、移除条目等）",
                                    "我们会在 48 小时内核实，并根据你的诉求及时处理。",
                                    "五、其他事宜",
                                    "媒体报道、技术交流、合作咨询……以上没有涵盖的事情，也可以发到同一个邮箱。我们会在 48 小时内人工回复（节假日顺延）。",
                                    "写邮件的小建议： 邮件主题可以标一下类别，比如“游戏推荐”“链接报错”“功能建议”“版权事宜”，这样我们能更快地处理你的来信。",
                                    "期待你的邮件。",
                                    "—— Fuunio"
                        ]
            },
            "privacy": {
                        "title": "隐私政策",
                        "body": [
                                    "最后更新：2026年6月",
                                    "欢迎使用 Fuunio（以下简称“本站”）。我们非常重视你的隐私保护。本政策旨在说明我们如何处理你的信息，请在使用本站前仔细阅读。你继续使用本站，即表示你已理解并同意本政策的全部内容。",
                                    "一、我们收集什么信息",
                                    "1.1 你主动提供的信息",
                                    "本站目前无需注册即可使用全部功能，不强制收集你的姓名、电话号码等个人身份信息。",
                                    "但当你通过“联系我们”页面的邮箱与我们沟通时（如推荐游戏、报告链接失效），你会主动提供你的电子邮箱地址及邮件内容。这些信息仅用于回复你的来信，不会用于营销或其他目的。",
                                    "1.2 自动收集的信息",
                                    "当你访问本站时，服务器可能会自动记录以下信息：",
                                    "· IP 地址",
                                    "· 浏览器类型与版本",
                                    "· 操作系统",
                                    "· 访问时间与来源页面",
                                    "这些信息以服务器日志形式存在，我们仅用于统计访问量、排查技术问题和保障网站安全，不会用于识别你的个人身份。",
                                    "1.3 本地存储与 Cookie",
                                    "本站使用极少的本地存储和必要 Cookie，例如记住侧边栏的展开/收缩状态，或判断你是否首次访问以显示引导提示。这些数据仅保存在你的浏览器本地，不包含个人身份信息，且会话结束后会自动失效。",
                                    "我们不使用任何追踪类 Cookie、第三方分析工具或广告 Cookie。详细说明请参阅《Cookie 政策》。",
                                    "二、我们如何使用信息",
                                    "我们使用信息的目的仅限于：",
                                    "· 确保网站正常运行与安全防护；",
                                    "· 分析网站访问趋势（如独立访客数、热门分类），以改进内容布局；",
                                    "· 检测并防范恶意访问或攻击；",
                                    "· 回复你通过邮箱提交的反馈、推荐或报错。",
                                    "我们不会将你的信息出售、出租或共享给任何第三方，除非法律法规另有规定，或应有权机关的合法要求。",
                                    "三、第三方链接",
                                    "本站的核心功能是提供游戏官网的链接导航。所有游戏链接均指向第三方网站，这些网站拥有独立的隐私政策。",
                                    "本政策仅适用于本站。当你点击链接离开本站后，我们对第三方网站的信息收集行为不承担责任。建议你在访问前仔细阅读其隐私政策。",
                                    "四、数据安全",
                                    "我们采取合理的技术措施保护你的信息，包括 HTTPS 加密传输、定期更新服务器软件、限制访问权限等。",
                                    "但请注意，互联网传输无法保证绝对安全，任何安全措施都存在被突破的可能。你理解并同意承担这一风险。",
                                    "五、你的权利",
                                    "根据相关法律法规，你可能享有访问、更正、删除、限制处理等权利。",
                                    "由于本站目前不主动收集个人身份信息，上述权利的实际行使主要涉及你通过邮件主动提供的信息。如需行使相关权利，请通过“联系我们”页面的邮箱提交请求，我们将在 15 个工作日内 回复。",
                                    "六、未成年人保护",
                                    "本站的核心用户群体包含未成年人。我们不会有意收集未成年人的个人信息。如果你是需要监护的未成年人，请在监护人陪同下使用本站。",
                                    "如监护人发现我们无意中收集了未成年人的信息，请通过邮箱联系我们，我们将及时删除。",
                                    "七、政策更新",
                                    "我们保留随时修订本政策的权利。更新后的版本将在本页面公布，并注明最后更新日期。",
                                    "如发生重大变更（例如信息收集目的发生实质变化），我们将通过网站公告等醒目方式通知你。你继续使用本站即视为接受更新后的政策。建议定期查阅本页面。",
                                    "八、联系我们",
                                    "如对本政策有任何疑问、意见或投诉，或希望行使你的隐私权利，请通过以下方式联系我们：",
                                    "联系邮箱：fuunio@qq.com",
                                    "邮件主题建议注明“隐私政策咨询”。我们将在 48 小时内确认收到，并在 15 个工作日内 给予实质性答复。",
                                    "九、适用法律",
                                    "本政策的解释及争议解决适用中华人民共和国法律。因本政策引起的争议，双方应友好协商解决。",
                                    "感谢你信任 Fuunio。我们将持续努力保护你的隐私安全。",
                                    "—— Fuunio"
                        ]
            }
        };

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
                shootBattle: '射击对战',
                playNow: '立即游玩',
                loadMore: '加载更多游戏',
                noResults: '未找到相关游戏',
                noResultsDesc: '试试其他关键词',
                home: '首页',
                newArrivals: '新品尝鲜',
                dailyBlindBox: '每日盲盒',
                interestCamp: '兴趣营地',
                gameSea: '游戏公海',
                creativeMarket: '创意集市',
                comingSoon: '正在开发，敬请期待',
                dice: '随缘玩',
                info: '介绍',
                play: '立即玩',
                playInNewWindow: '在新窗口中游玩',
                rollAgain: '🎲 再摇一次',
                gameIntro: '📖 游戏介绍',
                gameIntroFallback: '暂无更详细的介绍，先用这段简介快速了解这款游戏。',
                recommendTitle: '猜你喜欢',
                copyright: '© 2026 Fuunio. All rights reserved. 未经许可禁止转载、复制、镜像本站内容与代码。',
                footerText: '发现你的下一款挚爱',
                sidebarToggleOpen: '展开侧导航',
                sidebarToggleClose: '收起侧导航',
                languageName: '中文',
                newArrivalsSubtitle: '这里展示的是开发者们最新提交的 io 类 HTML 游戏，每一款都热气腾腾。',
                newArrivalsNote: '所有游戏均为开发者自主提交，本站仅提供链接导航。如发现违规内容，请举报。',
                developerInviteTitle: '🎮 你做了一个好玩的 io 游戏？',
                developerInviteIntro: '如果你的游戏是网页端原生运行、即开即玩、有自己独特玩法的，欢迎提交到 Fuunio。',
                developerInviteReview: '通过审核后，你的作品会出现在这里，被真正喜欢 io 游戏的玩家发现。',
                developerInviteGain: '你将获得：专属展示位 / 真实玩家反馈 / 未来付费推广的优先机会',
                developerInviteReject: '我们不接受：换皮抄袭、恶意代码、违法违规内容',
                submitGame: '📤 提交你的游戏',
                submitWork: '📤 提交你的作品',
                playExperience: '🎮 立即体验',
                gameSeaKicker: '玩家共创',
                gameSeaDesc: '把值得一试的网页游戏推荐给 Fuunio。我们会定期筛选链接、补充简介，并把优质作品加入站内列表。',
                gameRecommendServiceTitle: '游戏推荐服务',
                gameRecommendServiceDesc: '发现好玩的宝藏游戏时，可以直接提交名称、链接和推荐理由。',
                recommendTreasureGame: '📩推荐宝藏游戏',
                playerLoungeTitle: '玩家大厅',
                playerLoungeDesc: '想和其他玩家聊游戏、报新游、找队友，可以进入 Fuunio 玩家大厅。',
                joinPlayerLounge: '💬 加入玩家大厅',
                gameReportServiceTitle: '游戏报错服务',
                gameReportServiceDesc: '遇到游戏链接打不开、加载异常或内容问题时，可以直接提交报错信息。',
                submitGameIssue: '🛠️提交游戏报错',
                creativeMarketTitle: '🛠️ 玩家工坊',
                creativeMarketSubtitle: '这里汇集了 Fuunio 玩家自制的 HTML 小游戏，每一款都是创造力的结晶。',
                creativeMarketNote: '本站仅提供作品链接导航，游戏运行于开发者自有服务器。如发现违规内容，请通过“联系我们”举报。',
                creativeSubmitCopy: '用 HTML 写了好玩的小游戏？来这里展示给更多人玩！',
                creativeLoungeCopy: '进入 QQ 频道，和 Fuunio 玩家一起交流作品、反馈和新玩法。',
                interestTitle: 'mk48.io',
                interestTagline: '指挥你的战舰，在广阔海域中与其他玩家展开生死对决。升级舰船、制定战术、征服海洋，这是一场属于舰长的终极考验。',
                playNowCta: '🎮 立即开玩',
                joinCommunity: '💬 加入玩家社区',
                interestCoverLabel: 'mk48.io 游戏封面占位',
                interestOverviewTitle: '📖 关于这款游戏',
                interestContributeText: '你有更好的战术心得？或者发现了我们遗漏的技巧？',
                shareGuide: '📤 分享我的攻略',
                interestFooterNew: '探索新游戏 → 新品尝鲜',
                interestFooterCreative: '浏览玩家作品 → 创意集市',
                interestFooterSea: '返回游戏公海',
                footerPlatform: '平台',
                footerTerms: '条款',
                footerCommunity: '社区',
                footerAbout: '关于我们',
                footerContact: '联系我们',
                footerFaq: '常见问题',
                footerServiceTerms: '服务条款',
                footerPrivacy: '隐私政策',
                footerCookie: 'Cookie政策',
                blindFloatShort: '盲盒',
                blindCloseLabel: '关闭每日盲盒',
                blindSlogan: '发现你的下一款挚爱',
                blindBoxLabel: '开启每日盲盒',
                blindHint: '👆 点击盲盒，开启惊喜',
                blindFallbackDesc: '今天的惊喜已经准备好，点开试试看。',
                blindPlay: '🎮 立即开玩',
                modalDefaultTitle: '游戏名称',
                modalDefaultDesc: '点击下方按钮在新窗口中打开游戏',
                policyTitle: '条款',
                creativeEmpty: '🏗️ 创意集市正在建设中，第一批作品即将上架。现在就「提交你的作品」，成为首个入驻的开发者吧！',
                newGamesEmpty: '🏗️ 还没有开发者投稿。你是第一个吗？点击上方按钮提交你的作品！',
                untitledWork: '未命名作品',
                untitledGame: '未命名游戏',
                noWorkDesc: '作者暂未填写简介。',
                noGameDesc: '开发者暂未填写简介。',
                noResourceTitle: '未命名资料',
                noResourceSummary: '资料摘要待补充。',
                detailsSummary: '展开编辑摘要',
                detailsFallback: '后续可在 MK48_RESOURCES 中补充详细内容。',
                viewOriginal: '查看原文',
                popularityPlayed: '人玩过',
                popularityTimes: '次游玩',
                loading: '加载中...',
                discordSoon: 'Discord 社区即将开放，敬请期待。',
                creativeWorkCards: [
                    { name:'张雪峰快跑', description:'操控角色一路冲刺闪避，在快节奏关卡里挑战反应和路线判断。', tags:['休闲','跑酷','创意'] },
                    { name:'曾经的王', description:'一款带有叙事感的创意网页小游戏，适合短时间体验独特氛围。', tags:['剧情','创意','休闲'] }
                ],
                newSubmissionCards: [
                    { name:'暂无首发作品', author:'Fuunio', description:'这里会优先展示通过审核的开发者新作。现在可以点击上方按钮提交你的 io 类 HTML 游戏。', tags:['占位','开发者投稿'] }
                ],
                mk48ResourceCards: [
                    { title:'机制详解', summary:'从视野、船体、武器、升级路线到战斗节奏，帮助新玩家先理解 mk48.io 的核心规则。', detail:'适合先读：弄清楚船只成长、交战距离、火力覆盖和团队协作后，再进入实战会少走弯路。' },
                    { title:'新手指南', summary:'面向刚入坑玩家的上手路线，重点关注开局选择、基础操作、资源判断和避免被集火。', detail:'建议把它当成第一份清单：先熟悉移动和开火，再学习何时撤退、何时追击、何时加入队友战线。' },
                    { title:'基地冲榜', summary:'围绕基地玩法的目标拆解，适合已经会基础操作、想进一步提升效率和排名的玩家。', detail:'核心是节奏管理：路线规划、风险控制、队伍分工和战斗收益都要一起看，不能只盯单次击杀。' },
                    { title:'舰艇教程', summary:'整理自“鱼鱼将”的舰艇教学帖，保留教程要点入口，不附带评论内容。', detail:'当前环境无法稳定抓取论坛正文，页面先提供人工编辑摘要和原帖入口；后续可把帖子正文提取后替换到这个 detail 字段。' }
                ],
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
                },
                gameTags: {
                    '休闲': '休闲',
                    '多人': '多人',
                    '策略': '策略',
                    'FPS': '射击',
                    '射击': '射击',
                    '升级': '升级',
                    '吃鸡': '大逃杀',
                    '趣味': '趣味',
                    '生存': '生存',
                    '吞噬': '吞噬',
                    '社交': '社交',
                    '绘画': '绘画',
                    '建造': '建造',
                    '方块': '方块',
                    '竞速': '竞速',
                    '漂移': '漂移',
                    '快节奏': '快节奏',
                    '动作': '动作',
                    '海洋': '海洋'
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
                shootBattle: 'Shooting Battle',
                playNow: 'Play Now',
                loadMore: 'Load More Games',
                noResults: 'No games found',
                noResultsDesc: 'Try other keywords',
                home: 'Home',
                newArrivals: 'New Arrivals',
                dailyBlindBox: 'Daily Box',
                interestCamp: 'Camp',
                gameSea: 'Game Sea',
                creativeMarket: 'Market',
                comingSoon: 'Coming soon!',
                dice: 'Random Play',
                info: 'Info',
                play: 'Play Now',
                playInNewWindow: 'Play in new window',
                rollAgain: '🎲 Roll Again',
                gameIntro: '📖 Game Info',
                gameIntroFallback: 'A full translated write-up is not available yet. Here is the localized summary for this game.',
                recommendTitle: 'You Might Also Like',
                copyright: '© 2026 Fuunio. All rights reserved. Unauthorized reposting, copying, mirroring, or reuse of site content and code is prohibited.',
                footerText: 'Discover your next favorite game',
                sidebarToggleOpen: 'Open side navigation',
                sidebarToggleClose: 'Collapse side navigation',
                languageName: 'English',
                newArrivalsSubtitle: 'A first-look shelf for newly submitted io-style HTML games from developers.',
                newArrivalsNote: 'All games are submitted by developers. Fuunio only provides link navigation. Please report anything inappropriate.',
                developerInviteTitle: '🎮 Built a fun io game?',
                developerInviteIntro: 'If your game runs natively in the browser, starts instantly, and has its own distinct play style, submit it to Fuunio.',
                developerInviteReview: 'After review, your work can appear here and be discovered by players who genuinely enjoy io games.',
                developerInviteGain: 'You can get: a dedicated showcase spot / real player feedback / priority access to future paid promotion.',
                developerInviteReject: 'We do not accept: reskins, plagiarism, malicious code, or illegal content.',
                submitGame: '📤 Submit your game',
                submitWork: '📤 Submit your work',
                playExperience: '🎮 Play now',
                gameSeaKicker: 'Player Picks',
                gameSeaDesc: 'Recommend worthwhile browser games to Fuunio. We regularly review links, add summaries, and include quality picks in the site list.',
                gameRecommendServiceTitle: 'Game Recommendation',
                gameRecommendServiceDesc: 'When you find a hidden gem, submit its name, link, and why you recommend it.',
                recommendTreasureGame: '📩 Recommend a game',
                playerLoungeTitle: 'Player Lounge',
                playerLoungeDesc: 'Want to chat about games, share new finds, or look for teammates? Join the Fuunio player lounge.',
                joinPlayerLounge: '💬 Join player lounge',
                gameReportServiceTitle: 'Game Issue Report',
                gameReportServiceDesc: 'If a game link is broken, loading fails, or content looks wrong, submit an issue report.',
                submitGameIssue: '🛠️ Report a game issue',
                creativeMarketTitle: '🛠️ Player Workshop',
                creativeMarketSubtitle: 'A collection of HTML mini games made by Fuunio players, each one a small spark of creativity.',
                creativeMarketNote: 'Fuunio only provides navigation links. Games run on developers’ own servers. If you find inappropriate content, report it through Contact Us.',
                creativeSubmitCopy: 'Made a fun HTML mini game? Show it here and let more people play it.',
                creativeLoungeCopy: 'Join the QQ channel to discuss works, feedback, and new play ideas with Fuunio players.',
                interestTitle: 'mk48.io',
                interestTagline: 'Command your warship across open seas and battle other players. Upgrade your vessel, shape your tactics, and conquer the ocean.',
                playNowCta: '🎮 Play now',
                joinCommunity: '💬 Join community',
                interestCoverLabel: 'mk48.io game cover placeholder',
                interestOverviewTitle: '📖 About this game',
                interestContributeText: 'Have better tactics or found tips we missed?',
                shareGuide: '📤 Share my guide',
                interestFooterNew: 'Explore new games → New Arrivals',
                interestFooterCreative: 'Browse player works → Market',
                interestFooterSea: 'Back to Game Sea',
                footerPlatform: 'Platform',
                footerTerms: 'Terms',
                footerCommunity: 'Community',
                footerAbout: 'About us',
                footerContact: 'Contact us',
                footerFaq: 'FAQ',
                footerServiceTerms: 'Terms of Service',
                footerPrivacy: 'Privacy Policy',
                footerCookie: 'Cookie Policy',
                blindFloatShort: 'Box',
                blindCloseLabel: 'Close daily box',
                blindSlogan: 'Discover your next favorite game',
                blindBoxLabel: 'Open daily box',
                blindHint: '👆 Tap the box for a surprise',
                blindFallbackDesc: 'Today’s surprise is ready. Open it and take a look.',
                blindPlay: '🎮 Play now',
                modalDefaultTitle: 'Game title',
                modalDefaultDesc: 'Click the button below to open the game in a new window',
                policyTitle: 'Terms',
                creativeEmpty: '🏗️ The Market is under construction. The first works are coming soon. Submit your work and become one of the first creators here.',
                newGamesEmpty: '🏗️ No developer submissions yet. Want to be first? Use the button above to submit your work.',
                untitledWork: 'Untitled work',
                untitledGame: 'Untitled game',
                noWorkDesc: 'The creator has not added a description yet.',
                noGameDesc: 'The developer has not added a description yet.',
                noResourceTitle: 'Untitled resource',
                noResourceSummary: 'Resource summary coming soon.',
                detailsSummary: 'Open editor note',
                detailsFallback: 'More details can be added later in MK48_RESOURCES.',
                viewOriginal: 'View source',
                popularityPlayed: 'players',
                popularityTimes: 'plays',
                loading: 'Loading...',
                discordSoon: 'Discord community is coming soon.',
                creativeWorkCards: [
                    { name:'Zhang Xuefeng Run', description:'Sprint and dodge through fast-paced stages that test reaction speed and route choices.', tags:['Casual','Parkour','Creative'] },
                    { name:'The Former King', description:'A narrative-flavored creative web mini game, suited for a short atmospheric play session.', tags:['Story','Creative','Casual'] }
                ],
                newSubmissionCards: [
                    { name:'No launch work yet', author:'Fuunio', description:'Approved new developer games will be showcased here first. Use the button above to submit your io-style HTML game.', tags:['Placeholder','Developer submission'] }
                ],
                mk48ResourceCards: [
                    { title:'Mechanics Guide', summary:'Covers vision, hulls, weapons, upgrade paths, and combat tempo so new players can understand mk48.io’s core rules first.', detail:'A good first read: understand ship growth, engagement range, fire coverage, and teamwork before heading into battle.' },
                    { title:'Beginner Guide', summary:'An onboarding route for new players, focused on opening choices, basic controls, resource judgment, and avoiding focus fire.', detail:'Treat it as a first checklist: learn movement and firing, then learn when to retreat, chase, and join your team’s line.' },
                    { title:'Base Ranking', summary:'Breaks down base-focused play for players who know the basics and want to improve efficiency and ranking.', detail:'The key is rhythm management: route planning, risk control, team roles, and combat payoff all matter together.' },
                    { title:'Ship Tutorial', summary:'A curated entry to ship tutorial notes from “Yuyu Jiang”, preserving the guide entry without forum comments.', detail:'The forum body cannot be reliably fetched in this environment, so this page provides an edited summary and source link for now.' }
                ],
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
                },
                gameTags: {
                    '休闲': 'Casual',
                    '多人': 'Multiplayer',
                    '策略': 'Strategy',
                    'FPS': 'FPS',
                    '射击': 'Shooting',
                    '升级': 'Upgrade',
                    '吃鸡': 'Battle Royale',
                    '趣味': 'Fun',
                    '生存': 'Survival',
                    '吞噬': 'Eat',
                    '社交': 'Social',
                    '绘画': 'Drawing',
                    '建造': 'Building',
                    '方块': 'Block',
                    '竞速': 'Racing',
                    '漂移': 'Drift',
                    '快节奏': 'Fast-paced',
                    '动作': 'Action',
                    '海洋': 'Ocean'
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
                shootBattle: 'シューティングバトル',
                playNow: '今すぐプレイ',
                loadMore: 'もっとゲームを読み込む',
                noResults: 'ゲームが見つかりません',
                noResultsDesc: '他のキーワードを試してください',
                home: 'ホーム',
                newArrivals: '新着',
                dailyBlindBox: 'デイリーボックス',
                interestCamp: '趣味キャンプ',
                gameSea: 'ゲーム公海',
                creativeMarket: '創意マーケット',
                comingSoon: '開発中です',
                dice: 'ランダムプレイ',
                info: '紹介',
                play: 'プレイ',
                playInNewWindow: '新しいウィンドウでプレイ',
                rollAgain: '🎲 もう一度振る',
                gameIntro: '📖 ゲーム紹介',
                gameIntroFallback: '詳しい翻訳紹介はまだありません。まずはこのゲームのローカライズ済み概要をご覧ください。',
                recommendTitle: 'おすすめ',
                copyright: '© 2026 Fuunio. All rights reserved. サイトの内容とコードの無断転載、複製、ミラーリング、再利用を禁じます。',
                footerText: '次のお気に入りを発見',
                sidebarToggleOpen: 'サイドナビを開く',
                sidebarToggleClose: 'サイドナビを閉じる',
                languageName: '日本語',
                newArrivalsSubtitle: '開発者から新しく投稿された io 系 HTML ゲームを、いち早く紹介するページです。',
                newArrivalsNote: 'すべてのゲームは開発者投稿です。Fuunio はリンク案内のみを提供します。不適切な内容を見つけた場合はご報告ください。',
                developerInviteTitle: '🎮 楽しい io ゲームを作りましたか？',
                developerInviteIntro: 'ブラウザでそのまま動き、すぐ遊べて、独自の遊びがあるゲームなら、ぜひ Fuunio に投稿してください。',
                developerInviteReview: '審査後、あなたの作品はここに掲載され、io ゲーム好きのプレイヤーに見つけてもらえます。',
                developerInviteGain: '得られるもの：専用掲載枠 / 実際のプレイヤー反応 / 将来の有料プロモーション優先枠。',
                developerInviteReject: '受け付けないもの：リスキン、盗作、悪意あるコード、違法コンテンツ。',
                submitGame: '📤 ゲームを投稿',
                submitWork: '📤 作品を投稿',
                playExperience: '🎮 今すぐ体験',
                gameSeaKicker: 'プレイヤー推薦',
                gameSeaDesc: '試す価値のあるブラウザゲームを Fuunio に推薦できます。リンクを定期的に確認し、紹介文を追加して、良い作品をサイト内リストに加えます。',
                gameRecommendServiceTitle: 'ゲーム推薦サービス',
                gameRecommendServiceDesc: '面白い掘り出し物を見つけたら、名前、リンク、推薦理由を送ってください。',
                recommendTreasureGame: '📩 ゲームを推薦',
                playerLoungeTitle: 'プレイヤーラウンジ',
                playerLoungeDesc: 'ゲームの話、新作共有、チームメイト探しをしたいなら、Fuunio プレイヤーラウンジへ。',
                joinPlayerLounge: '💬 ラウンジに参加',
                gameReportServiceTitle: 'ゲーム不具合報告',
                gameReportServiceDesc: 'リンクが開かない、読み込みが異常、内容に問題がある場合は、不具合情報を送信できます。',
                submitGameIssue: '🛠️ 不具合を報告',
                creativeMarketTitle: '🛠️ プレイヤー工房',
                creativeMarketSubtitle: 'Fuunio プレイヤーが自作した HTML ミニゲームを集めた場所です。どれも創造力の結晶です。',
                creativeMarketNote: 'Fuunio は作品リンクの案内のみを行います。ゲームは開発者自身のサーバーで動作します。不適切な内容は「お問い合わせ」からご報告ください。',
                creativeSubmitCopy: 'HTML で楽しいミニゲームを作りましたか？ここで多くの人に遊んでもらいましょう。',
                creativeLoungeCopy: 'QQ チャンネルで、Fuunio プレイヤーと作品、フィードバック、新しい遊び方について交流できます。',
                interestTitle: 'mk48.io',
                interestTagline: '広大な海で戦艦を指揮し、他のプレイヤーと激しく対戦します。艦を強化し、戦術を組み立て、海を制覇しましょう。',
                playNowCta: '🎮 今すぐプレイ',
                joinCommunity: '💬 コミュニティに参加',
                interestCoverLabel: 'mk48.io ゲームカバーのプレースホルダー',
                interestOverviewTitle: '📖 このゲームについて',
                interestContributeText: 'より良い戦術や、見落としているコツを知っていますか？',
                shareGuide: '📤 攻略を共有',
                interestFooterNew: '新しいゲームを見る → 新着',
                interestFooterCreative: 'プレイヤー作品を見る → 創意マーケット',
                interestFooterSea: 'ゲーム公海へ戻る',
                footerPlatform: 'プラットフォーム',
                footerTerms: '規約',
                footerCommunity: 'コミュニティ',
                footerAbout: '私たちについて',
                footerContact: 'お問い合わせ',
                footerFaq: 'よくある質問',
                footerServiceTerms: '利用規約',
                footerPrivacy: 'プライバシーポリシー',
                footerCookie: 'Cookieポリシー',
                blindFloatShort: 'ボックス',
                blindCloseLabel: 'デイリーボックスを閉じる',
                blindSlogan: '次のお気に入りを発見',
                blindBoxLabel: 'デイリーボックスを開く',
                blindHint: '👆 ボックスをタップしてサプライズを開く',
                blindFallbackDesc: '今日のサプライズが用意できました。開いて見てみましょう。',
                blindPlay: '🎮 今すぐプレイ',
                modalDefaultTitle: 'ゲーム名',
                modalDefaultDesc: '下のボタンを押して新しいウィンドウでゲームを開きます',
                policyTitle: '規約',
                creativeEmpty: '🏗️ 創意マーケットは準備中です。最初の作品はまもなく掲載されます。作品を投稿して、最初のクリエイターになりましょう。',
                newGamesEmpty: '🏗️ まだ開発者投稿はありません。最初の一人になりませんか？上のボタンから作品を投稿できます。',
                untitledWork: '無題の作品',
                untitledGame: '無題のゲーム',
                noWorkDesc: '作者はまだ紹介文を入力していません。',
                noGameDesc: '開発者はまだ紹介文を入力していません。',
                noResourceTitle: '無題の資料',
                noResourceSummary: '資料概要は後で追加されます。',
                detailsSummary: '編集メモを開く',
                detailsFallback: '詳細は後で MK48_RESOURCES に追加できます。',
                viewOriginal: '原文を見る',
                popularityPlayed: '人がプレイ',
                popularityTimes: '回プレイ',
                loading: '読み込み中...',
                discordSoon: 'Discordコミュニティは近日公開予定です。',
                creativeWorkCards: [
                    { name:'張雪峰ラン', description:'キャラクターを走らせて障害物を避け、テンポの速いステージで反応とルート判断を試します。', tags:['カジュアル','パルクール','創意'] },
                    { name:'かつての王', description:'物語性のある創作Webミニゲームです。短時間で独特の雰囲気を体験できます。', tags:['ストーリー','創意','カジュアル'] }
                ],
                newSubmissionCards: [
                    { name:'初掲載作品はまだありません', author:'Fuunio', description:'審査を通過した開発者の新作はここに優先表示されます。上のボタンから io 系 HTML ゲームを投稿できます。', tags:['プレースホルダー','開発者投稿'] }
                ],
                mk48ResourceCards: [
                    { title:'仕組み詳解', summary:'視界、船体、武器、アップグレード、戦闘テンポを通して、mk48.io の基本ルールを理解できます。', detail:'まず読むのにおすすめです。艦の成長、交戦距離、火力範囲、チーム連携を把握してから実戦に入ると迷いが減ります。' },
                    { title:'初心者ガイド', summary:'始めたばかりのプレイヤー向けに、序盤選択、基本操作、資源判断、集中攻撃の回避を整理しています。', detail:'最初のチェックリストとして使えます。移動と射撃に慣れた後、撤退、追撃、味方戦線への合流を学びましょう。' },
                    { title:'基地ランキング', summary:'基地玩法を中心に、基本操作を覚えたプレイヤーが効率と順位を上げるための要点をまとめています。', detail:'大切なのはリズム管理です。ルート計画、リスク管理、チーム分担、戦闘収益をまとめて見る必要があります。' },
                    { title:'艦艇チュートリアル', summary:'「魚魚将」の艦艇チュートリアル投稿を整理した入口です。コメント部分は含めていません。', detail:'この環境ではフォーラム本文を安定して取得できないため、編集済み要約と原文リンクを先に提供しています。' }
                ],
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
                },
                gameTags: {
                    '休闲': 'カジュアル',
                    '多人': 'マルチプレイヤー',
                    '策略': 'ストラテジー',
                    'FPS': 'FPS',
                    '射击': 'シューティング',
                    '升级': 'アップグレード',
                    '吃鸡': 'バトルロワイヤル',
                    '趣味': 'ファン',
                    '生存': 'サバイバル',
                    '吞噬': '食べる',
                    '社交': 'ソーシャル',
                    '绘画': '描く',
                    '建造': '建築',
                    '方块': 'ブロック',
                    '竞速': 'レーシング',
                    '漂移': 'ドリフト',
                    '快节奏': '高速',
                    '动作': 'アクション',
                    '海洋': 'オーシャン'
                }
            }
        };

        let currentLang = 'zh';
        let activeModalGameId = null;
        let activeModalMode = null;

        function handleLogoImageError(img) {
            const fallback = img.dataset.fallbackSrc;
            const logo = img.closest('.logo');
            if(fallback) {
                img.classList.add('using-wide-fallback');
                if(logo) logo.classList.add('using-wide-logo');
                img.removeAttribute('data-fallback-src');
                img.src = fallback;
                return;
            }
            img.hidden = true;
            img.classList.remove('using-wide-fallback');
            if(logo) logo.classList.remove('using-wide-logo');
            const fallbackMark = img.nextElementSibling;
            if(fallbackMark) fallbackMark.hidden = false;
        }

        const GAMES_DATA = [
            { id:0, name:'坦克大作战', icon:'🎮', category:'io', tags:['休闲','多人'], url:'https://arras.io/', isHot:true, isNew:false },
            { id:1, name:'自由钢琴', icon:'🎹', category:'casual', tags:['休闲','音乐'], url:'https://www.autopiano.cn/', isHot:false, isNew:true },
            { id:2, name:'Bloxd.IO', icon:'🧱', category:'casual', tags:['休闲','多人'], url:'https://bloxd.io/', isHot:true, isNew:false },
            { id:3, name:'风叶穿行', icon:'🍃', category:'action', tags:['跑酷','休闲'], url:'https://www.bilibili.com/blackboard/fe/activity-HQjQSdd3L8.html', isHot:false, isNew:true },
            { id:4, name:'Battle Dudes', icon:'⚔️', category:'shooting', tags:['射击','多人'], url:'https://battledudes.io/', isHot:false, isNew:false },
            { id:5, name:'Bellwoods', icon:' ', category:'casual', tags:['休闲','音乐'], url:'https://bellwoods.xyz/', isHot:false, isNew:true },
            { id:6, name:'赛博徒步', icon:'🥾', category:'survival', tags:['生存','策略'], url:'https://cyberhiking.com/', isHot:false, isNew:true },
            { id:7, name:'喵喵竞赛', icon:'🐱', category:'casual', tags:['休闲','多人'], url:'https://cat.llx.life/', isHot:true, isNew:false },
            { id:8, name:'太空飞船着陆', icon:'🚀', category:'casual', tags:['休闲','驾驶'], url:'https://cave.frvr.com/', isHot:false, isNew:false },
            { id:9, name:'纸牌游戏集合', icon:'🃏', category:'casual', tags:['棋牌','休闲'], url:'https://cardgames.io/', isHot:false, isNew:false },
            { id:10, name:'电子魔方', icon:'🧊', category:'casual', tags:['益智','休闲'], url:'https://cuber.heheda.top/', isHot:false, isNew:true },
            { id:11, name:'Deadswitch3', icon:' ', category:'shooting', tags:['射击','快节奏'], url:'https://deadswitch3.com/play/', isHot:false, isNew:false },
            { id:12, name:'Windows7 模拟', icon:'🖥️', category:'casual', tags:['休闲','模拟'], url:'https://desk.glitchy.website/', isHot:false, isNew:true },
            { id:13, name:'ACFUN 大逃杀', icon:'🎮', category:'shooting', tags:['吃鸡','多人'], url:'https://dts.momobako.com/index.php', isHot:false, isNew:false },
            { id:14, name:'Duck Lings', icon:'🦆', category:'casual', tags:['休闲','多人'], url:'https://ducklings.io/', isHot:true, isNew:false },
            { id:15, name:'Dino Swords', icon:'🦖', category:'casual', tags:['休闲','跑酷'], url:'https://dinoswords.gg/', isHot:false, isNew:true },
            { id:16, name:'深海大作战', icon:'🐙', category:'io', tags:['休闲','多人'], url:'https://deeeep.io/', isHot:true, isNew:false },
            { id:17, name:'Diep.io', icon:'🔵', category:'io', tags:['射击','升级'], url:'https://diep.io', isHot:true, isNew:false },
            { id:18, name:'挖矿大作战', icon:'⛏️', category:'io', tags:['休闲','多人'], url:'https://digdig.io/', isHot:false, isNew:false },
            { id:19, name:'信任的进化', icon:'🤝', category:'casual', tags:['益智','休闲'], url:'https://dccxi.com/trust/', isHot:false, isNew:true },
            { id:20, name:'绘迷', icon:'🎨', category:'casual', tags:['社交','绘画'], url:'https://enazo.cn/', isHot:false, isNew:false },
            { id:21, name:'俄罗斯方块变体', icon:'🧱', category:'casual', tags:['休闲','益智'], url:'https://tetr.io', isHot:false, isNew:false },
            { id:22, name:'Flappy Bird', icon:' ', category:'casual', tags:['休闲','挑战'], url:'https://flappy-windows.netlify.app/', isHot:false, isNew:true },
            { id:23, name:'Figure', icon:'🔲', category:'casual', tags:['益智','逻辑'], url:'https://figure.game/zh', isHot:false, isNew:true },
            { id:24, name:'florr.io', icon:'🌸', category:'io', tags:['动作','多人'], url:'https://florr.io/', isHot:false, isNew:false },
            { id:25, name:'塔防小游戏', icon:'🏰', category:'strategy', tags:['策略','塔防'], url:'https://www.tafang123.com/', isHot:false, isNew:false },
            { id:26, name:'水果忍者', icon:'🍉', category:'casual', tags:['休闲','切水果'], url:'https://fn.heheda.cn/', isHot:true, isNew:false },
            { id:27, name:'Gridspech', icon:' ', category:'casual', tags:['益智','连线'], url:'https://gridspech.baublejar.com/', isHot:false, isNew:true },
            { id:28, name:'数独', icon:'🧩', category:'casual', tags:['益智','逻辑'], url:'https://guanxl.com/sudoku', isHot:false, isNew:false },
            { id:29, name:'桌游合集', icon:'🎲', category:'casual', tags:['棋牌','多人'], url:'https://game.hullqin.cn/', isHot:true, isNew:false },
            { id:30, name:'Gold Digger', icon:'⛏️', category:'casual', tags:['休闲','挖矿'], url:'https://golddigger.frvr.com/', isHot:false, isNew:false },
            { id:31, name:'将军棋', icon:'👨‍✈️', category:'strategy', tags:['策略','对战'], url:'https://generals.io/', isHot:false, isNew:false },
            { id:32, name:'你画我猜', icon:'✏️', category:'casual', tags:['社交','绘画'], url:'https://gartic.io/', isHot:true, isNew:false },
            { id:33, name:'Flower Game', icon:'🌸', category:'casual', tags:['休闲','战斗'], url:'https://shturl.cc/Oztfb7DU0', isHot:false, isNew:true },
            { id:34, name:'潜伏者', icon:'🕵️', category:'shooting', tags:['射击','建造'], url:'https://lurkers.io/', isHot:false, isNew:false },
            { id:35, name:'LP文字游戏', icon:'📝', category:'casual', tags:['文字','休闲'], url:'https://www.lpengine.cn/', isHot:false, isNew:true },
            { id:36, name:'江湖论剑', icon:'⚔️', category:'casual', tags:['武侠','AI'], url:'https://jianghu.gtio.work/', isHot:true, isNew:false },
            { id:37, name:'Krunker.io', icon:'🎯', category:'shooting', tags:['FPS','多人'], url:'https://krunker.io/', isHot:true, isNew:false },
            { id:38, name:'Kiomet', icon:'🏰', category:'strategy', tags:['策略','扩张'], url:'https://shturl.cc/vDwzEyRA2', isHot:false, isNew:true },
            { id:39, name:'滑行者', icon:'⛷️', category:'casual', tags:['休闲','画线'], url:'https://www.linerider.com/', isHot:false, isNew:false },
            { id:40, name:'导弹游戏', icon:'💥', category:'casual', tags:['休闲','挑战'], url:'https://missile-game.bwhmather.com/', isHot:false, isNew:true },
            { id:41, name:'扫雷', icon:'💣', category:'casual', tags:['益智','逻辑'], url:'https://www.minesweeper.cn/', isHot:false, isNew:false },
            { id:42, name:'微软小游戏', icon:'🎮', category:'casual', tags:['休闲','合集'], url:'https://www.msn.cn/zh-cn/play/arcade', isHot:false, isNew:false },
            { id:43, name:'mk48', icon:'🚢', category:'io', tags:['策略','战舰'], url:'https://mk48.io/', isHot:false, isNew:false },
            { id:44, name:'Moo Moo', icon:'🐄', category:'survival', tags:['生存','多人'], url:'https://moomoo.io/', isHot:false, isNew:false },
            { id:45, name:'Narrow One', icon:'🏹', category:'shooting', tags:['射击','多人'], url:'https://narrow.one/', isHot:true, isNew:false },
            { id:46, name:'永不言弃', icon:' ', category:'casual', tags:['休闲','挑战'], url:'https://ngu.heheda.cn/', isHot:false, isNew:true },
            { id:47, name:'OGS围棋', icon:'🀄', category:'casual', tags:['棋牌','策略'], url:'https://online-go.com/', isHot:false, isNew:false },
            { id:48, name:'皇冠数独', icon:'👑', category:'casual', tags:['益智','逻辑'], url:'https://playqueensgame.org/', isHot:false, isNew:true },
            { id:49, name:'Play CS', icon:' ', category:'shooting', tags:['FPS','多人'], url:'https://play-cs.com/', isHot:true, isNew:false },
            { id:50, name:'棋牌在线对战', icon:'🃏', category:'casual', tags:['棋牌','多人'], url:'https://www.playok.com/', isHot:false, isNew:false },
            { id:51, name:'忍者大战', icon:'🥷', category:'action', tags:['动作','冒险'], url:'https://play.js13kgames.com/ninja-vs-evilcorp/', isHot:false, isNew:true },
            { id:52, name:'植物大战僵尸', icon:'🌱', category:'strategy', tags:['策略','塔防'], url:'https://pvz.heheda.cn/', isHot:true, isNew:false },
            { id:53, name:'井字棋', icon:'⭕', category:'casual', tags:['益智','对战'], url:'https://playtictactoe.org/', isHot:false, isNew:false },
            { id:54, name:'红毯竞速', icon:'🏃', category:'racing', tags:['竞速','手速'], url:'https://rcr.heheda.cn/', isHot:false, isNew:true },
            { id:55, name:'SUROI', icon:'🎯', category:'shooting', tags:['吃鸡','多人'], url:'https://suroi.io/', isHot:true, isNew:false },
            { id:56, name:'Skribbl.io', icon:'✏️', category:'casual', tags:['社交','绘画'], url:'https://skribbl.io/', isHot:true, isNew:false },
            { id:57, name:'Slow Roads', icon:'🚗', category:'casual', tags:['休闲','驾驶'], url:'https://slowroads.io/', isHot:false, isNew:false },
            { id:58, name:'Slither.io', icon:'🐍', category:'io', tags:['休闲','多人'], url:'https://slither.io', isHot:true, isNew:false },
            { id:59, name:'triep.io', icon:'🎮', category:'io', tags:['射击','3D'], url:'https://triep.io/', isHot:false, isNew:false },
            { id:60, name:'Taming', icon:'🦴', category:'survival', tags:['生存','RPG'], url:'https://taming.io/', isHot:false, isNew:false },
            { id:61, name:'神庙逃亡', icon:'🏃', category:'action', tags:['跑酷','冒险'], url:'https://tr.heheda.top/', isHot:true, isNew:false },
            { id:62, name:'极速矢量', icon:'⚡', category:'action', tags:['跑酷','动作'], url:'https://u.ali213.net/games/jisushiliang/index.html', isHot:false, isNew:true },
            { id:63, name:'黑洞吞噬', icon:'🕳️', category:'casual', tags:['休闲','吞噬'], url:'https://voodoo.io/', isHot:true, isNew:false },
            { id:64, name:'维京战争', icon:'⚔️', category:'strategy', tags:['策略','对战'], url:'https://vw.heheda.top/', isHot:false, isNew:true },
            { id:65, name:'什么能打败岩石', icon:'🪨', category:'casual', tags:['休闲','问答'], url:'https://www.whatbeatsrock.com/', isHot:false, isNew:true },
            { id:66, name:'半挂车停车', icon:'🚛', category:'casual', tags:['休闲','驾驶'], url:'https://semi-trailer-parking.tankxu.com/', isHot:false, isNew:false },
            { id:67, name:'画物理线条', icon:'✏️', category:'casual', tags:['益智','物理'], url:'https://www.xiwnn.com/huaxian/', isHot:false, isNew:true },
            { id:68, name:'ZombsRoyale', icon:'👑', category:'shooting', tags:['吃鸡','多人'], url:'https://zombsroyale.io/', isHot:true, isNew:false },
            { id:69, name:'Zombs.io', icon:'🏠', category:'strategy', tags:['策略','塔防'], url:'https://zombs.io/', isHot:false, isNew:false },
            { id:70, name:'1v1.lol', icon:'🏗️', category:'shooting', tags:['射击','建造'], url:'https://1v1.lol/', isHot:true, isNew:false },
            { id:71, name:'2048', icon:'🔢', category:'casual', tags:['益智','数字'], url:'https://2048game.com/', isHot:false, isNew:false },
            { id:72, name:'Agar.io', icon:' ', category:'io', tags:['休闲','吞噬'], url:'https://agar.io/', isHot:true, isNew:false },
            { id:73, name:'Amogus.io', icon:'👾', category:'casual', tags:['推理','多人'], url:'https://amogus.io/', isHot:false, isNew:true },
            { id:74, name:'Bonk.io', icon:'⚽', category:'io', tags:['休闲','物理'], url:'https://bonk.io/', isHot:false, isNew:false },
            { id:75, name:'Copter.io', icon:'🚁', category:'io', tags:['射击','飞行'], url:'https://copter.io/', isHot:false, isNew:false },
            { id:76, name:'CraftMine.io', icon:'⛏️', category:'survival', tags:['生存','建造'], url:'https://craftmine.io/', isHot:false, isNew:false },
            { id:77, name:'Defly.io', icon:'🚁', category:'io', tags:['射击','升级'], url:'https://defly.io/', isHot:true, isNew:false },
            { id:78, name:'Drift.io', icon:'🏎️', category:'racing', tags:['竞速','漂移'], url:'https://drift.io/', isHot:false, isNew:false },
            { id:79, name:'Gomoku.com', icon:'⚫', category:'strategy', tags:['棋牌','策略'], url:'https://gomoku.com/', isHot:false, isNew:true }
        ];

        const GAME_INTROS = {
            "坦克大作战": [
                        "Arras.io 是一款粉丝自制的免费网页多人对战游戏，是经典 .io 游戏 Diep.io 的精神续作与全面扩展版。游戏由独立开发者运营，于 2018 年 1 月 5 日正式上线，无需下载、无需注册账号，打开浏览器即可游玩。",
                        "经过多年迭代更新，Arras.io 已从最初的 Diep.io 克隆版蜕变为一款拥有庞大内容的独立作品。截至 2026 年，游戏中共有 99 种坦克、10 个技能种类以及丰富的游戏模式。",
                        "· 类型：多人坦克对战 / 竞技场射击",
                        "· 平台：网页浏览器",
                        "· 开发商：独立开发者（未公开身份）",
                        "· 发行时间：2018 年 1 月",
                        "· 商业模式：完全免费，无强制内购",
                        "玩法机制",
                        "核心循环",
                        "玩家出生时操控一台基础的 Basic 坦克（初始 1 级），通过击碎散布在地图上的彩色多边形（正方形、三角形、五边形等） 或击败其他玩家坦克获取经验值。每升一级可获得一个技能点，自由分配到八个属性上——生命恢复、最大生命值、碰撞伤害、子弹速度、子弹穿透、子弹伤害、装填速度、移动速度——技能加点方式决定了坦克的战斗定位。",
                        "坦克进化树",
                        "到达特定等级时，系统会提供分支进化路线，目前共有 99 种坦克类型可供选择：",
                        "· 早期分支（10 级）：Twin（双炮）、Sniper（狙击手）、Machine Gun（机枪手）、Flank Guard（侧翼护卫）、Director（操控无人机）、Pounder（重炮手）等",
                        "· 进阶分支（30 级后）：狙击手线可进化为 Assassin（超高视野），再到 Hunter（多段射击）或 Overseer（无人机操控）；Overseer 可进一步进化为 Necromancer（以敌方坦克化为己用）或 Factory（释放自主作战的小型坦克）",
                        "每条分支都带来了截然不同的战斗风格与克制关系，没有统一的“最强坦克”，策略重于蛮力。",
                        "特色机制",
                        "· 自动升级：按下 N 键即可瞬间分配当前所有可用技能点，无需手动加点",
                        "· 后坐力加速：向后开火产生的推进力可用于加速移动，高手常用这一技巧实现极限规避",
                        "· 无人机操控：通过鼠标可以拉伸、回拉、环绕控制无人机群进行多角度攻击，指尖操作有很高的技巧上限",
                        "游戏模式",
                        "· Free For All（大混战）：经典的“个人战”模式，目标是冲击排行榜榜首",
                        "· Teams（团队战）：2 队或 4 队对抗，基地设在战场两端或四角，利用岩壁做掩体展开团战",
                        "· Maze（迷宫）：场地布满随机生成的墙壁，形成大量夹道和伏击点，考验观察力与耐心",
                        "· Domination（占点模式）：两队争夺地图上的多个占领炮台，控制特定数量即获胜",
                        "· Sandbox（沙盒）：无限制的测试空间，可以直接体验满级坦克搭配",
                        "策略技巧",
                        "· 新手入坑：优先堆生存属性（生命恢复 / 最大生命值），不要在早期盲目冲锋。低等级时专注于打多边形升级，避免与高等级玩家直接对抗",
                        "· 坦克克制：了解核心克制链——远程狙击克制中距离炮台，无人机坦克克制慢速重炮手，高速突进克制脆皮远程——根据战场选择迎战或撤退比硬刚更明智",
                        "· 进阶技巧：利用后坐力加速快速脱离危险区；在团队战中配合队友形成交叉火力压制；利用 Maze 模式的墙壁进行风骚走位和诱敌战术"
            ],
            "自由钢琴": [
                        "自由钢琴（AutoPiano） 是一款利用 HTML5 技术开发的在线钢琴模拟器 / 音乐学习工具，而非传统意义上的 io 多人对战游戏。该网站由开发者周吉昊于 2019 年 4 月 16 日创建，采用 Vue.js + Tone.js 技术栈，核心代码在 GitHub 上部分开源。截至 2026 年，该网站仍在持续运营中，支持电脑网页版、手机网页版、微信小程序和 QQ 小程序等多平台访问。",
                        "· 类型：在线钢琴模拟器 / 音乐学习工具",
                        "· 平台：网页浏览器、微信小程序、QQ 小程序",
                        "· 开发者：周吉昊（个人开发者）",
                        "· 上线时间：2019 年 4 月",
                        "· 商业模式：完全免费，无需注册登录，通过页面广告维持运营",
                        "玩法与功能",
                        "由于 AutoPiano 并非传统 io 游戏，其“玩法”核心围绕音乐弹奏与学习展开。",
                        "核心功能",
                        "· 键盘按键弹奏与鼠标点击弹奏：用户可直接使用电脑键盘上的字母与数字键弹奏钢琴，也可用鼠标点击屏幕上的虚拟琴键。白键对应 0-9、a-z，黑键通过 Shift/Alt 组合键触发",
                        "· MIDI 支持与多乐器选择：基于通用 MIDI 标准，支持电钢琴、吉他、小提琴、古筝等十余种乐器音色自由切换。同时支持外接 MIDI 键盘、电子琴、电钢琴等设备，提升真实演奏体验",
                        "· 自动播放与教学功能：支持 MIDI 文件自动播放，播放时同步显示键位和“音符雨”效果，帮助初学者理解音符位置与节奏。还提供快速入门教学，通过简易谱子引导用户逐步演奏",
                        "· 乐谱创作与分享：用户可制作键盘谱并与其他用户分享，内置海量曲库，涵盖流行歌曲与经典钢琴作品",
                        "· 键盘布局自定义：支持标准键位、Virtual Piano 键位、Flash Piano 键位等多种方案，满足不同操作习惯",
                        "特色系统",
                        "跨平台支持",
                        "AutoPiano 不仅支持电脑网页版（Chrome、Firefox、Opera 等），还推出了微信小程序和 QQ 小程序，用户无需打开浏览器即可在手机上直接弹奏。",
                        "高易用性设计",
                        "琴键上会实时显示对应的键盘按键和音名提示，大幅降低了新手的学习门槛。对于未接触过钢琴的初学者，按照提示几分钟即可上手弹奏简单的曲子。网站还提供了大量示范曲目，用户可直接聆听并观察音符的演奏过程。",
                        "部分开源",
                        "开发者将核心代码在 GitHub 上部分开源，鼓励更多开发者在此基础上开发更有趣的在线音乐应用，但考虑服务器安全，未完全开放全部源码。",
                        "策略技巧",
                        "· 新手入门：从最基础的“快速入门”教学开始，跟随简易谱子逐键练习。建议先使用鼠标点击模式熟悉琴键位置，再切换到键盘模式提升反应速度。",
                        "· 演奏提升：从 MIDI 自动播放模式观察键位提示开始，先听、再看、再模仿。使用“音符雨”可视化功能可帮助理解音符的节奏和时长。",
                        "· 设备选择：若有 MIDI 键盘或电子琴，强烈推荐外接使用，比电脑键盘弹奏更接近真实钢琴手感。在电脑网页版上启用“音量调节”并检查浏览器音频权限即可正常发声。",
                        "· 无钢琴之选：AutoPiano 被认为是无法拥有实体钢琴的用户的最佳替代方案之一——打开浏览器即可随时随地弹奏，且完全免费。"
            ],
            "Bloxd.IO": [
                        "Bloxd.io 是一款免费的体素风多人沙盒游戏，常被称作“浏览器里的《我的世界》”。它由英国软件工程师 Arthur Baker 开发于 2021 年，灵感源于《我的世界》被微软收购后的市场机会，认为体素建造游戏拥有大量未被满足的受众群体。最初 Bloxd.io 只是一款名为 BloxdHop 的小型跑酷游戏，随着海量游戏模式的不断加入，逐步发展为拥有超过 800 万注册玩家的大型平台。",
                        "· 类型：沙盒 / 建造 / 大逃杀 / 跑酷",
                        "· 平台：网页浏览器（HTML5，基于 WebGL 和开源 Noa 引擎）、Android、iOS",
                        "· 开发商：Arthur Baker（最初由 Weiqing 创建，后移交所有权）",
                        "· 发行商：bloxd LTD",
                        "· 上线时间：2021 年 1 月",
                        "· 商业模式：免费游玩，通过广告和 Super Rank（5-30 美元的高级会员系统）盈利",
                        "· 适龄提示：官方建议 13 岁以上，但玩家群体以 16 岁以下为主",
                        "玩法机制",
                        "核心玩法",
                        "玩家进入由方块构成的体素世界中，可以自由开采、放置、合成各种方块和物品。截至 2026 年 5 月，游戏同时在线玩家约 1.5 万人，24 小时峰值超过 2.7 万人，在全球网页游戏中排名第 4。玩家性别比例相对均衡，男性占 52.41%，女性占 47.59%。",
                        "基础操作",
                        "· 移动：WASD 键移动，Shift + W 跑步，空格跳跃，C/Z 蹲下",
                        "· 视角切换：按 P 键在第一人称和第三人称间切换，第三人称在追逃和藏匿游戏中更具优势",
                        "· 交互：鼠标左键破坏方块，右键放置，滚轮或数字键切换道具",
                        "· 聊天与指令：T 或 Enter 键聊；/rtv 投票切换地图，/players 查看玩家列表，/XP 查看等级和经验值",
                        "游戏模式规模",
                        "游戏提供 18 种官方游戏模式，涵盖创造、生存、竞技、跑酷、休闲等多种类型。模式仍在持续扩充中——2026 年 1 月，钓鱼模式击败夺旗模式成为最新常驻玩法，并在当月内新增了 39 种鱼类及图鉴系统。",
                        "特色系统",
                        "多元化的游戏模式",
                        "Bloxd.io 的玩法多样性远超同类 io 游戏，下方列出部分主要模式。",
                        "模式名称 玩法简介",
                        "生存 无限开放世界，允许 PvP，可以制作武器、建造基地、组队生存",
                        "和平 无战斗，专注于挖矿、建造和探索的安全环境",
                        "创意 无限方块 + 飞行能力，纯粹的建筑创作空间",
                        "床战 / 起床战争 守卫己方床的同时摧毁敌方床，支持单人、双人和四人组队",
                        "天空战争 在空岛上选择职业、收集资源，击败所有对手获胜",
                        "感染 人类 vs 僵尸阵营对抗，人类需在僵尸感染前逃离地图",
                        "捉迷藏 躲藏者变成地图中的普通方块，搜寻者找出并消灭所有躲藏者",
                        "邪恶塔 攀登随机生成的塔楼，没有任何检查点，考验耐心与操作",
                        "立方体战争 射击竞技，红蓝两队对抗，击杀获得积分和金币",
                        "谋杀之谜 扮演无辜者、侦探或杀手，在阵营中相互博弈",
                        "钓鱼 2026 年新增，包含 39 种鱼类、图鉴收集和排行榜系统",
                        "火箭 Spleef 发射火箭，利用爆炸摧毁地面，使对手坠落",
                        "教育版本与编码功能",
                        "Bloxd.io 拥有独立的“教育版”网站 bloxdk12.com，面向课堂教学场景。游戏内置强大的“编码”工具，玩家可以通过编写代码来定制自己的世界，这在 io 游戏中极为罕见。",
                        "策略技巧",
                        "· 新手开局：推荐从和平模式或创意模式开始熟悉操作和建造逻辑，避免在生存模式中频繁遭遇 PvP 击杀的挫败感。",
                        "· 活用 Shift 键（谨慎）：按住 Shift 可以极速跳跃，是跑酷（BloxdHop）和捉迷藏模式的关键技能；但松开 Shift 会立即坠落，跳跃过平台时要比直觉稍晚一点放开。",
                        "· 善用蹲伏（C/Z 键）：蹲伏时可防止从方块边缘掉落，在 One Block（仅有一个起始方块的模式）等需要空中水平建造的场景中极为实用。",
                        "· 善用视角切换（P 键）：第三人称视角在追逃中可让你不转身即可观察身后敌方的距离；捉迷藏中可让你检查藏身点是否暴露。",
                        "· 生存模式建议：首次进入生存模式时，先设置 home 传送点方便回归；避免直接使用快速匹配进入拥挤房间，可选择带有长字符串名称的低人口房间，大幅降低被伏击的风险。"
            ],
            "Battle Dudes": [
                        "BattleDudes.io 是一款快节奏的免费多人在线射击游戏。游戏以完全可破坏的2D俯视地图为核心特色，让你在多个游戏模式中与其他玩家或小队展开激烈对战。该游戏由立陶宛开发者 Šarūnas Visockas 开发，于2020年11月发布，支持网页、iOS和安卓平台。",
                        "游戏采用赛季制运营，并设有周排行榜、赛季排行榜等多种排名系统，刺激玩家不断刷新战绩。",
                        "· 类型：多人在线战术射击",
                        "· 平台：网页浏览器、iOS、Android",
                        "· 开发商：Šarūnas Visockas",
                        "· 上线时间：2020年11月",
                        "· 商业模式：免费游玩，包含可选的内购（如宝石、皮肤等）",
                        "· 适龄提示：官方社区建议13岁以上",
                        "玩法与系统",
                        "游戏的基础操作是经典的 WASD键移动，鼠标左键瞄准并射击。",
                        "游戏的核心玩法围绕着用枪械和载具摧毁一切。你可以驾驶吉普车或坦克快速穿越战场并撞击敌人。在所有地图中，任何墙壁、掩体等物体都是可破坏的，这让战局充满了实时变数。",
                        "游戏的核心成长系统是丰富的枪械与技能，它们共同定义了你的战斗风格。目前玩家可解锁超过20种武器和数十种技能。",
                        "游戏模式",
                        "BattleDudes.io 提供了丰富的玩法模式，涵盖了团队竞技与个人挑战：",
                        "· 团队死斗：红蓝两队正面交锋，以击杀数为首要目标。",
                        "· 夺旗模式：在摧毁敌方基地和防守己方旗帜之间取得平衡。",
                        "· 枪神模式：玩家每用一把枪完成击杀就会切换武器，最先完成所有枪械击杀的玩家获胜。",
                        "· 占领模式：双方在地图上争夺关键据点，占领时间越长，团队得分越多。",
                        "· 自由混战：不分队伍，所有玩家为敌，考验个人能力。",
                        "· 搜索与摧毁：类似爆破模式，一队进攻埋雷，一队防守拆雷，非常考验战术。",
                        "· 跑酷模式：纯粹的跳跃与移动技巧比拼，不涉及射击。",
                        "特色系统",
                        "载具系统",
                        "游戏中的载具可让你快速移动，吉普车为双人座，副驾驶可开枪攻击；坦克则是单人重装甲单位，装备强力炮塔。",
                        "技能系统",
                        "通过升级解锁多种技能，你可以自定义出独特的Build。某些技能叠加可使效果翻倍，例如装备多个相同的技能可使加成翻倍。",
                        "表情轮盘与便捷操作",
                        "按鼠标右键可打开表情轮盘来快速发送信号，打破了语言隔阂。游戏还支持投掷弹药包和医疗包来支援队友。",
                        "策略技巧",
                        "· 新手推荐突击兵：新手最适合从“Assault”职业入手，其属性均衡，步枪易于上手，能帮助你快速熟悉游戏节奏。",
                        "· 静止射击提升精度：对于突击步枪等武器，移动中射击精度很低，必须停稳再开枪才能精准命中。",
                        "· 利用手雷清场：手雷对载具伤害较低，但对步兵效果显著，非常适合清除躲在掩体后的敌人。",
                        "· 精通武器配装：例如狙击枪搭配“速射弹药”可将击杀所需枪数从四枪减少到三枪，质变极大。",
                        "· 利用后坐力与跑打：在某些高射速武器上，可以利用开枪时的后坐力进行小幅位移，在射击的同时微调身位，规避子弹。",
                        "游戏评价",
                        "优点",
                        "游戏最大的亮点是“完全可破坏的地图”，让每一场对局都充满新鲜感。同时，载具与技能的组合为2D射击游戏增加了独特的战术深度。",
                        "缺点",
                        "游戏存在两个主要短板。首先是“匹配不平衡”，新人可能会频繁遭遇高级别玩家。其次是“网络延迟”（Lag Spikes），在激烈交火时突然卡顿会导致战斗失利。"
            ],
            "Bellwoods": [
                        "Bellwoods 是一款独特的在线艺术游戏与生成艺术试验，而非传统意义上的 .io 多人对战游戏。这款游戏也被很多玩家称为“在线放风筝”，核心玩法是操纵一只飘荡在3D世界中的风筝，穿过无尽的色彩与原野，努力发现新的世界。它并非一个纯粹的竞技产物，而是一个旨在为玩家带来轻松、治愈体验的“解压小游戏”。",
                        "该游戏由创意开发者 Matt DesLauriers（在艺术家 Mélissa Hernandez 的帮助下）创作，是专门为 2018年 JS13K 游戏竞赛（JS13K Games Competition）而生的项目，该比赛要求参赛作品的总大小不得超过13千字节（13KB）。为了实现这一目标，游戏中的所有图形和音频都完全由程序生成。",
                        "· 类型：艺术游戏 / 生成艺术 / 模拟体验",
                        "· 平台：网页浏览器（支持移动端和桌面端）",
                        "· 开发商：Matt DesLauriers（贡献者 Mélissa Hernandez）",
                        "· 上线时间：2018年9月",
                        "· 商业模式：完全免费",
                        "· 技术规格：游戏文件总大小仅为 13KB",
                        "玩法机制",
                        "核心玩法",
                        "游戏的概念极为简单：控制你的风筝，在无尽的、充满色彩与声音的田野中翱翔，穿越由亮色圆点标记的传送门，探索一个又一个程序生成的新世界。",
                        "基础操作",
                        "· 点击并拖动鼠标（或手指，在移动端）：即可控制风筝的移动方向。操控感觉非常自由，如同将风筝“像一条没有束缚的线一样”在风景中穿行。",
                        "· 任意切换场景背景色：用鼠标箭头移动到屏幕上方，会显示出几个隐藏的圆点，可以一键切换风景的色调。",
                        "特色系统",
                        "作为一款为挑战极限而生的微型游戏，Bellwoods 的核心特色并非复杂的系统，而是一种独特的创作哲学和美学体验。",
                        "程序生成的世界",
                        "· 无限的田野：游戏的世界是“无尽”的，它通过算法不断生成新的地形和色彩组合，为玩家提供了一种近乎永恒的探索体验。",
                        "· 独特的生物群系：当风筝触碰到地图上的亮色圆点，便会进入一个全新的世界。每个新世界的地形、配色、音景和天空的色盘都可能与之前完全不同。",
                        "极致的艺术表达",
                        "· 俳句灵感：游戏的灵感来源于日本俳句（Haiku）——捕捉当下瞬间的禅意。游戏的开场白本身就是一首5-7-5的俳句：“风吹草低，追鸟随风，只为寻色（over the tall grass / following birds, chasing wind / in search of color）”。",
                        "· 理念的浪漫转变：开发者在构思过程中，曾考虑过“科学怪人/恐怖”、黑暗科幻等概念，直到有一天，他灵光一现：“我意识到风筝将是一个仅用线条就能渲染出的简单形状。”从那个小小的想法开始，整个游戏的方向就改变了，最终变成了一个程序化的、没有特定目标、只为在玩家心中唤起特定情感的艺术游戏。",
                        "微观的技术奇迹",
                        "· 13KB的极限挑战：作为对比，这个网页上仅仅一个普通的字符或图标都可能占据几个字节。正是这种极致的文件体积限制，迫使开发者创造了一套精巧的程序生成算法，也使得 Bellwoods 成为一个了不起的技术奇迹。",
                        "· 迷你的3D引擎：为了在这13KB的大小内构建一个三维空间，Matt DesLauriers 编写了一个仅有几KB的微型3D引擎，用来处理地形、视角和场景中的风筝、蝴蝶、传送门等实体。",
                        "游戏评价",
                        "优点",
                        "· 极具美感的解压体验：被许多玩家和推荐者称为“在线解压小游戏”，其流程短平快，画风治愈，是忙碌生活中不错的调剂品。",
                        "· 轻薄便捷：无需加载、无需安装，打开网页即可玩，且对设备性能几乎没有要求。",
                        "· 纯艺术与技术的结合：游戏没有强制性的目标或胜利条件，它的目的是让玩家沉浸在一个由代码和算法构成的宁静、奇幻的数字艺术空间中。",
                        "缺点",
                        "· 玩法单一深度不足：作为一款偏向艺术表达的概念游戏，其核心循环仅限于“飞行并探索场景”，缺乏传统游戏的目标感和成就感，不适合追求复杂机制的玩家。",
                        "· 规模极小：本质上是一个13KB的竞赛作品，虽然具有极高的美学价值，但从商业游戏的标准来看，其内容量几乎为零，更像是一个互动艺术作品。"
            ],
            "赛博徒步": [
                        "Cyberhiking.com，又名《赛博徒步：生死鳌太线》（Cyber Hiking: Life and Death on Ao Tai Line），是一款基于真实地理与气候数据的文字冒险生存模拟类网页游戏。该游戏以中国秦岭地区死亡率极高的高危徒步线路——“鳌太线”为原型，玩家需要在极端的高海拔环境中管理体温、体力、饱腹度与精神状态，挑战成功穿越。",
                        "这款游戏被多家媒体和玩家称为“户外安全教育向的生存模拟游戏”和“硬核生存模拟游戏”。据小红书博主@CyberTrekking-小白土豆介绍，游戏自从上线以来在社交媒体上迅速走红，在抖音的相关视频播放量已达到 361万次。",
                        "· 类型：文字冒险 / 生存模拟 / 资源管理",
                        "· 平台：网页浏览器（H5游戏）",
                        "· 开发商：小红书博主 @CyberTrekking-小白土豆（个人开发者）",
                        "· 上线时间：2025年底至2026年初",
                        "· 商业模式：完全免费，无需注册登录，无需下载软件",
                        "· 适龄提示：建议18岁以上",
                        "玩法机制",
                        "核心设定",
                        "游戏基于真实户外的“鳌太线”徒步路线，这是一条纵贯秦岭鳌山与太白山之间的高危线路，需要连续翻越 17座 海拔3400米以上的山峰，实际徒步距离超过 170公里。该线路地处无人区，气候多变，国内曾出台相关规定明确禁止非法穿越鳌太线。",
                        "在游戏中，玩家扮演一名刚刚辞职、准备暂别KPI去勇闯“鳌太线”的徒步者。目标是在动态生成的极端天气和复杂地形中完成穿越，抵达海拔 3771.2米 的终点——拔仙台。",
                        "开局准备",
                        "开局时玩家拥有 20000元 的购买预算，但负重上限只有 25kg，必须在有限的预算和负重内做出取舍。可选装备涵盖了登山杖、护膝、手套、帐篷、压缩饼干、气罐、炉头、医疗包等生存物资。",
                        "四大生存指标",
                        "游戏中设有四个相互关联的核心生存值，任何一项归零都可能导致挑战失败：",
                        "· 体温：受天气变化影响，突降暴风雪时温度条会急剧下降",
                        "· 体能/体力：长时间行军会持续消耗，体能越低移动越困难",
                        "· 饱腹感/饥饿度：通过消耗食物补给维持，饥饿会引发多种负面状态",
                        "· 精神状态（SAN值/意志力）：极端环境、睡眠不足或目睹遇难者等事件都会导致精神值下降，甚至引发幻觉",
                        "突发事件与分支选择",
                        "游戏采用类互动小说的分支叙事机制，玩家每到一个节点都需要做出决策：",
                        "· 碰到野果子吃不吃？——选错可能直接腹泻、发烧",
                        "· 看似清澈的山泉能不能直接喝？——贸然饮用可能引发疾病",
                        "· 碰上被称为“秦岭杀人王”的巨大羚牛挡路——选择“注视并缓慢后退”“转身就跑”还是“抓拍照片”？",
                        "· 路遇遇难者纪念碑——可以选择为死者默哀，提升代入感",
                        "· 救助名为“远山”的迷路徒步者——48小时限时任务，拯救他人的同时确保自己不会先死亡",
                        "特色系统",
                        "真实环境还原",
                        "游戏完整复刻了鳌太线约 120公里 核心路段的地形地貌，包含九重石海、药王庙、拔仙台、太白梁、塘口、2800营地、大爷海、万仙配等真实地标。地形、海拔与植被分布均依据实地测绘数据建模。游戏深刻还原了高海拔徒步的真实风险：暴风雪、失温、高原反应、迷路、装备损坏、腹泻发烧等致命状况都可能成为玩家死亡的原因。",
                        "成就系统与重玩价值",
                        "游戏内置成就系统，玩家可以尝试不同的装备搭配来完成挑战。每一次通关失败后，都会从20000元预算开始重新挑战，但不同的配装策略和路线选择会带来全新的体验。",
                        "环保与公益元素",
                        "游戏中加入了“赛博功德值”系统，环保行为（如捡拾垃圾）和帮助他人可获得功德点，为游戏增添了正向价值观引导。",
                        "存档功能",
                        "支持游戏进度随时存档，方便玩家分阶段挑战。",
                        "游戏评价",
                        "优点",
                        "极强的现实警示意义：这款游戏最突出的特点在于其户外教育属性。玩家在失败中学会对自然的敬畏——可能因为贪便宜买了一个劣质睡袋而在暴风雪中失温，也可能因为一次侥幸的强行赶路而导致死亡。正如游戏页面的提示所说：“赛博徒步不能替代真实登山训练；实际穿越请务必做好充分准备并跟随专业向导”。",
                        "独特的沉浸感：游戏没有华丽的画面，但通过不断跳动气温、体能百分比、风雪呼啸的音效和文字描述，营造出了强烈的生存压迫感。一位玩家评价道：“游戏对精神压力的模拟非常真实，制作真的厉害”。",
                        "有策略深度的资源管理：20000元和25kg负重如何分配，足够让玩家反复权衡和试验。",
                        "缺点",
                        "玩法重复性较高：游戏的核心循环固定在“准备物资→出发→应对随机事件→死亡或通关→重新开局”，多次游玩后可能产生一定的重复感。",
                        "依赖文字阅读：作为纯文字冒险游戏，对于偏好画面表现和动作元素的玩家来说可能吸引力有限。"
            ],
            "喵喵竞赛": [
                        "喵喵竞赛 (cat.llx.life) 是一款可爱的免费多人在线平台跳跃游戏，你可以扮演一只可爱的小猫，通过跳跃和奔跑，在充满趣味的障碍赛中冲向终点。游戏由个人开发者 陆陆侠 (陆杨) 制作，其灵感借鉴自 WTFgame 的《猫猫竞赛》。",
                        "· 类型：平台跳跃 / 派对竞技",
                        "· 平台：网页浏览器（PC / 移动端）",
                        "· 开发商：陆陆侠 (陆杨)",
                        "· 上线时间：约 2023 年",
                        "· 商业模式：完全免费",
                        "· 游戏官网：https://cat.llx.life/",
                        "玩法特色",
                        "核心玩法",
                        "你的目标是与多名玩家同台竞技，在规定时间内，操控猫咪通过跳跃来闯过各种关卡，比其他玩家更快地抵达终点。根据赛况排名，游戏会为你结算不同的积分。",
                        "游戏机制",
                        "游戏的核心乐趣在于“赛道”与“陷阱”的组合。",
                        "· 基础操作：你需要使用 方向键（↑/↓/←/→） 来控制猫咪的移动与跳跃。",
                        "· “震荡”机制：地图会每隔 3-5 秒 震动一次，若不及时按 “↓”下蹲，就会被强制传送回起点，让你每次跳跃前都必须做好预判。",
                        "· 互动道具：按下 空格键 可以进行“扔猫”操作，是一个重要的干扰对手或进行特殊交互的手段。",
                        "· 地图与障碍：除了官方关卡，玩家还可以自制地图进行挑战。赛道中会随机生成各种障碍物，瞬间打乱节奏。",
                        "游戏模式",
                        "游戏目前主要有以下几种玩法模式，丰富了竞技乐趣：",
                        "· 多人混战模式：这是游戏的核心，多名玩家在同一关卡竞赛，争夺第一名。",
                        "· 挑战模式/自定义房间：你可以挑战高难度的玩家自制地图，或者创建私人房间，与好友一决高下。",
                        "· 练 - 习模式：可以在无干扰的情况下熟悉地图机制与猫咪手感。",
                        "· 皮肤与排行系统：通过赢得比赛获得积分，你可以解锁多种可爱的猫咪皮肤。游戏内置了排行榜系统，记录着顶尖玩家的竞速记录。",
                        "策略技巧",
                        "· 掌握下蹲时机：游戏核心是应对“震荡”，提前预判并按“↓”键下蹲。",
                        "· 用好“扔猫”：在关键时刻使用空格“扔猫”技能，可能帮助你逆转局势。",
                        "· 选对设备：该游戏在 PC 端使用键盘操作会更加精准流畅。",
                        "游戏评价",
                        "优点：",
                        "· 可爱画风与轻松氛围：猫咪主题、明亮的色彩和简单的规则，让它成为绝佳的“摸鱼”神器。",
                        "· 易上手难精通：基础玩法很简单，但要应对好“震荡”并冲过复杂障碍，需要非常精准的反应能力。",
                        "· 社区驱动内容：玩家可以自制地图并分享，为游戏增添了源源不断的生命力。",
                        "缺点：",
                        "· 内容深度有限：作为一款轻量级网页游戏，其深度和广度无法与大型商业游戏相比。",
                        "· 依赖玩家基数：在非高峰时段，可能难以匹配到足够多的真人玩家。"
            ],
            "太空飞船着陆": [
                        "Cave FRVR（星系探索）是一款免费的在线街机风格飞行探险游戏，由知名HTML5游戏工作室 FRVR 制作并发行。游戏是一款典型的“无尽飞行”类游戏，你将扮演一名宇航员，在无尽的洞穴中驾驶一艘宇宙飞船进行探险，考验你的飞行技巧和反应能力。",
                        "游戏最初于 2018年11月15日 在 iOS 和安卓平台上线，随后推出了网页版。除了可以在浏览器中直接游玩，你也可以在各大应用商店下载其独立App。",
                        "· 类型：街机 / 休闲 / 无尽飞行",
                        "· 平台：网页浏览器、iOS、Android",
                        "· 开发商/发行商：FRVR ApS",
                        "· 上线时间：2018年11月15日",
                        "· 商业模式：免费游玩，含广告及内购（移除广告）",
                        "· 适龄提示：官方评级为9+",
                        "玩法特色",
                        "核心玩法",
                        "游戏的核心目标是 “尽可能地飞得更远” 。你只需操控一艘飞船，在充满危险的幽暗洞穴中飞行，全程躲避障碍物并收集宝石。",
                        "游戏融入了“登月降落”的经典玩法。场景中的一些平台可供你降落，为飞船加油补给，让你能继续向洞穴更深处前进。",
                        "基础操作",
                        "· 网页版/PC版：使用键盘的 方向键 或鼠标/触摸来控制飞船的飞行轨迹。",
                        "· 移动端：采用基于物理引擎的简易操控方式，通过一根手指点击或触摸屏幕即可控制飞船引擎，并依靠推力来巧妙地避开洞穴内的所有障碍。",
                        "游戏模式与特色系统",
                        "丰富的升级与道具系统",
                        "当你向深处飞行时，可通过收集宝石来升级飞船。沿途还能获得各种强力道具辅助探索：",
                        "· 宝石：主要货币，用于升级飞船。",
                        "· 安全护盾：可抵御一次因撞击造成的损毁。",
                        "· 激光：可摧毁挡路的岩石。",
                        "· 宝石牵引器：可自动吸附附近的宝石。",
                        "此外，游戏内置各种每日任务、小任务和奖励关卡。App版本还包含一个“不朽（Immortal）选项”，能提供更好的游戏体验。",
                        "游戏评价",
                        "这款游戏在玩家中引发了不小的讨论，可以说是“痛并快乐着”。",
                        "正面评价",
                        "玩家普遍认为游戏的核心玩法乐趣十足，是对经典“月球着陆器”机制的有趣翻新。同时，简洁悦目的图形和洞穴探险的主题也提供了轻松、沉浸的体验。",
                        "负面评价与争议",
                        "这是玩家吐槽最密集的方面，主要集中于以下几点：",
                        "· 性能问题：很多玩家反映游戏存在明显的卡顿（Lag） 及性能问题。还有玩家遇到飞船突然失控的问题，极大地破坏了游戏体验。",
                        "· 广告体验差：广告非常“侵入式和频繁”，甚至会在游戏中途自动播放，影响了游戏的核心体验。即使有移除广告的付费选项，有时也无法正常工作。",
                        "· 后期“逼氪”严重：玩家普遍感觉在度过初期乐趣后，游戏后期的升级需要大量反复游玩（Grinding），不同飞船间的差异也并不明显。",
                        "· 内容重复：长时间游玩后，单一洞穴地图很容易带来重复感。"
            ],
            "纸牌游戏集合": [
                        "CardGames.io 是一个汇集了经典纸牌、棋类和益智游戏的免费在线游戏集合平台，被称为“线上桌游吧”或“网页版棋牌厅”。无需下载、注册或登录，点开即玩。",
                        "网站由冰岛开发者 Einar Egilsson 于 2012 年创建，作为其个人兴趣项目，后与 Magnús Magnússon 等合作运营。2022 年创始人去世后，网站维护交由 Magnús 负责。运营方为冰岛公司 Raudas Hugbunadur ehf.。除网页版外，该平台还在 iOS 及安卓推出 App，月访问量约 1900 万，在全球棋牌游戏网站中排名第五。",
                        "核心玩法",
                        "网站将线下实体的经典桌游规则直接移植，你无需学习额外的电子游戏机制，就能轻松上手：",
                        "· 无需门槛的访问：网站最核心的理念是极简。通常情况无需注册、无需登录，也不需要忍受漫长的加载或烦人的弹窗，打开浏览器即可开始游玩。",
                        "· 单人 / 多人模式：你可以选择与“比尔”——网站的 AI 对手——进行单人对战。如果追求更富挑战和变化的体验，也可切换至“多人模式”，寻找在线玩家创建房间，与真人一决高下。",
                        "游戏列表",
                        "截至 2024 年末，该网站共包含 35 至 40 余款经典棋牌游戏，主要分为三类：",
                        "🎴 多人对战纸牌游戏：与线上真人或AI进行对战。如《Hearts》、《Spades》、《Euchre》、《Cribbage》、《Gin Rummy》、《Canasta》、《Crazy Eights》、《Go Fish》等。",
                        "♠️ 单人接龙游戏：经典的接龙和开牌玩法。如《Klondike》、《FreeCell》、《Spider Solitaire》、《Pyramid》、《Clock Solitaire》、《TriPeaks》、《Canfield》等。",
                        "♟️ 棋类与益智游戏：包括《Chess》、《Checkers》、《Backgammon》、《Reversi/Othello》、《Yahtzee》等。此外，《Mahjong Solitaire》、《Minesweeper》和《Sudoku》也进一步丰富了益智类型。",
                        "特色系统",
                        "· 极简主义设计：开发者明确声明，为保持游戏的简单与纯粹，不接受绝大部分增加复杂规则或功能的建议。",
                        "· 进度本地储存：头像和数据存储在浏览器内，清除缓存将导致纪录丢失。",
                        "· 信誉值系统：完成三场多人游戏可获得“绿勾”信誉标识，避开中途退出的玩家。",
                        "· 隐私与安全：使用 Cookie 以记录分数及投放广告。App 端内嵌广告与分析追踪器（应用内2个）。所有牌局/骰子为真随机，AI仅依赖自身手牌作决策。但玩家仍强烈抱怨“AI牌运太好”，指其“屡屡天胡”。",
                        "· 创意彩蛋：曾将游戏《Shithead》更名为《Idiot》以规避不雅词汇。",
                        "· 特色玩法便捷：支持在《Idiot》等纸牌游戏中，通过“右键框选 - 左键打出”一把甩出多张牌。",
                        "游戏评价",
                        "· 优点：免费且极易上手，在同类竞品中简单程度突出。游戏库丰富，一次访问即可体验数十种经典玩法。多平台支持，网页、App皆可用。",
                        "· 缺点：规则单一，不支持自定义变体。AI 智力成疑，虽数据证明公平，但体验上“Easy模式或智障，Hard模式或开挂”。广告在受部分玩家喜爱同时，也被很多玩家吐槽。数据无法云同步，更换设备后所有记录丢失。"
            ],
            "电子魔方": [
                        "Cuber（电子魔方 / 在线魔方模拟器）是一款基于 WebGL 和 Three.js 技术开发的免费在线魔方模拟器。你可以在浏览器中自由旋转和操作虚拟魔方，支持鼠标、键盘快捷键等多种交互方式，适用于魔方教学、速拧练习和公式演示等多种场景。该网站标题为“电子魔方”，访问地址为 cuber.heheda.top，其上游开源项目托管于 Gitee，由开发者华哲辰发布，采用 MIT 开源许可证。",
                        "· 类型：在线模拟器 / 益智工具",
                        "· 平台：网页浏览器（电脑端）",
                        "· 开发商：华哲辰（个人开发者）",
                        "· 上线时间：约 2019–2020 年",
                        "· 商业模式：完全免费，无需注册登录",
                        "玩法机制",
                        "核心设定",
                        "Cuber 是一个标准三阶魔方的三维虚拟模型，你可以通过鼠标拖拽或键盘快捷键来旋转魔方的各个面，目标是将打乱后的魔方复原为六面纯色状态。魔方采用三维立体渲染，支持任意角度观察和旋转，界面简洁流畅。",
                        "计时系统",
                        "从第一次转动开始自动计时，魔方完成（六面还原）后自动停止计时，方便你记录自己的复原成绩。更进阶的是，它支持步数统计——类似 U U’ 的连续动作会自动抵消，步数为 0 时自动重新计时，对最少步玩家也相当友好。",
                        "打乱与练习",
                        "可以通过点击按钮快速打乱魔方，进行复原练习。此外，还支持仅涂色 Cross/F2L 功能，专门用于练习 8 步 Cross 和 F2L 连贯技巧。",
                        "特色系统",
                        "三维操控与视角",
                        "· 鼠标/键盘双操作：支持鼠标拖拽旋转魔方，也支持键盘快捷键进行所有操作",
                        "· 视角切换：支持 FR/FL 视角切换，方便做 LUF 等特定公式",
                        "· 镜像观察：可以打开镜像功能，观察后方颜色",
                        "· 外观调节：可自由调整魔方的大小、透视角度、左右位置和上下位置",
                        "公式播放与录制",
                        "这是 Cuber 最强大的特色功能之一。你可以录制一系列转动操作，然后自动播放公式动画，还能将动画导出为 GIF，非常适合魔方教学和公式分享。",
                        "内置学习工具",
                        "内置 CFOP 公式快速查看，方便速拧玩家随时查阅常用公式。通过公式播放功能，可以演示复杂的复原步骤，是魔方教学的好帮手。",
                        "技术实现",
                        "项目采用 TypeScript + Webpack + Three.js + Vue + Vuetify 技术栈开发，源码在 Gitee 上以 MIT 许可证开源。基于 Three.js 的三维渲染引擎确保了魔方的流畅旋转和逼真质感，配合 Vue 框架提供了良好的交互体验。",
                        "适用场景",
                        "· 魔方教学：利用公式播放和动画录制功能，向学员演示魔方的复原步骤和技巧",
                        "· 速拧练习：使用计时系统和打乱功能，随时随地练习三阶魔方速拧",
                        "· 公式研究：借助 CFOP 公式查看、步数统计和视角切换等工具，深入分析和优化解法",
                        "· 休闲摸鱼：界面简洁、打开即用，是工作学习间隙放松大脑的小工具",
                        "游戏评价",
                        "优点",
                        "· 完全免费：无需注册、无需登录，打开浏览器即可使用",
                        "· 功能强大：不仅是一个魔方模拟器，还集成了公式播放、录制 GIF、CFOP 速查等教学工具",
                        "· 操作流畅：基于 Three.js 的三维渲染，旋转顺滑，响应灵敏",
                        "· 开源透明：MIT 许可证开源，代码可审查、可二次开发",
                        "缺点",
                        "· 依赖鼠标/键盘：相比触屏设备上的魔方 App，在手机上操作体验不如电脑端流畅",
                        "· 未提供移动端优化：主要针对电脑端网页设计"
            ],
            "Deadswitch3": [
                        "Deadswitch 3 是一款快节奏的免费多人在线 2D 射击游戏（可归入 .io 游戏范畴），其玩法和模式让人联想到《反恐精英》的 2D 横版版本。游戏的Steam版本于2021年5月7日发布，目前在Steam平台拥有 2,289 条用户评测，好评率为74%，整体评价为“多半好评”。",
                        "· 类型：多人在线战术射击",
                        "· 平台：网页浏览器（PC）、Windows、Mac、Linux",
                        "· 开发商/发行商：Wilkin Games",
                        "· Steam 发行日期：2021年5月7日",
                        "· 商业模式：网页版免费游玩（含广告），Steam 版免费下载（无广告，含额外内容）",
                        "玩法与系统",
                        "核心玩法与操作",
                        "《Deadswitch 3》的核心是经典的团队对抗射击玩法。你需要使用 WASD 键移动，鼠标左键瞄准射击，R 键换弹，数字键切换武器。动作系统很丰富，你可以按 空格键跳跃，Shift 键冲刺，Ctrl 键下蹲，E 键与环境互动。",
                        "游戏被分为三种主要的游戏类型：Ranked（排位赛）、Operations（行动任务） 和 Survival（生存模式）。排位赛是游戏的核心，最多支持 10 名玩家进行包括自由混战、团队死斗、占领、夺旗等多种模式的比赛。行动任务则提供了基于目标的故事驱动任务，你可以选择三种不同的难度，难度越高奖励越丰厚。",
                        "特色系统",
                        "· 丰富的成长体系：你通过游戏获得经验值（XP）来提升排位等级。随着等级提升，可以解锁超过 100 种武器、配件、技能（Perks）和连杀奖励（Killstreaks）。在 Steam 版本中，更是包含了网页版所没有的额外生存模式和行动任务。",
                        "· 高度自定义的角色：你可以完全自定义角色外观，并创建自定义职业（Class），自由搭配主/副武器、技能和连杀奖励，打造属于自己的独特战术风格。",
                        "· 沙盒模式：游戏还提供了一个沙盒模式，允许你在不受限制的环境下，自由试验所有的武器和游戏特性，非常适合新手上手或老玩家研究打法。",
                        "· 跨平台进度同步：你可以注册一个免费的 Deadswitch 3 账户来保存游戏进度。无论是在网页版还是 Steam 版游玩，都可以通过登录账户来同步数据。",
                        "游戏评价",
                        "· 优点：体验纯粹的 2D 射击快感。游戏的核心机制非常成熟，提供了流畅、快节奏的 2D 横版射击体验。+ 作为一款类《反恐精英》玩法的 2D 游戏，它成功地将传统 FPS 的战术对抗与横版动作游戏的爽快感结合在了一起。",
                        "· 缺点：性能和匹配问题影响体验。部分玩家反映游戏中存在性能问题和匹配困难。也有用户反馈遇到严重的 BUG，例如敌人会卡入地下导致无法击杀，或在某些模式下阵营显示错误"
            ],
            "Windows7 模拟": [
                        "Try Andy's Desk 是一款由开发者 KaeruCT 打造的浏览器端趣味项目，也被社区亲切地称为“在线Win7模拟器”。打开网页，你看到的不是简单的仿Win7壁纸，而是一个拥有“开始菜单”、“任务栏”，甚至内置了复古Winamp播放器的全功能模拟桌面，里面还藏着一些有趣的小游戏。",
                        "· 类型：怀旧模拟器 / 互动艺术 / 游戏集合站",
                        "· 平台：网页浏览器",
                        "· 开发商：KaeruCT",
                        "· 上线时间：约 2020 年",
                        "· 商业模式：完全免费，无需注册登录",
                        "玩法与探索",
                        "这个网站的核心“玩法”就是探索与怀旧。它更像一个数字游乐场，充满了探索的惊喜。",
                        "怀旧数字桌面",
                        "打开页面，一个经典的Windows 7界面映入眼帘。点击“开始”菜单，可以像真实的电脑系统一样浏览文件夹，设计师甚至非常用心地在这份“说明书”里给你写了一封欢迎信。",
                        "内置小游戏",
                        "点击预置的游戏图标，可以找到两款内置的复古风格小游戏：",
                        "· 双人贪吃蛇：经典的贪吃蛇玩法，支持双人对战，适合与朋友一起重温。",
                        "· 字母版太空大战：玩家需快速敲击屏幕上显示的错误字母来抵御“入侵”，考验反应速度。",
                        "音乐与彩蛋",
                        "通过桌面上的复古Winamp播放器，还能收听一段由作者原创的、充满未来感的电子音乐，为你的“数字桌面探险”增添了不少氛围。",
                        "特色系统",
                        "· 复古与科幻的碰撞：该项目不仅有“Try Andy's Desk”这个复古版本，还拥有一个姊妹网站 glitchy.website，瞬间将你带入充满霓虹灯光和动态效果的科幻风格世界。",
                        "· 致敬“不完美”：开发者在GitHub上对项目的说明是：“代码故意不那么精致，因为这是一个为了乐趣而生的项目”。这种拥抱“缺陷”和故障艺术的理念，让整个项目充满了随性与人情味。",
                        "游戏评价",
                        "· 优点：它提供了一个极其独特且无需任何安装的体验，让所有经历过Win7时代的人都能瞬间获得怀旧的情感连接。与其他真实的操作系统模拟器不同，“Try Andy's Desk”更像是一个充满活力的数字艺术品，完美融合了复古情怀与现代创作者的巧思。",
                        "· 缺点：其核心在于体验而非游戏性，内置游戏的数量和深度都有限，更适合作为闲暇时的小品级探索。"
            ],
            "ACFUN 大逃杀": [
                        "常磐大逃杀（Tokiwa Battle Royale），其源头可追溯到2009年诞生于A岛匿名论坛的“ACFUN大逃杀”。由于早期的核心玩家群体曾是ACFUN的活跃用户，游戏因此得名，这个名称也承载了初代玩家和创作者的情怀。",
                        "经过演变，该项目衍生出了“常磐大逃杀”等多个分支，并完全开源。dts.momobako.com 是由玩家社区成员“无名机关”等共同维护的服务器之一，是了解这个独特游戏文化的最佳入。",
                        "核心玩法",
                        "游戏的核心是在一个充满怪物的地图上，通过策略和文字指令生存并变强。其核心机制如下：",
                        "· 角色成长：游戏开始前，你可以从众多拥有特殊加成的“称号”中选择一个，并分配少量初始属性点。进入游戏后，通过杀敌获得经验并升级。",
                        "· 策略为王：你需要根据当前状态，在“姿态”和“应战策略”之间做决定。例如，在前期探索时，通常选择“防御姿态”和“探物策略”来保证生存；而面对强敌时，则需切换至“作战姿态”和“反击策略”以最大化输出。",
                        "· 状态管理：游戏拥有复杂的头部、身体等多部位伤害判定。如果你在战斗中受伤，但头部没有防具，就更容易头部受伤；反之，身体受伤则需要消耗体力去包扎，而不是直接使用技能点疗伤。",
                        "· 互动与竞技：游戏支持多人同时在线，但玩家群体较小，当前主要以PVE（玩家对抗环境）内容为主。不过，游戏底层仍保留了完整的玩家间对抗（PVP）逻辑。",
                        "✨ 游戏特色",
                        "· 同名多服，各有千秋：“常磐大逃杀”是开源项目，不同服务器会衍生成不同玩法。例如dts.momobako.com属于国内访问速度很快的“正式服”，而https://dts.23333.online/则属于更新频繁的“先锋测试服”。",
                        "· 轻量便捷，兼容性强：作为一款网页游戏，你无需下载任何客户端，打开浏览器即可游玩，非常适合在工作学习间隙“摸鱼”放松。游戏通过简单的文字和选项进行交互，即使使用手机或平板等移动设备，也能获得完整的游戏体验。",
                        "· 充满情怀，社区驱动：游戏的开发和维护完全依赖于一群爱好者的热情。从服务器赞助到版本更新，再到新人的答疑解惑，都体现了国内早期同人游戏社群的活力。",
                        "游戏评价",
                        "对新人来说，其复杂的机制和简陋的画面可能显得不太友好。但如果你能沉下心来，会发现这是一款策略深度极高的硬核网页游戏，值得一试。"
            ],
            "Duck Lings": [
                        "Ducklings.io 是一款画风可爱的免费多人在线休闲竞技游戏。你将化身一只鸭妈妈，在平静的湖面上游弋，目标是拯救走失的小鸭子，同时还要提防横冲直撞的摩托艇以及其他想偷走你小鸭子的玩家。",
                        "这款游戏常被玩家评价为“平静又容易上瘾”，它成功地将轻松的收集玩法与紧张的对抗元素结合在一起。",
                        "· 类型：休闲竞技 / 收集",
                        "· 平台：网页浏览器（支持PC、手机和平板）、iOS、Android",
                        "· 开发商：Pelican Party Studios",
                        "· 发布日期：2019年9月",
                        "· 最新更新：2024年10月",
                        "· 商业模式：完全免费",
                        "玩法与系统",
                        "这款游戏的核心就是“救小鸭、防偷鸭”，规则简单但过程绝不轻松。",
                        "核心玩法",
                        "你的目标是在池塘里尽可能多地拯救走失的小鸭子，并把它们安全带回自己的巢穴。每带回一只小鸭子，游戏进度就会增加一点，最终目标是完成400个关卡，将巢穴升级为一座“鸭子堡垒”。",
                        "操作方式",
                        "· 移动：使用鼠标、键盘方向键或触摸屏来控制你的鸭子四处游动。",
                        "· 换帽子：在你的巢穴附近“嘎嘎叫”，就可以更换你解锁的帽子。",
                        "特色系统",
                        "危险的池塘世界",
                        "平静的湖面下隐藏着不少挑战：",
                        "· 其他鸭子：和你争夺小鸭子的其他玩家，他们会试图偷走你的鸭群。",
                        "· 摩托艇：这是游戏中最危险的威胁。一旦被摩托艇撞到，游戏会立即结束，并重置你之前所有的努力。",
                        "· 业力系统：如果你偷了其他鸭子的崽，对方会记住你并伺机报复。",
                        "奖励与定制",
                        "通过不断拯救小鸭子，你可以获得丰厚的奖励：",
                        "· 升级巢穴：收集足够多的小鸭子，就可以让你的鸭巢不断升级，最终看起来像一座城堡。",
                        "· 收集帽子：游戏中有超过50种不同的帽子等待你去收集，可以用来装扮你的鸭子。",
                        "· 成就与排行榜：游戏内置了成就系统以及排行榜，记录着顶尖玩家的成绩。",
                        "策略技巧",
                        "由于撞到摩托艇就会导致游戏结束，所以这个游戏的策略核心就是两个字——求生。一些关键技巧可以帮到你：",
                        "· 分批带回：新手玩家容易犯的错误就是想一次性带回很多小鸭子。但带着的鸭群越大，越容易成为其他玩家的目标，也越容易被船撞到。最安全的策略是攒够一批后，就立刻回家卸货。",
                        "· 远离船只：游戏中最可怕的不是其他玩家，而是水面上高速行驶的船只。",
                        "· 精选对手：不是每次冲突都值得参与。特别是当你身后带着一大群小鸭子时，最明智的选择是当个“和平主义者”，避免打架，尽快回家。",
                        "· 先求生存再求外觀：与华丽的外表相比，活下来并成功带回小鸭子才是最重要的。你的巢穴升级和帽子获得，都源于你成功的营救行动。",
                        "游戏评价",
                        "优点",
                        "· 玩法轻量有趣：作为一款“摸鱼神器”，它既提供了快节奏的紧张感，又有着轻松可爱的休闲氛围。",
                        "· 社区反响积极：游戏在各大游戏平台的评分普遍很高，证明了其在玩家群体中的良好口碑。",
                        "缺点",
                        "· 社交功能较基础：与玩家间的互动主要体现在“偷小鸭”这一核心玩法上，缺乏更丰富的合作社交功能。",
                        "· 内容深度有限：随着游戏深入，核心玩法——“收集-升级-躲船”的循环重复性较高，长期体验稍显单调。"
            ],
            "Dino Swords": [
                        "Dino Swords 是一款致敬并颠覆经典的 免费无尽跑酷游戏。它并非谷歌官方的续作，而是创意机构 MSCHF 与知名电竞俱乐部 100 Thieves 联手打造的“Mod（模组）版” Chrome小恐龙游戏。",
                        "在保留躲避障碍物核心玩法的同时，游戏最大的亮点是加入了总共 26 种武器道具，让原本只能被动跳跃的小恐龙变得“全副武装”。",
                        "· 类型：无尽跑酷 / 街机",
                        "· 平台：网页浏览器",
                        "· 开发商/发行商：MSCHF & 100 Thieves",
                        "· 发行日期：约 2020 年 8 月",
                        "· 商业模式：完全免费，无需注册登录",
                        "玩法与特色",
                        "在这款游戏中，你还是控制着那只熟悉的像素风小恐龙，目标是尽可能跑得更远。但这次，你有了绝对的力量去打破前方的障碍。",
                        "· 核心玩法：你的小恐龙会在沙漠背景中自动向右奔跑，你需要控制它跳跃，躲避前方出现的仙人掌等障碍物。",
                        "· 武器系统：这是游戏的最大变革。在奔跑途中，路上会掉落各种道具，吃到后即可为小恐龙装备武器，最多可同时拥有26种（对应键盘的A到Z键）。游戏过程中，按对应字母键即可激活武器。这些武器效果各异，既有能直接劈开仙人掌的“战斧”，炫酷的“传送枪”，甚至还有“军用车”和“直升机”，当然也有像香烟这种几乎没用的道具。",
                        "· 排行榜与奖励：游戏内置了每周更新的全球排行榜，会根据玩家的最高分数进行排名，榜首还能赢得神秘奖品。",
                        "策略与技巧",
                        "· 认识你的字母：游戏最大的挑战在于反应速度与记忆力的结合。你需要清楚记得每种道具对应的字母，才能在遇到危险时瞬间按出。",
                        "· 合理分配注意力：由于需要一边跳跃一边留意武器，同时兼顾前方障碍，分心很容易导致失败。",
                        "· 主动清除障碍：与原版只能被动跳跃不同，现在你可以用武器主动攻击或消除前方的仙人掌，这让游戏的节奏和玩法有了质的变化。",
                        "游戏评价",
                        "· 正面评价：",
                        "· 爽感翻倍：从被动躲避到主动攻击，充满力量的武器系统，让游戏体验比原版爽快得多。",
                        "· 保持原味，提升乐趣：在保留经典美术风格和操作的基础上，增加了富有创意的内容，上手门槛低，是一款绝佳的“摸鱼”神器。",
                        "· 负面评价：",
                        "· 武器效果参差不齐：26种武器中，部分武器的效果比较“鸡肋”或纯属娱乐，实用性不强。"
            ],
            "深海大作战": [
                        "Deeeep.io（中文常译作《深海大作战》或《深海io》）是一款以海洋生态系统模拟为核心的多人在线生存进化游戏。你将从一只微小的初级生物开始，通过吞噬食物和其他玩家，沿着真实的海洋食物链不断进化，直至成为顶级掠食者。",
                        "该游戏于2016年12月发布，由独立开发者 Federico Mouse（又名 Fede.Jm）制作。相比同期流行的 Agar.io 和 Mope.io 等同类游戏，Deeeep.io 的最大差异在于其独特的“生态系统模拟”理念——游戏引入了多个生物群落，每个区域都有各自特有的动物、食物和生存机制。",
                        "· 类型：多人在线生存进化 / 休闲竞技",
                        "· 平台：网页浏览器、iOS、Android",
                        "· 开发商：Federico Mouse（Fede.Jm）",
                        "· 上线时间：2016年12月16日",
                        "· 商业模式：完全免费，可付费购买皮肤",
                        "· 适龄提示：建议 13 岁以上",
                        "玩法机制",
                        "核心生存进化",
                        "游戏的核心理念是“吞噬或被吞噬”。你从一只 Tier 1 的小鱼（或蠕虫等）开始，通过吞食海中的食物颗粒和比自己小的生物来积累经验值（XP）。每攒够一定 XP，你就迎来一次进化机会。进化系统中包含 10个等级（Tier 1至Tier 10） ，总数超过 80种可游玩生物，从热带鱼、螃蟹、鱿鱼、海鸥，到海豚、鲨鱼、虎鲸乃至蓝鲸，每种都拥有独特的能力。",
                        "独特的栖息地限制",
                        "不同生物只能在各自的特定环境中生存，并受到四种状态条的限制：",
                        "· 氧气条（Oxygen） ：离开水体的生物会逐渐缺氧，类似地，陆生或两栖动物潜入水下也会面临同样的困境",
                        "· 温度条（Temperature） ：热带生物进入北极会迅速失温，而北极生物进入热带则会逐渐过热",
                        "· 盐度条（Salinity） ：淡水生物进入海洋会因盐度失衡而受损，海洋生物进入淡水亦然",
                        "· 压力条（Pressure） ：浅海生物潜入深海会被高压碾压，而深海生物上浮也会因压力骤降而受损",
                        "这项设计使每场对局都变成了对特定区域的动态博弈。你需要在进化时仔细考虑新生物适合的生境，贸然进入错误区域将加速死亡。",
                        "游戏模式",
                        "· FFA（Free For All） ：经典大乱斗模式，所有玩家皆为对手，目标是达到积分榜榜首",
                        "· TFFA（Team FFA） ：组队混战模式，玩家分成红蓝等多支队伍展开对抗",
                        "· Pearl Defense（珍珠保卫战） ：团队合作模式，保护己方珍珠的同时夺取敌方珍珠",
                        "· Toxic Algae（毒藻大逃杀） ：特殊生存模式，地图逐渐被毒藻侵袭，逼使玩家在压缩的生存空间中对抗",
                        "特色系统",
                        "细致的进化树设计",
                        "游戏进化树结构繁复，每次进化都有多条分支方向，且不同路线通向不同生态位的生物。例如，从 Tier 1 的Clownfish可进化为Tier 2的Crab，后者再进化为Jellyfish，再到Tier 4的Squid，此后根据环境选择可演化为Seagull（开启飞行能力）、Manta Ray等。一些高级动物拥有极为独特的技能：",
                        "· 章鱼（Octopus） ：静止不动三秒且未被攻击即可进入隐形无敌状态",
                        "· 海鸥（Seagull） ：获得飞行能力，可逃离海洋中的掠食者，并开创新的捕食角度",
                        "· 水母（Jellyfish） ：毒刺会使触碰者中毒",
                        "· 虎鲸（Orca） ：可叼起较小的猎物并将其抛掷",
                        "· 蓝鲸（Blue Whale） ：位于食物链顶端，可通过大范围吸力吞噬大量猎物",
                        "· 七鳃鳗（Lamprey） ：对 Tier 5 或以上动物使用冲刺，可吸附在该猎物身上，并分享其摄取的所有食物",
                        "· 蠕虫（Worm） ：可潜入地下隐身，但无法使用冲刺技能",
                        "深海分层世界",
                        "游戏的一大亮点是引入了“深海”这一独立生态层，位于地图常规海洋区域的下方。这里栖息着灯笼鱼、皇带鱼等适应黑暗高压环境的特殊生物。要进入深海，你需要选择具有深海适应性的物种（如从Blobfish进化）。整个生态系统的层次感和动态性因此大大增强，使其不再像一个扁平的竞技场，而更像一个真实的深海世界。",
                        "皮肤与装扮系统",
                        "玩家可通过游戏内获得的货币购买多种皮肤，装扮自己操控的海洋生物。以蠕虫（Worm）为例，官方商店提供了卡拉海星虫、橙色火虫、冰虫、星虫、螠虫等多款皮肤，价格从5到10游戏内货币不等，部分皮肤还会修改生物的体积大小。",
                        "策略技巧",
                        "· 选择安全的开局生物：新手建议选择Clownfish或Icefish，这类初级生物不会吸引顶级捕食者的注意，且有机会结识同类群体以降低被攻击概率。",
                        "· 善用地形与掩体：珊瑚礁、海带森林和海岛上的灌木丛都可以作为隐藏点，让较弱小的生物躲避大型捕食者的追击。",
                        "· 把握进化时机与地点：进化时务必确保当前生物处于适合新形态生存的区域，例如水生生物不要在陆地上进化成鸟类——这在进化前会持续损失氧气，进化后也会立刻陷入窒息。在错误的区域完成进化将导致新生物几乎立刻死亡。",
                        "· 学会利用冲刺（Boost） ：使用鼠标左键或空格键可消耗能量槽进行冲刺，这是关键的自保与攻击手段。生存时用它快速躲入掩体，捕猎时用它突袭猎物并造成更高伤害。",
                        "· 专注探索单一路线：可先完整尝试一条固定的进化路线（例如浅海新手流：小丑鱼→螃蟹→水母→鱿鱼→海鸥→蝠鲼→海獭→企鹅→海豹→虎鲸），熟悉后再尝试深海路线或其他流派。",
                        "· “死亡惩罚”机制利用：死亡后仅损失一半的累积经验值而非全部，这一设计使连续挑战在累积经验的同时保持相对流畅的进阶节奏。",
                        "游戏评价",
                        "优点",
                        "· 生态模拟差异化突出：相比 Agar.io 或 Mope.io 等同类 io 游戏，Deeeep.io 在生物群落、栖息地限制和生态位交错的设计上实现了高度差异化，游戏体验更加丰富",
                        "· 海量可玩生物与深度进化系统：超过80种可游玩动物，每条进化路线都各具独特的能力，为玩家提供了极高自由度和重玩价值",
                        "· 独特的深海世界与隐身机制：蠕虫的潜地、乌贼的隐身等技能为游戏增加了巧妙的潜行元素和心智博弈，这在 io 游戏中极为罕见",
                        "缺点",
                        "· 中后期养成节奏较慢：积累经验值进化到 Tier 10 需要相当的时间和耐心，中期刷经验的过程可能略显枯燥",
                        "· 进化路线复杂，新手上手门槛高：进化树分支繁密，新手若不查阅资料可能难以理解各生物之间的关联和适应性要求",
                        "· 单局体验依赖玩家基数：低活跃时段匹配到的玩家较少，削弱了 io 游戏应有的激烈对抗感"
            ],
            "Diep.io": [
                        "Diep.io 是一款开创了“坦克进化”流派的经典 .io 多人对战游戏。你操控一个圆形几何坦克，通过在竞技场中射击多边形和击败对手来升级、进化，最终目标是冲击排行榜首位。游戏由《Agar.io》的作者 Matheus Valadares 于 2016年3月推出，是许多后续 .io 游戏的灵感源头。自 2021 年起，其所有权历经变更，当前由一家名为“3AM Experiences”的公司负责运营。",
                        "· 开发商：最初由 Matheus Valadares 设计，目前由 3AM Experiences 公司负责运营维护。",
                        "· 平台：网页浏览器（PC端）及移动设备（iOS/Android）。",
                        "· 上线时间：2016年3月 在网页端首次上线。",
                        "· 商业模式：完全免费，主要通过页面广告和游戏内自愿性的广告观看获取收益。",
                        "玩法与系统",
                        "Diep.io 的核心是“射击 → 升级 → 进化”的深度循环，是一场从弱小坦克到顶级战车的蜕变之旅。",
                        "· 核心循环: 玩家开局时，是一台名为“Basic”的基础坦克。通过射击地图上固定的多边形来获取经验值（XP）升级。升到45级满级后，游戏目标变为冲击排行榜前列。",
                        "· 操作方式: 按 WASD 或 方向键 移动，鼠标用于瞄准炮口。按 鼠标左键 或 空格键 射击，按 E键 则可进行自动射击。",
                        "· 技能系统: 升至满级的路上，最多可获得33个技能点。这些点数可自由分配在八项属性上，形成独有的Build。最高可将某一项属性投入7个点数。",
                        "1. 生命回复",
                        "2. 最大生命",
                        "3. 碰撞伤害",
                        "4. 子弹速度",
                        "5. 子弹穿透（一项影响深远的游戏机制，决定了玩家的子弹能多次穿透对手及其子弹的能力）",
                        "6. 子弹伤害",
                        "7. 装填速度",
                        "8. 移动速度",
                        "坦克进化树",
                        "· 进化路径: 角色通过多次进化蜕变，每次都有不同侧重：",
                        "· Snipers（狙击系）: 牺牲射速，换取超远射程和单发高伤。",
                        "· Machine Guns（机枪系）: 高射速倾泻弹幕，提供强大的压制力。",
                        "· Drones（无人机系）: 操控多枚自动索敌或手动拖拽的无人机进行追击。",
                        "· Smashers（撞击系）: 放弃炮塔，专精坦克本体，追求一击必杀的撞击。",
                        "· Trappers（陷阱系）: 能布置静态地雷或防御墙，掌控战场。",
                        "· 坦克数量: 47种，包含：1种一阶、4种二阶、12种三阶和30种四阶。",
                        "游戏模式",
                        "游戏内置了八种各具特色的模式，除单人的自由混战外，还有考验配合与战术的模式。以下为主要模式及其特点：",
                        "模式 玩法简介",
                        "单人大混战 所有玩家为敌，你的坦克始终是蓝色，敌人都呈红色，目标是不择手段地成为服务器第1名。",
                        "双队模式/四队模式 分为红蓝（或四色）阵营对抗，双方基地有自动炮塔驻防。",
                        "占领模式 双方争夺地图上中立炮塔的控制权，率先占领全部炮塔的一方获胜。",
                        "歼灭模式 特殊回合制玩法，玩家死亡后会加入击杀者所在队伍，终极目标是统一全图所有玩家。",
                        "迷宫模式 地图由随机生成的墙体隔开，考验卡地形打游击和走位预判。",
                        "沙盒模式 用于无压力地测试各种坦克和技能加点的玩法。",
                        "特色系统",
                        "· 高度策略性: 有限的33个技能点和多阶的进化树，确保了游戏策略的高自由度，这也是游戏最吸引人的地方之一。",
                        "· 激励与惩罚并存的机制: 排行榜（直观显示全局强者）、自瞄炮塔（守护出生点）、经验砖（即地图上的多边形）等元素深刻影响着对局。",
                        "· 未来动向: 官方为移动端开发了大量新内容，并计划在维基上持续公布。",
                        "策略与技巧",
                        "· 开局策略: 游戏并非无限自由，地图边缘存在 4米 宽度的边界限制。升级后建议立刻将技能点分配到子弹相关的属性上，提升刷经验效率。",
                        "· 进阶技巧: 按住 ‘U’ 键会弹出技能提示窗口，可结合“6、5、4、7”等数字键快速加点。使用自动射击时，可专心于微操走位来躲避子弹。",
                        "· 高阶进阶: 注意 子弹穿透 属性，能让你的子弹连穿多人与障碍。",
                        "· 移动端特别提示: 官方给予移动端高度关注，且 全球同服，想获得流畅体验请自行准备优质的网络环境。",
                        "· 构建强力Build: 推荐“玻璃大炮”流：主点子弹伤害、子弹穿透和移动速度，用高移速和弹幕压制对手。",
                        "游戏评价",
                        "优点",
                        "· 开创性地位: 开辟“坦克进化”品类，直接启蒙《Arras.io》等后来者。",
                        "· 上手简单，精通难: 玩法核心清晰易理解，技能加点与47种坦克选择为高手提供了充足的发挥空间。",
                        "· 社区活跃，经久不衰: 经过多年发展，至今拥有大量忠实玩家，社区也依然活跃。",
                        "缺点",
                        "· 后期乏力: 机制在满级后趋于单一，长线游玩体验较固定。",
                        "· 技术问题: 服务器卡顿、幽灵坦克导致网络质量要求苛刻，影响体验。",
                        "· 缺乏大更新: 近期更新缓慢，热度被《Arras.io》等后来者超越。"
            ],
            "挖矿大作战": [
                        "概述",
                        "Digdig.io 是一款免费的多人在线竞技游戏（.io游戏）。游戏以“挖掘与生存”为核心，玩家扮演一个挖掘机（Digger），在地下迷宫般的场地中通过挖掘矿物来让自己变大变强，并与其他玩家实时对战。",
                        "它由开发者 M28（或列为 Matheus Valadares）制作，于 2021 年 7 月 发布，玩法类似于经典游戏 Agar.io，但将场地从平面细胞球替换为可破坏的2D地下世界。游戏为纯鼠标或键盘操作，支持网页和App版本（iOS Beta），目前已不再更新。",
                        "· 类型：多人在线竞技 / 休闲",
                        "· 平台：网页浏览器 (PC / 移动端)，移动端App (Beta)",
                        "· 开发商：M28 / Matheus Valadares",
                        "· 发行日期：2021 年 7 月",
                        "· 商业模式：完全免费，无内购",
                        "· 当前状态：服务器仍在运行，但已不再更新",
                        "玩法与系统",
                        "Digdig.io 汲取了 Agar.io 的核心规则，并将其适配为“挖掘者”的主题。玩家在圆形地图中随机出生，通过挖矿或攻击来壮大自己。游戏的血量、速度与防御等机制均围绕“体型”这一核心指标展开设计。",
                        "矿物系统",
                        "矿物是玩家增大体积和获取特殊加成的主要手段。游戏中共有八种矿物，它们分别是泥土、岩浆、钻石、黄金、基岩、铀矿、石英和紫水晶，每种矿物都有独特的外观和作用。",
                        "战斗与成长系统",
                        "玩家之间的战斗遵循体型压制原则。如果你比对方大，你可以击杀并吸收对方来快速成长；但如果对方比你大，则应该尽量远离。击杀其他玩家时，你的体积增量与对方的体积成正比。",
                        "愤怒与伤心状态",
                        "Digdig.io 引入了两种特殊的主动状态，让玩家在战斗中有了更多的策略选择：",
                        "· 愤怒状态：按下鼠标左键或空格键激活。在此状态下，挖掘机的移动速度会变快，但会持续消耗生命值。",
                        "· 伤心状态：按下鼠标右键或 Shift 键激活。在此状态下，挖掘机的生命值回复速度加快，但移动速度会变慢。",
                        "特色系统",
                        "多元化的游戏模式",
                        "Digdig.io 没有局限于简单的个人乱斗，而是提供了丰富的模式选择：",
                        "· 自由模式（FFA） ：经典的大乱斗，是所有玩家为敌的个人战。",
                        "· 团队模式（TDM） ：玩家会被分配至蓝、红、绿三个不同颜色的大阵营中，进行团队对抗。",
                        "· 捉迷藏模式（Tag）：一种非对称对抗玩法。游戏开始时随机选出数名玩家作为“搜寻者”，其余为“躲藏者”。搜寻者需要触碰所有躲藏者以将其转化。躲藏者无法使用加速冲刺，但获胜可获得金币。",
                        "· 大逃杀模式（BR）：所有玩家公平开局，地图会随着时间的推移逐渐缩小，强迫剩余玩家在狭小空间内对抗，直至决出最后一人。",
                        "· 迷宫模式（Maze）：地图被基岩（Bedrock）墙壁分割成复杂的迷宫地形，极大地增加了探索的难度和战术性。",
                        "皮肤与小队系统",
                        "玩家可以通过不同玩法、吸收矿物和每日登录获得金币，用于兑换不同的外观皮肤。此外，玩家可以组建小队一起游玩，小队成员之间互相碰撞不会造成伤害，而是会互相弹开。",
                        "策略技巧",
                        "· 因“体”制宜：体型越小，移动速度越快。小体型玩家可以以弱胜强，利用自己的速度优势，在狭窄的隧道中穿梭，偷袭那些追不上你的大块头。而作为大体型玩家，则应确保附近始终有一条逃生通道，以防被围攻。",
                        "· 利用岩浆：如果你被追逐，寻找地图上的岩浆（Lava）是关键。利用岩浆作为天然屏障，引诱追逐你的玩家为了接近你而不得不穿过岩浆，从而消耗大量生命值。",
                        "· 血线管理：建议始终保持 60% 以上的血量，确保自己在遭遇突发战斗时的生存能力。",
                        "· 控制心态：如果你血量偏低，可以快速连续点击右键或Shift进入“伤心状态”，这样可以在不损失太多速度的情况下快速回血。",
                        "· 落袋为安：将挖到的资源存放在一个用不可挖掘的基岩做成的安全房间里，可以有效避免被偷袭后资源被盗。",
                        "· 谨慎探索：在向下挖掘进入新区域前，先观察上方是否有敌人潜伏。不要把自己挖进死胡同，一定要留好逃跑的退路。",
                        "游戏评价",
                        "· 正面评价：",
                        "· 易于上手：极简的操作（仅需鼠标或方向键）和直观的“大吃小”规则让任何人都能迅速投入游戏。",
                        "· 紧张刺激：狭窄的地下空间和随时的偷袭能带来很强的紧张感与压迫感，有玩家评价道“感觉非常独特，既怪诞又紧张”。",
                        "· 负面评价：",
                        "· 手感与稳定性问题：有玩家指出，游戏的移动端版本手感较差，不如桌面端流畅。",
                        "· 闪退：有玩家吐槽“本来可以达到160k的，结果游戏突然卡退，之前努力全白费”。"
            ],
            "信任的进化": [
                        "概述",
                        "《信任的进化》 不是传统的竞技游戏，而是一款由加拿大游戏设计师Nicky Case制作的、探索“信任”本质的互动式博弈论讲解手册。它从博弈论经典模型 “囚徒困境” 出发，通过一个简单的投币游戏，生动地展示了合作与背叛如何在人与人之间演变。",
                        "· 类型：互动式讲解 / 博弈论模拟 / 教育工具",
                        "· 平台：网页浏览器（曾为Flash，后重构）",
                        "· 开发商：Nicky Case (新加坡独立开发者)",
                        "· 发行时间：2017年7月",
                        "· 商业模式：完全免费，开源（采用CC0协议，即“放弃版权，将作品贡献至公共领域”）",
                        "玩法与机制",
                        "游戏将复杂的博弈论模型简化为一个直观的“投币游戏”。",
                        "核心玩法",
                        "你每轮需要选择“合作”（投入1枚硬币，让对方得到3枚）或“欺骗”（不投入，让对方得到0枚）。你们双方的选择，将决定各自的得分，共同构建出一个“总分”最高的共赢理想，或者一场“双输”的零和博弈。",
                        "从两人到整个“社会”",
                        "游戏的格局会逐步扩大。在一次次的博弈中，你会遇到策略各异的对手，例如：",
                        "· 小粉红（复读机）：永远选择合作，但会完全复制你上一轮的选择。",
                        "· 老油条（欺骗者）：无论你做什么，它永远选择欺骗。",
                        "· 福尔摩星（侦探）：前几步进行试探，之后会根据你的反应采取行动。",
                        "角色与策略分析",
                        "通过观察不同策略在社会中的表现，游戏揭示了信任建立的深刻机制，“以牙还牙”策略最终胜出。这一策略的特点是 “善良、可报复、懂宽容”，即：",
                        "· 愿意开始信任：首先选择“合作”，释放善意。",
                        "· 绝不纵容欺骗：一旦对方选择“欺骗”，下一次一定会进行报复。",
                        "· 愿意和解：如果对方后续又表现出合作的意愿，会立即停止报复，重归于好。",
                        "游戏还模拟了“误解”（即你把对方的合作看成了欺骗）对信任造成的毁灭性影响，探索了信任在“有噪音”的真实世界中如何艰难维持。",
                        "思想内核与教育意义",
                        "· 思想内核：游戏的结论鼓舞人心：信任可以在长期的重复互动中，通过“以牙还牙”的互惠原则一步步进化而来。",
                        "· 教育意义：它因此被誉为 “一次打开，终身受用的博弈论启蒙课” ，在豆瓣等平台的评分高达9.1分（满分10分），在TapTap等平台也获得了9.9分的超高评价。很多媒体都大力推荐，认为它用一个轻松的游戏解释了深刻的社会现象。"
            ],
            "绘迷": [
                        "概述",
                        "绘谜（enazo.cn） 是由国内独立团队“神奇海螺试验场”出品的一款“零门槛”在线多人“你画我猜”游戏平台，主打“打开即玩、无需注册”的轻社交体验。它是一款聚会破冰神器，也是一个面向所有用户的创意社交娱乐平台。",
                        "· 类型：多人社交 / 休闲派对 / 绘画猜词",
                        "· 平台：网页浏览器（PC、平板、手机）",
                        "· 开发商：“神奇海螺试验场”（个人开发者 吴思澎）",
                        "· 上线时间：约 2021 年",
                        "· 商业模式：完全免费，无需注册登录即可游玩",
                        "玩法机制",
                        "核心规则",
                        "游戏的核心是经典的“你画我猜”玩法。系统会随机分配一个词语给一位玩家作为“画家”，该玩家需要在规定时间内使用画板进行绘画表达，而其他玩家则根据画面在聊天框中输入自己的猜测。猜对的玩家和画家都能获得积分，游戏进行若干轮后，总分最高的玩家获胜。",
                        "基础操作",
                        "· 创建/加入房间：进入网站后，你可以创建一个新房间（可设置密码），并邀请好友加入；也可以直接加入一个公开的房间，与陌生人一起游戏。",
                        "· 绘画与猜词：轮到绘画时，使用画板上的工具（笔刷、橡皮、取色器等）进行创作；猜词的玩家则在聊天框输入答案。",
                        "· 房间管理：房主可以管理房间，如踢出捣乱玩家等。",
                        "特色系统",
                        "专业级画板",
                        "功能强大，甚至超越了许多手机App，支持高级绘图功能，让你或你的朋友能充分展现画技。",
                        "· 压感笔刷：支持连接数位板或iPad Pencil，实现压感线条。",
                        "· 无限撤销/重做：画错了可以轻松回退。",
                        "· 4K画布导出：可以导出高达4K分辨率的PNG图片、GIF动图或MP4视频，方便保存和分享你的作品。",
                        "智能辅助与丰富词库",
                        "· 小狐狸AI提示：当猜词遇到困难时，可以呼叫AI小助手，它会从“声优、年代、题材、角色特征”等多个维度给出线索，帮助游戏进行下去。",
                        "· 海量词库：内置了丰富的词库，涵盖动漫、游戏、成语、学科等多种主题。游戏房间支持选择不同主题，让玩法更多样。",
                        "便捷的房间系统",
                        "· 三种房间模式：",
                        "1. 公开大厅：快速匹配，与全球玩家（主要为中文用户）随机游戏。",
                        "2. 私密房间：通过口令或链接邀请好友，是朋友聚会、线上开黑的最佳选择。",
                        "3. 固定房间：生成一个长期有效的房间号，方便社群成员日常使用。",
                        "· 断线重连：即使网络不稳定，也支持断线重连，不会丢失游戏进度。",
                        "社交与创作社区",
                        "· 画廊与排行榜：你可以在画廊中欣赏其他玩家的精彩作品，并通过排行榜查看游戏积分排名。",
                        "· 作品投稿：优秀的画作可以投稿到官方画廊，与社区分享你的创作。",
                        "· 聊天与互动：房间内设有聊天室，并支持表情互动，让游戏过程更加欢乐。",
                        "策略技巧",
                        "· 作为画家：先画轮廓，再补充细节。如果词语较难，可以用“拆字法”或用形象的辅助图形来暗示。",
                        "· 作为猜词者：优先关注画面的核心元素，不要被细节干扰。如果猜不出，可以果断使用“小狐狸AI提示”功能。",
                        "· 善用私密房间：和家人朋友聚会时，创建一个私密房间，大家用手机就能玩，比传统桌游更方便。",
                        "· 创作与分享：画出得意之作后，别忘了使用4K画布导出功能，保存下来发到朋友圈或社交媒体上。",
                        "游戏评价",
                        "优点",
                        "· 真正零门槛：无需下载App，无需注册登录，打开浏览器就能玩，是所有同类游戏中最便捷的选择之一。",
                        "· 功能强大：其内置的画板功能非常专业，甚至超越了大多数移动端App，为玩家提供了顶级的创作工具。",
                        "· 良心免费：完全免费，没有任何付费墙或内购项目，体验纯粹。",
                        "· 社区活跃：游戏氛围良好，可以欣赏到许多“大神”级的绘画作品。",
                        "缺点",
                        "· 对画技有要求：“你画我猜”的核心在于表达，如果你的画技不佳，可能会让队友感到困惑。",
                        "· 依赖玩家素质：公开房间中偶尔会遇到恶意捣乱或“开脚本”的玩家，影响游戏体验，但房主可以通过投票或踢人功能解决。"
            ],
            "俄罗斯方块变体": [
                        "farter.cn/tetr.js/ 因其独特的“挖掘”模式而在俄罗斯方块核心玩家圈中备受推崇，被国内玩家亲切地称为“屁块”（或 Dig Mod）。它是资深社区玩家 Farter 对 Simon Laroche 开发的轻量级网页游戏 Tetr.js 的一个深度修改版本，添加了众多极具挑战性的单人模式。",
                        "玩法机制",
                        "· 基础规则：遵循国际通用的“现代俄罗斯方块准则”，采用 10x20 标准场地，使用 7 种方块、暂存功能和 6 块预览。",
                        "· 核心模式：除了追求速度消除 40 行的“Sprint”和无限得分的“Marathon”，最大的特色是各类“挖掘”模式。在这种模式下，你需要不断消掉从底部涌上来的、带有缺口的垃圾行，避免被顶死。",
                        "特色系统",
                        "· 高度可定制：支持调节 DAS、ARR、重力等 16 项操作手感参数，甚至可以更换旋转系统和方块皮肤。",
                        "· 硬核竞技体验：采用 20G 重力、锁定延迟、连击 Back-to-Back 分数翻倍等设定，完全支持键盘操作，手感极佳。",
                        "· 赛后复盘：游戏结束后，你可以回看完整对局以分析提升操作。",
                        "💡 策略技巧",
                        "· 利用无限次预览：游戏提供多达 6 个预览块（远超经典的 3 个），练习时尽量提前规划，避免临时应对增加操作压力。",
                        "· 挖掘模式生存法则：尽量优先处理出现最多缺口的垃圾行，保持场地平整比追求高额分数更重要。",
                        "· 优化个人手感：尝试调整 DAS (按键延迟) 和 ARR (连发速度) 等参数，找到最适合自己反应和操作习惯的设定。",
                        "游戏评价",
                        "· 优点：手感被公认为极佳；硬核模式适合核心玩家挑战极限，马拉松模式又足够休闲；配置灵活，完全免费且开源。",
                        "· 缺点：完全专注于单人挑战，缺乏多人对战模式；复杂的设定菜单对新玩家有一定门槛；UI 界面风格偏老旧。"
            ],
            "Flappy Bird": [
                        "概述",
                        "Flappy Windows 是一款向经典虐心游戏《Flappy Bird》致敬的恶搞风格网页小游戏。你将操控一个不断下落的 Windows 窗口（或经典的 Windows 图标），通过点击让它上升，躲避一系列管道障碍。游戏由开发者 Benji 制作，托管在 Netlify 平台，是一款纯前端休闲游戏。",
                        "· 类型：休闲 / 反应考验 / 无尽跑酷",
                        "· 平台：网页浏览器（PC、手机）",
                        "· 开发商：Benji（个人开发者）",
                        "· 上线时间：约 2017–2018 年",
                        "· 商业模式：完全免费，无内购",
                        "玩法机制",
                        "核心玩法",
                        "游戏规则与《Flappy Bird》完全一致：你控制一个 Windows 窗口（或带有 Windows 徽标的物体），它受重力影响持续下落。每点击一下屏幕（或鼠标 / 空格键），窗口会向上“扑腾”一小段距离。你的目标是穿过由绿色管道构成的间隙，每穿过一个管道得 1 分。碰到管道或地面/天花板则游戏结束。",
                        "操作方式",
                        "· 鼠标点击：在游戏区域任意位置点击，窗口上升",
                        "· 空格键：按空格键上升",
                        "· 触摸屏：手指点击屏幕即可",
                        "游戏界面",
                        "游戏采用极简风格，背景为浅蓝色或渐变天空，管道为经典的绿色，窗口图标带有 Windows 徽标（四个彩色方块），带有复古的 8-bit 风格音效（可选）。",
                        "特色系统",
                        "恶搞主题",
                        "将《Flappy Bird》中小鸟替换为 Windows 窗口，增加了幽默感。窗口在飞行时会微微倾斜，模仿经典的“蓝屏死机”前的不稳定感。",
                        "难度曲线",
                        "游戏没有难度递增，自始至终保持相同的管道间隙和频率，完全考验玩家的耐心和反应一致性。",
                        "分数记录",
                        "游戏会记录本次得分以及历史最高分（保存在浏览器本地存储中）。",
                        "策略技巧",
                        "· 保持节奏：Flappy 类游戏的核心是找到点击的稳定频率，而不是狂点。建议每 0.5–0.8 秒点击一次，保持窗口在屏幕中央附近飞行。",
                        "· 目光放远：盯着窗口右侧即将到来的管道，提前规划点击时机。",
                        "· 冷静重启：失败后立即快速连续点击，可以迅速重新开始，避免烦躁情绪影响手感。",
                        "· 熟悉碰撞箱：窗口的碰撞区域比视觉稍大，尽量不要擦边过管道。"
            ],
            "Figure": [
                        "概述",
                        "Figure 是一款“每日一关”的逻辑解谜游戏，将经典的消除玩法与拼图策略相结合。游戏由海外独立开发者推出，并于 2022 年 9 月 在 Product Hunt 正式发布。它被许多玩家称为“每天的脑力热身”，风格介于 Bejeweled 与 Wordle 之间，既考验空间思维，也讲究步数规划。",
                        "· 类型：消除解谜 / 逻辑推理 / 每日挑战",
                        "· 平台：网页浏览器（PC / 移动端）",
                        "· 开发商：独立开发者（匿名）",
                        "· 发行日期：2022 年 9 月",
                        "· 商业模式：完全免费，无广告，无内购，无需注册登录",
                        "玩法机制",
                        "核心玩法",
                        "游戏的每一关都由一张铺满不同颜色色块的网格组成，目标是在规定的步数内把所有色块全部消除。点击底部色块后，它会清除自身以及相邻的同类色块，你需要精确规划每一步的点位与顺序，步步为营才能找到最优解。",
                        "每日同步挑战",
                        "每日 0 点更新一个全新关卡，且全球所有玩家面临的谜题完全相同，这让游戏天然带上了“今日挑战”的社交属性——你可以和朋友比拼谁的通关步数更少、解法更巧妙。",
                        "基础操作",
                        "· 点击 / 触摸：点击底部任意一个色块即可激活消除，该色块以及相邻的同色块会一起消失",
                        "· 撤销重试：操作错误后可以随时撤销，重新规划路线",
                        "· 提示系统：卡关时可查阅内置提示",
                        "特色系统",
                        "极简设计，极致体验",
                        "游戏主打“零负担”的体验。无需注册账号，打开网页直接开玩；界面无广告、无弹窗，甚至连追踪器都没有。整套交互干净到就像原生应用。",
                        "不可回溯的“每日一关”",
                        "游戏一天只开放一关，错过当天就再也无法补玩。这种设计有意打破了“刷到通关”的沉迷循环，让每一次挑战都变得更有仪式感。",
                        "全球同题，社交轻竞技",
                        "由于每日谜题全球相同，玩家间很自然地产生了友好的“默契赛”——在社交媒体上分享通关成绩、交流解法和讨论难点，营造出轻量化的社区氛围。",
                        "游戏评价",
                        "· 优点：真正零门槛、无广告无追踪的纯净体验受到高度认可，在 Product Hunt 收获了 5.0 分的好评。每日一关的节奏温和而有约束，适合作为碎片时间的“固定仪式”；越到后期关卡，逻辑与推理的成就感也越强。",
                        "· 缺点：错过当天无法回溯，对部分玩家可能带来“错过即错过”的遗憾感。新手上手时可能会感到略有难度，初期需要花费几关来熟悉规则和节奏。"
            ],
            "florr.io": [
                        "概述",
                        "Florr.io 是一款独特的 “刷刷刷”玩法的多人在线生存游戏。你将扮演一朵可爱的小花，在一个充满敌意的世界里，通过击败各种昆虫和生物来收集“花瓣”，不断武装和进化自己。除了玩家合作的PVE模式外，还可以进入Hel区域体验紧张刺激的PVP对决。Florr.io由知名 .io 游戏《Diep.io》和《Digdig.io》的开发者 M28 制作，以快节奏的战斗和深度的装备收集系统著称。游戏于 2020年1月 上线。",
                        "· 类型：多人在线生存 / 收集养成",
                        "· 平台：网页浏览器、Android、iOS（移动端App版本较旧，用户留存体验差）",
                        "· 开发商：M28 (Matheus Valadares)",
                        "· 上线时间：2020年1月",
                        "· 商业模式：免费游玩，含内购（星星购买稀有花瓣等）",
                        "· 适龄提示：建议13岁以上",
                        "玩法机制",
                        "游戏的核心是 “刷刷刷” ，通过不断刷怪，用低级花瓣合成高级花瓣，一步步变强。",
                        "核心设定",
                        "· 扮演一朵花：你将操控一朵在“弗洛尔大陆”上生存的小花。花瓣既是你的武器，也是你的防具。初始有5个装备槽，等级每达到15的正整数倍增加一个，45级时增至最多8个。",
                        "· 吸收与成长：击败敌人可获得花瓣和经验值。通过“吸收”花瓣获取经验值来升级并获取天赋点。",
                        "· 数值差距：每两个稀有度之间的基础数值差距为5倍，高级花瓣的属性提升极为巨大。",
                        "基础操作",
                        "· 移动：鼠标指针指向决定移动方向。",
                        "· 花瓣操控：鼠标左键（或 A 键）展开花瓣（攻击范围延伸），右键（或 B 键）收拢花瓣（防御或近身伤害）。",
                        "· 快捷方式：可在设置中开启“Keyboard movement”，改用 WASD 或 方向键 移动，适合习惯键盘操作的玩家。",
                        "世界地图（PVE/PVP区域）",
                        "游戏世界由多个区域组成，危险程度和收益逐渐提升。",
                        "· 花园：新手保护地，可获取基本稀有度到稀有稀有度花瓣，含蜜蜂、大黄蜂、蜘蛛等初级生物。",
                        "· 下水道：早期刷怪的重要区域，适合获取稀有花瓣。",
                        "· 蚂蚁地狱：主要刷怪区域之一，与下水道同为前期核心练级点。",
                        "· 沙漠：含甲虫、蝎子等高收益高危险生物，可获取史诗、传奇稀有度花瓣。",
                        "· 海洋：含螃蟹、水母等海洋生物，可获取史诗、传奇稀有度花瓣。",
                        "· 丛林：高等级区域之一。",
                        "· 地狱（Hel）：PVP区域，所有生物均可生成，玩家之间可以互相伤害，死亡无法重生。",
                        "游戏模式",
                        "· PVE模式（默认）：在除 Hel 以外的所有区域，玩家之间互为友军，不可互相伤害。你需要与队友合作，应对一波又一波的怪物攻击，死亡后可在下一波重生。",
                        "· PVP模式（Hel）：特殊的“自由竞技”模式，地图是一个比PVE模式更大的圆形竞技场，拥有独立的地图生成机制。玩家之间相互敌对，且死亡后无法在游戏内重生，需退出主界面重新进入。PVP模式曾经历多次调整（1月19日取消、3月17日重新引入等）。",
                        "稀有度系统",
                        "花瓣共有多个稀有度层级，稀有度越高，属性提升越夸张：",
                        "普通 → 罕见 → 稀有 → 史诗 → 传说 → 神话 → 究极 → 超级 → 永恒",
                        "· 基础稀有度之间的数值差距为5倍。从神话开始，获取难度急剧攀升。",
                        "特色系统",
                        "合成系统：核心成长引擎",
                        "通过概率合成、神谕和锻造三种方式，将低品质花瓣合成高品质花瓣。",
                        "· 基础合成：使用 5个相同稀有度的花瓣，有几率合成1个更高稀有度的花瓣。",
                        "· 成功机制：稀有度越高，合成成功率越低，且合成耗时越长（如神话→究极旋转7圈，究极→超级8圈）。",
                        "· 失败代价：合成失败会随机销毁1-4个槽位中的花瓣。",
                        "· 期望值参考：普通→罕见的期望消耗约6.4张花瓣（成功率64%），神话→究极（成功率2%）的期望消耗则高得惊人。",
                        "合成阶段 成功率 期望消耗",
                        "普通→罕见 64% 6.4 花瓣",
                        "罕见→稀有 32% 10.3 花瓣",
                        "稀有→史诗 16% 18.1 花瓣",
                        "史诗→传说 8% 33.8 花瓣",
                        "传说→神话 4% 65.0 花瓣",
                        "神话→究极 2% 约 127.5 花瓣",
                        "天赋与流派",
                        "通过天赋点可以自定义自己的玩法流派，常见流派包括：",
                        "· 撞击流：主带荷花（Yggdrasil）增加生存，辅以闪避护符和回血装备。",
                        "· 轮盘流：装备沙轮/死轮，搭配鸢尾、螫针、刺果等，在下水道等场景效果出色。",
                        "· 召唤流：专注召唤物的流派。",
                        "· 其他流派：装备“刺”或“蟹爪”可快速击杀高血量生物；加速流携带“更快”花瓣提升敏捷。",
                        "资源管理策略",
                        "· 新手前期应尽量在花园活动，获取稀有花瓣后再向外探索。",
                        "· 游戏早期的核心目标是尽快达到装备满级（45级），扩大装备栏和背包栏的容量以提升刷怪效率。",
                        "特色装备",
                        "· 世界树（Yggdrasil） ：几乎所有攻略都建议新手务必了解，是生存流派的核心装备之一。",
                        "· 唯一花瓣：部分特殊花瓣只能通过锻造或Boss生物掉落获得，不可正常合成。",
                        "· 神谕 & 锻造：两种更高级的合成方式，用于获取顶级稀有度或特殊花瓣。",
                        "· 陷阱花瓣（Magnet） ：磁力吸附效果在PVP中依然有效，但无法拾取普通（Basic）花瓣。",
                        "策略技巧",
                        "新手期发展策略",
                        "· 呆在花园：在没有获得足够稀有花瓣之前，留在花园是最安全的选择。",
                        "· 别走太远：前期不要盲目向地图边缘前进，容易遭遇高等级生物而前功尽弃。",
                        "· 推荐开启键盘移动模式：新手用鼠标控制方向容易误撞怪物，开启Keyboard movement可以避免这个问题，但移动方向限制为八个方向。",
                        "· 尽早完成新手教程：完成教学可获得TP用于购买商品，为刷怪做准备。",
                        "中期冲级路线",
                        "· 主要活动区域应为 花园 → 下水道 → 蚂蚁地狱 的循环刷怪路线。",
                        "· 刷到足够的传说及以上花瓣后，再考虑进入沙漠、海洋等高收益区域。",
                        "PVP生存法则",
                        "· 善用地形：利用Hel竞技场中生成的岩体、仙人掌等掩体躲避敌人攻击。",
                        "· 先手与反制：PVP中谁先发动攻击往往占据主动，但攻击后花瓣处于冷却期也最脆弱。",
                        "· 针对性配装：进入PVP前，应专门配置高爆发的Build，而非沿用PVE的生存装。",
                        "高阶操作",
                        "· 利用泡泡（Bubble）高速移动：泡泡是游戏中重要的机动道具，熟练使用可以极大提升生存与追击能力。",
                        "· 掌握攻击节奏：学会在展开（左键）和收拢（右键）之间灵活切换，最大化输出与生存。",
                        "· 针对性Build：对抗不同Boss或区域时，合理调整花瓣组合。例如，沙漠中鸢尾和螫针对高护甲怪物效果出色。",
                        "游戏评价",
                        "优点",
                        "· 玩法机制成熟：作为《Diep.io》开发者的作品，Florr.io继承了其成熟的核心玩法与数值平衡。",
                        "· 爽快的刷怪节奏：在PVE模式下，与众多玩家一起组团刷Boss的战斗体验极佳。",
                        "· 成就感强：成功合成或掉落高级花瓣时的喜悦感难以替代。",
                        "缺点",
                        "· “赌运气”机制引争议：核心的合成系统与掉落机制非常依赖运气，若运气不佳则体验极差。",
                        "· 严重的刷刷刷（Grinding） ：从传说（Legendary）刷到神话（Mythic）再到究极（Ultra），需要花费数月甚至更久，极易导致倦怠。",
                        "· 更新缓慢：开发者更新频率低，长时间无实质内容更新导致部分玩家流失。",
                        "· PVP生态缺乏平衡：Hel区域缺乏有效的匹配机制，新手常被装备碾压，体验不佳。"
            ],
            "塔防小游戏": [
                        "概述",
                        "tafang123.com 是一个极简风格的、免费的网页塔防游戏。它以其抽象的画风和硬核的自定义路径玩法，被不少玩家誉为“摸鱼神器”。该网站的核心就是一款自带编辑器、无固定路线的纯正塔防游戏。",
                        "· 类型：策略塔防 / 沙盒建造",
                        "· 平台：网页浏览器",
                        "· 开发商：个人开发者",
                        "· 上线时间：约 2021 年",
                        "· 商业模式：完全免费",
                        "玩法机制",
                        "这款游戏不同于传统塔防，它给了玩家极高的自由度。",
                        "· 核心玩法：游戏地图是一个空白的网格。你需要通过自由放置路障（Walls），为从白色圆圈出生点出现的怪物们规划出一条曲折蜿蜒的路线，强制它们走向地图另一端的黑色圆圈终点。",
                        "· 目标：在怪物抵达终点前，利用沿路布置的炮塔将其全部消灭。",
                        "· 基础操作：鼠标点击即可放置炮塔和路障，操作非常直观。",
                        "特色系统",
                        "游戏没有任何复杂的成长线，回归了塔防最原始的乐趣——规划与布局。",
                        "· 兵种与炮塔：游戏提供了四种基础武器（轻机枪LMG、重机枪HMG、激光塔Laser、炮塔Turret）和一种障碍物路障（Wall）。玩家可通过不断消灭敌人获得资源，以此升级现有炮塔或解锁更高级的防御塔。",
                        "· 硬核自定义：由于地图是一张白纸且怪物没有固定行动轨迹，你必须亲自设计防御工事，策略性与可玩性都很高。",
                        "· 游戏模式：极简直观，玩家进入网页即可开始游戏，无复杂模式选择。",
                        "策略技巧",
                        "游戏的乐趣完全取决于你的布局思路。",
                        "· 利用迷宫（Kiting）：这是游戏的核心理念——“塔防游戏，用围墙围个循环路线，让怪物被充分射击”。通过合理的路障摆放，可以无限延长怪物的行进路线，让其在炮塔的火力网中来回穿梭。",
                        "· 灵活布局：尝试不同的炮塔组合和迷宫路线。游戏没有唯一的正确答案，找出最高效的杀敌布局本身就是最大的乐趣。",
                        "· 优先升级：游戏初期资源有限，建议优先将资源投入到关键位置的炮塔上，而非急于扩大防御范围。",
                        "游戏评价",
                        "· 优点：它是一款堪称“摸鱼神器”，非常纯粹的策略烧脑游戏，极易上瘾。游戏没有复杂的界面和过场动画，点开即玩，适合在工作学习间隙放松。",
                        "· 缺点：作为个人开发的小体量作品，内容深度有限；UI界面风格极为朴素，可能无法满足追求华丽特效的玩家。"
            ],
            "水果忍者": [
                        "概述",
                        "fn.heheda.cn 是一个专注于经典休闲游戏《水果忍者》（Fruit Ninja）的在线网页版入口。它的核心就是一款无需下载，打开浏览器即可直接游玩的网页版《水果忍者》。",
                        "该网站由个人或小型团队运营，基于HTML5技术开发，整个页面极度精简，只包含游戏本身。它的子域名 fn.heheda.top 于2019年4月注册成立，主要服务于《水果忍者》的网页版体验。",
                        "· 类型：休闲益智 / H5游戏",
                        "· 平台：网页浏览器",
                        "· 运营商：个人或小型团队",
                        "· 上线时间：2019年",
                        "· 商业模式：完全免费，无需注册登录",
                        "注：heheda.cn 主站是一个正在开发中的商业解决方案平台，内容是提供软件开发、数字营销等企业服务，与游戏无关。",
                        "玩法机制",
                        "游戏玩法忠于《水果忍者》的经典规则。你将扮演一名身手敏捷的“忍者”，用手指或鼠标在屏幕上滑动，切开不断抛向空中的水果。",
                        "· 核心玩法：在限定时间内，尽可能多地切开西瓜、香蕉、菠萝等水果，每切到一个水果得1分。",
                        "· 失败条件：游戏中有炸弹混在水果中飞出，一旦切到炸弹，本轮游戏将立刻结束。",
                        "· 得分目标：在60秒的游戏时间内，在避免切到炸弹的前提下，争取获得最高分。",
                        "特色体验",
                        "· 即开即玩：网站最大的特点就是纯粹和便捷。无需注册、登录或下载任何软件，打开网页即可开始游戏。",
                        "· 浏览器优化：为获得最佳流畅度，页面会推荐使用 Google Chrome 浏览器进行游戏。",
                        "· 经典重温：对于许多玩家来说，这不仅仅是一个小游戏，更是一个重温童年或学生时代经典记忆的数字角落。",
                        "游戏评价",
                        "《水果忍者》本身就是一款在游戏史上留下印记的标志性作品。这个网页版将其原汁原味地复刻，优势在于极低的体验门槛，是公认的“摸鱼神器”。"
            ],
            "Gridspech": [
                        "概述",
                        "Gridspech 是一款“通过规则发现（Rule-Discovery） 来推进的逻辑解谜游戏”。游戏界面极其简约，由网格和各种神秘符号构成。它的玩法核心并非遵循教程，而是通过与这些符号的交互，自己摸索并推断出每个符号代表的规则。",
                        "· 开发商/发行商：Krackocloud",
                        "· 平台：网页浏览器（支持PC和移动端）",
                        "· 发行日期：2023年1月11日",
                        "· 商业模式：完全免费",
                        "· 游戏官网：https://gridspech.baublejar.com/",
                        "玩法与系统",
                        "Gridspech的核心玩法是推理。游戏开始时，没有任何文字提示，你需要通过点击和拖拽来填充网格中的方块。",
                        "· 核心规则：游戏的目标是“将所有符号两两连线”，连接它们的路径不能有分叉或多余的格子，完成后按空格键验证。游戏会即时给出反馈，你需要不断试错来理解每个新符号的含义。",
                        "· 符号解读：游戏通过引入新符号来递进难度。例如，“王冠”符号意味着所有与该格子颜色相同的格子都必须与王冠相连，“多点”符号则要求其周围的格子中有特定数量被填充。",
                        "· 流程与难度：游戏包含101个关卡，玩家平均需要花费约8小时才能完成。游戏的难度曲线呈“倒V型”，中间关卡最难，后期熟悉所有规则后反而更顺利。游戏最终难度止步于三种颜色，可能是因为从四色开始，解法的逻辑多样性会下降。",
                        "特色系统",
                        "· 无指引的推理乐趣：这是游戏最核心的魅力。它不提供任何规则说明，你需要像一个侦探一样，通过观察和试错来解读谜题，带来很强的成就感。",
                        "· 极简风格与深度内容：游戏界面非常干净，但逻辑设计精巧且富有创意，能让人沉浸其中。",
                        "· 社区解法分享：这款游戏在外国解谜社区中颇受欢迎，如果你卡关了，可以很方便地在网上找到社区用户的解法提示和思路分享。",
                        "策略技巧",
                        "· 善用试错：不要怕点错，游戏的重点就在于通过失败的反馈来理解规则。",
                        "· 先锁定逻辑上100%确定的格子：有些格子的颜色因其相邻的“王冠”或“多点”符号可以确定，先把这部分搞定会容易很多。",
                        "· 寻找路径的起点与终点：三个颜色的路线通常有明确的起点和终点，确定它们能帮你更好地进行推理。",
                        "· 相信直觉：当局面变得极其复杂时，逻辑推导可能变得非常困难。此时，你的“直觉”往往会比反复的硬推更有效，甚至可能在你下意识按下空格键验证时直接过关。",
                        "游戏评价",
                        "· 优点：评测网站 Grouvee 将本作定义为一款“关于网格与符号的规则传达类解谜游戏”。它用极简的风格，带来了脑力激荡的成就感，是一款“看似简单，实则烧脑”的佳作。游戏101个关卡的体量，也提供了足够的深度和挑战性。",
                        "· 缺点：高度的抽象性也带来了学习门槛，导致部分玩家在初期可能会感到困惑。有玩家提到，后期结束于三种颜色让人意犹未尽，希望能有更多进阶内容。"
            ],
            "数独": [
                        "概述",
                        "这是一款极简风格的在线标准数独游戏网站，由开发者利用闲暇时光打造的个人作品，据相关文章介绍，其本质是“一位站长的个人主页中的一个小工具”。该网站提供完整的数独游戏界面和多项辅助功能，帮助玩家在浏览器中直接进行数独解谜，无需下载或安装额外软件。",
                        "玩法机制",
                        "该网站严格遵循标准数独规则：在一个9x9的网格上，玩家需要填入1至9的数字，确保每一行、每一列以及每一个由粗线分隔的3x3九宫格内的数字都不重复。",
                        "用户可以通过两种便捷的方式在空格中填入数字：直接通过电脑键盘输入，或点击屏幕底部的数字按钮。",
                        "网站也提供了方便的数字修改功能：再次输入已经填入的数字，即可将其删除。此外，如果玩家想撤销之前的操作，可以使用撤销功能，最多可回退 1000步。",
                        "特色系统",
                        "多种难度与AI对手",
                        "游戏设有“从易到难”多种难度级别可供选择。为了增加挑战性和可玩性，游戏还引入了AI对手进行竞赛。官网页面也实时展示玩家的整体通过率，例如在首次访问时显示约为 44.76%，该数据会每日更新。",
                        "实用的候选数模式",
                        "这是网站的核心辅助功能之一，旨在帮助玩家理清解题思路。玩家可以通过在棋盘上双击鼠标左键或点击底部开关来激活“候选数模式”。激活后，玩家输入的数字将作为候选数显示，而不是最终填入的数字。这为复杂的逻辑推理提供了便利。",
                        "游戏还提供了两种自动候选数模式：",
                        "1. 自动删除候选数：当在某个格子输入数字后，系统会自动将该数字从所在行、列和九宫格中其他候选数中删除。",
                        "2. 全自动候选数：每次输入或删除数字后，系统都会全自动更新盘面上所有格子的候选数，让玩家无需手动添加和删除候选数。",
                        "便捷的分享与计时",
                        "游戏开始后，玩家可以通过复制链接和朋友分享当前正在挑战的题目。朋友只需在浏览器中打开该链接即可参与游戏。游戏还提供计时功能，方便玩家记录和分享自己的解谜时间。",
                        "策略技巧",
                        "对于数独游戏，这里有一些通用的入门与进阶技巧，可以帮助玩家更快地解开谜题：",
                        "· 从最简单的难度开始：新玩家建议从“简单”难度开始，熟悉规则和盘面感觉。",
                        "· 善用候选数功能：对于高难度的谜题，强烈推荐开启“候选数模式”或“全自动候选数”。这可以极大地减轻脑力负担，让玩家专注于逻辑推理，而非记忆数字。",
                        "· 优先寻找唯一数：在行、列或宫中，如果一个数字只可能出现在一个空格里，那么这个位置就是这个数字的唯一解。",
                        "· 利用“排除法”：观察某个数字在它所在的行、列和宫中，排除已出现的位置，剩下的格子就是候选位置。",
                        "· 保持耐心：数独是锻炼逻辑和专注力的游戏。解谜过程中遇到瓶颈是正常的，可以先跳过难题，从其他部分寻找突破口。",
                        "游戏评价",
                        "根据网络上的玩家及自媒体反馈，该网站被定义为“最适合摸鱼”的工具之一，其优点和潜在短板如下：",
                        "优点",
                        "· 即开即玩：最大的优势在于便捷。玩家无需注册或登录，打开网站即可立即开始游戏，被多个推荐文章推荐为“摸鱼神器”。",
                        "· 免费无广告：提供一个干净、无打扰的沉浸式数独体验，适合碎片化时间放松。",
                        "· 丰富的辅助功能：“自动候选数”等功能降低了高难度谜题的门槛，使其对新手和休闲玩家更为友好。",
                        "· 良好的社区氛围：网站评论区中，玩家在分享成绩的同时，也形成了友好的互助氛围（例如，有用户为其他玩家的成绩做了解释）。",
                        "缺点",
                        "· 易用性提示不显眼：对于新用户，所有交互功能（如激活候选数模式、分享、撤销等）都集中在界面上方，缺少首次使用的新手引导。",
                        "· 平台知名度较低：作为一个个人开发的项目，其用户规模和知名度与大型商业数独平台相比存在差距。"
            ],
            "桌游合集": [
                        "概述",
                        "这是一个名为“桌游合集”的免费在线平台，汇集了 40 多款经典的热门桌游。它由个人开发者 HullQin（公众号：线下聚会游戏）独立打造并维护，是一个非商业性质的兴趣项目，旨在提供一个“纯粹”的游戏环境——完全免费、没有广告，是和朋友聚会或远程开黑的宝藏工具。",
                        "· 类型：多人在线桌游 / 聚会平台",
                        "· 平台：网页浏览器（PC / 移动端）",
                        "· 开发商：HullQin（个人开发者）",
                        "· 上线时间：约 2022 年",
                        "· 商业模式：完全免费，无广告、无内购",
                        "· 网站地址：https://game.hullqin.cn/",
                        "玩法机制",
                        "“桌游合集”的核心机制非常简单：创建房间 → 邀请朋友 → 一起游玩。",
                        "· 开黑流程：打开网站后，可根据人数筛选游戏。选择想玩的游戏并创建房间，将生成的链接或房间号分享给朋友，即可开始对局。绝大多数游戏无需注册或登录，支持微信/QQ快捷登录。",
                        "· 特色功能：你可在房间页面查看游戏内置的详细图文规则说明，方便新手上手。平台还提供多项实用功能，确保游戏体验流畅：",
                        "· 中断重连：即使掉线或关闭网页，只要游戏未结束，重回房间即可继续。",
                        "· 观战模式：房间满员后，后续进入的玩家可自动变为观战者，待游戏结束有空位后可加入对局。",
                        "· 单机演练：以象棋为例，玩家可在联机对战中切换到“单机演练”模式，摆弄棋子寻找最优解，再返回房间继续比赛。",
                        "· 棋局分享：支持将棋局保存为URL链接并分享，方便复盘或好友挑战。",
                        "· 暗夜模式：已为超 20 款游戏适配深色模式，减轻夜间游玩时的视觉疲劳。",
                        "游戏列表",
                        "平台收录的游戏种类非常丰富，涵盖棋类、卡牌、聚会等多种类型，主要类别如下：",
                        "· 策略棋类：象棋、国际象棋、围棋、五子棋、跳棋、黑白棋、军旗、路墙棋等。",
                        "· 卡牌竞技：UNO、斗地主、璀璨宝石、拉密、卡坦岛、卡卡颂、爆炸猫、情书等。",
                        "· 派对互动：狼人杀、一夜狼、阿瓦隆、谁是卧底、行动代号、德国心脏病、炸飞机等。",
                        "· 休闲创意：飞行棋、达芬奇密码、摇色子、酒吧游戏、毒药、出包魔法师、井字棋等。",
                        "关于受欢迎的游戏，平台还提供了具体的支持人数，以下是一些例子：",
                        "游戏名称 支持人数",
                        "UNO 2 - 10 人",
                        "斗地主 2 - 4 人",
                        "五子棋 1 - 2 人",
                        "飞行棋 最多 4 人",
                        "策略技巧",
                        "· 从筛选功能开始：网站首页提供了按人数筛选的功能，不确定玩什么时，输入朋友人数就能获得推荐，省时省心。",
                        "· 善用观战和练习功能：如果你在等待游戏开始，可以先观战学习；如果想提升水平，可以利用“单机演练”功能反复推演。",
                        "· 提前熟悉规则：每款游戏都内置了规则说明，开始前花一分钟浏览，能让游戏过程更顺畅。",
                        "· 作为房主掌控局面：如果你是房主，记得在开始游戏前确认房间人数和设置，房主还拥有“开始游戏”的权限。",
                        "游戏评价",
                        "“桌游合集”在玩家中口碑极佳，被许多推荐网站和文章誉为“宝藏网站”、“线上桌游合集天花板”。",
                        "· 优点：",
                        "· 完全免费：纯净无广告、无需付费，开发者保持着独立的初心。",
                        "· 无需下载：打开浏览器即玩，支持手机和电脑，非常适合临时组局。",
                        "· 游戏丰富：收录了超 40 款经典桌游，满足各类需求。",
                        "· 联机方便：一键创建房间、分享链接，朋友点开即玩。",
                        "· 缺点：",
                        "· 语音依赖外部：部分需语音交流的游戏（如狼人杀）在网页端不方便，常需配合微信语音或腾讯会议等工具进行。",
                        "· 功能深度相对有限：相比于专业的商业游戏平台，部分游戏（如狼人杀）的功能更偏向发牌工具，深度体验可能有所不足。"
            ],
            "Zombs.io": [
                        "Zombs.io 是一款将供应链管理与塔防相结合的独立策略游戏，由德国开发者Tobias Springer于2018年推出。玩家需要在一片荒野上建设生产基地和防御系统，在白天扩展资源网络，抵御夜间丧尸的轮番进攻，尽可能长久地生存下去。",
                        "玩法机制",
                        "核心玩法",
                        "游戏设定在一个丧尸肆虐的世界中，核心任务是保护主基地不被摧毁。游戏最大的特点是将塔防与资源供应链深度绑定：防御塔需要弹药才能开火，弹药则需要依赖生产设施和原材料供应制造。玩家必须围绕资源采掘和运输网络来规划基地布局。",
                        "昼夜循环：白天是安全的建设期，玩家利用这段时间扩建基地、布置生产线和防御工事；夜晚丧尸从地图边缘涌现并攻击所有建筑，玩家只能依靠已建好的防线防守。",
                        "难度递增：每晚丧尸会变得更强，数量更多，每10晚还会出现一个强力Boss。主基地被摧毁时游戏结束。",
                        "随机开局：每局地图上的资源（水晶、铁矿、木材、铀）分布随机，玩家放置主基地时需充分考虑周边资源位置。",
                        "资源与供应链",
                        "游戏中四种基础资源：",
                        "水晶：核心货币，用于建造和升级所有建筑。",
                        "铁矿：加工后可制造炮弹。",
                        "木材：可与钢铁进一步加工成弓箭。",
                        "铀矿：用于核反应堆产生电力，供给闪电塔。",
                        "从开采矿井到加工厂再到防御塔，整个资源链环环相扣。例如弓箭塔需要弓箭作为弹药，弓箭由弓箭工厂生产，工厂需要钢铁（铁矿+木材）和木杆作原料。供应链中任何环节断裂，对应防御塔就会失效。",
                        "防御建筑",
                        "游戏提供三种主要防御塔：",
                        "加农炮塔：早期解锁，发射炮弹对丧尸造成范围伤害，适合对付成群敌人。",
                        "箭塔：射程最远、射速最快，但弹药生产最复杂，是中后期主力。",
                        "闪电塔：后期强力防御，攻击可连锁附近多个丧尸，需要核电驱动。",
                        "此外玩家还可以建造城墙来阻挡丧尸推进。"
            ],
            "画物理线条": [
                        "画物理线条是一款益智类小游戏作品，由一名网名为“一成”的站长利用周末闲暇时间个人开发",
                        "。其核心玩法结合了物理模拟与自由绘图，玩家需要利用简单的线条引导小球进入球筐，考验逻辑思维与物理直觉",
                        "。游戏目前包含512个官方关卡，并提供玩家自制关卡和分享功能",
                        "玩法机制",
                        "核心玩法",
                        "游戏的核心玩法融合了物理模拟与自由绘图。玩家在屏幕的画布上可以绘制任意形状的线条，当手指离开屏幕后，系统会启动物理引擎，这些线条会从“绘图模式”转变为“有重力的真实物理刚体”",
                        "游戏内有一个带有初始速度或处于静止状态的小球，玩家的目标是使这个小球通过滚动、碰撞或滑行的方式，最终进入位于场景中的篮筐里",
                        "。小球不会主动移动，它需要依靠重力的牵引作用，或被玩家绘制的线条结构推动才能抵达终点。",
                        "基础操作",
                        "游戏采用“所见即所得”的触摸/鼠标交互方式。",
                        "绘图操作：在移动端可用手指在屏幕上任意滑动，在PC端则按住鼠标左键拖动，来绘制自己想要的线条形状。",
                        "游戏机制：自由度高，画什么形状没有限制。但要通关，需要精准的几何构思，例如设计一个滑梯或围栏来兜住小球并将其导入筐中。",
                        "重玩与重置：如果线条画得不合适，玩家可以刷新页面或使用重置按钮擦除所有线条重新尝试，且没有步数限制。",
                        "核心机制：自由物理世界",
                        "游戏最大的特色是没有唯一的通关公式。同一个关卡，有的玩家可能选择用一条直线作为杠杆撬动小球，有的则可能选择建造一个复杂的弧形滑轨。线条的重力与碰撞体积是固定的，但由于每个人的画法不同，小球最终的滚动轨迹会千变万化。",
                        "游戏模式规模",
                        "当前游戏总共有512个关卡",
                        "。需注意的是，游戏目前并非完全按照难度递增排序，有些前期关卡可能反而需要更多巧思",
                        "玩家自制关卡：除了官方关卡，游戏拥有独特的UGC生态。由于后台积累了超过2000个玩家提交的创意关卡，开发者提供了专门的关卡设计工具供玩家发挥",
                        "。玩家设计完关卡后，可以通过链接分享给好友挑战",
                        "社区与支持",
                        "玩家社群：游戏拥有专属交流群（QQ群号码：727984106）",
                        "。由于玩家提交的关卡数量庞大（2000+个），开发者也在群内号召玩家一起参与审核，体现了极高的社区共创属性",
                        "策略技巧",
                        "观察惯性：小球本身有重量感，画线时尽量利用下坡或陡坡来产生加速度，不要妄想画一根竖线直接挡住球，球可能会直接压垮线条。",
                        "最短路径原则：如果追求高分或成就感，应尝试使用最少的线条引导小球，或尝试一笔画出的玩法，这在社区中颇受推崇。",
                        "利用边缘：很多时候不需要盖住整个下方，仅在边缘画一个小挡板就能改变球的滚动方向，达到四两拨千斤的效果。",
                        "多尝试：物理引擎的存在使得每次碰撞都有轻微随机性。如果某次画法理论正确但球没进，可以多试几次看看是不是引擎判定误差。"
            ],
            "半挂车停车": [
                        "半挂车倒车入库模拟器是一款专注于半挂车倒车操作的驾驶模拟小游戏，由个人开发者tankxu创建。与市面上多数卡车停车游戏不同，本作摒弃了复杂的任务系统和时间限制，将核心聚焦于半挂车倒车入库这一最具挑战性的驾驶技术。玩家可以自由调整起点、车位和障碍物的位置，反复练习倒车技巧。该游戏因其纯粹的模拟体验和高度自由的场景编辑功能，成为不少驾驶爱好者和卡车模拟玩家练习倒车的工具。",
                        "玩法机制",
                        "核心玩法",
                        "游戏模拟了半挂车（牵引车+拖挂）的倒车入库过程。半挂车由于牵引车与挂车之间存在活动连接，倒车时方向盘操作与车辆轨迹的关系与普通车辆完全相反：想让挂车尾部向右偏，方向盘需要向左打；想让挂车尾部向左偏，方向盘需要向右打。这种“反向操作”是半挂车倒车的核心难点，也是游戏的核心训练目标。",
                        "自由编辑模式：游戏的最大特色是高度自由的场景编辑功能。玩家可以点击选择起点、车位或障碍物进行编辑，通过拖动移动位置、绿点旋转方向、蓝点缩放大小，空地空白处拖动可平移视角。玩家可以根据自己的训练需求自定义练习场景。",
                        "无限重试：游戏没有时间限制，也没有失败惩罚。按ESC键即可重置当前场景重新尝试。游戏也没有关卡数量限制——玩家自己就是关卡设计师，可以创造无限多种倒车场景反复练习。",
                        "基础操作",
                        "键盘控制：",
                        "W键：油门 / 前进",
                        "S键：刹车",
                        "A键：方向盘左转",
                        "D键：方向盘右转",
                        "R键：切换挡位（前进D档 / 倒车R档）",
                        "空格键：刹车 / 手刹",
                        "ESC键：重置当前场景",
                        "视角与辅助：",
                        "游戏提供第三人称俯瞰视角，便于玩家观察车辆整体姿态。界面上方显示当前挡位和方向盘前轮角度，帮助玩家了解车辆实时状态。",
                        "核心机制：反向转向物理模拟",
                        "游戏精准还原了半挂车的倒车物理特性。在倒车（R档）时，打方向盘方向与挂车尾部偏转方向相反：想让挂车向右，方向盘向左打；想让挂车向左，方向盘向右打。开发者特别提示：动作要缓慢细微，一旦挂车开始偏转，应立即反向微调方向盘将其拉直，避免过度修正导致失控。这一机制使得倒车操作极具挑战性，也正是游戏的趣味所在。",
                        "游戏模式",
                        "游戏没有传统意义上的关卡模式，而是采用“自定义场景 + 自由练习”的开放模式：",
                        "沙盒练习模式：玩家可以自由放置起点和车位位置，不限次数反复练习倒车入库。",
                        "障碍物编辑：玩家可以添加、移动、旋转和缩放障碍物，模拟现实中带有窄缝、柱子或其他车辆的真实停车场场景。",
                        "视角调整：通过空白处拖动可以平移整个场景视角，方便从不同角度观察倒车轨迹。",
                        "策略技巧",
                        "牢记反向原理：倒车时，方向盘方向与挂车尾部偏移方向完全相反，这是所有技巧的基础。进入倒挡前最好在脑中过一遍“想让车尾往哪走，方向盘就往反方向打”。",
                        "动作轻微缓慢：半挂车倒车最忌大幅度急打方向。开发者提示“动作要缓慢细微”，一旦挂车开始偏转，立刻反向微调拉直，否则容易陷入“蛇形”失控状态。",
                        "提前规划轨迹：倒车前先想好挂车需要的大致轨迹。由于挂车转弯半径远大于普通车辆，应从较远距离开始调整，避免车位附近空间不足。",
                        "利用前轮角度指示器：游戏界面提供实时前轮角度显示，可以帮助玩家精准控制打盘幅度，尤其适合初学者掌握“微调”的感觉。",
                        "多次尝试同一场景：同一场景下每次倒车轨迹都可能不同，反复练习可以形成“肌肉记忆”，逐步掌握半挂车倒车的感觉。",
                        "先练直道倒车：游戏提供了“直道倒车”的基础预设场景。建议新手先从这个模式开始，掌握直线倒车时如何微调保持挂车不跑偏，再练习有角度的入库。"
            ],
            "什么能打败岩石": [
                        "什么能打败岩石（What Beats Rock?）是一款由AI驱动的创意问答游戏，是对剪刀石头布的颠覆性改编。游戏从“石头”开始，玩家输入任何认为能打败石头的物品，由AI判定是否有效。若通过，游戏以该物品作为新目标，无限延续下去。",
                        "玩法机制",
                        "核心玩法：屏幕显示“什么能打败石头？”，玩家输入答案。AI判定是否真的能打败石头。若成功，显示解释和统计，然后自动进入下一轮：“什么能打败[答案]”。",
                        "AI判定系统：后端使用大语言模型（如GPT-4o）判定合理性，并生成幽默的逻辑解释。排行榜每周重置。",
                        "游戏特色：没有固定规则，任何物品都可作为答案。提供AI生成的趣味解释和emoji，可分享至社交媒体。"
            ],
            "维京战争": [
                        "维京战争在线版是一款融合割草、模拟经营与角色扮演玩法的战争策略游戏，围绕维京部落的扩张展开，采用类似皇室战争的快节奏对战模式。玩家扮演维京勇士，建造和发展村庄，训练军队，进行海上航行和掠夺。",
                        "玩法机制",
                        "核心玩法：融合割草清场、模拟经营资源积累、角色扮演养成和战争策略战术博弈。玩家通过建造农场等设施积累资源，升级军队和防御设施。战斗中巧妙布置兵力抵御敌军，通过战斗积累经验升级士兵，收集装备强化部队。",
                        "游戏模式：包含PvE（对战电脑AI）和PvP（实时对抗）模式。支持双人对战和锦标赛模式。采用卡通手绘风格画面。"
            ],
            "黑洞吞噬": [
                        "黑洞吞噬是一款由法国Voodoo公司开发的多人在线休闲竞技游戏。玩家控制一个黑洞，在城市中吞噬各种物体来扩大体积，最终目标是成为最大的黑洞。支持实时多人对战，玩家之间可互相吞噬。",
                        "玩法机制",
                        "核心玩法：开始控制微小黑洞，移动吞噬街道上各种物体（路灯、垃圾桶、邮箱等），体积增大后可吞噬更大建筑物，最终可吞噬其他玩家控制的较小黑洞。时间结束前成为体积最大的黑洞即为胜利。",
                        "游戏模式：多人竞技模式（多名玩家同地图比赛吞噬）和无尽模式（不断吞噬从天而降的物品）。包含6张不同风格的地图。"
            ],
            "极速矢量": [
                        "极速矢量是一款设计简洁的矢量风格跑酷竞速游戏。玩家控制矢量小车在轨道上不断前进，躲避路障，获得更高分数。操作简单，只需点击屏幕即可跳跃，支持二段跳机制。",
                        "玩法机制",
                        "核心玩法：矢量小车自动向前行驶，玩家在适当时机点击屏幕跳跃越过障碍物。二段跳可在第一次跳跃后再次点击进行第二次跳跃，以跨越更宽的间隙或躲避组合障碍。撞上任何障碍物即游戏结束。",
                        "游戏特色：极简矢量画风，界面简洁。节奏逐渐加快，考验反应能力。提供多条命机制，增加容错。"
            ],
            "神庙逃亡": [
                        "神庙逃亡在线版是一款基于原版神庙逃亡的网页移植游戏，由",
                        "提供在线游玩入口。玩家控制冒险家逃离神庙，在无尽的古道上奔跑，躲避障碍物和陷阱，同时躲避身后追逐的怪物。游戏采用HTML5技术，无需下载安装，支持PC键盘、手机触屏及重力感应操作，并设有自动巡航辅助模式。",
                        "玩法机制",
                        "核心玩法：玩家自动向前奔跑，通过滑动或按键操作控制角色转向、跳跃和滑行，躲避障碍物、陷阱和悬崖。收集金币和道具可升级能力和解锁角色。身后有怪物持续追赶，速度过慢或撞上障碍物即游戏结束。随着距离增加，速度加快，障碍物密度增加。",
                        "基础操作：PC端使用A/D键或左右方向键转向，上方向键/空格键跳跃，下方向键滑行。手机端触屏滑动操作。还支持重力感应操作。"
            ],
            "Taming": [
                        "Taming 是一款2D多人在线生存游戏，玩家在荒野中收集资源、建造基地、驯服宠物，并与其他玩家进行战斗。玩家可同时驯服并携带三只宠物辅助作战，每只宠物拥有独特的技能和属性相克机制。游戏支持PvP和PvE玩法，设有赛季系统和排行榜，玩家可通过击杀动物、其他玩家和BOSS来提升宠物经验值并解锁更多内容。",
                        "玩法机制",
                        "核心玩法：玩家在荒野中生存，通过击杀动物获取资源，建造防御工事和基地。宠物是游戏的核心辅助系统：玩家可以驯服野外睡觉的幼崽使其成为宠物，宠物会随着时间成长，拥有攻击、防御和跟随三种行为模式可设置。每只宠物都有独特的技能，如再生/吸血、突进、范围攻击、旋风等，并且存在属性相克关系。",
                        "宠物系统：玩家最多可同时拥有三只宠物。宠物可通过击杀动物、其他玩家和BOSS来提升经验值和年龄。地图中的动物具有三种等级，幼崽可被驯服，长大后则无法驯服。部分稀有宠物如Mauve需要使用特殊药水才能驯服。",
                        "特色功能：游戏包含赛季冒险系统，根据玩家的生存、战斗和收集表现自动完成目标并获得奖励。每位玩家拥有自己的房屋，可以重新装饰。玩家还可以参加T.A.M.E.R认证考试获得徽章。部落系统允许玩家组队争夺图腾点。",
                        "基础操作：使用鼠标或触摸屏移动和攻击。靠近睡觉的幼崽时按下爪子按钮即可驯服。可随时设置宠物的行为模式。支持移动端竖屏或横屏游玩。"
            ],
            "triep.io": [
                        "（又称3D Tank Battle Royale）是一款3D坦克对战io游戏，玩家控制坦克在竞技场上与其他玩家战斗，目标是成为最后的幸存者。游戏采用3D低多边形美术风格，俯视视角控制坦克移动和射击，结合了大逃杀的生存淘汰机制和io类游戏即开即玩的特点。",
                        "玩法机制",
                        "核心玩法：玩家出生在地图随机位置，控制坦克移动并射击敌方坦克。游戏采用“一局定胜负”机制，坦克被击毁即淘汰，最后存活的坦克获胜。地图中分布着道具箱、弹药包和血包，拾取可获得弹药、生命恢复或特殊能力（如射速提升、护甲等）。",
                        "坦克类型：游戏中坦克分为不同类型，包括轻型高速型（速度快但装甲薄）、中型平衡型（各项属性均衡）、重型坦克（高生命低速度）。部分版本提供主战坦克和自行火炮等特殊类型。",
                        "地图设计：战场采用3D地形，包含丘陵、岩石、建筑废墟等掩体，坦克可以借助掩体规避敌方火力。地图设计使战术选择多样化，可以利用高地进行远程狙击，或绕道侧面进行偷袭。",
                        "基础操作：WASD控制坦克移动，鼠标瞄准，点击左键开炮。部分版本支持右键瞄准镜或技能释放。屏幕上方显示剩余玩家数量和当前排名。坦克移动时会显示履带轨迹，命中特效明显。"
            ],
            "Slither.io": [
                        "Slither.io 是一款风靡全球的在线多人贪吃蛇游戏，灵感来源于经典游戏贪吃蛇和",
                        "。玩家控制一条由彩色圆点组成的蛇，在竞技场中吞噬光点来不断增长身体长度，同时避免撞到其他蛇的身体。玩家可以通过让其他蛇撞到自己的身体来击败它们，使其变成光点供自己吞噬。游戏2016年发布后迅速走红，成为.io游戏黄金时代的代表作之一。",
                        "玩法机制",
                        "核心玩法：蛇自动向前移动，玩家通过鼠标或手指滑动控制蛇的方向。地图上散布着五颜六色的光点，吞噬光点可使蛇的身体变长并增加分数。蛇的身体越长，转向半径越大，控制难度越高。如果蛇头撞到地图边缘或其他蛇的身体（包括自己的尾巴），蛇会立即死亡并变成一串光点供其他玩家吞噬。",
                        "加速机制：按住鼠标左键或空格键（PC端）可使蛇进入加速冲刺状态，消耗自身身体长度换取短暂高速。加速常用于快速逃逸或切断其他蛇的退路，但长度会持续减少。",
                        "皮肤与外观：蛇的皮肤系统是游戏一大特色，玩家可使用游戏内货币或观看广告解锁各种主题皮肤，包括国旗、食物、万圣节、圣诞节等主题。部分皮肤有特殊发光效果。",
                        "游戏模式：游戏仅有一个无尽的多人竞技模式，地图上同时容纳数百名玩家。服务器会定期显示“当前冠军”，即长度最长的蛇。近期版本加入了Bot填充机制，保证低活跃时段仍能匹配到对手。",
                        "基础操作：PC端鼠标移动或方向键控制蛇的移动方向，按住鼠标左键或空格键加速。移动端手指滑动控制方向，点击屏幕加速。胜利后可为冠军蛇输入胜利信息向全场玩家展示。"
            ],
            "Slow Roads": [
                        "Slow Roads是一款在线驾驶放松模拟器，旨在提供“无尽的驾驶禅意”。玩家驾驶车辆在程序生成的蜿蜒道路上无限行驶，没有时间限制、没有导航、也没有任务目标。游戏完全免费，支持PC和移动端浏览器，只需打开网页即可开始驾驶，感受沿途不断变化的风景。",
                        "玩法机制",
                        "核心玩法：车辆自动向前行驶，玩家只需控制方向。道路是程序实时生成的，永无止境，每次游玩路线都不同。支持多种场景风格切换，包括普通、冬季、丘陵、异世界等。游戏包含多种车型可选，每款车的内饰细节和引擎音效各不相同。全程无碰撞惩罚、无时间限制、无目标终点，纯粹放松驾驶。",
                        "操作方式：W键油门，S键刹车，AD键或鼠标控制方向。支持游戏手柄（含扳机键映射），提供第一人称和第三人称视角。可设置自动巡航（巡航控制）和自动驾驶模式，自动驾驶时车辆自动保持在车道内。支持鼠标控制方向（需在设置中开启）。移动端支持陀螺仪控制。",
                        "视角切换：支持多种驾驶视角，包括第一人称（仪表盘完整内饰）、引擎盖前视角和第三人称车外视角。",
                        "游戏特色：道路环境包含山川、森林、草原、海岸、沙漠等多种地形，程序实时生成画面，无需加载新区域。可调节天气（晴朗、阴天、雨天、雪天）、时间（白天、傍晚、夜晚）以及道路宽度和弯道密度。支持自定义世界种子，输入相同哈希值可生成完全相同的道路。游戏内车速表、里程表和换挡动作均完整模拟。"
            ],
            "Skribbl.io": [
                        "你画我猜是一款免费的在线多人绘图猜词游戏。每局游戏由多个回合组成，每回合一名玩家根据系统给出的单词作画，其余玩家猜词得分。回合结束时得分最高者获胜。游戏无需注册，无需下载，打开网页即可创建房间或加入公共房间。2022年11月进行了大版本更新，新增移动端支持、重绘工具栏、撤销按钮、更多颜色和自定义房间设置等功能。",
                        "玩法机制",
                        "核心玩法：每回合随机指定一名玩家为“画师”，画师从多个单词中选择一个进行作画（最多可选5个）。其他玩家在聊天框中输入猜测的单词（仅限英文）。答对者得分，猜对越快得分越高。画师在单词被猜中时也能获得分数。每个回合有时间限制（通常80秒），时间结束后揭晓答案并进入下一回合。",
                        "积分规则：第一个猜对的玩家得分最高，后续猜对的玩家得分递减。画师在画作被猜中时获得固定分数，无人猜对时不得分。",
                        "房间设置：自定义房间最多可容纳20名玩家。房主可设置单词模式（普通/隐藏/组合）、单词数量（1-5个）、提示数量、语言、回合数、画图时间等。支持踢人、封禁、禁言和举报功能。",
                        "特色功能：2022年更新增加移动端触摸绘图支持、压力感应绘图（实验功能）、可自定义快捷键、撤销/清除/填充工具、更多颜色和头像选项。支持多语言界面（包括英文、德文、俄文、日文等）。可邀请好友加入公共房间。",
                        "基础操作：轮到画师时，选择单词后使用画笔工具作画。猜词时在聊天框输入英文单词并按回车。绘图工具包括画笔、填充、橡皮擦、撤销、清空等，支持颜色选择。"
            ],
            "SUROI": [
                        "Suroi是一款2D多人大逃杀游戏，玩家被投放到一座神秘岛屿上，在逐渐缩小的安全区内与其他玩家战斗，成为最后一名幸存者。游戏包含多种限时活动模式，如万圣节模式、冬季模式和新年模式，不断推出新武器、新地图和新机制。",
                        "玩法机制",
                        "核心玩法：每局游戏有多名玩家，从岛屿各处降落，搜寻武器、弹药和装备，与其他玩家战斗。地图上散布着各种建筑和资源点，包括医院、墓地、仓库、火车站等。安全区逐渐缩小，身处圈外会持续损失生命值。最终生存的玩家或队伍获胜。",
                        "武器与装备：游戏包含丰富的武器库，包括狙击枪ULR-338、左轮手枪TTK Esaul、镰刀、南瓜发射器M202-F等。特殊装备包括疫苗注射器、种子发射器、SEED系列爆炸物等。每件武器都有独特的弹道、射速和后坐力。",
                        "特殊机制：游戏定期推出季节性活动。万圣节模式包含南瓜祝福增益、墓地、南瓜仓库等；冬季模式新增冰屋和冰箭，河流和海洋可滑冰移动；新年模式下空投每30秒刷新一次。感染模式下玩家会逐渐感染变异病毒，生命值持续降低，并受到随机负面效果影响。",
                        "基础操作：WASD移动，鼠标瞄准，左键射击，R键换弹，数字键切换武器。有血量、护甲、背包等生存指标，小地图显示安全区位置和空投标记。"
            ],
            "红毯竞速": [
                        "红毯竞速（Red Carpet Racing）是一款考验手速的网页小游戏。游戏的核心机制极其简单：玩家需要快速交替按G键和H键，使角色在红毯上加速奔跑，冲向终点。游戏采用HTML5技术，支持PC键盘和移动端触摸屏。",
                        "玩法机制",
                        "核心玩法：游戏开始后，角色自动在红毯上行走。玩家需要以最快速度交替按下键盘上的G键和H键，按得越快角色跑得越快。到达终点时显示总用时，可与好友比拼成绩。游戏名称“红毯”暗示类似电影首映式红毯的竞赛场景。",
                        "操作方式：PC端连续快速交替按G键和H键；移动端通过快速交替点击屏幕左右两侧的两个虚拟按钮完成加速。",
                        "游戏特点：规则一目了然，无复杂操作。考验纯粹的手速和按键节奏感，适合短时间多次挑战刷新个人纪录。界面简洁，无多余元素。"
            ],
            "井字棋": [
                        "井字棋（Tic-Tac-Toe）是一个极简的HTML5网页游戏，提供与电脑AI对战的双人井字棋体验。玩家轮流在3x3网格中画X和O，先将三个标记连成一条直线者获胜。游戏设计复古简约，加载迅速，适合短时间休闲娱乐。",
                        "玩法机制",
                        "核心玩法：玩家执X，电脑执O，轮流在空格中落子。当一方在横、竖或对角线上连成三子即获胜；网格填满无胜负则为平局。游戏记录双方的胜场数、平局数和总对局数。",
                        "模式选择：提供“单人对战电脑”和“双人对战”（两位玩家轮流操作）两种模式。电脑AI策略固定，先手时有一定优势，后手时只能追求平局。电脑AI水平适中，适合初学者或儿童游玩。",
                        "游戏特点：界面极简复古，无时间限制，无广告干扰，完全免费，无需注册。游戏逻辑简单，适合全年龄段玩家。"
            ],
            "植物大战僵尸": [
                        "植物大战僵尸在线版是基于经典塔防游戏植物大战僵尸的玩家自制HTML5移植版本，由LonelyStar与江南游戏开发社共同开发，于2021年启用",
                        "域名，2024年4月更新重构了UI界面。该移植版不仅完整复刻了原版植物大战僵尸的经典玩法，还加入了大量原版没有的原创关卡和模式，包括东海龙宫、水乡嘉兴、熔岩洞穴等特色场景。",
                        "玩法机制",
                        "核心玩法：玩家通过种植各种功能的植物来阻止僵尸进入房屋。普通僵尸、路障僵尸、铁桶僵尸等经典敌人悉数登场。阳光是种植植物的关键资源，向日葵产生阳光，豌豆射手攻击敌人。游戏采用波次进攻机制，每波僵尸强度递增，Boss波后有休息时间。",
                        "游戏特色：包含大量原创内容。冒险模式涵盖白天草地、夜晚草地、白天泳池等经典主题，以及东海龙宫、水乡嘉兴、熔岩洞穴、魔音之旅、远古教堂等原创主题。设有中国馆系列关卡（初入中国、暗杀行动、夜幕降临等），以及决战秦皇副本。迷你游戏部分包含坚果保龄球、观星、以牙还牙、僵尸运动会、排山倒海等。此外还有每日挑战、图鉴系统和调速功能（1/2倍速到10倍速可调）。",
                        "基础操作：鼠标点击或触摸屏选择植物卡片，再点击草坪上的方格即可种植。收集阳光和植物能量豆也通过点击完成。支持游戏速度调节，可选择1/2倍速至10倍速运行。"
            ],
            "忍者大战": [
                        "忍者大战邪恶集团（Ninja vs EVILCORP）是一款js13kGames 2020年游戏开发大赛的参赛作品。玩家扮演一名忍者，运用攀爬、跳跃和潜行技能，攀登充满安保系统的高塔，最终找到并揭露邪恶集团的计划。游戏必须在13KB的代码限制内实现完整的游戏机制，展现了极致的代码优化技巧。",
                        "玩法机制",
                        "核心玩法：忍者需要从塔楼底部向上攀登，通过跳跃和攀爬到达高处。关卡中设有安全摄像头和警卫巡逻，一旦被侦测到游戏即失败，因此需要寻找视野盲区并把握移动时机。",
                        "操作方式：方向键控制移动和攀爬。摄像机有探测范围，玩家需观察其转动规律后行动。部分关卡还包含机关陷阱和可破坏障碍物。",
                        "游戏特点：极简像素美术风格，文件极小加载迅速，关卡设计紧凑，考验玩家的观察力和时机判断能力。"
            ],
            "棋牌在线对战": [
                        "PlayOK（又称）是一个老牌在线棋牌游戏平台，汇集了8款经典棋牌游戏，包括国际象棋、围棋、中国象棋、五子棋、翻转棋（黑白棋）、国际跳棋、双陆棋和德州扑克。玩家可以立即以游客身份快速开始游戏，无需注册，同时在线人数众多，总能找到对手。平台也提供注册账号功能，注册后可保存对局记录和个人统计。游戏支持实时在线对弈和邮件回合制游戏两种模式，所有游戏规则基于标准棋牌规则。",
                        "玩法机制",
                        "核心玩法：平台内的每款游戏都遵循经典规则。国际象棋和围棋提供Elo等级分系统；五子棋采用无禁手的主流民间规则；中国象棋支持简体中文界面；双陆棋和德州扑克则包含计分和筹码系统。",
                        "游戏模式：支持快速匹配、创建私人房间邀请好友、电脑AI对战（部分游戏）、锦标赛模式以及挑战排名相近的对手。注册用户可以保存和复盘自己的历史对局。",
                        "平台特色：界面简洁无广告干扰，无需下载客户端，完全浏览器运行。平台支持多语言界面（超过30种语言，包括简体中文）。在线玩家数量稳定，任何时段都能快速匹配到对手。",
                        "基础操作：鼠标点击棋子并拖动即可走子，支持触摸屏操作（移动端）。聊天窗口可与对手交流，也可发送表情和自动问候。"
            ],
            "Play CS": [
                        "Play CS是一个网页版CS 1.6对战平台，由俄罗斯团队运营，让玩家无需下载安装任何软件，直接在浏览器中体验经典的CS 1.6多人对战。平台连接全球社区服务器，支持多种游戏模式，并完全还原了原版CS 1.6的武器、地图和物理机制。玩家无需注册即可开始游戏，服务器遍布北美、欧洲、巴西、亚洲等多个地区。",
                        "玩法机制",
                        "核心玩法：Play CS完整还原了CS 1.6的经典玩法。玩家可选择反恐精英（CT）或恐怖分子（T）阵营，在不同的地图中完成对应任务。平台支持多种经典游戏模式。",
                        "游戏模式：",
                        "人质救援模式（cs系列地图）：反恐精英需找到并救出人质，恐怖分子需阻止对方。",
                        "炸弹拆除模式（de系列地图）：恐怖分子需在指定地点安放炸弹并保护其爆炸，反恐精英需拆除炸弹。",
                        "其他模式：包括死斗模式、刀战模式、狙击战等特殊娱乐模式。",
                        "武器与装备：经典CS 1.6武器库完整还原，包括AK-47、M4A1、AWP狙击枪、沙漠之鹰等。每把武器有其独特的后坐力、弹道和伤害特性。玩家可使用击杀获得的金钱购买武器、护甲和投掷物。",
                        "服务器与连线：平台连接全球各地社区服务器，玩家可选择低延迟的地区进入。服务器支持最多32人对战，有大量活跃玩家在线。无需注册，打开网页即可自动连接进入游戏大厅。",
                        "画面与操作：游戏画面接近原版CS 1.6的视觉效果，但并非原生渲染而是通过网页技术云端串流或模拟运行，保留了经典风格。操作方式为标准FPS键位：WASD移动，鼠标瞄准射击，R键换弹，数字键切换武器，B键购买菜单。"
            ],
            "皇冠数独": [
                        "皇冠数独（Queens Game）是一款融合了经典八皇后问题、数独逻辑和彩色区域约束的新型益智解谜游戏。玩家的目标是在一个彩色网格中放置皇后，使得每一行、每一列、每个彩色区域中恰好有一个皇后，且皇后之间不能相互接触（包括对角线相邻）。游戏提供超过600个手工设计的关卡、每日挑战和无限模式，适合热爱逻辑推理和策略挑战的玩家。",
                        "玩法机制",
                        "核心规则：游戏在一个网格上进行，网格被分割成多个相连的彩色区域。玩家需要放置皇后的位置必须同时满足三个条件：每行恰好有一个皇后；每列恰好有一个皇后；每个彩色区域内恰好有一个皇后。此外，皇后之间不能相邻，包括对角线方向也算相邻。这一规则组合使得每个关卡都成为一道严密的逻辑推理题。",
                        "解谜策略：关卡初期可以通过观察那些只包含一个可用单元格的行、列或颜色区域来入手。每放置一个皇后，其所在的行、列、颜色区域以及周围8个相邻单元格都会立刻被排除。这种连锁反应是解题的关键。游戏会随着棋盘尺寸增大而难度提升，从8x8基础棋盘到11x11高级棋盘不等。",
                        "特色功能：每日挑战每天更新一个固定谜题，可与全球玩家比拼完成时间。无限制模式下可随机生成谜题，无限游玩。支持谷歌账号登录以保存游戏进度、最佳时间和解锁成就。解锁的关卡按星级评定。",
                        "游戏模式：包含超过600个手工精心设计的关卡，难度从入门到专家级不等。另有每日挑战模式，每天更新一个谜题，全部免费。"
            ],
            "OGS围棋": [
                        "OGS（Online Go Studio）是一个全球性的在线围棋社区，被誉为“围棋界的",
                        "”。玩家无需安装任何客户端，打开网页即可下棋，支持实时对弈和非即时（邮件回合制）两种模式。OGS以其干净的界面、强大的AI分析和活跃的社区而深受围棋爱好者喜爱。平台提供中文在内的多语言界面，既可匿名快速对战，也可注册账号保存棋谱。",
                        "玩法机制",
                        "核心玩法：玩家可以选择即时对弈（双方在限定时间内落子，考验快棋能力）或非即时对弈（每步棋有较长时间思考，适合慢棋爱好者）。对局使用标准19路棋盘（也支持9路、13路），采用中国规则或日本规则可选。匹配系统会根据玩家等级分自动寻找实力相近的对手。",
                        "AI复盘与学习：每盘棋结束后，玩家可以请求AI进行棋局分析，AI会指出胜负关键点和错失的机会，并给出胜率曲线。平台内置数千道死活题供玩家练习，从入门到高段位均有覆盖。此外还提供定式大全和棋谱库，可查阅经典棋局。",
                        "观战与社区：玩家可以实时观看其他高手正在进行的对局，学习高级战术和布局思路。平台设有论坛、群组、GoTV视频专区等功能，玩家可在此交流棋艺、组织比赛。OGS也是大型线上围棋比赛的重要举办平台之一。",
                        "等级分系统：OGS采用Elo等级分系统，等级分权威性较高，社区普遍认为OGS的1段相当于野狐围棋的4段，4段相当于野狐9段。高手云集，竞技水平很高。",
                        "支持功能：支持上传和下载SGF棋谱文件，方便存档和分享。支持创建私人房间邀请好友对战。支持锦标赛和天梯赛等进阶模式。"
            ],
            "永不言弃": [
                        "永不言弃（Give It Up!）在线版是一款音乐节奏闯关游戏的网页移植版本。原版由匈牙利独立工作室Invictus Games Ltd.开发，于2014年在iOS平台发布后迅速走红。玩家控制一个黑色小墨点，在由树棍构成的平台上跟随音乐节拍精准跳跃，避开红色危险区域，一路向上攀登。游戏判定严苛，一触即死，以“虐心”难度和魔性洗脑的音乐著称。",
                        "玩法机制",
                        "核心玩法：黑色小墨点会自动在平台上前进，玩家需要在合适的时机点击屏幕（PC端按空格键）使其跳跃。平台上的树棍顶端颜色决定了安全性：绿色为安全可踩，红色为危险需避开。一旦踩中红色平台或落入深渊，游戏立即结束，但会在死亡位置留下痕迹，鼓励玩家反复尝试。",
                        "节奏系统：跳跃时机必须与背景音乐的节拍完全吻合，太早或太晚都会导致失败。背景音乐风格魔性洗脑，与游戏难度形成鲜明对比，增加了游戏的独特魅力。每关的音乐节奏不同，玩家需要逐步适应不同的节拍模式。",
                        "游戏模式：包括闯关模式（基础的关卡推进）和挑战模式（更高难度的关卡挑战）。关卡难度逐步递进，后期障碍物间距更密、节奏变化更复杂。",
                        "辅助功能：游戏采用纯HTML5开发，PC端按空格键跳跃，手机端点击屏幕跳跃。最高支持1080P分辨率，画质清晰，还原度极高。"
            ],
            "Narrow One": [
                        "Narrow One是一款中世纪风格的3D多人射击游戏，玩家使用弓箭进行对战，核心玩法是经典的“夺旗模式”（Capture the Flag）。游戏支持5v5团队对抗，最多10人同台竞技。玩家需要攻入敌方领地夺取旗帜并带回己方大本营，同时利用弓箭射杀敌人阻止对方得分。游戏包含15+张地图和多种弓箭可选。",
                        "玩法机制",
                        "核心玩法：两支队伍分别拥有己方旗帜，目标是攻入对方阵地夺取旗帜并带回己方据点。每成功夺取一次旗帜即可获得1分，先达到目标分数或时间结束时得分高者获胜。玩家可使用弓箭进行远程射击，杀死敌人后对方会短暂复活并继续战斗。",
                        "地图与战术：游戏提供了超过15张风格各异的地图，包括城堡、森林、雪地等场景。地图中存在隐藏路径和小道，玩家可以利用这些路线绕过敌人防线偷袭夺旗。不同地图适合不同战术，团队配合和路线选择是取胜关键。",
                        "武器系统：游戏核心武器为弓箭，不同地图或模式中可能提供多种弓型选择，如射速快但伤害低的短弓、射程远但射速慢的长弓等。玩家需掌握抛物线弹道和预判移动目标的能力。",
                        "模式与社交：支持5v5团队夺旗为主要模式，部分版本可能包含自由混战或其他玩法。支持好友组队，可与朋友一起开黑配合。游戏在Steam平台完全免费，无需付费即可游玩所有内容。",
                        "操作方式：第一人称视角，WASD移动，鼠标瞄准，左键射箭。游戏节奏较快，需要快速瞄准和灵活走位。"
            ],
            "Moo Moo": [
                        "Moo Moo 是一款将资源收集、基地建设和PvP对战融为一体的多人在线生存游戏。玩家在地图上收集木材和石头等资源，建造风车、城墙等建筑，同时抵御其他玩家的攻击。游戏支持加入部落与队友合作，共同建造更大的基地。游戏内有丰富的帽子皮肤系统，帽子往往代表玩家的实力水平。",
                        "玩法机制",
                        "核心玩法：玩家控制角色在地图上活动，通过敲击树木和岩石收集木材和石头。木材和石头可用于建造城墙（防御）和风车（随时间产生金币/分数）。玩家需要保护自己的资源生产设施不被其他玩家摧毁，同时可以主动进攻他人村庄抢夺资源。",
                        "资源系统：风车是核心资源建筑，放置后可持续产生金币，金币可在商店购买装备或升级。城墙用于围住风车或资源点，形成防御工事。木材和石头是基础建造材料，散布在地图各处。",
                        "部落系统：玩家可以加入部落，与队友共享视野和部分资源，合作建造更大规模的基地。部落内部有分工，有的玩家负责采集，有的负责建造防御，有的负责外出作战。",
                        "操作方式：",
                        "PC端：WASD移动，鼠标瞄准，鼠标左键或空格键攻击/采集，数字键1-9切换物品，Q键快速选择食物，X键锁定旋转，R键小地图，C键放置地图标记，Enter键聊天。",
                        "移动端：左侧屏幕拖动移动，右侧屏幕拖动攻击/采集，点击底部物品栏切换道具。",
                        "帽子系统：游戏内有大量可解锁的帽子装饰，部分帽子需要特定成就或积分才能获得。玩家中流传“帽子决定实力”的说法，高级帽子往往是老玩家的标志。"
            ],
            "mk48": [
                        "mk48 是一款多人在线海战竞技游戏。玩家指挥一艘战舰，在广阔的海域中与其他玩家展开激烈对抗，通过发射鱼雷击沉对手，获取资源升级自己的舰船。游戏融合了动作射击与战略元素，节奏紧张刺激，支持与朋友组队联机。",
                        "玩法机制",
                        "核心玩法：玩家从一艘小型战舰开始，在海洋地图中航行，寻找并攻击其他玩家，同时躲避敌方鱼雷。击沉敌舰可获得分数和资源，积累足够点数后舰船会升级，解锁更强大的火力或更快的机动性。游戏目标是在排行榜上取得更高名次。",
                        "对战方式：玩家需灵活操控船只走位规避攻击，同时把握时机发射鱼雷。鱼雷有飞行时间和弹道，需要预判敌方移动轨迹才能命中。游戏支持多人混战，也可能有团队对抗模式。",
                        "舰船升级：游戏中设有舰船成长机制，初始为小型快速舰艇，随着分数提升可进化为更大更强的战舰，获得更高火力和防御力。",
                        "操作方式：WASD或方向键控制战舰移动，鼠标瞄准，点击发射鱼雷。游戏节奏偏快，需要同时关注自身走位、敌方位置和鱼雷轨迹。"
            ],
            "微软小游戏": [
                        "微软在线小游戏是微软官方提供的网页小游戏合集平台，集成于MSN游戏（MSN Games）体系内。平台游戏种类丰富，涵盖益智、卡牌、解谜、动作、体育等多种类型，玩家无需下载安装即可在浏览器中直接游玩。部分游戏支持跨设备进度同步和在线排行榜功能。",
                        "游戏特色",
                        "游戏类型：平台收录了多个分类的游戏，包括但不限于数独、麻将连连看、宝石迷阵类消除游戏、纸牌接龙、国际象棋、拼字游戏、隐藏物体找图等经典休闲游戏类型。",
                        "特色功能：部分游戏需要微软账号登录方可保存进度或参与排行榜，但多数游戏支持以游客身份直接开始游玩。游戏界面采用卡片式布局，分类清晰，便于查找。游戏画质和音效出色，部分游戏达到接近原生应用的水准。",
                        "跨平台支持：游戏基于HTML5技术开发，在PC端浏览器和移动端浏览器均可流畅运行，且支持触屏操作。"
            ],
            "扫雷": [
                        "扫雷网页版是一款在线的经典扫雷游戏，最大特色是支持“自动标雷”辅助功能，帮助玩家快速标记地雷位置。游戏遵循Windows版扫雷的经典规则：通过点击格子，根据周围数字判断地雷位置，全部找出地雷即可获胜。游戏支持PC鼠标操作和手机触屏操作。",
                        "玩法机制",
                        "核心玩法：玩家需要在一个网格中找出所有隐藏的地雷。点击格子会显示一个数字，表示该格子周围8个格子中含有地雷的数量。根据数字推理出地雷位置后，用旗子标记即可。标记所有地雷后获胜，点中地雷则游戏失败。游戏保证第一次点击不会是雷。",
                        "自动标雷功能：游戏内置辅助功能，可根据当前已揭开的数字自动推测并标记地雷位置，极大降低入门门槛，适合新手熟悉规则或快速通关。",
                        "基础操作：",
                        "PC端：鼠标左键点击格子直接打开；鼠标右键点击未打开格子以小旗标记为雷，再点去除标记。当标记的雷数和数字匹配时，点击数字（左右键均可）可翻开周围所有安全区域。",
                        "移动端：触屏点击方块即标记为雷，再点去除标记。当标记的雷数和数字匹配时，点击数字翻开周围安全区域。长按方块可直接打开（可在设置中调整）。",
                        "其他设置：点击页面右上角的“设置”按钮可调整游戏参数；支持夜间模式切换。"
            ],
            "导弹游戏": [
                        "导弹游戏（Missile Game）是一款极简黑白线条风格的躲避类网页小游戏。玩家驾驶一枚导弹，在由旋转障碍物构成的通道中快速穿行，尽可能长时间地避免碰撞坠毁。游戏界面极简，点击即玩无需预载，但玩法极具挑战性，需要高度专注和快速反应。",
                        "玩法机制",
                        "核心玩法：玩家控制的导弹自动向前飞行，需要穿过一系列旋转的障碍物空隙。游戏采用关卡制，前几关相对简单，但随着关卡等级提升，导弹飞行速度会越来越快，障碍物的旋转速度和复杂度也随之增加，对玩家的反应能力提出极高要求。游戏左下角显示剩余生命数。",
                        "操作方式：使用鼠标移动来控制导弹的飞行方向，以此躲避迎面而来的各种旋转障碍物。无需键盘操作，进入网页后点击页面即可开始游戏。",
                        "游戏特色：完全免费无广告无内购，非常良心的纯兴趣之作。黑白线条画风，极其简约但视觉效果干净利落。音乐节奏紧张，配合高速飞行体验极具沉浸感。游戏中设有PB（个人最佳记录）和进度显示，并有全屏模式选项。"
            ],
            "滑行者": [
                        "Line Rider是一款极具创意的经典物理沙盒游戏。玩家使用画笔在白色画布上绘制任意线条（雪道），游戏中的滑雪者将依照惯性物理学沿着线条滑动。游戏没有终点、没有分数、没有输赢，核心乐趣在于设计出能让滑雪者做出酷炫动作（翻跟斗、极限下滑、漂移等）的复杂轨道。网页版完全由HTML5重构，保留了经典画风和物理引擎。",
                        "玩法机制",
                        "核心玩法：画布右侧为铅笔工具、直线工具和清除工具。玩家在画布中绘制线条，按播放键后，身穿红色围巾的滑雪者便会出现并沿轨道滑行。物理引擎会模拟重力、摩擦力和动量，滑雪者会在上坡减速，下坡加速，离地时会抛体运动。如果线条设计不当，滑雪者会摔倒并从掉落的起点重新尝试。",
                        "特色功能：游戏支持轨道编辑和撤销重做。玩家可制作包含跳跃、回环、冲刺和急停的复杂地形，观赏滑雪者做出流畅动作。游戏最初是斯洛文尼亚大学学生Bostjan Cadez于2006年在Flash平台上开发的个人项目，因其病毒式传播和极高自由度而成为一代经典。目前网页版支持移动触屏操作。"
            ],
            "Kiomet": [
                        "Kiomet是一款策略性极强的多人在线即时战略游戏（RTS）。玩家以一个小国开局，通过占领中立地块扩张领土，控制战略要塞（塔楼），并保护己方的国王。游戏融合了速度扩张、资源管理和外交策略元素，支持多人联机对抗。所有操作均在浏览器内完成，无需下载安装。",
                        "玩法机制",
                        "核心玩法：游戏开始时，每位玩家仅拥有一块领土（国王所在的城堡）。玩家需要派遣军队向中立灰色地块扩张，占领的地块会缓慢产出兵力。地块上散布着塔楼，占领塔楼可获得额外的战略优势（如攻击范围、资源加成）。虽然游戏名为“Kiomet”偏向塔防，但在多人模式中玩家需要平衡扩张速度与防守力量，确保国王不被敌方攻克。游戏支持建立战略联盟，联合作战。",
                        "特色功能：游戏采用WASM技术构建，加载速度快，运行流畅。拥有极简但清晰的UI，显示国王位置和兵力分布。游戏由Softbear, Inc.开发，该公司也制作了",
                        "等热门io游戏。代码采用AGPL-3.0许可开源。"
            ],
            "Krunker.io": [
                        "Krunker.io 是一款现象级的网页第一人称射击游戏（FPS），以其极高的帧率和爽快的手感著称。游戏采用低多边形像素风格，优化极佳，可以在普通办公电脑上流畅运行。游戏支持社区模组和地图编辑，拥有海量的玩家自制内容。游戏内置多种竞技模式，支持多达数十名玩家同场竞技。",
                        "玩法机制",
                        "核心玩法：经典的FPS规则，玩家控制不同职业（如Run N Gun跑轰、Hunter狙击、Detective左轮等）进行团队对抗或混战。职业拥有不同的血量、移速和武器（如AK、半自动步枪、狙击枪等），TTK（击杀时间）极短，对枪法和身法要求极高。游戏包含滑铲、连跳等高级移动技巧，高手可以在地图中快速穿梭。",
                        "游戏模式：",
                        "自由混战：所有玩家为敌，先达到击杀数者获胜。",
                        "团队死亡竞赛：红蓝两队对抗，比对方先达到目标击杀数获胜。",
                        "据点占领：占领地图中央区域以持续获得分数。",
                        "夺旗模式：夺取敌方旗帜带回己方基地。",
                        "感染模式：僵尸感染人类，人类幸存到最后或全灭则僵尸胜利。",
                        "跑酷模式：纯粹的跳跃过关挑战。",
                        "特色功能：游戏支持高度自定义，玩家可上传纹理、模型和地图，部分优质社区内容可被选入官方轮换。设有武器皮肤开箱系统（通过游戏内货币或充值获得）。支持查看FPS与Ping值。PC端推荐使用官方客户端或Chrome浏览器以达到60FPS稳定运行。"
            ],
            "江湖论剑": [
                        "江湖论剑是一款由AI驱动的创新型武侠对战游戏。与传统手动操作不同，玩家需要为侠客选定八大门派（如剑、枪、刀、暗器、蛊毒等）之一，并立下“心法”，然后聘请一位AI策士（Agent）代为出招。策士通过分析游戏状态（气血、内力、棋盘地形等）和调用预设心诀，在八百帧内做出决策。游戏拥有四十种招式、两重资源（气血与内力）以及十四路带有地形要素的棋盘（包含山石、高坡、浅溪、灵泉、雾林），胜负取决于策略博弈而非反应速度。",
                        "玩法机制",
                        "核心玩法：玩家首先需要创建侠客，从八大门派中选择其一（影响可用招式和成长路线）。然后编写或选择“心诀”（一段JavaScript逻辑代码），并将其赋予AI策士（支持接入Claude、Codex等模型或使用平台默认AI）。游戏开始后，AI策士会在每帧根据当前战况调用心诀做出决策，选择招式、移动或使用道具。战斗以回合制或半实时制进行，最终击败对手者获胜。",
                        "特色功能：游戏设有七大比武舞台（砥锋台、断云岭、蛰龙窟、碎玉涧等），地形影响移动速度和招式效果。玩家可观看AI对战的回放，分析策略优劣。设有江湖排行榜（从“未入流”至“十三段”），登顶前三甲可获得尊号（如“蚀月魔尊”）。支持玩家修改心诀并反复尝试，重发新版即重新开张。"
            ],
            "LP文字游戏": [
                        "LP文字游戏平台是一个专为文字游戏爱好者打造的UGC（用户生成内容）平台，提供集成了可视化编辑器的文字游戏引擎。玩家可以在平台上游玩海量由用户自制的文字游戏，涵盖修仙、末世生存、西幻异世界、工厂自动化、虫群模拟、修仙经营等多种题材。平台最大的特色是无需编程基础，创作者利用平台的引擎即可制作并发布互动文字游戏。",
                        "玩法机制",
                        "核心玩法：平台上的游戏以纯文字描述和选项点击为主要交互方式，辅以数值显示。游戏类型极其丰富：",
                        "修仙/武侠类：如“寻仙之路”、“不一样的药师”、“九天荡魔录”。",
                        "生存/末世类：如“城市逃离计划”、“迷失的蔚蓝”、“76号”。",
                        "经营/工厂类：如“我是开山老祖”、“从零打造戴森球”、“机械飞升”。",
                        "增量/放置类：如“永恒”、“夸克主义增量放置”、“风灵作成”（数字可达10^10^300）。",
                        "剧情/RPG类：如“转生异界成为勇者”、“异世界生存”、“方舟世界”（文字版方舟）。",
                        "特色功能：平台支持增量数值系统，部分游戏数值可突破天文数字极限。玩家可随时点击开始游戏，进度保存在云端。平台设有编辑推荐榜单，根据人气展示热门作品。创作者可通过拖拽式编辑器生成游戏逻辑和文案，无需掌握任何编程语言。"
            ],
            "潜伏者": [
                        "潜伏者 是一款复古风格的免费多人在线沙盒游戏。游戏结合了建造、采矿、制作和射击等多种元素，风格类似经典游戏《泰拉瑞亚》的简化版。玩家在一个可完全破坏的2D像素世界中活动，通过快速建造防御工事、制作武器和装备来与其他玩家对抗。游戏最突出的特色是其高度开放的模组支持（Mod-friendly），允许玩家自建服务器并使用Lua脚本编写全新的游戏模式。",
                        "玩法机制",
                        "核心玩法：玩家出生在一个随机生成的地图中，可以自由破坏和放置每一个像素块。通过采集矿物和资源，可以逐步升级装备。游戏的核心目标是生存并击倒其他玩家。玩家需要快速建造掩体或堡垒来保护自己，因为其他玩家可能会随时发起攻击。",
                        "特色功能：游戏内置物理引擎，方块会受到重力影响倒塌，增加了建造的策略性。游戏完全支持模组，玩家不仅可以下载他人制作的Mod，还可以自建服务器并编写脚本创造独特玩法（如僵尸生存、饥饿游戏等）。开发者提供公开API和文档"
            ],
            "Flower Game": [
                        "Flower Game 是一款受",
                        "启发的多人在线生存游戏。玩家控制一个花朵般的角色，在花园地图中与各种移动或飞行的怪物战斗，并收集它们掉落的“花瓣”。这些花瓣可以作为武器、护甲或辅助道具装备在自己周围，形成独特的Build组合。游戏采用极简几何画风，支持大量玩家实时混战，既有PvE刷怪内容，也有PvP竞技元素。",
                        "玩法机制",
                        "核心玩法：玩家出生的圆形角色拥有8个花瓣槽位。通过击杀地图上的怪物（如蜜蜂、甲虫、蜘蛛等），可收集稀有度不同的花瓣。合理搭配花瓣是游戏的核心策略：如玫瑰可回血，刺可造成伤害，翅膀可增加移速等。玩家需要在PvPvE环境中生存，既要防范怪物的围攻，也要提防其他玩家的攻击。",
                        "特色功能：花瓣拥有普通、罕见、稀有、史诗和传奇等多个稀有度档次，高稀有度花瓣拥有更强的属性。游戏包含多种模式，可能是混战或团队模式。支持移动端触屏操作和PC端鼠标瞄准"
            ],
            "你画我猜": [
                        "你画我猜 是一款在线多人绘画猜词游戏，玩家轮流根据系统给出的词或主题作画，其他玩家在限定时间内猜出正确词汇即可得分。游戏以其庞大的用户基础、多语言支持和极简的玩法而闻名。玩家无需注册即可快速加入公共房间，或创建私人房间邀请好友。游戏移动端App同时支持安卓和iOS平台。",
                        "玩法机制",
                        "核心玩法：每回合系统随机指定一名玩家为绘者，绘者从几个备选词中选择一个进行作画。其他玩家在聊天框输入猜测的词汇（支持多语言）。猜中者得分，且猜中越快得分越高；绘者在作品被猜中时也获得分数。游戏通常进行多轮，最终得分最高者获胜。",
                        "特色功能：游戏支持超过50种语言界面和词库，包括中文、日文、韩文、阿拉伯语等，全球化程度极高。玩家可创建主题房间，自定义词库。游戏与多个社交平台（Twitter、Google、VK、Discord等）集成，支持一键登录。设有“新派对游戏”模式不断更新玩法。"
            ],
            "将军棋": [
                        "将军棋 是一款极简风格的2D多人在线即时战略游戏。玩家在网格状地图上扩张领地、积攒兵力，最终攻陷敌方主将（General）以获得胜利。游戏融合了经典游戏“战争迷雾”机制与io类游戏即开即玩的特点，支持多人混战、1v1及团队模式。游戏完全免费，无需注册即可游玩。",
                        "玩法机制",
                        "核心玩法：每位玩家拥有一座主将城堡（General）和初始兵力。玩家需要向相邻地块扩张，占领城市和普通地块可增加兵力上限和产量。地图上散布着城市和山地，山地不可逾越，需要绕行。玩家可以通过向己方地块调兵或直接攻击敌方地块来推进战线。将敌方主将击败即可获胜。",
                        "特色功能：支持自定义游戏，包括修改棋盘尺寸、地块类型（如新增Tunnel隧道地块）。设有1v1排位系统和Elo等级分，匹配对手更公平。支持地图编辑器和自定义大厅重做。游戏提供图形性能调整选项和Torus环形模式。游戏有Discord社区和锦标赛活动。"
            ],
            "Gold Digger": [
                        "Gold Digger FRVR是一款由FRVR开发的挖矿题材休闲小游戏。玩家控制矿工在地下进行挖掘，收集黄金和各种宝藏，同时巧妙规避掉落巨石的风险。游戏最大的特色是将挖矿玩法与消除机制结合，连接三个或更多同色岩石即可引爆并获得额外黄金奖励。游戏包含恐龙化石、钻石等多种稀有宝藏等待发现，并设有检查点存档功能，是一款轻松解压又略带策略的挖掘游戏。",
                        "玩法机制",
                        "核心玩法：玩家在洞穴中控制矿工进行挖掘，目标是收集尽可能多的黄金和宝藏。但需注意上方松动的岩石：若不慎挖掉关键支撑点，岩石会坠落砸中矿工，导致失去所有已收集的金币。玩家需要巧妙安排挖掘顺序，或利用连锁消除引爆岩石群，以避免被砸并获取更高分数。",
                        "特殊机制：游戏核心策略在于连接三个或更多同色岩石，将其爆破可获得额外黄金奖励。挖掘过程中还可发现恐龙化石、钻石等稀有物品，价值远高于普通金块。游戏设有检查点，允许玩家保存进度并从特定深度继续挖掘。地图中存在地下爆炸物等随机事件，进一步增加了游戏的不确定性。"
            ],
            "ZombsRoyale": [
                        "ZombsRoyale 是一款俯视角2D大逃杀网页游戏，由Kongregate, Inc.开发发行。玩家出生在一座岛屿上，收集武器和装备与其他玩家战斗，目标是成为最后的幸存者。游戏以快节奏（每局约3-5分钟）和随机生成地图著称。官方移动端于2018年11月5日发布，Steam版本随后上线。社区活跃，玩家总数曾超过1亿人。2024年开发团队宣布将逐步停止更新并最终关闭服务器。",
                        "玩法机制",
                        "核心玩法",
                        "俯视角控制角色在岛屿上游走，收集散布在地图上的武器、弹药、护甲、医疗品等。采用“毒圈”机制，安全区域随时间缩小，迫使玩家互相遭遇。",
                        "地图与随机生成",
                        "每局地图均为随机生成：树木、岩石、建筑物、掩体和河流的位置每局不同。部分版本还有独特的可破坏物品（如机器人皮纳塔）。",
                        "基础操作",
                        "鼠标瞄准，左键射击；右键开镜（武器有瞄准镜时）。WASD或方向键移动。数字键1、2切换武器（最多两把）；数字键3切换至拳头提升移动速度。右键点击武器槽可丢弃武器。",
                        "游戏模式",
                        "单人模式（Solo）：独立求生。",
                        "双人模式（Duo）：两人组队。",
                        "四人小队模式（Squad）：四人团队竞技。",
                        "50v50模式：大型团队对抗，如“终极牺牲”。",
                        "每日轮换模式：不定期更新的限时玩法。",
                        "装备系统",
                        "武器（手枪、霰弹枪、突击步枪、狙击枪等，分红、橙、蓝三种弹药类型）、近战武器（拳头、平底锅等）、投掷物（手雷、烟雾弹）、防具（头盔、护甲、背包）、医疗物品（绷带、急救包、止痛药）。",
                        "游戏进度与赛季",
                        "曾设有赛季系统，玩家通过完成任务升级战斗通行证，解锁皮肤、表情和死亡特效等奖励。后因开发资源调整，团队宣布专注于新作Bit Heroes Arena的开发。",
                        "策略技巧",
                        "出生后优先进入建筑物或掩体密集区域搜刮装备，避免开阔地带暴露。拳头状态下移动速度最快，可用于快速转移。利用树木、岩石和建筑残骸卡视角和伏击，敌方无法从外部看到建筑物内部。毒圈缩小速度快，前期边搜刮边向圈内推进。平底锅可抵挡背后子弹，换弹时背对敌人可获得保护。"
            ],
            "Agar.io": [
                        "Agar.io 是一款开创.io游戏时代的经典多人在线吞噬类竞技游戏，由巴西开发者Matheus Valadares最初开发，后由Miniclip代理发行。玩家控制一个小细胞，在培养皿中吞噬散落的圆点和比自己小的细胞来逐渐成长，同时躲避更大的细胞。游戏发布后迅速风靡全球，成为2015年谷歌十大热搜游戏榜榜首，并一度成为42个国家下载量最大的应用。其移动版中文正式版本由腾讯代理，定名为《全民星球》。",
                        "玩法机制",
                        "核心玩法：玩家控制一个圆形细胞，在地图中游走，吞噬地图上的小圆点（食物）可使体积",
                        "增长。体积增大后，可以吞噬比自己小的其他玩家细胞。反之，如果遇到比自己大的细胞，需要尽快逃离，否则会被吞噬。细胞的大小决定了移动速度，体积越大速度越慢。",
                        "特殊机制：细胞可以主动分裂（按空格键），分成两个较小的细胞以加速移动或逃离危险。分裂后的细胞会逐渐合并回一个整体。部分版本还支持发射部分质量来攻击其他细胞。地图上设有病毒单元格，小细胞可穿过病毒，大细胞触碰病毒则会分裂成多个小细胞。",
                        "基础操作：PC端使用鼠标控制细胞移动方向，空格键分裂，W键发射质量；移动端通过触摸滑动控制移动，双指点击分裂。",
                        "策略技巧：开局先吞噬散落的小圆点快速成长。利用分裂机制快速吞噬比自己小的对手，但分裂后体积变小，需警惕其他大细胞的偷袭。在遭遇大细胞追击时使用分裂加速逃离。利用病毒单元格作为陷阱，引诱大细胞触碰病毒使其分裂后再逐个吞噬。"
            ],
            "Defly.io": [
                        "Defly.io 是一款将领土扩张与直升机射击相结合的多人在线竞技游戏。玩家驾驶一架直升机，通过建造墙壁和塔楼来标记和扩张领土，同时射击其他玩家阻止其入侵。游戏共有32个等级，玩家通过摧毁敌方塔楼、占领领土和击杀对手来获取经验值升级。每升一级，直升机的性能和建造能力都会得到提升。",
                        "玩法机制",
                        "核心玩法：玩家控制直升机在网格状地图中飞行，通过按住鼠标右键或空格键来建造墙壁，墙壁围成的封闭区域即成为玩家的领土。领土越大，玩家获得经验值的速度越快。等级提升后，直升机可以建造更坚固的墙壁和更强的防御塔。同时，玩家可以使用机炮射击其他玩家的直升机，摧毁其墙壁和塔楼来扩大自己的领土。",
                        "等级与升级：游戏从第1级开始，通过获取经验值逐步升级至第32级。经验值来源于占领新领土、摧毁敌方建筑和击杀其他玩家。等级越高，直升机的移动速度、射击伤害和墙壁耐久度都会提升。高等级玩家在对抗中具有明显优势。",
                        "防御建筑：玩家可以在自己的领土上建造防御塔，自动攻击入侵的敌方直升机。墙壁用于标记领土边界，也能阻挡敌方子弹和移动。",
                        "基础操作：WASD移动直升机，鼠标瞄准，左键射击，右键或空格键建造墙壁和塔楼。地图会显示各玩家的领土边界和等级。",
                        "策略技巧：开局先圈定一小块安全领土作为基地，再逐步向外扩张。建造墙壁时尽量圈出规整的形状，减少不必要的缺口。优先摧毁高等级玩家的塔楼以获取大量经验值。进攻时注意避开敌方防御塔的射程。"
            ],
            "Gomoku.com": [
                        "Gomoku.com 是一个面向浏览器的在线五子棋对战网站，玩家可以直接进入经典黑白棋盘，在简洁界面中进行快速对局。它适合喜欢短局策略、棋类博弈和轻量在线对战的玩家。",
                        "玩法机制",
                        "核心规则：双方轮流在棋盘交叉点落子，率先让五枚同色棋子在横向、纵向或斜向连成一线的一方获胜。",
                        "对局体验：五子棋规则简单，但攻防节奏很紧。每一步都可能同时制造进攻机会和防守压力，适合短时间反复开局。",
                        "策略技巧：开局优先争夺棋盘中心区域，注意封堵对手的活三和活四。进攻时尽量制造双威胁，让对手无法一次防住所有连线。"
            ]
        };

        const state = { currentCategory:'all', searchQuery:'', displayedGames:12, isLoading:false, currentPage:'home' };
        const SUPABASE_URL = 'https://udoiblaukruprjnhvrql.supabase.co';
        // ⚠️ 请把下面的占位符换成你 Supabase 控制台里的 Publishable key（非 Secret key）
        const SUPABASE_ANON_KEY = 'sb_publishable_o4CPdGtVyoFKBWQ5P9Jdpg_ohmYhktT' ;
        const SUPABASE_CONFIG_READY = Boolean(
            window.supabase &&
            SUPABASE_URL &&
            SUPABASE_ANON_KEY &&
            !SUPABASE_ANON_KEY.includes('YOUR_')
        );
        const supabaseClient = SUPABASE_CONFIG_READY ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
        const playCounts = {};
        let statsLoaded = false;
        const REACTION_TYPES = ['love', 'meh', 'angry'];
        const ADMIN_EMAIL = 'octopus1431@qq.com';
        let authMode = 'login';
        let currentUser = window.currentUser || null;

        function setCurrentUser(user) {
            currentUser = user || null;
            window.currentUser = currentUser;
            return currentUser;
        }

        function getGamePlayCount(gameId) {
            return Number.isFinite(playCounts[gameId]) ? playCounts[gameId] : 0;
        }

        async function ensureGameStatsRows(existingIds) {
            if(!supabaseClient) return;
            const rows = GAMES_DATA
                .filter(game => !existingIds.has(game.id))
                .map(game => ({ game_id: game.id, play_count: 0 }));
            if(!rows.length) return;
            const { error } = await supabaseClient.from('game_stats').insert(rows);
            if(error) console.warn('Supabase missing stats insert failed:', error.message);
        }

        async function initPopularity() {
            GAMES_DATA.forEach(g => { playCounts[g.id] = 0; });
            if(!supabaseClient) {
                console.warn('Supabase SDK not loaded; play counts stay at 0.');
                statsLoaded = true;
                return;
            }
            const { data, error } = await supabaseClient.from('game_stats').select('game_id, play_count');
            if(error) {
                console.warn('Failed to load Supabase game stats:', error.message);
                statsLoaded = true;
                return;
            }
            const existingIds = new Set();
            (data || []).forEach(row => {
                existingIds.add(row.game_id);
                playCounts[row.game_id] = Number(row.play_count) || 0;
            });
            await ensureGameStatsRows(existingIds);
            statsLoaded = true;
        }

        async function incrementPlayCount(gameId) {
            playCounts[gameId] = getGamePlayCount(gameId) + 1;
            updatePopularityDisplay(gameId);
            if(!supabaseClient) return;
            const { data, error } = await supabaseClient
                .from('game_stats')
                .select('play_count')
                .eq('game_id', gameId)
                .limit(1);
            if(error) {
                console.warn('Failed to read Supabase play count:', error.message);
                return;
            }
            const currentRow = Array.isArray(data) && data.length ? data[0] : null;
            const nextCount = (Number(currentRow && currentRow.play_count) || 0) + 1;
            const request = currentRow
                ? supabaseClient.from('game_stats').update({ play_count: nextCount }).eq('game_id', gameId)
                : supabaseClient.from('game_stats').insert({ game_id: gameId, play_count: nextCount });
            const { error: updateError } = await request;
            if(updateError) {
                console.warn('Failed to update Supabase play count:', updateError.message);
                return;
            }
            playCounts[gameId] = nextCount;
            updatePopularityDisplay(gameId);
        }

        function updatePopularityDisplay(gameId) {
            const pop = getGamePlayCount(gameId);
            const t = LANG[currentLang];
            document.querySelectorAll(`[data-game-id="${gameId}"] .popularity-badge`).forEach(el => {
                el.textContent = `🔥 ${pop.toLocaleString()} ${t.popularityPlayed}`;
            });
            document.querySelectorAll(`[data-game-id="${gameId}"] .popularity-num-detailed`).forEach(el => {
                el.textContent = `${pop} ${t.popularityTimes}`;
            });
            if(document.getElementById('bannerWrapper')) buildBannerSlides();
        }

        function getAuthCopy() {
            const copy = {
                zh: {
                    login: '登录', signup: '注册', account: '账号', authTitle: '账号登录',
                    email: '邮箱', password: '密码', submitLogin: '登录', submitSignup: '注册',
                    helper: '',
                    configuring: 'Supabase publishable key 还没配置，按钮已准备好，填入 key 后即可登录注册。',
                    working: '处理中...', signupSuccess: '注册成功，请按 Supabase 设置完成邮箱确认或直接登录。',
                    loginSuccess: '登录成功。', signedIn: '已登录', signOut: '退出登录',
                    signedOut: '已退出登录。'
                },
                en: {
                    login: 'Log in', signup: 'Sign up', account: 'Account', authTitle: 'Account',
                    email: 'Email', password: 'Password', submitLogin: 'Log in', submitSignup: 'Sign up',
                    helper: 'Email/password auth is powered by Supabase and works after GitHub deployment.',
                    configuring: 'Add your Supabase publishable key to enable login and registration.',
                    working: 'Working...', signupSuccess: 'Sign up complete. Confirm email if your Supabase project requires it.',
                    loginSuccess: 'Logged in.', signedIn: 'Signed in', signOut: 'Sign out',
                    signedOut: 'Signed out.'
                },
                ja: {
                    login: 'ログイン', signup: '登録', account: 'アカウント', authTitle: 'アカウント',
                    email: 'メール', password: 'パスワード', submitLogin: 'ログイン', submitSignup: '登録',
                    helper: 'Supabase Auth のメール/パスワード認証です。GitHub に配置した後も同じように動きます。',
                    configuring: 'Supabase publishable key を入れるとログインと登録が有効になります。',
                    working: '処理中...', signupSuccess: '登録しました。必要な場合は確認メールを完了してください。',
                    loginSuccess: 'ログインしました。', signedIn: 'ログイン中', signOut: 'ログアウト',
                    signedOut: 'ログアウトしました。'
                }
            };
            return copy[currentLang] || copy.zh;
        }

        function setAuthMessage(message, type='') {
            const el = document.getElementById('authMessage');
            if(!el) return;
            el.textContent = message || '';
            el.className = `auth-message ${type}`.trim();
        }

        function updateAuthUI() {
            const copy = getAuthCopy();
            const navBtn = document.getElementById('authNavBtn');
            const navText = document.getElementById('authNavText');
            if(navText) navText.textContent = currentUser ? copy.account : copy.login;
            if(navBtn) {
                navBtn.classList.toggle('signed-in', Boolean(currentUser));
                navBtn.setAttribute('aria-label', currentUser ? copy.account : copy.login);
                navBtn.setAttribute('title', currentUser ? copy.account : copy.login);
            }
            const authTitle = document.getElementById('authTitle');
            if(authTitle) authTitle.textContent = currentUser ? copy.account : copy.authTitle;
            const loginTab = document.getElementById('authLoginTab');
            const signupTab = document.getElementById('authSignupTab');
            if(loginTab) loginTab.textContent = copy.login;
            if(signupTab) signupTab.textContent = copy.signup;
            const submitBtn = document.getElementById('authSubmitBtn');
            if(submitBtn) submitBtn.textContent = authMode === 'signup' ? copy.submitSignup : copy.submitLogin;
            const signedIn = document.getElementById('authSignedIn');
            const guestPanel = document.getElementById('authGuestPanel');
            if(signedIn) signedIn.classList.toggle('active', Boolean(currentUser));
            if(guestPanel) guestPanel.style.display = currentUser ? 'none' : 'block';
            const signedInText = document.getElementById('authSignedInText');
            if(signedInText) signedInText.textContent = copy.signedIn;
            const email = document.getElementById('authUserEmail');
            if(email) email.textContent = currentUser && currentUser.email ? currentUser.email : '';
            const signOutBtn = document.getElementById('authSignOutBtn');
            if(signOutBtn) signOutBtn.textContent = copy.signOut;
            if(!currentUser) setAuthMessage(supabaseClient ? copy.helper : copy.configuring, supabaseClient ? '' : 'error');
            updateAdminUI();
            updateFufuAuthState();
        }

        function updateUserUI() {
            updateAuthUI();
        }

        function setAuthMode(mode) {
            authMode = mode === 'signup' ? 'signup' : 'login';
            document.getElementById('authLoginTab')?.classList.toggle('active', authMode === 'login');
            document.getElementById('authSignupTab')?.classList.toggle('active', authMode === 'signup');
            const password = document.getElementById('authPassword');
            if(password) password.autocomplete = authMode === 'signup' ? 'new-password' : 'current-password';
            updateAuthUI();
        }

        function openAuthModal() {
            const modal = document.getElementById('authModal');
            if(!modal) return;
            updateAuthUI();
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            if(!currentUser) setTimeout(() => document.getElementById('authEmail')?.focus(), 30);
        }

        function closeAuthModal() {
            const modal = document.getElementById('authModal');
            if(!modal) return;
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        }

        async function initAuth() {
            updateAuthUI();
            if(!supabaseClient) return;
            const { data, error } = await supabaseClient.auth.getSession();
            if(error) console.warn('Failed to read auth session:', error.message);
            setCurrentUser(data && data.session ? data.session.user : null);
            updateAuthUI();
            supabaseClient.auth.onAuthStateChange((_event, session) => {
                setCurrentUser(session ? session.user : null);
                updateAuthUI();
            });
        }

        async function handleAuthSubmit(e) {
            e.preventDefault();
            const copy = getAuthCopy();
            if(!supabaseClient) {
                setAuthMessage(copy.configuring, 'error');
                return;
            }
            const submitBtn = document.getElementById('authSubmitBtn');
            const email = document.getElementById('authEmail')?.value.trim();
            const password = document.getElementById('authPassword')?.value;
            if(submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = copy.working;
            }
            setAuthMessage(copy.working);
            try {
                const result = authMode === 'signup'
                    ? await supabaseClient.auth.signUp({ email, password })
                    : await supabaseClient.auth.signInWithPassword({ email, password });
                if(result.error) throw result.error;
                setCurrentUser(result.data && result.data.user ? result.data.user : currentUser);
                setAuthMessage(authMode === 'signup' ? copy.signupSuccess : copy.loginSuccess, 'success');
                updateAuthUI();
            } catch(err) {
                setAuthMessage(err && err.message ? err.message : 'Auth request failed.', 'error');
            } finally {
                if(submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = authMode === 'signup' ? copy.submitSignup : copy.submitLogin;
                }
            }
        }

        async function signOutUser() {
            const copy = getAuthCopy();
            if(supabaseClient) {
                const { error } = await supabaseClient.auth.signOut();
                if(error) {
                    setAuthMessage(error.message, 'error');
                    return;
                }
            }
            setCurrentUser(null);
            updateAuthUI();
            setAuthMessage(copy.signedOut, 'success');
        }

        function updateAdminUI() {
            const btn = document.getElementById('adminStatsBtn');
            const isAdmin = Boolean(currentUser && currentUser.email && currentUser.email.toLowerCase() === ADMIN_EMAIL);
            if(btn) btn.style.display = isAdmin ? 'inline-flex' : 'none';
            if(!isAdmin) closeStatsPanel();
        }

        async function trackDailyVisit() {
            if(!supabaseClient) return;
            const today = new Date().toISOString().slice(0, 10);
            const deviceId = getDeviceId();
            const key = `fuunio_daily_visit_${today}`;
            if(localStorage.getItem(key) === deviceId) return;
            const payload = { visit_date: today, user_device_id: deviceId };
            if(currentUser && currentUser.id) payload.user_id = currentUser.id;
            const { error } = await supabaseClient.from('daily_visits').insert(payload);
            if(error) {
                if(/table|schema cache/i.test(error.message || '')) {
                    console.warn('Failed to track daily visit:', error.message);
                    return;
                }
                const fallback = { visit_date: today, device_id: deviceId };
                if(currentUser && currentUser.id) fallback.user_id = currentUser.id;
                const { error: fallbackError } = await supabaseClient.from('daily_visits').insert(fallback);
                if(fallbackError) {
                    console.warn('Failed to track daily visit:', fallbackError.message);
                    return;
                }
            }
            localStorage.setItem(key, deviceId);
        }

        function formatStatsDate(value) {
            if(!value) return '-';
            const date = new Date(value);
            if(Number.isNaN(date.getTime())) return String(value);
            return date.toLocaleDateString('zh-CN', { year:'numeric', month:'2-digit', day:'2-digit' });
        }

        function pickStatsValue(row, keys) {
            for(const key of keys) {
                if(row && row[key] !== undefined && row[key] !== null) return row[key];
            }
            return 0;
        }

        async function openStatsPanel() {
            const panel = document.getElementById('statsPanel');
            const status = document.getElementById('statsStatus');
            const wrap = document.getElementById('statsTableWrap');
            if(!panel || !status || !wrap) return;
            if(!currentUser || currentUser.email.toLowerCase() !== ADMIN_EMAIL) {
                alert('仅管理员可查看后台数据面板');
                return;
            }
            panel.classList.add('active');
            panel.setAttribute('aria-hidden', 'false');
            status.textContent = '正在查询最近 30 天数据...';
            wrap.innerHTML = '';
            if(!supabaseClient) {
                status.textContent = 'Supabase 尚未配置，无法查询。';
                return;
            }
            const since = new Date();
            since.setDate(since.getDate() - 29);
            const sinceText = since.toISOString().slice(0, 10);
            const { data, error } = await supabaseClient
                .from('daily_visits_stats')
                .select('*')
                .gte('visit_date', sinceText)
                .order('visit_date', { ascending:false })
                .limit(30);
            if(error) {
                status.textContent = `查询失败：${error.message}`;
                return;
            }
            const rows = data || [];
            status.textContent = rows.length ? `共 ${rows.length} 条记录` : '最近 30 天暂无访问数据。';
            if(!rows.length) return;
            wrap.innerHTML = `
                <table class="stats-table">
                    <thead>
                        <tr>
                            <th>日期</th>
                            <th>访问次数</th>
                            <th>独立访客</th>
                            <th>登录用户</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map(row => `
                            <tr>
                                <td>${escapeHTML(formatStatsDate(row.visit_date || row.date || row.day))}</td>
                                <td>${Number(pickStatsValue(row, ['visit_count', 'visits', 'total_visits', 'pv'])).toLocaleString()}</td>
                                <td>${Number(pickStatsValue(row, ['unique_visitors', 'visitor_count', 'uv', 'devices'])).toLocaleString()}</td>
                                <td>${Number(pickStatsValue(row, ['signed_in_users', 'login_users', 'user_count', 'users'])).toLocaleString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        }

        function closeStatsPanel() {
            const panel = document.getElementById('statsPanel');
            if(!panel) return;
            panel.classList.remove('active');
            panel.setAttribute('aria-hidden', 'true');
        }

        const FUFU_MESSAGES = ['摸摸福福，这把必赢！', '加油鸭！', '你真好～', '福气满满！', '今天运气爆棚！'];
        const fufuPet = {
            visible:localStorage.getItem('fufuPetVisible') !== 'false',
            wasHidden:false,
            bubbleTimer:null,
            jumpTimer:null
        };

        function initFufuPet() {
            updateFufuAuthState();
        }

        function updateFufuAuthState() {
            const widget = document.getElementById('fufuWidget');
            const toggle = document.getElementById('fufuToggleBtn');
            if(!widget) return;
            const unlocked = Boolean(window.currentUser);
            widget.classList.toggle('is-unlocked', unlocked);
            widget.classList.toggle('is-locked', !unlocked);
            widget.classList.toggle('is-visible', unlocked && fufuPet.visible);
            widget.classList.toggle('is-hidden', unlocked && !fufuPet.visible);
            if(toggle) {
                const label = fufuPet.visible ? '隐藏福福' : '显示福福';
                toggle.setAttribute('aria-label', label);
                toggle.setAttribute('title', label);
                toggle.innerHTML = fufuPet.visible
                    ? '<span class="fufu-toggle-icon" aria-hidden="true">×</span>'
                    : '<span class="fufu-toggle-icon" aria-hidden="true">福</span>';
            }
        }

        function toggleFufuPet() {
            fufuPet.visible = !fufuPet.visible;
            localStorage.setItem('fufuPetVisible', fufuPet.visible ? 'true' : 'false');
            updateFufuAuthState();
            if(fufuPet.visible) showFufuBubble('福福回来啦！', 1600);
        }

        function triggerFufuJumpSpin() {
            if(!window.currentUser || !fufuPet.visible) return;
            const stage = document.getElementById('fufuStage');
            if(!stage) return;
            stage.classList.remove('is-jumping');
            void stage.offsetWidth;
            stage.classList.add('is-jumping');
            clearTimeout(fufuPet.jumpTimer);
            fufuPet.jumpTimer = setTimeout(() => stage.classList.remove('is-jumping'), 900);
        }

        function showFufuBubble(text, duration=2500) {
            const bubble = document.getElementById('fufuBubble');
            if(!bubble || !window.currentUser || !fufuPet.visible) return;
            bubble.textContent = text;
            bubble.classList.add('active');
            clearTimeout(fufuPet.bubbleTimer);
            fufuPet.bubbleTimer = setTimeout(() => bubble.classList.remove('active'), duration);
        }

        function handleFufuClick() {
            if(!window.currentUser) {
                openAuthModal();
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
            document.addEventListener('click', e => {
                const link = e.target.closest('a[target="_blank"], .card-btn-play, .blind-play-link');
                if(link) triggerFufuJumpSpin();
            });
            document.addEventListener('visibilitychange', () => {
                if(document.hidden) {
                    fufuPet.wasHidden = true;
                    return;
                }
                if(fufuPet.wasHidden) {
                    fufuPet.wasHidden = false;
                    showFufuWelcomeBack();
                }
            });
        }

        function toggleLangDropdown() { document.getElementById('langDropdown').classList.toggle('active'); }
        function switchLanguage(lang) {
            if(lang===currentLang) { toggleLangDropdown(); return; }
            currentLang = lang;
            document.getElementById('currentLang').textContent = lang==='zh'?'中文':(lang==='ja'?'日本語':'English');
            document.querySelectorAll('.lang-option').forEach(o=>o.classList.toggle('active-lang', o.dataset.lang===lang));
            document.getElementById('langDropdown').classList.remove('active');
            updateAllTranslations();
            buildBannerSlides();
            renderCreativeMarket();
            renderNewArrivals();
            renderInterestResources();
            renderSkeletons();
            setTimeout(()=>{
                let games = filterGames();
                renderGames(games.slice(0, state.displayedGames));
                if(document.getElementById('gameModal').classList.contains('active')) {
                    updateModalButtons();
                    refreshActiveGameModal();
                }
                loadReactions();
            }, 200);
            localStorage.setItem('preferredLang', lang);
        }

        function updateAllTranslations() {
            let t = LANG[currentLang];
            document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : (currentLang === 'ja' ? 'ja' : 'en');
            document.getElementById('searchInput').placeholder = t.searchPlaceholder;
            document.getElementById('newArrivalsNavBtn').querySelector('span').textContent = t.newArrivals;
            document.getElementById('dailyBlindBoxBtn').querySelector('span').textContent = t.dailyBlindBox;
            document.getElementById('interestCampNavBtn').querySelector('span').textContent = t.interestCamp;
            document.getElementById('creativeMarketNavBtn').querySelector('span').textContent = t.creativeMarket;
            document.getElementById('gameSeaNavBtn').querySelector('span').textContent = t.gameSea;
            document.getElementById('diceNavBtn').setAttribute('aria-label', t.dice);
            document.getElementById('diceNavBtn').setAttribute('title', t.dice);
            document.getElementById('tabDice').setAttribute('aria-label', t.dice);
            document.getElementById('mobileBlindFloatBtn').setAttribute('aria-label', t.dailyBlindBox);
            document.getElementById('mobileBlindFloatText').textContent = t.blindFloatShort;
            document.getElementById('mobileInterestFloatBtn').setAttribute('aria-label', t.interestCamp);
            document.getElementById('mobileInterestFloatBtn').setAttribute('title', t.interestCamp);
            document.querySelectorAll('.sidebar-text').forEach(el=>{
                let key = el.parentElement.dataset.category;
                if(key && t[key]) el.textContent = t[key];
            });
            document.getElementById('sectionTitle').textContent = t.allGames;
            document.querySelector('.load-more-btn').textContent = t.loadMore;
            document.querySelector('.footer-bottom p').textContent = t.copyright;
            document.getElementById('footerSlogan').textContent = t.footerText;
            document.getElementById('footerPlatformTitle').textContent = t.footerPlatform;
            document.getElementById('footerTermsTitle').textContent = t.footerTerms;
            document.getElementById('footerCommunityTitle').textContent = t.footerCommunity;
            document.getElementById('footerAboutLink').textContent = t.footerAbout;
            document.getElementById('footerContactLink').textContent = t.footerContact;
            document.getElementById('footerFaqLink').textContent = t.footerFaq;
            document.getElementById('footerServiceTermsLink').textContent = t.footerServiceTerms;
            document.getElementById('footerPrivacyLink').textContent = t.footerPrivacy;
            document.getElementById('footerCookieLink').textContent = t.footerCookie;
            document.querySelector('#tabHome span:last-child').textContent = t.home;
            document.querySelector('#tabNewArrivals span:last-child').textContent = t.newArrivals;
            document.querySelector('#tabInterestCamp span:last-child').textContent = t.interestCamp;
            document.querySelector('#tabCreativeMarket span:last-child').textContent = t.creativeMarket;
            document.querySelector('#tabGameSea span:last-child').textContent = t.gameSea;
            document.getElementById('newArrivalsTitle').textContent = t.newArrivals;
            document.getElementById('newArrivalsSubtitle').textContent = t.newArrivalsSubtitle;
            document.getElementById('newArrivalsNote').textContent = t.newArrivalsNote;
            document.getElementById('developerInviteTitle').textContent = t.developerInviteTitle;
            document.getElementById('developerInviteIntro').textContent = t.developerInviteIntro;
            document.getElementById('developerInviteReview').textContent = t.developerInviteReview;
            document.getElementById('developerInviteGain').textContent = t.developerInviteGain;
            document.getElementById('developerInviteReject').textContent = t.developerInviteReject;
            document.getElementById('developerSubmitBtn').textContent = t.submitGame;
            document.getElementById('gameSeaKicker').textContent = t.gameSeaKicker;
            document.getElementById('gameSeaTitle').textContent = t.gameSea;
            document.getElementById('gameSeaDesc').textContent = t.gameSeaDesc;
            document.getElementById('gameRecommendServiceTitle').textContent = t.gameRecommendServiceTitle;
            document.getElementById('gameRecommendServiceDesc').textContent = t.gameRecommendServiceDesc;
            document.getElementById('recommendTreasureGameBtn').textContent = t.recommendTreasureGame;
            document.getElementById('playerLoungeTitle').textContent = t.playerLoungeTitle;
            document.getElementById('playerLoungeDesc').textContent = t.playerLoungeDesc;
            document.getElementById('joinPlayerLoungeBtn').textContent = t.joinPlayerLounge;
            document.getElementById('gameReportServiceTitle').textContent = t.gameReportServiceTitle;
            document.getElementById('gameReportServiceDesc').textContent = t.gameReportServiceDesc;
            document.getElementById('submitGameIssueBtn').textContent = t.submitGameIssue;
            document.getElementById('creativeMarketTitle').textContent = t.creativeMarketTitle;
            document.getElementById('creativeMarketSubtitle').textContent = t.creativeMarketSubtitle;
            document.getElementById('creativeMarketNote').textContent = t.creativeMarketNote;
            document.getElementById('creativeSubmitBtn').textContent = t.submitWork;
            document.getElementById('creativeSubmitCopy').textContent = t.creativeSubmitCopy;
            document.getElementById('creativeLoungeBtn').textContent = t.joinPlayerLounge;
            document.getElementById('creativeLoungeCopy').textContent = t.creativeLoungeCopy;
            document.getElementById('interestTitle').textContent = t.interestTitle;
            document.getElementById('interestTagline').textContent = t.interestTagline;
            document.getElementById('interestPlayBtn').textContent = t.playNowCta;
            document.getElementById('interestCommunityBtn').textContent = t.joinCommunity;
            document.getElementById('interestCover').setAttribute('aria-label', t.interestCoverLabel);
            document.getElementById('interestOverviewTitle').textContent = t.interestOverviewTitle;
            document.getElementById('interestContribute').setAttribute('aria-label', t.shareGuide);
            document.getElementById('interestContributeText').textContent = t.interestContributeText;
            document.getElementById('shareGuideBtn').textContent = t.shareGuide;
            document.getElementById('interestFooterNav').setAttribute('aria-label', t.interestCamp);
            document.getElementById('interestFooterNew').textContent = t.interestFooterNew;
            document.getElementById('interestFooterCreative').textContent = t.interestFooterCreative;
            document.getElementById('interestFooterSea').textContent = t.interestFooterSea;
            document.getElementById('dailyBlindCloseBtn').setAttribute('aria-label', t.blindCloseLabel);
            document.getElementById('blindSlogan').textContent = t.blindSlogan;
            document.getElementById('blindBox').setAttribute('aria-label', t.blindBoxLabel);
            document.getElementById('blindBoxHint').textContent = t.blindHint;
            document.getElementById('sitePolicyTitle').textContent = t.policyTitle;
            if(!document.getElementById('gameModal').classList.contains('active')) {
                document.getElementById('modalTitle').textContent = t.modalDefaultTitle;
                document.getElementById('modalDesc').textContent = t.modalDefaultDesc;
            }
            updateSidebarToggleLabel();
            updateAuthUI();
        }

        function setActivePage(page) {
            state.currentPage = page;
            document.getElementById('homePage').classList.toggle('active', page === 'home');
            document.getElementById('newArrivalsPage').classList.toggle('active', page === 'newArrivals');
            document.getElementById('gameSeaPage').classList.toggle('active', page === 'gameSea');
            document.getElementById('creativeMarketPage').classList.toggle('active', page === 'creativeMarket');
            document.getElementById('interestPage').classList.toggle('active', page === 'interest');
            document.querySelectorAll('.tabbar-item').forEach(i=>i.classList.remove('active'));
            if(page === 'newArrivals') {
                document.getElementById('tabNewArrivals').classList.add('active');
                document.querySelectorAll('.sidebar-item').forEach(i=>i.classList.remove('active'));
            } else if(page === 'gameSea') {
                document.getElementById('tabGameSea').classList.add('active');
                document.querySelectorAll('.sidebar-item').forEach(i=>i.classList.remove('active'));
            } else if(page === 'creativeMarket') {
                document.getElementById('tabCreativeMarket').classList.add('active');
                document.querySelectorAll('.sidebar-item').forEach(i=>i.classList.remove('active'));
            } else if(page === 'interest') {
                document.getElementById('tabInterestCamp').classList.add('active');
                document.querySelectorAll('.sidebar-item').forEach(i=>i.classList.remove('active'));
            } else {
                document.getElementById('tabHome').classList.add('active');
            }
        }

        function updateModalButtons() {
            let t = LANG[currentLang];
            document.getElementById('modalPlayBtn').textContent = t.playInNewWindow;
            document.getElementById('modalRerollBtn').innerHTML = t.rollAgain;
            document.getElementById('modalIntroBtn').innerHTML = t.gameIntro;
            document.getElementById('recommendSection').querySelector('.recommend-title').textContent = t.recommendTitle;
        }

        function refreshActiveGameModal() {
            if(activeModalGameId === null || activeModalGameId === undefined) return;
            const game = GAMES_DATA.find(g => g.id === activeModalGameId);
            if(!game) return;
            const t = LANG[currentLang];
            document.getElementById('modalTitle').textContent = activeModalMode === 'dice' ? '🎲 ' + game.name : game.name;
            document.getElementById('modalIcon').textContent = game.icon;
            if(activeModalMode === 'intro') {
                document.getElementById('modalDesc').innerHTML = renderGameIntroContent(game, t);
            } else {
                document.getElementById('modalDesc').textContent = t.gameDescs[game.name] || '';
            }
            renderRecommendations(game.id);
        }

        function parseImageSize(size) {
            let parts = String(size || '400x240').split('x').map(n => parseInt(n, 10));
            return { w: parts[0] || 400, h: parts[1] || 240 };
        }

        function svgText(value) {
            return String(value || '').replace(/[&<>"']/g, ch => ({
                '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
            }[ch]));
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
                shooting:'🎯', action:'⚡', survival:'🛡️', casual:'🎮', io:'🌐', strategy:'♟️', racing:'🏁'
            };
            return (game.icon && game.icon.trim()) ? game.icon : (fallback[game.category] || '🎮');
        }

        function buildGameCoverDataUrl(game, size='400x240') {
            const {w, h} = parseImageSize(size);
            const [c1, c2, c3, mark] = getGameCoverTheme(game);
            const icon = svgText(getGameCoverIcon(game));
            const name = svgText(game.name);
            const tag = svgText((game.tags && game.tags[0]) || '');
            const titleSize = Math.max(18, Math.round(h * 0.115));
            const tagSize = Math.max(11, Math.round(h * 0.055));
            const iconSize = Math.max(42, Math.round(h * 0.34));
            const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="0.52" stop-color="${c2}"/>
      <stop offset="1" stop-color="${c3}"/>
    </linearGradient>
    <radialGradient id="glow" cx="30%" cy="20%" r="70%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <filter id="softShadow"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000" flood-opacity="0.35"/></filter>
  </defs>
  <rect width="${w}" height="${h}" rx="${Math.round(h * 0.08)}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" rx="${Math.round(h * 0.08)}" fill="url(#glow)"/>
  <circle cx="${Math.round(w*0.83)}" cy="${Math.round(h*0.08)}" r="${Math.round(h*0.34)}" fill="#ffffff" opacity="0.08"/>
  <circle cx="${Math.round(w*0.12)}" cy="${Math.round(h*0.88)}" r="${Math.round(h*0.38)}" fill="#000000" opacity="0.13"/>
  <text x="${Math.round(w*0.08)}" y="${Math.round(h*0.18)}" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="${tagSize}" font-weight="800" fill="#dbeafe" opacity="0.92">${tag}</text>
  <text x="${Math.round(w*0.09)}" y="${Math.round(h*0.56)}" font-size="${iconSize}" filter="url(#softShadow)">${icon}</text>
  <text x="${Math.round(w*0.08)}" y="${Math.round(h*0.82)}" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="${titleSize}" font-weight="900" fill="#ffffff">${name}</text>
  <text x="${Math.round(w*0.88)}" y="${Math.round(h*0.80)}" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="${Math.round(h*0.16)}" font-weight="900" fill="#ffffff" opacity="0.18">${mark}</text>
</svg>`;
            return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
        }

        function getGameImageUrl(game, size='400x240') {
            return buildGameCoverDataUrl(game, size);
        }

        function getFallbackImageUrl(game, size='400x240') {
            return buildGameCoverDataUrl(game, size);
        }

        function renderCreativeMarket() {
            const grid = document.getElementById('creativeMarketGrid');
            if(!grid) return;
            const t = LANG[currentLang];
            grid.innerHTML = '';
            if(!CREATIVE_WORKS.length) {
                const empty = document.createElement('div');
                empty.className = 'creative-empty-state';
                empty.textContent = t.creativeEmpty;
                grid.appendChild(empty);
                return;
            }
            CREATIVE_WORKS.forEach((work, index) => {
                const localized = (t.creativeWorkCards || [])[index] || {};
                const card = document.createElement('article');
                card.className = 'creative-card';

                const title = document.createElement('h3');
                title.className = 'creative-card-title';
                title.textContent = localized.name || work.name || t.untitledWork;

                const author = document.createElement('p');
                author.className = 'creative-card-author';
                author.textContent = '@' + (work.author || 'anonymous');

                const desc = document.createElement('p');
                desc.className = 'creative-card-desc';
                desc.textContent = localized.description || work.description || t.noWorkDesc;

                const tags = document.createElement('div');
                tags.className = 'creative-tags';
                const workTags = Array.isArray(localized.tags) ? localized.tags : (Array.isArray(work.tags) ? work.tags : []);
                workTags.forEach(tag => {
                    const badge = document.createElement('span');
                    badge.className = 'creative-tag';
                    badge.textContent = tag;
                    tags.appendChild(badge);
                });

                const link = document.createElement('a');
                link.className = 'creative-play-btn';
                link.href = work.url || '#';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = t.playExperience;

                card.append(title, author, desc, tags, link);
                grid.appendChild(card);
            });
        }

        function renderNewArrivals() {
            const grid = document.getElementById('newGamesGrid');
            if(!grid) return;
            const t = LANG[currentLang];
            grid.innerHTML = '';
            if(!NEW_GAME_SUBMISSIONS.length) {
                const empty = document.createElement('div');
                empty.className = 'new-games-empty';
                empty.textContent = t.newGamesEmpty;
                grid.appendChild(empty);
                return;
            }
            NEW_GAME_SUBMISSIONS.forEach((game, index) => {
                const localized = (t.newSubmissionCards || [])[index] || {};
                const card = document.createElement('article');
                card.className = 'new-game-card';

                const title = document.createElement('h3');
                title.className = 'new-game-title';
                title.textContent = localized.name || game.name || t.untitledGame;

                const author = document.createElement('p');
                author.className = 'new-game-author';
                author.textContent = '@' + (localized.author || game.author || 'anonymous');

                const desc = document.createElement('p');
                desc.className = 'new-game-desc';
                desc.textContent = localized.description || game.description || t.noGameDesc;

                const tags = document.createElement('div');
                tags.className = 'new-game-tags';
                const gameTags = Array.isArray(localized.tags) ? localized.tags : (Array.isArray(game.tags) ? game.tags : []);
                gameTags.forEach(tag => {
                    const badge = document.createElement('span');
                    badge.className = 'new-game-tag';
                    badge.textContent = tag;
                    tags.appendChild(badge);
                });

                const link = document.createElement('a');
                link.className = 'new-game-play';
                link.href = game.url || '#';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = t.playExperience;

                card.append(title, author, desc, tags, link);
                grid.appendChild(card);
            });
        }

        function renderInterestResources() {
            const grid = document.getElementById('interestResourceGrid');
            if(!grid) return;
            const t = LANG[currentLang];
            grid.innerHTML = '';
            MK48_RESOURCES.forEach((item, index) => {
                const localized = (t.mk48ResourceCards || [])[index] || {};
                const card = document.createElement('article');
                card.className = 'interest-info-card';

                const title = document.createElement('h3');
                title.textContent = localized.title || item.title || t.noResourceTitle;

                const summary = document.createElement('p');
                summary.textContent = localized.summary || item.summary || t.noResourceSummary;

                const details = document.createElement('details');
                const detailsTitle = document.createElement('summary');
                detailsTitle.textContent = t.detailsSummary;
                const detailsBody = document.createElement('p');
                detailsBody.textContent = localized.detail || item.detail || t.detailsFallback;
                details.append(detailsTitle, detailsBody);

                const link = document.createElement('a');
                link.className = 'interest-resource-link';
                link.href = item.url || '#';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = t.viewOriginal;

                card.append(title, summary, details, link);
                grid.appendChild(card);
            });
        }

        function renderPolicyBody(policy) {
            if(!policy) return '';
            let html = '';
            let listOpen = false;
            const closeList = () => {
                if(listOpen) {
                    html += '</ul>';
                    listOpen = false;
                }
            };
            policy.body.forEach(line => {
                if(!line) return;
                if(line.startsWith('·')) {
                    if(!listOpen) {
                        html += '<ul class="policy-list">';
                        listOpen = true;
                    }
                    html += `<li>${escapeHTML(line.replace(/^·\s*/, ''))}</li>`;
                    return;
                }
                closeList();
                if(/^问：/.test(line)) {
                    html += `<h4 class="policy-question">${escapeHTML(line)}</h4>`;
                } else if(/^答：/.test(line)) {
                    html += `<p class="policy-answer">${escapeHTML(line)}</p>`;
                } else if(/^([一二三四五六七八九十]+、|我们|核心功能|收录标准|使用说明|内容维护|设计理念|最后更新|联系方式|简单来说|我们用了什么|我们不用什么|如何管理 Cookie|更新与联系)/.test(line) && line.length <= 28) {
                    html += `<h4 class="policy-subtitle">${escapeHTML(line)}</h4>`;
                } else {
                    html += `<p class="policy-p">${escapeHTML(line)}</p>`;
                }
            });
            closeList();
            return html;
        }

        function showSitePolicy(key) {
            const policy = SITE_POLICIES[key];
            if(!policy) return;
            document.getElementById('sitePolicyTitle').textContent = policy.title;
            document.getElementById('sitePolicyBody').innerHTML = renderPolicyBody(policy);
            document.getElementById('sitePolicyModal').classList.add('active');
        }

        function closeSitePolicyModal() {
            document.getElementById('sitePolicyModal').classList.remove('active');
        }

        function showDiscordInfo() {
            alert(LANG[currentLang].discordSoon);
        }

        const INTRO_HEADINGS = new Set([
            '概述','玩法机制','核心玩法','核心循环','基础操作','特色系统','特色机制','游戏模式','游戏模式规模',
            '策略技巧','游戏评价','优点','缺点','资源与供应链','防御建筑','坦克进化树','跨平台支持','高易用性设计',
            '部分开源','多种难度与AI对手','实用的候选数模式','便捷的分享与计时','多元化的游戏模式',
            '辅助功能与视觉工具','游戏列表','装备系统','地图与随机生成','游戏进度与赛季','武器与装备',
            '地图与战术','武器系统','模式与社交','操作方式','资源系统','部落系统','舰船升级','平台特色',
            '游戏特色','特殊机制','AI复盘与学习','观战与社区','等级分系统','支持功能','节奏系统','房间设置',
            '积分规则','视角切换','解谜策略','核心规则','核心机制：自由物理世界','玩家自制关卡：除了官方关卡，游戏拥有独特的UGC生态。由于后台积累了超过2000个玩家提交的创意关卡，开发者提供了专门的关卡设计工具供玩家发挥'
        ]);

        function escapeHTML(value) {
            return String(value || '').replace(/[&<>"']/g, ch => ({
                '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
            }[ch]));
        }

        function isIntroHeading(line) {
            if(!line) return false;
            if(INTRO_HEADINGS.has(line)) return true;
            if(line.includes('：')) return false;
            return line.length <= 12 && /^(玩法|核心|特色|策略|游戏|基础|资源|防御|操作|地图|武器|装备|平台|辅助|评价|优点|缺点)/.test(line);
        }

        function renderIntroParagraph(line) {
            const safe = escapeHTML(line);
            const colon = safe.indexOf('：');
            if(colon > 0 && colon <= 12) {
                return `<p class="intro-p"><span class="intro-label">${safe.slice(0, colon + 1)}</span>${safe.slice(colon + 1)}</p>`;
            }
            return `<p class="intro-p">${safe}</p>`;
        }

        function renderGameIntroContent(game, t) {
            if(currentLang !== 'zh') {
                const desc = t.gameDescs[game.name] || t.blindFallbackDesc || '';
                const fallback = t.gameIntroFallback || '';
                return `
                    <div class="intro-summary">${escapeHTML(desc)}</div>
                    <div class="intro-section">
                        <p class="intro-p">${escapeHTML(fallback)}</p>
                    </div>
                `;
            }
            const paragraphs = GAME_INTROS[game.name];
            if(!paragraphs || !paragraphs.length) {
                return `<p class="intro-summary">${escapeHTML(t.gameDescs[game.name] || '')}</p>`;
            }

            let html = '';
            let sectionOpen = false;
            let listOpen = false;
            let summary = [];
            let index = 0;

            function closeList() {
                if(listOpen) {
                    html += '</ul>';
                    listOpen = false;
                }
            }
            function closeSection() {
                closeList();
                if(sectionOpen) {
                    html += '</div>';
                    sectionOpen = false;
                }
            }

            while(index < paragraphs.length && !isIntroHeading(paragraphs[index]) && summary.length < 3) {
                summary.push(paragraphs[index]);
                index++;
            }
            if(summary.length) {
                html += `<div class="intro-summary">${summary.map(escapeHTML).join('<br><br>')}</div>`;
            }

            for(; index < paragraphs.length; index++) {
                const line = paragraphs[index];
                if(!line) continue;
                if(isIntroHeading(line)) {
                    closeSection();
                    html += `<div class="intro-section"><h4 class="intro-section-title">${escapeHTML(line)}</h4>`;
                    sectionOpen = true;
                    continue;
                }
                if(!sectionOpen) {
                    html += '<div class="intro-section">';
                    sectionOpen = true;
                }
                if(line.startsWith('·')) {
                    if(!listOpen) {
                        html += '<ul class="intro-list">';
                        listOpen = true;
                    }
                    html += `<li>${escapeHTML(line.replace(/^·\s*/, ''))}</li>`;
                    continue;
                }
                closeList();
                if(line.includes('：') && line.indexOf('：') <= 12) {
                    html += renderIntroParagraph(line);
                } else if(line.length <= 18 && !/[。；，]/.test(line)) {
                    html += `<h5 class="intro-subtitle">${escapeHTML(line)}</h5>`;
                } else {
                    html += renderIntroParagraph(line);
                }
            }
            closeSection();
            return html;
        }

        function getRecommendedGames(gameId, limit=3) {
            const currentGame = GAMES_DATA.find(g=>g.id===gameId);
            if(!currentGame) return [];
            let candidates = GAMES_DATA.filter(g => g.id !== gameId);
            candidates.forEach(g => {
                g.similarity = g.tags.filter(t => currentGame.tags.includes(t)).length;
            });
            candidates.sort((a,b) => b.similarity - a.similarity);
            let recommended = candidates.slice(0, limit);
            if(recommended.length < limit) {
                let remaining = candidates.slice(limit).sort(()=>Math.random()-0.5);
                while(recommended.length < limit && remaining.length) {
                    recommended.push(remaining.shift());
                }
            }
            return recommended.slice(0, limit);
        }

        function renderRecommendations(gameId) {
            const grid = document.getElementById('recommendGrid');
            const section = document.getElementById('recommendSection');
            const recommended = getRecommendedGames(gameId, 3);
            if(recommended.length === 0) {
                section.style.display = 'none';
                return;
            }
            section.style.display = 'block';
            let t = LANG[currentLang];
            section.querySelector('.recommend-title').textContent = t.recommendTitle;
            grid.innerHTML = '';
            recommended.forEach(game => {
                let imageUrl = getGameImageUrl(game, '140x80');
                let fallbackUrl = getFallbackImageUrl(game, '140x80');
                let card = document.createElement('div');
                card.className = 'recommend-card';
                card.innerHTML = `
                    <div class="recommend-thumb" style="background-image:url('${imageUrl}'), url('${fallbackUrl}');"></div>
                    <div class="recommend-info">
                        <div class="recommend-name">${game.name}</div>
                        <div class="recommend-desc">${t.gameDescs[game.name] || ''}</div>
                    </div>
                `;
                card.onclick = () => {
                    closeModal();
                    setTimeout(() => showGameInfo(game.id), 100);
                };
                grid.appendChild(card);
            });
        }

        function buildBannerSlides() {
            let sorted = [...GAMES_DATA].sort((a,b) => {
                let popA = getGamePlayCount(a.id);
                let popB = getGamePlayCount(b.id);
                return popB - popA;
            }).slice(0,3);

            let wrapper = document.getElementById('bannerWrapper');
            let indicatorsContainer = document.getElementById('bannerIndicators');
            wrapper.innerHTML = '';
            indicatorsContainer.innerHTML = '';

            sorted.forEach((game, index) => {
                let imageUrl = getGameImageUrl(game, '1200x600');
                let fallbackUrl = getFallbackImageUrl(game, '1200x600');

                let slide = document.createElement('div');
                slide.className = 'banner-slide';
                slide.style.backgroundImage = `url('${imageUrl}'), url('${fallbackUrl}')`;
                slide.innerHTML = `
                    <div class="banner-content">
                        <span class="banner-tag">🔥 ${LANG[currentLang].featured} Top ${index+1}</span>
                        <h2 class="banner-title">${game.name}</h2>
                        <p class="banner-desc">${LANG[currentLang].gameDescs[game.name] || ''}</p>
                        <button class="banner-btn" onclick="playGame(${game.id})"><span class="btn-text">${LANG[currentLang].playNow}</span> ▶</button>
                    </div>
                `;
                wrapper.appendChild(slide);

                let indicator = document.createElement('span');
                indicator.className = 'banner-indicator' + (index===0 ? ' active' : '');
                indicator.onclick = () => goToBanner(index);
                indicatorsContainer.appendChild(indicator);
            });
        }

        let currentBanner = 0, bannerInterval;
        function initBanner() {
            buildBannerSlides();
            startBannerAutoPlay();
            document.getElementById('bannerCarousel').addEventListener('mouseenter', stopBannerAutoPlay);
            document.getElementById('bannerCarousel').addEventListener('mouseleave', startBannerAutoPlay);
        }
        function showBanner(i) {
            let wrapper = document.getElementById('bannerWrapper');
            let totalSlides = wrapper.children.length;
            if (totalSlides === 0) return;
            if (i >= totalSlides) i = 0;
            if (i < 0) i = totalSlides - 1;
            wrapper.style.transform = `translateX(-${i*100}%)`;
            document.querySelectorAll('.banner-indicator').forEach((ind,idx)=>ind.classList.toggle('active', idx===i));
            currentBanner = i;
        }
        function nextBanner() { showBanner(currentBanner+1); }
        function prevBanner() { showBanner(currentBanner-1); }
        function goToBanner(i) { showBanner(i); }
        function startBannerAutoPlay() { if(bannerInterval) clearInterval(bannerInterval); bannerInterval = setInterval(nextBanner, 4000); }
        function stopBannerAutoPlay() { clearInterval(bannerInterval); }

        // ==============================
        // 🔥 云端表情同步相关代码
        // ==============================

        // 获取/生成设备唯一ID
        function getDeviceId() {
            let id = localStorage.getItem('fuunio_device_id');
            if (!id) {
                id = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                localStorage.setItem('fuunio_device_id', id);
            }
            return id;
        }

        function getReactionCountsFromDom(gameId) {
            const counts = { love: 0, meh: 0, angry: 0 };
            const container = document.querySelector(`.game-reactions[data-game-id="${gameId}"]`);
            if(!container) return counts;
            container.querySelectorAll('.reaction-item').forEach(item => {
                const type = item.dataset.reaction;
                counts[type] = Number(item.querySelector('.count')?.textContent) || 0;
            });
            return counts;
        }

        function applyReactionState(gameId, counts, userVote) {
            document.querySelectorAll(`.game-reactions[data-game-id="${gameId}"]`).forEach(el => {
                el.querySelectorAll('.reaction-item').forEach(item => {
                    const type = item.dataset.reaction;
                    item.querySelector('.count').textContent = counts[type] || 0;
                    item.classList.toggle('voted', userVote === type);
                    item.setAttribute('aria-pressed', userVote === type ? 'true' : 'false');
                });
            });
        }

        // 从 Supabase 加载所有反应，更新显示及用户投票状态
        async function loadReactions() {
            if (!supabaseClient) {
                document.querySelectorAll('.game-reactions').forEach(el => {
                    applyReactionState(el.dataset.gameId, { love: 0, meh: 0, angry: 0 }, null);
                });
                return;
            }
            const deviceId = getDeviceId();
            const { data, error } = await supabaseClient.from('game_reactions').select('game_id, reaction_type, user_device_id');
            if (error) {
                console.warn('加载表情失败:', error.message);
                return;
            }
            const counts = {};
            const userVotes = {}; // game_id -> reaction_type
            data.forEach(row => {
                const gameId = row.game_id;
                if (!counts[gameId]) counts[gameId] = { love: 0, meh: 0, angry: 0 };
                if (row.reaction_type) counts[gameId][row.reaction_type]++;
                if (row.user_device_id === deviceId) {
                    userVotes[gameId] = row.reaction_type;
                }
            });
            document.querySelectorAll('.game-reactions').forEach(el => {
                const gameId = el.dataset.gameId;
                const c = counts[gameId] || { love: 0, meh: 0, angry: 0 };
                const userVote = userVotes[gameId] || null;
                applyReactionState(gameId, c, userVote);
            });
        }

        // 处理点击表情（取消/切换）
        async function handleReactionClick(e) {
            e.preventDefault();
            e.stopPropagation();
            const item = e.currentTarget;
            const container = item.closest('.game-reactions');
            if(!container || item.disabled) return;
            const gameId = container.dataset.gameId;
            const type = item.dataset.reaction;
            const deviceId = getDeviceId();
            const previousVote = container.querySelector('.reaction-item.voted')?.dataset.reaction || null;
            const nextVote = previousVote === type ? null : type;
            const counts = getReactionCountsFromDom(gameId);
            if(previousVote && counts[previousVote] > 0) counts[previousVote]--;
            if(nextVote) counts[nextVote] = (counts[nextVote] || 0) + 1;
            applyReactionState(gameId, counts, nextVote);
            item.classList.add('bounce');
            setTimeout(() => item.classList.remove('bounce'), 300);

            if(!supabaseClient) return;
            item.disabled = true;

            // 查询当前设备对该游戏已有的反应
            const { data: existing, error: lookupError } = await supabaseClient
                .from('game_reactions')
                .select('id, reaction_type')
                .eq('game_id', gameId)
                .eq('user_device_id', deviceId);
            if(lookupError) {
                console.warn('Failed to read reaction:', lookupError.message);
                item.disabled = false;
                return;
            }

            // 如果已经点了相同的表情 -> 取消
            if (existing && existing.length > 0 && existing[0].reaction_type === type) {
                const { error } = await supabaseClient.from('game_reactions').delete().eq('id', existing[0].id);
                if(error) console.warn('Failed to delete reaction:', error.message);
            } else {
                // 如果点了不同的表情，先删旧的，再插新的
                if (existing && existing.length > 0) {
                    const { error } = await supabaseClient.from('game_reactions').delete().eq('id', existing[0].id);
                    if(error) console.warn('Failed to replace reaction:', error.message);
                }
                const { error } = await supabaseClient.from('game_reactions').insert({
                    game_id: gameId,
                    user_device_id: deviceId,
                    reaction_type: type
                });
                if(error) console.warn('Failed to insert reaction:', error.message);
            }

            // 重新加载反应
            item.disabled = false;
            loadReactions();
            // 添加弹跳动画
        }

        // ==============================
        // 🔥 渲染游戏卡片（已移除 localStorage 逻辑，改用云端同步）
        // ==============================

        function renderGames(games, append=false) {
            let grid = document.getElementById('gamesGrid');
            if(!append) grid.innerHTML = '';
            if(games.length===0 && !append) {
                grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🎮</div><h3 class="empty-title">${LANG[currentLang].noResults}</h3></div>`;
                return;
            }
            games.forEach(game => {
                if(grid.querySelector(`[data-game-id="${game.id}"]`)) return;

                let pop = getGamePlayCount(game.id);
                let imageUrl = getGameImageUrl(game);
                let fallbackUrl = getFallbackImageUrl(game);
                let card = document.createElement('div'); card.className = 'game-card';
                card.setAttribute('data-game-id', game.id);
                card.innerHTML = `
                    <div class="game-thumb" style="background-image:url('${imageUrl}'), url('${fallbackUrl}');">
                        <div class="popularity-badge">🔥 ${pop.toLocaleString()} ${LANG[currentLang].popularityPlayed}</div>
                        <div class="popularity-num-detailed">${pop} ${LANG[currentLang].popularityTimes}</div>
                        <div class="card-overlay">
                            <button class="card-btn card-btn-info" onclick="event.stopPropagation();showGameInfo(${game.id})">📖 ${LANG[currentLang].info}</button>
                            <button class="card-btn card-btn-play" onclick="event.stopPropagation();playGame(${game.id})">▶ ${LANG[currentLang].play}</button>
                        </div>
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">${game.name}</h3>
                        <div class="game-meta"><span class="game-category">${game.tags[0]}</span></div>
                        <div class="game-reactions" data-game-id="${game.id}">
                            <button class="reaction-item" type="button" data-reaction="love" aria-label="love" aria-pressed="false">😍 <span class="count">0</span></button>
                            <button class="reaction-item" type="button" data-reaction="meh" aria-label="meh" aria-pressed="false">😐 <span class="count">0</span></button>
                            <button class="reaction-item" type="button" data-reaction="angry" aria-label="angry" aria-pressed="false">😡 <span class="count">0</span></button>
                        </div>
                    </div>
                `;
                card.addEventListener('click', function(e){
                    if(e.target.closest('.card-btn')||e.target.closest('.reaction-item')) return;
                    if(window.innerWidth<=1024){
                        let overlay = card.querySelector('.card-overlay');
                        document.querySelectorAll('.game-card.overlay-open').forEach(c=>{
                            if(c!==card) {
                                c.classList.remove('overlay-open');
                                let openedOverlay = c.querySelector('.card-overlay');
                                if(openedOverlay) openedOverlay.classList.remove('show-overlay');
                            }
                        });
                        card.classList.add('overlay-open');
                        overlay.classList.add('show-overlay');
                    }
                });
                grid.appendChild(card);

                // 为当前卡片的反应按钮绑定云端点击事件
                card.querySelectorAll('.reaction-item').forEach(item => {
                    item.addEventListener('click', handleReactionClick);
                });
            });
        }

        function renderSkeletons(count=8) {
            let grid=document.getElementById('gamesGrid'); grid.innerHTML='';
            for(let i=0;i<count;i++){
                let d=document.createElement('div');d.className='skeleton-card';
                d.innerHTML=`<div class="skeleton skeleton-thumb"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-meta"></div></div>`;
                grid.appendChild(d);
            }
        }

        function filterGames() {
            let filtered = [...GAMES_DATA];
            if(state.currentCategory==='hot') filtered = filtered.filter(g=>g.isHot);
            else if(state.currentCategory==='new') filtered = filtered.filter(g=>g.isNew);
            else if(state.currentCategory!=='all') filtered = filtered.filter(g=>g.category===state.currentCategory);
            if(state.searchQuery) {
                let q = state.searchQuery.toLowerCase();
                filtered = filtered.filter(g=>g.name.toLowerCase().includes(q));
            }
            return filtered;
        }

        function filterByCategory(cat) {
            setActivePage('home');
            state.currentCategory=cat; state.searchQuery=''; document.getElementById('searchInput').value=''; state.displayedGames=12;
            document.querySelectorAll('.sidebar-item').forEach(i=>i.classList.toggle('active', i.dataset.category===cat));
            renderSkeletons();
            setTimeout(()=>{
                let games=filterGames();
                renderGames(games.slice(0,state.displayedGames));
                updateLoadMoreBtn(games.length);
                loadReactions();
            },200);
            if(window.innerWidth<=1024) toggleSidebar(false);
        }

        function handleSearch(q) {
            setActivePage('home');
            state.searchQuery=q.trim(); state.displayedGames=12;
            renderSkeletons();
            setTimeout(()=>{
                let games=filterGames();
                renderGames(games.slice(0,state.displayedGames));
                updateLoadMoreBtn(games.length);
                loadReactions();
            },200);
        }

        function resetToHome() {
            setActivePage('home');
            state.currentCategory='all'; state.searchQuery=''; document.getElementById('searchInput').value=''; state.displayedGames=12;
            document.querySelectorAll('.sidebar-item').forEach(i=>i.classList.toggle('active', i.dataset.category==='all'));
            renderSkeletons();
            setTimeout(()=>{
                let games=filterGames();
                renderGames(games.slice(0,state.displayedGames));
                updateLoadMoreBtn(games.length);
                loadReactions();
            },200);
        }

        function showComingSoon() { alert(LANG[currentLang].comingSoon); }

        const gamePool = [
            { name:'坦克大作战', cover:'', description:'多人坦克竞技场，升级火力和机动性，在混战里打出压制感。', link:'https://arras.io/' },
            { name:'自由钢琴', cover:'', description:'打开浏览器就能弹奏的在线钢琴，适合放松、练习和即兴演奏。', link:'https://www.autopiano.cn/' },
            { name:'Bloxd.IO', cover:'', description:'方块世界里的多人创造和竞技体验，轻量但玩法选择很丰富。', link:'https://bloxd.io/' },
            { name:'Narrow One', cover:'', description:'快节奏弓箭多人对战，移动、瞄准和团队配合都很关键。', link:'https://narrow.one/' },
            { name:'2048', cover:'', description:'经典数字合成益智游戏，规则简单但很容易再来一局。', link:'https://2048game.com/' }
        ];
        let blindTimers = [];
        let blindSelectedGame = null;

        function getTodayKey() {
            const d = new Date();
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${y}-${m}-${day}`;
        }

        function clearBlindTimers() {
            blindTimers.forEach(timer => clearTimeout(timer));
            blindTimers = [];
        }

        function queueBlindStep(delay, fn) {
            const timer = setTimeout(fn, delay);
            blindTimers.push(timer);
        }

        function resetBlindStage() {
            const stage = document.getElementById('blindStage');
            const box = document.getElementById('blindBox');
            stage.className = 'blind-stage';
            stage.querySelectorAll('.blind-particle').forEach(p => p.remove());
            document.getElementById('blindResultCard').className = 'blind-result-card';
            document.getElementById('blindResultCard').innerHTML = '';
            document.getElementById('blindMarble').classList.remove('docked');
            box.classList.remove('shake', 'explode');
            box.querySelectorAll('.blind-crack').forEach(c => c.remove());
            document.getElementById('blindBoxWrap').style.pointerEvents = '';
        }

        function openDailyBlindBox() {
            const savedDate = localStorage.getItem('blindbox_date');
            const savedResult = localStorage.getItem('blindbox_result');
            document.getElementById('dailyBlindModal').classList.add('active');
            document.getElementById('dailyBlindModal').setAttribute('aria-hidden', 'false');
            clearBlindTimers();
            resetBlindStage();
            closeModal();

            if(savedDate === getTodayKey() && savedResult) {
                try {
                    blindSelectedGame = JSON.parse(savedResult);
                    showBlindResult(blindSelectedGame, true);
                    return;
                } catch(e) {
                    localStorage.removeItem('blindbox_result');
                }
            }

            blindSelectedGame = gamePool[Math.floor(Math.random() * gamePool.length)];
            runBlindIntro();
        }

        function closeDailyBlindBox() {
            clearBlindTimers();
            document.getElementById('dailyBlindModal').classList.remove('active');
            document.getElementById('dailyBlindModal').setAttribute('aria-hidden', 'true');
            resetBlindStage();
        }

        function setBlindPhase(phase) {
            const stage = document.getElementById('blindStage');
            stage.className = `blind-stage ${phase}`;
        }

        function runBlindIntro() {
            setBlindPhase('phase-controller');
            queueBlindStep(800, () => setBlindPhase('phase-scan'));
            queueBlindStep(1800, () => {
                setBlindPhase('phase-marble');
                queueBlindStep(600, () => {
                    document.getElementById('blindMarble').classList.add('docked');
                    const dot = getBlindMarbleCenterPercent();
                    createBlindParticles(18, dot.x, dot.y, false);
                });
            });
            queueBlindStep(2600, () => setBlindPhase('phase-brand'));
            queueBlindStep(3600, () => setBlindPhase('phase-slogan'));
            queueBlindStep(4400, () => {
                setBlindPhase('phase-box');
                gatherBlindParticles();
            });
        }

        function getBlindMarbleCenterPercent() {
            const stage = document.getElementById('blindStage');
            const marble = document.getElementById('blindMarble');
            const stageRect = stage.getBoundingClientRect();
            const marbleRect = marble.getBoundingClientRect();
            if(!stageRect.width || !stageRect.height) return { x: 63, y: 31 };
            return {
                x: ((marbleRect.left + marbleRect.width / 2 - stageRect.left) / stageRect.width) * 100,
                y: ((marbleRect.top + marbleRect.height / 2 - stageRect.top) / stageRect.height) * 100
            };
        }

        function createBlindParticles(count, xPercent=50, yPercent=50, burst=false) {
            const stage = document.getElementById('blindStage');
            const mobile = window.innerWidth <= 768;
            const total = mobile ? Math.ceil(count / 2) : count;
            for(let i = 0; i < total; i++) {
                const particle = document.createElement('span');
                const angle = Math.random() * Math.PI * 2;
                const distance = (burst ? 120 : 62) + Math.random() * (burst ? 110 : 58);
                particle.className = 'blind-particle' + (burst ? ' burst' : '');
                particle.style.setProperty('--x', `${xPercent}%`);
                particle.style.setProperty('--y', `${yPercent}%`);
                particle.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
                particle.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
                particle.style.setProperty('--c', Math.random() > 0.5 ? '#38bdf8' : '#a855f7');
                stage.appendChild(particle);
                setTimeout(() => particle.remove(), burst ? 850 : 700);
            }
        }

        function gatherBlindParticles() {
            const stage = document.getElementById('blindStage');
            const mobile = window.innerWidth <= 768;
            const total = mobile ? 10 : 18;
            for(let i = 0; i < total; i++) {
                const particle = document.createElement('span');
                particle.className = 'blind-particle gather';
                particle.style.setProperty('--x', `${20 + Math.random() * 60}%`);
                particle.style.setProperty('--y', `${18 + Math.random() * 58}%`);
                particle.style.setProperty('--c', Math.random() > 0.5 ? '#38bdf8' : '#a855f7');
                stage.appendChild(particle);
                setTimeout(() => particle.remove(), 720);
            }
        }

        function openBlindBoxResult() {
            const box = document.getElementById('blindBox');
            const wrap = document.getElementById('blindBoxWrap');
            if(!blindSelectedGame || box.classList.contains('shake')) return;
            localStorage.setItem('blindbox_date', getTodayKey());
            localStorage.setItem('blindbox_result', JSON.stringify(blindSelectedGame));
            wrap.style.pointerEvents = 'none';
            box.classList.add('shake');
            for(let i = 0; i < 6; i++) {
                const crack = document.createElement('span');
                crack.className = 'blind-crack';
                crack.style.setProperty('--r', `${Math.random() * 140 - 70}deg`);
                crack.style.width = `${42 + Math.random() * 48}px`;
                box.appendChild(crack);
            }
            queueBlindStep(420, () => {
                box.classList.add('explode');
                createBlindParticles(38, 50, 50, true);
            });
            queueBlindStep(760, () => showBlindResult(blindSelectedGame));
        }

        function showBlindResult(game, skipAnimation=false) {
            const stage = document.getElementById('blindStage');
            const card = document.getElementById('blindResultCard');
            const t = LANG[currentLang];
            const cover = game.cover ? `style="background-image:url('${game.cover.replace(/'/g, '%27')}')"` : '';
            const initial = (game.name || '?').trim().charAt(0) || '?';

            // 新增：获取 gameId
            const matchedGame = GAMES_DATA.find(g => g.name === game.name);
            const gameId = matchedGame ? matchedGame.id : null;

            stage.className = 'blind-stage phase-result';
            document.getElementById('blindBoxWrap').style.pointerEvents = 'none';
            if(!skipAnimation) document.getElementById('blindBox').classList.add('explode');
            card.innerHTML = `
                <div class="blind-result-cover" ${cover}>${game.cover ? '' : initial}</div>
                <h2 class="blind-result-title">${game.name}</h2>
                <p class="blind-result-desc">${t.gameDescs[game.name] || game.description || t.blindFallbackDesc}</p>
                <div class="blind-result-actions">
                    <a class="blind-play-link" href="${game.link}" target="_blank" rel="noopener noreferrer">${t.blindPlay}</a>
                    <button class="blind-share-btn" type="button" onclick="showGameInfo(${gameId}); closeDailyBlindBox();">${t.gameIntro}</button>
                </div>
            `;
            requestAnimationFrame(() => card.classList.add('active'));
        }

        function shareBlindBoxResult(btn) {
            const oldText = btn.textContent;
            const done = () => {
                btn.textContent = currentLang === 'zh' ? '✅ 已复制' : (currentLang === 'ja' ? '✅ コピー済み' : '✅ Copied');
                setTimeout(() => { btn.textContent = oldText; }, 1500);
            };
            if(navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(location.href).then(done).catch(() => fallbackCopy(location.href, done));
            } else {
                fallbackCopy(location.href, done);
            }
        }

        function fallbackCopy(text, done) {
            const input = document.createElement('textarea');
            input.value = text;
            input.style.position = 'fixed';
            input.style.opacity = '0';
            document.body.appendChild(input);
            input.select();
            try { document.execCommand('copy'); done(); }
            finally { input.remove(); }
        }

        function showNewArrivals() {
            setActivePage('newArrivals');
            closeModal();
            document.getElementById('langDropdown').classList.remove('active');
            renderNewArrivals();
            if(window.innerWidth<=1024) toggleSidebar(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function showInterestCamp() {
            setActivePage('interest');
            closeModal();
            document.getElementById('langDropdown').classList.remove('active');
            renderInterestResources();
            if(window.innerWidth<=1024) toggleSidebar(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function showGameSea() {
            setActivePage('gameSea');
            closeModal();
            document.getElementById('langDropdown').classList.remove('active');
            if(window.innerWidth<=1024) toggleSidebar(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function showCreativeMarket() {
            setActivePage('creativeMarket');
            closeModal();
            document.getElementById('langDropdown').classList.remove('active');
            renderCreativeMarket();
            if(window.innerWidth<=1024) toggleSidebar(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        let lastDiceId = null;
        function rollDice() {
            setActivePage('home');
            let floatDiv = document.createElement('div');
            floatDiv.className = 'dice-float';
            floatDiv.innerHTML = `<div class="dice-cube" aria-hidden="true"><div class="dice-face dice-one"></div><div class="dice-face dice-two"></div><div class="dice-face dice-three"></div><div class="dice-face dice-four"></div><div class="dice-face dice-five"></div><div class="dice-face dice-six"></div></div>`;
            document.body.appendChild(floatDiv);

            let game;
            do { game = GAMES_DATA[Math.floor(Math.random()*GAMES_DATA.length)]; }
            while(game.id===lastDiceId && GAMES_DATA.length>1);
            lastDiceId = game.id;

            setTimeout(() => {
                floatDiv.remove();
                let t = LANG[currentLang];
                activeModalGameId = game.id;
                activeModalMode = 'dice';
                document.getElementById('modalTitle').textContent = '🎲 ' + game.name;
                document.getElementById('modalIcon').textContent = game.icon;
                document.getElementById('modalDesc').textContent = t.gameDescs[game.name] || '';
                document.getElementById('modalPlayBtn').textContent = t.playInNewWindow;
                document.getElementById('modalPlayBtn').onclick = ()=>{ playGame(game.id); closeModal(); };
                document.getElementById('modalRerollBtn').innerHTML = t.rollAgain;
                document.getElementById('modalRerollBtn').style.display = 'block';
                document.getElementById('modalRerollBtn').onclick = rollDice;
                document.getElementById('modalIntroBtn').style.display = 'block';
                document.getElementById('modalIntroBtn').innerHTML = t.gameIntro;
                document.getElementById('modalIntroBtn').onclick = ()=>{
                    showGameInfo(game.id);
                };
                document.getElementById('gameModal').classList.add('active');
                renderRecommendations(game.id);
                document.querySelectorAll('.tabbar-item').forEach(t=>t.classList.remove('active'));
                document.getElementById('tabDice').classList.add('active');
            }, 1000);
        }

        function showGameInfo(gameId) {
            let game = GAMES_DATA.find(g=>g.id===gameId);
            if(!game) return;
            let t = LANG[currentLang];
            activeModalGameId = game.id;
            activeModalMode = 'intro';
            document.getElementById('modalTitle').textContent = game.name;
            document.getElementById('modalIcon').textContent = game.icon;
            document.getElementById('modalDesc').innerHTML = renderGameIntroContent(game, t);
            document.getElementById('modalPlayBtn').textContent = t.playInNewWindow;
            document.getElementById('modalPlayBtn').onclick = ()=>{ playGame(game.id); closeModal(); };
            document.getElementById('modalRerollBtn').style.display = 'none';
            document.getElementById('modalIntroBtn').style.display = 'none';
            document.getElementById('gameModal').classList.add('active');
            renderRecommendations(game.id);
        }

        function closeModal() {
            document.getElementById('gameModal').classList.remove('active');
            document.getElementById('recommendGrid').innerHTML = '';
            document.getElementById('recommendSection').style.display = 'none';
            activeModalGameId = null;
            activeModalMode = null;
        }
        function playGame(id) {
            let g = GAMES_DATA.find(g=>g.id===id);
            if(!g) return;
            triggerFufuJumpSpin();
            incrementPlayCount(g.id);
            safeOpenExternal(g.url);
        }

        function loadMoreGames() {
            if(state.isLoading) return;
            state.isLoading = true;
            let btn = document.querySelector('.load-more-btn'), orig = btn.textContent;
            btn.textContent = LANG[currentLang].loading;
            setTimeout(()=>{
                state.displayedGames += 8;
                let games = filterGames();
                renderGames(games.slice(0, state.displayedGames), true);
                updateLoadMoreBtn(games.length);
                loadReactions();
                state.isLoading = false;
                btn.textContent = orig;
            }, 400);
        }

        function updateLoadMoreBtn(total) {
            document.getElementById('loadMore').style.display = state.displayedGames >= total ? 'none' : 'block';
        }

        function updateSidebarToggleLabel() {
            const btn = document.getElementById('sidebarToggleBtn');
            if(!btn) return;
            const t = LANG[currentLang];
            const desktop = window.innerWidth > 1024;
            if(desktop) {
                const expanded = document.body.classList.contains('sidebar-expanded');
                const label = expanded ? t.sidebarToggleClose : t.sidebarToggleOpen;
                btn.setAttribute('aria-label', label);
                btn.setAttribute('title', label);
            } else {
                const active = document.getElementById('sidebar').classList.contains('active');
                const label = active ? t.sidebarToggleClose : t.sidebarToggleOpen;
                btn.setAttribute('aria-label', label);
                btn.setAttribute('title', label);
            }
        }

        function initSidebarState() {
            const saved = localStorage.getItem('sidebarExpanded');
            document.body.classList.toggle('sidebar-expanded', saved === 'true');
            updateSidebarToggleLabel();
        }

        function toggleSidebar(show) {
            let sidebar = document.getElementById('sidebar'), overlay = document.getElementById('sidebarOverlay');
            if(window.innerWidth>1024) {
                let shouldExpand = show!==undefined ? show : !document.body.classList.contains('sidebar-expanded');
                document.body.classList.toggle('sidebar-expanded', shouldExpand);
                localStorage.setItem('sidebarExpanded', shouldExpand ? 'true' : 'false');
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                updateSidebarToggleLabel();
                return;
            }
            let should = show!==undefined ? show : !sidebar.classList.contains('active');
            sidebar.classList.toggle('active', should);
            overlay.classList.toggle('active', should);
            updateSidebarToggleLabel();
        }

        Object.assign(window, {
            currentUser,
            fufuPet,
            initFufuPet,
            toggleFufuPet,
            handleFufuClick,
            toggleSidebar,
            resetToHome,
            rollDice,
            showNewArrivals,
            showInterestCamp,
            showCreativeMarket,
            showGameSea,
            openAuthModal,
            closeAuthModal,
            setAuthMode,
            signOutUser,
            openDailyBlindBox,
            closeDailyBlindBox,
            openBlindBoxResult,
            toggleLangDropdown,
            switchLanguage,
            filterByCategory,
            handleSearch,
            prevBanner,
            nextBanner,
            loadMoreGames,
            showGameInfo,
            playGame,
            closeModal,
            showSitePolicy,
            closeSitePolicyModal,
            showDiscordInfo,
            openStatsPanel,
            closeStatsPanel
        });

        document.addEventListener('DOMContentLoaded', ()=>{
            initSidebarState();
            initAuth();
            trackDailyVisit();
            updateUserUI();
            initFufuInteractions();
            renderCreativeMarket();
            renderNewArrivals();
            renderInterestResources();
            let saved = localStorage.getItem('preferredLang');
            if(saved && saved!==currentLang) switchLanguage(saved);
            renderSkeletons();
            initPopularity().finally(() => {
                initBanner();
                let games=filterGames();
                renderGames(games.slice(0,state.displayedGames));
                updateLoadMoreBtn(games.length);
                // 🔥 在这里加载云端表情
                loadReactions();
            });
            document.getElementById('gameModal').addEventListener('click', function(e){
                if(e.target===this) closeModal();
            });
            document.getElementById('dailyBlindModal').addEventListener('click', function(e){
                if(e.target===this) closeDailyBlindBox();
            });
            document.getElementById('authModal').addEventListener('click', function(e){
                if(e.target===this) closeAuthModal();
            });
            document.getElementById('authForm').addEventListener('submit', handleAuthSubmit);
            document.addEventListener('keydown', e=>{
                if(e.key==='Escape'){
                    closeModal();
                    closeDailyBlindBox();
                    closeAuthModal();
                    document.getElementById('langDropdown').classList.remove('active');
                    if(window.innerWidth<=1024) toggleSidebar(false);
                }
            });
            document.addEventListener('click', e=>{
                let dd = document.getElementById('langDropdown'), sw = document.getElementById('langSwitcher');
                if(dd.classList.contains('active') && sw && !sw.contains(e.target)) dd.classList.remove('active');
            });
        });

        window.addEventListener('resize', ()=>{
            if(window.innerWidth>1024) {
                document.getElementById('sidebar').classList.remove('active');
                document.getElementById('sidebarOverlay').classList.remove('active');
            }
            updateSidebarToggleLabel();
        });

        let scrollTimeout;
        window.addEventListener('scroll', ()=>{
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(()=>{
                if(state.currentPage !== 'home') return;
                if(window.pageYOffset+window.innerHeight >= document.documentElement.scrollHeight-300){
                    let games = filterGames();
                    if(state.displayedGames<games.length && !state.isLoading) loadMoreGames();
                }
            }, 150);
        });
