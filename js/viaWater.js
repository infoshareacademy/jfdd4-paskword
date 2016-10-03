/**
 * Created by agatakulbicka on 03.10.16.
 */

var waterRow = 4;
var waterCols = 11;
var y = 6;
var x = 11;

function createWoods() {
    for (var i = 0; i < waterRow; i++) {
        var wood = new Image;
        wood.src = "/images/wood.png";
    }
}

function removeOldWood() {
    document.getElementById(y + '-' + x).innerHTML = '';
}

function movingWood() {

    document.getElementById(y + '-' + x).innerHTML = '<img src="images/wood.png">';
    console.log('X PRZED odejmowaniem: ' + x);
    x--;
    console.log('X PO odejmowaniu: ' + x);

}


var randomSpeed = Math.round(Math.random() * 9000);
//
// function driftingWood() {
//
//     for (var i = 0; i < 10; i++) {
//         setInterval(function () {
// // removeOldWood();
//                 movingWood();
//                 console.log('Prędkość: ', randomSpeed);
//             },
//             randomSpeed);
//     }
//
// }

function plywajaceDrzewo(){
    var inter = setInterval(movingWood, randomSpeed);
    removeOldWood();
}

