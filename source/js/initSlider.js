'use strict'
$(document).ready(function () {
  
  $('.services-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  });
  
  $('.slider-catalog').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
  });
  
  $('.descr-slyder__review').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.descr-slyder__mini-wrap'
  });
  
  $('.descr-slyder__mini-wrap').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.descr-slyder__review',
  dots: false,
  arrows: true,
  centerMode: false,
  focusOnSelect: true
  });
});
