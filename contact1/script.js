$(function () {
  $('a[href="#"]').on('click', function (e) {
    e.preventDefault();
  });

  $('#menu .sub').hide();

  $('#menu li > a').on('click', function () {

    const style = $(this).hasClass('on');
    if (style == false) {
      $('#menu li > a').removeClass('on');
      $(this).addClass('on');

      $('#menu .sub').stop().slideUp();
      $(this).next().stop().slideDown();
    } else {
      $(this).removeClass('on');
      $(this).next().slideUp();
    }
  });

  $('#icon4').click(function () {
    $(this).toggleClass('open');
    $('nav').toggleClass('btnMenu');
  });

});