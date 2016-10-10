/**
 * Created by agatakulbicka on 28.09.16.
 */

//hides mobile menu after click on any element
// invisible click on short menu on element with class '.navbar-toggle' - element is hidden
$('.nav a').on('click', function () {
    if (window.innerWidth < 768) {
        $('.navbar-toggle').click()
    }
});

// Navbar doesn't hide page content
// -49 - height of navbar -1 because of right scrollpsy
//Navbar doesn't cover the content of sections after clicking in menu
var uncoveringContentUnderNavbar = function () {
    scrollBy(0, -49)
};
if (location.hash) {
    uncoveringContentUnderNavbar();
}
window.addEventListener("hashchange", uncoveringContentUnderNavbar);
