//functions have full access to outer variable
let userName="John";

function showMessage(){
	userName="Bob";
	let message="Hello, "+userName;
	alert(message);
}

alert(userName);
showMessage();
alert(userName);