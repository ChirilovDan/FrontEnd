let nr= new Array(1,2,3,2,4,5,3);
let dup=[];

function findDuplicates(array1,array2){
	for(i=0;i<array1.length;i++){
		let count=0;
		for(j=i+1;j<array1.length;j++){
			if(array1[i]===array1[j]){
				count++;
			}
		}
		if(count!==0){
			array2.push(array1[i]);
		}
	}
	showArray(array2);
}

function showArray(array){
	for(i=0;i<array.length;i++){
		console.log(array[i]);
	}
}

findDuplicates(nr,dup);
