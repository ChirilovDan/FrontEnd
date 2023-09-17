//function that returns x in power n
let nr=+prompt("Type a nr:");
let nr2=+prompt("Type a power:");

function power(x,n){
	for(i=1;i<n;i++){
		x=x*nr;
	}
	return x;
}
alert(power(nr,nr2));