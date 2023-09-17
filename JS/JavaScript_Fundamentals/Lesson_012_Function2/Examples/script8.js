//show prime numbers
function showPrimes(n){
	for(let i=2;i<n;i++){
		if(!isPrime(i))continue;
		alert(i);
	}
}

function isPrime(n){
	for(let j=2;j<n;j++){
		if(n%j==0){
			return false;
		}		
	}
}

showPrimes(2);