const stats = [
  { value: "100+", label: "Homes Cleaned" },
  { value: "4.9★", label: "Average Rating" },
  { value: "10+",  label: "Years in Lagos"  },
  { value: "100%", label: "Satisfaction"    },
];

const perks = [
  "Vetted, insured & uniformed staff",
  "Eco-friendly, family-safe products",
  "Service anywhere across Lagos",
  "100% satisfaction re-clean guarantee",
  "Same-day booking available",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-900"
    >
      {/* ── Background video ───────────────────────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source
          src="https://videos.pexels.com/video-files/6195526/6195526-hd_1280_720_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Gradient overlays ──────────────────────────────────────────── */}
      {/* left-to-right dark fade so text is always readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-gray-900/30"
      />
      {/* bottom vignette to blend into the next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-950/60 to-transparent"
      />

      {/* ── Decorative blob ───────────────────── */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-72 h-72 sm:w-[32rem] sm:h-[32rem] bg-brand-500 rounded-full opacity-10 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"
      />

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-24 pt-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16 xl:gap-24">

          {/* ── Left: main copy ── */}
          <div className="max-w-2xl space-y-8 text-center lg:text-left mx-auto lg:mx-0">

            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                Now serving all of Lagos
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
              A spotless space,{" "}
              <span className="text-brand-400 font-script font-normal">every single time.</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              <span className="text-white bg-brand-500/50 font-bold"> Tinsel Cleaning Services </span> delivers professional, eco-friendly cleaning
              for homes and offices across Lagos. We handle the mess — you enjoy
              the freshness.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-7 py-3.5 rounded-full bg-brand-600 text-white font-semibold text-base hover:bg-brand-500 active:scale-95 transition-all shadow-lg shadow-brand-900/40"
              >
                Book a Clean Today
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
              >
                See Our Services
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 pt-4 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-white">{s.value}</p>
                  <p className="text-sm text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: perks box — hidden on small screens ── */}
          <div className="hidden lg:block lg:w-72 xl:w-80 2xl:w-96 flex-shrink-0">
            <div className="bg-gray-950/60 backdrop-blur-md border border-white/15 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-white/10 flex items-center gap-2.5">
                <svg width="18" height="18" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <rect width="36" height="36" rx="9" fill="#059474" />
                  <text x="18" y="25" textAnchor="middle" fill="white" fontWeight="800" fontSize="14" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="-0.5">TS</text>
                </svg>
                <p className="text-white font-bold text-xs uppercase tracking-widest">Why Choose Tinsel?</p>
              </div>
              {/* Perks list */}
              <ul className="divide-y divide-white/10">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 px-5 py-3.5">
                    <svg className="w-4 h-4 mt-0.5 text-brand-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/85 text-sm leading-snug">{perk}</span>
                  </li>
                ))}
              </ul>
              {/* Footer nudge */}
              <div className="px-5 py-4 border-t border-white/10 bg-brand-600/20">
                <a href="#contact" className="flex items-center justify-center gap-2 text-brand-300 text-xs font-semibold hover:text-brand-200 transition-colors">
                  Get a free quote today
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll hint ────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 text-xs animate-bounce pointer-events-none">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        Scroll
      </div>
    </section>
  );
}
