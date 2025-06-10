import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raindrops - Peaceful Rain Sounds | CircuitCart",
  description:
    "Listen to soothing raindrops sounds for relaxation, meditation, and sleep. High-quality rain audio for stress relief and focus.",
  keywords: [
    "rain sounds",
    "relaxation",
    "meditation",
    "sleep sounds",
    "nature sounds",
    "ambient audio",
    "stress relief",
  ],
  authors: [{ name: "CircuitCart" }],
  creator: "CircuitCart",
  publisher: "CircuitCart",

  // Open Graph metadata
  openGraph: {
    title: "Raindrops - Peaceful Rain Sounds",
    description:
      "Listen to soothing raindrops sounds for relaxation, meditation, and sleep. High-quality rain audio for stress relief and focus.",
    type: "website",
    url: "https://circuit-cart-theta.vercel.app/audio",
    siteName: "CircuitCart",
    images: [
      {
        url: "https://circuit-cart-theta.vercel.app/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Raindrops - Peaceful Rain Sounds",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Raindrops - Peaceful Rain Sounds",
    description:
      "Listen to soothing raindrops sounds for relaxation, meditation, and sleep. High-quality rain audio for stress relief and focus.",
    images: ["https://circuit-cart-theta.vercel.app/logo.jpg"],
    creator: "@circuitcart",
    site: "@circuitcart",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://circuit-cart-theta.vercel.app/audio",
  },

  // Audio-specific metadata
  other: {
    "audio:duration": "3600", // Approximate duration in seconds
    "audio:type": "ambient",
    "audio:genre": "nature sounds",
  },
};

export default function AudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link
          rel="alternate"
          type="application/json+oembed"
          href="/api/oembed?url=https%3A//circuit-cart-theta.vercel.app/audio&format=json"
          title="CircuitCart oEmbed Profile: JSON"
        />
      </head>
      {children}
    </>
  );
}
