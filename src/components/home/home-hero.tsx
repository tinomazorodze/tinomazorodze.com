import Link from "next/link";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SteamIcon,
  YoutubeIcon,
} from "../icons/social-icons";

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function HomeHero() {
  return (
    <section className="mt-9 flex-none">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Daylight Programmer & Midnight Gamer.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Tino Mazorodze, a frontend developer and Dota 2 player. To my
          fellow programmers you can contribute and work together with me on my{" "}
          <Link
            href="https://github.com/tinomazorodze?tab=repositories"
            className="font-medium text-yellow-600 hover:underline"
          >
            open source projects on github
          </Link>{" "}
          . You can watch my coding and gaming sessions on my{" "}
          <Link
            href="https://www.twitch.tv/techtinoe"
            className="font-medium text-yellow-600 hover:underline"
          >
            twitch channel as techtinoe
          </Link>
          .
        </p>
        <div className="mt-6 flex gap-6">
          <SocialLink
            href="https://steamcommunity.com/id/techtinooe/"
            aria-label="Follow on Steam"
            icon={SteamIcon}
          />
          <SocialLink
            href="https://www.youtube.com/channel/UCFd2JkydONLWjPQOtnFdDEA"
            aria-label="Follow on X"
            icon={YoutubeIcon}
          />
          <SocialLink
            href="https://www.instagram.com/techtinoe"
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <SocialLink
            href="https://github.com/tinomazorodze"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href="https://www.linkedin.com/in/tinomazorodze"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </section>
  );
}
