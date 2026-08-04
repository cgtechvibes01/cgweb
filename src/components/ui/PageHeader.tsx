import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <Badge>{badge}</Badge>}
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
      <div
        aria-hidden
        className="bg-gradient-brand pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full opacity-15 blur-3xl"
      />
    </section>
  );
}
