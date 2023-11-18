import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import party from "party-js";

export default function MyApp() {
  if (ExecutionEnvironment.canUseDOM) {
    window.addEventListener("click", (e) => {
      party.confetti(e, {
        count: party.variation.range(5, 20),
      });
    });
  }
}
