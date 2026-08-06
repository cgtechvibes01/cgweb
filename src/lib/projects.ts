import { Building2, Cpu, FileCode2, GraduationCap, Map, BarChart3 } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  tag: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  link: string;
  href?: string;
}

const projectImage = (name: string) => `${BASE_PATH}/images/projects/${name}.webp`;

export const PROJECTS: Project[] = [
  {
    icon: Map,
    title: "FamTree",
    tag: "Web App",
    description:
      "Family tree webapp to visualize and preserve your family history online.",
    image: projectImage("famtree"),
    link: "/projects/famtree",
    href: "/projects/famtree",
  },
  {
    icon: Building2,
    title: "BNB Manager",
    tag: "Web App",
    description:
      "A complete BnB booking management webapp — bookings, guests, housekeeping and database sync.",
    image: projectImage("bnb-manager"),
    link: "/projects/bnb-manager",
    href: "/projects/bnb-manager",
  },
  {
    icon: FileCode2,
    title: "DaPen",
    tag: "Web App",
    description:
      "Digital census webapp for community profiling — smart resident intake, area directories and instant search for administrators.",
    image: projectImage("dapen"),
    link: "/projects/dapen",
    href: "/projects/dapen",
  },
  {
    icon: GraduationCap,
    title: "Edu Manage Pro",
    tag: "Web App",
    description:
      "Education management platform to run schools and learning institutions efficiently.",
    image: projectImage("edu-manage-pro"),
    link: "/projects/edu-manage-pro",
    href: "/projects/edu-manage-pro",
  },
  {
    icon: FileCode2,
    title: "DocuGen",
    tag: "Utility",
    description:
      "Document generation tool that creates clean, formatted documents in seconds.",
    image: projectImage("docugen"),
    link: "/projects",
  },
  {
    icon: BarChart3,
    title: "Movie Dashboard",
    tag: "Web App",
    description:
      "Media streaming dashboard with trending picks, search and watchlist tracking.",
    image: projectImage("movie-dashboard"),
    link: "/projects",
  },
  {
    icon: Cpu,
    title: "POS System",
    tag: "Business Tool",
    description:
      "Point-of-sale system for fast checkout, inventory and daily sales reporting.",
    image: projectImage("pos-system"),
    link: "/projects/pos-system",
    href: "/projects/pos-system",
  },
  {
    icon: Cpu,
    title: "RestoMe",
    tag: "Web App",
    description:
      "Restaurant management webapp covering orders, tables, menu and staff.",
    image: projectImage("restome"),
    link: "/projects/restome",
    href: "/projects/restome",
  },
  {
    icon: Cpu,
    title: "Sailormen",
    tag: "Web App",
    description:
      "Boat booking platform to browse vessels, check availability and reserve trips.",
    image: projectImage("sailormen"),
    link: "/projects/sailormen",
    href: "/projects/sailormen",
  },
  {
    icon: Cpu,
    title: "Your Next Project",
    tag: "Ready",
    description:
      "Have an idea? Let's turn it into a modern digital product together.",
    link: "/contact",
  },
];
