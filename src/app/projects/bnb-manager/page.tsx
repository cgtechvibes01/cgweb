import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Play, CalendarDays, BedDouble, Boxes, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { PROJECTS } from "@/lib/projects";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "BNB Manager",
  description:
    "Explore the BNB Manager webapp — run your BnB smoothly with bookings, guests, inventory and database sync in one place.",
};

const BNB = PROJECTS.find((p) => p.title === "BNB Manager")!;

const FEATURES = [
  {
    icon: CalendarDays,
    title: "Bookings",
    description:
      "Track reservations, check-ins and availability at a glance.",
  },
  {
    icon: BedDouble,
    title: "Guest Management",
    description:
      "Keep guest records and stay history organized in one place.",
  },
  {
    icon: Boxes,
    title: "Inventory Sync",
    description:
      "Stay on top of supplies and restock before you run out.",
  },
  {
    icon: ShieldCheck,
    title: "Database Sync",
    description:
      "Your data stays backed up and in sync across devices.",
  },
];

const ORDER_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi CGTechVibes! I'm interested in the BNB Manager webapp. Can you tell me more?"
)}`;

export default function BnbManagerPage() {
  return (
    <>
      <PageHeader
        badge="Project"
        title="BNB Manager"
        subtitle="A complete BnB booking management webapp — bookings, guests, inventory and database sync."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <GlassCard hover={false} className="overflow-hidden p-0">
                <div className="relative aspect-[2/1] w-full">
                  {BNB.image && (
                    <Image
                      src={BNB.image}
                      alt="BNB Manager preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  )}
                </div>
              </GlassCard>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/bnb-manager"
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
                  Your BnB, managed end to end
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  BNB Manager is a booking management webapp built to keep your
                  BnB running smoothly. Handle bookings, guests and inventory
                  from a single clean dashboard — with data that stays synced
                  and backed up.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Try the live{" "}
                  <Link href="/demo/bnb-manager" className="font-semibold text-primary hover:underline">
                    Demo
                  </Link>{" "}
                  to explore the app, or get in touch to make it yours.
                </p>
              </GlassCard>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FEATURES.map((feature) => (
                  <GlassCard key={feature.title} hover={false} className="p-5">
                    <div className="bg-gradient-brand grid h-10 w-10 place-items-center rounded-xl text-white shadow-lg shadow-primary/25">
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
                Interested? Order BNB Manager on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
