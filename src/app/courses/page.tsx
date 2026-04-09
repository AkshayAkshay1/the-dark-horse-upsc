import Link from 'next/link';
import { courses } from '@/lib/courses';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Prelims', value: 'prelims' },
  { label: 'Mains', value: 'mains' },
  { label: 'Current Affairs', value: 'current-affairs' },
  { label: 'Foundation', value: 'foundation' },
  { label: 'PYQ', value: 'pyq' },
] as const;

function getDiscountPercent(original: number, current: number): number {
  return Math.round(((original - current) / original) * 100);
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-gold">Courses</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Structured preparation designed around PYQ patterns, current affairs mapping,
            and disciplined answer writing. Choose the path that fits your stage.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <span
                key={cat.value}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-default transition-colors ${
                  cat.value === 'all'
                    ? 'bg-charcoal text-white'
                    : 'bg-cream-dark text-text-secondary hover:bg-charcoal hover:text-white'
                }`}
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="card flex flex-col bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-200"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                {course.badge && (
                  <span
                    className={`badge mb-3 inline-block ${
                      course.badge === 'Best Value'
                        ? 'badge-gold'
                        : course.badge === 'Coming Soon'
                          ? 'badge-charcoal'
                          : 'badge-success'
                    }`}
                  >
                    {course.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold text-charcoal mb-2 leading-snug">
                  {course.title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-2xl font-bold text-charcoal">
                    &#8377;{course.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-text-muted line-through">
                    &#8377;{course.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-semibold text-success bg-green-50 px-2 py-0.5 rounded-full">
                    {getDiscountPercent(course.originalPrice, course.price)}% OFF
                  </span>
                </div>

                {/* Features (first 4) */}
                <ul className="space-y-2 mb-6">
                  {course.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        className="w-4 h-4 text-success mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="mt-auto p-6 pt-0 flex gap-3">
                <Link
                  href={`/courses/${course.slug}`}
                  className="btn-outline flex-1 text-center text-sm py-2.5"
                >
                  View Details
                </Link>
                {course.enrollmentOpen ? (
                  <Link
                    href={`/checkout/${course.id}`}
                    className="btn-gold flex-1 text-center text-sm py-2.5"
                  >
                    Enroll Now
                  </Link>
                ) : (
                  <span className="btn-outline flex-1 text-center text-sm py-2.5 opacity-60 cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Not sure which course to pick?
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            The Foundation Course bundles everything into one package at the best value.
            Or reach out to us and we will help you decide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses/foundation-course"
              className="btn-gold px-8"
            >
              Explore Foundation Course
            </Link>
            <Link
              href="/contact"
              className="btn-outline border-gray-600 text-white hover:border-gold px-8"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
