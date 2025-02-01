import { ADD_BOOK } from './actions';

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, { ...action.payload, id: Date.now() }],
      };
    default:
      return state;
  }
};

export default bookReducer;
