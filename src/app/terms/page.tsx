import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using CGTechVibes products and services.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    text: "By accessing or using any CGTechVibes website, web app or service, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.",
  },
  {
    title: "2. Use of Services",
    text: "Our services are provided for lawful purposes only. You agree not to misuse, reverse engineer, or attempt to disrupt any CGTechVibes product or service. Unauthorized access, data scraping, or interference with the operation of our systems is strictly prohibited.",
  },
  {
    title: "3. Intellectual Property",
    text: "All content, code, designs, logos and materials on our platforms are the property of CGTechVibes unless otherwise stated. You may not copy, reproduce, distribute or create derivative works without our prior written consent.",
  },
  {
    title: "4. Third-Party Links & Content",
    text: "Our websites may contain links to third-party sites such as our blog. We are not responsible for the content, policies or practices of any third-party websites.",
  },
  {
    title: "5. Limitation of Liability",
    text: "CGTechVibes shall not be liable for any indirect, incidental, special or consequential damages arising from the use or inability to use our services, even if advised of the possibility of such damages.",
  },
  {
    title: "6. Changes to Terms",
    text: "We may update these Terms & Conditions from time to time. Any changes will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services."
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
