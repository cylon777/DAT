$(document).ready(function() {
	$.getJSON("timeline.json", function(data) {
		for(var i=0;i<data.length;i+=1){
			msg = '<div class="msg">';
			msg += '<p>@' + data[i].Autor + ': ' + data[i].Titulo + '<p>'
			msg += '<p>' + data[i].Contenido + '<p>'
			msg += '</div>'
			$("#log").append(msg);
		}
	});

	var updateData;

	$.getJSON("update.json", function(data) {
		updateData = data;
		if(updateData.length>0){
			$('#btn').html('<button id="showMsgs">' + updateData.length + ' New Messages</button>');
		}
	});


	$("#btn").on('click', function(){
		console.log("CLICK");
		for(var i=0;i<updateData.length;i+=1){
			msg = '<div class="msg">';
			msg += '<p>@' + updateData[i].Autor + ': ' + updateData[i].Titulo + '<p>'
			msg += '<p>' + updateData[i].Contenido + '<p>'
			msg += '</div>'
			$("#newMsgs").append(msg);
		}
	});
});
