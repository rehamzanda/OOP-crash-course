function Book(title, author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

}

//instatiate an Object
const book1= new Book('Book One', 'John Doe', '2013');

console.log(book1.getSummary());