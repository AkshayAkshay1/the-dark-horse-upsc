'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCourseById } from '@/lib/courses';
import {
  ShieldCheck,
  Zap,
  BadgeCheck,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  ArrowLeft,
  Lock,
  Tag,
  CheckCircle2,
  X,
} from 'lucide-react';

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id?: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  modal?: {
    ondismiss: () => void;
  };
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: (response: { error: { description: string } }) => void) => void;
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function CheckoutClient({ courseId }: { courseId: string }) {
  const course = getCourseById(courseId);

  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <X size={40} className="text-danger" />
          </div>
          <h1 className="mb-3 text-2xl font-bold text-charcoal">
            Course Not Found
          </h1>
          <p className="mb-8 text-text-muted">
            The course you&apos;re looking for doesn&apos;t exist or may have
            been removed.
          </p>
          <Link href="/courses" className="btn-primary">
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  const selectedModule = selectedModuleId
    ? course.modules?.find((m) => m.id === selectedModuleId)
    : null;

  const currentPrice = selectedModule ? selectedModule.price : course.price;
  const currentOriginalPrice = selectedModule
    ? selectedModule.originalPrice
    : course.originalPrice;
  const discount = currentOriginalPrice - currentPrice;
  const couponDiscount = couponApplied ? Math.round(currentPrice * 0.1) : 0;
  const finalPrice = currentPrice - couponDiscount;

  const handleApplyCoupon = () => {
    setCouponError('');
    if (couponCode.trim().toUpperCase() === 'DARKHORSE10') {
      setCouponApplied(true);
      setCouponError('');
    } else if (couponCode.trim() === '') {
      setCouponError('Please enter a coupon code');
    } else {
      setCouponApplied(false);
      setCouponError('Invalid coupon code. Try DARKHORSE10');
    }
  };

  const handleRemoveCoupon = () => {
    setCouponApplied(false);
    setCouponCode('');
    setCouponError('');
  };

  const handlePayment = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setPaymentError('Please fill in all customer details');
      return;
    }

    setIsProcessing(true);
    setPaymentError('');

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      setPaymentError(
        'Failed to load payment gateway. Please check your internet connection and try again.'
      );
      setIsProcessing(false);
      return;
    }

    const options: RazorpayOptions = {
      key: 'rzp_test_XXXXXXXXXXXX',
      amount: finalPrice * 100,
      currency: 'INR',
      name: 'The Dark Horse UPSC',
      description: selectedModule
        ? `${course.title} - ${selectedModule.name}`
        : course.title,
      handler: function (response: RazorpayResponse) {
        setPaymentSuccess(true);
        setIsProcessing(false);
        console.log('Payment successful:', response.razorpay_payment_id);
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      theme: {
        color: '#caa65c',
      },
      modal: {
        ondismiss: function () {
          setIsProcessing(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response: { error: { description: string } }) {
      setPaymentError(
        response.error.description || 'Payment failed. Please try again.'
      );
      setIsProcessing(false);
    });

    rzp.open();
  };

  if (paymentSuccess) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <CheckCircle2 size={40} className="text-success" />
          </div>
          <h1 className="mb-3 text-2xl font-bold text-charcoal">
            Payment Successful!
          </h1>
          <p className="mb-2 text-text-secondary">
            Thank you for enrolling in{' '}
            <span className="font-semibold">{course.title}</span>
          </p>
          <p className="mb-8 text-sm text-text-muted">
            You will receive login credentials and course access details at{' '}
            <span className="font-medium">{email}</span>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/dashboard" className="btn-gold">
              Go to Dashboard
            </Link>
            <Link href="/courses" className="btn-outline">
              Browse More Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href={`/courses/${course.slug}`}
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-charcoal"
          >
            <ArrowLeft size={16} />
            Back to course
          </Link>
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Lock size={14} className="text-success" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <h1 className="mb-8 text-2xl font-bold text-charcoal lg:text-3xl">
          Complete Your Enrollment
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left Column - Order Summary */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm lg:p-8">
              <h2 className="mb-6 text-lg font-bold text-charcoal">
                Order Summary
              </h2>

              {/* Course Info */}
              <div className="mb-6 flex gap-4 rounded-lg border border-border bg-cream p-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-charcoal">
                  <span className="text-lg font-bold text-gold">
                    {course.shortTitle}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-charcoal">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {course.description}
                  </p>
                  {course.badge && (
                    <span className="mt-2 inline-block rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold-dark">
                      {course.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Module Selection */}
              {course.modules && course.modules.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                    Select Module
                  </h3>
                  <div className="space-y-2">
                    {course.modules.map((mod) => (
                      <label
                        key={mod.id}
                        className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-all ${
                          selectedModuleId === mod.id
                            ? 'border-gold bg-gold/5 ring-1 ring-gold'
                            : 'border-border hover:border-gold/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="module"
                            value={mod.id}
                            checked={selectedModuleId === mod.id}
                            onChange={() => setSelectedModuleId(mod.id)}
                            className="h-4 w-4 accent-gold"
                          />
                          <span className="font-medium text-charcoal">
                            {mod.name}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-charcoal">
                            {'\u20B9'}{mod.price}
                          </span>
                          <span className="ml-2 text-sm text-text-muted line-through">
                            {'\u20B9'}{mod.originalPrice}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Features Summary */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                  What&apos;s Included
                </h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {course.features.slice(0, 6).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-success"
                      />
                      <span className="text-sm text-text-secondary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="mt-6 rounded-xl border border-border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Why Students Trust Us
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-50">
                    <ShieldCheck size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">
                      7-Day Money Back
                    </p>
                    <p className="text-xs text-text-muted">
                      No questions asked refund
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Zap size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">
                      Instant Access
                    </p>
                    <p className="text-xs text-text-muted">
                      Get started immediately
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-50">
                    <BadgeCheck size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">
                      Verified Content
                    </p>
                    <p className="text-xs text-text-muted">
                      Expert-curated material
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              {/* Price Breakdown */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold text-charcoal">
                  Price Details
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">
                      {selectedModule
                        ? `${course.shortTitle} - ${selectedModule.name}`
                        : course.title}
                    </span>
                    <span className="text-text-muted line-through">
                      {'\u20B9'}{currentOriginalPrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-success">Course Discount</span>
                    <span className="font-medium text-success">
                      -{'\u20B9'}{discount}
                    </span>
                  </div>
                  {couponApplied && (
                    <div className="flex items-center justify-between">
                      <span className="text-success">
                        Coupon (DARKHORSE10)
                      </span>
                      <span className="font-medium text-success">
                        -{'\u20B9'}{couponDiscount}
                      </span>
                    </div>
                  )}
                  <div className="border-t border-border pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-charcoal">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-charcoal">
                        {'\u20B9'}{finalPrice}
                      </span>
                    </div>
                    <p className="mt-1 text-right text-xs text-text-muted">
                      Inclusive of all taxes
                    </p>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="mt-5 border-t border-border pt-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-charcoal">
                    <Tag size={14} className="text-gold" />
                    Have a coupon code?
                  </div>
                  {couponApplied ? (
                    <div className="mt-2 flex items-center justify-between rounded-lg border border-success/30 bg-green-50 px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-success" />
                        <span className="text-sm font-medium text-success">
                          DARKHORSE10 applied
                        </span>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        className="text-sm text-text-muted hover:text-danger"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="mt-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Enter coupon code"
                          className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                        <button
                          onClick={handleApplyCoupon}
                          className="rounded-lg border border-charcoal px-4 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
                        >
                          Apply
                        </button>
                      </div>
                      {couponError && (
                        <p className="mt-1.5 text-xs text-danger">
                          {couponError}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Customer Info */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold text-charcoal">
                  Your Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-secondary">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-secondary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-secondary">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Pay Button */}
              <div>
                {paymentError && (
                  <div className="mb-3 rounded-lg border border-danger/30 bg-red-50 px-4 py-3 text-sm text-danger">
                    {paymentError}
                  </div>
                )}
                <button
                  onClick={handlePayment}
                  disabled={isProcessing || !course.enrollmentOpen}
                  className={`w-full rounded-xl py-4 text-base font-bold transition-all ${
                    !course.enrollmentOpen
                      ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                      : isProcessing
                        ? 'cursor-wait bg-gold/70 text-charcoal'
                        : 'btn-gold shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30'
                  }`}
                >
                  {!course.enrollmentOpen
                    ? 'Enrollment Opening Soon'
                    : isProcessing
                      ? 'Processing...'
                      : `Pay ${'\u20B9'}${finalPrice} with Razorpay`}
                </button>

                {/* Payment Badges */}
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <ShieldCheck size={14} className="text-success" />
                    100% Secure
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Zap size={14} className="text-gold" />
                    Instant Access
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <BadgeCheck size={14} className="text-blue-500" />
                    Razorpay Verified
                  </div>
                </div>

                {/* Accepted Payment Methods */}
                <div className="mt-5 rounded-lg border border-border bg-cream p-4">
                  <p className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-text-muted">
                    Accepted Payment Methods
                  </p>
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                        <Smartphone size={18} className="text-charcoal" />
                      </div>
                      <span className="text-[10px] text-text-muted">UPI</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                        <CreditCard size={18} className="text-charcoal" />
                      </div>
                      <span className="text-[10px] text-text-muted">Cards</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                        <Building2 size={18} className="text-charcoal" />
                      </div>
                      <span className="text-[10px] text-text-muted">
                        Net Banking
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                        <Wallet size={18} className="text-charcoal" />
                      </div>
                      <span className="text-[10px] text-text-muted">
                        Wallets
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
