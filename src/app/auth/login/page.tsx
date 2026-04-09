"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(
        `Login attempted with:\nEmail: ${email}\nRemember me: ${rememberMe}`
      );
    }, 600);
  }

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
            Welcome back
          </h2>
          <p className="mb-8 text-sm text-text-muted">
            Sign in to access your courses and dashboard.
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm text-charcoal placeholder-text-muted outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm text-charcoal placeholder-text-muted outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-border text-gold accent-gold focus:ring-gold"
                />
                <span className="text-sm text-text-muted">Remember me</span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-sm font-medium text-gold-dark transition-colors hover:text-gold"
              >
                Forgot password?
              </Link>
            </div>

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
                  Signing in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-text-muted">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="font-semibold text-gold-dark transition-colors hover:text-gold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
