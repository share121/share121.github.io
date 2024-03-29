import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function MyApp() {
  const { colorMode } = useColorMode();
  if (colorMode === "dark")
    return (
      <div
        style={{
          marginTop: "2em",
          msUserSelect: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
        className="giscus-container"
      >
        <Giscus
          repo="share121/share121.github.io"
          repoId="R_kgDOKawuNQ"
          category="Announcements"
          categoryId="DIC_kwDOKawuNc4CZyP8"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="data:text/css,main%7B--color-prettylights-syntax-comment%3A%238b949e%3B--color-prettylights-syntax-constant%3A%2379c0ff%3B--color-prettylights-syntax-entity%3A%23d2a8ff%3B--color-prettylights-syntax-storage-modifier-import%3A%23c9d1d9%3B--color-prettylights-syntax-entity-tag%3A%237ee787%3B--color-prettylights-syntax-keyword%3A%23ff7b72%3B--color-prettylights-syntax-string%3A%23a5d6ff%3B--color-prettylights-syntax-variable%3A%23ffa657%3B--color-prettylights-syntax-brackethighlighter-unmatched%3A%23f85149%3B--color-prettylights-syntax-invalid-illegal-text%3A%23f0f6fc%3B--color-prettylights-syntax-invalid-illegal-bg%3A%238e1519%3B--color-prettylights-syntax-carriage-return-text%3A%23f0f6fc%3B--color-prettylights-syntax-carriage-return-bg%3A%23b62324%3B--color-prettylights-syntax-string-regexp%3A%237ee787%3B--color-prettylights-syntax-markup-list%3A%23f2cc60%3B--color-prettylights-syntax-markup-heading%3A%231f6feb%3B--color-prettylights-syntax-markup-italic%3A%23c9d1d9%3B--color-prettylights-syntax-markup-bold%3A%23c9d1d9%3B--color-prettylights-syntax-markup-deleted-text%3A%23ffdcd7%3B--color-prettylights-syntax-markup-deleted-bg%3A%2367060c%3B--color-prettylights-syntax-markup-inserted-text%3A%23aff5b4%3B--color-prettylights-syntax-markup-inserted-bg%3A%23033a16%3B--color-prettylights-syntax-markup-changed-text%3A%23ffdfb6%3B--color-prettylights-syntax-markup-changed-bg%3A%235a1e02%3B--color-prettylights-syntax-markup-ignored-text%3A%23c9d1d9%3B--color-prettylights-syntax-markup-ignored-bg%3A%231158c7%3B--color-prettylights-syntax-meta-diff-range%3A%23d2a8ff%3B--color-prettylights-syntax-brackethighlighter-angle%3A%238b949e%3B--color-prettylights-syntax-sublimelinter-gutter-mark%3A%23484f58%3B--color-prettylights-syntax-constant-other-reference-link%3A%23a5d6ff%3B--color-btn-text%3A%23c9d1d9%3B--color-btn-bg%3A%2321262d%3B--color-btn-border%3Argba%28240%2C%20246%2C%20252%2C%200.1%29%3B--color-btn-shadow%3A0%200%20transparent%3B--color-btn-inset-shadow%3A0%200%20transparent%3B--color-btn-hover-bg%3A%2330363d%3B--color-btn-hover-border%3A%238b949e%3B--color-btn-active-bg%3A%23282e33%3B--color-btn-active-border%3A%236e7681%3B--color-btn-selected-bg%3A%23161b22%3B--color-btn-primary-text%3A%23fff%3B--color-btn-primary-bg%3A%23238636%3B--color-btn-primary-border%3Argba%28240%2C%20246%2C%20252%2C%200.1%29%3B--color-btn-primary-shadow%3A0%200%20transparent%3B--color-btn-primary-inset-shadow%3A0%200%20transparent%3B--color-btn-primary-hover-bg%3A%232ea043%3B--color-btn-primary-hover-border%3Argba%28240%2C%20246%2C%20252%2C%200.1%29%3B--color-btn-primary-selected-bg%3A%23238636%3B--color-btn-primary-selected-shadow%3A0%200%20transparent%3B--color-btn-primary-disabled-text%3Ahsla%280%2C%200%25%2C%20100%25%2C%200.5%29%3B--color-btn-primary-disabled-bg%3Argba%2835%2C%20134%2C%2054%2C%200.6%29%3B--color-btn-primary-disabled-border%3Argba%28240%2C%20246%2C%20252%2C%200.1%29%3B--color-action-list-item-default-hover-bg%3Argba%28177%2C%20186%2C%20196%2C%200.12%29%3B--color-segmented-control-bg%3Ahsla%28215%2C%208%25%2C%2047%25%2C%200.1%29%3B--color-segmented-control-button-bg%3A%230d1117%3B--color-segmented-control-button-selected-border%3A%236e7681%3B--color-fg-default%3A%23e6edf3%3B--color-fg-muted%3A%237d8590%3B--color-fg-subtle%3A%236e7681%3B--color-canvas-default%3A%230d1117%3B--color-canvas-overlay%3A%23161b22%3B--color-canvas-inset%3A%23010409%3B--color-canvas-subtle%3A%23161b22%3B--color-border-default%3A%2330363d%3B--color-border-muted%3A%2321262d%3B--color-neutral-muted%3Ahsla%28215%2C%208%25%2C%2047%25%2C%200.4%29%3B--color-accent-fg%3A%232f81f7%3B--color-accent-emphasis%3A%231f6feb%3B--color-accent-muted%3Argba%2856%2C%20139%2C%20253%2C%200.4%29%3B--color-accent-subtle%3Argba%2856%2C%20139%2C%20253%2C%200.1%29%3B--color-success-fg%3A%233fb950%3B--color-attention-fg%3A%23d29922%3B--color-attention-muted%3Argba%28187%2C%20128%2C%209%2C%200.4%29%3B--color-attention-subtle%3Argba%28187%2C%20128%2C%209%2C%200.15%29%3B--color-danger-fg%3A%23f85149%3B--color-danger-muted%3Argba%28248%2C%2081%2C%2073%2C%200.4%29%3B--color-danger-subtle%3Argba%28248%2C%2081%2C%2073%2C%200.1%29%3B--color-primer-shadow-inset%3A0%200%20transparent%3B--color-scale-gray-7%3A%2321262d%3B--color-scale-blue-8%3A%230c2d6b%3B--color-social-reaction-bg-hover%3Avar%28--color-scale-gray-7%29%3B--color-social-reaction-bg-reacted-hover%3Avar%28--color-scale-blue-8%29%7Dmain%20.pagination-loader-container%7Bbackground-image%3Aurl%28https%3A%2F%2Fgithub.com%2Fimages%2Fmodules%2Fpulls%2Fprogressive-disclosure-line-dark.svg%29%7Dmain%20.gsc-loading-image%7Bbackground-image%3Aurl%28https%3A%2F%2Fgithub.githubassets.com%2Fimages%2Fmona-loading-dark.gif%29%7Dhtml%7Bbackground-color%3A%231b1b1d%7D"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    );
  else
    return (
      <div
        style={{
          marginTop: "2em",
          msUserSelect: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
        className="giscus-container"
      >
        <Giscus
          repo="share121/share121.github.io"
          repoId="R_kgDOKawuNQ"
          category="Announcements"
          categoryId="DIC_kwDOKawuNc4CZyP8"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="data:text/css,main%7B--color-prettylights-syntax-comment%3A%236e7781%3B--color-prettylights-syntax-constant%3A%230550ae%3B--color-prettylights-syntax-entity%3A%238250df%3B--color-prettylights-syntax-storage-modifier-import%3A%2324292f%3B--color-prettylights-syntax-entity-tag%3A%23116329%3B--color-prettylights-syntax-keyword%3A%23cf222e%3B--color-prettylights-syntax-string%3A%230a3069%3B--color-prettylights-syntax-variable%3A%23953800%3B--color-prettylights-syntax-brackethighlighter-unmatched%3A%2382071e%3B--color-prettylights-syntax-invalid-illegal-text%3A%23f6f8fa%3B--color-prettylights-syntax-invalid-illegal-bg%3A%2382071e%3B--color-prettylights-syntax-carriage-return-text%3A%23f6f8fa%3B--color-prettylights-syntax-carriage-return-bg%3A%23cf222e%3B--color-prettylights-syntax-string-regexp%3A%23116329%3B--color-prettylights-syntax-markup-list%3A%233b2300%3B--color-prettylights-syntax-markup-heading%3A%230550ae%3B--color-prettylights-syntax-markup-italic%3A%2324292f%3B--color-prettylights-syntax-markup-bold%3A%2324292f%3B--color-prettylights-syntax-markup-deleted-text%3A%2382071e%3B--color-prettylights-syntax-markup-deleted-bg%3A%23ffebe9%3B--color-prettylights-syntax-markup-inserted-text%3A%23116329%3B--color-prettylights-syntax-markup-inserted-bg%3A%23dafbe1%3B--color-prettylights-syntax-markup-changed-text%3A%23953800%3B--color-prettylights-syntax-markup-changed-bg%3A%23ffd8b5%3B--color-prettylights-syntax-markup-ignored-text%3A%23eaeef2%3B--color-prettylights-syntax-markup-ignored-bg%3A%230550ae%3B--color-prettylights-syntax-meta-diff-range%3A%238250df%3B--color-prettylights-syntax-brackethighlighter-angle%3A%2357606a%3B--color-prettylights-syntax-sublimelinter-gutter-mark%3A%238c959f%3B--color-prettylights-syntax-constant-other-reference-link%3A%230a3069%3B--color-btn-text%3A%2324292f%3B--color-btn-bg%3A%23f6f8fa%3B--color-btn-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-btn-shadow%3A0%201px%200%20rgb%2831%2035%2040%2F4%25%29%3B--color-btn-inset-shadow%3Ainset%200%201px%200%20hsla%280%2C%200%25%2C%20100%25%2C%200.25%29%3B--color-btn-hover-bg%3A%23f3f4f6%3B--color-btn-hover-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-btn-active-bg%3A%23ebecf0%3B--color-btn-active-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-btn-selected-bg%3A%23eeeff2%3B--color-btn-primary-text%3A%23fff%3B--color-btn-primary-bg%3A%231f883d%3B--color-btn-primary-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-btn-primary-shadow%3A0%201px%200%20rgba%2831%2C%2035%2C%2040%2C%200.1%29%3B--color-btn-primary-inset-shadow%3Ainset%200%201px%200%20hsla%280%2C%200%25%2C%20100%25%2C%200.03%29%3B--color-btn-primary-hover-bg%3A%231a7f37%3B--color-btn-primary-hover-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-btn-primary-selected-bg%3A%23187733%3B--color-btn-primary-selected-shadow%3Ainset%200%201px%200%20rgba%280%2C%2045%2C%2017%2C%200.2%29%3B--color-btn-primary-disabled-text%3Ahsla%280%2C%200%25%2C%20100%25%2C%200.8%29%3B--color-btn-primary-disabled-bg%3A%2394d3a2%3B--color-btn-primary-disabled-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-action-list-item-default-hover-bg%3Argba%28208%2C%20215%2C%20222%2C%200.32%29%3B--color-segmented-control-bg%3A%23eaeef2%3B--color-segmented-control-button-bg%3A%23fff%3B--color-segmented-control-button-selected-border%3A%238c959f%3B--color-fg-default%3A%231f2328%3B--color-fg-muted%3A%23656d76%3B--color-fg-subtle%3A%236e7781%3B--color-canvas-default%3A%23fff%3B--color-canvas-overlay%3A%23fff%3B--color-canvas-inset%3A%23f6f8fa%3B--color-canvas-subtle%3A%23f6f8fa%3B--color-border-default%3A%23d0d7de%3B--color-border-muted%3A%23d8dee4%3B--color-neutral-muted%3Argba%28175%2C%20184%2C%20193%2C%200.2%29%3B--color-accent-fg%3A%230969da%3B--color-accent-emphasis%3A%230969da%3B--color-accent-muted%3Argba%2884%2C%20174%2C%20255%2C%200.4%29%3B--color-accent-subtle%3A%23ddf4ff%3B--color-success-fg%3A%231a7f37%3B--color-attention-fg%3A%239a6700%3B--color-attention-muted%3Argba%28212%2C%20167%2C%2044%2C%200.4%29%3B--color-attention-subtle%3A%23fff8c5%3B--color-danger-fg%3A%23d1242f%3B--color-danger-muted%3Argba%28255%2C%20129%2C%20130%2C%200.4%29%3B--color-danger-subtle%3A%23ffebe9%3B--color-primer-shadow-inset%3Ainset%200%201px%200%20rgba%28208%2C%20215%2C%20222%2C%200.2%29%3B--color-scale-gray-1%3A%23eaeef2%3B--color-scale-blue-1%3A%23b6e3ff%3B--color-social-reaction-bg-hover%3Avar%28--color-scale-gray-1%29%3B--color-social-reaction-bg-reacted-hover%3Avar%28--color-scale-blue-1%29%7Dmain%20.pagination-loader-container%7Bbackground-image%3Aurl%28https%3A%2F%2Fgithub.com%2Fimages%2Fmodules%2Fpulls%2Fprogressive-disclosure-line.svg%29%7Dmain%20.gsc-loading-image%7Bbackground-image%3Aurl%28https%3A%2F%2Fgithub.githubassets.com%2Fimages%2Fmona-loading-default.gif%29%7Dhtml%7Bbackground-color%3A%23fff%7D"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    );
}
