// WITH 1 PARAMETER
//let double=n=>n*2;
//alert(double(3));

// WITHOUT PARAMETERS
//let sayHi=()=>alert("Hello!");
//sayHi();

//CREATING DYNAMICALLY Function
let age = prompt("Whats your age?");

let welcome = (age<18)?
		()=>alert("Hello"):
		()=>alert("Greetings");
welcome();