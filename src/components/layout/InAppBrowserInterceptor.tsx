"use client";

import { useEffect, useState } from "react";
import { Copy, ExternalLink, X } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

const IAB_PATTERN =
  /(FBAN|FBAV|FBIOS|FB_IAB|FBSN|Messenger|Instagram|InstagramApp|LinkedInApp|TikTokApp)/i;

export function InAppBrowserInterceptor() {
  const [copied, setCopied] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [show, setShow] = useState<{
    isIOS: boolean;
    isAndroid: boolean;
  } | null>(null);

  const openInBrowser = () => {
    const pageUrl = window.location.href;
    const fallbackUrl = encodeURIComponent(pageUrl);
    const intentUrl = `intent://${pageUrl.replace(/^https?:\/\//, "")}#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.android.chrome;S.browser_fallback_url=${fallbackUrl};end`;
    try {
      window.location.href = intentUrl;
    } catch {
      /* noop */
    }
  };

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
      openInBrowser();
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

        {show?.isAndroid && !showHelp && (
          <button
            type="button"
            onClick={openInBrowser}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-95"
          >
            <ExternalLink className="h-4 w-4" />
            Open in Browser
          </button>
        )}

        {show?.isIOS && !showHelp && (
          <button
            type="button"
            onClick={() => setShowHelp(true)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-95"
          >
            <ExternalLink className="h-4 w-4" />
            How to Open in Safari
          </button>
        )}

        {showHelp && (
          <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-5 text-left">
            <h2 className="text-sm font-semibold">
              How to open in your browser
            </h2>
            <ol className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  1
                </span>
                <span>
                  Tap the menu icon
                  <span className="mx-1 inline-grid h-4 w-4 place-items-center rounded-[4px] border border-muted-foreground text-[9px]">
                    ⋯
                  </span>
                  at the top of the Facebook browser.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  2
                </span>
                <span>
                  Choose{" "}
                  <span className="font-medium text-foreground">
                    Open in External Browser
                  </span>
                  .
                </span>
              </li>
              <li className="flex gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  3
                </span>
                <span>Done — the page opens in Safari.</span>
              </li>
            </ol>
            <button
              type="button"
              onClick={() => setShowHelp(false)}
              className="mt-4 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Back
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={copyLink}
          className={`flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted ${showHelp ? "mt-4" : "mt-6"}`}
        >
          {copied ? "Link copied!" : <Copy className="h-4 w-4" />}
          {copied ? "Link copied!" : "Copy Link"}
        </button>

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
