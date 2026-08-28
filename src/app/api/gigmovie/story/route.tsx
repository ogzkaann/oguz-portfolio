/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

const WIDTH = 1080;
const HEIGHT = 1920;

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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = clean(searchParams.get("title"), 140) || "Gig Movie";
  const excerpt = clean(searchParams.get("excerpt"), 360);
  const image = safeHttpUrl(searchParams.get("image"));
  const postUrl = safeHttpUrl(searchParams.get("url"));

  const titleSize = title.length > 75 ? 62 : title.length > 48 ? 70 : 82;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f5f0e7",
          color: "#171513",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            height: 900,
            width: "100%",
            display: "flex",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(145deg,#162637,#07111d)",
          }}
        >
          {image ? (
            <img
              src={image}
              alt=""
              width={WIDTH}
              height={900}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : null}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background: "linear-gradient(180deg,rgba(6,12,20,.05),rgba(6,12,20,.48))",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 64,
              top: 62,
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "white",
              fontFamily: "Arial, sans-serif",
              fontSize: 25,
              fontWeight: 700,
              letterSpacing: 7,
            }}
          >
            <span style={{ color: "#a94949", fontSize: 28 }}>✦</span>
            GIG MOVIE
          </div>
          <div
            style={{
              position: "absolute",
              left: 64,
              bottom: 58,
              color: "rgba(255,255,255,.82)",
              fontFamily: "Arial, sans-serif",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Yeni yazı yayında
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "72px 70px 62px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 74,
              height: 5,
              background: "#7b2028",
              marginBottom: 34,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              lineHeight: 1.02,
              letterSpacing: -2.4,
              maxWidth: 930,
              marginBottom: 38,
            }}
          >
            {title}
          </div>

          {excerpt ? (
            <div
              style={{
                display: "flex",
                maxWidth: 900,
                color: "#45403b",
                fontSize: 31,
                lineHeight: 1.43,
                fontFamily: "Arial, sans-serif",
              }}
            >
              {excerpt}
            </div>
          ) : null}

          <div style={{ flex: 1, display: "flex" }} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid #d8cfc1",
              paddingTop: 34,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span
                style={{
                  color: "#7b2028",
                  fontFamily: "Arial, sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: 5,
                  textTransform: "uppercase",
                }}
              >
                Devamı blogda
              </span>
              <span style={{ fontSize: 43, letterSpacing: -1.2 }}>blog.okdere.com</span>
            </div>
            <div
              style={{
                width: 82,
                height: 82,
                borderRadius: 999,
                background: "#7b2028",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 42,
              }}
            >
              →
            </div>
          </div>

          {postUrl ? (
            <div
              style={{
                marginTop: 18,
                color: "#8f877c",
                fontFamily: "Arial, sans-serif",
                fontSize: 16,
                letterSpacing: 1,
              }}
            >
              {postUrl.replace(/^https?:\/\//, "")}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=300, s-maxage=3600",
        "Content-Disposition": 'inline; filename="gig-movie-story.png"',
      },
    },
  );
}
