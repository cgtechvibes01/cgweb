import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore the web apps, business solutions and digital products built by CGTechVibes.",
};

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
            {PROJECTS.map((project, i) => {
              const card = (
                <GlassCard key={project.title} className="group flex h-full flex-col">
                  {project.image && (
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="bg-gradient-neon absolute left-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-xl text-white shadow-lg backdrop-blur">
                        {project.icon && <project.icon className="h-5 w-5" />}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    {!project.image && (
                      <div className="bg-gradient-neon grid h-12 w-12 place-items-center rounded-xl text-white shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                        {project.icon ? (
                          <project.icon className="h-6 w-6" />
                        ) : (
                          <ArrowUpRight className="h-6 w-6" />
                        )}
                      </div>
                    )}
                    <Badge>{project.tag}</Badge>
                  </div>
                  <h2 className="mt-5 text-lg font-semibold">{project.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    {project.title === "Your Next Project"
                      ? "Get in touch"
                      : project.href
                        ? "View project"
                        : "Coming soon"}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </GlassCard>
              );

              return project.href ? (
                <Reveal key={project.title} delay={i * 0.05}>
                  <Link
                    href={project.href}
                    className="block"
                    aria-label={`${project.title} project details`}
                  >
                    {card}
                  </Link>
                </Reveal>
              ) : (
                <Reveal key={project.title} delay={i * 0.05}>
                  {card}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
