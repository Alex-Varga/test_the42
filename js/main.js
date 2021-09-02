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
    376: {
      slidesPerView: 6,
      spaceBetween: 7.46,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
    } 
  }
});