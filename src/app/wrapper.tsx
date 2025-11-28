"use client";

import { useState } from "react";
import {
  Code,
  Coffee,
  Monitor,
  Moon,
  Sun,
  Gamepad2,
  Zap,
  Terminal,
  Cpu,
  Headphones,
  ChevronRight,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomeWrapper() {
  const [hoveredSide, setHoveredSide] = useState<"programmer" | "gamer" | null>(
    null
  );

  const handleGamerClick = () => {
    // Replace with your actual gamer site URL
    window.open("https://steamcommunity.com/id/techtinooe/", "_blank");
  };

  const handleDeveloperClick = () => {
    // Replace with your actual developer Github URL
    window.open("https://github.com/tinomazorodze", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Programmer Side - Top on mobile, Left on desktop */}
      <div
        className={`flex-1 bg-gradient-to-br from-zinc-50 to-white transition-all duration-700 min-h-[50vh] md:min-h-screen ${
          hoveredSide === "gamer"
            ? "md:flex-[0.3]"
            : hoveredSide === "programmer"
            ? "md:flex-[0.7]"
            : "flex-1"
        }`}
        onMouseEnter={() => setHoveredSide("programmer")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 relative">
          {/* Sun Icon */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <Sun className="w-6 h-6 md:w-8 md:h-8 text-zinc-500 animate-pulse" />
          </div>

          {/* Time Indicator */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 text-zinc-600">
            <Coffee className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">
              09:00 - 17:00
            </span>
          </div>

          <div className="text-center space-y-4 md:space-y-6 max-w-md py-10 md:py-0">
            {/* Profile Image Placeholder */}
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-zinc-400 to-zinc-500 rounded-full flex items-center justify-center ">
              <Code className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>

            <div className="space-y-3 md:space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold text-zinc-800">
                Daylight Programmer
              </h1>
              <p className="text-zinc-600 text-sm md:text-lg leading-relaxed px-4 md:px-0">
                During the day I work on various projects, turning ideas into
                reality. Anything is possible with code! Vibe coding sucks (kill
                me), but I do use AI tools sometimes.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 justify-center px-4 md:px-0">
              <Badge
                variant="secondary"
                className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 text-xs md:text-sm"
              >
                NextJS
              </Badge>
              <Badge
                variant="secondary"
                className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 text-xs md:text-sm"
              >
                React Native
              </Badge>
              <Badge
                variant="secondary"
                className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 text-xs md:text-sm"
              >
                Typescript
              </Badge>
              <Badge
                variant="secondary"
                className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 text-xs md:text-sm"
              >
                Python
              </Badge>
            </div>

            {/* Programming Tools */}
            <div className="flex justify-center gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="flex items-center gap-1 md:gap-2 text-zinc-600">
                <Terminal className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Terminal</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-zinc-600">
                <Monitor className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">VS Code</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-zinc-600">
                <Cpu className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Docker</span>
              </div>
            </div>

            {/* Click to Visit */}
            <div className="pt-2 md:pt-4">
              <Button
                onClick={handleDeveloperClick}
                className="bg-gradient-to-r from-zinc-600 to-zinc-600 hover:from-zinc-700 hover:to-zinc-700 text-white border-0 "
                size="default"
              >
                View Github Profile <ChevronRight className="h-4 w-fit" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 md:h-auto md:w-1 bg-gradient-to-r md:bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-800"></div>

      {/* Gamer Side - Bottom on mobile, Right on desktop */}
      <div
        className={`flex-1 bg-gradient-to-br from-zinc-900 to-zinc-800 transition-all duration-700 cursor-pointer min-h-[50vh] md:min-h-screen ${
          hoveredSide === "programmer"
            ? "md:flex-[0.3]"
            : hoveredSide === "gamer"
            ? "md:flex-[0.7]"
            : "flex-1"
        }`}
        onMouseEnter={() => setHoveredSide("gamer")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={handleGamerClick}
      >
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 relative">
          {/* Moon Icon */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8">
            <Moon className="w-6 h-6 md:w-8 md:h-8 text-zinc-400 animate-pulse" />
          </div>

          {/* Time Indicator */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 text-zinc-300">
            <Headphones className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">
              22:00 - 02:00
            </span>
          </div>

          <div className="text-center space-y-4 md:space-y-6 max-w-md py-10 md:py-0">
            {/* Profile Image Placeholder */}
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-zinc-600 to-zinc-600 rounded-full flex items-center justify-center ">
              <Gamepad2 className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>

            <div className="space-y-3 md:space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Midnight Gamer
              </h1>
              <p className="text-zinc-200 text-sm md:text-lg leading-relaxed px-4 md:px-0">
                At night I cool down with some gaming sessions, grinding,
                exploring and just having fun on online multiplayer games. Hit
                me up if you play any of these!
              </p>
            </div>

            {/* Gaming Badges */}
            <div className="flex flex-wrap gap-2 justify-center px-4 md:px-0">
              <Badge className="bg-zinc-600 hover:bg-zinc-700 text-white border-zinc-400 text-xs md:text-sm">
                Dota 2
              </Badge>
              <Badge className="bg-zinc-600 hover:bg-zinc-700 text-white border-zinc-400 text-xs md:text-sm">
                Euro Trucks
              </Badge>
              <Badge className="bg-zinc-600 hover:bg-zinc-700 text-white border-zinc-400 text-xs md:text-sm">
                Albion Online
              </Badge>
              <Badge className="bg-zinc-600 hover:bg-zinc-700 text-white border-zinc-400 text-xs md:text-sm">
                GTA V
              </Badge>
            </div>

            {/* Gaming Setup */}
            <div className="flex justify-center gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="flex items-center gap-1 md:gap-2 text-zinc-300">
                <Zap className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">RTX 4080</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-zinc-300">
                <Monitor className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">144Hz</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-zinc-300">
                <Headphones className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">7.1 Audio</span>
              </div>
            </div>

            {/* Click to Visit */}
            <div className="pt-2 md:pt-4">
              <Button
                className="bg-gradient-to-r from-zinc-600 to-zinc-600 hover:from-zinc-700 hover:to-zinc-700 text-white border-0"
                size="default"
              >
                Befriend on Steam <UserPlus className="ml-1 h-4 w-fit" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
