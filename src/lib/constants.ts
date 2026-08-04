export const SITE_NAME = "CGTechVibes";
export const SITE_DESCRIPTION =
  "Digital products, business solutions, web apps and websites built with modern technology.";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const BLOG_URL = "https://chalspectrum.blogspot.com/";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
] as const;

export const BOTTOM_NAV_LINKS = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Projects", href: "/projects", icon: "folder" },
  { label: "Blog", href: "/blog", icon: "pen" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Contact", href: "/contact", icon: "mail" },
] as const;
