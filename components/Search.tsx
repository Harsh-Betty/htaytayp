"use client";
import { Fragment, useState, useRef, useEffect } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { statusCodes } from "@/content/codes";
import { SearchIcon } from "lucide-react";
import { StatusCode } from "@/types";
import StatusCodeModal from "./StatusCodeModal";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(statusCodes);
  const inputRef = useRef<HTMLInputElement>(null);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

  const [selectedCode, setSelectedCode] = useState<StatusCode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        buttonRef?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [buttonRef]);

  const handleSelect = (code: StatusCode) => {
    setSelectedCode(code);
    setIsModalOpen(true);
  };

  return (
    <Popover className="static">
      {({ close }) => (
        <>
          <PopoverButton
            ref={setButtonRef}
            className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2"
            style={
              {
                backgroundColor: "var(--primary)",
                color: "var(--text)",
                "--tw-ring-color": "var(--secondary)",
                "--tw-ring-offset-color": "var(--background)",
              } as React.CSSProperties
            }
          >
            <SearchIcon className="w-4 h-4" />

            <span className="hidden md:inline font-medium">Search</span>
            <kbd className="hidden md:inline-flex ml-2 items-center rounded border border-gray-200 px-1.5 text-xs text-gray-400">
              ⌘K
            </kbd>
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
            <PopoverPanel
              className="absolute top-full right-0 mt-2 max-w-full lg:max-w-lg rounded-lg shadow-lg overflow-hidden z-[9999] border"
              style={{
                backgroundColor: "var(--background)",
                borderColor: "var(--primary)",
              }}
            >
              <div
                className="p-3 border-b"
                style={{ borderColor: "var(--primary)" }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for HTTP status codes..."
                  className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2"
                  style={
                    {
                      backgroundColor: "var(--background)",
                      color: "var(--text)",
                      borderColor: "var(--primary)",
                      "--tw-ring-color": "var(--primary)",
                    } as React.CSSProperties
                  }
                />
              </div>

              <div className="max-h-64 overflow-y-auto py-2">
                {results.length === 0 ? (
                  <div
                    className="px-4 py-3 italic text-center"
                    style={{ color: "var(--text)" }}
                  >
                    No results found. Try a different search.
                  </div>
                ) : (
                  results.map((code) => (
                    <button
                      key={code.code}
                      className="max-w-full overflow-hidden text-left px-4 py-2 flex items-center hover:opacity-80"
                      style={{ color: "var(--text)" }}
                      onClick={() => {
                        handleSelect(code);
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
                      <div className="ml-3 max-w-full overflow-hidden">
                        <div className="font-medium">
                          {code.code} {code.title}
                        </div>
                        <div className="text-sm opacity-70 truncate">
                          {code.description}
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </PopoverPanel>
          </Transition>

          <StatusCodeModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            statusCode={selectedCode}
          />
        </>
      )}
    </Popover>
  );
}
