import { BlogArticle } from "@src/features/Blog/BlogArticle";
import { PostInterface } from "@src/types/PostInterface";
import { useLoaderData } from "react-router";

export default function BlogPost() {
  const blog = useLoaderData<PostInterface>();

  return <BlogArticle article={blog} />;
}
