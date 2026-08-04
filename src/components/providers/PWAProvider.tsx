"use client";

import { useEffect } from "react";
import { BASE_PATH } from "@/lib/constants";

export function PWAProvider() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    if (process.env.NODE_ENV !== "production") {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      });
      return;
    }

    navigator.serviceWorker
      .register(`${BASE_PATH}/sw.js`)
      .catch((err) => console.error("SW registration failed:", err));
  }, []);

  return null;
}
