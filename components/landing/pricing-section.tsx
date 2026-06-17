"use client";

import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Core services",
    description: "Modules 1–5, across the service window",
    price: "$19,200",
    unit: "from, SGD",
    scope: "~32 hours of Partner + Consultant work",
    features: [
      "Workspace design & implementation",
      "Core connected databases & templates",
      "Operations dashboard",
      "Training & education for 2 champions",
      "Adoption support / hypercare",
      "Outcome reporting at Month 12",
    ],
    cta: "Book a discovery call",
    popular: true,
  },
  {
    name: "Technical Support",
    description: "Module 6, drawn down on demand",
    price: "$7,200",
    unit: "SGD",
    scope: "4 TS units (16 hours) across Year 1",
    features: [
      "4-hour support blocks",
      "Used on demand through Year 1",
      "Billed at $450/hour",
      "Workspace fixes & extensions",
      "Configuration adjustments",
      "Champion escalation support",
    ],
    cta: "Book a discovery call",
    popular: false,
  },
  {
    name: "Notion Enterprise",
    description: "Licences resold & bundled by clickTRUE",
    price: "Bundled",
    unit: "into contract",
    scope: "≈ SGD $35 / user / month",
    features: [
      "Notion Enterprise plan",
      "Notion AI included",
      "Bundled into the contract",
      "Subject to Notion's prevailing pricing",
      "Data not used to train AI models",
      "Ongoing licensed use, Years 2–3",
    ],
    cta: "Book a discovery call",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="investment" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Investment
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            One foundation,
            <br />
            <span className="text-stroke">clearly costed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Partner + Consultant work is costed at a blended $600/hour; Technical
            Support at $450/hour. Notion Enterprise Seats over 3 years.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Core engagement
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl lg:text-6xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 font-mono">{plan.scope}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#discovery"
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All amounts are exclusive of 9% GST. Net 30 from invoice date. Targets
          are measurement goals jointly committed at kick-off, not contractual
          guarantees.
        </p>
      </div>
    </section>
  );
}
