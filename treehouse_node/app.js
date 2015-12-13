// We need a simple way to get user badge count


var profile= require('./profile.js');

//console.dir(process.argv)
//console.log(typeof profile);
var users=process.argv.slice(2);

users.forEach(profile.get);






