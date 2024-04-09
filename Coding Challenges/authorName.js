function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function filterAndCapitalizeBooks(books) {
    return books.filter(book => book.year > 2010)
                .map(book => ({...book, author: capitalizeFirstLetter(book.author)}));
}

const books = [
    { title: "Book 1", author: "john doe", year: 2009 },
    { title: "Book 2", author: "jane smith", year: 2012 },
    { title: "Book 3", author: "alan walker", year: 2015 },
    { title: "Book 4", author: "emily jones", year: 2008 }
];

const filteredBooks = filterAndCapitalizeBooks(books);
console.log(filteredBooks);
