

const menu = document.querySelector("#menu-topo");
const menumobile = document.querySelector(".menu-topo-mobile");
var estadomenu = 0;


function mostra() {
	if (estadomenu == 0) {
		menumobile.style.display = "flex";
		estadomenu = estadomenu +1;
	} else {
		menumobile.style.display = "none";
		estadomenu = estadomenu -1;
	}
	}