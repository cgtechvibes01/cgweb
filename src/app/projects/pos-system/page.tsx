import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play, ShoppingCart, Boxes, BarChart3, ScanLine } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { OrderModal } from "@/components/sections/OrderModal";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "POS System",
  description:
    "Explore the POS System webapp â€” a point-of-sale system for fast checkout, inventory and daily sales reporting.",
};

const POS = PROJECTS.find((p) => p.title === "POS System")!;

const FEATURES = [
  {
    icon: ShoppingCart,
    title: "Fast Checkout",
    description:
      "Process sales in seconds with a clean, keyboard-friendly interface.",
  },
  {
    icon: Boxes,
    title: "Inventory",
    description:
      "Track stock levels and get alerted before items run out.",
  },
  {
    icon: BarChart3,
    title: "Daily Sales Reports",
    description:
      "See sales performance clearly with daily and period summaries.",
  },
  {
    icon: ScanLine,
    title: "Built for Retail",
    description:
      "Designed for quick, reliable operation at the counter every day.",
  },
];

export default function PosSystemPage() {
  return (
    <>
      <PageHeader
        badge="Project"
        title="POS System"
        subtitle="A point-of-sale system for fast checkout, inventory and daily sales reporting."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <GlassCard hover={false} className="overflow-hidden p-0">
                <div className="relative aspect-[2/1] w-full">
                  {POS.image && (
                    <Image
                      src={POS.image}
                      alt="POS System preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  )}
                </div>
              </GlassCard>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/pos-system"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  <Play className="h-4 w-4" />
                  Demo
                </Link>
                <OrderModal projectTitle="POS System" />
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard hover={false}>
                <Badge>About this project</Badge>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Faster checkout, better control
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  POS System is a point-of-sale webapp built to speed up the
                  counter and keep your business data in check. Handle sales,
                  inventory and daily reporting from one simple dashboard â€”
                  reliable from opening to closing time.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Try the live{" "}
                  <Link href="/demo/pos-system" className="font-semibold text-primary hover:underline">
                    Demo
                  </Link>{" "}
                  to explore the app, or get in touch to make it yours.
                </p>
              </GlassCard>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FEATURES.map((feature) => (
                  <GlassCard key={feature.title} hover={false} className="p-5">
                    <div className="bg-gradient-neon grid h-10 w-10 place-items-center rounded-xl text-white shadow-lg shadow-primary/25">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold">{feature.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </GlassCard>
                ))}
              </div>

              <OrderModal projectTitle="POS System" variant="link" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

