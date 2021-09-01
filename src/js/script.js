{
  'use strict';
  const select = {
    templatesOf: {
      book: '#template-book',
    },
    listOf: {
      books: '.books-panel .books-list',
    },
    BookFavoriteImages: {
      image: '.books-list .book__image',
      id: 'data-id',
    },
  };
  const classNames = {
    book: {
      favoriteImage: 'favorite',
    },
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

  const favouriteBooks = [];
  const initActions = function(){
    const bookImages = document.querySelectorAll(select.BookFavoriteImages.image);
    for(let bookImage of bookImages){
      bookImage.addEventListener('dblclick', function(event){
        event.preventDefault();
        if(!bookImage.classList.contains(classNames.book.favoriteImage)){
          bookImage.classList.add(classNames.book.favoriteImage);
          favouriteBooks.push(bookImage);
        } else if(bookImage.classList.contains(classNames.book.favoriteImage)){
          bookImage.classList.remove(classNames.book.favoriteImage);
          favouriteBooks.splice(favouriteBooks.indexOf(bookImage), 1);
        }
      });
    }
  };
  initActions();
}

