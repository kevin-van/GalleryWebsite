function test() {
    //I should make a style class that makes the expansion and then remove it after so the card stacks return to natural state
    
    //or make a new class called blurb that has the text bubble styling and just remove and add the classes as needed
    var x = document.getElementById("bigcard1");
    var y = document.getElementById("start-text");
    if (x.value == "true") {
      x.style.transform = '';
      x.style.backgroundImage = '';
      x.style.boxShadow = '';
      x.style.width = '45vmin';
      x.style.height = '';
      x.value = "false";
      x.style.aspectRatio = '5/7';
      y.style.opacity = '1';
      
    } else {
      x.style.transform = 'scale(1) translate(-37.5%, -12.5%)';
      x.style.backgroundImage = "none";
      x.style.boxShadow = "-2vmin 2vmin 3vmin rgba(0, 0, 0, 0.4";
      x.style.width = '80vw';
      x.style.height = '75vh';
      x.value = "true";
      y.style.opacity = '0';
    }
    
  }