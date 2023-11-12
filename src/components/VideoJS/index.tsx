import "video.js/dist/video-js.min.css";
import videojs from "video.js";
import zhCN from "video.js/dist/lang/zh-CN.json";
import Player from "video.js/dist/types/player";

export default function MyApp({ children }) {
  let player: Player | null = null;
  return (
    <div
      data-vjs-player
      style={{
        overflow: "hidden",
        borderRadius: "var(--ifm-global-radius)",
      }}
    >
      <video
        className="video-js vjs-fluid"
        onKeyDown={(e) => {
          if ((e.code === "Space", player !== null)) {
            e.preventDefault();
          }
        }}
        onKeyUp={(e) => {
          if ((e.code === "Space", player !== null)) {
            if (player.paused()) {
              player.play();
            } else {
              player.pause();
            }
          }
        }}
        ref={(ref) => {
          if (ref !== null && ref.dataset.init !== "true") {
            ref.dataset.init = "true";
            player = videojs(ref, {
              controls: true,
              autoplay: false,
              preload: "auto",
              language: "zh-CN",
              languages: {
                "zh-CN": zhCN,
              },
              playbackRates: [
                0.1, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                13, 14, 15, 16,
              ],
            });
          }
        }}
        preload="none"
      >
        {children}
      </video>
    </div>
  );
}
