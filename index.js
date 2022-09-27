const userInfo = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi, my name is ${userInfo.name} and I'm ${userInfo.campus} years old`,
	e : "oO",
	T : "U "
}));
