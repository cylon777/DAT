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
			type: "GET",
			url: "paragraph2.txt",
			success: function(data){
				$("#paragraph2").html(data);
			}
		});
	});
});
