import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raindrops - Audio Player Embed",
  description: "Embeddable rain sounds audio player",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 p-0 overflow-hidden">{children}</body>
    </html>
  );
}
