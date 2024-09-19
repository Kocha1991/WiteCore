$(document).ready(function() {
  // language
  $('.dropdown-item').click(function(e) {
    e.preventDefault();
    var selectedLanguage = $(this).text();
    $('.lan').text(selectedLanguage); 
    
    // change icon
    // var iconSrc = './images/' + selectedLanguage.toLowerCase() + '-lan.svg';
    // $('.lan-icon').attr('src', iconSrc);
  });

  // burger menu
  $(".burger-menu").on("click", ".bar", function() {
    $(".menu").slideToggle();
    $(".bar").toggleClass('change');
    $(".bg-overlay").fadeToggle();
    $("body").toggleClass('no-scroll');
  });

  // sliders
  $('.reviews__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    adaptiveHeight: true,
    prevArrow: '.reviews .slick-prev',
    nextArrow: '.reviews .slick-next',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  });
  
  $('.our-blog__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    adaptiveHeight: true,
    prevArrow: '.our-blog .slick-prev',
    nextArrow: '.our-blog .slick-next',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.partner-search__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2, 
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    adaptiveHeight: true,
    prevArrow: '.partner-search .slick-prev',
    nextArrow: '.partner-search .slick-next',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});