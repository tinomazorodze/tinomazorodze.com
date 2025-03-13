import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { unstable_ViewTransition as ViewTransition } from "react";

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
  description: "Frontend developer, gamer, tech enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            <ViewTransition name="test">{children}</ViewTransition>
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: "@techtinoe", url: "https://x.com/techtinoe" },
    { name: "youtube", url: "https://www.youtube.com/@techtinoe" },
    { name: "linkedin", url: "https://www.linkedin.com/in/tinomazorodze" },
    { name: "github", url: "https://github.com/tinomazorodze" },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
