import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Building2,
  Cpu,
  FileCode2,
  GraduationCap,
  Layers,
  Map,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore the web apps, business solutions and digital products built by CGTechVibes.",
};

const PROJECTS = [
  {
    icon: Building2,
    title: "BnB Super App",
    tag: "Web App",
    description:
      "A complete BnB booking management webapp — bookings, guests, inventory and database sync.",
    link: "/projects",
  },
  {
    icon: Briefcase,
    title: "InventCash",
    tag: "Business Tool",
    description:
      "Inventory finance webapp with dashboard, records and reporting for smarter cash flow.",
    link: "/projects",
  },
  {
    icon: FileCode2,
    title: "CGCodeLicenser",
    tag: "Utility",
    description:
      "Code licensing system that protects and manages software product licenses.",
    link: "/projects",
  },
  {
    icon: GraduationCap,
    title: "MyMeet",
    tag: "Web App",
    description:
      "Meeting management webapp to schedule, track and organize meetings effortlessly.",
    link: "/projects",
  },
  {
    icon: Map,
    title: "FamTree",
    tag: "Web App",
    description:
      "Family tree webapp to visualize and preserve your family history online.",
    link: "/projects",
  },
  {
    icon: Layers,
    title: "LicenseManager",
    tag: "Utility",
    description:
      "Central license management tool for issuing and tracking software keys.",
    link: "/projects",
  },
  {
    icon: BarChart3,
    title: "PWA Manager API",
    tag: "API",
    description:
      "API manager backend that powers PWA and webapp integrations.",
    link: "/projects",
  },
  {
    icon: Cpu,
    title: "Your Next Project",
    tag: "Ready",
    description:
      "Have an idea? Let's turn it into a modern digital product together.",
    link: "/contact",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        badge="Our Portfolio"
        title="Our Projects"
        subtitle="A collection of web apps, business solutions and digital products we've built."
      />
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <GlassCard key={project.title} className="group flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-brand grid h-12 w-12 place-items-center rounded-xl text-white shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <Badge>{project.tag}</Badge>
                </div>
                <h2 className="mt-5 text-lg font-semibold">{project.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {project.title === "Your Next Project"
                    ? "Get in touch"
                    : "Coming soon"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
