"use client";

import { useEffect, useState } from "react";
import { Copy, ExternalLink, X } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

const IAB_PATTERN =
  /(FBAN|FBAV|FBIOS|FB_IAB|FBSN|Messenger|Instagram|InstagramApp|LinkedInApp|TikTokApp)/i;

export function InAppBrowserInterceptor() {
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState<{
    isIOS: boolean;
    isAndroid: boolean;
  } | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    const inIAB = IAB_PATTERN.test(ua);
    if (!inIAB) return;

    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow({ isIOS, isAndroid });

    // Auto-leave on Android: open the page in the default browser via intent.
    if (isAndroid) {
      const pageUrl = window.location.href;
      const fallbackUrl = encodeURIComponent(pageUrl);
      const intentUrl = `intent://${pageUrl.replace(/^https?:\/\//, "")}#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.android.chrome;S.browser_fallback_url=${fallbackUrl};end`;
      try {
        window.location.href = intentUrl;
      } catch {
        /* noop */
      }
    }
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable in IAB */
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25">
          <ExternalLink className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          Open in your browser
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          You&apos;re viewing {SITE_NAME} inside a social media browser. For the
          best experience and to install our app, please open this page in your
          default browser.
        </p>

        <button
          type="button"
          onClick={() => {
            window.location.href = window.location.href;
          }}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-95"
        >
          <ExternalLink className="h-4 w-4" />
          Open in Browser
        </button>

        <button
          type="button"
          onClick={copyLink}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
        >
          {copied ? "Link copied!" : <Copy className="h-4 w-4" />}
          {copied ? "Link copied!" : "Copy Link"}
        </button>

        {show?.isIOS && (
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Tip: tap the share icon
            <span className="mx-1 inline-grid h-4 w-4 place-items-center rounded-[4px] border border-muted-foreground text-[9px]">
              ⬆
            </span>
            then choose
            <span className="ml-1 font-medium text-foreground">
              Open in Browser
            </span>
            .
          </p>
        )}

        <button
          type="button"
          onClick={() => setShow(null)}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          <X className="h-3.5 w-3.5" />
          Continue anyway
        </button>
      </div>
    </div>
  );
}
