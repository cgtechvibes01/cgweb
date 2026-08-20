import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play, CalendarDays, BedDouble, Boxes, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { OrderModal } from "@/components/sections/OrderModal";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "BNB Manager",
  description:
    "Explore the BNB Manager webapp â€” run your BnB smoothly with bookings, guests, housekeeping and database sync in one place.",
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
    title: "Housekeeping Sync",
    description:
      "Auto Remark unit as dirty upon customer check Out.",
  },
  {
    icon: ShieldCheck,
    title: "Database Sync",
    description:
      "Your data stays backed up and in sync across devices.",
  },
];

export default function BnbManagerPage() {
  return (
    <>
      <PageHeader
        badge="Project"
        title="BNB Manager"
        subtitle="A complete BnB booking management webapp â€” bookings, guests, Housekeeping and database sync."
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
                <OrderModal projectTitle="BNB Manager" />
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
                  BnB running smoothly. Handle bookings, guests and Housekeeping
                  from a single clean dashboard â€” with data that stays synced
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
                {FEATURES.map((feature, i) => (
                  <Reveal key={feature.title} delay={i * 0.05}>
                    <GlassCard hover={false} className="p-5">
                      <div className="bg-gradient-neon grid h-10 w-10 place-items-center rounded-xl text-white shadow-lg shadow-primary/25">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-sm font-semibold">{feature.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>

              <OrderModal projectTitle="BNB Manager" variant="link" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

