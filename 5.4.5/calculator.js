// window.addEventListener('load', ulToOl, false); --------> this sentens is similar to de next sentence
document.addEventListener( "DOMContentLoaded", calculator, false);

function calculator(){
	var op = document.getElementById('op');
	console.log(op.innerHTML);
	console.log(res.innerHTML);
	var operands = op.innerHTML.split('+');
	var num = add(operands);
	console.log(num);
	replaceIdElem('res', "= " + num);
}

function add(operands){
	var res = 0;
	for(i in operands){
		res += parseInt(operands[i]);
	}
	return res;
}

function replaceIdElem(id, newValue){
	var element = document.getElementById(id);
	console.log(element.innerHTML);
	element.innerHTML = newValue;
}
