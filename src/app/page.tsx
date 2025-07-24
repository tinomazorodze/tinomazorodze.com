import { Metadata } from "next";
import { preparePageMetadata } from "@/lib/metadata";
import HomeWrapper from "./wrapper";

export function generateMetadata(): Metadata {
  return preparePageMetadata({
    title: "Tino Mazorodze - Daylight Programmer, Midnight Gamer",
    description:
      "Daylight programmer (NextJS, React Native, Typescript), Midnight gamer (Dota 2, Euro Trucks, Albion Online).",
    pageUrl: "/",
    imageUrl: "/banner.webp",
  });
}

export default function HomePage() {
  return <HomeWrapper />;
}
