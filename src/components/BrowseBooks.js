// src/components/BrowseBooks.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books); // Get books from Redux store
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter books by category and search term
  const filteredBooks = books.filter(book => 
    (!category || book.category === category) &&
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="browse-container">
      <h1>Browse Books {category && `in ${category}`}</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <ul className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id} className="book-item">
              <img src={book.image} alt={book.title} className="book-image" />
              <div className='title_Book'>{book.title} by {book.author}</div>
              <Link to={`/book/${book.id}`} className='viewdetails'>View Details</Link> {/* Link to BookDetails */}
            </li>
          ))
        ) : (
          <li>No books found.</li>
        )}
      </ul>
    </div>
  );
};

export default BrowseBooks;
