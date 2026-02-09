import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "\u06A9\u0644\u06CC\u0644 \u062C\u0648\u0627\u0646\u0647",
    short_name: "\u06A9\u0644\u06CC\u0644 \u062C\u0648\u0627\u0646\u0647",
    description: "Kalil Javaneh",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f5",
    theme_color: "#31AF5E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
