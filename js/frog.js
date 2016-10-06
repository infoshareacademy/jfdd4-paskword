/**
 * Created by agatakulbicka on 29.09.16.
 */
var croak = new Audio('sounds/frog.mp3');

function initFrog() {
    var score;
    var rowCount = $('#board tr').length;
    var columnCount = $('tr td').length / rowCount;

    var x = 0; //number of current column
    var y = 0; // number of current row

    //current location of the frog
    document.getElementById(y + '-' + x).innerHTML = '<img src="images/game-textures/small-frog.png">';

    function removeOldFrog() {
        document.getElementById(y + '-' + x).innerHTML = '';
    }

    function addStartText() {
        var $startPosition = $('#0-0').text();
        if ($startPosition == '') {
            $('#0-0').text('START');
        }
    }

    function left() {
        if (x > 0) {
            removeOldFrog();
            x -= 1;
            document.getElementById(y + '-' + x).innerHTML = '<img src="images/game-textures/small-frog.png">';
            checkDanger();
        }
        else {
            croak.play();
        }
    }

    function up() {
        if (y > 0) {
            removeOldFrog();
            y -= 1;
            document.getElementById(y + '-' + x).innerHTML = '<img src="images/game-textures/small-frog.png">';
            checkDanger();
        }
        else {
            croak.play();
        }
    }

    function right() {
        if (x < (columnCount - 1)) {
            removeOldFrog();
            x += 1;
            document.getElementById(y + '-' + x).innerHTML = '<img src="images/game-textures/small-frog.png">';
            checkDanger();
            addStartText();
        }
        else {
            croak.play();
        }
    }

    function down() {
        if (y < (rowCount - 2)) {
            removeOldFrog();
            y += 1;
            document.getElementById(y + '-' + x).innerHTML = '<img src="images/game-textures/small-frog.png">';
            checkDanger();
            addStartText();
        }
        if (y == rowCount - 2 && !amIAWinner) {
            console.log('brawo, wygrałeś!');
            amIAWinner = true;
        }
    }

    function checkDanger() {
        var elementHasDangerousClass = $('#' + y + '-' + x).hasClass('dangerousWater');
        var elementIsSafe = $('#' + y + '-' + x).hasClass('.driftingWood');
        if (elementHasDangerousClass) {
            removeOldFrog();
            console.log('game over - żabka dedła');
        }
        else if (elementIsSafe) {
            //frog on a wood
            removeOldFrog();
            $('#' + y + '-' + x).html('<img src="images/game-textures/frog-on-wood.png">');
            console.log('żaba na kłodzie');
        }
        else {
            document.getElementById(y + '-' + x).innerHTML = '<img src="images/game-textures/small-frog.png">';
        }
    }

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