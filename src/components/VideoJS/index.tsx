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
        margin: "0 0 var(--ifm-paragraph-margin-bottom)",
      }}
    >
      <video
        className="video-js vjs-fluid"
        onKeyDown={(e) => {
          if (player !== null) {
            switch (e.code) {
              case "Space":
                e.preventDefault();
                if (player.paused()) {
                  player.play();
                } else {
                  player.pause();
                }
                break;
              case "ArrowLeft":
                e.preventDefault();
                player.currentTime(player.currentTime() - 1);
                break;
              case "ArrowRight":
                e.preventDefault();
                player.currentTime(player.currentTime() + 1);
                break;
              case "ArrowUp":
                e.preventDefault();
                player.volume(player.volume() + 0.1);
                break;
              case "ArrowDown":
                e.preventDefault();
                player.volume(player.volume() - 0.1);
                break;
              case "Enter":
                e.preventDefault();
                if (player.isFullscreen()) {
                  player.exitFullscreen();
                } else {
                  player.requestFullscreen();
                }
                break;
            }
          }
        }}
        ref={(ref) => {
          if (ref !== null && ref.dataset.init !== "true") {
            ref.dataset.init = "true";
            player = videojs(ref, {
              controls: true,
              preload: "auto",
              language: "zh-CN",
              languages: {
                "zh-CN": zhCN,
              },
              playbackRates: [
                0.1, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3,
                3.25, 3.5, 3.75, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
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
