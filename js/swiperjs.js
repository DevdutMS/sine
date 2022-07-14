$(document).ready(function () {
  var keys = [
    "Horizontal Cladding",
    "Manufacturing Facility",
    "Vertical Cladding",
    "Butt Welding",
    "Special Purpose Machine",
  ];

  var swiper = new Swiper(".swiper-container", {
    effect: "fade",
    speed: 3000,
    navigation: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".elements",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '">' + keys[index] + "</div>";
      },
    },
  });

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".clientSwiper", {
    slidesPerView: 7,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    speed: 2000,
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },   
      1280: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  
  var swiper = new Swiper(".ourSysytemSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});


