/**
 * Created by agatakulbicka on 29.09.16.
 */

$(document).keydown(function (event) {

    function left() {
        console.log('1 lewo');
    }

    function up() {
        console.log('2 góra');
    }

    function right() {
        console.log('3 prawo');
    }

    function down() {
        console.log('4 dół');
    }

    
    switch (event.keyCode) {
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
    }
});