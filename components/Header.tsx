"use client";
import Link from "next/link";
import EraSelector from "./EraSelector";
import Search from "./Search";

export default function Header() {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative p-4 rounded-full bg-white/10 backdrop-blur-md">
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
            aria-hidden="true"
          >
            <div className="absolute -inset-1 opacity-30 blur-3xl bg-gradient-radial from-primary to-secondary animate-pulse-slow" />
          </div>

          <Link href="/" className="flex items-center space-x-2 z-10">
            <div className="flex items-center">
              <div className="text-xl md:text-3xl hover:opacity-90 transition-opacity text-text group font-1989">
                <span className="inline-block transition-transform group-hover:rotate-3 duration-300">
                  <span className="italic">htaytayp</span>
                </span>
              </div>
            </div>
          </Link>

          <div className="flex items-center space-x-2 md:space-x-6 z-10">
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 font-medium transition-opacity text-text hover:underline"
                  >
                    HTTP Docs
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-2">
              <Search />
              <EraSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
