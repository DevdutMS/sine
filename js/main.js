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

$(".button-dm").click(function () {
  $(".side-menu").addClass("active");
});

$(".nav-menus-wrapper-close-button").click(function () {
  $(".side-menu").removeClass("active");
});