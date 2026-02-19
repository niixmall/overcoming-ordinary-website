import type { Metadata } from "next"
import { LegalLayout } from "@/components/oo/legal-layout"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Overcoming Ordinary. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="PRIVACY POLICY" lastUpdated="February 18, 2026">
      <p>
        Overcoming Ordinary (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed
        to protecting the personal information you share with us. This Privacy Policy explains
        how we collect, use, disclose, and safeguard your information when you visit our
        website at overcomingordinary.com (the &quot;Site&quot;).
      </p>

      <h2>1. INFORMATION WE COLLECT</h2>

      <h3>Personal Information You Provide</h3>
      <p>We may collect the following when you voluntarily submit it through our forms:</p>
      <ul>
        <li>Name (first and last)</li>
        <li>Email address</li>
        <li>Organization or affiliation</li>
        <li>Role or job title</li>
        <li>Message content (contact form submissions)</li>
      </ul>

      <h3>Automatically Collected Information</h3>
      <p>
        When you visit our Site, we may automatically collect certain information about your
        device and usage, including IP address, browser type, operating system, referring URLs,
        pages viewed, and time spent on pages. This data is only collected if you have
        consented to analytics cookies.
      </p>

      <h2>2. HOW WE USE YOUR INFORMATION</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Respond to your inquiries and fulfill your requests</li>
        <li>Deliver requested resources (e.g., playbooks, guides)</li>
        <li>Communicate about our services, events, and offerings</li>
        <li>Improve our website and user experience (with consent)</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. LEGAL BASES FOR PROCESSING (GDPR)</h2>
      <p>If you are in the European Economic Area, we process your personal data based on:</p>
      <ul>
        <li><strong>Consent:</strong> When you opt in to receive communications or allow analytics/marketing cookies</li>
        <li><strong>Legitimate interest:</strong> To respond to inquiries and improve our services</li>
        <li><strong>Contractual necessity:</strong> To deliver resources or services you have requested</li>
      </ul>

      <h2>4. COOKIES AND TRACKING</h2>
      <p>
        We use cookies and similar technologies as described in our{" "}
        <a href="/cookie-policy">Cookie Policy</a>. No non-essential cookies or tracking
        scripts are loaded until you provide consent through our cookie banner.
      </p>

      <h2>5. THIRD-PARTY SHARING</h2>
      <p>
        We do not sell your personal information. We may share data with trusted service
        providers who assist in operating our website and conducting our business, subject to
        confidentiality agreements. These may include:
      </p>
      <ul>
        <li>Email service providers</li>
        <li>Analytics providers (with your consent)</li>
        <li>Hosting and infrastructure providers</li>
      </ul>

      <h2>6. YOUR RIGHTS</h2>

      <h3>For All Users</h3>
      <p>You may request to access, correct, or delete your personal information at any time
        by visiting our <a href="/data-rights">Data Rights</a> page or emailing us at
        Business@overcomingordinary.com.</p>

      <h3>For EU/EEA Residents (GDPR)</h3>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Rectify inaccurate data</li>
        <li>Request erasure of your data</li>
        <li>Restrict processing</li>
        <li>Data portability</li>
        <li>Object to processing</li>
        <li>Withdraw consent at any time</li>
      </ul>

      <h3>For California Residents (CCPA/CPRA)</h3>
      <p>You have the right to:</p>
      <ul>
        <li>Know what personal information is collected</li>
        <li>Request deletion of personal information</li>
        <li>Opt out of the sale or sharing of personal information</li>
        <li>Non-discrimination for exercising your rights</li>
      </ul>
      <p>
        To exercise your CCPA rights, visit our{" "}
        <a href="/data-rights">Do Not Sell or Share My Personal Information</a> page.
      </p>

      <h2>7. DATA RETENTION</h2>
      <p>
        We retain your personal information only as long as necessary to fulfill the purposes
        outlined in this policy, unless a longer retention period is required by law.
      </p>

      <h2>8. DATA SECURITY</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your
        personal information. However, no method of transmission over the Internet is 100%
        secure.
      </p>

      <h2>9. CHILDREN&apos;S PRIVACY</h2>
      <p>
        Our Site is not directed to children under 16. We do not knowingly collect personal
        information from children. If you believe we have collected data from a child, please
        contact us immediately.
      </p>

      <h2>10. CHANGES TO THIS POLICY</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this
        page with an updated &quot;Last updated&quot; date.
      </p>

      <h2>11. CONTACT US</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at:<br />
        <strong>Email:</strong> Business@overcomingordinary.com<br />
        <strong>Website:</strong>{" "}
        <a href="/contact">overcomingordinary.com/contact</a>
      </p>
    </LegalLayout>
  )
}
