import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play, UtensilsCrossed, ClipboardList, Users, Bell } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { OrderModal } from "@/components/sections/OrderModal";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "RestoMe",
  description:
    "Explore the RestoMe webapp — a restaurant management system covering orders, tables, menu and staff.",
};

const RESTO = PROJECTS.find((p) => p.title === "RestoMe")!;

const FEATURES = [
  {
    icon: UtensilsCrossed,
    title: "Menu Management",
    description:
      "Organize your menu, prices and availability in a clean interface.",
  },
  {
    icon: ClipboardList,
    title: "Orders",
    description:
      "Take and track orders from the counter to the kitchen, fast.",
  },
  {
    icon: Users,
    title: "Table Management",
    description:
      "Assign tables, monitor occupancy and manage reservations easily.",
  },
  {
    icon: Bell,
    title: "Staff Coordination",
    description:
      "Keep the team in sync with clear workflows and live updates.",
  },
];

export default function RestoMePage() {
  return (
    <>
      <PageHeader
        badge="Project"
        title="RestoMe"
        subtitle="A restaurant management webapp covering orders, tables, menu and staff."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <GlassCard hover={false} className="overflow-hidden p-0">
                <div className="relative aspect-[2/1] w-full">
                  {RESTO.image && (
                    <Image
                      src={RESTO.image}
                      alt="RestoMe preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  )}
                </div>
              </GlassCard>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/restome"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  <Play className="h-4 w-4" />
                  Demo
                </Link>
                <OrderModal projectTitle="RestoMe" />
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard hover={false}>
                <Badge>About this project</Badge>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Run your restaurant, smoother
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  RestoMe is a restaurant management webapp that keeps your
                  operations running smoothly. Handle orders, tables, menu and
                  staff from one clean dashboard — built to move fast during
                  the busiest hours.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Try the live{" "}
                  <Link href="/demo/restome" className="font-semibold text-primary hover:underline">
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

              <OrderModal projectTitle="RestoMe" variant="link" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
