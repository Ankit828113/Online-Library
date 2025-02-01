import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams(); 

  console.log("book id :", id)
  const book = useSelector(state => state.books.find(b => b.id === parseInt(id))); // Find the book in Redux store

  if (!book) {
    return <h2>Book not found, Sorry</h2>; 
  }

  return (
    <div className="book-details-container">
      <h1>{book.title}</h1>
      <h2>Author: {book.author}</h2>
      <img src={book.image} alt={book.title} className="book-detail-image" />
      
      {book.description && <p>{book.description}</p>}
      {book.rating && <p>Rating: {book.rating}</p>}
      <div>
      <Link to="/browse" className="back-link">Back to Browse</Link>
      </div>
      
    </div>
  );
};

export default BookDetails;
