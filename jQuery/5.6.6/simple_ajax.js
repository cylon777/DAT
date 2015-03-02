$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "paragraph.txt",
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
