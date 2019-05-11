"use strict";
/*
let allBooks = [{ title: "its_about_a_boy", language: "english", author: "nick_hornby" },
{ title: "harry_potter_and_the_sorcerers_stone", language: "english", author: "j_k_rowling" }];

*/
/*
let myPerson = {
  firstName:"Johny",
  lastName:"Dan",
  age:45,
  eyeColor:"blue",
  country: "UK",
  marry: true
  //address:{street:'555 something',city:'Bosston', state:'MA'}
  //fullName: function(){
 // return this.firstName +" " +this.lastName;
  //}
};

let showObject = function(obj, objName) {
    let result = ``;
    for (let i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }
console.log(showObject(myPerson, "myPerson"));
*/
/*function myBooksF(id, tittle, language, author) {
  this.id = id;
  this.tittle = tittle,
    this.language = language,
    this.author = author
}
let book01 = new myBooksF("book01",
  "its_about_a_boy",
  "english",
  "nick_hornby"

)
//console.log(book1);

let book02 = new myBooksF("book02", "harry_potter_and_the_sorcerers_stone", "english", "j_k_rowling")
let book03 = new myBooksF("book03", "harry_potter_and_the_sorcerers_stone2", "english", "j_k_rowling")
let book04 = new myBooksF("book04", "harry_potter_and_the_sorcerers_stone3", "english", "j_k_rowling")

let arrayOfBooks = [book01, book02, book03, book04];
let myBooks = {
  "book01": book01,
  "book02": book02,
  "book03": book03,
  "book04": book04
};

//book05, book06, book07, book08, book09, book10];
//console.log(myBooks);
/*
for (let i = 1; i < key[myBooks]; i++) {
  console.log(myBooks[i]);
}
console.log(myBooks.myBooksF.length);
console.log(typeof (myBooks));
*/

/*let juice = {
  apple: 1.15,
  orange: 1.45
};*/

/*
function checkInventory(scannedItem) {
  return myBooks[scannedItem];

}

console.log(myBooks["book01"]);
*/

//console.log(Object.keys(myBooks));  //Array(4) ["book01", "book02", "book03", "book04"]
/*
function getBooksItem(books) {
  //let booksItem = Object.keys(myBooks);
  for (let value of Object.values(myBooks[0])) {
    console.log(value); // John, then 30
  }
}

console.log("Print all Books ", checkInventory(getBooksItem));
*/

/*var hello = {
  hello: 'world',
  foo: 'bar'
};
var qaz = {
  hello: 'stevie',
  foo: 'baz'
}

var myArray = [];
myArray.push(hello, qaz);

var index = myArray.findIndex(function (element, index, array) {
  if (element.hello === 'hello') {
    return true;
  }
});
console.log('stevie is at index: ' + index); */
/*
let booksCover = {
  "https://images.gr-assets.com/books/1388854183l/4269.jpg",
  "https://s2.adlibris.com/images/1357785/a-game-of-thrones-a-song-of-ice-and-fire-book-one.jpg",
  "https://image.bokus.com/images/9789174290936_200x_doktor-glas_pocket",
  "https://s2.adlibris.com/images/1357785/a-game-of-thrones-a-song-of-ice-and-fire-book-one.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8IUo79wsCBiyDzO9scXb5X16uAOKa1GDoKfSHpMSEg_L4eZb",
  "https://images.gr-assets.com/books/1388854183l/4269.jpg"
}


function listCover() {

  for (let value of Object.values(booksCover)) {
    console.log(value);
  }
}


console.log(listCover);

let myBooksList = [{ id: 'book01', title: 'its_about_a_boy' },
{ id: 'book02', title: 'harry_potter_and_the_sorcerers_stone' },
{ id: 'book03', title: 'docter_glas' }];*/

* /
function printImg() {
  let newDiv = document.createElement('div');
  let newImg = document.createElement('img');
  newDiv.className = 'addedClass';
  let textHere = document.createTextNode('Write out text here');
  newDiv.appendChild(textHere);
  newImg.setAttribute('src', 'https://anglozine.com/wp-content/uploads/2016/07/about-a-boy-300x240.jpg');
  let addHere = document.getElementById('addHere');
  addHere.appendChild(newDiv);
  addHere.appendChild(newImg);
}

printImg();
