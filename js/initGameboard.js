/**
 * Created by kasiarzyna on 29.09.16.
 *
 * Init Gameboard on click submit button
 * Gameboard is a table 12x12
 */

$(document).ready(function() {
$('#form1').on('submit', function(e) {
        e.preventDefault();
        $('#form-submit').empty();
        initGameboard();
        initFrog();
    });

});

function initGameboard() {
    var gameBoard = $('<table>').attr('id','board').addClass('table');
    $('#form-submit').append(gameBoard);
    var rows=12;
    var cols=12;
    // var imgFrog = "<img src='images/small-frog.png' />";
    for (var y=0; y<cols; y++) {

        var $row = $('<tr>');

        if (y==0 || y==5 || y ==10 || y==11) {
            $row.addClass('start');
            gameBoard.append($row);
        }
        else if (y>0 && y<5) {
            $row.addClass('street');
            gameBoard.append($row);
        }
        else {
            $row.addClass('water');
            gameBoard.append($row);
        }
        for (var x=0; x<rows; x++) {
            if (x==0 && y==0) {
                $row.append($('<td>').attr('id', y + '-' + x).text('START').addClass('col-xs-1 start-text'));
            }
            else if(x==0 && y==10) {
                $row.append($('<td>').attr('id', y + '-' + x).text('META').addClass('col-xs-1 start-text finish'));
            }
            else if(x==0 && y==11) {
                $row.append($('<td>').attr('id', y + '-' + x).text('PUNKTY').addClass('col-xs-1 start-text points'));
            }
            else {
                $row.append($('<td>').attr('id', y + '-' + x).text('x').addClass('col-xs-1'));
            }
        }
    }
//Add trucks on the streets
    var $truck = new Image(50,50);
    $truck.src = "images/game-textures/truck.png";

    for(i=1; i<cols; i++) {
        $('.street td:nth-child(' + i + ')')
            .append($truck)
            .addClass('mirror')
            // .fadeOut('slow', function() {
            //     $(this).remove().delay(2000);
            // });
    }




}

// $('#form-submit').empty();
// initGameboard();
