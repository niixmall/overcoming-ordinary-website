import type { Metadata } from "next"
import { LegalLayout } from "@/components/oo/legal-layout"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Overcoming Ordinary. Please read these terms carefully before using our website.",
}

export default function TermsPage() {
  return (
    <LegalLayout title="TERMS OF SERVICE" lastUpdated="February 18, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Overcoming
        Ordinary website at overcomingordinary.com (the &quot;Site&quot;). By accessing or using the
        Site, you agree to be bound by these Terms.
      </p>

      <h2>1. ACCEPTANCE OF TERMS</h2>
      <p>
        By accessing this Site, you confirm that you are at least 16 years of age and agree to
        comply with these Terms. If you do not agree, please do not use our Site.
      </p>

      <h2>2. USE OF THE SITE</h2>
      <p>You agree to use the Site only for lawful purposes and not to:</p>
      <ul>
        <li>Violate any applicable laws or regulations</li>
        <li>Transmit harmful, offensive, or infringing content</li>
        <li>Attempt to gain unauthorized access to any part of the Site</li>
        <li>Interfere with the proper functioning of the Site</li>
        <li>Use automated systems to scrape or collect data without permission</li>
      </ul>

      <h2>3. INTELLECTUAL PROPERTY</h2>
      <p>
        All content on this Site -- including text, graphics, logos, images, audio, video, and
        software -- is the property of Overcoming Ordinary or its licensors and is protected by
        applicable intellectual property laws. You may not reproduce, distribute, or create
        derivative works without prior written consent.
      </p>

      <h2>4. FREE RESOURCES</h2>
      <p>
        We may offer free downloadable resources (such as playbooks and guides). These
        materials are provided for personal, non-commercial use only. Redistribution or resale
        is prohibited.
      </p>

      <h2>5. USER SUBMISSIONS</h2>
      <p>
        When you submit information through our forms (contact form, playbook request, etc.),
        you represent that the information is accurate and that you have the right to provide
        it. We handle submitted information in accordance with our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>6. DISCLAIMER OF WARRANTIES</h2>
      <p>
        The Site and its content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of
        any kind, express or implied. We do not warrant that the Site will be uninterrupted,
        error-free, or free from harmful components.
      </p>

      <h2>7. LIMITATION OF LIABILITY</h2>
      <p>
        To the fullest extent permitted by law, Overcoming Ordinary shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages arising from your use
        of the Site.
      </p>

      <h2>8. EXTERNAL LINKS</h2>
      <p>
        Our Site may contain links to third-party websites. We are not responsible for the
        content, privacy practices, or terms of any external sites.
      </p>

      <h2>9. MODIFICATIONS</h2>
      <p>
        We reserve the right to modify these Terms at any time. Changes will be effective upon
        posting to this page. Your continued use of the Site constitutes acceptance of any
        changes.
      </p>

      <h2>10. GOVERNING LAW</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the
        United States, without regard to its conflict of law provisions.
      </p>

      <h2>11. CONTACT</h2>
      <p>
        If you have questions about these Terms, contact us at:<br />
        <strong>Email:</strong> Business@overcomingordinary.com<br />
        <strong>Website:</strong>{" "}
        <a href="/contact">overcomingordinary.com/contact</a>
      </p>
    </LegalLayout>
  )
}
