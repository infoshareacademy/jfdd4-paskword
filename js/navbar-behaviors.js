/**
 * Created by agatakulbicka on 28.09.16.
 */

//hides mobile menu after click on any element
// Navbar doesn't hide page content
$('.nav a').on('click', function(){
    $('.btn-navbar').click();
    $('.navbar-toggle').click()
});

// -48 - height of navbar -2 because of right scrollpsy
//Navbar doesn't cover the content of sections after clicking in menu
 var uncoveringContentUnderNavbar = function() {
     scrollBy(0, -46)};
 if (location.hash) {
     uncoveringContentUnderNavbar();
}
 window.addEventListener("hashchange", uncoveringContentUnderNavbar);

// $("nav").resize(function () {
//     $('#godown').height($("nav").height() + 10);
// });
//
// if ($("nav").height() > $('#godown').height()) $('#godown').height($("nav").height() + 10);