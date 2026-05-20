"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/* ─── Placeholder visuals ──────────────────────────────────────────────── */

function BeforeScene() {
  return (
    <div className="absolute inset-0 select-none">
      <img
        src="https://images.pexels.com/photos/3787027/pexels-photo-3787027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Dirty kitchen sink piled with unwashed dishes"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* warm tint overlay to reinforce the "grime" feel */}
      <div className="absolute inset-0 bg-amber-950/20" />
    </div>
  );
}

function AfterScene() {
  return (
    <div className="absolute inset-0 select-none">
      <img
        src="https://images.pexels.com/photos/6996095/pexels-photo-6996095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Spotless minimalist kitchen after professional cleaning"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* very subtle cool tint to emphasise freshness */}
      <div className="absolute inset-0 bg-teal-950/5" />
    </div>
  );
}

/* ─── Slider ───────────────────────────────────────────────────────────── */

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const clampedPos = (clientX: number) => {
    if (!containerRef.current) return 50;
    const { left, width } = containerRef.current.getBoundingClientRect();
    return Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
  };

  /* mouse */
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition(clampedPos(e.clientX));
    },
    [isDragging]
  );

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  /* touch */
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
  };

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      setPosition(clampedPos(e.touches[0].clientX));
    },
    [isDragging]
  );

  const onTouchEnd = useCallback(() => setIsDragging(false), []);

  /* also allow clicking anywhere on the container to jump the slider */
  const onContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition(clampedPos(e.clientX));
  };

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging, onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  return (
    <div
      ref={containerRef}
      onClick={onContainerClick}
      className="relative w-full overflow-hidden rounded-2xl shadow-2xl cursor-col-resize select-none"
      style={{ aspectRatio: "16 / 9" }}
      aria-label="Before and after cleaning comparison slider"
    >
      {/* ── After layer (base, full width) ── */}
      <AfterScene />

      {/* ── Before layer (clipped to left of divider) ── */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <BeforeScene />
      </div>

      {/* ── Labels (bottom corners, always visible) ── */}
      <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
        <span className="bg-amber-800/90 text-amber-50 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow">
          Before
        </span>
      </div>
      <div className="absolute bottom-3 right-3 z-20 pointer-events-none">
        <span className="bg-brand-700/90 text-brand-50 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow">
          After
        </span>
      </div>

      {/* ── Divider line ── */}
      <div
        className="absolute top-0 bottom-0 z-10 w-px bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* ── Drag handle ── */}
      <div
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-xl border-2 border-white/80 cursor-col-resize transition-transform duration-150 ${
          isDragging ? "scale-110" : "hover:scale-105"
        }`}
        style={{ left: `${position}%` }}
        aria-label="Drag to compare"
        role="slider"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* chevron arrows */}
        <svg
          className="w-5 h-5 text-brand-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Section wrapper ──────────────────────────────────────────────────── */

export default function BeforeAfterSection() {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
              The Tinsel Difference
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            See the transformation{" "}
            <span className="text-brand-600">for yourself</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Drag the slider to reveal how Tinsel turns any messy space into a
            spotless, fresh environment.
          </p>
        </div>

        {/* Slider */}
        <BeforeAfterSlider />

        {/* Hint */}
        <p className="text-center text-sm text-gray-400 mt-4 flex items-center justify-center gap-1.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
          Drag the handle or tap anywhere to compare
        </p>

        
      </div>
    </section>
  );
}
