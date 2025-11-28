import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { UglyStamp } from "./ugly-stamp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tinomazorodze.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Tino Mazorodze",
    template: "%s | Tino Mazorodze",
  },
  description:
    "Daylight programmer (NextJS, React Native, Typescript), Midnight gamer (Dota 2, Euro Trucks, Albion Online).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <UglyStamp />
      </body>
    </html>
  );
}
