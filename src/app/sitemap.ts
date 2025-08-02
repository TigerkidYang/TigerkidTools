import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
import { blogs } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://tigerkidtools.com";

  // 使用固定日期而不是动态的 new Date()
  const siteLastModified = new Date("2025-08-01T00:00:00.000Z");

  const toolUrls = tools.map((tool) => ({
    url: `${siteUrl}/tools/${tool.slug}`,
    lastModified: new Date(tool.publishedDate),
    changeFrequency: "weekly" as const, // 改为weekly，表示活跃更新
    priority: 0.9,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${siteUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "never" as const, // 博客文章发布后很少修改
    priority: 0.6,
  }));

  return [
    {
      url: siteUrl,
      lastModified: siteLastModified,
      changeFrequency: "weekly" as const, // 首页经常更新
      priority: 1,
    },
    {
      url: `${siteUrl}/tools`,
      lastModified: siteLastModified,
      changeFrequency: "weekly" as const, // 工具页面可能添加新工具
      priority: 0.8,
    },
    ...toolUrls,
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(blogs[0].date), // 使用最新博客的日期
      changeFrequency: "monthly" as const, // 博客列表页面月度更新
      priority: 0.5,
    },
    ...blogUrls,
    {
      url: `${siteUrl}/about`,
      lastModified: new Date("2025-08-01T00:00:00.000Z"), // About页面的创建日期
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];
}
