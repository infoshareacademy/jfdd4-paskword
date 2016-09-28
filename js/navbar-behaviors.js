/**
 * Created by agatakulbicka on 28.09.16.
 */

//hides mobile menu after click on any element

$('.nav a').on('click', function () {
    if (window.innerWidth < 768) {
        $('.navbar-toggle').click()
    }
});
// Navbar doesn't hide page content
// -48 - height of navbar -2 because of right scrollpsy
//Navbar doesn't cover the content of sections after clicking in menu
var uncoveringContentUnderNavbar = function () {
    scrollBy(0, -49)
};
if (location.hash) {
    uncoveringContentUnderNavbar();
}
window.addEventListener("hashchange", uncoveringContentUnderNavbar);

// $("nav").resize(function () {
//     $('#godown').height($("nav").height() + 10);
// });
//
// if ($("nav").height() > $('#godown').height()) $('#godown').height($("nav").height() + 10);