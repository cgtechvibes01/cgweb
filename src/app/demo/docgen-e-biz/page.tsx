import type { Metadata } from "next";
import Link from "next/link";
import { OrderModal } from "@/components/sections/OrderModal";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "DocGen (E-Biz) Demo",
  description:
    "Try the DocGen (E-Biz) webapp live in this demo wrapper.",
};

const DEMO_URL =
  "https://script.google.com/macros/s/AKfycbz6LEMqSFtHntibjSMkom2MrdmMWc_I3wAxg4_BcGMWSw9UXzJOLuOGKG123wmzH1PCIg/exec";

export default function DocGenDemoPage() {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white">
      <div className="pt-safe z-10 flex items-center justify-end gap-2 bg-black/70 px-4 pb-2 backdrop-blur">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-black/85 active:scale-95"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <OrderModal projectTitle="DocGen (E-Biz)" variant="demo" />
      </div>
      <iframe
        src={DEMO_URL}
        title="DocGen (E-Biz) Demo"
        className="h-full w-full flex-1 border-0 bg-white"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}

