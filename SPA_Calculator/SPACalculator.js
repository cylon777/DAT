$(document).ready(function() {
	var displayContent = "";

	$("button").click(function() {
		var elemClass = $(this).attr('class');
		var elemContent = $(this).html();
		/*console.log(elemClass);
		console.log(elemContent);*/
		if(elemClass=="display"){
			displayContent += elemContent;
			$("input").val(displayContent);
		}else if(elemClass=="exec"){
			if(elemContent=="DEL"){
				displayContent = displayContent.substring(0, displayContent.length - 1);
				$("input").val(displayContent);
			}else if(elemContent=="C"){
				displayContent = "";
				$("input").val(displayContent);
			}else if(elemContent=="="){
				console.log("displayContent: '" + displayContent + "'");
				if(checkNum(displayContent)==null)
					$("input").val("OK");
				else
					$("input").val(checkNum(elemContent));
			}
		}
	});

	function checkNum(str) {
		for (var i = 0; i < str.length; i++) {
			var ch = str.substring(i, i+1);
			if (ch < "0" || ch > "9") {
				console.log("IS NOT A NUMBER");
				if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "(" && ch!= ")" && ch!= "&divide;") {
					console.log("IS NOT A VALID CHARACTER");
					return("invalid entry: '" + ch + "'");
				}
			}
		}
		return null;
	}
});
