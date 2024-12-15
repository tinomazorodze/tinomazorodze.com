import { Providers } from "@/components/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BaseLayout } from "@/components/layouts/base-layout";
import { PersonSchema, WebsiteSchema } from "@/lib/schemas";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tino Mazorodze",
  description: "Daylight Programmer, Midnight Gamer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full">
        <WebsiteSchema />
        <PersonSchema />
        <Providers>
          <div className="flex h-full bg-zinc-50 dark:bg-black">
            <BaseLayout>
              <div className="flex w-full h-full">{children}</div>
            </BaseLayout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
