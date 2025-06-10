import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");
  const format = searchParams.get("format") || "json";
  const maxwidth = parseInt(searchParams.get("maxwidth") || "400");
  const maxheight = parseInt(searchParams.get("maxheight") || "300");

  // Validate the URL - should be our audio page
  if (!url || !url.includes("/audio")) {
    return NextResponse.json(
      { error: "Invalid URL. Only audio page URLs are supported." },
      { status: 400 }
    );
  }

  // Only support JSON format for now
  if (format !== "json") {
    return NextResponse.json(
      { error: "Only JSON format is supported." },
      { status: 501 }
    );
  }

  // Get the base URL from the request - prefer the URL parameter's origin
  let baseUrl;
  try {
    const urlObj = new URL(url);
    baseUrl = `${urlObj.protocol}//${urlObj.host}`;
  } catch {
    // Fallback to request URL if URL parameter is invalid
    baseUrl = `${request.nextUrl.protocol}//${request.nextUrl.host}`;
  }

  // Calculate embed dimensions
  const width = Math.min(maxwidth, 400);
  const height = Math.min(maxheight, 300);

  const oembedResponse = {
    version: "1.0",
    type: "rich",
    title: "Raindrops - Peaceful Rain Sounds",
    author_name: "CircuitCart",
    author_url: baseUrl,
    provider_name: "CircuitCart",
    provider_url: baseUrl,
    cache_age: 3600,
    width: width,
    height: height,
    html: `<iframe src="${baseUrl}/audio/embed" width="${width}" height="${height}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>`,
    thumbnail_url: `${baseUrl}/logo.jpg`,
    thumbnail_width: 400,
    thumbnail_height: 400,
  };
  console.log("===============", oembedResponse);
  return NextResponse.json(oembedResponse, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
