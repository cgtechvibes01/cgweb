import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  WHATSAPP_URL,
  TEL_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CGTechVibes — we'd love to hear about your project.",
};

const INFO = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Malaysia — working worldwide",
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

              <GlassCard hover={false}>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-brand grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-lg shadow-primary/25">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold">{CONTACT_PHONE}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={TEL_URL}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-95"
                      >
                        <Phone className="h-4 w-4" />
                        Call now
                      </a>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-green-500/25 transition-all duration-300 hover:brightness-110 active:scale-95"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
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
