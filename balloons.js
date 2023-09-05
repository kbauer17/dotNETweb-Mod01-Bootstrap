$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
});

// Function to display toast
$(document).ready(function(){
    $(".show-toast").click(function(){
        $("#myToast").toast({ autohide: false });
        $("#myToast").toast('show');
    }); 
});

// Function to change heading background color
function changeHeadingColor(color){
    document.getElementById("heading").style.color = color;
}

// function to select all balloons
$(document).ready(function(){
    $.fn.selectAllBalloons = function(){ 
        $('.form-check-input').each(function () {
            $(this).prop('checked', true);
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
        });
         
    }
    $(".btn-selectAll").click(function(){
        $.fn.selectAllBalloons();
    });
});

// function to de-select all balloons
$(document).ready(function(){
    $.fn.selectNoBalloons = function(){ 
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
        });
         
    }
    $(".btn-selectNone").click(function(){
        $.fn.selectNoBalloons();
    });
});