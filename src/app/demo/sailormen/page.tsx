import type { Metadata } from "next";
import Link from "next/link";
import { OrderModal } from "@/components/sections/OrderModal";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Sailormen Demo",
  description:
    "Try the Sailormen webapp live in this demo wrapper.",
};

const DEMO_URL =
  "https://script.google.com/macros/s/AKfycby9QKWJXHEoMM2XCDSO0B0oAFoD95pBsTk6iru0yslk1xP4dc4koTr3oz5C5JrNsa6O/exec";

export default function SailormenDemoPage() {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white">
      <div className="pt-safe z-10 flex items-center justify-end gap-2 bg-black/70 px-4 pb-2 backdrop-blur">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-black/85 active:scale-95"
        >
          <Home className="h-4 w-4" />
          Back
        </Link>
        <OrderModal projectTitle="Sailormen" variant="demo" />
      </div>
      <iframe
        src={DEMO_URL}
        title="Sailormen Demo"
        className="h-full w-full flex-1 border-0 bg-white"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}

