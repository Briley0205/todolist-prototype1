function prevSong() {
    if (chosenMovie === movies[0]){
        songIndex--
        if (songIndex < 0){songIndex = bgmusic.tidokang.length - 1}
        loadSong(bgmusicFILES[0], bgmusic.tidokang[songIndex]);
    } else if(chosenMovie === movies[1]){
        songIndex--
        if (songIndex < 0){songIndex = bgmusic.newage.length - 1}
        toPutAudio(bgmusicFILES[1], bgmusic.newage[songIndex]);
    } else if(chosenMovie === movies[2]){
        songIndex--
        if (songIndex < 0){songIndex = bgmusic.rainjazz.length - 1}
        toPutAudio(bgmusicFILES[2], bgmusic.rainjazz[songIndex]);
    } else if(chosenMovie === movies[3]){
        songIndex--
        if (songIndex < 0){songIndex = bgmusic.mitsukiyo.length - 1}
        toPutAudio(bgmusicFILES[3], bgmusic.mitsukiyo[songIndex]);
    } else if(chosenMovie === movies[4]){
        songIndex--
        if (songIndex < 0){songIndex = bgmusic.iyashi.length - 1}
        toPutAudio(bgmusicFILES[4], bgmusic.iyashi[songIndex]);
    } else if(chosenMovie === movies[5]){
        songIndex--
        if (songIndex < 0){songIndex = bgmusic.plum.length - 1}
        toPutAudio(bgmusicFILES[5], bgmusic.plum[songIndex]);
    } else if(chosenMovie === movies[6]){
        songIndex--
        if (songIndex < 0){songIndex = bgmusic.tengoku.length - 1}
        toPutAudio(bgmusicFILES[6], bgmusic.tengoku[songIndex]);
    } else if(chosenMovie === movies[7]){
        songIndex--
        if (songIndex < 0){songIndex = bgmusic.midori.length - 1}
        toPutAudio(bgmusicFILES[7], bgmusic.midori[songIndex]);
    }    playSong();
}

function nextSong() {
    if (chosenMovie === movies[0]){
        songIndex++
        if (songIndex > bgmusic.tidokang.length - 1){songIndex = 0}
        loadSong(bgmusicFILES[0], bgmusic.tidokang[songIndex]);
    } else if(chosenMovie === movies[1]){
        songIndex++
        if (songIndex > bgmusic.newage.length - 1){songIndex = 0}
        toPutAudio(bgmusicFILES[1], bgmusic.newage[songIndex]);
    } else if(chosenMovie === movies[2]){
        songIndex++
        if (songIndex > bgmusic.rainjazz.length - 1){songIndex = 0}
        toPutAudio(bgmusicFILES[2], bgmusic.rainjazz[songIndex]);
    } else if(chosenMovie === movies[3]){
        songIndex++
        if (songIndex > bgmusic.mitsukiyo.length - 1){songIndex = 0}
        toPutAudio(bgmusicFILES[3], bgmusic.mitsukiyo[songIndex]);
    } else if(chosenMovie === movies[4]){
        songIndex++
        if (songIndex > bgmusic.iyashi.length - 1){songIndex = 0}
        toPutAudio(bgmusicFILES[4], bgmusic.iyashi[songIndex]);
    } else if(chosenMovie === movies[5]){
        songIndex++
        if (songIndex > bgmusic.plum.length - 1){songIndex = 0}
        toPutAudio(bgmusicFILES[5], bgmusic.plum[songIndex]);
    } else if(chosenMovie === movies[6]){
        songIndex++
        if (songIndex > bgmusic.tengoku.length - 1){songIndex = 0}
        toPutAudio(bgmusicFILES[6], bgmusic.tengoku[songIndex]);
    } else if(chosenMovie === movies[7]){
        songIndex++
        if (songIndex > bgmusic.midori.length - 1){songIndex = 0}
        toPutAudio(bgmusicFILES[7], bgmusic.midori[songIndex]);
    }    playSong();
}

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("ended", nextSong);