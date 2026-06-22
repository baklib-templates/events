# Baklib CMS — 会议与活动主题（简体中文说明）

面向 Baklib 站点的轻量 **会议 / 活动 / 网络研讨会** 主题：提供会议日程分会场、演讲嘉宾展示、会议资料/资源下载、活动新闻发布等功能，样式基于 Tailwind CSS。

模板 git 地址：https://github.com/baklib-templates/events

---

## 功能概览

目录结构

| 路径                          | 说明                                                  |
| ----------------------------- | ----------------------------------------------------- |
| `templates/`                  | 页面模板                                              |
| `snippets/`                   | 可复用片段                                            |
| `layout/`                     | 全站布局 `theme.liquid`                               |
| `config/settings_schema.json` | 主题设置定义                                          |
| `locales/`                    | 前台文案（`*.json`）与 schema 翻译（`*.schema.json`） |
| `seeds/`                      | 示例站点与页面（**默认英文**）                        |
| `assets/`                     | 构建后的 CSS/JS                                       |
| `src/`                        | 样式与 JS 源码                                        |

---

- **首页**（`templates/index.liquid`）：会议/活动首页，支持日程分类、状态（即将开始、进行中、已结束）展示、以及快速搜索与标签筛选。
- **日程/分会场页**（`templates/channel.liquid`）：展示分会场详情、日程安排、关联新闻、演讲嘉宾与会议资料。
- **文章页**（`templates/page.article.liquid`）：活动相关新闻与通告文章。
- **资源页**（`templates/page.asset.liquid`）：会议资料、PPT、讲义等资源展示与下载。
- **嘉宾页**（`templates/page.person.liquid`）：演讲嘉宾介绍与头像展示。
- **搜索**（`templates/search.liquid`）、**标签列表**（`templates/tag.liquid`）。

---

## 效果预览

|                首页 (活动网格)                 |                 封面 (缩略图)                  |
| :-------------------------------------------: | :-------------------------------------------: |
|   ![首页](assets/images/theme/en/index.png)    |   ![封面](assets/images/theme/en/cover.png)    |
|                  **文章页**                    |                 **演讲嘉宾页**                 |
| ![文章页](assets/images/theme/en/page.article.png) | ![演讲嘉宾](assets/images/theme/en/page.person.png) |

---

## 安装教程

在 Baklib 模板市场中找到【Events】，点击安装，即可完成。

|                  1. 选择并安装主题                  |                    2. 活动/会议结构配置                     |                   3. 活动/会议设置                   |
| :------------------------------------------------: | :-------------------------------------------------------: | :--------------------------------------------------: |
| ![安装主题](assets/images/guides/001_site-install.png) | ![活动结构](assets/images/guides/002_event-structure.png) | ![活动设置](assets/images/guides/003_event-settings.png) |

---

## 其它文档

- 英文总览：[README.md](./README.md)
- 主题帮助：[www.baklib.com/themes](https://www.baklib.com/themes/events)
