// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
	$("#btn1").click(function() {
		$('#orderedlist').addClass("red");
	});
	$("#btn2").click(function() {
		$('#orderedlist').addClass("blue");
	});
	$( "* li:last-child" ).hover(function() {
		$( this ).addClass("green");
	}, function() {
		$( this ).removeClass("green");
	});
});
