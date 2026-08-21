import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "CMS Login",
  description:
    "Login to the CGTechVibes CMS to write blog posts.",
};

const CMS_EMBED_URL =
  "https://script.google.com/macros/s/AKfycbyz16TXQqjHHGsxbw0zzcvj9unW5gIh0KBtoDnm_KE4AQmQR_CKv00uvH8-PijEFINr/exec";

export default function CmsPage() {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white">
      <div className="pt-safe z-10 flex items-center justify-between gap-2 bg-black/70 px-4 pb-2 backdrop-blur">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className="bg-gradient-neon grid h-7 w-7 place-items-center rounded-lg text-xs font-black">
            CG
          </span>
          <span className="hidden sm:inline">CGTechVibes CMS</span>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-black/85 active:scale-95"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
      <iframe
        src={CMS_EMBED_URL}
        title="CGTechVibes CMS"
        className="h-full w-full flex-1 border-0 bg-white"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}