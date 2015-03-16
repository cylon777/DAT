$(document).ready(function() {
	/*$("#btn").click(function(){
		$.getJSON("json-data.json", function(data) {
			var words = [data.first, data.second, data.third];
			var sentence = document.getElementById("sentence");
			var newwords = [];
			for(var i=0;i<words.length;i+=1){
				newwords.push(words[i][Math.floor(Math.random() * words[i].length)]);
			}
			console.log("newwords:" + newwords);
			$('#sentence').html(newwords[0] + " " + newwords[1] + " " + newwords[2]);
		});
	});*/

	$.getJSON("timeline.json", function(data) {
		for(var i=0;i<data.length;i+=1){
			msg = '<div class="msg">';
			msg += '<p>@' + data[i].Autor + ': ' + data[i].Titulo + '<p>'
			msg += '<p>' + data[i].Contenido + '<p>'
			msg += '</div>'
			$("#log").append(msg);
		}
	});
});
