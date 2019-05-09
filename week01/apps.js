"use strict";
//create a list
let myFavoriteBooks = ['its_about_a_boy', "harry_potter_and_the_sorcerers_stone",
  "docter_glas", "game_of_throne_season1", "the_lord_of_the_rings",
  "jane_eyre", "little_women", "the_hobbit", "baby_massage", "svenska_kok_book"];

//create function ul
function myBooksList(listOfBooks) {
  let listView = document.createElement('ul');
  for (let i = 0; i < listOfBooks.length; i++) {
    let listViewItem = document.createElement('li');
    listViewItem.appendChild(document.createTextNode(listOfBooks[i]));
    listView.appendChild(listViewItem);
  }
  return listView;
}
document.getElementById("listOfBooks").appendChild(myBooksList(myFavoriteBooks));

//Make an object (not an array!) properties: title, language and author.
let myBooks = function (id, tittle, language, author) {
  this.id = id;
  this.tittle = tittle,
    this.language = language,
    this.author = author
}
let book01 = new myBooks("book01", "its_about_a_boy", "english", "nick_hornby")
let book02 = new myBooks("book02", "harry_potter_and_the_sorcerers_stone", "english", "j_k_rowling")
let book03 = new myBooks("book03", "docter_glas", "swedish", "hjalmar_söderberg")
let book04 = new myBooks("book04", "game_of_thrones_a_song_of_ice_and_fire", "english", "george_r._r._martin")
let book05 = new myBooks("book05", "the_lord_of_the_rings", "english", "george_r._r._martin")
let book06 = new myBooks("book06", "jane_eyre", "english", "george_r._r._martin")
let book07 = new myBooks("book07", "little_women", "english", "george_r._r._martin")
let book08 = new myBooks("book08", "the_hobbit", "english", "george_r._r._martin")
let book09 = new myBooks("book09", "baby_massage", "english", "george_r._r._martin")
let book10 = new myBooks("book10", "svenska_kok_book", "english", "george_r._r._martin")

let arrayOfBooks = [book01, book02, book03, book04, book05, book06, book07, book08, book09, book10];
let myBooksItem = {
  "book01": book01,
  "book02": book02,
  "book03": book03,
  "book04": book04,
  "book05": book05,
  "book06": book06,
  "book07": book07,
  "book08": book08,
  "book09": book09,
  "book10": book10
};

//1.5 change the function from step 1.3 to display the book ID's in a list to take the actual information 
//about the book from the object and display that.Make sure
//you choose the correct HTML elements for each piece of info, for instance, a heading for the title. */

function bookObject(bookObject) {
  let objBookList = document.createElement('div');
  let bookId = document.createElement('span');
  let bookTittle = document.createElement('span');
  let bookLanguage = document.createElement('span');
  let bookAuthor = document.createElement('span');

  objBookList.appendChild(document.createTextNode(bookObject.myBooks + ":  "));
  bookId.appendChild(document.createTextNode("BooksID: " + bookObject.id + ": "));
  objBookList.appendChild(bookId);
  bookTittle.appendChild(document.createTextNode("Books Tittle: " + bookObject.tittle + ": "));
  objBookList.appendChild(bookTittle);
  bookLanguage.appendChild(document.createTextNode("Language: " + bookObject.language + " : "));
  objBookList.appendChild(bookLanguage);
  bookAuthor.appendChild(document.createTextNode("Author: " + bookObject.author));
  objBookList.appendChild(bookAuthor);
  return objBookList;
}

for (let i = 0; i < arrayOfBooks.length; i++) {
  document.getElementById("objOfBooks").appendChild(bookObject(arrayOfBooks[i]));
}

//Select book by print out book by using bookID code
function checkInventory(scannedItem) {
  return myBooksItem[scannedItem];
}
document.write(myBooksItems["book01"]);
document.write(Object.keys(myBooksItem));

//1.7 book cover object



let booksCover = {
  book01: "https://images.gr-assets.com/books/1388854183l/4269.jpg",
  book02: "https://s2.adlibris.com/images/1357785/a-game-of-thrones-a-song-of-ice-and-fire-book-one.jpg",
  book03: "https://image.bokus.com/images/9789174290936_200x_doktor-glas_pocket",
  book04: "https://s2.adlibris.com/images/1357785/a-game-of-thrones-a-song-of-ice-and-fire-book-one.jpg",
  book05: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8IUo79wsCBiyDzO9scXb5X16uAOKa1GDoKfSHpMSEg_L4eZb"
  /*//its_about_a_boy https://images.gr-assets.com/books/1388854183l/4269.jpg
  // "the_lord_of_the_rings" https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZs8ZibauBY92dwcU2Oyf7rnj1_f6Ez5vTFhqZ2ze6A925ztv2tK47lUgKn9UG4QlBZ4vWKs1R&usqp=CAc
  //"jane_eyre" https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVQq26aS5fKj-aukyI2h391ei5I8aEmdUMsOaX67NHdRcxKR1DSyG6ZUDVOkm96xAniqXW58Gr&usqp=CAc
  //"little_women"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRApj8agzUIMcqpBplW1DUSHDI-Eau93txF2spuCV26LEWGEDbA5onKLP_5vhOS8oE5uOq4Frc&usqp=CAc 
  //"the_hobbit" https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnf693B1VNd9deY7J33lp0-MP4eq3blPzs-gmo_FWbFQJOUH6xPA7Wge2m779WQTC7m3I6ni05&usqp=CAc
  //"baby_massage" https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmv77-kNA895IwxiloKD3Ar6597pc5XogVJ4d6S54FNfEqPn25&usqp=CAc
  //, "svenska_kok_book" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PMqR-ru1RtBtT-pwCeU_HAnKM7jkNnpNnxT55S8LnIh5l2jm
  */
}

//create function cover
/* 1.8 Loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys).
Then write a function which places an image at the corresponding li element. Remember that objects are
not ordered, so you cannot guarantee that the first key is the first li element. (Hint: you could give each
  li item an id tag by modifying the function you made before.)*/

function myBooksCover(listCover) {
  let coverView = document.createElement('ul');
  for (let i = 0; i < listCover.length; i++) {
    let coverViewItem = document.createElement('li');
    coverViewItem.appendChild(document.createTextNode(listCover[i]));
    coverView.appendChild(coverViewItem);
  }
  return coverView;
}
document.getElementById("listOfCover").appendChild(myBooksCover(Object.keys(booksCover)));



