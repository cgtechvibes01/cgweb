import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CGTechVibes collects, uses and protects your information.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    text: "We may collect information you provide directly, such as your name and email address when you contact us. We may also collect basic usage data to improve our services and user experience.",
  },
  {
    title: "2. How We Use Information",
    text: "We use collected information to respond to inquiries, improve our products, personalize your experience, and communicate updates about our services.",
  },
  {
    title: "3. Cookies & Storage",
    text: "Our website may use local storage for preferences such as your theme selection (dark/light mode). We do not use cookies for advertising or tracking across third-party sites.",
  },
  {
    title: "4. Data Sharing",
    text: "We do not sell, trade or rent your personal information to third parties. We may share data only with trusted partners who assist in operating our services, under confidentiality agreements.",
  },
  {
    title: "5. Data Security",
    text: "We take reasonable measures to protect your information from unauthorized access, alteration, disclosure or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "6. Your Rights",
    text: "You may request access to, correction of, or deletion of your personal data at any time by contacting us. You may also opt out of future communications.",
  },
  {
    title: "7. Changes to This Policy",
    text: "We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the revised policy on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Here's how we handle your information."
      />
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            {SECTIONS.map((section) => (
              <GlassCard key={section.title} hover={false}>
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {section.text}
                </p>
              </GlassCard>
            ))}
            <p className="text-xs text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
