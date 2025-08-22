$(function() {
    $(".menu-toggle").on("click",function(){
        $(".nav-menu").slideToggle(1000);
    });
    $(".search-show").on("click",function(){
        $(".search-form").slideToggle();
    });

//totop
  var $backToTop = $('.back-to-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });
  $backToTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
