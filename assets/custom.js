$(document).ready(function($) {
    $('[data-product-slider]').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<span><</span>',
      nextArrow: '<span>></span>',
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 600,
         settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
  });
});