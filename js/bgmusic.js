//배경화면 랜덤 재생 시 배경화면에 맞는 bgmusic 재생//
//*소녀와드래곤 === 緑の手紙
//*소녀와우산 === 天国や異国の魔法の癒しの音楽
//*애니거실 === ユメの喫茶店
//*물결 === 신나는 뉴에이지 음악
//*폭포낙원 === Plum 상쾌한 음악들 모음 
//*리얼우주인 === TidoKang 비올때 듣는 슬픈 음악
//*나무와여인 === 이야기가시작될듯한 오르골
//*소녀와봄비 === 편안한 빗소리의 재즈 커피숍

const bgmusicFILES = ["Tidokang", "Newage", "Rainjazz", "ミツキヨ", "癒やしオルゴール", "plum", "天国や異世界", "緑の手紙"];
const bgaudio = document.createElement("source");
const audioBox = document.querySelector("audio");
const controler = document.querySelector("bgsound__musicControler");
let songIndex = 0;

const bgmusic = {
    tidokang: ["Rainy Day Tido Kang.mp3", "Memory  Tido Kang.mp3", "전생 Tido Kang.mp3", "Snow Crystal Tido Kang.mp3", "눈사람 Tido Kang.mp3"],
    newage: ["Duggy - Running In The Sky.mp3", "Duggy - Blue Whale.mp3", "Duggy - Under the Sky.mp3", "Duggy - Adventure.mp3", "Duggy - Misty Smile.mp3"],
    rainjazz: ["Rainy Night and Coffee Shop1.m4a", "Rainy Night and Coffee Shop2.m4a", "Rainy Night and Coffee Shop3.m4a"],
    mitsukiyo: ["ミツキヨ - ユメの喫茶店.mp3", "ミツキヨ - ようこそトロイメへ.mp3", "ミツキヨ - 日差しの中のティータイム.mp3", "ミツキヨ - ユノのアトリエ.mp3", "ミツキヨ - YU.ME.NO .mp3"],
    iyashi: ["物語が始まりそうな音楽.mp3"],
    plum: ["Skyscape by Plum.mp3", "Indigo Sky by Plum.mp3", "Shall We Dance by Plum.mp3", "Calling by Plum.mp3", "하얀 구름에 무지갯빛 물감 by Plum.mp3"],
    tengoku: ["天国や異世界1.mp3", "天国や異世界2.mp3", "天国や異世界3.mp3", "天国や異世界４.mp3", "天国や異世界5.mp3"],
    midori: ["Mitsukiyo - The Green Letter- The Green Letter.mp3", "Mitsukiyo - The Green Letter- Vagabond.mp3", "Mitsukiyo - The Green Letter- Forest Palette.mp3", "Mitsukiyo - The Green Letter- Venture.mp3", "Mitsukiyo - The Green Letter- Forgotten Forest.mp3"],
}

function loadSong(musicfile, song) {
    const musicinfo = document.querySelector("#music-info__title");
    audioBox.src = `music/${musicfile}/${song}`;
    musicinfo.innerText = song;
}
function toPutAudio(musicfile, music) {
    bgaudio.src = `music/${musicfile}/${music}`;
    audioBox.appendChild(bgaudio);
    loadSong(musicfile, music);
}

if (chosenMovie === movies[0]){
    loadSong(bgmusicFILES[0], bgmusic.tidokang[songIndex]);
} else if(chosenMovie === movies[1]){
    toPutAudio(bgmusicFILES[1], bgmusic.newage[songIndex]);
} else if(chosenMovie === movies[2]){
    toPutAudio(bgmusicFILES[2], bgmusic.rainjazz[songIndex]);
} else if(chosenMovie === movies[3]){
    toPutAudio(bgmusicFILES[3], bgmusic.mitsukiyo[songIndex]);
} else if(chosenMovie === movies[4]){
    toPutAudio(bgmusicFILES[4], bgmusic.iyashi[songIndex]);
} else if(chosenMovie === movies[5]){
    toPutAudio(bgmusicFILES[5], bgmusic.plum[songIndex]);
} else if(chosenMovie === movies[6]){
    toPutAudio(bgmusicFILES[6], bgmusic.tengoku[songIndex]);
} else if(chosenMovie === movies[7]){
    toPutAudio(bgmusicFILES[7], bgmusic.midori[songIndex]);
}