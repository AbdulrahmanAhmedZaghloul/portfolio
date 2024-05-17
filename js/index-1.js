//darkmood//
const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const lcon = document.querySelector(".btn_lcon");
// addEventListener
btn.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  lcon.classList.add("animated");
  if (body.classList.contains("darkmode")) {
    lcon.classList.remove("fa-sun");
    lcon.classList.add("fa-moon");
    $(".btn_lcon").css({ color: "#fff" });
    $("* , span").css({ color: "#fff" });
    $(".btu-box a").css({ color: "rgb(0, 0, 0)" });
    $(".btu:nth-child(2)").css({ color: "#000000" });
    $(".btu:nth-child(1)").css({ color: "#fff" });
    $(".btn-boxservice-btn a").css({ color: "#000000" });
    $(".btn-boxservice-btn a").css({ backgroundColor: "#fff" });
    $("#skills .item").css({ backgroundColor: "#000000" });
    $("#skills").css({ backgroundColor: "#363636" });
    $(".info-about1 span").css({ color: "#000000" });
    $(".info-about1 p").css({ color: "#000000" });
    $(".info-about2 span").css({ color: "#000000" });
    $(".info-about2 p").css({ color: "#000000" });
    $(".info-about3 span").css({ color: "#000000" });
    $(".info-about3 p").css({ color: "#000000" });
    $(".home-content p").css({ color: "#FFF" });
    $(".info-about1 ").css({ backgroundColor: "#FFF" });
    $(".info-about3 ").css({ backgroundColor: "#FFF" });
    $(".info-about2 ").css({ backgroundColor: "#FFF" });
    $("nav").css({ backgroundColor: "#212121" });
    $(".darkmode .btn_indicator").css({ transition: "2s" });
    $(".darkmode .btn_indicator").css({ transition: "2s" });
    console.log("one");
  } else {
    lcon.classList.remove("fa-moon");
    lcon.classList.add("fa-sun");
    $(".btn_lcon").css({ color: "#00000" });
    $("*,span").css({ color: "rgb(0, 0, 0)" });
    $(".btu:nth-child(2)").css({ color: "#000000" });
    $(".btu:nth-child(1)").css({ color: "#fff" });
    $(".btn-boxservice-btn a").css({ color: "#fff" });
    $(".btn-boxservice-btn a").css({ backgroundColor: " rgba(58, 59, 59, 0.3)" });
    $(".info-about1 span").css({ color: "#FFF" });
    $(".info-about1 p").css({ color: "#FFF" });
    $(".info-about2 span").css({ color: "#FFF" });
    $(".info-about2 p").css({ color: "#FFF" });
    $(".info-about3 span").css({ color: "#FFF" });
    $(".info-about3 p").css({ color: "#FFF" });
    $(".home-content p").css({ color: "#000000" });
    $("#skills .item").css({ backgroundColor: "#fff" });
    $("#skills").css({ backgroundColor: "#F6F7F9" });
    $("nav").css({ backgroundColor: "#F6F7F9" });

    $(".info-about1 ").css({ backgroundColor: " rgba(58, 59, 59,0.6)" });
    $(".info-about3 ").css({ backgroundColor: " rgba(58, 59, 59,0.6)" });
    $(".info-about2 ").css({ backgroundColor: " rgba(58, 59, 59,0.6)" });
    console.log("two");
  }
  setTimeout(() => {
    lcon.classList.remove("animated");
  }, 5000);
});
//darkmood//
let teoset = $("#about").offset().top;

$("a[href^='#']").click(function () {
  let ahref = $(this).attr("href");
  let asd = $(ahref).offset().top;
  $("html,body").animate({ scrollTop: asd }, 1000);
});

$(document).ready(function () {
  $("#loed").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
  });
});

let words = document.querySelectorAll(".word");

words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = 
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);
///////////////// active menu  ////////////////////////
let menuLi = document.querySelectorAll("nav a");
let sections = document.querySelectorAll("section");

function activeMenu() {
  let scrollPosition = window.scrollY + 50; // Add a buffer to the scroll position for accuracy

  // Find the section currently in view
  let currentSection = sections.length - 1;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].offsetTop > scrollPosition) {
      currentSection = i - 1;
      break;
    }
  }

   menuLi.forEach((item) => item.classList.remove("active"));

   if (currentSection >= 0) {
    menuLi[currentSection].classList.add("active");
  }
}

// Call the function on page load and whenever the user scrolls
document.addEventListener("DOMContentLoaded", activeMenu);
window.addEventListener("scroll", activeMenu);

/////////////////// sticky navbar  ////////////////////////
const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 50);
});
/////////////////// toggle icon navbar  ////////////////////////
// let menuIcon = document.querySelector("#menu-icon");

// let navlist = document.querySelector(".navlist");
// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("fa-xmark");
//   navlist.classList.toggle("open");
// };

// window.onscroll = () => {
//   menuIcon.classList.remove("fa-xmark");
//   navlist.classList.remove("open");
// };

/////////////////// toggle icon navbar  ////////////////////////
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    }
    else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale")
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom")
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top")
scrollTop.forEach((el) => observer.observe(el));
