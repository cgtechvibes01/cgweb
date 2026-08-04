"use client";

import { useState, useSyncExternalStore, type MouseEvent, type ReactNode } from "react";
import { Copy, ExternalLink, Globe } from "lucide-react";

export interface FBInAppBrowserGuardProps {
  /** URL untuk dibuka dalam browser sebenar (default: current URL) */
  url?: string;
  children: ReactNode;
}

type InAppBrowser = "facebook" | "messenger" | "instagram" | null;

function detectInAppBrowser(): InAppBrowser {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent;

  if (/Instagram/i.test(ua)) return "instagram";
  if (/Messenger/i.test(ua)) return "messenger";
  if (/FBAN|FBIOS|FB_IAB|FB4A|FBAV/i.test(ua)) return "facebook";
  return null;
}

const emptySubscribe = () => () => {};

function appName(app: Exclude<InAppBrowser, null>) {
  switch (app) {
    case "messenger":
      return "Messenger";
    case "instagram":
      return "Instagram";
    case "facebook":
      return "Facebook";
  }
}

export function FBInAppBrowserGuard({ url, children }: FBInAppBrowserGuardProps) {
  const inApp = useSyncExternalStore(
    emptySubscribe,
    detectInAppBrowser,
    () => null
  );
  const [copied, setCopied] = useState(false);

  if (!inApp) return <>{children}</>;

  const target = url || (typeof window !== "undefined" ? window.location.href : "");
  const isIOS =
    typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Android intent:// ke Chrome. iOS x-safari- ke Safari.
  const intentUrl = `intent://${target.replace(
    /^https?:\/\//,
    ""
  )}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(
    target
  )};end`;
  const safariUrl = `x-safari-${target}`;

  const openExternal = (e: MouseEvent) => {
    e.preventDefault();

    // 1) window.open "_system" — teknik yang paling berkesan buka browser luar dari webview
    try {
      const opened = window.open(target, "_system");
      if (opened) return;
    } catch {
      /* some webviews throw */
    }

    // 2) intent:// / x-safari- via location
    try {
      window.location.replace(isIOS ? safariUrl : intentUrl);
    } catch {
      /* ignore */
    }

    // 3) Auto-copy link sebagai jaminan terakhir (guna textarea fallback)
    copyToClipboard(target);
  };

  const copyToClipboard = (text: string) => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  };

  const fallbackCopy = (text: string, done: () => void) => {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      done();
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-sm text-center">
        <div className="bg-gradient-brand mx-auto grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg shadow-primary/25">
          <Globe className="h-8 w-8" />
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-white">
          Open in your browser
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          This app doesn&apos;t run inside {appName(inApp)}. Tap the button below to
          continue in Chrome or Safari.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={openExternal}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-95"
          >
            <ExternalLink className="h-4 w-4" />
            Open in Chrome
          </button>
          <button
            onClick={() => copyToClipboard(target)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/15 active:scale-95"
          >
            <Copy className="h-4 w-4" />
            {copied ? "Link copied!" : "Copy link"}
          </button>
        </div>

        <p className="mt-6 break-all text-[11px] text-white/40">{target}</p>
      </div>
    </div>
  );
}
