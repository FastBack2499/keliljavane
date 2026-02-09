import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(145deg, rgba(49,175,94,1) 0%, rgba(16,83,52,1) 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700, marginBottom: 18 }}>
          {"Kalil Javaneh"}
        </div>
        <div style={{ fontSize: 34, opacity: 0.9 }}>{"Kalil Javaneh"}</div>
      </div>
    ),
    size
  );
}
