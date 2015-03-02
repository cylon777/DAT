$(document).ready(function(){
	$.ajax({
		type: "json",
		url: "data.json",
		success: function(data){
			$("#paragraph").html(data);
		}
    });

	$("button").click(function(){
		$.ajax({
			type: "json",
			url: "data.json",
			success: function(data){
				$.getJSON("data.json", function(data){
					console.log("data: " + data.hi);
					$("ul").html(data.hi)
				});
			}
		});
	});
});

var sentence = document.getElementById("sentence");
var newwords = [];
for(var i=0;i<words.length;i+=1){
	newwords.push(words[i][Math.floor(Math.random() * words[i].length)]);
}
sentence.innerHTML = newwords.join(" ");
