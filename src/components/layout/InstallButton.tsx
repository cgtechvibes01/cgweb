"use client";

import { useEffect, useState } from "react";
import { Download, X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const isIOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
  !(window as unknown as { MSStream?: boolean }).MSStream;

export function InstallButton({ className }: { className?: string }) {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showIOSHelp, setShowIOSHelp] = useState(false);

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    const onAppInstalled = () => {
      setInstallPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (installPrompt) {
      await installPrompt.prompt();
      await installPrompt.userChoice;
      setInstallPrompt(null);
      return;
    }

    if (isIOS) {
      setShowIOSHelp(true);
      return;
    }

    setShowIOSHelp(true);
  };

  return (
    <>
      <button
        onClick={handleInstall}
        aria-label="Install app"
        title="Install app"
        className={cn(
          "glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-foreground",
          className
        )}
      >
        <Download className="h-5 w-5" />
      </button>

      {showIOSHelp && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setShowIOSHelp(false)}
        >
          <div
            className="glass-strong w-full max-w-sm rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="bg-gradient-orange grid h-11 w-11 place-items-center rounded-xl text-white">
                <Plus className="h-6 w-6" />
              </div>
              <button
                onClick={() => setShowIOSHelp(false)}
                aria-label="Close"
                className="rounded-lg p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <h3 className="mt-4 text-lg font-bold">Add to Home Screen</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tap the <strong className="text-foreground">Share</strong> button
              in your browser, then choose{" "}
              <strong className="text-foreground">
                Add to Home Screen
              </strong>{" "}
              to install CGTechVibes as an app.
            </p>
            <button
              onClick={() => setShowIOSHelp(false)}
              className="bg-gradient-orange mt-5 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
