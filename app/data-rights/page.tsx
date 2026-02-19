import type { Metadata } from "next"
import { LegalLayout } from "@/components/oo/legal-layout"

export const metadata: Metadata = {
  title: "Data Rights",
  description:
    "Exercise your data privacy rights. Request access, deletion, or correction of your personal information.",
}

export default function DataRightsPage() {
  return (
    <LegalLayout title="DATA RIGHTS" lastUpdated="February 18, 2026">
      <p>
        Overcoming Ordinary is committed to protecting your privacy and respecting your data
        rights. This page allows you to exercise your rights under applicable data protection
        laws, including the GDPR (EU) and CCPA/CPRA (California).
      </p>

      <h2>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</h2>
      <p>
        Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act
        (CPRA), California residents have the right to opt out of the sale or sharing of their
        personal information.
      </p>
      <p>
        <strong>Overcoming Ordinary does not sell your personal information.</strong> However,
        if you have consented to marketing cookies, certain third-party tracking technologies
        may constitute &quot;sharing&quot; under CCPA/CPRA. You can opt out by:
      </p>
      <ul>
        <li>Rejecting marketing cookies via our cookie consent banner</li>
        <li>Updating your cookie preferences (link in our website footer)</li>
        <li>Submitting a request using the form below</li>
      </ul>

      <h2>YOUR DATA RIGHTS</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
        <li><strong>Deletion:</strong> Request that we delete your personal information</li>
        <li><strong>Correction:</strong> Request that we correct inaccurate personal information</li>
        <li><strong>Portability:</strong> Request your data in a portable format</li>
        <li><strong>Opt out:</strong> Opt out of the sale or sharing of personal information</li>
        <li><strong>Withdraw consent:</strong> Withdraw previously given consent at any time</li>
      </ul>

      <h2>SUBMIT A DATA REQUEST</h2>
      <p>
        To exercise any of the rights listed above, please email us with your request. We will
        verify your identity and respond within the timeframes required by law (typically 30
        days under GDPR, 45 days under CCPA).
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:Business@overcomingordinary.com?subject=Data%20Rights%20Request">
          Business@overcomingordinary.com
        </a>
      </p>
      <p>
        Please include the following in your request:
      </p>
      <ol>
        <li>Your full name</li>
        <li>The email address associated with your interaction with us</li>
        <li>The type of request (access, deletion, correction, opt-out)</li>
        <li>Any details that help us locate your information</li>
      </ol>

      <h2>VERIFICATION</h2>
      <p>
        To protect your privacy, we may need to verify your identity before processing your
        request. We will never ask for sensitive information such as Social Security numbers or
        payment details as part of the verification process.
      </p>

      <h2>NON-DISCRIMINATION</h2>
      <p>
        We will not discriminate against you for exercising your data privacy rights. You will
        not receive different pricing, quality, or service levels as a result of making a
        request.
      </p>

      <h2>CONTACT</h2>
      <p>
        For questions about your data rights, contact us at:<br />
        <strong>Email:</strong> Business@overcomingordinary.com<br />
        <strong>Website:</strong>{" "}
        <a href="/contact">overcomingordinary.com/contact</a>
      </p>
    </LegalLayout>
  )
}
