"use client";

import { useEffect, useState, useRef } from "react";

const capabilities = [
  {
    title: "Take AI meeting notes",
    detail: "Every meeting captured, summarised, and assigned once.",
    tag: "Flagship",
  },
  {
    title: "Search answers across tools",
    detail: "One query pulls verified answers in seconds, not hours.",
    tag: "Knowledge",
  },
  {
    title: "Build roadmaps & project plans",
    detail: "Shared trackers everyone can see and update.",
    tag: "Work",
  },
  {
    title: "Centralise organisational knowledge",
    detail: "One verified source of truth a new hire trusts on day one.",
    tag: "Continuity",
  },
  {
    title: "Manage obligation documents",
    detail: "Owners and due dates make compliance visible and routine.",
    tag: "Compliance",
  },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCapability, setActiveCapability] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCapability((prev) => (prev + 1) % capabilities.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="capabilities" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              What Notion + AI does
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Five gaps,
              <br />
              closed.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              These aren&apos;t five features to learn. They&apos;re five gaps closed —
              and every one takes load off the people currently absorbing it by
              hand, as a by-product of normal work.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">5</div>
                <div className="text-sm text-muted-foreground">Capabilities</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">3</div>
                <div className="text-sm text-muted-foreground">Productivity categories</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">1</div>
                <div className="text-sm text-muted-foreground">Verified source</div>
              </div>
            </div>
          </div>

          {/* Right: Location list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Notion AI · for your whole team</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  In one workspace
                </span>
              </div>

              {/* Capabilities */}
              <div>
                {capabilities.map((capability, index) => (
                  <div
                    key={capability.title}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between gap-4 transition-all duration-300 ${
                      activeCapability === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span 
                        className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-300 ${
                          activeCapability === index ? "bg-foreground" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{capability.title}</div>
                        <div className="text-sm text-muted-foreground">{capability.detail}</div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">{capability.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
