# SEO 设置指南

## 1. 自动 sitemap 生成 ✅

您的网站现在使用完全自动的 sitemap 生成！

- `src/app/sitemap.ts` - 动态生成 sitemap，自动包含所有工具和博客页面
- `src/app/robots.ts` - 动态生成 robots.txt

**不需要手动维护**：当您在 `src/lib/tools.ts` 或 `src/lib/blogs.ts` 中添加新内容时，sitemap 会自动更新。

## 2. 访问地址

部署后，您的 sitemap 和 robots.txt 将在以下地址自动生成：

- `https://tigerkidtools.com/sitemap.xml` - 动态生成的 sitemap
- `https://tigerkidtools.com/robots.txt` - 动态生成的 robots.txt

## 3. 验证 sitemap

部署后，访问以下 URL 验证 sitemap 是否正常工作：

- `https://tigerkidtools.com/sitemap.xml`
- `https://tigerkidtools.com/robots.txt`

## 4. 提交给 Google

1. 前往 [Google Search Console](https://search.google.com/search-console/)
2. 添加您的网站 `tigerkidtools.com`
3. 在"站点地图"部分提交您的 sitemap URL: `https://tigerkidtools.com/sitemap.xml`

## 5. 其他 SEO 建议

- 确保每个页面都有合适的 `<title>` 和 `<meta description>`
- 添加结构化数据（JSON-LD）
- 确保网站在移动设备上的体验良好
- 优化页面加载速度

## 文件说明

### 自动生成文件

- `src/app/sitemap.ts` - 自动生成 sitemap，包含所有工具和博客页面
- `src/app/robots.ts` - 自动生成 robots.txt

### 工作原理

当您添加新工具时：

1. 在 `src/lib/tools.ts` 中添加新工具信息
2. sitemap 会自动包含新的工具页面路径

当您添加新博客时：

1. 在 `src/lib/blogs.ts` 中添加新博客信息
2. sitemap 会自动包含新的博客页面路径

**完全自动化** - 无需手动更新任何 sitemap 文件！
