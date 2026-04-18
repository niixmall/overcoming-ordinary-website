"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is this therapy or clinical treatment?",
    answer:
      "No. OO Performance Assessment is not clinical care and is not a substitute for mental health treatment. It is structured, evidence-based performance consulting designed for healthy, high-functioning performers who want an objective picture of what is driving — or limiting — their results. If clinical needs are identified during the process, appropriate referrals will be made.",
  },
  {
    question: "Who conducts the assessments?",
    answer:
      "All assessments are overseen by Dr. Dillon Small, PsyD. Ongoing coaching within Tier 2 packages is delivered by OO-trained coaches — practitioners with backgrounds in sport psychology, military performance, and leadership development who are selected and supervised by Dr. Small.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Tier 1 Intake Assessments are completed in a single 90-minute session. Your written performance report is delivered within five business days. Tier 2 packages begin with the same intake process and transition into an ongoing monthly rhythm. Tier 3 organizational engagements are scoped individually based on team size and organizational context.",
  },
  {
    question: "Is this available remotely?",
    answer:
      "Yes. All Tier 1 and Tier 2 services are available virtually via secure video session. Tier 3 organizational engagements include both virtual and on-site delivery options depending on scope and location.",
  },
  {
    question: "How is this different from a personality test?",
    answer:
      "Personality assessments describe who you are. Our battery measures how you perform — under pressure, across time, and relative to your specific goals and context. The instruments we use are validated psychometric tools drawn from clinical psychology, sport science, and military performance research. The output is not a personality type. It is a performance picture with specific, actionable recommendations.",
  },
]

export function AssessmentFaq() {
  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            Common questions
          </p>
          <h2 className="mb-6 font-display text-4xl tracking-wider text-foreground sm:text-5xl">
            Common questions
          </h2>
          <div className="mx-auto h-px w-16 bg-accent" aria-hidden="true" />
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline hover:text-accent transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
