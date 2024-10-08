// Iteration 1 | Books Array

const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
       language: "English",
       description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
       language: "English",
       description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
       language: "English",
       description: "Educated is an account of the struggle for self-invention..."
    }
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
       language: "English",
       description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  }
];


// Iteration 2 | Book Details
function getBookDetails(booksArray) {
  return `${booksArray.title} - ${booksArray.author} - ${booksArray.pages} pages`;
}

// Iteration 3 | Delete Language
for(let key in booksArray) {
  delete booksArray[key].details.language
}
console.log(booksArray);

// Iteration 4 | Estimated Reading Time
for(let i = 0; i < booksArray.length; i++) {
  booksArray[i].readingTime =  Math.ceil((booksArray[i].pages * 500) / 90);
}
console.log(booksArray);

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};

function booksByAuthor(dictionary) {
  let books = [];
  for(let key in dictionary) {            // Se recorren los 3 objetos (AUTOR)
    for(let i = 0; i < dictionary[key].length; i++) {   // Recorro los libros de cada autor 
      let objBook = {                                   // dictionary[key] accede al array de libros del autor (key) actual.
        title: dictionary[key][i][0],       // primer elemento del array
        pages: dictionary[key][i][1],
        author: key   // nombre actual
       };
      books.push(objBook)
    }
  }
  return books;
}
console.log(booksByAuthor(dictionary));


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  let average = 0;
  let pagTotal = 0;

  for(let key in books) {
    //console.log(books.length)       // Numero de objetos (que en verdad cada objeto es un libro)
    //console.log(books[key].pages)   // Número de páginas por libro

    pagTotal += books[key].pages;     // Número de páginas totales

    average = pagTotal / books.length;
  }

  return average;
  
}
console.log(averagePageCount(booksArray))