import React from 'react';

const BookItem = ({book}) => {
  return(
    <li key={book.title} className="list-group-item">{book.title}</li>    
  )
}

export default BookItem;