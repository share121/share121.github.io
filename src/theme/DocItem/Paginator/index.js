import Paginator from "@theme-original/DocItem/Paginator";
import GiscusElement from "@site/src/components/GiscusElement";

export default function PaginatorWrapper(props) {
  return (
    <>
      <Paginator {...props} />
      <GiscusElement />
    </>
  );
}
