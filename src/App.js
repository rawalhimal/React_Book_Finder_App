import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  const [foundBooks, setFoundBooks] = useState([]);

  const handleSearch = (searchTerm) => {
    // Simulate API call or book search logic here
    const mockBooksDatabase = [
      { title: 'Book 1' },
      { title: 'Book 2' },
      { title: 'Book 3' },
      { title: 'Book 4' },
      { title: 'Book 5' },
      { title: 'Book 6' },
      // Add more books here
    ];

    const founds = mockBooksDatabase.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    setFoundBooks(founds);
  };

  return (
    <div className="App">
      <h1>Book Finder App</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={foundBooks} />
    </div>
  );
}

export default App;
