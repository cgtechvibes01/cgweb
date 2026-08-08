import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play, Users, Share2, History, HeartHandshake } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { OrderModal } from "@/components/sections/OrderModal";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "FamTree",
  description:
    "Explore the FamTree webapp â€” visualize and preserve your family history online with an interactive family tree.",
};

const FAMTREE = PROJECTS.find((p) => p.title === "FamTree")!;

const FEATURES = [
  {
    icon: Users,
    title: "Interactive Family Tree",
    description:
      "Visualize your family lineage with an intuitive, zoomable tree structure.",
  },
  {
    icon: History,
    title: "Preserve History",
    description:
      "Store names, relationships and notes so your family story lives on.",
  },
  {
    icon: Share2,
    title: "Share & Collaborate",
    description:
      "Invite relatives to view or contribute to the family tree.",
  },
  {
    icon: HeartHandshake,
    title: "Simple to Use",
    description:
      "No technical skill needed â€” add members and build your tree in minutes.",
  },
];

export default function FamTreePage() {
  return (
    <>
      <PageHeader
        badge="Project"
        title="FamTree"
        subtitle="A family tree webapp to visualize and preserve your family history online."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <GlassCard hover={false} className="overflow-hidden p-0">
                <div className="relative aspect-[2/1] w-full">
                  {FAMTREE.image && (
                    <Image
                      src={FAMTREE.image}
                      alt="FamTree preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  )}
                </div>
              </GlassCard>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/famtree"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  <Play className="h-4 w-4" />
                  Demo
                </Link>
                <OrderModal projectTitle="FamTree" />
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard hover={false}>
                <Badge>About this project</Badge>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Your family history, beautifully organized
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  FamTree is a family tree webapp that makes it easy to record and
                  explore your family history. Build branches, add members and watch
                  your lineage come to life â€” all in one clean, modern interface.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Try the live{" "}
                  <Link href="/demo/famtree" className="font-semibold text-primary hover:underline">
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

              <OrderModal projectTitle="FamTree" variant="link" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

