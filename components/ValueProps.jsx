"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const ROTATE_MS = 4000;
const TRANSITION_MS = 500;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ValueProps = ({ items, onActiveChange }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef(null);

  const safeItems = useMemo(() => Array.isArray(items) ? items : [], [items]);
  const total = safeItems.length;

  useEffect(() => {
    if (total === 0) return;
    if (isPaused || animating) return;
    const id = setTimeout(() => {
      setAnimating(true);
      // Wait for fade-out/slide-left, then advance index
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % total);
        setAnimating(false);
      }, TRANSITION_MS);
    }, ROTATE_MS);
    return () => clearTimeout(id);
  }, [index, isPaused, animating, total]);

  // Notify parent of active item changes
  useEffect(() => {
    if (!onActiveChange || total === 0) return;
    onActiveChange({ index, item: safeItems[index] });
  }, [index, total, onActiveChange, safeItems]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMouseEnter = () => setIsPaused(true);
    const onMouseLeave = () => setIsPaused(false);
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const onDotClick = (i) => {
    if (i === index) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(i);
      setAnimating(false);
    }, TRANSITION_MS);
  };

  const current = safeItems[index] || {};

  const renderBackground = (variant) => {
    const base = "absolute inset-0 rounded-2xl transition-opacity duration-500";
    switch (variant) {
      case "radial":
        return (
          <div
            className={base}
            style={{
              backgroundImage:
                "radial-gradient(60rem 60rem at 20% 20%, rgba(234,254,116,0.12), transparent 40%), radial-gradient(40rem 40rem at 80% 60%, rgba(255,255,255,0.06), transparent 50%), linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
            }}
            aria-hidden="true"
          />
        );
      case "grid":
        return (
          <div
            className={base}
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 40px)",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
            aria-hidden="true"
          />
        );
      case "dots":
        return (
          <div
            className={base}
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 10% 10%, rgba(255,255,255,0.08) 0 1px, transparent 1px 18px), linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
            }}
            aria-hidden="true"
          />
        );
      case "waves":
        return (
          <div
            className={base}
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, rgba(234,254,116,0.09) 0 10px, transparent 10px 40px), linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
            }}
            aria-hidden="true"
          />
        );
      default:
        return (
          <div
            className={base}
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            aria-hidden="true"
          />
        );
    }
  };

  return (
    <div ref={containerRef} className="relative select-none">
      {/* Live region for accessibility */}
      <div
        role="status"
        aria-live="polite"
        className="sr-only"
      >
        {current.title}
      </div>

      {/* Fixed-height container to prevent layout shift */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-800" style={{ minHeight: "12rem" }}>
        {/* Background layer per item */}
        <div
          key={`bg-${index}`}
          className={classNames(
            "absolute inset-0 transition-all duration-500",
            animating ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"
          )}
        >
          {renderBackground(current.bg)}
        </div>

        {/* Foreground content */}
        <div className="relative z-10 p-6 md:p-8">
          <div
            key={`fg-${index}`}
            className={classNames(
              "transition-all duration-500",
              animating ? "opacity-0 -translate-x-3" : "opacity-100 translate-x-0"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#eafe74] mb-3">
              {current.title}
            </h3>
            <div className="h-1 w-16 bg-[#eafe74] rounded mb-5"></div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {current.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      {total > 1 && (
        <div className="mt-6 flex items-center justify-start gap-2" aria-label="Value proposition navigation">
          {safeItems.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show item ${i + 1}`}
              aria-pressed={i === index}
              onClick={() => onDotClick(i)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              className={classNames(
                "h-2.5 rounded-full transition-all duration-300",
                i === index ? "w-6 bg-[#eafe74]" : "w-2.5 bg-gray-600 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ValueProps;


