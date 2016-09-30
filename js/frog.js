/**
 * Created by agatakulbicka on 29.09.16.
 */
$(document).ready(function () {
    $(document).keydown(function (event) {


        $('#startLocation').removeClass('start-text').append('<img src="/images/frog-img.png">').css('z-index', 99999);

        event.stopPropagation(); // arrow keys will be usee only for frog navigation -  arrows keydown won't move the site (up and down)
        var $gameboard = $('#nazwatabeli'); //dodać nazwę tabeli
        var $occupatedCell = $('.occupatedCell');
        var $indexOfCurrentLocation = $($occupatedCell).indexOf();
        var $indexOfNewLocation;




        function left() {
            console.log('1 lewo');
            $('$currentCell').closest('td').prev().find();
        }
        function up() {
            $indexOfNewLocation = $occupatedCell.parent().closest('td').prev().find('td').indexOf($indexOfCurrentLocation);



            //'pobierz pole', na które żabka chce przeskoczyć i sprawdź je:
            // if(nie ma dokąd się ruszyć w górę)
            // { nic nie rób}
            //else
            // { przesuń żabkę w górę
            //odśwież planszę
            //(if kolizja)
            //      {
            //         funkcja-smierc-zabki();
            //          gameover
            //         }
            //    else {
            //       zwiększ licznik punktów o jeden: licznik++;
            // }
            //
            // }

        }

        function right() {
            console.log('3 prawo');

            $('$currentCell').closest('td').next().find();
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