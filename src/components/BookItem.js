// src/components/BookItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ id, title, image }) => {
  return (
    <li className="book-item">
      <Link to={`/books/${id}`} className="popular-link">
        <img src={image} alt={title} className="popular-image" />
      </Link>
      <h2>{title}</h2>
    </li>
  );
};

export default BookItem;
