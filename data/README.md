# Events 主题数据目录说明

本目录用于沉淀 `themes/cms/events` 主题相关的参考数据与素材（案例、截图、原始站点 HTML 等），方便后续补齐配置、对齐实现与验收。

## 二级域名（subdomains）

将所有与 Events 主题相关的二级域名维护在一个数组里（用于采集、对照、验收时快速定位）。

> 约定：
> - 只写二级域名部分（不含协议、不含主域名），例如 `events`、`conference`、`summit`
> - 尽量收录“组织级 events 聚合站”和“单场大会/活动微站”常用命名
> - 去重、按字母排序

```ruby
SUBDOMAINS = %w[
  agenda
  conf
  conference
  conferences
  connect
  convention
  conventions
  events
  expo
  festival
  hackathon
  io
  live
  meetup
  meetups
  register
  registration
  schedule
  session
  sessions
  speakers
  summit
  summits
  tickets
  tour
  virtual
  webinar
  webinars
  workshops
].freeze
```

## 案例 URL（cases）

将可公开访问、可复现的案例链接维护为列表（用于页面结构参考、交互对照、截图对比）。

> 约定：
> - 使用完整 URL（含 `https://`）
> - 同一品牌多语言/多地区站点可分行列出
> - 如需标注用途，用括号补充短备注

```text
- https://developer.apple.com/wwdc26/ (Apple WWDC：大会首页/入口信息/内容消费路径)
- https://developer.apple.com/wwdc26/special-event/ (WWDC：线下特别活动报名/申请入口形态)
- https://developer.apple.com/events/ (Apple Developer Events：活动聚合/筛选/落地页入口)
- https://io.google/ (Google I/O：大会首页)
- https://io.google/2026/ (Google I/O：大会专题页/主 KV/导航到议程与注册)
- https://io.google/2026/register/ (Google I/O：注册入口)
- https://build.microsoft.com/en-US/home (Microsoft Build：大会首页)
- https://register.build.microsoft.com/ (Microsoft Build：注册入口)
- https://build.microsoft.com/en-US/sessions (Microsoft Build：Session Catalog / 议程列表)
- https://config.figma.com/ (Figma Config：大会首页)
- https://config.figma.com/san-francisco/agenda/ (Figma Config：Agenda / 议程)
- https://config.figma.com/san-francisco/register/ (Figma Config：注册/购票入口)
- https://stripe.com/sessions/2026 (Stripe Sessions：大会首页/售票/会议信息)
- https://aws.amazon.com/cn/events/summits/ (AWS Summits：线下峰会合集/城市分站/报名入口)
- https://www.atlassian.com/company/events (Atlassian Events：品牌活动聚合/按地区与类型浏览)
- https://business.adobe.com/summit/adobe-summit.html (Adobe Summit：大型线下峰会专题/转化入口/内容分区)
- https://conf.splunk.com/ (Splunk .conf：大会主站/日程与参会路径)
- https://unbound.hubspot.com/ (HubSpot INBOUND / Unbound：大型线下大会专题/购票/内容导航)
- https://websummit.com/schedule/ (Web Summit：议程/日程)
- https://websummit.com/speakers/ (Web Summit：讲者目录/筛选)
- https://websummit.com/tickets/attendees/ (Web Summit：购票/票种/转化页)
- https://ceba.swoogo.com/summit2026/home (Swoogo 托管大会站：典型 Event SaaS 站点结构参考)
- https://www.figma.com/webinars/ (Webinar：线上研讨会聚合/列表 → 详情/报名)
- https://www.webflow.com/webinars (Webinar：线上研讨会聚合/筛选)
- https://www.intercom.com/webinars (Webinar：线上研讨会聚合/列表 → 详情/报名)
- https://www.notion.so/webinars (Webinar：线上研讨会聚合/列表)
- https://www.gong.io/webinars/ (Webinar：线上研讨会聚合/列表 → 详情)
- https://www.hubspot.com/resources/webinar (Webinar：资源型聚合页（webinar + 录播/资料）)
- https://www.livestorm.co/webinars (Webinar：产品主办 Webinar 展示/报名)
- https://www.atlassian.com/webinars (Webinar：线上研讨会聚合/报名转化)
- https://www.slack.com/events/webinars (Webinar：events 下的 webinars 聚合/信息架构参考)
- https://amplitude.com/webinars (Webinar：线上研讨会聚合/列表)
- https://www.zendesk.com/resources/webinars/ (Webinar：资源中心下的 webinars 聚合)
- https://www.airtable.com/webinars (Webinar：线上研讨会聚合/列表 → 详情)
- https://www.miro.com/webinars/ (Webinar：线上研讨会聚合/列表)
- https://www.canva.com/designschool/webinars/ (Webinar：教育/学院体系下的 webinars 聚合)
```

## 模板案例参考（theme demos）

存储可公开访问的“现成主题/落地页模板”演示链接（多为商业主题），用于快速对照信息架构、版式、组件组合与动效实现。

如需标注用途，用括号补充短备注（例如 Landing/Online Event/Meetup 等）

```text
- https://themes.themegoods.com/grandconference/landing/ (Grand Conference：Landing 页模板参考)
- https://preview.themeforest.net/item/eventor-meetup-conference-wordpress-landing-page/full_screen_preview/42504130 (ThemeForest：Eventor Landing Page 模板预览)
- https://demo.goodlayers.com/u/confera/online/ (Confera：Online Event 模板参考)
- 活动页：https://grandconferencev5-2.themegoods.com/multi-events
- 参考风格：https://demo.goodlayers.com/u/confera/online/event/welcome-introduction
- 讲师页： https://demo.goodlayers.com/u/confera/online/speakers-column-style
```

## TODO（待补充清单）

- [ ] 补齐 `SUBDOMAINS` 数组（去重、按字母排序；补充行业特有词如 `camp`/`con`/`dev` 等）
- [ ] 补齐案例 URL 列表（至少：大会首页 / 议程列表 / 议程详情 / 讲者列表 / 讲者详情 / 赞助商 / 注册或购票）
- [ ] 在 `cases/` 下按品牌新建子目录，沉淀关键信息（站点截图、关键 DOM、交互要点、核心组件拆解）
- [ ] 在 `screenshots/` 下补齐统一命名的对照截图（`brand-page-date.png`，同一页面多断点可加 `-desktop/-mobile`）
- [ ] 如需沉淀页面原始结构，新增 `html/`（或 `raw/`）目录，记录采集方式与时间戳（避免“过期 DOM”误导）
- [ ] 如果存在采集脚本或导入脚本，在本目录补充 `scripts/` 并记录使用方式（依赖、参数、输出）

