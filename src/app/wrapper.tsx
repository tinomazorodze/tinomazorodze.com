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
    // Replace with your actual developer Discord URL
    window.open("https://discord.gg/ZPTtkVt58H", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Programmer Side - Top on mobile, Left on desktop */}
      <div
        className={`flex-1 bg-gradient-to-br from-slate-50 to-blue-50 transition-all duration-700 min-h-[50vh] md:min-h-screen ${
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
            <Sun className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 animate-pulse" />
          </div>

          {/* Time Indicator */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 text-slate-600">
            <Coffee className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">
              09:00 - 17:00
            </span>
          </div>

          <div className="text-center space-y-4 md:space-y-6 max-w-md py-10 md:py-0">
            {/* Profile Image Placeholder */}
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Code className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>

            <div className="space-y-3 md:space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
                Daylight Programmer
              </h1>
              <p className="text-slate-600 text-sm md:text-lg leading-relaxed px-4 md:px-0">
                Crafting clean code and building digital solutions when the sun
                shines bright. Passionate about creating efficient, scalable
                applications.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 justify-center px-4 md:px-0">
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs md:text-sm"
              >
                NextJS
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 hover:bg-green-200 text-xs md:text-sm"
              >
                React Native
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800 hover:bg-purple-200 text-xs md:text-sm"
              >
                Typescript
              </Badge>
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-800 hover:bg-orange-200 text-xs md:text-sm"
              >
                Python
              </Badge>
            </div>

            {/* Programming Tools */}
            <div className="flex justify-center gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="flex items-center gap-1 md:gap-2 text-slate-600">
                <Terminal className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Terminal</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-slate-600">
                <Monitor className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">VS Code</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-slate-600">
                <Cpu className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Docker</span>
              </div>
            </div>

            {/* Click to Visit */}
            <div className="pt-2 md:pt-4">
              <Button
                onClick={handleDeveloperClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25"
                size="default"
              >
                Join Developer Discord <ChevronRight className="h-4 w-fit" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 md:h-auto md:w-1 bg-gradient-to-r md:bg-gradient-to-b from-slate-300 via-purple-500 to-slate-800"></div>

      {/* Gamer Side - Bottom on mobile, Right on desktop */}
      <div
        className={`flex-1 bg-gradient-to-br from-slate-900 to-purple-900 transition-all duration-700 cursor-pointer min-h-[50vh] md:min-h-screen ${
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
            <Moon className="w-6 h-6 md:w-8 md:h-8 text-blue-400 animate-pulse" />
          </div>

          {/* Time Indicator */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 text-purple-300">
            <Headphones className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">
              22:00 - 02:00
            </span>
          </div>

          <div className="text-center space-y-4 md:space-y-6 max-w-md py-10 md:py-0">
            {/* Profile Image Placeholder */}
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Gamepad2 className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>

            <div className="space-y-3 md:space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Midnight Gamer
              </h1>
              <p className="text-purple-200 text-sm md:text-lg leading-relaxed px-4 md:px-0">
                When darkness falls, the real adventure begins. Conquering
                virtual worlds and mastering digital challenges under the
                moonlight.
              </p>
            </div>

            {/* Gaming Badges */}
            <div className="flex flex-wrap gap-2 justify-center px-4 md:px-0">
              <Badge className="bg-purple-600 hover:bg-purple-700 text-white border-purple-400 text-xs md:text-sm">
                Dota 2
              </Badge>
              <Badge className="bg-pink-600 hover:bg-pink-700 text-white border-pink-400 text-xs md:text-sm">
                Euro Trucks
              </Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-blue-400 text-xs md:text-sm">
                Albion Online
              </Badge>
              <Badge className="bg-green-600 hover:bg-green-700 text-white border-green-400 text-xs md:text-sm">
                GTA V
              </Badge>
            </div>

            {/* Gaming Setup */}
            <div className="flex justify-center gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="flex items-center gap-1 md:gap-2 text-purple-300">
                <Zap className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">RTX 4080</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-purple-300">
                <Monitor className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">144Hz</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-purple-300">
                <Headphones className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">7.1 Audio</span>
              </div>
            </div>

            {/* Click to Visit */}
            <div className="pt-2 md:pt-4">
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25"
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
