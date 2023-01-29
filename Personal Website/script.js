var lastScrollPos = 0;
var ticking = false;

var topNav = $(".top-navbar");
var scrollNav = $(".scroll-navbar");

function updateNav(scrollpos) {
  console.log(scrollpos);
  if(scrollpos < 100) {
    console.log("<100");
    scrollNav.removeClass("showNav").addClass("hideNav");
  } else if((scrollpos >= 100 && scrollpos <= 800) && scrollNav.hasClass("index")) {
    console.log("index");
    scrollNav.removeClass("hideNav").addClass("showNav");
    scrollNav.css("opacity", scrollpos/1000);
  } else {
    console.log("else");
    scrollNav.removeClass("hideNav").addClass("showNav");
    scrollNav.css("opacity", 1);
  }
}

document.addEventListener("scroll", (event) => {
  lastScrollPos = window.scrollY;

  if(!ticking) {
    window.requestAnimationFrame(() => {
      updateNav(lastScrollPos);
      $('.show').removeClass('show');
      ticking = false;
    });
    ticking = true;
  }
});

//  Contact page

$(document).ready(function() {
  var subject = $("#contact-subject");
  var body = $("#contact-body");
  var submit = $("#contact-submit");
  submit.click(function(){
      window.open('mailto:darthmonkey10@gmail.com?subject=' +
      encodeURIComponent(subject.val()) +
      '&body=' +
      encodeURIComponent(body.val()));
  });
});
