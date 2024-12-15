import HomeLayout from "@/components/home";
import { preparePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const generateMetadata = (): Metadata =>
  preparePageMetadata({
    title: "Tino Mazorodze - Programmer, gamer, and tech enthusiast",
    description:
      "I’m Tino, a programmer and gamer (techtinoe). I love developing open source projects, playing MMO games and exploring the world of technology.",
    pageUrl: "/",
  });

export default function HomePage() {
  return <HomeLayout />;
}
