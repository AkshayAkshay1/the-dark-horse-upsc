import Link from "next/link";
import { toppers } from "@/lib/courses";

const stats = [
  { label: "Total Selections", value: "50+" },
  { label: "Top 100 Ranks", value: "8" },
  { label: "Top 200 Ranks", value: "15" },
  { label: "First-Attempt Clears", value: "22" },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const avatarColors = [
  "bg-charcoal",
  "bg-emerald-700",
  "bg-blue-700",
  "bg-purple-700",
  "bg-rose-700",
  "bg-amber-700",
  "bg-teal-700",
  "bg-indigo-700",
];

export default function ResultsPage() {
  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <span className="badge badge-gold mb-4 inline-block">
            Proven Results
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our <span className="text-gold">Selections</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Meet the aspirants who trusted The Dark Horse and emerged
            successful. Their journeys are proof that the right strategy,
            combined with consistent effort, delivers results.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-charcoal sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {toppers.map((topper, idx) => (
            <div
              key={`${topper.name}-${topper.year}`}
              className="card flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${
                    avatarColors[idx % avatarColors.length]
                  }`}
                >
                  {getInitials(topper.name)}
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">
                    {topper.name}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="badge badge-gold">
                      AIR {topper.rank}
                    </span>
                    <span className="text-xs font-medium text-text-muted">
                      CSE {topper.year}
                    </span>
                  </div>
                </div>
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-text-secondary">
                &ldquo;{topper.testimonial}&rdquo;
              </blockquote>

              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs text-text-muted">
                  <span className="font-medium text-text-secondary">
                    Course:
                  </span>{" "}
                  {topper.course}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Your name could be here next year.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Join The Dark Horse and start your journey toward the civil services.
            The right strategy makes all the difference.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/courses" className="btn-gold">
              Explore Courses
            </Link>
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              Register Free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
