const splide = new Splide(".splide", {
  autoplay: true, // 自動再生
  type: "loop", // ループ
  pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
  pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
  interval: 2000, // 自動再生の間隔
  speed: 1000, // スライダーの移動時間
}).mount();
