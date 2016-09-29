/**
 * Created by kasiarzyna on 28.09.16.
 */

function showTerms() {
    $('#hidden-terms').show();
    $('html, body').animate({
        scrollTop: $('#hidden-terms').offset().top
    }, 2000);
};

$('#acceptTerms').change(function() {
    if (this.checked) {
        $('#hidden-terms').hide('slow');
    }
});