{
  'use strict';
  const select = {
    templatesOf: {
      book: '#template-book',
    },
    listOf: {
      books: '.books-panel .books-list',
    }
  };
  const templates = {
    bookLink: Handlebars.compile(document.querySelector(select.templatesOf.book).innerHTML),
  };
  const render = function(){
    for(let book in dataSource.books){
      const generatedHTML = templates.bookLink(dataSource.books[book]);
      book = utils.createDOMFromHTML(generatedHTML);
      const booksList = document.querySelector(select.listOf.books);
      booksList.appendChild(book);
    }
  };
  render();

}
