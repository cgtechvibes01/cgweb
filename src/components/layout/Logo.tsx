import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 text-lg font-bold tracking-tight",
        className
      )}
      aria-label={`${SITE_NAME} — Home`}
    >
      <span className="bg-gradient-brand grid h-9 w-9 place-items-center rounded-xl text-sm font-black text-white shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:rotate-6">
        CG
      </span>
      <span className="hidden sm:inline">
        <span className="text-gradient">CG</span>
        TechVibes
      </span>
    </Link>
  );
}
