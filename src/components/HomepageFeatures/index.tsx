import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "易于使用",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>网站拥有简洁、统一的界面</>,
  },
  {
    title: "专注于重要的事情",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>去除多余的元素，让你专注于重要的事情</>,
  },
  {
    title: "不断更新",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>文档将会不断更新</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
