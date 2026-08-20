import Link from "next/link";
import { SITE_NAME, BLOG_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border pb-20 pt-12 md:pb-12">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-gradient text-lg font-bold">{SITE_NAME}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Digital products, business solutions, web apps and websites.
              Building modern, mobile-first experiences with AI-ready
              architecture.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <a href={BLOG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  Blogspot
                </a>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </Reveal>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {year} {SITE_NAME}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
