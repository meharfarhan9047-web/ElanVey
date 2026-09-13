import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Elan Vey privacy policy — how we look after your information.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

const lastUpdated = "August 2026";

const privacySections: LegalSection[] = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    paragraphs: [
      "When you get in touch with us, we collect only what we need to help you. This includes your name, email address, phone number, and any details you share about your project or questions. We also collect basic website visitor data like which pages people look at, so we can make our site better for everyone.",
    ],
  },
  {
    id: "how-we-use-information",
    number: "02",
    title: "How We Use Your Information",
    paragraphs: [
      "We use your information to reply to your messages, do the work you&apos;ve asked us to do, send you friendly updates about your project, and make our website and services work better for you. We only use your details for things you&apos;d reasonably expect or if the law says we must.",
    ],
  },
  {
    id: "information-sharing",
    number: "03",
    title: "Information Sharing & Disclosure",
    paragraphs: [
      "We never sell your personal information to anyone — ever. Sometimes we work with trusted service providers who help us run our email, hosting, or analytics tools and they only see what they need to do their job. We&apos;ll also share information if the law requires us to by court order or similar legal requirement. If you&apos;re part of our marketing learning through Lavent Marketing, we may share your details with them only as needed for those opportunities.",
    ],
  },
  {
    id: "data-security",
    number: "04",
    title: "Keeping Your Data Safe",
    paragraphs: [
      "We take reasonable steps to protect your personal information from being seen, used, or changed without permission. That said, no method of sending things over the internet is 100% safe, so we can&apos;t guarantee absolute security — but we do our very best.",
    ],
  },
  {
    id: "your-rights",
    number: "05",
    title: "Your Rights & Choices",
    paragraphs: [
      "You have the right to see what information we hold about you, ask us to correct anything that&apos;s wrong, or ask us to delete your details if you no longer want us to have them. You can also opt out of marketing messages at any time. Just send us an email or give us a call and we&apos;ll sort it out straight away.",
    ],
  },
  {
    id: "cookies",
    number: "06",
    title: "Cookies & Tracking",
    paragraphs: [
      "Cookies are small text files stored on your device to help our website remember your preferences and understand how visitors use our site. You can turn cookies off in your browser settings any time — this might make some parts of the site not work as smoothly, though.",
    ],
  },
  {
    id: "childrens-privacy",
    number: "07",
    title: "Children&apos;s Privacy",
    paragraphs: [
      "Our services aren&apos;t aimed at children under the age of 13 and we don&apos;t knowingly collect personal information from anyone under 13. If you&apos;re a parent or guardian and believe your child has shared details with us, please get in touch and we will remove that information right away.",
    ],
  },
  {
    id: "policy-changes",
    number: "08",
    title: "Changes to This Policy",
    paragraphs: [
      "From time to time we may update this privacy policy. If we make important changes, we&apos;ll put a clear note on our website. By continuing to use our services after those changes, you accept the updated policy. The date at the top shows when it was last updated.",
    ],
  },
  {
    id: "contact-us",
    number: "09",
    title: "Contact Us About Privacy",
    paragraphs: [
      `Got questions about privacy, want to access, or just want a friendly chat about how we look after your data? Reach out anytime. Email us at ${siteConfig.contact.email}, call us on ${siteConfig.contact.phone}, or write to us at ${siteConfig.contact.address}. We try to reply to privacy questions within 30 days.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy Policy"
      lastUpdated={lastUpdated}
      badge="Your Privacy Matters To Us"
      accent="pink"
      introBadges={[
        { text: `Last Updated: ${lastUpdated}`, color: "bg-ev-neon-yellow" },
        { text: "Effective Immediately", color: "bg-ev-neon-cyan" },
      ]}
      introHtml={
        "This Privacy Policy explains how Elan Vey (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, and looks after personal information when you use our services, website, or get in touch with us. By using our services, you agree to what we describe in this policy. We always treat your information with the same care we&apos;d want for our own."
      }
      sections={privacySections}
    />
  );
}
