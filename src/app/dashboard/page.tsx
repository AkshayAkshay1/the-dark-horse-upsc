'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  FolderOpen,
  BarChart3,
  Settings,
  Menu,
  X,
  TrendingUp,
  Clock,
  Target,
  GraduationCap,
  ChevronRight,
  Calendar,
  Bell,
  User,
  LogOut,
} from 'lucide-react';

const sidebarLinks = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard', active: true },
  { name: 'My Courses', icon: BookOpen, href: '/dashboard/courses', active: false },
  { name: 'My Tests', icon: FileText, href: '/dashboard/tests', active: false },
  { name: 'Study Materials', icon: FolderOpen, href: '/dashboard/materials', active: false },
  { name: 'Performance', icon: BarChart3, href: '/dashboard/performance', active: false },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings', active: false },
];

const statsCards = [
  {
    label: 'Courses Enrolled',
    value: '2',
    icon: GraduationCap,
    color: 'bg-blue-50 text-blue-600',
    trend: '+1 this month',
  },
  {
    label: 'Tests Taken',
    value: '12',
    icon: Target,
    color: 'bg-green-50 text-green-600',
    trend: '+4 this week',
  },
  {
    label: 'Avg Score',
    value: '67%',
    icon: TrendingUp,
    color: 'bg-amber-50 text-amber-600',
    trend: '+5% improvement',
  },
  {
    label: 'Study Hours',
    value: '48',
    icon: Clock,
    color: 'bg-purple-50 text-purple-600',
    trend: '6.8 hrs/day avg',
  },
];

const recentActivity = [
  {
    action: 'Completed',
    item: 'Prelims Sectional Test #7 - Environment',
    time: '2 hours ago',
    score: '38/50',
  },
  {
    action: 'Studied',
    item: 'Current Affairs Compass - March 2026 Module',
    time: '5 hours ago',
    score: null,
  },
  {
    action: 'Completed',
    item: 'Daily MCQ Practice - Current Affairs',
    time: 'Yesterday',
    score: '8/10',
  },
  {
    action: 'Downloaded',
    item: "Toppers' Copy Compass - GS Paper 3 Notes",
    time: 'Yesterday',
    score: null,
  },
  {
    action: 'Completed',
    item: 'Prelims Sectional Test #6 - Polity',
    time: '2 days ago',
    score: '42/50',
  },
];

const upcomingTests = [
  {
    title: 'Prelims Sectional Test #8 - Economy',
    date: 'April 12, 2026',
    time: '10:00 AM',
    duration: '1 hour',
    questions: 50,
  },
  {
    title: 'Prelims Full-Length Test #3',
    date: 'April 15, 2026',
    time: '9:00 AM',
    duration: '2 hours',
    questions: 100,
  },
  {
    title: 'CSAT Practice Test #2',
    date: 'April 18, 2026',
    time: '2:00 PM',
    duration: '2 hours',
    questions: 80,
  },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-charcoal transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <Link href="/" className="flex flex-col items-start">
              <span className="text-lg font-bold tracking-[0.2em] text-white">
                THE DARK HORSE
              </span>
              <span className="mt-0.5 h-[2px] w-8 bg-gold" />
              <span className="mt-0.5 text-[10px] tracking-[0.35em] text-gold-light">
                UPSC CSE
              </span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-400 hover:text-white lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Profile Section */}
          <div className="border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20">
                <User size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Aspirant Student
                </p>
                <p className="text-xs text-gray-400">student@example.com</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    link.active
                      ? 'bg-gold/10 text-gold'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <link.icon size={18} />
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Logout */}
          <div className="border-t border-white/10 px-4 py-4">
            <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="rounded-lg p-2 text-text-muted hover:bg-cream lg:hidden"
              >
                <Menu size={20} />
              </button>
              <h1 className="text-lg font-bold text-charcoal lg:text-xl">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative rounded-lg p-2 text-text-muted hover:bg-cream">
                <Bell size={20} />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-danger" />
              </button>
              <div className="hidden items-center gap-2 sm:flex">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">
                  <User size={14} className="text-gold-dark" />
                </div>
                <span className="text-sm font-medium text-charcoal">
                  Aspirant
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Welcome Banner */}
          <div className="mb-8 rounded-xl bg-charcoal p-6 text-white lg:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold lg:text-2xl">
                  Welcome back, Student!
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  Keep up the momentum. You&apos;re making great progress this
                  week.
                </p>
              </div>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-light"
              >
                Browse Courses
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {statsCards.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-text-muted">{stat.label}</p>
                    <p className="mt-1 text-2xl font-bold text-charcoal lg:text-3xl">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.color}`}
                  >
                    <stat.icon size={20} />
                  </div>
                </div>
                <p className="mt-2 text-xs text-text-muted">{stat.trend}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Recent Activity */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-border bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <h3 className="font-bold text-charcoal">Recent Activity</h3>
                  <button className="text-sm font-medium text-gold-dark hover:text-gold">
                    View All
                  </button>
                </div>
                <div className="divide-y divide-border">
                  {recentActivity.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-4"
                    >
                      <div className="flex-1">
                        <p className="text-sm text-charcoal">
                          <span className="font-semibold text-gold-dark">
                            {item.action}
                          </span>{' '}
                          {item.item}
                        </p>
                        <p className="mt-0.5 text-xs text-text-muted">
                          {item.time}
                        </p>
                      </div>
                      {item.score && (
                        <span className="ml-4 rounded-full bg-cream-dark px-3 py-1 text-xs font-semibold text-charcoal">
                          {item.score}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Tests */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <h3 className="font-bold text-charcoal">Upcoming Tests</h3>
                  <Link
                    href="/test-series"
                    className="text-sm font-medium text-gold-dark hover:text-gold"
                  >
                    View All
                  </Link>
                </div>
                <div className="divide-y divide-border">
                  {upcomingTests.map((test, i) => (
                    <div key={i} className="px-6 py-4">
                      <h4 className="text-sm font-semibold text-charcoal">
                        {test.title}
                      </h4>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1 text-xs text-text-muted">
                          <Calendar size={12} />
                          {test.date}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-text-muted">
                          <Clock size={12} />
                          {test.time}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-xs text-text-muted">
                        <span>{test.duration}</span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span>{test.questions} questions</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 rounded-xl border border-border bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-bold text-charcoal">Quick Links</h3>
                <div className="space-y-2">
                  <Link
                    href="/courses/current-affairs-compass"
                    className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:border-gold/50 hover:bg-gold/5"
                  >
                    <span className="font-medium text-charcoal">
                      Current Affairs Compass
                    </span>
                    <ChevronRight size={16} className="text-text-muted" />
                  </Link>
                  <Link
                    href="/courses/prelims-test-series-summary"
                    className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:border-gold/50 hover:bg-gold/5"
                  >
                    <span className="font-medium text-charcoal">
                      Prelims Compass
                    </span>
                    <ChevronRight size={16} className="text-text-muted" />
                  </Link>
                  <Link
                    href="/free-resources"
                    className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:border-gold/50 hover:bg-gold/5"
                  >
                    <span className="font-medium text-charcoal">
                      Free Resources
                    </span>
                    <ChevronRight size={16} className="text-text-muted" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
