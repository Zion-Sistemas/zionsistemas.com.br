import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { ValueProofSection } from "@/components/sections/value-proof"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { DifferentialsSection } from "@/components/sections/differentials"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { ResultsSection } from "@/components/sections/results"
import { CtaMidSection } from "@/components/sections/cta-mid"
import { FaqSection } from "@/components/sections/faq"
import { CtaFinalSection } from "@/components/sections/cta-final"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValueProofSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <HowItWorksSection />
        <ResultsSection />
        <CtaMidSection />
        <FaqSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </>
  )
}
