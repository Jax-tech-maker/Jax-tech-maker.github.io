// JavaScript Document

const videoPart1 = [
	{src: "videos/compressed_Img_1.mp4", caption: "laughing Together"},
	{src: "videos/img_3.mp4", caption: "Together"},
	{src: "videos/img_4.mp4", caption: "eat food as one"},
	{src: "videos/compressed_Img_5.mp4", caption: "I love seeing her happy"},
	{src: "videos/img_6.mp4", caption: "cant stop laughing at her"},
	{src: "videos/img_7.mp4", caption: "I'll have what you have"},
	{src: "videos/compressed_Img_8.mp4", caption: "a moment we'll remember"}
];

const videoPart2 = [
	{src: "videos/Jul_1.mp4", caption: "I enjoy my time with them"},
	{src: "videos/Jul_2.mp4", caption: "we wonder together"},
	{src: "videos/compressed_Jul_3.mp4", caption: "One day I'll get her to cuss"},
	{src: "videos/Jul_4.mp4", caption: "I'll never stop bothering her"},
	{src: "videos/compressed_Jul_5.mp4", caption: "always sharing something silly"},
	{src: "videos/Jul_6.mp4", caption: "shes still my baby sister"},
	{src: "videos/Jul_7.mp4", caption: "shes full of wonder"},
	{src: "videos/Jul_8.mp4", caption: "always cracking a joke."}
];

const videoPart3 = [
	{src: "videos/compressed_Oct_1.mp4", caption: "he was so happy we cheered"},
	{src: "videos/compressed_Oct_3.mp4", caption: "he still has fun despite it all"},
	{src: "videos/compressed_Oct_4.mp4", caption: "missed seeing him"},
	{src: "videos/Oct_5.mp4", caption: "cant wait to see where he goes"},
	{src: "videos/compressed_Oct_6.mp4", caption: "I love hearing our music"},
	{src: "videos/Oct_7.mp4", caption: "I love our parties"},
	{src: "videos/Oct_8.mp4", caption: "I love to dance"}
];

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); // NEW
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex]);
	return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
	//titleOverlay.style.display = "none"; // REMOVED
	titleOverlay.classList.add("playing");// NEW
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";
	playlist = [
		picker(videoPart1),
		picker(videoPart2),
		picker(videoPart3),
];
	currentIndex = 0;
	playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
    titleText.textContent = current.caption;
	
  player.src = current.src;
  player.load();
  player.play().catch(err => {
    console.warn("Play interrupted (autoplay policy?):", err);
  });
}

// Advance when a video ends
player.addEventListener("ended", () => {
  currentIndex++;
  if (currentIndex < playlist.length) {
    playCurrent();
  } else {
    console.log("All three parts finished.");
	replayBtn.style.display = "block";
  }
});