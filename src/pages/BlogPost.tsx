import { BlogArticle } from "@src/features/Blog/BlogArticle";
import { FirebasePostInterface } from "@src/types/PostInterface";
import { useLoaderData } from "react-router";

export default function BlogPost() {
  const blog = useLoaderData<FirebasePostInterface>();

  return <BlogArticle article={Object.values(blog)[0]} />;
}
