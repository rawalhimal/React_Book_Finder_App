import React from 'react';
import './BookList.css'; // Import the CSS file

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Found Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
