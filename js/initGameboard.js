/**
 * Created by kasiarzyna on 29.09.16.
 *
 * Init Gameboard on click submit button
 * Gameboard is a table 12x12
 */
var rows=11;
var cols=11;
var collision = false;
var speed = 600;

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
        initIntervals();

    });
});
function initIntervals() {
    var truckLoop1 = setInterval(initRidingTrucks(1, true), speed);
    var truckLoop2 = setInterval(initRidingTrucks(2, false), speed);
    var truckLoop3 = setInterval(initRidingTrucks(3, true), speed);
    var truckLoop4 = setInterval(initRidingTrucks(4, false), speed);
}


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

var intervals =[];

function initRidingTrucks(row,mirror) {
    var $truck = new Image(50,30);
    $truck.src = "images/game-textures/truck.png";
    $truck.alt = 'truck';

    var x;
    if (mirror) {
        x = 0;
    } else {
        x = rows;
    }

    var z = 1;
    console.log(z);
    var always = false;


        var truckNum = Math.floor(Math.random() * 3) + 1;
        var truckDistance = Math.floor(Math.random() * 3) + 2;

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
        //Collision - frog dead
        if ($('#board').find('img[src="images/small-frog.png"]').length == 0
        && !collision) {
            console.log("KOLIZJA AAAAAAA");
            collision = true;
            console.log("przegryw");
            intervals.forEach(function(interval) {
                clearInterval(interval);
            })
        }

        if ((x == truckDistance && truckNum > z  && $('#' + row + '-' + x).children().length==0) || always) {
            //console.log('puu');
            z++;
            initRidingTrucks(row,mirror);
        }

}