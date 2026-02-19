import type { Metadata } from "next"
import { LegalLayout } from "@/components/oo/legal-layout"

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility Statement for Overcoming Ordinary. Our commitment to web accessibility under WCAG 2.2 AA.",
}

export default function AccessibilityPage() {
  return (
    <LegalLayout title="ACCESSIBILITY STATEMENT" lastUpdated="February 18, 2026">
      <p>
        Overcoming Ordinary is committed to ensuring digital accessibility for people of all
        abilities. We continually improve the user experience for everyone and apply the
        relevant accessibility standards.
      </p>

      <h2>CONFORMANCE STATUS</h2>
      <p>
        We aim to conform to the{" "}
        <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>. These
        guidelines explain how to make web content more accessible to people with a wide array
        of disabilities. Conforming to these guidelines helps make the web more user-friendly
        for all people.
      </p>

      <h2>MEASURES WE TAKE</h2>
      <p>We have implemented the following measures to ensure accessibility:</p>
      <ul>
        <li>Semantic HTML structure with proper heading hierarchy (H1-H6)</li>
        <li>ARIA landmarks and roles for screen reader navigation</li>
        <li>Keyboard-accessible navigation and interactive elements</li>
        <li>Skip-to-content link for keyboard users</li>
        <li>Sufficient color contrast ratios (minimum 4.5:1 for text)</li>
        <li>Alternative text for all meaningful images</li>
        <li>Properly labeled form fields with error messaging</li>
        <li>Respect for prefers-reduced-motion user settings</li>
        <li>Video controls and pause capability</li>
        <li>Focus-visible indicators on all interactive elements</li>
        <li>No keyboard traps</li>
        <li>Logical tab order throughout the site</li>
      </ul>

      <h2>COMPATIBILITY</h2>
      <p>
        Our Site is designed to be compatible with the following assistive technologies:
      </p>
      <ul>
        <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
        <li>Screen magnification software</li>
        <li>Speech recognition software</li>
        <li>Keyboard-only navigation</li>
      </ul>

      <h2>KNOWN LIMITATIONS</h2>
      <p>
        Despite our best efforts, some content may not yet be fully accessible. We are
        actively working to identify and resolve any remaining issues. Known limitations
        include:
      </p>
      <ul>
        <li>Some third-party embedded content may not meet all accessibility standards</li>
        <li>Older PDF documents may not be fully screen-reader compatible</li>
      </ul>

      <h2>FEEDBACK AND CONTACT</h2>
      <p>
        We welcome your feedback on the accessibility of our Site. If you encounter
        accessibility barriers or have suggestions for improvement, please contact us:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:Business@overcomingordinary.com?subject=Accessibility%20Feedback">
          Business@overcomingordinary.com
        </a>
        <br />
        <strong>Contact page:</strong>{" "}
        <a href="/contact">overcomingordinary.com/contact</a>
      </p>
      <p>
        We will make reasonable efforts to respond to your feedback within 5 business days and
        to address identified issues in a timely manner.
      </p>

      <h2>REMEDIATION COMMITMENT</h2>
      <p>
        If we identify or are made aware of accessibility issues, we commit to:
      </p>
      <ul>
        <li>Acknowledging the issue within 5 business days</li>
        <li>Providing a timeline for remediation</li>
        <li>Offering alternative access methods where possible</li>
        <li>Resolving issues as promptly as feasible</li>
      </ul>

      <h2>ASSESSMENT APPROACH</h2>
      <p>
        We assess the accessibility of our Site through a combination of automated testing
        tools, manual testing with assistive technologies, and regular code audits against WCAG
        2.2 AA criteria.
      </p>
    </LegalLayout>
  )
}
