import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import Header from "@/app/header";
import Footer from "@/app/footer";
import clsx from "clsx";
import { SessionProvider } from "next-auth/react";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "CircuitCart | Powering Your PC, One Part at a Time!",
  description: "Powering Your PC, One Part at a Time!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atkinson.className} antialiased bg-ecBackgroundBody dark:bg-ecBackgroundBodyDark text-ecForeground dark:text-ecForegroundDark`}
      >
        <SessionProvider>
          <div
            className={clsx(
              "bg-ecBackground text-ecForeground dark:bg-ecBackgroundDark dark:text-ecForegroundDark transition-colors",
              "mb-16 mt-[4rem]"
            )}
          >
            <Header />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
