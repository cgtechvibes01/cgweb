import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play, FileText, FileSpreadsheet, Printer, Server, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { OrderModal } from "@/components/sections/OrderModal";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "DocGen (E-Biz)",
  description:
    "Explore the DocGen (E-Biz) webapp â€” generate payslips, receipts, invoices and quotations with a self-managing database.",
};

const DOCGEN = PROJECTS.find((p) => p.title === "DocGen (E-Biz)")!;

const FEATURES = [
  {
    icon: FileText,
    title: "Slip Gaji",
    description:
      "Generate payslips with earnings, deductions and automatic nett pay calculations.",
  },
  {
    icon: FileSpreadsheet,
    title: "Resit & Invois",
    description:
      "Itemized receipts and invoices with discount, SST and live totals.",
  },
  {
    icon: Printer,
    title: "Print-Ready Docs",
    description:
      "Professional document rendering with company branding and logo support.",
  },
  {
    icon: Server,
    title: "Auto Database",
    description:
      "The system builds its own database and asset folders on first run â€” no setup needed.",
  },
  {
    icon: ShieldCheck,
    title: "Backup & Restore",
    description:
      "One-click backups stored in your Drive, with restore from any point in time.",
  },
  {
    icon: FileSpreadsheet,
    title: "Dashboard & Audit",
    description:
      "Revenue, payroll and pending-invoice analytics with CSV export tools.",
  },
];

export default function DocGenPage() {
  return (
    <>
      <PageHeader
        badge="Project"
        title="DocGen (E-Biz)"
        subtitle="Document generation webapp that creates clean, formatted business documents in seconds."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <GlassCard hover={false} className="overflow-hidden p-0">
                <div className="relative aspect-[2/1] w-full">
                  {DOCGEN.image && (
                    <Image
                      src={DOCGEN.image}
                      alt="DocGen (E-Biz) preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  )}
                </div>
              </GlassCard>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/docgen-e-biz"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  <Play className="h-4 w-4" />
                  Demo
                </Link>
                <OrderModal projectTitle="DocGen (E-Biz)" />
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard hover={false}>
                <Badge>About this project</Badge>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Business documents, generated instantly
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  DocGen (E-Biz) is a document generation webapp for
                  businesses. Create payslips, receipts, invoices and
                  quotations with clean, printable output and company
                  branding â€” all backed by a self-managing database that is
                  created automatically on first run.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Try the live{" "}
                  <Link href="/demo/docgen-e-biz" className="font-semibold text-primary hover:underline">
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

              <OrderModal projectTitle="DocGen (E-Biz)" variant="link" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

