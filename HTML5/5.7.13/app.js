onmessage = function(e){
	var primelist = "";
	var n = 1;
	search: while (n<e.data) {
		n += 1;
		for (var i = 2; i <= Math.sqrt(n); i += 1)
			if (n % i == 0)
				continue search;
		// found a prime!
		primelist += " " + n;
	}
	self.postMessage(primelist);
}
