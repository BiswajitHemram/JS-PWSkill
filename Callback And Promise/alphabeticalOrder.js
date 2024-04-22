function createTitleArray(book,callback){
    let titleName = book.map((item)=> item.title)
    return callback(titleName);
}

function titleInOrder(title){
    console.log(title.sort());
}

const book = [
    {title : "Human Anatomy", author : "Dr. Ashvini Kumar Dwivedi", year : 2023},
    {title : "A Place Called Home", author : "Preeti Shenoy", year : 2022},
    {title : "Unfinished", author : "Priyanka Chopra Jonas", year : 2022},
    {title : "The India Story", author : "Bimal Jalal", year : 2022},
]

createTitleArray(book, titleInOrder)