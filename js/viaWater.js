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

function addNewWood() {
    document.getElementById(y + '-' + x).innerHTML = '<img src="images/wood.png">';
}
addNewWood();

function startMoving() {
    if(x>0) {
        removeOldWood();
        x--;
        addNewWood();
        console.log('X PRZED odejmowaniem: ' + x);
        console.log('X PO odejmowaniu: ' + x);
    }
    else{
        removeOldWood();
        x=11;
        addNewWood();
    }
}

function driftWood() {
    addNewWood();
    setInterval(startMoving, 1000);
}

