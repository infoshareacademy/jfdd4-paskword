/**
 * Created by agatakulbicka on 03.10.16.
 */


// var numberOfWoods = 5;
// var riverRows = 4;
//
// var woodsArray = [];
//
// for (var j = 0; j < riverRows; j++) {
//     var usedX = [];
//     for (var i = 0; i < numberOfWoods; i++) {
//         var x = randomNumber(0, 11);
//         while (usedX.indexOf(x) !== -1) {
//             x = randomNumber(0, 11);
//         }
//
//         usedX.push(x);
//
//         woodsArray.push(
//             {
//                 x: x,
//                 y: 6 + j
//             }
//         );
//     }
// }
//
//
// function randomNumber(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
//
// function removeOldWood(x, y) {
//     $('#' + y + '-' + x).addClass('dangerousWater').removeClass('driftingWood');
// }
//
// function addNewWood(x, y) {
//     // $('#' + y + '-' + x).css('background-image', 'none');
//     $('#' + y + '-' + x).removeClass('dangerousWater').addClass('driftingWood');
// }
//
// // function frogToLeft(){
// //     if($('#'+positionY+'-'+positionX).hasClass('frogOnaWood'));
// //
// //     positionX++;
// //     $('#'+positionY+'-'+positionX).addClass('frogOnaWood')
// // }
//
// function startMoving() {
//     woodsArray.forEach(function (wood) {
//         removeOldWood(wood.x, wood.y);
//     });
//     woodsArray.forEach(function (wood) {
//         if (wood.y % 2 == 0) {
//             if (wood.x > 0) {
//                 removeOldWood();
//                 wood.x--;
//                 addNewWood(wood.x, wood.y);
//
//             }
//
//             else {
//                 removeOldWood();
//                 wood.x = 11;
//                 addNewWood(wood.x, wood.y);
//             }
//         }
//         else {
//             if (wood.x < 11) {
//                 removeOldWood();
//                 wood.x++;
//                 addNewWood(wood.x, wood.y);
//             }
//             else {
//                 removeOldWood();
//                 wood.x = 0;
//                 addNewWood(wood.x, wood.y);
//             }
//         }
//     });
//     $('img').addClass('img-responsive');
// }
//
// function driftWood() {
//     // woodLoop =
//     setInterval(startMoving, 3000);
// }

