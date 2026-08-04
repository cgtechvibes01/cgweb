"use client";

import { useEffect } from "react";
import { BASE_PATH } from "@/lib/constants";

export function PWAProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register(`${BASE_PATH}/sw.js`)
        .catch((err) => console.error("SW registration failed:", err));
    }
  }, []);

  return null;
}
