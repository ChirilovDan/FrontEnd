//property value shorthand

function makeUser(name,age){
	return{
		name:name,
		age:age,
	};
}

let user=makeUser("John",20);
alert(user.name);
alert(user.age);

//proprierty existence
let user={};
alert(user.noSuchProperty===undefined);