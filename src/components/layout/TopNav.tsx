"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-safe">
      <nav className="mx-auto mt-3 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong flex h-16 items-center justify-between rounded-2xl px-4 sm:px-6">
          <Logo />

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-gradient-brand text-white shadow-md shadow-primary/25"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
