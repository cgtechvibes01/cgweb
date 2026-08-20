"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { fadeUp } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-28">
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Badge className="glass-strong gap-2 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI-Ready Digital Solutions
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Build your <span className="text-gradient glow-text">digital empire</span>{" "}
            with us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            CGTechVibes crafts modern digital products, business solutions,
            web apps and websites — mobile-first, beautifully designed, and
            ready to integrate with AI, Google Apps Script and Cloudflare.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="bg-gradient-brand inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110 active:scale-95"
            >
              Explore our projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="glass-strong inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Decorative floating orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[-10%] h-72 w-72 rounded-full bg-primary/25 blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        animate={{ y: [0, -25, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
