"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Folder, Home, Mail, PenLine, User } from "lucide-react";
import { BOTTOM_NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  home: Home,
  folder: Folder,
  pen: PenLine,
  user: User,
  mail: Mail,
} as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="pb-safe glass-nav fixed inset-x-0 bottom-0 z-50 block md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex h-16 items-stretch justify-around">
        {BOTTOM_NAV_LINKS.map((link) => {
          const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP];
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 py-1.5"
            >
              {active && (
                <motion.span
                  layoutId="bottom-nav-pill"
                  className="bg-gradient-brand absolute inset-x-2 inset-y-1 rounded-full shadow-lg shadow-primary/25"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <Icon
                className={cn(
                  "relative z-10 h-5 w-5 transition-colors",
                  active
                    ? "text-white"
                    : "text-muted-foreground"
                )}
              />
              <span
                className={cn(
                  "relative z-10 text-[10px] font-medium leading-none transition-colors",
                  active ? "text-white" : "text-muted-foreground"
                )}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
