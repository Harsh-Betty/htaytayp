"use client";
import { Fragment, useEffect } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useTheme, EraTheme, eraThemeColors } from "@/context/ThemeContext";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const eraData: {
  era: EraTheme;
  label: string;
  year: string;
  shortLabel?: string;
  icon?: string;
}[] = [
  {
    era: "default",
    label: "Eras Tour",
    year: "Default",
    icon: "/albums/eras-tour.jpg",
  },
  {
    era: "debut",
    label: "Taylor Swift",
    year: "2006",
    icon: "/albums/taylor-swift.webp",
  },
  {
    era: "fearless",
    label: "Fearless",
    year: "2008",
    icon: "/albums/fearless.webp",
  },
  {
    era: "speakNow",
    label: "Speak Now",
    year: "2010",
    icon: "/albums/speak-now.webp",
  },
  { era: "red", label: "RED", year: "2012", icon: "/albums/red.webp" },
  { era: "1989", label: "1989", year: "2014", icon: "/albums/1989.webp" },
  {
    era: "reputation",
    label: "reputation",
    year: "2017",
    icon: "/albums/reputation.webp",
    shortLabel: "rep",
  },
  { era: "lover", label: "Lover", year: "2019", icon: "/albums/lover.webp" },
  {
    era: "folklore",
    label: "folklore",
    year: "2020",
    icon: "/albums/folklore.webp",
  },
  {
    era: "evermore",
    label: "evermore",
    year: "2020",
    icon: "/albums/evermore.webp",
  },
  {
    era: "midnights",
    label: "Midnights",
    year: "2022",
    icon: "/albums/midnights.webp",
  },
  {
    era: "theTorturedPoetsDepartment",
    label: "The Tortured Poets Department",
    year: "2023",
    shortLabel: "TTPD",
    icon: "/albums/ttpd.webp",
  },
];

export default function EraSelector() {
  const { currentEra, setCurrentEra } = useTheme();

  useEffect(() => {
    const storedEra = localStorage.getItem("selectedEra");
    if (storedEra) {
      setCurrentEra(storedEra as EraTheme); // Set the current era from local storage
    }
  }, [setCurrentEra]);

  const currentEraData =
    eraData.find((e) => e.era === currentEra) || eraData[0];

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <PopoverButton
            className="flex items-center space-x-2 px-4 py-2 rounded-full text-white transition-all focus:outline-none"
            style={{ backgroundColor: eraThemeColors[currentEra].primary }}
          >
            <span
              className="font-medium max-w-xs"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              {currentEraData.shortLabel
                ? currentEraData.shortLabel
                : currentEraData.label}
            </span>
            {currentEraData.icon && (
              <img
                src={currentEraData.icon}
                alt={currentEraData.label}
                className="w-4 h-4 rounded-full"
              />
            )}
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </PopoverButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-[9999] border border-gray-200">
              {eraData.map((era) => (
                <button
                  key={era.era}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
                  onClick={() => {
                    setCurrentEra(era.era);
                    localStorage.setItem("selectedEra", era.era);
                    close();
                  }}
                >
                  <div className="flex items-center gap-2 text-black">
                    <span style={{ fontFamily: "var(--heading-font)" }}>
                      {era.label}
                    </span>
                    <span className="text-xs">{era.year}</span>
                  </div>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: eraThemeColors[era.era].primary }}
                  />
                </button>
              ))}
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
