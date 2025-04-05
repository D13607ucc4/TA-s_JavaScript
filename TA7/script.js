
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

function getTheTitles(books){
    let libros = []
    for (let i = 0; i < books.length; i++) {
        libros.push(books[i].title)
    }
    return libros
}

console.log('Los titulos de los libros son: ', getTheTitles(books))