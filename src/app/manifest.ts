import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, BASE_PATH } from "@/lib/constants";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const base = `${BASE_PATH}/`;
  return {
    name: "CGTechVibes — Digital Products & Business Solutions",
    short_name: "CGTechVibes",
    description: SITE_DESCRIPTION,
    start_url: base,
    scope: base,
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#0d0d14",
    theme_color: "#0d0d14",
    icons: [
      {
        src: `${base}icons/icon-96.png`,
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${base}icons/icon-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${base}icons/icon-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: `${base}icons/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${base}icons/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Our Projects",
        url: `${base}projects`,
        description: "Browse our portfolio",
      },
      {
        name: "Blog",
        url: `${base}blog`,
        description: "Read our latest articles",
      },
      {
        name: "Contact",
        url: `${base}contact`,
        description: "Get in touch",
      },
    ],
  };
}
