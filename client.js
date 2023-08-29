$(function(){
        // preload audio
        var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();
          // first pause the audio (in case it is still playing)
          toast.pause();
          // reset the audio
          toast.currentTime = 0;
            // play audio
            toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');
        $('#header').html($(this).data('header'));
        $('#code').html($(this).data('code'));
    });
});

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    $('#liveToast').toast('hide')
  }
})

