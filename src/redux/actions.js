export const addBook = (book) => ({
    type: 'ADD_BOOK',
    payload: book,
  });
  
  export const deleteBook = (bookId) => ({
    type: 'DELETE_BOOK',
    payload: bookId,
  });
  
  export const editBook = (book) => ({
    type: 'EDIT_BOOK',
    payload: book,
  });
  