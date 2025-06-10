"use client";

import { useState, useRef, useEffect } from "react";
import { Metadata } from "next";

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

export default function AudioPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  // Add oEmbed discovery link to head
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.type = "application/json+oembed";
    link.href = `/api/oembed?url=${encodeURIComponent(
      window.location.href
    )}&format=json`;
    link.title = "CircuitCart oEmbed Profile: JSON";
    document.head.appendChild(link);

    return () => {
      // Cleanup: remove the link when component unmounts
      const existingLink = document.querySelector(
        'link[type="application/json+oembed"]'
      );
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value) / 100;
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Raindrops</h1>
          <p className="text-blue-200">Peaceful rain sounds for relaxation</p>
        </div>

        <audio ref={audioRef} src="/raindrops.mp3" preload="metadata" />

        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-blue-200 mb-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={progressPercentage}
              onChange={handleSeek}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
            <div
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg pointer-events-none"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <button
            onClick={togglePlayPause}
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {isPlaying ? (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <svg
            className="w-5 h-5 text-blue-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
            className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
