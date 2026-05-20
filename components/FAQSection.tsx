"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does cleaning cost?",
    a: "Our pricing depends on the type of service, the size of your space, and your location in Lagos. A standard residential clean typically starts from ₦15,000. We always provide a free, no-obligation quote before any work begins — just fill out the booking form or give us a call.",
  },
  {
    q: "Do you offer same-day service?",
    a: "Yes! Subject to availability, we can often arrange same-day or next-day cleaning. We recommend booking at least 24 hours in advance to guarantee your preferred time slot, but don't hesitate to reach out — we'll do our best to accommodate you.",
  },
  {
    q: "Are your products eco-friendly?",
    a: "Absolutely. We use plant-based, biodegradable cleaning agents that are tough on grime but safe for your family, pets, and the environment. All our products are free from harsh chemicals and meet international eco-safety standards.",
  },
  {
    q: "What areas of Lagos do you serve?",
    a: "We cover all major areas of Lagos including Lekki, Victoria Island, Ikoyi, Ajah, Ikeja, Surulere, Yaba, Gbagada, Magodo, and more. If you're unsure whether we reach your area, just send us a WhatsApp message and we'll confirm within minutes.",
  },
  {
    q: "What if I'm not satisfied with the cleaning?",
    a: "Your satisfaction is our guarantee. If you're not completely happy with the result, simply let us know within 24 hours and we'll return to re-clean the affected areas at no extra charge. We take every piece of feedback seriously — it's how we keep our 4.9★ rating.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
        isOpen
          ? "border-brand-200 bg-brand-50/60"
          : "border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        {/* Number + question */}
        <div className="flex items-center gap-4 min-w-0">
          <span
            className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors duration-200 ${
              isOpen
                ? "bg-brand-600 text-white"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {index + 1}
          </span>
          <span
            className={`font-semibold text-base leading-snug transition-colors duration-200 ${
              isOpen ? "text-brand-700" : "text-gray-800"
            }`}
          >
            {item.q}
          </span>
        </div>

        {/* Chevron */}
        <svg
          className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-500" : "text-gray-400"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Animated answer using the grid-rows trick */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed pl-[4.25rem]">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="py-20 bg-gray-50">

      {/* FAQ content — narrow column */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
              FAQs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Questions we get{" "}
            <span className="text-brand-600">all the time</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Can't find what you're looking for?{" "}
            <a href="#contact" className="text-brand-600 underline underline-offset-2 hover:text-brand-700">
              Just ask us directly.
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA — full margin width */}
      <div className="mt-16 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-[1400px] mx-auto relative overflow-hidden rounded-3xl min-h-[320px] flex items-center justify-center">

          {/* Background image */}
          <img
            src="https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Professional cleaning team in uniform"
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden="true"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-950/70" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 py-16 max-w-xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              We're available Mon – Sat, 7am – 8pm
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Still have{" "}
              <span className="font-script font-normal text-brand-400">questions?</span>
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Our team is ready to help. Book a free consultation and we'll walk
              you through everything — no pressure, no obligation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-600 text-white font-semibold text-base hover:bg-brand-500 active:scale-95 transition-all shadow-lg shadow-brand-900/40"
            >
              Book a Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
