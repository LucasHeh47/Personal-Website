var lastScrollPos = 0;
var ticking = false;

var topNav = $(".top-navbar");
var scrollNav = $(".scroll-navbar");

function updateNav(scrollpos) {
  console.log(scrollpos);
  if(scrollpos < 100) {
    scrollNav.removeClass("showNav").addClass("hideNav");
  } else if((scrollpos >= 100 && scrollpos <= 800) && scrollNav.hasClass("index")) {
    scrollNav.removeClass("hideNav").addClass("showNav");
    scrollNav.css("opacity", scrollpos/1000);
  } else {
    scrollNav.removeClass("hideNav").addClass("showNav");
    scrollNav.css("opacity", 1);
  }
}

document.addEventListener("scroll", (event) => {
  lastScrollPos = window.scrollY;

  if(!ticking) {
    window.requestAnimationFrame(() => {
      updateNav(lastScrollPos);
      ticking = false;
    });
    ticking = true;
  }
});
