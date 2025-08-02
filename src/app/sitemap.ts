import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
import { blogs } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://tigerkidtools.com";

  // Use fixed dates instead of dynamic new Date()
  const siteLastModified = new Date("2025-08-01T00:00:00.000Z");

  const toolUrls = tools.map((tool) => ({
    url: `${siteUrl}/tools/${tool.slug}`,
    lastModified: new Date(tool.publishedDate),
    changeFrequency: "weekly" as const, // Changed to weekly for active updates
    priority: 0.9,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${siteUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "never" as const, // Blog posts rarely change after publication
    priority: 0.6,
  }));

  return [
    {
      url: siteUrl,
      lastModified: siteLastModified,
      changeFrequency: "weekly" as const, // Homepage updates frequently
      priority: 1,
    },
    {
      url: `${siteUrl}/tools`,
      lastModified: siteLastModified,
      changeFrequency: "weekly" as const, // Tools page may add new tools
      priority: 0.8,
    },
    ...toolUrls,
    {
      url: `${siteUrl}/blog`,
      lastModified:
        blogs.length > 0 ? new Date(blogs[0].date) : siteLastModified, // Use latest blog date, or site date if no blogs
      changeFrequency: "monthly" as const, // Blog list page updates monthly
      priority: 0.5,
    },
    ...blogUrls,
    {
      url: `${siteUrl}/about`,
      lastModified: new Date("2025-08-01T00:00:00.000Z"), // About page creation date
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];
}
