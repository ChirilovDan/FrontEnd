let age=prompt("Type age:");
function checkAge(age){
	return (age>18)? true : confirm("Parrents allow you?");
}

checkAge(age);