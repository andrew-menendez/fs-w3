
var inputs=process.argv.slice(2);

var sum= function (array){
	var total=0
	for (i in array){
		total= (total + +array[i])
		//console.log(typeof array[i])
	}
	return total
};

console.log(sum(inputs));
