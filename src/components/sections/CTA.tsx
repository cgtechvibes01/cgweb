"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-strong relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 md:py-20"
        >
          <div
            aria-hidden
            className="bg-gradient-brand pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to bring your idea{" "}
              <span className="text-gradient">to life?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Whether it&apos;s a website, web app, or full business solution —
              we&apos;re here to help you build it.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="bg-gradient-brand inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110 active:scale-95"
              >
                <MessageSquare className="h-4 w-4" />
                Start a conversation
              </Link>
              <Link
                href="/projects"
                className="glass inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:brightness-110 active:scale-95"
              >
                See our work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
