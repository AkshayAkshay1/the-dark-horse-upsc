import Link from 'next/link';
import { freeResources } from '@/lib/courses';
import {
  Newspaper,
  Target,
  BookOpen,
  FileText,
  HelpCircle,
  BookMarked,
  ArrowRight,
  Download,
  Star,
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  newspaper: Newspaper,
  target: Target,
  'book-open': BookOpen,
  'file-text': FileText,
  'help-circle': HelpCircle,
  book: BookMarked,
};

const resourceDetails: Record<
  string,
  {
    longDescription: string;
    highlights: string[];
    format: string;
    frequency: string;
  }
> = {
  'editorial-compass': {
    longDescription:
      'Burning themes from The Hindu, Indian Express, and Livemint covered in concise QnA format. Each editorial is broken down into: What is the issue? Why does it matter for UPSC? How can you use it in your answer? Perfect for last-minute revision and answer enrichment.',
    highlights: [
      'QnA format for active recall',
      'Syllabus-mapped to GS papers',
      'Covers all major editorials',
      'Updated weekly',
    ],
    format: 'PDF + Online',
    frequency: 'Weekly',
  },
  'pyq-compass': {
    longDescription:
      'A comprehensive collection of Previous Year Questions organized theme-wise across UPSC CSE, CDS, CAPF, and NDA exams. See how UPSC repeats themes, twists questions, and tests the same concepts differently across exams. Essential for pattern recognition.',
    highlights: [
      'Theme-wise PYQ organization',
      'Multi-exam coverage (CSE, CDS, CAPF, NDA)',
      'Pattern identification across years',
      'Topic frequency analysis',
    ],
    format: 'PDF',
    frequency: 'Updated annually',
  },
  pyqpedia: {
    longDescription:
      'Deep-dive into high-yield topics identified through PYQ frequency analysis. Each topic gets comprehensive coverage with facts, analysis, and potential question angles. Think of it as a focused encyclopedia built from UPSC examination patterns.',
    highlights: [
      'High-yield topic identification',
      'Comprehensive coverage per topic',
      'Question angle predictions',
      'Frequency-based prioritization',
    ],
    format: 'PDF + Online',
    frequency: 'Monthly additions',
  },
  'one-pager-pyqs': {
    longDescription:
      'Ready-made one-page sheets for frequent PYQ themes. Each sheet includes a strong introduction, essential keywords, relevant examples (national + international), and a conclusion framework. Use directly in your answers for immediate impact.',
    highlights: [
      'Introduction + conclusion templates',
      'Curated keyword banks',
      'National & international examples',
      'Direct answer integration',
    ],
    format: 'PDF',
    frequency: 'Growing collection',
  },
  'daily-mcqs': {
    longDescription:
      'Start each day with 10 carefully crafted MCQs based on current affairs. Each question comes with detailed explanations, source references, and related PYQ connections. Track your streak and build a daily practice habit.',
    highlights: [
      '10 MCQs daily',
      'Detailed explanations with sources',
      'PYQ cross-references',
      'Performance tracking',
    ],
    format: 'Online portal',
    frequency: 'Daily',
  },
  'ncert-notes': {
    longDescription:
      'Condensed NCERT notes organized not by class but by UPSC syllabus topics. Each note strips away exam-irrelevant content and focuses on UPSC-relevant facts, concepts, and connections. Perfect for building your foundation efficiently.',
    highlights: [
      'Organized by UPSC syllabus',
      'Stripped of irrelevant content',
      'Focus on UPSC-relevant facts',
      'Quick revision format',
    ],
    format: 'PDF',
    frequency: 'Complete set available',
  },
};

export default function FreeResourcesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-charcoal py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            No Sign-up Required
          </span>
          <h1 className="mt-4 text-3xl font-bold text-white lg:text-5xl">
            Free Resources
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Quality UPSC preparation resources available at zero cost. From PYQ
            compilations to daily MCQ practice — start building your foundation
            today.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gold-light">
            <Star size={16} className="text-gold" />
            <span>Trusted by 10,000+ aspirants</span>
          </div>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {freeResources.map((resource) => {
              const IconComponent = iconMap[resource.icon] || FileText;
              return (
                <div
                  key={resource.id}
                  className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-charcoal transition-colors group-hover:bg-gold">
                    <IconComponent
                      size={24}
                      className="text-gold transition-colors group-hover:text-charcoal"
                    />
                  </div>

                  {/* Category Badge */}
                  <span className="mb-3 inline-block rounded-full bg-cream-dark px-3 py-1 text-xs font-semibold text-text-muted">
                    {resource.category}
                  </span>

                  {/* Title & Description */}
                  <h3 className="mb-2 text-lg font-bold text-charcoal">
                    {resource.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-text-muted">
                    {resource.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={`#${resource.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
                  >
                    Access Now
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Resource Sections */}
      <section className="border-t border-border bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-charcoal lg:text-3xl">
              Explore Each Resource
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              Deep-dive into what each free resource offers and how it can
              strengthen your UPSC preparation.
            </p>
          </div>

          <div className="space-y-12">
            {freeResources.map((resource, index) => {
              const IconComponent = iconMap[resource.icon] || FileText;
              const details = resourceDetails[resource.id];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={resource.id}
                  id={resource.id}
                  className="scroll-mt-24 rounded-xl border border-border bg-cream p-6 lg:p-8"
                >
                  <div
                    className={`flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 ${
                      !isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-charcoal">
                          <IconComponent size={18} className="text-gold" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-charcoal">
                            {resource.title}
                          </h3>
                          <span className="text-xs font-medium text-text-muted">
                            {resource.category}
                          </span>
                        </div>
                      </div>

                      <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                        {details?.longDescription || resource.description}
                      </p>

                      {/* Highlights */}
                      {details && (
                        <div className="mb-5 space-y-2">
                          {details.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2
                                size={14}
                                className="mt-0.5 flex-shrink-0 text-success"
                              />
                              <span className="text-sm text-text-secondary">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Meta Info */}
                      {details && (
                        <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted">
                          <span className="flex items-center gap-1">
                            <Download size={12} />
                            Format: {details.format}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-border" />
                          <span>Frequency: {details.frequency}</span>
                        </div>
                      )}
                    </div>

                    {/* CTA Card */}
                    <div className="w-full flex-shrink-0 rounded-lg border border-border bg-white p-5 lg:w-64">
                      <p className="mb-3 text-center text-2xl font-bold text-success">
                        FREE
                      </p>
                      <p className="mb-4 text-center text-xs text-text-muted">
                        No sign-up or payment required
                      </p>
                      <button className="btn-gold flex w-full items-center justify-center gap-2 text-sm">
                        <ExternalLink size={14} />
                        Access Resource
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="bg-charcoal py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles size={32} className="mx-auto mb-4 text-gold" />
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Want More? Upgrade to Premium
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            Free resources are just the beginning. Unlock comprehensive courses,
            test series with analytics, and topper-level answer writing
            frameworks.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-sm font-semibold text-gold">
                Current Affairs Compass
              </p>
              <p className="mt-0.5 text-xs text-gray-400">
                From {'\u20B9'}599
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-sm font-semibold text-gold">
                Prelims Compass
              </p>
              <p className="mt-0.5 text-xs text-gray-400">
                From {'\u20B9'}999
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-sm font-semibold text-gold">
                Foundation Course
              </p>
              <p className="mt-0.5 text-xs text-gray-400">
                From {'\u20B9'}3,999
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3 font-semibold text-charcoal transition-colors hover:bg-gold-light"
            >
              Explore All Courses
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/test-series"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 font-semibold text-white transition-colors hover:border-white/40"
            >
              View Test Series
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
