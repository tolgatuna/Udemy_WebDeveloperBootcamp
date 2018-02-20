Array.prototype.myForEach = function(func) {
	for(var i = 0 ; i < this.length ; i++) {
		func(this[i]);
	}
}

var nums = [1,2,3,4,5,6,7];
nums.myForEach(function(item) {console.log(item)});