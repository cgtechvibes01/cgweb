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
      className="pb-safe glass-strong fixed inset-x-0 bottom-0 z-50 block md:hidden"
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
              className={cn(
                "relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 py-1.5",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              {active && (
                <motion.span
                  layoutId="bottom-nav-active"
                  className="absolute inset-x-3 top-0 h-0.5 rounded-full bg-gradient-brand"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon
                className={cn(
                  "h-5 w-5 transition-transform",
                  active && "scale-110"
                )}
              />
              <span className="text-[10px] font-medium leading-none">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
