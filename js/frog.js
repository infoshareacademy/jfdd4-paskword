/**
 * Created by agatakulbicka on 29.09.16.
 */
$(document).ready(function () {
    var score;
    var croak = new Audio('sounds/frog.mp3');
    var rowCount = $('#board tr').length;
    var columnCount = $('tr td').length / rowCount;

    var x = 0; //number of current column
    var y = 0; // number of current row

    //current location of the frog
    document.getElementById(y + '-' + x).innerHTML = '<img src="images/small-frog.png">';

    function removeOldFrog() {
        document.getElementById(y + '-' + x).innerHTML = '';
    }

    function left() {
        if (x > 0) {
            removeOldFrog();
            x -= 1;
            document.getElementById(y + '-' + x).innerHTML = '<img src="images/small-frog.png">';
            console.log(x);
        }
        else {
            croak.play();
        }
    }

    function up() {
        if (y > 0) {
            removeOldFrog();
            y -= 1;
            document.getElementById(y + '-' + x).innerHTML = '<img src="images/small-frog.png">';
        }
        else {
            croak.play();
        }
    }


    function right() {
        if (x < (columnCount - 1)) {
            removeOldFrog();
            x += 1;
            document.getElementById(y + '-' + x).innerHTML = '<img src="images/small-frog.png">';
            console.log(x);
        }
        else {
            croak.play();
        }

    }

    function down() {
        if (y < (rowCount - 2)) {
            removeOldFrog();
            y += 1;
            document.getElementById(y + '-' + x).innerHTML = '<img src="images/small-frog.png">';
        }
        else {
            console.log('brawo, wygrałeś!');
        }
    }

    $(document).keydown(function (event) {
        event.stopPropagation(); // arrow keys will be usee only for frog navigation -  arrows keydown won't move the site (up and down)
        // event.preventDefault();
        //arrows and WSAD keydown action
        switch (event.keyCode) {
            case 37:
            case 65:
                left();
                break;
            case 38:
            case 87:
                up();
                break;
            case 39:
            case 68:
                right();
                break;
            case 40:
            case 83:
                down();
                break;
        }
    });
});