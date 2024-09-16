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
});