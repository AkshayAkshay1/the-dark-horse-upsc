"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const coursesDropdown = [
  { name: "Current Affairs Compass", href: "/courses/current-affairs-compass" },
  { name: "Prelims Test Series", href: "/courses/prelims-test-series-summary" },
  { name: "Toppers' Copy Compass", href: "/courses/toppers-copy-compass" },
  { name: "PYQ Analytics", href: "/courses/pyq-analytics" },
  { name: "Foundation Course", href: "/courses/foundation-course" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses", dropdown: coursesDropdown },
  { name: "Test Series", href: "/test-series" },
  { name: "Free Resources", href: "/free-resources" },
  { name: "Results", href: "/results" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal shadow-lg shadow-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start gap-0">
            <span className="text-lg font-bold tracking-[0.2em] text-white lg:text-xl">
              THE DARK HORSE
            </span>
            <span className="h-[2px] w-10 bg-gold" />
            <span className="mt-0.5 text-[10px] font-medium tracking-[0.35em] text-gold-light lg:text-xs">
              UPSC CSE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setCoursesOpen(true)}
                  onMouseLeave={() => setCoursesOpen(false)}
                >
                  <button className="group flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white">
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        coursesOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full w-64 pt-2 transition-all duration-200 ${
                      coursesOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-lg border border-white/10 bg-charcoal-light shadow-xl shadow-black/30">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`group flex items-center gap-3 px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white ${
                            idx !== link.dropdown!.length - 1
                              ? "border-b border-white/5"
                              : ""
                          }`}
                        >
                          <ChevronRight
                            size={14}
                            className="text-gold opacity-0 transition-opacity group-hover:opacity-100"
                          />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              )
            )}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/auth/login"
              className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="rounded-md bg-gold px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-light"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-md p-2 text-gray-300 transition-colors hover:text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-over Menu */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm transform bg-charcoal shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Close Button & Logo */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-[0.2em] text-white">
                THE DARK HORSE
              </span>
              <span className="h-[2px] w-8 bg-gold" />
              <span className="mt-0.5 text-[10px] tracking-[0.35em] text-gold-light">
                UPSC CSE
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-400 transition-colors hover:text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`text-gold transition-transform duration-200 ${
                          mobileCoursesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileCoursesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 space-y-1 border-l border-gold/30 py-2 pl-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-400 transition-colors hover:text-white"
                          >
                            <ChevronRight size={12} className="text-gold" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </nav>

          {/* Mobile Auth Buttons */}
          <div className="border-t border-white/10 px-6 py-6">
            <div className="flex flex-col gap-3">
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border border-white/20 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:border-white/40"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg bg-gold px-4 py-3 text-center text-sm font-semibold text-charcoal transition-colors hover:bg-gold-light"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
