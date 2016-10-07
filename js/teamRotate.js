/**
 * Created by kasiarzyna on 28.09.16.
 */

$(window).scroll(function() {
    var hT = $('#about-us').offset().top,
        hH = $('#about-us').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    console.debug('wS' + wS);
    if (wS > (hT + hH - wH - 300)) {
        $('#mate1, #mate2, #mate3, #mate4').addClass('rotate');
        console.log(wS);
    };
});