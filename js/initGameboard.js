/**
 * Created by kasiarzyna on 29.09.16.
 *
 * Init Gameboard on click submit button
 * Gameboard is a table 12x12
 */

$(document).ready(function() {
    $('#form1').on('submit', function(event) {
        event.preventDefault();
        $('#form-submit').empty();
        initGameboard();
        initFrog();
        initRidingTrucks(1, true);
        initRidingTrucks(2, false);
        initRidingTrucks(3, true);
        initRidingTrucks(4, false);
    });

});

var rows=11;
var cols=11;

function initGameboard() {
    var gameBoard = $('<table>').attr('id','board').addClass('table');
    $('#form-submit').append(gameBoard);

    for (var y=0; y<=cols; y++) {

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
        for (var x=0; x<=rows; x++) {
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
                $row.append($('<td>').attr('id', y + '-' + x).addClass('col-xs-1'));
            }
        }
    }
}

function initRidingTrucks(row,mirror) {
    var $truck = new Image(50,36);
    $truck.src = "images/game-textures/truck.png";
    var speed = 600;
    var x;
    if (mirror) {
        x = 0;
    } else {
        x = rows;
    }

    var z = 1;
    console.log(z);
    var always = false;
    var truckLoop = setInterval(function() {

        var truckNum = Math.floor(Math.random() * 3) + 1;
        var truckDistance = Math.floor(Math.random() * 4) + 2;

        if (mirror) {
            $('#' + row + '-' + x).empty().append($truck).addClass('mirror');
            x++;
            console.log(x,rows);
            if (x == rows+2) {
                var xx = x-2;
                $('#' + row + '-' + xx).empty();
                clearInterval(truckLoop);
                always = true ;
            }
        } else {
            $('#' + row + '-' + x).empty().append($truck);
            x--;
            if (x == -2) {
                var xx = x+2;
                $('#' + row + '-' + xx).empty();
                clearInterval(truckLoop);
                always = true ;
            }
        }
        //if ($('#' + row + '-' + x).hasClass( "frog" ).length) {
        //katastrofa!
        //}

        if ((x == truckDistance && truckNum > z  && $('#' + row + '-' + x).children().length==0) || always) {
            //console.log('puu');
            z++;
            initRidingTrucks(row,mirror);
        }
    }, speed);
}