/**
 * Created by kasiarzyna on 28.09.16.
 */
var isVisible = false;

function showTerms() {

    $('#acceptTerms').change(function () {
        if (this.checked) {
            $('#hidden-terms').hide('slow');
        }
    });

    if (isVisible) {
        $('#showTerms').click(function () {
            $(this).show();
        });
        isVisible = false;
        console.log(isVisible);
        $('#hidden-terms').hide("slow");
    }
    else {
        $('#hidden-terms').show();
        $('html, body').animate({
            scrollTop: $('#hidden-terms').offset().top
        }, 2000);
        isVisible = true;
        console.log(isVisible);
    }
}


