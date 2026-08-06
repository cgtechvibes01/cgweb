"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { fadeUp } from "@/lib/animations";
import { PROJECTS } from "@/lib/projects";

const FEATURED = ["BNB Manager", "FamTree", "RestoMe", "Sailormen"];

const featured = PROJECTS.filter((p) => FEATURED.includes(p.title));

export function ProjectsPreview() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <Badge>Our work</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Fresh from the <span className="text-gradient">studio</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={i}
            >
              <GlassCard className="group flex h-full flex-col">
                {project.image && (
                  <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="bg-gradient-orange absolute left-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-xl text-white shadow-lg backdrop-blur">
                      {project.icon && <project.icon className="h-5 w-5" />}
                    </div>
                  </div>
                )}
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <Badge>{project.tag}</Badge>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
