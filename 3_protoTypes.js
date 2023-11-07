function Book(title, author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}

//getSummary
Book.prototype.getSummary= function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

//get Age
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
};

// Revise / Change Year

Book.prototype.revise = function(newYear){
    this.year= newYear,
    this.revised= true;
}

//instatiate an Object
const book1= new Book('Book One', 'John Doe', '2013');

console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise('2018')
console.log(book1);