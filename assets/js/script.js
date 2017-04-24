  
$(document).ready(function() {
  
  $('#button').click(function() {
    window.location.href = "https://faviolannyrath.github.io/indexhome.html";
});

  $('#gmail').click(function() {
    window.location.href = "mailto:undergraduatenomad@gmail.com";
});

  $('#facebook').click(function() {
    window.location.href = "https://www.facebook.com/faviola.rath";
});

  $('#twitter').click(function() {
    window.location.href = "https://twitter.com/faviolannyrath";
});

  $('#instagram').click(function() {
    window.location.href = "https://www.instagram.com/undergradnomad/";
});

  $('#linkedin').click(function() {
    window.location.href = "https://www.linkedin.com/in/faviolannyrath/";
});

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 142) {
      $('.navbar-container').addClass('navbar-fixed');
      $('#blogcontainer').css("padding-top", "47px")
    }
    if ($(window).scrollTop() < 143) {
      $('.navbar-container').removeClass('navbar-fixed');
      $('#blogcontainer').css("padding-top", "0px")
    }
  });


});