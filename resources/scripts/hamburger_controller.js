
var hamburger = document.getElementById('hamburger');
var dropdown = document.getElementById('main-nav-top-mobile');

hamburger.addEventListener('click', toggle_dropdown);
dropdown.style.display = 'none'; //This line makes sure that the menu drops down on the first click

function toggle_dropdown () {
	console.log(dropdown);

	if (dropdown.style.display == 'none'){
		dropdown.style.display = 'block';
	}
	else {
		dropdown.style.display = 'none';
	}
}