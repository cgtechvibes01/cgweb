"use client";

import { useEffect, useRef, useState } from "react";
import { Share2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ShareButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url,
        });
        return;
      } catch {
        // user cancelled or share failed — fall back to copy
      }
    }

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleShare}
      aria-label="Share this page"
      className={cn(
        "glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
    >
      <span className="relative h-5 w-5">
        <Share2
          className={cn(
            "absolute inset-0 h-5 w-5 transition-all duration-300",
            copied ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          )}
        />
        <Check
          className={cn(
            "absolute inset-0 h-5 w-5 text-green-500 transition-all duration-300",
            copied ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
          )}
        />
      </span>
    </button>
  );
}
