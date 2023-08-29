$(function(){
        // preload audio
        var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();
            // play audio
            toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');
    });
});