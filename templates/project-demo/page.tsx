import type { Metadata } from "next";
import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { FBInAppBrowserGuard } from "@/components/demo/FBInAppBrowserGuard";

export const metadata: Metadata = {
  title: "__PROJECT_TITLE__ Demo",
  description:
    "Try the __PROJECT_TITLE__ webapp live in this demo wrapper.",
};

const DEMO_URL =
  "__DEMO_URL__";

const ORDER_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "__ORDER_MESSAGE__"
)}`;

export default function ProjectDemoPage() {
  return (
    <FBInAppBrowserGuard>
      <div className="fixed inset-0 z-[60]">
        <iframe
          src={DEMO_URL}
          title="__PROJECT_TITLE__ Demo"
          className="h-full w-full border-0 bg-white"
          allow="clipboard-read; clipboard-write"
        />
        <div className="fixed right-4 top-4 z-[70] flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition-all duration-300 hover:bg-black/85 active:scale-95"
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
      </div>
    </FBInAppBrowserGuard>
  );
}
