import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Play, ClipboardList, MapPin, Search, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { PROJECTS } from "@/lib/projects";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "DaPen",
  description:
    "Explore the DaPen webapp — a digital census system for community profiling and aid administration, built for village councils and residential associations.",
};

const DAPEN = PROJECTS.find((p) => p.title === "DaPen")!;

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Smart Census Intake",
    description:
      "Digital forms for Head of Household profiles, contact info, housing details and ID uploads.",
  },
  {
    icon: MapPin,
    title: "Structured Area Directories",
    description:
      "Population records organized by village or residential area, with breakdowns by block or street.",
  },
  {
    icon: Search,
    title: "Instant Search & Filters",
    description:
      "Locate any resident profile instantly with real-time name or IC search filters.",
  },
  {
    icon: ShieldCheck,
    title: "Centralized Admin Panel",
    description:
      "Automated database setup, secure user management and an action log for system changes.",
  },
];

const ORDER_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi CGTechVibes! I'm interested in the DaPen webapp. Can you tell me more?"
)}`;

export default function DaPenPage() {
  return (
    <>
      <PageHeader
        badge="Project"
        title="DaPen"
        subtitle="A digital census webapp for community profiling and aid administration."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <GlassCard hover={false} className="overflow-hidden p-0">
                <div className="relative aspect-[2/1] w-full">
                  {DAPEN.image && (
                    <Image
                      src={DAPEN.image}
                      alt="DaPen preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  )}
                </div>
              </GlassCard>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/dapen"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  <Play className="h-4 w-4" />
                  Demo
                </Link>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-green-500/25 transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order Now
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard hover={false}>
                <Badge>About this project</Badge>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Community data, digitized
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Managing paper census forms, household distributions and
                  resident directories manually is slow and error-prone. DaPen
                  solves this with a secure, centralized web application that
                  digitizes community profiling and aid administration for
                  village councils, residential associations and municipal
                  offices.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Fully responsive with a clean dark theme, it works on
                  desktop, admin tablets and mobile phones during field
                  operations.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Try the live{" "}
                  <Link href="/demo/dapen" className="font-semibold text-primary hover:underline">
                    Demo
                  </Link>{" "}
                  to explore the app, or get in touch to make it yours.
                </p>
              </GlassCard>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FEATURES.map((feature) => (
                  <GlassCard key={feature.title} hover={false} className="p-5">
                    <div className="bg-gradient-orange grid h-10 w-10 place-items-center rounded-xl text-white shadow-lg shadow-primary/25">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold">{feature.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </GlassCard>
                ))}
              </div>

              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <MessageCircle className="h-4 w-4" />
                Interested? Order DaPen on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
