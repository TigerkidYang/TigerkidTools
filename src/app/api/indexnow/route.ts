import { NextRequest, NextResponse } from "next/server";
import { tools } from "@/lib/tools";
import { blogs } from "@/lib/blogs";

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    const indexNowKey = process.env.INDEXNOW_API_KEY;
    if (!indexNowKey) {
      return NextResponse.json(
        { error: "IndexNow API key not configured" },
        { status: 500 }
      );
    }

    const indexNowEndpoint = "https://api.indexnow.org/indexnow";

    const payload = {
      host: "tigerkidtools.com",
      key: indexNowKey,
      keyLocation: `https://tigerkidtools.com/${indexNowKey}.txt`,
      urlList: urls || getAllUrls(),
    };

    const response = await fetch(indexNowEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${payload.urlList.length} URLs to IndexNow`,
        submittedUrls: payload.urlList,
      });
    } else {
      return NextResponse.json(
        {
          error: "Failed to submit to IndexNow",
          status: response.status,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

function getAllUrls() {
  const baseUrl = "https://tigerkidtools.com";
  const urls = [
    baseUrl,
    `${baseUrl}/tools`,
    `${baseUrl}/blog`,
    `${baseUrl}/about`,
  ];

  // Add all tool URLs
  tools.forEach((tool) => {
    urls.push(`${baseUrl}/tools/${tool.slug}`);
  });

  // Add all blog URLs
  blogs.forEach((blog) => {
    urls.push(`${baseUrl}/blog/${blog.slug}`);
  });

  return urls;
}

export async function GET() {
  return NextResponse.json({
    message: "IndexNow API endpoint",
    totalUrls: getAllUrls().length,
    urls: getAllUrls(),
  });
}
