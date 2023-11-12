import BlogPostPaginator from "@theme-original/BlogPostPaginator";
import GiscusElement from "@site/src/components/GiscusElement";

export default function BlogPostPaginatorWrapper(props) {
  return (
    <>
      <BlogPostPaginator {...props} />
      <GiscusElement />
    </>
  );
}
