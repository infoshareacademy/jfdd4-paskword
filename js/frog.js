/**
 * Created by agatakulbicka on 29.09.16.
 */
$(document).ready(function () {
    $(document).keydown(function (event) {

        event.stopPropagation(); // arrow keys will be usee only for frog navigation -  arrows keydown won't move the site (up and down)

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


        //arrows and WSAD keydown action
        switch (event.keyCode) {
            case 37: case 65:
                left();
                break;
            case 38: case 87:
                up();
                break;
            case 39: case 68:
                right();
                break;
            case 40: case 83:
                down();
                break;
        }
    });
});