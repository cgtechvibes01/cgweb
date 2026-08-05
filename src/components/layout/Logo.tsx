import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_NAME, BASE_PATH } from "@/lib/constants";

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
      <span className="relative block h-9 w-9 overflow-hidden rounded-xl shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:rotate-6">
        <Image
          src={`${BASE_PATH}/icons/icon-192.png`}
          alt={`${SITE_NAME} logo`}
          fill
          sizes="36px"
          className="object-cover"
        />
      </span>
      <span className="hidden sm:inline">
        <span className="text-gradient">CG</span>
        TechVibes
      </span>
    </Link>
  );
}
