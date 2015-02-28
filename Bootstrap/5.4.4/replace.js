// window.addEventListener('load', ulToOl, false); --------> this sentens is similar to de next sentence
document.addEventListener( "DOMContentLoaded", replaceElem, false);

function replaceElem(){
	id = "portaltab-index_html";
	newValue = '<a href="http://gsyc.es" title="">Home Page</a>';
	changer(id, newValue);
}

function changer (id, newValue) {
	var element = document.getElementById(id);
	console.log(element.innerHTML);
	element.innerHTML = newValue;
}
