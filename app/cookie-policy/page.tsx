import type { Metadata } from "next"
import { LegalLayout } from "@/components/oo/legal-layout"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Overcoming Ordinary. Learn about our use of cookies and how to manage your preferences.",
}

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="COOKIE POLICY" lastUpdated="February 18, 2026">
      <p>
        This Cookie Policy explains how Overcoming Ordinary (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses
        cookies and similar tracking technologies on our website at overcomingordinary.com.
      </p>

      <h2>1. WHAT ARE COOKIES?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help
        the site remember your preferences and understand how you interact with the content.
      </p>

      <h2>2. TYPES OF COOKIES WE USE</h2>

      <h3>Necessary Cookies</h3>
      <p>
        These cookies are essential for the website to function and cannot be disabled. They
        include cookies for consent management, security, and basic functionality.
      </p>

      <h3>Analytics Cookies</h3>
      <p>
        With your consent, we use analytics cookies (such as Google Analytics and Hotjar) to
        understand how visitors interact with our Site. These help us improve the user
        experience. Data collected is aggregated and anonymized where possible.
      </p>

      <h3>Marketing Cookies</h3>
      <p>
        With your consent, we may use marketing cookies (such as Meta Pixel and LinkedIn
        Insight Tag) to deliver relevant advertising and measure campaign performance. These
        cookies may track your browsing activity across sites.
      </p>

      <h2>3. CONSENT AND CONTROL</h2>
      <p>
        When you first visit our Site, a cookie consent banner allows you to:
      </p>
      <ul>
        <li><strong>Accept All</strong> cookies</li>
        <li><strong>Reject All</strong> non-essential cookies</li>
        <li><strong>Manage Preferences</strong> by category (Necessary, Analytics, Marketing)</li>
      </ul>
      <p>
        No non-essential cookies are set until you provide explicit consent. You can change
        your preferences at any time using the &quot;Cookie Preferences&quot; link in our website footer.
      </p>

      <h2>4. THIRD-PARTY COOKIES</h2>
      <p>
        Some cookies are placed by third-party services that appear on our pages. We do not
        control these cookies. The third-party providers include:
      </p>
      <ul>
        <li>Google Analytics (analytics)</li>
        <li>Hotjar (analytics)</li>
        <li>Meta / Facebook (marketing)</li>
        <li>LinkedIn (marketing)</li>
        <li>Cloudflare Turnstile (necessary -- bot protection)</li>
      </ul>

      <h2>5. HOW TO MANAGE COOKIES</h2>
      <p>
        In addition to our consent banner, you can control cookies through your browser
        settings. Most browsers allow you to refuse or delete cookies. Please note that
        blocking certain cookies may impact your experience on our Site.
      </p>

      <h2>6. UPDATES TO THIS POLICY</h2>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be posted on this
        page with an updated date.
      </p>

      <h2>7. CONTACT</h2>
      <p>
        If you have questions about our use of cookies, contact us at:<br />
        <strong>Email:</strong> Business@overcomingordinary.com
      </p>
    </LegalLayout>
  )
}
