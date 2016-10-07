/**
 * Created by agatakulbicka on 29.09.16.
 */
var croak = new Audio('sounds/frog.mp3');
var positionX = 0; //number of current column
var positionY = 0; // number of current row
var frogOnARiver = false;

function initFrog() {
    var rowCount = $('#board tr').length;
    var columnCount = $('tr td').length / rowCount,
        frog = $('<img src="images/game-textures/small-frog.png" class="img-responsive">')[0];

    // console.log(frog);


    //current location of the frog
    // document.getElementById(positionY + '-' + positionX).innerHTML = '<img src="images/game-textures/small-frog.png" class="img-responsive">';
    // document.getElementById(positionY + '-' + positionX).innerHTML = '';
    addNewFrog();
    // document.getElementById(positionY + '-' + positionX).appendChild(frog);

    function addNewFrog() {
        document.getElementById(positionY + '-' + positionX).appendChild(frog);
    }

    function removeOldFrog() {
        // document.getElementById(positionY + '-' + positionX).innerHTML = '';
        document.getElementById(positionY + '-' + positionX).removeChild(frog);
    }

    function checkFrogGraphics() {
        if ($('#' + positionY + '-' + positionX).hasClass('driftingWood')){
            frog.setAttribute('src', 'images/game-textures/frog-on-wood.png');
        } else {
            frog.setAttribute('src', 'images/game-textures/small-frog.png');
        }
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
            checkFrogGraphics();
            // document.getElementById(positionY + '-' + positionX).innerHTML = '<img src="images/game-textures/small-frog.png">';
            // checkDanger();
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
            checkFrogGraphics();
            // document.getElementById(positionY + '-' + positionX).innerHTML = '<img src="images/game-textures/small-frog.png">';
            // checkDanger();
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
            checkFrogGraphics();
            // document.getElementById(positionY + '-' + positionX).innerHTML = '<img src="images/game-textures/small-frog.png">';
            // checkDanger();
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
            checkFrogGraphics();
            // document.getElementById(positionY + '-' + positionX).innerHTML = '<img src="images/game-textures/small-frog.png">';
            // checkDanger();
            addStartText();
        }
        if (positionY == rowCount - 2 && !amIAWinner) {
            amIAWinner = true;
        }
    }

    // function checkDanger() {
    //     return;
    //     var elementHasDangerousClass = $('#' + positionY + '-' + positionX).hasClass('dangerousWater');
    //     var elementIsSafe = $('#' + positionY + '-' + positionX).hasClass('driftingWood');
    //     if (elementHasDangerousClass) {
    //         removeOldFrog();
    //     }
    //     else if (elementIsSafe) {
    //         //frog on a wood
    //         // frog.setAttribute('src', 'images/game-textures/frog-on-wood.png');
    //
    //         // removeOldFrog();
    //         // $('#' + positionY + '-' + positionX).removeClass('dangerousWater').addClass(('driftingWood woodWithFrog')).html('<img src="images/game-textures/frog-on-wood.png">');
    //     }
    //
    //     // else {
    //     //     addNewFrog();
    //         // document.getElementById(positionY + '-' + positionX).innerHTML = '<img src="images/game-textures/small-frog.png">';
    //     // }
    // }

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