// ...
import { Post, prisma } from "@prisma/client";
export type { Post };

// ...

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  return prisma.post.create({ data: post });
}