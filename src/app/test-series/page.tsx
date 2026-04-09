import Link from 'next/link';
import { testSeries } from '@/lib/courses';
import {
  BarChart3,
  Brain,
  Clock,
  Trophy,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp,
  FileText,
} from 'lucide-react';

const categoryTabs = ['All', 'Prelims', 'Mains', 'CSAT'];

const howItWorks = [
  {
    step: '01',
    title: 'Register',
    description:
      'Choose your test series and complete enrollment. Get instant access to your dashboard.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Take Tests',
    description:
      'Attempt timed tests in exam-like conditions. Build stamina and confidence.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Get Analytics',
    description:
      'Receive detailed performance reports with accuracy trends and All India ranking.',
    icon: BarChart3,
  },
  {
    step: '04',
    title: 'Improve',
    description:
      'Identify weak areas, revise targeted topics, and track your improvement over time.',
    icon: TrendingUp,
  },
];

const features = [
  {
    icon: Trophy,
    title: 'All India Ranking',
    description:
      'See where you stand among thousands of aspirants. Percentile-based ranking for every test.',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description:
      'Accuracy trends, time management insights, subject-wise breakdown, and decision quality metrics.',
  },
  {
    icon: Brain,
    title: 'Expert Solutions',
    description:
      'Every question comes with detailed explanations, trap-word highlights, and syllabus mapping.',
  },
  {
    icon: Clock,
    title: 'Time Management',
    description:
      'Track time spent per question. Identify questions where you spend too much or too little time.',
  },
];

export default function TestSeriesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-charcoal py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            Practice & Perform
          </span>
          <h1 className="mt-4 text-3xl font-bold text-white lg:text-5xl">
            Test Series
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Practice with exam-level tests, get detailed analytics, and track
            your improvement with All India ranking. Built for aspirants who
            take preparation seriously.
          </p>
        </div>
      </section>

      {/* Category Tabs + Test Cards */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {categoryTabs.map((tab, i) => (
              <button
                key={tab}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  i === 0
                    ? 'bg-charcoal text-white shadow-md'
                    : 'bg-white text-text-secondary border border-border hover:border-charcoal hover:bg-charcoal hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Test Series Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {testSeries.map((series) => (
              <div
                key={series.id}
                className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg lg:p-8"
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-charcoal px-3 py-1 text-xs font-semibold text-white">
                      {series.category}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-charcoal">
                      {series.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-charcoal">
                      {'\u20B9'}{series.price}
                    </p>
                    <p className="text-sm text-text-muted line-through">
                      {'\u20B9'}{series.originalPrice}
                    </p>
                  </div>
                </div>

                <p className="mb-5 text-sm text-text-secondary">
                  {series.description}
                </p>

                {/* Stats */}
                <div className="mb-5 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-gold" />
                    <span className="text-sm font-medium text-charcoal">
                      {series.tests} Tests
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-gold" />
                    <span className="text-sm font-medium text-charcoal">
                      {series.questions} Questions
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 space-y-2">
                  {series.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 flex-shrink-0 text-success"
                      />
                      <span className="text-sm text-text-secondary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/checkout/${series.id}`}
                  className="btn-gold flex w-full items-center justify-center gap-2"
                >
                  Enroll Now
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark">
              Simple Process
            </span>
            <h2 className="mt-4 text-2xl font-bold text-charcoal lg:text-3xl">
              How It Works
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              From enrollment to improvement — a structured path to Prelims and
              Mains excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Connector line */}
                {i < howItWorks.length - 1 && (
                  <div className="absolute left-1/2 top-10 hidden h-[2px] w-full bg-border lg:block" />
                )}
                <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-cream">
                  <step.icon size={28} className="text-gold-dark" />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-charcoal text-xs font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-charcoal">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-2xl font-bold text-charcoal lg:text-3xl">
              More Than Just Tests
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              Our test series goes beyond questions and answers. Get the
              analytics and insights you need to actually improve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg lg:p-8"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-charcoal">
                  <feature.icon size={24} className="text-gold" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-charcoal">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles size={32} className="mx-auto mb-4 text-gold" />
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Ready to Test Your Preparation?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            Join thousands of aspirants who use our test series to benchmark
            their preparation and improve strategically.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3 font-semibold text-charcoal transition-colors hover:bg-gold-light"
            >
              View All Courses
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/free-resources"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 font-semibold text-white transition-colors hover:border-white/40"
            >
              Try Free Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
