$(".aboutus-tab").removeClass("aboutus-active");
$(".aboutus-tab").hover(function () {
  $(".aboutus-tab").removeClass("aboutus-active");
  $(this).addClass("aboutus-active");
  var backgroundPicture = $(this).data("background");
  $(".aboutus-home-section").css(
    "background-image",
    "url(" + backgroundPicture + ")"
  );
});


$(".organization-tab").removeClass("organization-active");
$(".organization-tab").hover(function () {
  $(".organization-tab").removeClass("organization-active");
  $(this).addClass("organization-active");
  var backgroundPicture = $(this).data("background");
  $(".organization-section").css(
    "background-image",
    "url(" + backgroundPicture + ")"
  );
});

$(".button-dm").click(function () {
  $(".side-menu").addClass("active");
});

$(".nav-menus-wrapper-close-button").click(function () {
  $(".side-menu").removeClass("active");
});



$(document).ready(function(){
  $("#accordion-collapse-d").click(function(){
    $("#accordion-collapse-body-d").slideToggle();
  });
});




$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $(".a-nav").next();
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if ($(window).width() > 200) {
        if (scroll_start > offset.top) {
          $(".a-nav").addClass("scrolled");
        } else {
          $(".a-nav").removeClass("scrolled");
        }
      }
    });
  }
});
