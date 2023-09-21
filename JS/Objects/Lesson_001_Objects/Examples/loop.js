function hello(name){
	let phrase="Hello, ${name}!";
	say(phrase);
}

function say(phrase){
	phrase ="Hello, John!";
	console.log("** "+phrase+" **");
}

hello("Radu");