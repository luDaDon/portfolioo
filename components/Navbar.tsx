import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Luther Bell</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:text-blue-600 transition">
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none text-gray-700"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden">
          <nav className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
