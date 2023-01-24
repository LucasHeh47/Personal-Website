var lastScrollPos = 0;
var ticking = false;

var topNav = $(".top-navbar");
var scrollNav = $(".scroll-navbar");

function updateNav(scrollpos) {
  console.log(scrollpos);
  if(scrollpos < 100) {
    scrollNav.attr("display", 'none');
  } else if(scrollpos >= 100 && scrollpos <= 800) {
    scrollNav.attr("display", 'flex');
    scrollNav.attr("opacity", scrollpos/1000);
  } else if(scrollpos > 800) {
    scrollNav.attr("display", 'none');
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
