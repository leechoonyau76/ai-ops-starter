"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Solution: [
    { name: "The gaps", href: "#gaps" },
    { name: "What we build", href: "#build" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Funded categories", href: "#developers" },
  ],
  Engagement: [
    { name: "Before & after", href: "#testimonials" },
    { name: "Is it a fit?", href: "#fit" },
    { name: "Investment", href: "#investment" },
    { name: "Data governance", href: "#security" },
  ],
  clickTRUE: [
    { name: "About Us", href: "https://www.clicktrue.biz/company", badge: "Est. 2008" },
    { name: "Sales & Marketing (HubSpot)", href: "https://page.clicktrue.biz/inbound-marketing-hubspot-agency" },
    { name: "Operations & Service (Notion AI)", href: "https://page.clicktrue.biz/notion-consulting-partner" },
    { name: "Book a discovery call", href: "https://meetings.hubspot.com/jeremewong/book" },
  ],
  Contact: [
    { name: "Mission & Values", href: "https://www.clicktrue.biz/clicktrue-values-mission" },
    { name: "Management Team", href: "https://www.clicktrue.biz/company/management-team" },
    { name: "Our Offices", href: "https://www.clicktrue.biz/contact-us/clicktrue-office" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/clicktrue/" },
  { name: "Notion", href: "https://page.clicktrue.biz/notion-consulting-partner" },
  { name: "Email", href: "mailto:hello@clicktrue.biz" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">clickTRUE</span>
                <span className="text-xs text-muted-foreground font-mono">× Notion</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                One connected place to bring your operations together — a Notion +
                AI foundation built for SSAs, by a Singapore team with 25+ years of
                building digital platforms.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 clickTRUE Pte Ltd. Ai Ops Starter for SSAs.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              clickTRUE × Notion · Ai Operations & Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
