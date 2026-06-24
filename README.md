```markdown
# 🎮 Fuunio - 在线游戏聚合平台

> 发现你的下一款挚爱

Fuunio 是一个专注于 .io 游戏及轻量网页游戏的精品导航平台。我们不存储、不托管任何游戏文件，仅提供游戏官方网站的链接入口，帮助您以最直接的方式发现并进入心仪的游戏。

---

## 📁 项目结构

- **index.html** - 主页面
- **assets/** - 静态资源（字体、图片、图标）
- **css/style.css** - 主样式表
- **js/data/games.json** - 80 款游戏数据
- **js/config.js** - Supabase 配置
- **js/state.js** - 用户状态管理
- **js/auth.js** - 登录/注册/登出
- **js/stats.js** - 游玩统计 & 后台面板
- **js/reactions.js** - 表情功能
- **js/games.js** - 游戏数据加载 & 渲染
- **js/banner.js** - 轮播图
- **js/modal.js** - 游戏弹窗
- **js/sidebar.js** - 侧边栏
- **js/dice.js** - 骰子随机（随缘玩）
- **js/blindbox.js** - 每日盲盒
- **js/fufu.js** - 福福宠物
- **js/pages.js** - 页面导航（新品尝鲜/创意集市/兴趣营地/游戏公海）
- **js/i18n.js** - 多语言（中/英/日）
- **js/policy.js** - 政策弹窗（关于/联系我们/FAQ/条款/隐私/Cookie）
- **js/main.js** - 入口文件

---

## 🚀 快速开始

### 1. 本地运行

```bash
# 使用 VS Code Live Server 打开
# 或使用任意 HTTP 服务器
python3 -m http.server 5500
```

### 2. 配置 Supabase

1. 在 `js/config.js` 中填写你的 Supabase URL 和 Anon Key
2. 或在 Supabase Dashboard 中配置

### 3. 打包部署

```bash
# 打包整个项目
tar -czf fuunio.tar.gz index.html assets/ css/ js/
```

---

## 🛠️ 技术栈

- HTML5
- CSS3（Steam 暗色主题）
- JavaScript（ES6+）
- Supabase（Auth + Database）
- Three.js（3D 宠物）

---

## ✨ 功能列表

- ✅ 游戏分类浏览（全部/热门/新游戏/动作/射击/生存/休闲/.io/策略/竞速）
- ✅ 实时搜索
- ✅ 用户登录/注册（Supabase Auth）
- ✅ 游戏游玩次数统计
- ✅ 游戏表情反馈（😍 😐 😡）
- ✅ 每日盲盒
- ✅ 骰子随机（随缘玩）
- ✅ 多语言（中文/English/日本語）
- ✅ 管理员后台数据面板
- ✅ 3D 宠物（福福）
- ✅ 响应式设计（PC/平板/手机）

---

## 📧 联系方式

- 邮箱：fuunio@qq.com
- 玩家大厅：[QQ 频道](https://pd.qq.com/s/af6be3xv8?b=9)

---

## 📄 版权

© 2026 Fuunio. All rights reserved.
```

