/**
 * Created by kasiarzyna on 29.09.16.
 *
 * Init Gameboard on click submit button
 * Gameboard is a table 12x12
 * Init RidingTrucks on the streets
 */
var rows = 12;
var cols = 12;
var speed = 1000;
var collision = false;
var truckLoop;
var woodLoop;
var amIAWinner = false;

$(document).ready(function() {
    $('#form1').on('submit', function(event) {
        event.preventDefault();
        $('#form-submit').empty();
        $.ajax({
            type: 'post',
            url: 'http://jfdd.is-academy.pl/mailer.php',
            data: $('#form1').serialize(),
            success: function () {
                console.log('form was submitted');
            }
        });
        addComunicate();
        // initGameboard();
        // initFrog();
        // initIntervals();

    });
});

function initIntervals() {
    makePattern(1);
    makePattern(2);
    makePattern(3);
    makePattern(4);
    truckLoop = setInterval(function() {

        drawPattern(1, true);
        drawPattern(2, true);
        drawPattern(3, true);
        drawPattern(4, false);

    }, speed);
}

var patternArray = [];
var patternArray2 = [];
var patternArray3 = [];
var patternArray4 = [];

function makePattern(rowNum) {
    var $truck = new Image(46,30);
    var array = [];
    $truck.src = "images/game-textures/truck.png";
    $truck.alt = 'truck';
    for (var j = 0; j < 100; j++) {
        var distance = Math.round(Math.random() * 4 + 2);
        array.push($truck);
        for (distance; distance>0; distance--) {
            array.push('');
        }
    }
    if (rowNum == 1) {
        patternArray = array;
    } else if (rowNum == 2) {
        patternArray2 = array;
    } else if (rowNum == 3) {
        patternArray3 = array;
    } else if (rowNum == 4) {
        patternArray4 = array;
    }
}

function checkIfCollide() {
    if ($('.showTruck').has('img[src="images/game-textures/small-frog.png"]').length != 0
        && !collision) {
        $('img[alt="truck"]').remove();
        collision = true;
        croak.play();
        clearInterval(truckLoop);
        clearInterval(woodLoop);
        $('img[src="images/game-textures/small-frog.png"]')
            .toggle('bounce', {times: 5}, 'slow');
    }
}

function drawPattern(rowNum, mirror) {

    checkIfCollide();

    var array = [];
    if (rowNum == 1) {
        array =  patternArray ;
    } else if (rowNum == 2) {
        array = patternArray2;
    } else if (rowNum == 3) {
        array = patternArray3;
    } else if (rowNum == 4) {
        array = patternArray4;
    }
    if (array.length === 0) {
        makePattern(rowNum);
    } else {

        if (mirror) {
            for (k = 12; k > 0; k--) {
                $('#' + rowNum + '-' + (k-1)).removeClass('showTruck mirror');
                $('img[alt="truck"]').remove();
            }
            var targ = 1;
            for (var i = 12; i > 0; i--) {
                var $row = $('#' + rowNum + '-' + (i-1));
                var lastEl = array[array.length-targ];
                targ++;
                if (lastEl != '') {
                    $row.addClass('showTruck');
                    var truck = lastEl;
                } else {$row.append(lastEl);}

            }
            $('.showTruck').append(truck).addClass('mirror');

            array.pop();
        } else {
            for (var k = 12; k > 0; k--) {
                $('#' + rowNum + '-' + (k-1)).removeClass('showTruck mirror');
                $('img[alt="truck"]').remove();
            }
            for (var i = 0; i < 12; i++) {
                var $row = $('#' + rowNum + '-' + (i-1));
                var lastEl = array[i];
                if (lastEl != '') {
                    $row.addClass('showTruck');
                    var truck = lastEl;
                } else {
                    $row.append(lastEl);
                }
            }
            $('.showTruck').append(truck);

            array.shift();
        }
    }

    checkIfCollide();

    if (rowNum == 1) {
        patternArray = array;
    } else if (rowNum == 2) {
        patternArray2 = array;
    } else if (rowNum == 3) {
        patternArray3 = array;
    } else if (rowNum == 4) {
        patternArray4 = array;
    }
}

function initGameboard() {
    var divContainer = $('<div>').addClass('container').attr('id', 'cont');
    $('#form-submit').append(divContainer);
    var divRow = $('<div>').addClass('row').attr('id', 'divrow');
    $('#cont').append(divRow);
    var gameBoard = $('<table>').attr('id', 'board').addClass('table table-responsive');
    $('#divrow').append(gameBoard);

    for (var y = 0; y < cols; y++) {

        var $row = $('<tr>');

        if (y == 0 || y == 5 || y == 10 ) {
            $row.addClass('start');
            gameBoard.append($row);
        }
        else if (y > 0 && y < 5) {
            $row.addClass('street');
            gameBoard.append($row);
        }
        else if (y == 11) {
            continue;
        }
        else {
            $row.addClass('water').addClass('dangerousWater');
            gameBoard.append($row);
        }
        for (var x = 0; x < (rows); x++) {
            if (x == 0 && y == 0) {
                $row.append($('<td>').attr('id', y + '-' + x).text('START').addClass('col-xs-1 start-text'));
            }
            else if (x == 0 && y == 10) {
                $row.append($('<td>').attr('id', y + '-' + x).text('META').addClass('col-xs-1 start-text finish'));
            }
            else {
                $row.append($('<td>').attr('id', y + '-' + x).addClass('col-xs-1'));
            }
        }
    }
}