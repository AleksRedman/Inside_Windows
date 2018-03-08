var mySwiper = new Swiper ('.swiper-container', {
  init: true,
  direction: 'horizontal',
  loop: true,
  speed: 300,
  spaceBetween: 30,
  slidesPerView: 3,
  slidesPerColumnFill: 'row',
  grabCursor: true,
  simulateTouch: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 10,
  },  
});