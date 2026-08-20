"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">

      <div className="max-w-6xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo / Name */}

          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-700 transition"
          >
            Luther<span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-2">

            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-600 hover:text-blue-700 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

          </div>

          {/* Desktop LinkedIn */}

          <a
            href="https://www.linkedin.com/in/luther-bell/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-700 transition"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-blue-700 text-white text-sm font-bold">
              in
            </span>

            LinkedIn
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">

            <div className="flex flex-col gap-1">

              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}

              {/* Mobile LinkedIn */}

              <a
                href="https://www.linkedin.com/in/luther-bell/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-700 transition"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-blue-700 text-white text-sm font-bold">
                  in
                </span>

                LinkedIn
              </a>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}