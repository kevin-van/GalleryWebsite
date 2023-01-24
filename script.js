//Personal card
var x = document.getElementById("bigcard1");
var y = document.getElementById("start-text");
var z = document.querySelector(".text-group3");

//Media cards
var c = document.getElementById("bigcard2");
var a = document.getElementById("projectcard1");
var b = document.querySelectorAll(".contact-block");

//Random images for the misc cards
var misc = document.querySelectorAll(".misc-card");
var images = [
"https://i.postimg.cc/K81Kg5nQ/IG-vert.jpg",
"https://i.postimg.cc/155VySXk/IMG-1402.jpg",
"https://i.postimg.cc/vBsDkFCS/IMG-1433.jpg",
"https://i.postimg.cc/BnRj51p3/IMG-1565.jpg",
"https://i.postimg.cc/9MYzjghX/IMG-1665.jpg",
"https://i.postimg.cc/FzPRYfz2/IMG-2845-1.jpg",
"https://i.postimg.cc/kMwD1Hsf/IMG-3991-2.jpg",
"https://i.postimg.cc/HsxnftPH/IMG-3995.jpg",
"https://i.postimg.cc/DzVz43fy/IMG-6323.jpg",
"https://i.postimg.cc/NMDGny65/IMG-6349.jpg",
"https://i.postimg.cc/Sx9Sh1L0/IMG-6400.jpg",
"https://i.postimg.cc/R0Qv33bX/IMG-6402.jpg",
"https://i.postimg.cc/9FKmsH7t/IMG-6423.jpg",
"https://i.postimg.cc/FKQ9sbGY/IMG-6434.jpg",
"https://i.postimg.cc/tJmqXLmb/IMG-6436.jpg",
"https://i.postimg.cc/MZsKbQZL/IMG-6446.jpg",
"https://i.postimg.cc/qRJ42kP0/IMG-6484.jpg",
"https://i.postimg.cc/x8qQF6j4/IMG-6717.jpg",
"https://i.postimg.cc/90S23yrF/IMG-6743.jpg",
"https://i.postimg.cc/kX69QYpV/IMG-7007.jpg",
"https://i.postimg.cc/q7LdJPzF/IMG-7019.jpg",
"https://i.postimg.cc/hjtRf2mt/IMG-7185.jpg",
"https://i.postimg.cc/x1L27JYn/IMG-7213.jpg",

];
var startNum = Math.floor(Math.random() * images.length);

//Function for random images on misc cards
function misccardpopulate() {
  // for (let i = 0; i < misc.length; i++) {
  //   misc[i].style.backgroundImage = "url("+images[i]+")";
  // }
  
  for (let i = 0; i < misc.length; i++) {
    misc[i].style.backgroundImage = "url("+images[(startNum + i + 1) %  (images.length)]+")";
    console.log("index:" + i);
    console.log("image at:" + images.length - 1);
    console.log("startnum:" + startNum);
  }
}

// for (let i = startIndex + 1; i !== startIndex; i = (i + 1) % ZODIAC.length) {
//   console.log(ZODIAC[i]);

function projectcardopen() {
  c.style.transform = "scale(1) translate(-37.5%,-7.5%)";
  c.style.backgroundImage = "none";
  c.style.boxShadow = "-2vmin 2vmin 3vmin rgba(0, 0, 0, 0.4";
  c.style.width = "80vw";
  c.style.height = "75vh";
  c.value = "true";
  c.parentElement.classList.toggle("card-group");
  y.style.opacity = "0";
  b.forEach((box) => (box.style.visibility = "hidden"));
  c.style.zIndex = "5";
}

function projectcardclose() {
  c.style.transform = "";
  c.style.backgroundImage = "";
  c.style.boxShadow = "";
  c.style.width = "45vmin";
  c.style.height = "";
  c.value = "false";
  c.style.aspectRatio = "5/7";
  y.style.opacity = "1";
  b.forEach((box) => (box.style.visibility = "visible"));

  setTimeout(function cardgroupdelay() {
    c.parentElement.classList.toggle("card-group");
  }, 200);

  cardgroupdelay();
}

function personcardopen() {
  //I should make a style class that makes the expansion and then remove it after so the card stacks return to natural state

  //or make a new class called blurb that has the text bubble styling and just remove and add the classes as needed

  x.style.transform = "scale(1) translate(-37.5%,-7.5%)";
  x.style.backgroundImage = "none";
  x.style.boxShadow = "-2vmin 2vmin 3vmin rgba(0, 0, 0, 0.4";
  x.style.width = "80vw";
  x.style.height = "75vh";
  x.value = "true";
  x.parentElement.classList.toggle("card-group");
  y.style.opacity = "0";
  setTimeout(function persontextdelay() {
    z.style.transition = "opacity 1s";
    z.style.overflow = "visible";
    z.style.opacity = "1";
  }, 200);
}

function personcardclose() {
  x.style.transform = "";
  x.style.backgroundImage = "";
  x.style.boxShadow = "";
  x.style.width = "45vmin";
  x.style.height = "";
  x.value = "false";
  x.style.aspectRatio = "5/7";
  y.style.opacity = "1";
  z.style.transition = "opacity 0s";
  z.style.opacity = "0";
  z.style.overflow = "hidden";
  setTimeout(function cardgroupdelay() {
    x.parentElement.classList.toggle("card-group");
  }, 200);

  cardgroupdelay();
}

function extraclose() {
  if (c.value == "true") {
    projectcardclose();
  }
  if (x.value == "true") {
    personcardclose();
  }
}

function projectcard() {
  if (c.value == "true") {
    projectcardclose();
  } else {
    projectcardopen();
  }
}

function personcard() {
  if (x.value == "true") {
    personcardclose();
  } else {
    personcardopen();
  }
}

window.onload = misccardpopulate();
