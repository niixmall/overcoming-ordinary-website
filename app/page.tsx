import { Navbar } from "@/components/oo/navbar"
import { Hero } from "@/components/oo/hero"
import { QuoteBanner } from "@/components/oo/quote-banner"
import { Training } from "@/components/oo/training"
import { Domains } from "@/components/oo/domains"
import { About } from "@/components/oo/about"

import { Partners } from "@/components/oo/partners"
import { PartnersGrid } from "@/components/oo/partners-grid"
import { PlaybookCta } from "@/components/oo/playbook-cta"
import { Footer } from "@/components/oo/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Partners />
        <About />
        <QuoteBanner />
        <Training />
        <Domains />
        <PartnersGrid />
        <PlaybookCta />
      </main>
      <Footer />
    </>
  )
}
