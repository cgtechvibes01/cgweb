"use client";

import { useCallback, useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { BLOG_API_URL } from "@/lib/constants";

interface PostMeta {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
}

interface PostFull extends PostMeta {
  content: string;
  contentHtml: string;
}

async function fetchJson(action: string, slug = "") {
  const url = new URL(BLOG_API_URL);
  url.searchParams.set("action", action);
  if (slug) url.searchParams.set("slug", slug);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Request failed");
  const data = await res.json();
  if (!data.success) throw new Error(data.message || "Unknown error");
  return data;
}

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date + "T00:00:00");
  return isNaN(d.getTime())
    ? date
    : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function BlogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("post");

  const [posts, setPosts] = useState<PostMeta[] | null>(null);
  const [post, setPost] = useState<PostFull | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError("");
      try {
        if (slug) {
          const data = await fetchJson("getPost", slug);
          if (!cancelled) setPost(data.post);
        } else {
          const data = await fetchJson("getPosts");
          if (!cancelled) setPosts(data.posts || []);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const openPost = useCallback(
    (s: string) => {
      router.push(`/blog?post=${s}`);
    },
    [router]
  );

  const goBack = useCallback(() => {
    router.push("/blog");
  }, [router]);

  if (loading) {
    return (
      <p className="py-16 text-center text-sm text-muted-foreground">
        Loading blog posts…
      </p>
    );
  }

  if (error) {
    return (
      <div className="glass rounded-3xl p-10 text-center">
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  // ── Article view ──
  if (post) {
    return (
      <article className="mx-auto max-w-3xl">
        <button
          onClick={goBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" />
          All posts
        </button>
        <GlassCard className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            {post.tags?.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <h1 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
            {post.title}
          </h1>
          {post.date && (
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </p>
          )}
          <div
            className="blog-prose mt-8"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </GlassCard>
      </article>
    );
  }

  // ── List view ──
  if (!posts?.length) {
    return (
      <div className="glass rounded-3xl p-10 text-center">
        <p className="text-sm text-muted-foreground">
          No posts yet. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p, i) => (
        <Reveal key={p.slug} delay={i * 0.05}>
          <button
            onClick={() => openPost(p.slug)}
            className="block h-full w-full text-left"
            aria-label={`Read ${p.title}`}
          >
            <GlassCard className="group flex h-full flex-col">
              <div className="flex items-center justify-between">
                {p.tags?.[0] ? (
                  <Badge>{p.tags[0]}</Badge>
                ) : (
                  <span className="bg-gradient-neon grid h-10 w-10 place-items-center rounded-xl text-white shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                    <Tag className="h-5 w-5" />
                  </span>
                )}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>
              <h2 className="mt-5 text-lg font-semibold leading-snug">
                {p.title}
              </h2>
              {p.description && (
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {p.description}
                </p>
              )}
              {p.date && (
                <p className="mt-5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(p.date)}
                </p>
              )}
            </GlassCard>
          </button>
        </Reveal>
      ))}
    </div>
  );
}

export function BlogFeed() {
  return (
    <Suspense fallback={<p className="py-16 text-center text-sm text-muted-foreground">Loading…</p>}>
      <BlogContent />
    </Suspense>
  );
}