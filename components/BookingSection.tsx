"use client";

import { useState } from "react";

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  location: string;
  description: string;
  preferredDate: string;
  agreeTerms: boolean;
}

type Errors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  fullName: "",
  phone: "",
  email: "",
  serviceType: "",
  location: "",
  description: "",
  preferredDate: "",
  agreeTerms: false,
};

const SERVICES = [
  "Residential Deep Clean",
  "Office / Commercial Cleaning",
  "Post-Construction Cleanup",
  "Carpet & Upholstery Cleaning",
  "Disinfection Service",
  "Customised Service",
];

const LOCATIONS = [
  "Lekki Phase 1",
  "Lekki Phase 2",
  "Victoria Island (VI)",
  "Ikoyi",
  "Ajah",
  "Ikeja",
  "Surulere",
  "Yaba",
  "Gbagada",
  "Magodo",
  "Ojodu Berger",
  "Maryland",
  "Festac Town",
  "Apapa",
  "Other (specify in description)",
];

const STEPS = [
  { number: 1, title: "Contact Info",    short: "Contact"  },
  { number: 2, title: "Service Details", short: "Service"  },
  { number: 3, title: "Space & Date",    short: "Details"  },
];

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function today() {
  return new Date().toISOString().split("T")[0];
}

function validate(step: number, data: FormData): Errors {
  const e: Errors = {};
  if (step === 1) {
    if (!data.fullName.trim())                     e.fullName    = "Full name is required.";
    if (!data.phone.trim())                        e.phone       = "Phone number is required.";
    else if (!/^[+\d][\d\s\-]{6,14}$/.test(data.phone.trim()))
                                                   e.phone       = "Enter a valid phone number.";
    if (!data.email.trim())                        e.email       = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                                                   e.email       = "Enter a valid email address.";
  }
  if (step === 2) {
    if (!data.serviceType)                         e.serviceType = "Please select a service.";
    if (!data.location)                            e.location    = "Please select a location.";
  }
  if (step === 3) {
    if (!data.description.trim())                  e.description = "Please describe your space.";
    else if (data.description.trim().length < 20)  e.description = "Please add a bit more detail (at least 20 characters).";
    if (!data.preferredDate)                       e.preferredDate = "Please choose a preferred date.";
    else if (data.preferredDate < today())         e.preferredDate = "Date must be today or in the future.";
    if (!data.agreeTerms)                          e.agreeTerms  = "You must agree to the terms to proceed.";
  }
  return e;
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {msg}
    </p>
  );
}

const inputCls = (err?: string) =>
  `w-full rounded-xl border px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:ring-2 ${
    err
      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
      : "border-gray-200 focus:border-brand-400 focus:ring-brand-100"
  }`;

/* ─── Step indicators ────────────────────────────────────────────────────── */

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center mb-8">
      {STEPS.map((s, i) => {
        const done    = current > s.number;
        const active  = current === s.number;
        return (
          <div key={s.number} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  done
                    ? "bg-brand-600 text-white"
                    : active
                    ? "bg-brand-600 text-white ring-4 ring-brand-100"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {done ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  s.number
                )}
              </div>
              <span className={`mt-1.5 text-xs font-medium hidden sm:block ${active ? "text-brand-600" : done ? "text-brand-500" : "text-gray-400"}`}>
                {s.short}
              </span>
            </div>
            {/* Connector */}
            {i < STEPS.length - 1 && (
              <div className={`h-0.5 w-12 sm:w-20 mx-1 rounded transition-all duration-500 ${current > s.number ? "bg-brand-500" : "bg-gray-200"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Step forms ─────────────────────────────────────────────────────────── */

function Step1({
  data, errors, onChange,
}: {
  data: FormData;
  errors: Errors;
  onChange: (k: keyof FormData, v: string) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Adaeze Okonkwo"
          value={data.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          className={inputCls(errors.fullName)}
        />
        <FieldError msg={errors.fullName} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input
          type="tel"
          placeholder="e.g. +234 801 234 5678"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className={inputCls(errors.phone)}
        />
        <FieldError msg={errors.phone} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          placeholder="e.g. adaeze@example.com"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          className={inputCls(errors.email)}
        />
        <FieldError msg={errors.email} />
      </div>
    </div>
  );
}

function Step2({
  data, errors, onChange,
}: {
  data: FormData;
  errors: Errors;
  onChange: (k: keyof FormData, v: string) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Service Type <span className="text-red-400">*</span>
        </label>
        <select
          value={data.serviceType}
          onChange={(e) => onChange("serviceType", e.target.value)}
          className={inputCls(errors.serviceType) + " bg-white"}
        >
          <option value="">— Select a service —</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <FieldError msg={errors.serviceType} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Location / Area <span className="text-red-400">*</span>
        </label>
        <select
          value={data.location}
          onChange={(e) => onChange("location", e.target.value)}
          className={inputCls(errors.location) + " bg-white"}
        >
          <option value="">— Select your area —</option>
          {LOCATIONS.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <FieldError msg={errors.location} />
      </div>

      {/* Service summary card */}
      {data.serviceType && (
        <div className="flex items-start gap-3 bg-brand-50 border border-brand-100 rounded-xl p-4 text-sm text-brand-700">
          <span className="text-xl mt-0.5">✅</span>
          <div>
            <p className="font-semibold">{data.serviceType}</p>
            <p className="text-brand-500 mt-0.5">
              Our team will contact you to confirm details and pricing before the visit.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function Step3({
  data, errors, onChange, onCheck,
}: {
  data: FormData;
  errors: Errors;
  onChange: (k: keyof FormData, v: string) => void;
  onCheck: (v: boolean) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Describe Your Space <span className="text-red-400">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="e.g. 3-bedroom flat in Lekki, post-renovation dust everywhere, needs deep kitchen clean..."
          value={data.description}
          onChange={(e) => onChange("description", e.target.value)}
          className={inputCls(errors.description) + " resize-none"}
        />
        <div className="flex items-center justify-between mt-1">
          <FieldError msg={errors.description} />
          <span className={`text-xs ml-auto ${data.description.length < 20 ? "text-gray-300" : "text-brand-500"}`}>
            {data.description.length} chars
          </span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Preferred Date <span className="text-red-400">*</span>
        </label>
        <input
          type="date"
          min={today()}
          value={data.preferredDate}
          onChange={(e) => onChange("preferredDate", e.target.value)}
          className={inputCls(errors.preferredDate) + " bg-white"}
        />
        <FieldError msg={errors.preferredDate} />
      </div>

      <div>
        <label className={`flex items-start gap-3 cursor-pointer select-none group`}>
          <div className="relative mt-0.5 flex-shrink-0">
            <input
              type="checkbox"
              checked={data.agreeTerms}
              onChange={(e) => onCheck(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${
                data.agreeTerms
                  ? "bg-brand-600 border-brand-600"
                  : errors.agreeTerms
                  ? "border-red-400 bg-white"
                  : "border-gray-300 bg-white group-hover:border-brand-400"
              }`}
            >
              {data.agreeTerms && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-sm text-gray-600 leading-snug">
            I agree to Tinsel's{" "}
            <span className="text-brand-600 underline underline-offset-2 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-brand-600 underline underline-offset-2 cursor-pointer">
              Privacy Policy
            </span>
            , and consent to being contacted about my booking.
          </span>
        </label>
        <FieldError msg={errors.agreeTerms} />
      </div>
    </div>
  );
}

/* ─── Success screen ─────────────────────────────────────────────────────── */

function SuccessScreen({ data, onReset }: { data: FormData; onReset: () => void }) {
  return (
    <div className="text-center py-4 space-y-6">
      {/* Animated checkmark */}
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-brand-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-extrabold text-gray-900">Booking Request Sent!</h3>
        <p className="text-gray-500 mt-2 text-sm leading-relaxed max-w-sm mx-auto">
          Thanks, <span className="font-semibold text-gray-700">{data.fullName.split(" ")[0]}</span>! We've received your request and will call or WhatsApp you at{" "}
          <span className="font-semibold text-gray-700">{data.phone}</span> within 2 hours to confirm.
        </p>
      </div>

      {/* Summary pill */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-sm text-left space-y-2 max-w-sm mx-auto">
        {[
          { label: "Service",  value: data.serviceType },
          { label: "Location", value: data.location },
          { label: "Date",     value: new Date(data.preferredDate + "T00:00:00").toLocaleDateString("en-NG", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between gap-4">
            <span className="text-gray-400">{label}</span>
            <span className="font-semibold text-gray-700 text-right">{value}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium underline underline-offset-2"
      >
        Submit another request
      </button>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function BookingSection() {
  const [step, setStep]       = useState(1);
  const [data, setData]       = useState<FormData>(INITIAL);
  const [errors, setErrors]   = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (key: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onCheck = (value: boolean) => {
    setData((prev) => ({ ...prev, agreeTerms: value }));
    if (errors.agreeTerms) setErrors((prev) => ({ ...prev, agreeTerms: undefined }));
  };

  const handleNext = () => {
    const errs = validate(step, data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    const errs = validate(3, data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleReset = () => {
    setData(INITIAL);
    setErrors({});
    setStep(1);
    setSubmitted(false);
  };

  const stepTitles = ["Your Contact Info", "Service Details", "Space & Date"];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
              Book a Clean
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Ready for a spotless space?{" "}
            <span className="text-brand-600">Let's talk.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Fill in the form below and our team will reach out within 2 hours to
            confirm your booking and provide a free quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Form card ── */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-6 sm:p-8">
            {submitted ? (
              <SuccessScreen data={data} onReset={handleReset} />
            ) : (
              <>
                <StepIndicator current={step} />

                {/* Step title */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-brand-500 uppercase tracking-widest mb-1">
                    Step {step} of {STEPS.length}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    {stepTitles[step - 1]}
                  </h3>
                </div>

                {/* Fields */}
                {step === 1 && <Step1 data={data} errors={errors} onChange={onChange} />}
                {step === 2 && <Step2 data={data} errors={errors} onChange={onChange} />}
                {step === 3 && <Step3 data={data} errors={errors} onChange={onChange} onCheck={onCheck} />}

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between gap-3">
                  {step > 1 ? (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 active:scale-95 transition-all shadow-md shadow-brand-200"
                    >
                      Next Step
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 active:scale-95 transition-all shadow-md shadow-brand-200"
                    >
                      Confirm Booking
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Progress bar */}
                <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-500 rounded-full transition-all duration-500"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </>
            )}
          </div>

          {/* ── Side info panel ── */}
          <div className="space-y-6 lg:pt-4">
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
              <h4 className="font-bold text-brand-800 mb-3 flex items-center gap-2">
                <span>📞</span> How It Works
              </h4>
              <ol className="space-y-3 text-sm text-brand-700">
                {[
                  "Fill out this form — takes under 2 minutes.",
                  "We call or WhatsApp you within 2 hours.",
                  "Get a free, no-obligation quote.",
                  "Confirm and we'll show up on your date!",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <span>🛡️</span> Our Promise to You
              </h4>
              {[
                { icon: "✅", text: "Free re-clean if you're not 100% satisfied" },
                { icon: "🔒", text: "Fully insured and vetted cleaning staff" },
                { icon: "💬", text: "WhatsApp support before and after your clean" },
                { icon: "🌿", text: "Eco-friendly, pet-safe cleaning products" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="flex-shrink-0">{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">💬</span>
              <div>
                <p className="font-semibold text-sm">Prefer to call or WhatsApp?</p>
                <p className="text-gray-400 text-xs mt-1 mb-3">
                  Our team is available Mon – Sat, 7am – 8pm.
                </p>
                <a
                  href="tel:+2348000000000"
                  className="inline-block bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
                >
                  +234 800 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
