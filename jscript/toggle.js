$(function () {
    $(".toggle").click(function(){
        $(".toggle").toggleClass('active');
        $("body").toggleClass('night');
    })

    $("#hours-of-work").change(function () {
        $(".section__side--right").css('display', 'flex');
    })
});