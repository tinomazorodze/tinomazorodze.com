import { Container } from "../container";
import BlogsListing from "./blogs";
import HomeHero from "./home-hero";
import YoutubeBanner from "./youtube-banner";

export default function HomeLayout() {
  return (
    <main className="md:px-6 w-full">
      <Container>
        <HomeHero />
        <YoutubeBanner />
        <BlogsListing />
      </Container>
    </main>
  );
}
