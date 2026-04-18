import type { Metadata } from "next"
import { Navbar } from "@/components/oo/navbar"
import { Footer } from "@/components/oo/footer"
import { AssessmentHero } from "@/components/assessment/hero"
import { AssessmentProblem } from "@/components/assessment/problem"
import { AssessmentFramework } from "@/components/assessment/framework"
import { AssessmentDomains } from "@/components/assessment/domains"
import { AssessmentTiers } from "@/components/assessment/tiers"
import { AssessmentAudience } from "@/components/assessment/audience"
import { AssessmentCredentials } from "@/components/assessment/credentials"
import { AssessmentFaq } from "@/components/assessment/faq"
import { AssessmentCta } from "@/components/assessment/cta"

export const metadata: Metadata = {
  title: "Durable Mindset Assessment",
  description:
    "Science-based performance assessment for military, tactical, sport, and leadership populations. Built on validated psychology. Delivered by a licensed clinical psychologist and military aviator.",
  alternates: {
    canonical: "/durable-mindset-assessment",
  },
  openGraph: {
    title: "Durable Mindset Assessment | Overcoming Ordinary",
    description:
      "Science-based performance assessment for military, tactical, sport, and leadership populations. Built on validated psychology.",
  },
}

export default function DurableMindsetAssessmentPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AssessmentHero />
        <AssessmentProblem />
        <AssessmentFramework />
        <AssessmentDomains />
        <AssessmentTiers />
        <AssessmentAudience />
        <AssessmentCredentials />
        <AssessmentFaq />
        <AssessmentCta />
      </main>
      <Footer />
    </>
  )
}
