import React from 'react';
import { Link } from 'react-router-dom';
import { categories, books } from './bookData'; 
import BookItem from './BookItem'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-title">Welcome to the Online Library</h1>

      <div className="homepageitems">
        <div className='categoryList'>
          <h2 className="category-title">Book Categories</h2>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.name} className="category-item">
                <Link to={`/books/${category.name}`} className="category-link">
                  <img src={category.image} alt={category.name} className="category-image" />
                </Link>
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        <div className='popularList'>
          <h2 className="popular-title">Popular Books</h2>
          <ul className="popular-list">
            {books.slice(0, 3).map((book) => ( // Display only 3 popular books
              <BookItem 
                key={book.id} 
                id={book.id} 
                title={book.title} 
                image={book.image} 
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
