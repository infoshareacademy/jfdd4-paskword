/**
 * Created by sandra on 10.10.16.
 */

function addComunicate() {

    $('#form-submit').addClass("GameTitle").text('FROGGER');
    $('<div>').attr('id', 'HowToPlay').appendTo('#form-submit');
    $('<p>').addClass('Rule1').text('Gra polega na pokierowaniu żabką od miejsca Startu aż do Mety, w taki sposób by ominać wszelkie przeszkody.' + ' '
        + 'Żabka zginie gdy wpadnie na jakąkolwiek przeszkodę.').appendTo('#HowToPlay');


    $('<p>').addClass('GameControl').text('STEROWANIE:').appendTo('#HowToPlay');
    $('<p>').addClass('glyphicon glyphicon-arrow-left KeyControls').text(' ' + 'Poruszanie żabki w lewo').appendTo('#HowToPlay');
    $('<p>').addClass('glyphicon glyphicon-arrow-right KeyControls').text(' ' + 'Poruszanie żabki w prawo').appendTo('#HowToPlay');
    $('<p>').addClass('glyphicon glyphicon-arrow-up KeyControls').text(' ' + 'Poruszanie żabki w górę').appendTo('#HowToPlay');
    $('<p>').addClass('glyphicon glyphicon-arrow-down KeyControls').text(' ' + 'Poruszanie żabki w dół').appendTo('#HowToPlay');

    $('<button>').attr('id', 'CloseInstruction').text('Przejdź do Gry').appendTo('#form-submit');

}
// addComunicate();
//


// function DeadInfo() {
//     $('body').addClass("DeadComunicate").text('Żabka zginęłą. Spróbuj jeszcze raz.');
// }
// DeadInfo();
//
// function WinnerInfo() {
//     $('amIAWinner').addClass("DeadComunicate").text('Żabka zginęłą. Spróbuj jeszcze raz.');
// }