"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    targetYear: "",
    optionalSubject: "",
    agreeTerms: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone.replace(/[\s-]/g, ""))) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!form.password) {
      setError("Please enter a password.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!form.agreeTerms) {
      setError("You must agree to the Terms & Conditions.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(
        `Registration attempted with:\nName: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nTarget Year: ${form.targetYear || "Not specified"}\nOptional: ${form.optionalSubject || "Not specified"}`
      );
    }, 600);
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm text-charcoal placeholder-text-muted outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 py-12">
      {/* Card Container */}
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-bold tracking-[0.2em] text-charcoal">
              THE DARK <span className="text-gold">HORSE</span>
            </h1>
            <span className="mx-auto mt-1 block h-[2px] w-10 bg-gold" />
            <span className="mt-1 block text-[10px] tracking-[0.35em] text-text-muted">
              UPSC CSE
            </span>
          </Link>
        </div>

        {/* Form Card */}
        <div className="rounded-xl border border-border bg-white px-8 py-10 shadow-sm">
          <h2 className="mb-1 text-xl font-semibold text-charcoal">
            Create your account
          </h2>
          <p className="mb-8 text-sm text-text-muted">
            Join The Dark Horse and start your UPSC preparation journey.
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                placeholder="Your full name"
                autoComplete="name"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="10-digit mobile number"
                autoComplete="tel"
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Password <span className="text-danger">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                className={inputClass}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Confirm Password <span className="text-danger">*</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={(e) => update("confirmPassword", e.target.value)}
                placeholder="Re-enter your password"
                autoComplete="new-password"
                className={inputClass}
              />
            </div>

            {/* Target Year + Optional Subject — side by side on desktop */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="targetYear"
                  className="mb-1.5 block text-sm font-medium text-text-secondary"
                >
                  Target Year{" "}
                  <span className="text-text-muted">(optional)</span>
                </label>
                <select
                  id="targetYear"
                  value={form.targetYear}
                  onChange={(e) => update("targetYear", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select year</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="optionalSubject"
                  className="mb-1.5 block text-sm font-medium text-text-secondary"
                >
                  Optional Subject{" "}
                  <span className="text-text-muted">(optional)</span>
                </label>
                <input
                  id="optionalSubject"
                  type="text"
                  value={form.optionalSubject}
                  onChange={(e) => update("optionalSubject", e.target.value)}
                  placeholder="e.g. Sociology"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={form.agreeTerms}
                onChange={(e) => update("agreeTerms", e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-border text-gold accent-gold focus:ring-gold"
              />
              <span className="text-sm leading-snug text-text-muted">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium text-gold-dark underline transition-colors hover:text-gold"
                >
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-gold-dark underline transition-colors hover:text-gold"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
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
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-text-muted">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-gold-dark transition-colors hover:text-gold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
