
  // $('.carousel__inner').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   vertical:true,
  //   autoplay:true,
  //   // arrows:false,

  //   responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //       // You can unslick at a given breakpoint now by adding:
  //       // settings: "unslick"
  //       // instead of a settings object
  //     ]
  // });



    $('.slide-inner').slick({
      infinite: true,
      slidesToShow: 1,
      autoplay:false,
      arrows:false,
      nextArrow: '<button type="button" class="next"></button>',
      prevArrow: '<button type="button" class="prev"></button>',
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
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  
 