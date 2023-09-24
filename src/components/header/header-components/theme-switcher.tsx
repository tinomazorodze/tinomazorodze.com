import Moon from "@/components/icons/moon";
import Sun from "@/components/icons/sun";
import System from "@/components/icons/system";
import ClickOutside from "@/lib/click-outside";
import { useToggleTheme } from "@/lib/hooks/use-toggle-theme";
import { useState } from "react";
import cn from 'clsx';
import ChevronRight from "@/components/icons/chevron-right";
import Cross from "@/components/icons/cross";

interface ThemeIconProps {
  theme?: string;
  width: number;
  height: number;
}

const ThemeIcon = ({ theme, ...props }: ThemeIconProps) => {
  switch (theme) {
    case 'light':
      return <Sun {...props} />;

    case 'dark':
      return <Moon {...props} />;

    default:
      return <System {...props} />;
  }
};

export default function ThemeSwitcher() {
  const [display, setDisplay] = useState(false);
  const { theme, themes, setTheme } = useToggleTheme();

  return (
    <ClickOutside active={display} onClick={() => setDisplay(false)}>
      <div className="relative">
        <div
          className="flex items-center relative"
          onClick={() => setDisplay(!display)}
        >
          <button
            className={
              'hover:text-primaryColor'
            }
            aria-label="Theme Switcher"
          >
            <span className="flex flex-shrink items-center">
              <ThemeIcon width={20} height={20} theme={theme} />
              <span className={cn('capitalize leading-none ml-2 hidden md:block')}>
                {theme}
              </span>
            </span>
          </button>
        </div>
        <div className="absolute top-0 right-0">
          {themes.length && display ? (
            <div
              className={
                'fixed shadow-lg right-0 top-8 rounded-lg mt-[12px] md:mt-12 lg:mt-2 origin-top-right w-full h-full outline-none bg-accent-0 z-40 lg:absolute lg:border lg:border-accent-1 lg:shadow-lg lg:w-56 lg:h-auto'
              }
            >
              <div className="flex flex-row justify-end px-6 pt-4">
                <button
                  className="md:hidden"
                  onClick={() => setDisplay(false)}
                  aria-label="Close panel"
                >
                  <Cross className="h-6 w-6" />
                </button>
              </div>
              <ul>
                {themes.map((t: string) => (
                  <li key={t}>
                    <button
                      className="flex w-full capitalize cursor-pointer px-6 py-3 transition ease-in-out duration-150 text-primary leading-6 font-medium items-center hover:bg-accent-2"
                      role={'link'}
                      onClick={() => {
                        setTheme(t);
                        setDisplay(false);
                      }}
                    >
                      {t}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </ClickOutside>
  )
}
