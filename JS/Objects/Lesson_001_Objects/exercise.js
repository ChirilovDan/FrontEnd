const libraryCatalog={
	books:[],
	addBook(title,author){
		const newBook={
			title:title,
			author:author
		};
		this.books.push(newBook);
		console.log("Added this book successfully");
	},
	
	removeBook(title){
		const index=this.books.findIndex(book=>book.title===title);
		if(index!==true){
			const removedBook = this.books.splice(index, 1)[0];
      console.log(`Removed "${removedBook.title}" by ${removedBook.author} from catalog.`);
		}else{
			console.log(`"${title}" is not in the catalog.`);
		}
	},
	
	showBooks(){
		if (this.books.length === 0) {
		console.log("The catalog is empty.");
    	}else{
			console.log("Library Catalog:");
			this.books.forEach(book=>{
				console.log(`"${book.title}" by ${book.author}`);
			});
		}
	},		
};

libraryCatalog.addBook("Colt Alb", "Mark Twain");
libraryCatalog.addBook("Amintiri din copilarie", "Ion Creanga");
libraryCatalog.addBook("Mama", "Grigore Vieru");
libraryCatalog.showBooks();
libraryCatalog.removeBook("Colt Alb");
libraryCatalog.showBooks();