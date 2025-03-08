import { BlogItem } from "@src/features/Blog/BlogItem";
import { ListWrapper } from "@src/components/ListWrapper";
import { useLoaderData } from "react-router";
import { FirebasePostInterface } from "@src/types/PostInterface";

export function BlogList() {
  const blogsResponse = useLoaderData<FirebasePostInterface>();

  return (
    <>
      <h1>List of articles</h1>
      <ListWrapper>
        {Object.entries(blogsResponse).map(([key, value]) => (
          <BlogItem key={key} item={value} />
        ))}
      </ListWrapper>
    </>
  );
}
