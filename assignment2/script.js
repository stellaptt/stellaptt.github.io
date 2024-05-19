const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "icon/play.svg";
  } else {
    video.pause();
    playPauseImg.src = "icon/pause.svg";
  }
}

// const toggledLikeButton = document.querySelector("#like-button");

// function toggleLike() {
//   toggledLikeButton.display = "block";
// }
