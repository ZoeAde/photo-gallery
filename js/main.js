$(document).ready(function(){
   $('li img').on('click',function(){
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';
        $('#myModal').modal();
        $('#myModal').on('shown.bs.modal', function(){
            $('#myModal .modal-body').html(img);
        });
        $('#myModal').on('hidden.bs.modal', function(){
            $('#myModal .modal-body').html('');
        });
   });
})

$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('https://player.vimeo.com/video/133171617?autoplay=1&loop=1',{ambient:true});
});
