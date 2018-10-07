import { combineReducers } from 'redux';

import  BookReducer from './books';
import  BookDetailsReducer from './bookDetails';

const rootReducer = combineReducers({
  books: BookReducer,
  selectedBook: BookDetailsReducer
});

export default rootReducer;
