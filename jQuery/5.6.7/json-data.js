// Get some JSON text via Ajax, and write it to the p HTML page
// Get new text when clicking on "third"
//
$(document).ready(function() {
	$("#btn").click(function(){
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
	});

	//Another way
	/*$.ajax({
		type:"GET",
		dataType: "JSON",
		url: "json-data.json",
		cache: false,
		success: function(data){
			event(data);
		}
    });

	var event = function(data){
		$("#btn").click(function(){
			$('#header').html('<h1>' + data.hi + '</h1>');
		});
	};*/
});
