/*-----Javascript for Project Name */
/* =========================================
            Preloader
============================================ */
$(window).on('load', function () {
	// makes sure that whole site is loaded
	$('#preloader-gif, #preloader').fadeOut(5000, function () {});
});
$(document).ready(function () {
	/*===================================================================================
      toggleMenu Function - toggles the header__burger, header__menu, and body with classes
    * active or lock
   ======================================================================================*/
	function toggleMenu() {
		$('.header__burger').toggleClass('active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	}
	$('.header__burger').on('click tap', function () {
		toggleMenu();
	});
});
