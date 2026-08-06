import type { Metadata } from "next";
import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "BNB Manager Demo",
  description:
    "Try the BNB Manager webapp live in this demo wrapper.",
};

const DEMO_URL =
  "https://script.google.com/macros/s/AKfycbwZg4ezGallw-Vo1EfEb3iTub0eKykMh-ryZGhe1Vvi2CFgx7SmUUz2woIMMnjRol7giw/exec";

const ORDER_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi CGTechVibes! I'm interested in the BNB Manager webapp. Can you tell me more?"
)}`;

export default function BnbManagerDemoPage() {
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
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:brightness-110 active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          Order Now
        </a>
      </div>
      <iframe
        src={DEMO_URL}
        title="BNB Manager Demo"
        className="h-full w-full flex-1 border-0 bg-white"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}
