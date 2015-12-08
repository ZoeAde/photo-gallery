$(document).ready(function(){
  $(function () {
      var links = $('.sidebar-links > a');
      links.on('click', function () {
          links.removeClass('selected');
          $(this).addClass('selected');
      });
  });

  $('.parallax').parallax();

  $('ul.tabs').tabs();

});
