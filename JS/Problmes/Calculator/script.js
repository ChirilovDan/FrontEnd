
	let nr1=+prompt("Give nr1=");
	let nr2=+prompt("Give nr2=");
	let operant=prompt("Operant:")
	let result=0;
	switch(operant){
		case "+":
		console.log(add(nr1,nr2));
		break;
		case "-":
		console.log(deleteF(nr1,nr2));
		break;
		case "*":
		console.log(multiple(nr1,nr2));
		break;
		case "/":
		console.log(devide(nr1,nr2));
		break;
	}

function add(nr1,nr2){
	return nr1+nr2;
}

function deleteF(nr1,nr2){
	return nr1-nr2;
}

function multiple(nr1,nr2){
	return nr1*nr2;
}

function devide(nr1,nr2){
	return nr1/n2;
}