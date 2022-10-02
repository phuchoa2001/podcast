$('.sponsor__slider').slick(
  {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: `<img src="./assets/images/page/Arrow/Left.png" class="left" />`,
    nextArrow: `<img src="./assets/images/page/Arrow/Right.png" class="right" />`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
);