"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";

const goodFit = [
  "An SSA wanting to get your operations, knowledge, and handovers under control",
  "Looking to take a structured first step into Notion + AI",
  "Preparing for or already engaged with NCSS funding",
  "Ready to identify two internal champions",
];

const notFit = [
  "Need a full organisation-wide OS across every function on day one",
  "Require autonomous AI agents that send external messages unsupervised",
  "Want deep CRM and case-system integration from the very start",
  "Have no internal capacity to nominate two champions",
];

export function FitSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="fit" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Is this the right fit?
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Honest about
            <br />
            <span className="text-muted-foreground">where we start.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
          {/* Good fit */}
          <div
            className={`bg-background p-8 lg:p-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-display text-2xl lg:text-3xl mb-8">A good fit if you are</h3>
            <ul className="space-y-5">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-foreground/20">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit */}
          <div
            className={`bg-background p-8 lg:p-12 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-display text-2xl lg:text-3xl mb-8 text-muted-foreground">
              Not the right fit if you
            </h3>
            <ul className="space-y-5">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-foreground/10 text-muted-foreground">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-muted-foreground/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
