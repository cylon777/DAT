document.addEventListener( 'input', function(){
	var input = document.getElementById('input').value;
	console.log(input);
	var written = document.getElementById('written');
	written.innerHTML = input;
});
