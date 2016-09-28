/**
 * Created by kasiarzyna on 28.09.16.
 */
function popUpTerms() {
    var x;
    if (confirm ("Press a button!") == true) {
        x = "You pressed OK!";
    }
    else {
        x = "You pressed Cancel!";
    }
    document.getElemendById("terms").innerHTML = x;
}