$(function(){
    $('.code').on('click', function(e) {
        e.preventDefault();
        $('#liveToast').toast({ autohide: false }).toast('show');
    });
});