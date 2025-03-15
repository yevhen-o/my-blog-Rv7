import { PostInterface } from "@src/types/PostInterface";
import { getUrl, IDENTIFIERS, Link } from "@src/utils";
import "./BlogItem.scss";

export function BlogItem({
  item,
}: {
  item: Pick<PostInterface, "slug" | "author" | "title">;
}) {
  return (
    <div className="blog-item__wrapper">
      <Link
        to={getUrl(IDENTIFIERS.BLOG_VIEW, {
          slug: item.slug,
        })}
      >
        <h2>{item.title}</h2> <small>Author: {item.author}</small>
      </Link>
    </div>
  );
}
