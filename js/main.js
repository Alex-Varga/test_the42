$(document).ready(function() {
  $('.menu').click(function() {
    $('.nav').toggleClass('open-menu');
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 132,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  breakpoints: {
    0: {
      spaceBetween: 8.75,
      slidesPerView: 3,
    },
    560: {
      slidesPerView: 6,
      spaceBetween: 7.46,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
    } 
  }
});

var swiper = new Swiper(".mySwiper3", {
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    778: {
      allowTouchMove: false,
      slidesPerView: 3,
      spaceBetween: 10,
    }
  }
});
