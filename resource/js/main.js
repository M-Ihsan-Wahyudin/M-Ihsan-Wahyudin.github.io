$(document).ready(function() {
  $(window).scroll(function() {
    if(window.scrollY > 400) {
      $('#nav').addClass('nav-shadow');
    } else {
      $('#nav').removeClass('nav-shadow');
    }
  });
});