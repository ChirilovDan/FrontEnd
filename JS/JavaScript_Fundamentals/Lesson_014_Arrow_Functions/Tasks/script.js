
//  NOT CORRECT
//let ask=(question="Do you agree?",yes,no)=>(confirm(question))?
//	()=>alert("You agreed."):
//	()=>alert("You canceled.");
	
//ask();

function ask(question,yes,no){
	if(confirm(question)) yes();
	else no();
}

ask(
	"Do you agree",
	()=>alert("Agreed"),
	()=>alert("You cancaled")
	);	
