import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Container";
import { Lightbulb, Rocket, ShieldCheck, Target, HeartHandshake, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CGTechVibes — our mission, vision and the people behind the products.",
};

const VALUES = [
  {
    icon: Target,
    title: "Mission",
    text: "To empower businesses, Organizations and Individuals with modern digital tools that are fast, beautiful and easy to use.",
  },
  {
    icon: Lightbulb,
    title: "Vision",
    text: "A world where every business and Organizations, big or small, can build a strong and professional online presence without complexity.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    text: "We obsess over detail, reliability and clean code. Every product is built to last and scale.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    text: "We don't just deliver projects — we build long-term relationships and support your growth.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    text: "AI-ready, cloud-native and mobile-first. We stay ahead of technology so you don't have to.",
  },
  {
    icon: Globe,
    title: "Free Host First",
    text: "We feature top free hosting platforms and repositories where you can host your webapp with no expiration.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="Who we are"
        subtitle="CGTechVibes is a digital product studio focused on business solutions, web apps and websites."
      />

      <section className="pb-12">
        <Container>
          <div className="glass-strong mx-auto max-w-3xl rounded-3xl p-8 md:p-12">
            <p className="leading-relaxed text-muted-foreground">
              We build digital products that help businesses, Organizations and
              individual grow online. From web apps and business solutions to
              websites and AI-ready platforms, our goal is simple: deliver
              technology that works beautifully and feels effortless.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every project is mobile-first, designed for iOS, Android and
              Windows, and structured to integrate with AI, Google Apps Script
              and Cloudflare from day one.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <GlassCard key={value.title} className="h-full">
                <div className="bg-gradient-neon mb-5 grid h-12 w-12 place-items-center rounded-xl text-white shadow-lg shadow-primary/25">
                  <value.icon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">{value.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
