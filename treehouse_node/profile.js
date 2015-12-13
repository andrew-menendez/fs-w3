
var http= require('https')

//print message
function printMessage(username,badgeCount,points){

	var message= username+ " has " + badgeCount + " total badge(s) and " + points + " points in JS"

	console.log(message)
};


//print Error messages

function printError(error){

		console.error(error.message);
};



function get(username){


		var url='https://teamtreehouse.com/'+username+'.json'
		//var url='http://www.google.com'
		var request = http.get(url,function(response){
			var body="";

			//read the data

			response.on('data', function (chunk) {
				//concat data into body
		    	body += chunk;
		  	});

			response.on('end',function(){
				//keep in mind body is a string here.
			if(response.statusCode === 200) {
				try {
						var profile= JSON.parse(body);


						printMessage(username,profile.badges.length, profile.points.JavaScript)	

					} catch (error) {
						//parse error
						printError(error)
					}

				} else {
					//Status Code error
					printError({message: "There was an error getting profile for "+ username+". " 
						+response.statusCode });
				}	
					

			});
	
		});
}//end get


module.exports.get=get