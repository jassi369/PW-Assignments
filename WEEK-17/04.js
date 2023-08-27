const books = [
  {
    title: "Book 1",
    author: "author 1",
    publicationYear: 2005,
  },
  {
    title: "Book 2",
    author: "author 2",
    publicationYear: 2015,
  },
  {
    title: "Book 3",
    author: "author 3",
    publicationYear: 2008,
  },
  {
    title: "Book 4",
    author: "author 4",
    publicationYear: 2012,
  },
  {
    title: "Book 5",
    author: "author 5",
    publicationYear: 2003,
  },
];
let newBooks = [];
for (let key in books) {
  if (books[key].publicationYear > 2010) {
    let filteredbookTitle = books[key].title;
    let filteredbookAutor =
      books[key].author.charAt(0).toUpperCase() + books[key].author.slice(1);
    let filteredBookYear = books[key].publicationYear;

    newBooks.push({
      title: filteredbookTitle,
      author: filteredbookAutor,
      publicationYear: filteredBookYear,
    });
  }
}
console.log(newBooks);
