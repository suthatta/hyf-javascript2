"use strict";

//create a list
let myFavoriteBooks = ['its_about_a_boy', "harry_potter_and_the_sorcerers_stone",
  "doctor_glas", "game_of_throne_season1", "the_lord_of_the_rings",
  "jane_eyre", "little_women", "the_hobbit", "baby_massage", "svenska_kok_book"];

//create function ul
function generateBookTitle(listOfBooks) {
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

document.getElementById("listOfBooks").appendChild(generateBookTitle(myFavoriteBooks));

let myBookCollection = {
  its_about_a_boy: {
    title: 'its_about_a_boy',
    language: 'english',
    author: 'nick hornby'
  },
  harry_potter_and_the_sorcerers_stone: {
    title: 'harry_potter_and_the_sorcerers_stone',
    language: 'english',
    author: 'r. k. Rowling'
  },
  doctor_glas: {
    title: 'doctor_glas',
    language: 'swedish',
    author: 'hjalmar_söderberg'
  },
  game_of_thrones_a_song_of_ice_and_fire: {
    title: 'game_of_thrones_a_song_of_ice_and_fire',
    language: 'english,george_r._r._martin',
    author: 'george_r._r._martin'
  },
  the_lord_of_the_rings: {
    title: 'the_lord_of_the_rings',
    language: 'english',
    author: 'george_r._r._martin'
  },
  jane_eyre: {
    title: 'jane_eyre',
    language: 'english',
    author: 'george_r._r._martin'
  },
  little_women: {
    title: 'little_women',
    language: 'english',
    author: 'george_r._r._martin'
  },
  the_hobbit: {
    title: 'the_hobbit',
    language: 'english',
    author: 'george_r._r._martin'
  },
  baby_massage: {
    title: 'baby_massage',
    language: 'english',
    author: 'george_r._r._martin'
  },
  svenska_kok_book: {
    title: 'svenska_kok_book',
    language: 'english',
    author: 'george_r._r._martin'
  }
}

//1.5 change the function from step 1.3 to display the book ID's in a list to take the actual information 
//about the book from the object and display that.Make sure
//you choose the correct HTML elements for each piece of info, for instance, a heading for the title. */

function generateBookElement(bookObject) {
  let objBookList = document.createElement('div');
  let bookTitle = document.createElement('span');
  let bookLanguage = document.createElement('span');
  let bookAuthor = document.createElement('span');

  bookTitle.appendChild(document.createTextNode("Title: " + bookObject.title + ": "));
  objBookList.appendChild(bookTitle);
  bookLanguage.appendChild(document.createTextNode("Language: " + bookObject.language + " : "));
  objBookList.appendChild(bookLanguage);
  bookAuthor.appendChild(document.createTextNode("Author: " + bookObject.author));
  objBookList.appendChild(bookAuthor);
  return objBookList;
}

for (let bookKey of Object.keys(myBookCollection)) {
  document.getElementById("objOfBooks").appendChild(generateBookElement(myBookCollection[bookKey]));
}

//Select book by print out book by using bookID code
//1.7 book cover object

let booksCover = {
  its_about_a_boy: { link: "https://images.gr-assets.com/books/1388854183l/4269.jpg" },
  harry_potter_and_the_sorcerers_stone: { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8IUo79wsCBiyDzO9scXb5X16uAOKa1GDoKfSHpMSEg_L4eZb" },
  doctor_glas: { link: "https://image.bokus.com/images/9789174290936_200x_doktor-glas_pocket" },
  game_of_thrones_a_song_of_ice_and_fire: {
    link: "https://s2.adlibris.com/images/1357785/a-game-of-thrones-a-song-of-ice-and-fire-book-one.jpg"
  },
  the_lord_of_the_rings: {
    link: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  jane_eyre: {
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3sRjmqhT84Pv-tE0tzGihbFeeI4YnVWM0U1OcqPn4UlUSb8f"
  },
  little_women: {
    link: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZs8ZibauBY92dwcU2Oyf7rnj1_f6Ez5vTFhqZ2ze6A925ztv2tK47lUgKn9UG4QlBZ4vWKs1R&usqp=CAc'
  },
  the_hobbit: {
    link: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnf693B1VNd9deY7J33lp0-MP4eq3blPzs-gmo_FWbFQJOUH6xPA7Wge2m779WQTC7m3I6ni05&usqp=CAc'
  },
  baby_massage: {
    link: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmv77-kNA895IwxiloKD3Ar6597pc5XogVJ4d6S54FNfEqPn25&usqp=CAc'
  },
  svenska_kok_book: {
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PMqR-ru1RtBtT-pwCeU_HAnKM7jkNnpNnxT55S8LnIh5l2jm'
  }
}

function generateBookCoverElement(coverImages, bookCollection) {
  let newDiv = document.createElement('div');
  newDiv.className = "gridClass";
  // 2 different functions argument one for parent and children
  for (let key of Object.keys(coverImages)) {
    let newUl = document.createElement('ul');
    newDiv.appendChild(newUl);
    let source = coverImages[key].link;
    let img = document.createElement('img');
    img.setAttribute('src', source);
    newUl.appendChild(img);
    for (let bookKey of Object.keys(bookCollection[key])) {
      let newLi = document.createElement('li');
      newUl.appendChild(newLi);
      newUl.className = 'grid-flex';
      newLi.className = "grid-item";
      newLi.innerText = bookCollection[key][bookKey];
    }
  }
  return newDiv;
}
document.getElementById("listOfCover").appendChild(generateBookCoverElement(booksCover, myBookCollection));