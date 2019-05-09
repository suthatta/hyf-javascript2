
function myBooksF(id, tittle, language, author) {
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


function checkInventory(scannedItem) {
  return myBooks[scannedItem];

}

console.log(myBooks["book01"]);


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

var hello = {
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
console.log('stevie is at index: ' + index);

let booksCover = {
  book01: "https://images.gr-assets.com/books/1388854183l/4269.jpg",
  book02: "https://s2.adlibris.com/images/1357785/a-game-of-thrones-a-song-of-ice-and-fire-book-one.jpg",
  book03: "https://image.bokus.com/images/9789174290936_200x_doktor-glas_pocket",
  book04: "https://s2.adlibris.com/images/1357785/a-game-of-thrones-a-song-of-ice-and-fire-book-one.jpg",
  book05: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8IUo79wsCBiyDzO9scXb5X16uAOKa1GDoKfSHpMSEg_L4eZb"
}

let newBooksCover = [book01, book02, book03, book04, book05];
function listCover() {
  for (let value of newBooksCover) {
    console.log(value);
  }
}

console.log(listCover);