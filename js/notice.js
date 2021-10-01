const noticeBtn = document.querySelector(".noticebtn__btnbox__btn");
const noticeBox = document.querySelector(".notice-in");
const checkBoxText = document.querySelector(".noticebtn__alert span");
const textBox = document.querySelector(".notice-info");
const noticeText = document.querySelector(".notice-info p");
console.dir(textBox.style.opacity);

function noticeEvent1() {
    noticeText.innerText = "Listen to the music and refresh the website!";
    noticeBox.classList.add("active");
    checkBoxText.innerText = "";
    noticeBtn.value = "Why?";

    noticeBtn.addEventListener("click", noticeEvent2);
}

function noticeEvent2() {
    noticeText.innerText = "You can see 8 kinds of different background videos (randomly)";
    noticeBtn.value = "Hmm...";

    noticeBtn.addEventListener("click", noticeEvent3);
}

function noticeEvent3() {
    noticeText.innerText = "and other following music playlists. Go ahead! Try it!";
    noticeBtn.value = "Okay!";

    noticeBtn.addEventListener("click", removeNotice);
}

function removeNotice() {
    noticeText.innerText = "";
    noticeBox.classList.remove("active");
    noticeBtn.value = "Click!";
}

console.dir(noticeText.style);

noticeBtn.addEventListener("click", noticeEvent1);
console.dir(textBox.style.opacity);