// if we creat a var string, and we call a method with it, js will halndle the string as an object
//const s1= "Hello"
//console.log(s1.uppercase());
//js will handle it as i wrote it like an object:
//const s2= new string("Hello");
//console.log(typeof s2) --> object

// as a DOM we have window as a paret of all DOM tree
//any method can be called with or without window because it is considered under window by default -> window.alert('1') sam as alert('1')

const book1 ={
    title: 'book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

console.log(book1.getSummary());
// to see all object values:

console.log(Object.values(book1));
console.log(Object.keys(book1));
