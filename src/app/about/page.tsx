import Link from "next/link";

const pillars = [
  {
    title: "PYQ-Driven Approach",
    description:
      "Every strategy we build starts from UPSC's own question papers. We reverse-engineer the exam, mapping PYQ patterns from 2011 to 2025 across CSE, CAPF, CDS, and NDA to help you focus on what UPSC actually asks.",
    icon: (
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quality over Quantity",
    description:
      "We don't drown you in 500-page PDFs. Our test explanations are 9-10 pages. Our current affairs are syllabus-mapped. Every resource is designed to save you time and build real understanding.",
    icon: (
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Structured Answer Writing",
    description:
      "Content is nothing without the skill to present it. We teach you how toppers structure their answers, build introductions, and deliver conclusions that leave an impression on the examiner.",
    icon: (
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Akshay Kumar",
    role: "Founder & Lead Mentor",
    initials: "AK",
    color: "bg-charcoal",
    bio: "UPSC aspirant turned educator. Believes that the right strategy matters more than the number of hours you put in.",
  },
  {
    name: "Divya Raghavan",
    role: "Content Head",
    initials: "DR",
    color: "bg-emerald-700",
    bio: "Former UPSC CSE qualifier with expertise in GS and current affairs curation. Obsessed with making complex topics simple.",
  },
  {
    name: "Nikhil Mehra",
    role: "Test & Analytics Lead",
    initials: "NM",
    color: "bg-blue-700",
    bio: "Data-driven educator who builds assessment frameworks that reveal what you actually know vs. what you think you know.",
  },
];

const stats = [
  { label: "Students Helped", value: "2,500+" },
  { label: "Courses & Modules", value: "15+" },
  { label: "Test Questions", value: "5,000+" },
  { label: "Selections", value: "50+" },
];

export default function AboutPage() {
  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <span className="badge badge-gold mb-4 inline-block">Our Story</span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            About <span className="text-gold">The Dark Horse</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            A platform built by aspirants, for aspirants — because UPSC demands
            more than information. It demands clarity, strategy, and disciplined
            practice.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="mt-6 leading-relaxed text-text-secondary">
              The Dark Horse was founded by UPSC aspirants who experienced
              firsthand the gap between information overload and actual
              preparation. We saw countless toppers&apos; interviews saying the
              same thing:{" "}
              <em className="text-charcoal font-medium">
                &ldquo;Focus on PYQs. Write answers daily. Don&apos;t read
                everything &mdash; read the right things.&rdquo;
              </em>
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Yet the market was flooded with platforms that did the opposite
              &mdash; more PDFs, more tests, more content, with no regard for
              what actually moves the needle. We decided to build something
              different: a platform that respects your time and focuses on the
              20% of preparation that delivers 80% of results.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Every course, test, and resource at The Dark Horse is built around
              one question:{" "}
              <strong className="text-charcoal">
                &ldquo;Does this actually help an aspirant clear the exam?&rdquo;
              </strong>{" "}
              If the answer isn&apos;t a resounding yes, it doesn&apos;t make the
              cut.
            </p>
          </div>

          {/* Visual element */}
          <div className="flex items-center justify-center">
            <div className="relative rounded-2xl border border-border bg-white p-10 shadow-sm">
              <div className="absolute -top-3 left-8">
                <span className="badge badge-gold">Since 2023</span>
              </div>
              <blockquote className="text-lg italic leading-relaxed text-text-secondary">
                &ldquo;Because UPSC demands more than information. It demands
                clarity, strategy, and the discipline to focus on what
                matters.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-gold" />
                <span className="text-sm font-semibold text-charcoal">
                  The Dark Horse Philosophy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy / 3 Pillars */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Philosophy
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Three pillars that guide everything we build, teach, and recommend.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-xl border border-white/10 bg-charcoal-light p-8 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-white/5">
                  {pillar.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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

      {/* Our Mission */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title mx-auto">Our Mission</h2>
          <p className="mt-8 text-lg leading-relaxed text-text-secondary">
            Our mission is simple:{" "}
            <strong className="text-charcoal">
              help serious aspirants prepare smarter, not harder.
            </strong>{" "}
            We want to eliminate the noise and give you a clear path from Day 1
            to Interview Day. No gimmicks, no information overload &mdash; just
            sharp, purposeful preparation that respects your time and
            intelligence.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            We believe every aspirant who puts in honest effort deserves access
            to the kind of structured guidance that was once available only to
            those in Delhi coaching centers. The Dark Horse is here to level that
            playing field.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="section-title mx-auto">The Team</h2>
            <p className="mx-auto mt-6 max-w-xl text-text-muted">
              A small, focused team that understands the UPSC journey because
              we&apos;ve lived it.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="card flex flex-col items-center text-center"
              >
                {/* Avatar */}
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full ${member.color} text-xl font-bold text-white`}
                >
                  {member.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Explore our courses, try our free resources, or reach out to us
            directly. Your UPSC preparation starts here.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/courses" className="btn-gold">
              Explore Courses
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
