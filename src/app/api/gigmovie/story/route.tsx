/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const WIDTH = 1080;
const HEIGHT = 1920;
const SERIF_FONT_URL =
  "https://raw.githubusercontent.com/google/fonts/main/ofl/dmserifdisplay/DMSerifDisplay-Regular.ttf";

let serifFontPromise: Promise<ArrayBuffer | null> | null = null;

function clean(value: string | null, max: number) {
  return (value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function safeHttpUrl(value: string | null) {
  if (!value) return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : "";
  } catch {
    return "";
  }
}

function upgradeBloggerImageUrl(value: string) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    if (
      host.includes("googleusercontent.com") ||
      host.includes("blogspot.com") ||
      host.includes("ggpht.com")
    ) {
      url.pathname = url.pathname.replace(
        /\/(?:s\d+|w\d+(?:-h\d+)?(?:-[a-z])?)\//i,
        "/s1600/",
      );
    }
    return url.toString();
  } catch {
    return value;
  }
}

async function loadSerifFont() {
  if (!serifFontPromise) {
    serifFontPromise = fetch(SERIF_FONT_URL, { cache: "force-cache" })
      .then((response) => (response.ok ? response.arrayBuffer() : null))
      .catch(() => null);
  }
  return serifFontPromise;
}

async function resolveImageSource(rawValue: string | null) {
  const safe = safeHttpUrl(rawValue);
  if (!safe) return "";

  const upgraded = upgradeBloggerImageUrl(safe);

  try {
    const response = await fetch(upgraded, {
      cache: "force-cache",
      headers: {
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 GigMovieStory/1.0",
      },
    });

    if (!response.ok) return upgraded;

    const contentType = response.headers.get("content-type") || "image/jpeg";
    if (!contentType.startsWith("image/")) return upgraded;

    const buffer = Buffer.from(await response.arrayBuffer());
    if (!buffer.length || buffer.length > 6_000_000) return upgraded;

    return `data:${contentType};base64,${buffer.toString("base64")}`;
  } catch {
    return upgraded;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = clean(searchParams.get("title"), 140) || "Gig Movie";
  const excerpt = clean(searchParams.get("excerpt"), 300);
  const image = await resolveImageSource(searchParams.get("image"));
  const serifFont = await loadSerifFont();

  const titleSize = title.length > 92 ? 62 : title.length > 68 ? 70 : title.length > 48 ? 78 : 88;

  const options: ConstructorParameters<typeof ImageResponse>[1] = {
    width: WIDTH,
    height: HEIGHT,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
      "Content-Disposition": 'inline; filename="gig-movie-story.png"',
    },
  };

  if (serifFont) {
    options.fonts = [
      {
        name: "GigMovieSerif",
        data: serifFont,
        weight: 400,
        style: "normal",
      },
    ];
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f7f1e8",
          color: "#1b1815",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: 930,
            display: "flex",
            overflow: "hidden",
            background: "linear-gradient(145deg,#15283a,#07111e)",
          }}
        >
          {image ? (
            <img
              src={image}
              alt=""
              width={WIDTH}
              height={930}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : null}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background:
                "linear-gradient(180deg,rgba(7,15,24,.16) 0%,rgba(7,15,24,.04) 45%,rgba(7,15,24,.34) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 70,
              top: 62,
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "rgba(255,255,255,.96)",
              fontSize: 23,
              fontWeight: 700,
              letterSpacing: 8,
            }}
          >
            <span style={{ color: "#9d3941", fontSize: 26 }}>✦</span>
            GIG MOVIE
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: -110,
            top: 842,
            width: 1320,
            height: 150,
            display: "flex",
            background: "#f7f1e8",
            transform: "rotate(4deg)",
            boxShadow: "0 -1px 0 rgba(117,96,72,.16)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 910,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            padding: "50px 80px 56px",
            background: "#f7f1e8",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 26,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 8,
              color: "#2e2924",
            }}
          >
            <span style={{ color: "#7b2028", fontSize: 24 }}>✦</span>
            GIG MOVIE
          </div>

          <div
            style={{
              width: 68,
              height: 4,
              display: "flex",
              background: "#7b2028",
              marginBottom: 27,
            }}
          />

          <div
            style={{
              display: "flex",
              maxWidth: 865,
              marginBottom: 28,
              fontFamily: serifFont ? "GigMovieSerif" : "serif",
              fontSize: titleSize,
              lineHeight: 0.98,
              letterSpacing: -1.8,
            }}
          >
            {title}
          </div>

          {excerpt ? (
            <div
              style={{
                display: "flex",
                maxWidth: 835,
                color: "#4a433c",
                fontFamily: serifFont ? "GigMovieSerif" : "serif",
                fontSize: 29,
                lineHeight: 1.38,
              }}
            >
              {excerpt}
            </div>
          ) : null}

          <div style={{ flex: 1, display: "flex" }} />

          <div
            style={{
              position: "absolute",
              right: -28,
              bottom: 28,
              width: 285,
              height: 470,
              display: "flex",
              opacity: 0.22,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 145,
                top: 38,
                width: 3,
                height: 420,
                display: "flex",
                background: "#9f896f",
                transform: "rotate(22deg)",
                borderRadius: 99,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 55,
                top: 95,
                width: 92,
                height: 155,
                display: "flex",
                border: "3px solid #9f896f",
                borderRadius: "70% 10% 70% 10%",
                transform: "rotate(-31deg)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 147,
                top: 35,
                width: 88,
                height: 170,
                display: "flex",
                border: "3px solid #9f896f",
                borderRadius: "10% 70% 10% 70%",
                transform: "rotate(20deg)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 40,
                top: 255,
                width: 95,
                height: 160,
                display: "flex",
                border: "3px solid #9f896f",
                borderRadius: "70% 10% 70% 10%",
                transform: "rotate(-36deg)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 150,
                top: 220,
                width: 92,
                height: 165,
                display: "flex",
                border: "3px solid #9f896f",
                borderRadius: "10% 70% 10% 70%",
                transform: "rotate(26deg)",
              }}
            />
          </div>

          <div
            style={{
              width: 760,
              display: "flex",
              alignItems: "center",
              gap: 28,
              paddingTop: 28,
              borderTop: "1px solid #d7cdbf",
            }}
          >
            <div
              style={{
                width: 82,
                height: 82,
                flexShrink: 0,
                borderRadius: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#6f1821",
                color: "white",
                fontFamily: serifFont ? "GigMovieSerif" : "serif",
                fontSize: 44,
              }}
            >
              ✎
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  color: "#7b2028",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: 6,
                  textTransform: "uppercase",
                }}
              >
                Devamı blogda
              </span>
              <span
                style={{
                  fontFamily: serifFont ? "GigMovieSerif" : "serif",
                  fontSize: 45,
                  letterSpacing: -0.8,
                }}
              >
                blog.okdere.com&nbsp;&nbsp;→
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 24,
              color: "#6d645a",
              fontSize: 16,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#7b2028", fontSize: 20 }}>●</span>
            Yeni yazı yayında
          </div>
        </div>
      </div>
    ),
    options,
  );
}
