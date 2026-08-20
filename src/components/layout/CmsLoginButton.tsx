import { PenLine } from "lucide-react";
import { CMS_URL } from "@/lib/constants";

export function CmsLoginButton() {
  return (
    <a
      href={CMS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      title="Login to CMS to write blog posts"
    >
      <PenLine className="h-4 w-4" />
      <span className="hidden lg:inline">Login</span>
    </a>
  );
}