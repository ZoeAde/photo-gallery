$(document).ready(function(){
    $(function () {
        var links = $('.sidebar-links > a');
        links.on('click', function () {
            links.removeClass('selected');
            $(this).addClass('selected');
        });
    });

    $('.link-blue').click(function(){
        window.location.href='/video';
    });


});
