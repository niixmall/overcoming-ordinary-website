import { Navbar } from "@/components/oo/navbar"
import { Hero } from "@/components/oo/hero"
import { Philosophy } from "@/components/oo/philosophy"
import { QuoteBanner } from "@/components/oo/quote-banner"
import { Training } from "@/components/oo/training"
import { Domains } from "@/components/oo/domains"
import { About } from "@/components/oo/about"

import { Partners } from "@/components/oo/partners"
import { PlaybookCta } from "@/components/oo/playbook-cta"
import { Footer } from "@/components/oo/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <About />
      <QuoteBanner />
      <Training />
      <Domains />
      <Partners />
      <PlaybookCta />
      <Footer />
    </main>
  )
}
