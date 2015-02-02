function randomImg(){
	var images = [
		'http://upload.wikimedia.org/wikipedia/commons/3/35/DaigojiPagoda3242.jpg',
		'http://upload.wikimedia.org/wikipedia/commons/3/30/Kamogawa_sakura.jpg',
		'http://upload.wikimedia.org/wikipedia/commons/b/b1/Miya_River_Sakura.jpg',
		'http://upload.wikimedia.org/wikipedia/commons/3/36/Mountfujijapan.jpg',
	];
	
	var imgUrl = getRandomImg(images);
	insertImg(imgUrl);
}

function getRandomImg(images){
	var length = images.length;
	var num = Math.floor(Math.random()*(length-1));
	return images[num];
}

function insertImg(imgUrl){
	console.log('imgUrl:' + imgUrl);
	var imgHtml = "<img src='" + imgUrl + "'></img>"
	console.log(imgHtml);
	replaceIdElem("img", imgHtml);
}

function replaceIdElem(id, newValue){
	var element = document.getElementById(id);
	console.log(element.innerHTML);
	element.innerHTML = newValue;
}
