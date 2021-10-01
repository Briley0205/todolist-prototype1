const musicProgress = document.querySelector(".progress-container__progress");
const musicProgressContainer = document.querySelector(".music-info__progress-container");

function updateProgress(e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  musicProgress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

audio.addEventListener("timeupdate", updateProgress);
musicProgressContainer.addEventListener("click", setProgress);