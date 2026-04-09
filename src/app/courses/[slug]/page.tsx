import Link from 'next/link';
import { getCourseBySlug, courses } from '@/lib/courses';

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

function getDiscountPercent(original: number, current: number): number {
  return Math.round(((original - current) / original) * 100);
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-charcoal mb-4">404</h1>
          <p className="text-xl text-text-muted mb-8">
            This course does not exist or may have been removed.
          </p>
          <Link href="/courses" className="btn-primary">
            Browse All Courses
          </Link>
        </div>
      </main>
    );
  }

  const discount = getDiscountPercent(course.originalPrice, course.price);

  const relatedCourses = courses.filter(
    (c) => c.id !== course.id && c.enrollmentOpen
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/courses" className="hover:text-charcoal transition-colors">
              Courses
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-charcoal font-medium truncate">{course.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Left Column - Course Details */}
          <div className="lg:col-span-2">
            {/* Title & Badge */}
            <div className="mb-8">
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
              <h1 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
                {course.title}
              </h1>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark bg-gold/10 px-3 py-1 rounded-full">
                  {course.category.replace('-', ' ')}
                </span>
                {course.isPopular && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-success bg-green-50 px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
            </div>

            {/* Long Description */}
            <div className="prose prose-lg max-w-none mb-10">
              {course.longDescription.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features List */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What You Get
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {course.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border"
                  >
                    <svg
                      className="w-5 h-5 text-success mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modules Table */}
            {course.modules && course.modules.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-charcoal mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Available Modules
                </h2>
                <div className="bg-white rounded-xl border border-border overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-cream-dark border-b border-border">
                        <th className="text-left py-3 px-5 text-sm font-semibold text-charcoal">
                          Module
                        </th>
                        <th className="text-right py-3 px-5 text-sm font-semibold text-charcoal">
                          Price
                        </th>
                        <th className="text-right py-3 px-5 text-sm font-semibold text-charcoal hidden sm:table-cell">
                          Original
                        </th>
                        <th className="text-right py-3 px-5 text-sm font-semibold text-charcoal">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.modules.map((mod, i) => (
                        <tr
                          key={mod.id}
                          className={`${
                            i < course.modules!.length - 1
                              ? 'border-b border-border'
                              : ''
                          } hover:bg-cream/50 transition-colors`}
                        >
                          <td className="py-4 px-5">
                            <span className="text-sm font-medium text-charcoal">
                              {mod.name}
                            </span>
                          </td>
                          <td className="py-4 px-5 text-right">
                            <span className="text-sm font-bold text-charcoal">
                              &#8377;{mod.price.toLocaleString('en-IN')}
                            </span>
                          </td>
                          <td className="py-4 px-5 text-right hidden sm:table-cell">
                            <span className="text-sm text-text-muted line-through">
                              &#8377;{mod.originalPrice.toLocaleString('en-IN')}
                            </span>
                          </td>
                          <td className="py-4 px-5 text-right">
                            {course.enrollmentOpen ? (
                              <Link
                                href={`/checkout/${mod.id}`}
                                className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
                              >
                                Enroll
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ) : (
                              <span className="text-sm text-text-muted">Coming Soon</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sticky Pricing Card */}
          <div className="lg:col-span-1 mt-10 lg:mt-0">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                {/* Price Header */}
                <div className="bg-charcoal text-white p-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-3xl font-bold">
                      &#8377;{course.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-gray-400 line-through text-lg">
                      &#8377;{course.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gold bg-gold/15 px-2 py-0.5 rounded">
                      {discount}% OFF
                    </span>
                    <span className="text-xs text-gray-400">Limited time offer</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6">
                  {course.enrollmentOpen ? (
                    <Link
                      href={`/checkout/${course.id}`}
                      className="btn-gold w-full text-center block py-3.5 text-base font-bold"
                    >
                      Enroll Now
                    </Link>
                  ) : (
                    <span className="btn-outline w-full text-center block py-3.5 text-base font-bold opacity-70 cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}

                  {/* Features Summary */}
                  <ul className="mt-6 space-y-3">
                    {course.features.slice(0, 5).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
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

                  {/* Secure Payment Badge */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
                      <svg
                        className="w-5 h-5 text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span className="font-medium">100% Secure Payment</span>
                    </div>
                    <p className="text-xs text-text-muted text-center mt-2">
                      Powered by Razorpay. 7-day refund guarantee.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modules quick-pick (if modules exist) */}
              {course.modules && course.modules.length > 0 && (
                <div className="mt-6 bg-white rounded-xl border border-border p-6">
                  <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-4">
                    Pick a Module
                  </h3>
                  <div className="space-y-2">
                    {course.modules.map((mod) => (
                      <Link
                        key={mod.id}
                        href={`/checkout/${mod.id}`}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-gold hover:bg-gold/5 transition-all group"
                      >
                        <span className="text-sm text-text-secondary group-hover:text-charcoal font-medium">
                          {mod.name}
                        </span>
                        <span className="text-sm font-bold text-charcoal">
                          &#8377;{mod.price.toLocaleString('en-IN')}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="bg-white border-t border-border py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-2xl sm:text-3xl mb-10">
              Other Courses You Might Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedCourses.map((related) => (
                <div
                  key={related.id}
                  className="card flex flex-col bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-200"
                >
                  <div className="p-6">
                    {related.badge && (
                      <span
                        className={`badge mb-3 inline-block ${
                          related.badge === 'Best Value'
                            ? 'badge-gold'
                            : related.badge === 'Coming Soon'
                              ? 'badge-charcoal'
                              : 'badge-success'
                        }`}
                      >
                        {related.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-charcoal mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-4 line-clamp-2">
                      {related.description}
                    </p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xl font-bold text-charcoal">
                        &#8377;{related.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm text-text-muted line-through">
                        &#8377;{related.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto p-6 pt-0 flex gap-3">
                    <Link
                      href={`/courses/${related.slug}`}
                      className="btn-outline flex-1 text-center text-sm py-2.5"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/checkout/${related.id}`}
                      className="btn-gold flex-1 text-center text-sm py-2.5"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
