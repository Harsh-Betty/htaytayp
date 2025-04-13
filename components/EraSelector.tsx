"use client";
import { Fragment } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useTheme, EraTheme, eraThemeColors } from "@/context/ThemeContext";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const eraData: { era: EraTheme; label: string; year: string }[] = [
  { era: "default", label: "Eras Tour", year: "Default" },
  { era: "debut", label: "Debut", year: "2006" },
  { era: "fearless", label: "Fearless", year: "2008" },
  { era: "speakNow", label: "Speak Now", year: "2010" },
  { era: "red", label: "Red", year: "2012" },
  { era: "1989", label: "1989", year: "2014" },
  { era: "reputation", label: "Reputation", year: "2017" },
  { era: "lover", label: "Lover", year: "2019" },
  { era: "folklore", label: "Folklore", year: "2020" },
  { era: "evermore", label: "Evermore", year: "2020" },
  { era: "midnights", label: "Midnights", year: "2022" },
  {
    era: "theTorturedPoetsDepart",
    label: "The Tortured Poets Depart",
    year: "2023",
  },
];

export default function EraSelector() {
  const { currentEra, setCurrentEra } = useTheme();

  // Find current era data
  const currentEraData =
    eraData.find((e) => e.era === currentEra) || eraData[0];

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton
            className="flex items-center space-x-2 px-4 py-2 rounded-full text-white transition-all focus:outline-none"
            style={{ backgroundColor: eraThemeColors[currentEra].primary }}
          >
            <span className="font-medium">{currentEraData.label}</span>
            <span className="text-xs opacity-80">{currentEraData.year}</span>
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
            <PopoverPanel className="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg py-1 z-[9999] border border-gray-200">
              {eraData.map((era) => (
                <button
                  key={era.era}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
                  onClick={() => setCurrentEra(era.era)}
                >
                  <span className="text-black">{era.label}</span>
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
