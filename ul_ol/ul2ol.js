// This script changes all 'ul' tags to 'ol' tags in a html file
// window.addEventListener('load', ulToOl, false); --------> this sentens is similar to de next sentence
document.addEventListener( "DOMContentLoaded", ulToOl, false);
function ulToOl(){
	tags = document.getElementsByTagName('body');
	var content;
	for(i in tags){
		if(tags[i] !== undefined && tags[i].innerHTML !== undefined){
			console.log('tag[' + i + ']: ' + tags[i]);
			console.log('tag[' + i + '].innerHTML: ' + tags[i].innerHTML);
			content = tags[i].innerHTML.replace(/<ul>/, '<ol>');
			console.log('content: ' + content);
		}
	}
}
