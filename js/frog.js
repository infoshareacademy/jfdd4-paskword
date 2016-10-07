/**
 * Created by agatakulbicka on 29.09.16.
 */
var croak = new Audio('sounds/frog.mp3');


function initFrog() {

    //frog part
    var splash = new Audio('sounds/splash.mp3');
    var positionX = 0; //number of current column
    var positionY = 0; // number of current row
    var rowCount = $('#board tr').length;
    var columnCount = $('tr td').length / rowCount,
        frog = $('<img src="images/game-textures/small-frog.png" class="img-responsive">')[0];

    addNewFrog();

    function addNewFrog() {
        document.getElementById(positionY + '-' + positionX).appendChild(frog);
    }

    function removeOldFrog() {
        // document.getElementById(positionY + '-' + positionX).innerHTML = '';
        document.getElementById(positionY + '-' + positionX).removeChild(frog);
    }

    function addStartText() {
        var $startPosition = $('#0-0').text();
        if ($startPosition == '') {
            $('#0-0').text('START');
        }
    }

    function left() {
        if (positionX > 0) {
            removeOldFrog();
            positionX -= 1;
            addNewFrog();
            checkDanger();
        }
        else {
            croak.play();
        }
    }

    function up() {
        if (positionY > 0) {
            removeOldFrog();
            positionY -= 1;
            addNewFrog();
            checkDanger();
        }
        else {
            croak.play();
        }
    }

    function right() {
        if (positionX < (columnCount - 1)) {
            removeOldFrog();
            positionX += 1;
            addNewFrog();
            checkDanger();
            addStartText();
        }
        else {
            croak.play();
        }
    }

    function down() {
        if (positionY < (rowCount - 2)) {
            removeOldFrog();
            positionY += 1;
            addNewFrog();
            checkDanger();
            addStartText();
        }
        if (positionY == rowCount - 2 && !amIAWinner) {
            amIAWinner = true;
        }
    }

    function checkDanger() {
        var elementHasDangerousClass = $('#' + positionY + '-' + positionX).hasClass('dangerousWater');
        if (elementHasDangerousClass) {
            $('#' + positionY + '-' + positionX).children().animate({
                opacity: 0,
                width: 0,
                height: 0
            }, 800);
            splash.play();
            console.log('game over');
        }
    }


    //woods part
    var numberOfWoods = 5;
    var riverRows = 4;
    var woodsArray = [];

    for (var j = 0; j < riverRows; j++) {
        var usedX = [];
        for (var i = 0; i < numberOfWoods; i++) {
            var x = randomNumber(0, 11);
            while (usedX.indexOf(x) !== -1) {
                x = randomNumber(0, 11);
            }

            usedX.push(x);

            woodsArray.push(
                {
                    x: x,
                    y: 6 + j
                }
            );
        }
    }


    function randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function removeOldWood(x, y) {
        $('#' + y + '-' + x).addClass('dangerousWater').removeClass('driftingWood');
    }

    function addNewWood(x, y) {
        $('#' + y + '-' + x).removeClass('dangerousWater').addClass('driftingWood');
    }

    function isPositionOfFrogAndWoodTheSame(x, y, positionX, positionY) {
        return x == positionX && y == positionY;
    }


    function startMoving() {
        woodsArray.forEach(function (wood) {
            removeOldWood(wood.x, wood.y);
        });


        woodsArray.forEach(function (wood) {
                if (wood.y % 2 == 0) {
                    if (wood.x > 0) {
                        if (isPositionOfFrogAndWoodTheSame(wood.x, wood.y, positionX, positionY)) {
                            positionX--;
                            addNewFrog();
                            removeOldWood();
                            wood.x--;
                            addNewWood(wood.x, wood.y);
                        }
                        else {
                            removeOldWood();
                            wood.x--;
                            addNewWood(wood.x, wood.y);
                        }
                    }
                    else {
                        if (isPositionOfFrogAndWoodTheSame(wood.x, wood.y, positionX, positionY)) {
                            removeOldFrog();
                            splash.play();
                            console.log('zderzenie ze ścianą - game over');
                            removeOldWood();
                            wood.x = 11;
                            addNewWood(wood.x, wood.y);
                        }
                        else {
                            removeOldWood();
                            wood.x = 11;
                            addNewWood(wood.x, wood.y);
                        }
                    }
                }
                else {
                    if (wood.x < 11) {
                        if (isPositionOfFrogAndWoodTheSame(wood.x, wood.y, positionX, positionY)) {
                            positionX++;
                            addNewFrog();
                            removeOldWood();
                            wood.x++;
                            addNewWood(wood.x, wood.y);
                        }
                        else {

                            removeOldWood();
                            wood.x++;
                            addNewWood(wood.x, wood.y);
                        }
                    }
                    else {
                        if (isPositionOfFrogAndWoodTheSame(wood.x, wood.y, positionX, positionY)) {
                            removeOldFrog();
                            splash.play();
                            console.log('zderzenie ze ścianą - game over');
                            removeOldWood();
                            wood.x = 0;
                            addNewWood(wood.x, wood.y);
                        }
                        else {
                            removeOldWood();
                            wood.x = 0;
                            addNewWood(wood.x, wood.y);
                        }

                    }
                }
            }
        );
        $('img').addClass('img-responsive');
    }

    //IIFE
    (function driftWood() {
        startMoving();
        woodLoop = setInterval(startMoving, 1000);
    })();


    $(document).keydown(function (event) {
        //arrows and WSAD keydown action
        switch (event.keyCode) {
            case 37:
            case 65:
                event.preventDefault();
                left();
                break;
            case 38:
            case 87:
                event.preventDefault();
                up();
                break;
            case 39:
            case 68:
                event.preventDefault();
                right();
                break;
            case 40:
            case 83:
                event.preventDefault();
                down();
                break;
        }
    });
}
