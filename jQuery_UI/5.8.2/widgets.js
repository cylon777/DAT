$(document).ready(function() {
	var dropped = false;
	$("#date").datepicker();

    $( "#menu" ).menu();

	$( "#draggable" ).draggable({
		revert: function( event, ui ){
			$(this).data("uiDraggable").originalPosition = {
		        top : 0,
		        left : 0
			};
			if(!event){
				$( "#droppable" ).addClass("ui-droppable").removeClass("ui-state-highlight");
			}
			return !event;
		}
	});

	$( "#droppable" ).droppable({
		drop: function( event, ui ) {
		$( this ).addClass("ui-state-highlight").find( "p" ).html( "Dropped!" );
			dropped = true;

		}
	});
});
