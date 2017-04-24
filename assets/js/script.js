  
$(document).ready(function() {
  
  $('#button').click(function() {
    window.location.replace('https://faviolannyrath.github.io/indexhome.html');
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