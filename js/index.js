function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      // getBoundingClientRect = size and  position of the viewport
      // like when you scroll down 
      var elementTop = reveals[i].getBoundingClientRect().top;
      // .top starts from top to bottom
      // when it reaches the height of 150, thats when the products will show up
      // if they ask how, say its already fixed on the system not on your program
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
 
  // addEventListener = how you would control your page ex. scroll
  // window is basically your page
  window.addEventListener("scroll", reveal);

  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener read