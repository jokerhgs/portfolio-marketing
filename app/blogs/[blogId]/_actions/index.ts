import { BlogPost } from "../../_types";
import { blogPosts } from "../../mock";

export const fetchBlogPost = async (
  blogId: string
): Promise<BlogPost | null> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return blogPosts.find((p) => p.id === blogId) ?? null;
};
