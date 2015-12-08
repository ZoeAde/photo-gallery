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

  $(".button-collapse").sideNav();

$(".dropdown-button").dropdown({
      inDuration: 600,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );

});
