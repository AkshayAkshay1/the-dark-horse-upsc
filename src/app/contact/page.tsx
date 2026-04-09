"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const subjects = [
  "General Inquiry",
  "Course Information",
  "Technical Support",
  "Feedback",
  "Partnership / Collaboration",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!form.subject) {
      setError("Please select a subject.");
      return;
    }
    if (!form.message.trim()) {
      setError("Please enter your message.");
      return;
    }
    if (form.message.trim().length < 10) {
      setError("Message should be at least 10 characters long.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 800);
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm text-charcoal placeholder-text-muted outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";

  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            Have a question about our courses? Need technical help? Or just want
            to say hello? We&apos;re here for you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form — 3 cols */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-white p-8 shadow-sm sm:p-10">
              <h2 className="mb-1 text-xl font-semibold text-charcoal">
                Send us a message
              </h2>
              <p className="mb-8 text-sm text-text-muted">
                Fill out the form and we&apos;ll get back to you as soon as
                possible.
              </p>

              {/* Success Message */}
              {success && (
                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  Thank you! Your message has been sent. We typically respond
                  within 24 hours.
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-text-secondary"
                    >
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-text-secondary"
                    >
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone + Subject row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-text-secondary"
                    >
                      Phone{" "}
                      <span className="text-text-muted">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="10-digit number"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-text-secondary"
                    >
                      Subject <span className="text-danger">*</span>
                    </label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-text-secondary"
                  >
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us how we can help..."
                    className={inputClass + " resize-none"}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="opacity-25"
                        />
                        <path
                          d="M4 12a8 8 0 018-8"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          className="opacity-75"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info — 2 cols */}
          <div className="space-y-8 lg:col-span-2">
            {/* Email */}
            <div className="card">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal">Email</h3>
              <a
                href="mailto:thedarkhorseupsc@gmail.com"
                className="mt-1 block text-sm text-gold-dark transition-colors hover:text-gold"
              >
                thedarkhorseupsc@gmail.com
              </a>
              <p className="mt-2 text-xs text-text-muted">
                We typically respond within 24 hours.
              </p>
            </div>

            {/* YouTube */}
            <div className="card">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal">YouTube</h3>
              <a
                href="https://youtube.com/@darkhorsecse"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-gold-dark transition-colors hover:text-gold"
              >
                @darkhorsecse
              </a>
              <p className="mt-2 text-xs text-text-muted">
                Free lectures, PYQ analysis, and strategy sessions.
              </p>
            </div>

            {/* Telegram */}
            <div className="card">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal">Telegram</h3>
              <a
                href="https://t.me/darkhorsecse"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-gold-dark transition-colors hover:text-gold"
              >
                t.me/darkhorsecse
              </a>
              <p className="mt-2 text-xs text-text-muted">
                Join our community for daily updates and discussions.
              </p>
            </div>

            {/* Response time notice */}
            <div className="rounded-xl border border-gold/20 bg-gold/5 p-6">
              <div className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-charcoal">
                    Response Time
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    We typically respond within 24 hours. For urgent queries,
                    reach out on Telegram for faster responses.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="text-center">
              <p className="text-sm text-text-muted">
                Looking for quick answers?
              </p>
              <Link
                href="/faq"
                className="mt-1 inline-block text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
              >
                Check our FAQs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
