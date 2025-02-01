import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-center">
      <div className="navbar-brand">
        <h1>ONLINE LIBRARY</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/browse" className="navbar-link">Browse Books</Link>
        <Link to="/add" className="navbar-link">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
