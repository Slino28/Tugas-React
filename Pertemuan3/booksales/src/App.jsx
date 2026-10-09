import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

// Import Halaman dari Folder Pages
import Home from './components/pages/Home';
import Book from './components/pages/Book';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';

import Login from './components/pages/auth/login';
import Register from './components/pages/auth/register';

// Data Buku diambil dari file Utils
import initialBooks from './Utils/books';

function App() {
  // State daftar buku, nilai awalnya dari books.js
  const [books, setBooks] = useState(initialBooks);

  // Menambah buku baru ke daftar
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => {
      const nextId = prevBooks.length ? Math.max(...prevBooks.map((b) => b.id)) + 1 : 1;
      return [...prevBooks, { id: nextId, ...newBook }];
    });
  };

  return (
    <div className="container">
      <BrowserRouter>
        {/* Header dipasang di luar Routes agar selalu tampil */}
        <Header />

        {/* Jalur Halaman / Routing */}
        <Routes>
          <Route index element={<Home books={books} />} />
          <Route path="/book" element={<Book books={books} onAddBook={handleAddBook} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Footer dipasang di luar Routes agar selalu tampil di bawah */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
