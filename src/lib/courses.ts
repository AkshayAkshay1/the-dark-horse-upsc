import { Course, TestSeries, Topper, FreeResource, FAQ } from '@/types';

export const courses: Course[] = [
  {
    id: 'cac',
    slug: 'current-affairs-compass',
    title: 'Current Affairs Compass',
    shortTitle: 'CAC',
    description: 'Master current affairs with syllabus-mapped summaries, QnA worksheets, and live practice tests.',
    longDescription: `Current Affairs Compass transforms how you approach current affairs for UPSC. Instead of mindlessly reading newspapers, this course maps every current event to the UPSC syllabus, giving you structured summaries, practice questions, and performance analytics.

Covers Vision IAS PT-365 and PMF IAS Magnum sources — the two most trusted current affairs compilations — and condenses them into actionable study material.`,
    features: [
      'Subject-wise current affairs summaries',
      'QnA worksheets for active recall',
      'Live practice portal with timed tests',
      'Performance analysis & weak area identification',
      'Covers PT-365 & PMF IAS Magnum sources',
      'Monthly current affairs compilations',
      'Editorial analysis with syllabus mapping',
      'Prelims-focused fact sheets',
    ],
    price: 599,
    originalPrice: 799,
    category: 'current-affairs',
    image: '/images/courses/cac.jpg',
    badge: 'First 100 Enrollments',
    isPopular: true,
    enrollmentOpen: true,
    modules: [
      { id: 'cac-pt365', name: 'PT-365 Version', price: 599, originalPrice: 799 },
      { id: 'cac-pmf', name: 'PMF IAS Version', price: 599, originalPrice: 799 },
      { id: 'cac-combined', name: 'Combined (PT-365 + PMF)', price: 999, originalPrice: 1399 },
    ],
  },
  {
    id: 'ptss',
    slug: 'prelims-test-series-summary',
    title: 'Prelims Compass Test Series',
    shortTitle: 'PTSS',
    description: 'Test series solutions condensed from 50-60 pages into 9-10 page explanations with trap-word highlights.',
    longDescription: `Stop wasting hours on bloated test explanations. Prelims Compass takes the best test series solutions and distills them into crisp, 9-10 page explanations per test.

Every explanation highlights trap words (ONLY, CANNOT, NOT) in color, maps questions to syllabus topics, and identifies the thinking pattern UPSC uses. Includes master files for quick revision before the exam.`,
    features: [
      'Condensed test explanations (9-10 pages per test)',
      'Color-coded trap word highlights',
      'Syllabus topic mapping for each question',
      'UPSC thinking pattern identification',
      'Master revision files',
      'Covers top coaching test series',
      'Flowcharts and diagrams in explanations',
      'Weekly test schedule aligned with exam timeline',
    ],
    price: 999,
    originalPrice: 1499,
    category: 'prelims',
    image: '/images/courses/ptss.jpg',
    badge: 'First 100 Enrollments',
    isPopular: true,
    enrollmentOpen: true,
  },
  {
    id: 'tcc',
    slug: 'toppers-copy-compass',
    title: "Toppers' Copy Compass",
    shortTitle: 'TCC',
    description: 'Learn answer writing from toppers. Organized answers by syllabus, mindset frameworks, and one-pager revision material.',
    longDescription: `Toppers' Copy Compass is not just a collection of topper answers — it's a structured learning system for answer writing.

Every answer is organized by GS paper and syllabus topic, broken down into the structural choices the topper made, and accompanied by a one-pager revision sheet. You don't just read good answers — you learn the thinking behind them.`,
    features: [
      'Topper answers organized by syllabus topic',
      'Answer structure analysis and frameworks',
      'Mindset development for answer writing',
      'One-pager revision materials',
      'GS Paper 1-4 + Essay coverage',
      'Ethics case study approaches',
      'Introduction & conclusion templates',
      'Keyword banks by topic',
    ],
    price: 499,
    originalPrice: 699,
    category: 'mains',
    image: '/images/courses/tcc.jpg',
    isPopular: true,
    enrollmentOpen: true,
    modules: [
      { id: 'tcc-gs1', name: 'GS Paper 1', price: 499, originalPrice: 699 },
      { id: 'tcc-gs2', name: 'GS Paper 2', price: 499, originalPrice: 699 },
      { id: 'tcc-gs3', name: 'GS Paper 3', price: 499, originalPrice: 699 },
      { id: 'tcc-gs4', name: 'GS Paper 4 (Ethics)', price: 499, originalPrice: 699 },
      { id: 'tcc-essay', name: 'Essay Module', price: 599, originalPrice: 799 },
      { id: 'tcc-bundle-2gs', name: 'Any 2 GS Modules', price: 898, originalPrice: 999 },
      { id: 'tcc-bundle-3gs', name: 'Any 3 GS Modules', price: 1299, originalPrice: 1499 },
      { id: 'tcc-bundle-4gs', name: 'All 4 GS Modules', price: 1697, originalPrice: 1999 },
      { id: 'tcc-bundle-all', name: 'All 4 GS + Essay', price: 2246, originalPrice: 2698 },
    ],
  },
  {
    id: 'pyq',
    slug: 'pyq-analytics',
    title: 'PYQ Analytics',
    shortTitle: 'PYQ',
    description: 'PYQs from 2011-2025 across CSE, CAPF, CDS, NDA with sectional tests and detailed assessment reports.',
    longDescription: `PYQ Analytics goes beyond just solving previous year questions. It analyzes your performance patterns — accuracy trends, decision-making quality, confidence metrics — to give you actionable insights.

Covers PYQs from UPSC CSE, CAPF, CDS, NDA, IES, EPFO, and Geo-Scientist exams from 2011 to 2025. Includes 14 subject-wise sectional tests and 4 full-length tests with 100 questions each.`,
    features: [
      'PYQs from 2011-2025 (CSE, CAPF, CDS, NDA, IES, EPFO)',
      '14 subject-wise sectional tests',
      '4 full-length tests (100 questions each)',
      'Accuracy pattern analysis',
      'Decision-making quality assessment',
      'EMD/Confidence metrics',
      'Subject-wise performance breakdown',
      'Comparative analysis across exam types',
    ],
    price: 999,
    originalPrice: 1499,
    category: 'pyq',
    image: '/images/courses/pyq.jpg',
    badge: 'Coming Soon',
    isNew: true,
    enrollmentOpen: false,
  },
  {
    id: 'foundation',
    slug: 'foundation-course',
    title: 'Foundation Course — Complete UPSC Prep',
    shortTitle: 'Foundation',
    description: 'End-to-end UPSC preparation covering Prelims, Mains, and Interview with all resources bundled.',
    longDescription: `The Foundation Course bundles everything The Dark Horse offers into one comprehensive package. From current affairs to answer writing, from PYQ analytics to test series — get access to the entire platform with a single enrollment.

Designed for serious aspirants who want structured, no-nonsense preparation that covers every stage of the UPSC CSE journey.`,
    features: [
      'Complete access to all courses',
      'Current Affairs Compass (both versions)',
      'Prelims Compass Test Series',
      "Toppers' Copy Compass (all modules)",
      'PYQ Analytics (when available)',
      'Priority doubt resolution',
      'Monthly strategy sessions',
      'Personalized study plan guidance',
    ],
    price: 3999,
    originalPrice: 5999,
    category: 'foundation',
    image: '/images/courses/foundation.jpg',
    badge: 'Best Value',
    isPopular: true,
    enrollmentOpen: true,
  },
];

export const testSeries: TestSeries[] = [
  {
    id: 'pts-sectional',
    title: 'Prelims Sectional Tests',
    description: 'Topic-wise tests covering History, Geography, Polity, Economy, Science, Environment, and Current Affairs.',
    tests: 14,
    questions: 700,
    price: 699,
    originalPrice: 999,
    features: [
      '50 questions per test',
      '1 hour time limit',
      'Detailed explanations with diagrams',
      'Subject-wise performance analytics',
      'All India ranking',
    ],
    category: 'Prelims',
  },
  {
    id: 'pts-full',
    title: 'Prelims Full-Length Tests',
    description: 'Simulated UPSC Prelims GS Paper I with 100 MCQs in 2 hours — exam-level difficulty.',
    tests: 10,
    questions: 1000,
    price: 999,
    originalPrice: 1499,
    features: [
      '100 questions per test',
      '2 hour time limit',
      'UPSC-level difficulty calibration',
      'Negative marking as per UPSC pattern',
      'Percentile-based ranking',
      'Time management analytics',
    ],
    category: 'Prelims',
  },
  {
    id: 'mains-gs',
    title: 'Mains GS Answer Writing Tests',
    description: 'Practice GS Mains answer writing with structured evaluation and model answers.',
    tests: 8,
    questions: 160,
    price: 1299,
    originalPrice: 1999,
    features: [
      '20 questions per test (10 markers & 15 markers)',
      '3 hour time limit',
      'Structured evaluation criteria',
      'Model answers for every question',
      'Topper answer comparison',
      'Content + structure scoring',
    ],
    category: 'Mains',
  },
  {
    id: 'csat',
    title: 'CSAT Practice Tests',
    description: 'Paper II preparation with comprehension, reasoning, math, and decision-making.',
    tests: 6,
    questions: 480,
    price: 499,
    originalPrice: 799,
    features: [
      '80 questions per test',
      '2 hour time limit',
      'Section-wise breakdown',
      'Qualifying score tracking',
      'Detailed solutions',
    ],
    category: 'CSAT',
  },
];

export const toppers: Topper[] = [
  {
    name: 'Priya Sharma',
    rank: 12,
    year: 2024,
    image: '/images/toppers/topper1.jpg',
    testimonial: 'The Dark Horse\'s approach to current affairs mapping changed how I prepared. The condensed test explanations saved me hours every week.',
    course: 'Current Affairs Compass + PTSS',
  },
  {
    name: 'Rahul Verma',
    rank: 34,
    year: 2024,
    image: '/images/toppers/topper2.jpg',
    testimonial: 'PYQ Analytics helped me identify patterns I had been missing for two attempts. The assessment reports were incredibly insightful.',
    course: 'PYQ Analytics + Foundation',
  },
  {
    name: 'Sneha Reddy',
    rank: 67,
    year: 2024,
    image: '/images/toppers/topper3.jpg',
    testimonial: 'Toppers\' Copy Compass taught me that answer writing is about structure, not just content. My marks jumped significantly in GS3.',
    course: "Toppers' Copy Compass",
  },
  {
    name: 'Amit Kumar',
    rank: 89,
    year: 2023,
    image: '/images/toppers/topper4.jpg',
    testimonial: 'I switched to Dark Horse in my third attempt. The no-nonsense approach and PYQ-driven methodology is exactly what serious aspirants need.',
    course: 'Foundation Course',
  },
  {
    name: 'Kavitha Menon',
    rank: 103,
    year: 2024,
    image: '/images/toppers/topper5.jpg',
    testimonial: 'The free resources alone are better than what many paid platforms offer. When I enrolled for the full course, it was a no-brainer.',
    course: 'Complete Package',
  },
];

export const freeResources: FreeResource[] = [
  {
    id: 'editorial-compass',
    title: 'Editorial Compass',
    description: 'Burning themes covered in QnA format — understand the issue in 2 minutes flat.',
    icon: 'newspaper',
    link: '/free-resources#editorial-compass',
    category: 'Current Affairs',
  },
  {
    id: 'pyq-compass',
    title: 'PYQ Compass',
    description: 'Theme-wise PYQs across UPSC exams — CSE, CDS, CAPF, NDA — organized for pattern recognition.',
    icon: 'target',
    link: '/free-resources#pyq-compass',
    category: 'PYQ',
  },
  {
    id: 'pyqpedia',
    title: 'PYQpedia',
    description: 'Detailed thematic coverage of high-yield areas based on PYQ frequency analysis.',
    icon: 'book-open',
    link: '/free-resources#pyqpedia',
    category: 'PYQ',
  },
  {
    id: 'one-pager-pyqs',
    title: 'One Pager PYQs',
    description: 'Ready-made intro, keywords, examples, and conclusion for frequent PYQ themes — all on one page.',
    icon: 'file-text',
    link: '/free-resources#one-pager-pyqs',
    category: 'Quick Revision',
  },
  {
    id: 'daily-mcqs',
    title: 'Daily MCQs',
    description: 'Practice 10 current affairs MCQs daily with detailed explanations and source references.',
    icon: 'help-circle',
    link: '/free-resources#daily-mcqs',
    category: 'Practice',
  },
  {
    id: 'ncert-notes',
    title: 'NCERT Quick Notes',
    description: 'Condensed NCERT notes organized by UPSC syllabus topics for rapid revision.',
    icon: 'book',
    link: '/free-resources#ncert-notes',
    category: 'Foundation',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Who is The Dark Horse for?',
    answer: 'The Dark Horse is for serious UPSC aspirants who value depth over volume. If you believe in PYQ-driven preparation, structured answer writing, and quality current affairs coverage — this platform is built for you.',
  },
  {
    question: 'How is this different from other coaching platforms?',
    answer: 'We don\'t sell information overload. Our approach is anchored in PYQs, enriched with mapped current affairs, and refined through disciplined answer writing. Every resource is designed to build your analytical thinking, not just your content knowledge.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods through Razorpay — UPI, Credit/Debit cards, Net Banking, and popular wallets like Paytm and PhonePe.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes. If you\'re not satisfied within 7 days of purchase, you can request a full refund — no questions asked. After 7 days, partial refunds are available based on content accessed.',
  },
  {
    question: 'How do I access the courses after purchase?',
    answer: 'Once payment is confirmed, you\'ll receive login credentials via email instantly. Log in to your student dashboard to access all your enrolled courses, test series, and study materials.',
  },
  {
    question: 'Can I access the content on mobile?',
    answer: 'Absolutely. The entire platform is mobile-responsive. Access your courses, take tests, and study materials from any device — phone, tablet, or desktop.',
  },
  {
    question: 'Do you provide mentorship or doubt resolution?',
    answer: 'Foundation Course enrollees get priority doubt resolution and monthly strategy sessions. For individual courses, community-based doubt resolution is available via our Telegram group.',
  },
  {
    question: 'When will PYQ Analytics enrollment open?',
    answer: 'PYQ Analytics enrollment will open soon. Join our Telegram channel for the exact date announcement and early-bird pricing.',
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}
