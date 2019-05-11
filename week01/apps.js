"use strict";
//create a list
let myFavoriteBooks = ['its_about_a_boy', "harry_potter_and_the_sorcerers_stone",
  "doctor_glas", "game_of_throne_season1", "the_lord_of_the_rings",
  "jane_eyre", "little_women", "the_hobbit", "baby_massage", "svenska_kok_book"];

//create function ul
function myBooksList(listOfBooks) {
  let divListOfBooks = document.createElement('div');
  //divListOfBooks.innerHTML('List Of Book : Array');
  //.getElementById("listOfBooks").appendChild(div);
  let listView = document.createElement('ul');
  for (let i = 0; i < listOfBooks.length; i++) {
    let listViewItem = document.createElement('li');
    listViewItem.innerText = listOfBooks[i];
    listViewItem.appendChild(document.createTextNode(listOfBooks[i]));
    // listViewItem.appendChild(document.createTextNode(listOfBooks[i]));
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
  let bookTitle = document.createElement('span');
  let bookLanguage = document.createElement('span');
  let bookAuthor = document.createElement('span');

  objBookList.appendChild(document.createTextNode(bookObject.myBooks + ":  "));
  bookId.appendChild(document.createTextNode("BooksID: " + bookObject.id + ": "));
  objBookList.appendChild(bookId);
  bookTitle.appendChild(document.createTextNode("Books Title: " + bookObject.title + ": "));
  objBookList.appendChild(bookTitle);
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
/*
function checkInventory(scannedItem) {
  return myBooksItem[scannedItem];
}
document.write(myBooksItems["book01"]);
document.write(Object.keys(myBooksItem));
*/

//1.7 book cover object
let booksCover = {
  book01: {
    link: "https://images.gr-assets.com/books/1388854183l/4269.jpg",
    title: 'its_about_a_boy'
  },
  book02: {
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8IUo79wsCBiyDzO9scXb5X16uAOKa1GDoKfSHpMSEg_L4eZb",
    title: 'harry_potter_and_the_sorcerers_stone'
  },
  book03: { link: "https://image.bokus.com/images/9789174290936_200x_doktor-glas_pocket", title: 'doctor_glas' },
  book04: {
    link: "https://s2.adlibris.com/images/1357785/a-game-of-thrones-a-song-of-ice-and-fire-book-one.jpg",
    title: 'game_of_throne_season1'
  },
  book05: {
    link: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    title: 'the_lord_of_the_rings'
  },
  book06: {
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3sRjmqhT84Pv-tE0tzGihbFeeI4YnVWM0U1OcqPn4UlUSb8f",
    title: 'jane_eyre'
  },
  book07: {
    link: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZs8ZibauBY92dwcU2Oyf7rnj1_f6Ez5vTFhqZ2ze6A925ztv2tK47lUgKn9UG4QlBZ4vWKs1R&usqp=CAc',
    title: 'little_women'
  },
  book08: {
    link: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnf693B1VNd9deY7J33lp0-MP4eq3blPzs-gmo_FWbFQJOUH6xPA7Wge2m779WQTC7m3I6ni05&usqp=CAc',
    title: 'the_hobbit'
  },
  book09: {
    link: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmv77-kNA895IwxiloKD3Ar6597pc5XogVJ4d6S54FNfEqPn25&usqp=CAc',
    title: 'baby_massage'
  },
  book10: {
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PMqR-ru1RtBtT-pwCeU_HAnKM7jkNnpNnxT55S8LnIh5l2jm',
    title: 'svenska_kok_book'
  }
}


//create function cover
function printImg() {
  let addHere = document.getElementById('addHere');
  for (let items of Object.keys(booksCover)) {
    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');
    newDiv.className = 'addedClass';
    let textHere = document.createTextNode(booksCover[items].title);
    newDiv.appendChild(textHere);
    newImg.setAttribute('src', booksCover[items].link);
    addHere.appendChild(newDiv);
    addHere.appendChild(newImg);

  }

}

printImg();



