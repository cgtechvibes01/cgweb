import Link from "next/link";
import { PenLine } from "lucide-react";

export function CmsLoginButton() {
  return (
    <Link
      href="/cms"
      className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      title="Login to CMS to write blog posts"
    >
      <PenLine className="h-4 w-4" />
      <span className="hidden lg:inline">Login</span>
    </Link>
  );
}