//STICKY NAV
function stickyNav() {
    //vph2 = $('#mast video').height() - 80;
    vph3 = $('#mast').height();
    if ($(window).scrollTop() > vph3) {
        $(".navbar").addClass("navbar-fixed-top");
        $(".callout").addClass("chill");
    } else {
        $(".navbar").removeClass("navbar-fixed-top");
        $(".callout").removeClass("chill");
    }
}

$(window).scroll(function() {
    stickyNav();
});
$(document).ready(function() {
    stickyNav();
});



//RESIZE VIDEO CONTAINER
function resizeDiv() {
    //vpw = $(window).width() - 105;
    vph = $('#mast video').height() - 25;
    $('#mast').css({
        'height': vph + 'px'
    });
}

$(window).load(function() {
    resizeDiv();
});
$(document).ready(function() {
    resizeDiv();
});
window.onresize = function(event) {
    resizeDiv();
}
