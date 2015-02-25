document.addEventListener( 'input', function(){
	var input = document.getElementById('input').value;
	var circle = document.getElementById('circle');
	console.log(input);
	circle.style.backgroundColor = input;
});
