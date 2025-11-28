import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchBlogPost } from "./_actions";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import "./_styles/index.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}): Promise<Metadata> {
  const { blogId } = await params;
  const post = await fetchBlogPost(blogId);
  if (!post) return {};
  return {
    title: `${post.title} - Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const post = await fetchBlogPost(blogId);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to all posts
          </Link>
        </div>

        {/* Article Header */}
        <article className="w-full">
          {/* Creative Header Section */}
          <header className="text-center mb-12 relative">
            {/* Decorative Element */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-6">
              <HiPencilAlt className="w-6 h-6 text-primary" />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4 text-primary/60" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />

              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4 text-primary/60" />
                <span>{post.readTime || "5"} min read</span>
              </div>
            </div>

            {/* Description */}
            {post.description && (
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                {post.description}
              </p>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full border border-primary/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="rich-text text-foreground/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-border/40">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to all posts
              </Link>

              <div className="text-xs text-muted-foreground">
                Published on {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
