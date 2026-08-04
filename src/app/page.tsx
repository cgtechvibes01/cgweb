import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProjectsPreview />
      <CTA />
    </>
  );
}
