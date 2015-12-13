var fs = require('fs');

filename=process.argv[2]

fs.readFile(filename, function(err,data){
	if (err) {
       return console.error(err);
   }
	str=data.toString();

	strArr=str.split('\n');

	newlinecount=(strArr.length -1);

	console.log(newlinecount);

});