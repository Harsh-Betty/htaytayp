"use client";
import { Fragment, useState, useRef, useEffect } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { statusCodes } from "@/content/codes";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(statusCodes);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Filter results based on query
  useEffect(() => {
    if (query) {
      const filtered = statusCodes.filter(
        (code) =>
          code.code.toString().includes(query) ||
          code.title.toLowerCase().includes(query.toLowerCase()) ||
          code.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(statusCodes);
    }
  }, [query]);

  const handleSelect = (code: number) => {
    router.push(`/${code}`);
    setQuery("");
  };

  return (
    <Popover className="relative">
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {({ open, close }) => (
        <>
          <PopoverButton className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <span className="font-medium">Search</span>
          </PopoverButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
            afterEnter={() => inputRef.current?.focus()}
          >
            <PopoverPanel className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg overflow-hidden z-[9999] border border-gray-200">
              <div className="p-3 border-b border-gray-200">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for HTTP status codes..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2"
                  style={
                    {
                      borderColor: "var(--primary)",
                      "--tw-ring-color": "var(--primary)",
                    } as React.CSSProperties
                  }
                />
              </div>

              <div className="max-h-64 overflow-y-auto py-2">
                {results.length === 0 ? (
                  <div className="px-4 py-3 text-gray-500 italic text-center">
                    No results found. Try a different search.
                  </div>
                ) : (
                  results.map((code) => (
                    <button
                      key={code.code}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                      onClick={() => {
                        handleSelect(code.code);
                        close();
                      }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-md overflow-hidden relative">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${code.gifPath})`,
                            backgroundColor: "var(--accent)",
                          }}
                        />
                      </div>
                      <div className="ml-3">
                        <div className="font-medium">
                          {code.code} {code.title}
                        </div>
                        <div className="text-sm text-gray-500 truncate">
                          {code.description}
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
