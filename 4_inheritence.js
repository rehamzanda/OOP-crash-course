function Book(title, author,year){
    this.title = title;
    this.author = author;
    this.year = year;
};

//getSummary
Book.prototype.getSummary= function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

//Magazine Constructor
function Magazine(title, author, year,month){
    Book.call(this,title,author,year);// we used the constructor of book fun
    this.month = month;
}

Magazine.prototype = Object.create(Book.prototype)
//Inherit Prototype
const mag1= new Magazine('Mag One','John Doe','2018','Jan');

Magazine.prototype.constructor = Magazine;
console.log(mag1);