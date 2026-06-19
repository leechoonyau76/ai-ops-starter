import type { Metadata } from 'next'
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FitSection } from "@/components/landing/fit-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: 'Notion AI Ops Starter for SSAs | clickTRUE',
  description: 'A structured first step into Notion AI for Social Service Agencies. Centralise knowledge, decisions, and work — boosting non-profits\' AI productivity.',
  alternates: {
    canonical: 'https://notion.clicktrue.biz/notion-ai-ops-starter-ssa',
  },
  openGraph: {
    title: 'Notion AI Ops Starter for SSAs | clickTRUE',
    description: 'A structured first step into Notion AI for Social Service Agencies. Centralise knowledge, decisions, and work — boosting non-profits\' AI productivity.',
    url: 'https://notion.clicktrue.biz/notion-ai-ops-starter-ssa',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
}
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <InfrastructureSection />
      <MetricsSection />
      <IntegrationsSection />
      <SecuritySection />
      <DevelopersSection />
      <TestimonialsSection />
      <FitSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Notion AI Ops Starter for SSAs",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "A structured first step into Notion AI for Social Service Agencies. Centralise knowledge, decisions, and work — boosting non-profits' AI productivity.",
          "url": "https://notion.clicktrue.biz/notion-ai-ops-starter-ssa",
          "offers": {"@type": "Offer", "price": "0", "priceCurrency": "SGD"},
          "provider": {"@type": "Organization", "name": "clickTRUE", "url": "https://www.clicktrue.biz"}
        })}}
      />
    </main>
  );
}
