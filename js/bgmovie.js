const movies = ["리얼우주인.mp4", "물결.mp4", "소녀와봄비.mp4", "애니메이션거실.mp4", "나무와여인.mp4", "폭포낙원.mp4", "소녀와우산.mp4", "소녀와드래곤.mp4"];
const chosenMovie = movies[Math.floor(Math.random() * movies.length)];
//*배경화면 영상이 들어갈 비디오 박스를 정의*//
const videoBox = document.getElementById("bg-movie");
//*비디오 박스를 정의해주지 않으면 appendChild 단계에서 실행이 안된다.*// 
const bgvideo = document.createElement("source");

bgvideo.src = `mp4/${chosenMovie}`;
videoBox.appendChild(bgvideo);

