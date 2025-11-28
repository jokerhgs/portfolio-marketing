import { BlogPost } from "@/app/blogs/_types";
import { blogPosts } from "@/app/blogs/mock";
import Link from "next/link";

type BlogCardProps = {
  blog: BlogPost;
  idx: number;
};

const BlogCard = ({ blog }: BlogCardProps) => (
  <div className="bg-card rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow hover:bg-accent border border-border">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs text-muted-foreground">
        {new Date(blog.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>
    </div>
    {blog.tags && (
      <div className="flex flex-wrap gap-1 mb-2">
        {blog.tags.map((tag: string) => (
          <span
            key={tag}
            className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
    <h3 className="text-xl font-semibold mb-1 text-left">{blog.title}</h3>
    <p className="text-sm text-secondary-foreground text-left mb-2">
      {blog.description}
    </p>
    <Link
      key={blog.id}
      href={`/blogs/${blog.id}`}
      passHref
      className="mt-auto text-primary text-sm font-medium hover:underline"
    >
      Read more &rarr;
    </Link>
  </div>
);

export const BlogsSection = () => {
  return (
    <section
      id="blogs"
      className="scroll-mt-24 w-full min-h-screen flex flex-col items-center justify-center bg-background px-4 py-20"
    >
      <div className="max-w-4xl w-full text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
          Recent Blogs
        </h2>
        <div className="h-px w-24 bg-linear-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
        <p className="text-base sm:text-lg md:text-xl text-secondary-foreground leading-relaxed mb-8">
          Explore my latest articles on web development, design, and technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {blogPosts.map((blog: BlogPost, idx) => (
            <BlogCard key={blog.id} blog={blog} idx={idx} />
          ))}
        </div>
        <Link
          href="/blogs"
          className="mt-8 text-primary text-base font-semibold hover:underline"
        >
          Check all blogs &rarr;
        </Link>
      </div>
    </section>
  );
};
