import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";

type LoaderData = {
  // this is a handy way to say: "post is whatever type getPosts resolves to"
  posts: Awaited<ReturnType<typeof getPosts>> 
}

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};
