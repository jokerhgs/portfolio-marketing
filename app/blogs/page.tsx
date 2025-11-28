import { blogPosts } from "./mock";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

// Simplified truncate function
function truncateText(html: string, maxLength: number) {
  const text = html.replace(/<[^>]+>/g, "");
  return text.length > maxLength
    ? text.slice(0, maxLength).trimEnd() + "…"
    : text;
}

// Minimalistic BlogCard with consistent sizing
function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  const truncatedTitle =
    post.title.length > 60
      ? post.title.slice(0, 60).trimEnd() + "…"
      : post.title;
  const truncatedDescription = truncateText(post.description, 100);

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-xl border border-border/40 bg-background/50 p-5 transition-all duration-400 hover:shadow-lg hover:border-primary/40 hover:scale-[1.02] backdrop-blur-sm h-full flex flex-col">
        {/* Subtle hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex flex-col h-full gap-4 z-10">
          {/* Title with consistent truncation */}
          <Link
            href={`/blogs/${post.id}`}
            className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-[3rem] flex items-start"
          >
            {truncatedTitle}
          </Link>

          {/* Minimal metadata */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt className="w-3 h-3 text-primary/60" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <span className="text-primary/60 font-medium">•</span>
            <span className="text-primary font-medium">
              {post.readTime} min
            </span>
          </div>

          {/* Description with consistent line clamp */}
          <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3 flex-1 min-h-[4.5rem]">
            {truncatedDescription}
          </p>

          {/* Creative tags with hover scale */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full border border-primary/10 hover:scale-105 transition-transform duration-200"
              >
                #{tag}
              </span>
            ))}
            {post.tags && post.tags.length > 2 && (
              <span className="px-2 py-1 text-xs text-muted-foreground">
                +{post.tags.length - 2}
              </span>
            )}
          </div>

          {/* Minimal read more button */}
          <Link
            href={`/blogs/${post.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors duration-300 group/btn mt-auto"
          >
            Read more
            <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back link at top left */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">
              ←
            </span>
            Back to home
          </Link>
        </div>

        {/* Minimal header with creative layout */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-4">
            <HiPencilAlt className="w-5 h-5 text-primary" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-light text-foreground mb-3">
            Blog Posts
          </h1>

          <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
            Thoughts, tutorials, and insights from our latest writings
          </p>
        </div>

        {/* Creative grid layout with consistent card sizes */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Minimal footer note */}
        <div className="text-center mt-16">
          <p className="text-xs text-muted-foreground">
            Showing {blogPosts.length} posts •
            <Link
              href="/"
              className="hover:text-primary transition-colors ml-1"
            >
              Back to home
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
