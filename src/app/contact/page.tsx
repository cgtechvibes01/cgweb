import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CGTechVibes — we'd love to hear about your project.",
};

const INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@cgtechvibes.com",
    href: "mailto:hello@cgtechvibes.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Malaysia — working worldwide",
  },
  {
    icon: MessageSquare,
    label: "Chat",
    value: "AI assistant coming soon",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact"
        title="Let's talk"
        subtitle="Have a project in mind or a question? We'd love to hear from you."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              {INFO.map((item) => (
                <GlassCard key={item.label} hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-brand grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-lg shadow-primary/25">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="lg:col-span-3">
              <GlassCard hover={false}>
                <ContactForm />
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
