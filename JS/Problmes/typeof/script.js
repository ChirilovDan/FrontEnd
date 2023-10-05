let array=['book',2.21,10,true,[],new Date()];

//alert(typeof(array[2]));

for(let i=0; i<array.length;i++){
	if(typeof(array[i])==="number" && Number.isInteger(array[i]))
		console.log(array[i]);
}