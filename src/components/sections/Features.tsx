"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Layers, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeUp } from "@/lib/animations";

const FEATURES = [
  {
    icon: Smartphone,
    title: "Mobile-First",
    description:
      "Native-app feel with bottom navigation, PWA support and seamless iOS, Android and Windows experience.",
  },
  {
    icon: Bot,
    title: "AI-Ready",
    description:
      "Architecture built to plug in chatbots, recommendation engines and content generation effortlessly.",
  },
  {
    icon: Globe,
    title: "Cloud-Native",
    description:
      "Deploy-ready for Cloudflare Pages, with clean separation of frontend and backend logic.",
  },
  {
    icon: Layers,
    title: "Scalable Structure",
    description:
      "Modular, component-based codebase that grows with your business — from landing page to full webapp.",
  },
];

export function Features() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to{" "}
            <span className="text-gradient">launch online</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We combine design, technology and AI-readiness so your business can
            focus on growing.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={i}
            >
              <GlassCard className="h-full">
                <div className="bg-gradient-brand mb-5 grid h-12 w-12 place-items-center rounded-xl text-white shadow-lg shadow-primary/25">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
