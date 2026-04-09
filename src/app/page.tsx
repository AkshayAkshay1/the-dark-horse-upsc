import Link from 'next/link';
import { courses, toppers, freeResources, faqs } from '@/lib/courses';

const resourceIconColors: Record<string, string> = {
  'editorial-compass': 'bg-amber-100 text-amber-700',
  'pyq-compass': 'bg-blue-100 text-blue-700',
  'pyqpedia': 'bg-emerald-100 text-emerald-700',
  'one-pager-pyqs': 'bg-purple-100 text-purple-700',
};

const resourceIconLabels: Record<string, string> = {
  'editorial-compass': 'EC',
  'pyq-compass': 'PQ',
  'pyqpedia': 'PE',
  'one-pager-pyqs': 'OP',
};

export default function Home() {
  const previewResources = freeResources.slice(0, 4);

  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-b from-cream-dark to-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight max-w-4xl mx-auto">
            Because UPSC demands more than information.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A platform anchored in PYQs, enriched with current affairs, and refined through disciplined answer writing.
          </p>

          <p className="mt-4 text-base text-text-muted max-w-2xl mx-auto">
            Shaped by mentors who understand the pressure, the process, and the path forward.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses" className="btn-gold">
              Explore Courses
            </Link>
            <Link href="/free-resources" className="btn-outline">
              Free Resources
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '4+', label: 'Courses' },
              { value: '1000+', label: 'PYQs' },
              { value: '500+', label: 'Students' },
              { value: '14+', label: 'Sectional Tests' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold">{stat.value}</div>
                <div className="mt-1 text-sm text-text-muted font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FREE RESOURCES PREVIEW ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Free Resources</h2>
            <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
              Start here. No login, no payment. Just solid material built from PYQs and current affairs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewResources.map((resource) => (
              <Link
                key={resource.id}
                href={resource.link}
                className="card group flex flex-col"
              >
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center text-lg font-bold mb-4 ${
                    resourceIconColors[resource.id] || 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {resourceIconLabels[resource.id] || '?'}
                </div>
                <h3 className="text-lg font-semibold text-charcoal group-hover:text-gold-dark transition-colors">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">
                  {resource.description}
                </p>
                <span className="mt-4 text-sm font-medium text-gold-dark">
                  Explore &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/free-resources"
              className="text-gold-dark font-semibold hover:text-gold transition-colors text-base"
            >
              Explore All Free Resources &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHY THE DARK HORSE EXISTS ========== */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Why The Dark Horse Exists</h2>
            <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
              Three principles that shape everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'PYQs as Thinking Tools',
                description:
                  "PYQs aren't just practice — they're the syllabus in disguise. Every question reveals what UPSC values. We build everything around this insight.",
              },
              {
                title: 'Current Affairs with Syllabus Spine',
                description:
                  'Every news item mapped to where it fits in the UPSC framework. No random reading. Every article has a purpose and a syllabus connection.',
              },
              {
                title: 'Answer Writing Before Content Hoarding',
                description:
                  "Writing builds understanding. Reading alone doesn't. We prioritize structured answer practice over accumulating more notes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card border-l-4 border-l-gold"
              >
                <h3 className="text-xl font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COURSE SHOWCASE ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Our Courses</h2>
            <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
              Built for serious aspirants. Each course solves a specific problem in your preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="card group flex flex-col"
              >
                {course.badge && (
                  <span className="badge badge-gold mb-4 self-start">
                    {course.badge}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-charcoal group-hover:text-gold-dark transition-colors">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed flex-1">
                  {course.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-charcoal">
                      &#8377;{course.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-text-muted line-through">
                      &#8377;{course.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gold-dark group-hover:translate-x-1 transition-transform inline-block">
                    View Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT YOU ACTUALLY GET ========== */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">What You Actually Get</h2>
            <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
              Not vague promises. Here is what you walk away with.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Current Affairs Compass',
                description:
                  'Syllabus-mapped summaries with practice tests. Know exactly where each news item fits in your preparation.',
                color: 'bg-amber-50 text-amber-600',
                icon: 'CA',
              },
              {
                title: 'Prelims Test Explanations',
                description:
                  '50-page solutions condensed to 10 pages. Trap words highlighted. Thinking patterns decoded.',
                color: 'bg-blue-50 text-blue-600',
                icon: 'PT',
              },
              {
                title: 'Test & Review Workflow',
                description:
                  'Take tests, review mistakes, track progress. A system that turns practice into improvement.',
                color: 'bg-emerald-50 text-emerald-600',
                icon: 'TR',
              },
              {
                title: 'Answer Writing Practice',
                description:
                  "Learn from toppers' actual answer copies. Understand structure, keywords, and presentation.",
                color: 'bg-purple-50 text-purple-600',
                icon: 'AW',
              },
            ].map((feature) => (
              <div key={feature.title} className="card text-center">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold mx-auto mb-4 ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW TO USE THIS PLATFORM ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title mx-auto">How to Use This Platform</h2>
            <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
              A clear path from understanding the exam to cracking it.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-0">
            {[
              {
                step: 1,
                title: 'Start with PYQs',
                description: 'Understand what UPSC actually asks. Patterns reveal priorities that no syllabus document can.',
              },
              {
                step: 2,
                title: 'Build your current affairs spine',
                description: 'Map news to syllabus. Every current event becomes a building block, not a random fact.',
              },
              {
                step: 3,
                title: 'Practice with purpose',
                description: 'Take tests, analyze mistakes. Every wrong answer is data. Use it to sharpen your approach.',
              },
              {
                step: 4,
                title: 'Write answers daily',
                description: 'Structure matters more than content. Daily writing builds the muscle that exams test.',
              },
              {
                step: 5,
                title: 'Revise with one-pagers',
                description: 'Quick revision before the exam. Condensed, high-yield material for the final sprint.',
              },
            ].map((item, index) => (
              <div key={item.step} className="flex gap-6 relative">
                {/* Vertical connector line */}
                {index < 4 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-border" />
                )}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold text-charcoal font-bold text-lg flex items-center justify-center z-10">
                  {item.step}
                </div>
                <div className="pb-10">
                  <h3 className="text-lg font-semibold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RESULTS / TESTIMONIALS ========== */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Our Students, Their Results</h2>
            <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
              Real aspirants. Real ranks. Real feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map((topper) => (
              <div key={topper.name} className="card flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-sm">
                    {topper.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">{topper.name}</h3>
                    <p className="text-sm text-text-muted">
                      Rank {topper.rank} &middot; CSE {topper.year}
                    </p>
                  </div>
                </div>
                <blockquote className="text-text-secondary text-sm leading-relaxed flex-1 italic">
                  &ldquo;{topper.testimonial}&rdquo;
                </blockquote>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs font-medium text-gold-dark uppercase tracking-wide">
                    {topper.course}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 bg-cream/50"
              >
                <h3 className="text-lg font-semibold text-gold-dark">
                  {faq.question}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Preparation rewards seriousness.
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            Explore the platform when you are ready.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses" className="btn-gold">
              Explore Courses
            </Link>
            <Link
              href="https://t.me/thedarkhorse_upsc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !text-white !border-gray-600 hover:!border-gray-400"
            >
              Join Telegram Community
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
