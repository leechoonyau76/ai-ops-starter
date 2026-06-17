"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "One verified source everyone trusts.",
    before: "Knowledge in five versions across email, drives, and desktops.",
    theme: "Knowledge",
  },
  {
    quote: "Decisions captured, searchable, and assigned.",
    before: "Decisions live in people's memory and get re-argued.",
    theme: "Decisions",
  },
  {
    quote: "One visible plan across departments and stakeholders.",
    before: "Work tracked in heads and scattered chat threads.",
    theme: "Work",
  },
  {
    quote: "Notion AI assisting people on top of one verified source.",
    before: "AI used, if at all, as a separate chatbot on the side.",
    theme: "Intelligence",
  },
  {
    quote: "Value stays in the system; the next hire inherits it.",
    before: "Value walks out the door when a person leaves.",
    theme: "Continuity",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative py-32 lg:py-40 border-t border-foreground/10 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Before and after
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main Quote */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <p
              className={`font-mono text-xs tracking-widest uppercase text-muted-foreground mb-6 transition-all duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              With the connected foundation
            </p>
            <blockquote
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                {activeTestimonial.quote}
              </p>
            </blockquote>

            {/* Before state */}
            <div
              className={`mt-12 flex items-start gap-4 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground mt-1 shrink-0">
                Today
              </span>
              <p className="text-lg text-muted-foreground line-through decoration-foreground/20 max-w-md">
                {activeTestimonial.before}
              </p>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 border border-foreground/10 transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                The shift
              </span>
              <p className="font-display text-3xl md:text-4xl text-foreground">
                {activeTestimonial.theme}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-2 transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reframe Marquee Label */}
        <div className="mt-24 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            Fix the environment, not your people&apos;s willingness
          </p>
        </div>
      </div>
      
      {/* Full-width marquee outside container */}
      <div className="w-full">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {["Antifragile, not merely resilient", "Knowledge that builds itself", "Continuity through turnover", "Capacity given back to the mission", "A foundation that compounds", "People who can think and rest"].map(
                (phrase) => (
                  <span
                    key={`${setIdx}-${phrase}`}
                    className="font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                  >
                    {phrase}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
