import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { BLOG_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and insights from the CGTechVibes blog.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        badge="Blog"
        title="Our blog"
        subtitle="Insights, tips and stories about technology, business and digital products."
      />
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="glass-strong overflow-hidden rounded-3xl p-2 sm:p-3">
            <div className="flex items-center justify-between gap-3 px-3 py-2.5">
              <p className="text-sm font-medium text-muted-foreground">
                Chalspectrum Blog
              </p>
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Open in new tab
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <iframe
              src={BLOG_URL}
              title="CGTechVibes Blog"
              className="h-[70vh] w-full rounded-2xl border border-border bg-background"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
