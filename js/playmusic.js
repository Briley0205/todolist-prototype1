const musicPlayerTitle = document.querySelector(".bgsound__musicTitle");
const musicPlayerAnime = document.querySelector(".bgsound__animation-bar");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("audio");
const title = document.querySelector("#music-info__title");

function loadSong(musicfile, song) {
    const musicinfo = document.querySelector("#music-info__title");
    audioBox.src = `music/${musicfile}/${song}`;
    musicinfo.innerText = song;
}
function toPutAudio(musicfile, music) {
    let chosenAudio = music;
    bgaudio.src = `music/${musicfile}/${chosenAudio}`;
    loadSong(musicfile, chosenAudio);
}

function playSong() {
musicPlayerTitle.classList.add("play");
musicPlayerAnime.classList.add("play");
playBtn.querySelector("i.fas").classList.remove("fa-play");
playBtn.querySelector("i.fas").classList.add("fa-pause");

audio.play();
}

function pauseSong() {
    musicPlayerTitle.classList.remove("play");
    musicPlayerAnime.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");

    audio.pause();
}


playBtn.addEventListener("click", () => {
    const isPlaying = musicPlayerAnime.classList.contains("play");

    if(isPlaying){
        pauseSong();
    } else{
        playSong();
    }
})


