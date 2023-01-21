var x = document.getElementById("bigcard1");
var y = document.getElementById("start-text");
var z = document.querySelector(".text-group3");

var c = document.getElementById("bigcard2");
var a = document.getElementById("projectcard1");
var b = document.querySelectorAll(".contact-block");
 


// function projectcardopen() {

//   c.style.transform = "scale(1) translate(-37.5%,-7.5%)";
//   c.style.backgroundImage = "none";
//   c.style.boxShadow = "-2vmin 2vmin 3vmin rgba(0, 0, 0, 0.4";
//   c.style.width = "80vw";
//   c.style.height = "75vh";
//   c.value = "true";
//   c.parentElement.classList.toggle("card-group");
//   y.style.opacity = "0";
//   b.forEach(box => box.style.visibility = "hidden");
//   c.style.zIndex = "5";
// }

// function projectcardclose() {
//   c.style.transform = "";
//   c.style.backgroundImage = "";
//   c.style.boxShadow = "";
//   c.style.width = "45vmin";
//   c.style.height = "";
//   c.value = "false";
//   c.style.aspectRatio = "5/7";
//   y.style.opacity = "1";
//   setTimeout(function cardgroupdelay() {
//     c.parentElement.classList.toggle("card-group");
//   }, 200);

//   cardgroupdelay();
// }

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

function projectcard(){
    if (c.value == "true") {
    projectcardclose();
  } else {
    projectcardopen();
  }
}

function personcard() {
  if (x.value == "true") {
    personcardclose();
    c.addEventListener("click", projectcard());
  } else {
    personcardopen();
  }
}