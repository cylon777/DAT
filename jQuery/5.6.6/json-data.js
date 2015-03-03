// Get some JSON text via Ajax, and write it to the p HTML page
// Get new text when clicking on "third"
//
$(document).ready(function() {
	$("#btn").click(function(){
		$.getJSON("json-data.json", function(data) {
			$('#header').html('<h1>' + data.hi + '</h1>');
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
