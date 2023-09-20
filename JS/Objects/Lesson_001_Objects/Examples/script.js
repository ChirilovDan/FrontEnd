//multiwrd property name

//let user={
//	name:"John",
//	age:30,
//	"likes birds":true
//};

let user={};

//set
user["likes birds"]=true;
alert(user["likes birds"]);

delete user["likes birds"];


let key="likes birds";
user[key]=true;