$(function(){
    $('.code').on('click', function(e) {
        e.preventDefault();
        $('#liveToast').toast().toast('show');
    });
});