currentImg = null;

function randomImg(){
	var length = 4;
	var num = Math.floor(Math.random()*(length));
	changeImg(num);
}

function changeImg(id){
	if(currentImg!=null)
		var tag = document.getElementById(currentImg).setAttribute("hidden", true);
	currentImg = id;
	var element = document.getElementById(id).removeAttribute("hidden");
}
