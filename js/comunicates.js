/**
 * Created by sandra on 10.10.16.
 */

function addComunicate() {

    $('<div>').addClass("GameTitle").appendTo('#form-submit').attr('id', "GameTitle");
    $('<div>').attr('id','Frogger').text('FROGGER').appendTo('#GameTitle');
    // $('#form-submit').attr('id', "GameTitle").text('FROGGER');

    $('<div>').attr('id', 'HowToPlay').appendTo('#GameTitle');
    $('<p>').addClass('Rule1').text('Gra polega na pokierowaniu żabką od miejsca Startu aż do Mety, w taki sposób by ominać wszelkie przeszkody.' + ' '
        + 'Żabka zginie gdy wpadnie na jakąkolwiek przeszkodę.').appendTo('#GameTitle');


    $('<p>').addClass('GameControl').text('STEROWANIE:').appendTo('#HowToPlay');
    $('<p>').addClass('glyphicon glyphicon-arrow-left').text(' ' + 'Poruszanie żabki w lewo').appendTo('#HowToPlay');
    $('<p>').addClass('glyphicon glyphicon-arrow-right').text(' ' + 'Poruszanie żabki w prawo').appendTo('#HowToPlay');
    $('<p>').addClass('glyphicon glyphicon-arrow-up').text(' ' + 'Poruszanie żabki w górę').appendTo('#HowToPlay');
    $('<p>').addClass('glyphicon glyphicon-arrow-down').text(' ' + 'Poruszanie żabki w dół').appendTo('#HowToPlay');

    $('<button>').attr('id', 'CloseInstruction').text('Przejdź do Gry').appendTo('#GameTitle').click(function(){
        $('#GameTitle').fadeOut();
        initGameboard();
        initFrog();
        initIntervals();

    });

}
// addComunicate();
//


function DeadInfo() {
    if(collision ){
        $('<div>').addClass("DeadComunicate").text('Żabka zginęłą. Spróbuj jeszcze raz.').appendTo('#board');
    }

}

DeadInfo();

function WinnerInfo() {
    $('<div>').addClass("DeadComunicate").text('Wygrana!').appendTo('#board');
}