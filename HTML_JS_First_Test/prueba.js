movie = {title:'The Godfather',
		releaseInfo:{'year':1972, rating:'PG'}
}

for (i in movie){
	console.log(i);
	console.log(movie[i]);
	// i represents the string value of the element ----> 'releaseInfo'
	// movie[i] is the current object
	if(typeof movie[i] != 'string'){
		for (elem in movie[i]){
			console.log(elem + ": " + movie[i][elem]);
		}
	}
}
