
import { createStore } from "redux";

const initialState = {
  categories: [
    { name: 'Fiction', image: 'https://th.bing.com/th/id/OIP._9yjT36_vpUlAdzLt3_wowHaLH?rs=1&pid=ImgDetMain' },
    { name: 'Non-Fiction', image: 'https://th.bing.com/th/id/OIP.4NPzvH8MeYHqFBTCk4lfGAHaIi?rs=1&pid=ImgDetMain' },
    { name: 'Sci-Fi', image: 'https://th.bing.com/th/id/OIP.OQ6VVpQlGtFPkDJsw72k2gHaIz?rs=1&pid=ImgDetMain' },
  ],
  books: [
    { id: 1, title: 'Fiction Book 1', category: 'Fiction', author: 'Author A', image: 'https://th.bing.com/th/id/OIP._9yjT36_vpUlAdzLt3_wowHaLH?rs=1&pid=ImgDetMain' },
    { id: 2, title: 'Fiction Book 2', category: 'Fiction', author: 'Author B', image: 'https://th.bing.com/th/id/OIP._9yjT36_vpUlAdzLt3_wowHaLH?rs=1&pid=ImgDetMain' },
    { id: 3, title: 'Non-Fiction Book 1', category: 'Non-Fiction', author: 'Author C', image: 'https://th.bing.com/th/id/OIP.4NPzvH8MeYHqFBTCk4lfGAHaIi?rs=1&pid=ImgDetMain' },
    { id: 4, title: 'Sci-Fi Book 1', category: 'Sci-Fi', author: 'Author D', image: 'https://th.bing.com/th/id/OIP.OQ6VVpQlGtFPkDJsw72k2gHaIz?rs=1&pid=ImgDetMain' },
  ],
};

const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const EDIT_BOOK = 'EDIT_BOOK';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload], 
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload), 
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload.id ? { ...book, ...action.payload } : book
        ), 
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
