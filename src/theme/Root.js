import PartyAnimation from "@site/src/components/PartyAnimation";
import ChangeA from "@site/src/components/ChangeA";

PartyAnimation();
ChangeA();

export default function Root({ children }) {
  return <>{children}</>;
}
