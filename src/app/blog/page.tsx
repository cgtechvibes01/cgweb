import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { BlogFeed } from "@/components/blog/BlogFeed";

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
          <BlogFeed />
        </Container>
      </section>
    </>
  );
}