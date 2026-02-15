const music = document.getElementById("bgMusic");

/* =========================
   INTRO
========================= */

function answer(isYes){

music.play().catch(()=>{});

let text = document.getElementById("answerText");

if(isYes)
text.innerHTML = "akuu jugaaa sayanggg kamuuu ❤️❤️❤️";
else
text.innerHTML = "walauu kamuu ga sayangg akuu, akuu tetepp sayangg kamuu 😊";

setTimeout(()=>{
startTransition();
},2000);

}

/* =========================
   TRANSISI
========================= */

const transitions = [
"akuuuu mauuu ngasiii kamuuu sesuatuu",
"karana kitaa jauhh akuu cummaa bisaa kasii hadiahh kecill ini",
"maafff yaa hadiahnyaa kaloo gaa baguss atau kurangg",
"akuu harapp kamuu mauu menerimanya ❤️"
];

let ti = 0;

function startTransition(){

const intro = document.getElementById("intro");

if(intro) intro.style.display = "none";

typeTransition();

}

function typeTransition(){

if(ti >= transitions.length){
showBook();
return;
}

let el = document.getElementById("transitionText");

let msg = transitions[ti];

let i = 0;

el.innerHTML = "";

let interval = setInterval(()=>{

el.innerHTML += msg.charAt(i);

i++;

if(i >= msg.length){

clearInterval(interval);

ti++;

setTimeout(typeTransition,2000);

}

},50);

}

/* =========================
   HALAMAN BUKU
========================= */

const pagesContent = [

"Selamat ulang tahun sayangg 🎂❤️ semoga panjang umur, sehat selalu, dan bahagia selalu",

"Akuu bersyukur banget dipertemukan dengan kamu, kamu itu anugerah terindah dalam hidupku",

"Kamu itu orang yang sangat berharga bagiku, lebih dari yang kamu bayangkan",

"Senyummu indah banget, bisa bikin hariku cerah bahkan di hari terburukku",

"Akuu bangga sama kamu, kamu kuat, kamu hebat, kamu luar biasa",

"Akuu berdoa semoga semua impianmu tercapai, dan hidupmu dipenuhi kebahagiaan",

"Terima kasih sudah hadir di hidupku, membuat semuanya terasa lebih berarti",

"Akuu harap kita bisa terus bersama dan membuat banyak kenangan indah",

"Kamu itu spesial, unik, dan sangat berarti bagiku ❤️",

"Happy birthday cintaku 🎂❤️ aku sayang kamu selalu ❤️"

];

const book = document.getElementById("book");

let pages = [];
let currentPage = 0;
let typing = false;

/* buat halaman */
function createPages(){

book.innerHTML = "";
pages = [];

pagesContent.forEach((text,index)=>{

let page = document.createElement("div");

page.className = "page";

page.style.zIndex = pagesContent.length - index;

page.innerHTML = `

<div class="decor-top">
<img src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png">
<img src="https://cdn-icons-png.flaticon.com/512/742/742751.png">
<img src="https://cdn-icons-png.flaticon.com/512/869/869869.png">
</div>

<div class="text"></div>

<div class="decor-bottom">
🎂 🎁 💖 🌸 ✨ 🧁
</div>

`;

book.appendChild(page);

pages.push(page);

});

}

/* =========================
   ANIMASI KETIK (3 DETIK)
========================= */

function typePage(){

typing = true;

let text = pagesContent[currentPage];

let el = pages[currentPage].querySelector(".text");

el.innerHTML = "";

/* durasi 3 detik */
let duration = 3000;

let speed = duration / text.length;

/* minimal delay biar smooth */
speed = Math.max(15, speed);

let i = 0;

let interval = setInterval(()=>{

el.innerHTML += text.charAt(i);

i++;

if(i >= text.length){

clearInterval(interval);

typing = false;

}

}, speed);

}

/* tampilkan buku */
function showBook(){

const transition = document.getElementById("transitionText");

if(transition) transition.style.display = "none";

const wrapper = document.querySelector(".book-wrapper");

wrapper.classList.remove("hidden");

createPages();

typePage();

}

/* tombol kanan */
function nextPage(){

if(typing) return;

if(currentPage < pages.length){

pages[currentPage].classList.add("flipped");

currentPage++;

if(currentPage < pages.length){
typePage();
}

}

}

/* tombol kiri */
function prevPage(){

if(typing) return;

if(currentPage > 0){

currentPage--;

pages[currentPage].classList.remove("flipped");

}

}

/* =========================
   CONFETTI
========================= */

function createConfetti(){

const emojis = ["🎉","💖","✨","🌸","🎂","🎁"];

for(let i=0;i<10;i++){

let c = document.createElement("div");

c.className = "confetti";

c.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

c.style.left = Math.random()*100+"vw";

c.style.animationDuration = (3+Math.random()*5)+"s";

document.body.appendChild(c);

setTimeout(()=>c.remove(),8000);

}

}

setInterval(createConfetti,3000);
  