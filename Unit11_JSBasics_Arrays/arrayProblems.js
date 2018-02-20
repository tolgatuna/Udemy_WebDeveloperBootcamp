function sumArray(array) {
	var total = 0;
	if(array.length > 0) {
		array.forEach(function(item) {
			total += item;
		})
		return total;
	}
	else {
		console.error("Array is empty!");
		return -1;
	}
}

function max(array) {
	if(array.length > 0) {
		var val = array[0];
		array.forEach(function(item) {
			if(val < item) {
				val = item;
			}
		})
		return val;
	}
	else {
		console.error("Array is empty!");
		return -1;
	}
}