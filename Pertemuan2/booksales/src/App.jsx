import React from 'react';
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



// Data Buku
const books = [
  { id: 1, title: 'Filosofi Teras', price: 'Rp 88.000', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80', desc: 'Panduan stoisisme untuk menghadapi masalah hidup modern.' },
  { id: 2, title: 'Psychology of Money', price: 'Rp 95.000', img: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=400&q=80', desc: 'Pelajaran berharga mengenai keuangan, sifat serakah, dan kebahagiaan.' },
  { id: 3, title: 'Deep Work', price: 'Rp 105.000', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80', desc: 'Aturan untuk meraih sukses fokus di dunia yang penuh gangguan.' },
  { id: 4, title: 'Sapiens', price: 'Rp 125.000', img: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=400&q=80', desc: 'Riwayat singkat umat manusia dari zaman batu hingga modern.' },
  { id: 5, title: 'Clean Code', price: 'Rp 150.000', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80', desc: 'Panduan pengembangan perangkat lunak yang rapi dan profesional.' },
  { id: 6, title: 'Start With Why', price: 'Rp 99.000', img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80', desc: 'Bagaimana pemimpin hebat menginspirasi orang lain untuk bertindak.' },
];

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        {/* Header dipasang di luar Routes agar selalu tampil */}
        <Header />

        {/* Jalur Halaman / Routing */}
        <Routes>
          <Route index element={<Home books={books} />} />
          <Route path="/book" element={<Book books={books} />} />
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