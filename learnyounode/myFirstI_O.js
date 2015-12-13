var fs = require('fs');

filename=process.argv[2]

var data=fs.readFileSync(filename);
	str=data.toString();

	strArr=str.split('\n');

	newlinecount=(strArr.length -1);

	console.log(newlinecount);

