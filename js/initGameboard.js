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
    });
});

function initGameboard() {
    var gameBoard = $('<table>').attr('id','board').addClass('table');
    $('#form-submit').append(gameBoard);
    var rows=12;
    var cols=12;
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
                $row.append($('<td>').text('START').addClass('col-xs-1 start-text'));
            }
            else if(x==0 && y==10) {
                $row.append($('<td>').text('META').addClass('col-xs-1 start-text finish'));
            }
            else if(x==0 && y==11) {
                $row.append($('<td>').text('PUNKTY').addClass('col-xs-1 start-text points'));
            }
            else {
                $row.append($('<td>').text('x').addClass('col-xs-1'));
            }
        }
    }
}

