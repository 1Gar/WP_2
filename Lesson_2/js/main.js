import "./pages/dateCalc.js";
import "./pages/tabs.js";
import "./pages/timer.js";
import "./libs/howler.js";
import "./libs/luxon.js";
import "../css/style.css";
import musicURL from "/music.mp3";


// const music = document.createElement("audio");
// music.src = musicURL;
// document.body.appendChild(music);

var sound = new Howl({
  src: [`${musicURL}`],
  preload: true,
  autoplay: false,
});

export {sound};