// Executes 'empty' after the raw markup and DOM of your page has been loaded and parsed.
document.addEventListener( "DOMContentLoaded", empty, false)
function empty(){
	tags = document.getElementsByTagName('div');
	for(i in tags){
		// May be the tag was already deleted
		if(tags[i] !== undefined && tags[i].innerHTML !== undefined){
			console.log('tag[' + i + ']: ' + tags[i]);
			console.log('tag[' + i + '].innerHTML: ' + tags[i].innerHTML);
			tags[i].innerHTML = '';
		}
	}
}
