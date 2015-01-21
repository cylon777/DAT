// Executes 'empty' after the raw markup and DOM of your page has been loaded and parsed.
document.addEventListener( "DOMContentLoaded", empty, false)
function empty(){
	p = document.getElementsByTagName('body');
	console.log('p: ' + p[0]);
	p[0].innerHTML = '';
}
