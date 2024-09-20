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
        breakpoint: 1270,
        settings: {
          variableWidth: true,
        }
      },
    ],
  });
  // $('.reviews__slider').on('afterChange', function(event, slick, currentSlide){
  //   $('.slick-slide').removeClass('prev-slide next-slide');
  //   $('.slick-current').prev().addClass('prev-slide');
  //   $('.slick-current').next().addClass('next-slide');
  // });
  
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
  $('#partner-search-slider-web').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    adaptiveHeight: true,
    prevArrow: '.partner-search-slider-web .slick-prev',
    nextArrow: '.partner-search-slider-web .slick-next',
  });
  $('#partner-search-slider-phone').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    adaptiveHeight: false,
    prevArrow: '.partner-search-slider-phone .slick-prev',
    nextArrow: '.partner-search-slider-phone .slick-next',
  });

  // Раскрытие списка на странице регистрации
  $(".select-text").on("click", function() {
    $(this).toggleClass("open");
    $(this).parent().find(".form__checkbox-grid").slideToggle();
    $(this).parents(".select-wrapper").toggleClass("open");;
  });

  // Маска для почты и телефона
  if ($(".email").length) {
      $(".email").inputmask("email");
  };
  if ($(".tel").length) {
    $('.tel').mask('+00 (000) 000-00-00');
  };

  // Отображение пароля
  $(".password-field svg").on("click", function() {
    $(this).parent().find("svg").toggleClass("hide");
      let $input = $(this).parent().find('input');
      let currentType = $input.attr("type");
      let newType = currentType === "password" ? "text" : "password";
      $input.attr("type", newType);
  });
});