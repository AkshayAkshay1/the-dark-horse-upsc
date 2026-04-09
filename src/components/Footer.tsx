import Link from "next/link";
import { Mail, Play, Send } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Test Series", href: "/test-series" },
  { name: "Free Resources", href: "/free-resources" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const courseLinks = [
  { name: "Current Affairs Compass", href: "/courses/current-affairs-compass" },
  { name: "Prelims Test Series", href: "/courses/prelims-test-series-summary" },
  { name: "Toppers' Copy Compass", href: "/courses/toppers-copy-compass" },
  { name: "PYQ Analytics", href: "/courses/pyq-analytics" },
];

const connectLinks = [
  {
    name: "thedarkhorseupsc@gmail.com",
    href: "mailto:thedarkhorseupsc@gmail.com",
    icon: Mail,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@darkhorsecse",
    icon: Play,
  },
  {
    name: "Telegram",
    href: "https://t.me/darkhorsecse",
    icon: Send,
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold tracking-[0.2em] text-white">
                THE DARK HORSE
              </span>
              <span className="mt-1 h-[2px] w-10 bg-gold" />
              <span className="mt-1 text-xs tracking-[0.35em] text-gold-light">
                UPSC CSE
              </span>
            </div>
            <p className="mt-4 text-sm font-medium italic text-gold-light">
              &ldquo;Because UPSC demands more than information.&rdquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              A platform built for serious UPSC aspirants who believe in
              strategy, depth, and disciplined preparation. We help you go
              beyond surface-level knowledge to develop answer-writing mastery
              and analytical thinking.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <span className="mt-2 block h-[2px] w-8 bg-gold" />
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-gold-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Courses
            </h3>
            <span className="mt-2 block h-[2px] w-8 bg-gold" />
            <ul className="mt-4 space-y-3">
              {courseLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-gold-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <span className="mt-2 block h-[2px] w-8 bg-gold" />
            <ul className="mt-4 space-y-4">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 text-sm text-gray-400 transition-colors duration-200 hover:text-gold-light"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-200 group-hover:border-gold/40 group-hover:bg-gold/10">
                      <link.icon size={16} className="text-gold" />
                    </span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500">
            &copy; 2025 The Dark Horse UPSC CSE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-gray-500 transition-colors hover:text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 transition-colors hover:text-gray-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/refund-policy"
              className="text-xs text-gray-500 transition-colors hover:text-gray-300"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
