var menu = document.getElementsByClassName("menu");
var submenu = document.getElementsByClassName("submenu");
var sec = document.getElementsByClassName("second");

for (var i = 0; i < menu.length; i++) {
	menu[i].addEventListener("click", function() {
		this.children[1].style.display = "block";

	}
	)
}

