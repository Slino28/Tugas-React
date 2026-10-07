import React, { useState } from 'react';

function App() {
  // State untuk berpindah halaman
  const [activeTab, setActiveTab] = useState('home');

  // Data buku untuk grid di halaman Home
  const books = [
    { id: 1, title: 'Filosofi Teras', price: 'Rp 88.000', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80', desc: 'Panduan stoisisme untuk menghadapi masalah hidup modern.' },
    { id: 2, title: 'Psychology of Money', price: 'Rp 95.000', img: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=400&q=80', desc: 'Pelajaran berharga mengenai keuangan, sifat serakah, dan kebahagiaan.' },
    { id: 3, title: 'Deep Work', price: 'Rp 105.000', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80', desc: 'Aturan untuk meraih sukses fokus di dunia yang penuh gangguan.' },
    { id: 4, title: 'Sapiens', price: 'Rp 125.000', img: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=400&q=80', desc: 'Riwayat singkat umat manusia dari zaman batu hingga modern.' },
    { id: 5, title: 'Clean Code', price: 'Rp 150.000', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80', desc: 'Panduan pengembangan perangkat lunak yang rapi dan profesional.' },
    { id: 6, title: 'Start With Why', price: 'Rp 99.000', img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80', desc: 'Bagaimana pemimpin hebat menginspirasi orang lain untuk bertindak.' },
  ];

  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a 
              href="#" 
              onClick={() => setActiveTab('home')} 
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i className="fa-solid fa-book fa-2x" style={{ color: 'rgb(116, 192, 252)' }}></i>
              <span className="ms-2 fs-4 fw-bold">BookStore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <button 
                onClick={() => setActiveTab('home')} 
                className={`nav-link px-2 border-0 bg-transparent ${activeTab === 'home' ? 'link-secondary fw-bold' : 'text-dark'}`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('book')} 
                className={`nav-link px-2 border-0 bg-transparent ${activeTab === 'book' ? 'link-secondary fw-bold' : 'text-dark'}`}
              >
                Book
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('team')} 
                className={`nav-link px-2 border-0 bg-transparent ${activeTab === 'team' ? 'link-secondary fw-bold' : 'text-dark'}`}
              >
                Team
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('contact')} 
                className={`nav-link px-2 border-0 bg-transparent ${activeTab === 'contact' ? 'link-secondary fw-bold' : 'text-dark'}`}
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Home */}
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <div className="my-5">
              <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                    Atomic Habits : Perubahan kecil yang memberikan hasil luar biasa
                  </h1>
                  <p className="lead text-secondary mb-4">
                    Belajar cara membuat kebiasaan baik dan menghilangkan kebiasaan buruk dengan cara yang sederhana dan efektif.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
                  </div>
                </div>
                
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg rounded-3">
                  <img 
                    className="img-fluid w-100" 
                    src="https://picsum.photos/600/500" 
                    alt="Atomic Habits" 
                  />
                </div>
              </div>
            </div>

            {/* Section Album / Katalog Buku */}
            <section className="py-5 text-center container">
              <div className="row py-lg-4">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h2 className="display-5 fw-bold mb-3">Koleksi Buku Populer</h2>
                  <p className="lead text-body-secondary">
                    Temukan berbagai buku pilihan terbaik untuk meningkatkan wawasan, produktivitas, dan pengembangan diri Anda.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary my-2 me-2">Jelajahi Semua</a>
                    <a href="#" className="btn btn-outline-secondary my-2">Kategori Buku</a>
                  </p>
                </div>
              </div>
            </section>

            {/* Grid Card Buku */}
            <div className="album py-5 bg-body-tertiary">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                  {books.map((book) => (
                    <div className="col" key={book.id}>
                      <div className="card shadow-sm h-100 border-0">
                        <img 
                          src={book.img} 
                          className="card-img-top" 
                          alt={book.title}
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <div>
                            <h5 className="card-title fw-bold">{book.title}</h5>
                            <p className="card-text text-secondary fs-6">
                              {book.desc}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-primary">Lihat</button>
                              <button type="button" className="btn btn-sm btn-primary">Beli</button>
                            </div>
                            <small className="fw-bold text-success">{book.price}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* book */}
        {activeTab === 'book' && (
          <div className="album py-5 bg-body-tertiary">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                  {books.map((book) => (
                    <div className="col" key={book.id}>
                      <div className="card shadow-sm h-100 border-0">
                        <img 
                          src={book.img} 
                          className="card-img-top" 
                          alt={book.title}
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <div>
                            <h5 className="card-title fw-bold">{book.title}</h5>
                            <p className="card-text text-secondary fs-6">
                              {book.desc}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-primary">Lihat</button>
                              <button type="button" className="btn btn-sm btn-primary">Beli</button>
                            </div>
                            <small className="fw-bold text-success">{book.price}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        )}
        {/* Team */}
        {activeTab === 'team' && (
          <div className="py-5">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Tim Kami</h2>
              <p className="lead text-secondary">Orang-orang hebat di balik pengembangan BookStore</p>
            </div>
            <div className="row g-4">
              {[
                { name: 'Sabian Vasyelino', role: 'Frontend Developer', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80' },
                { name: 'Faisa Alfarel', role: 'UI/UX Designer', img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=300&q=80' },
                { name: 'Syaiful Ilham', role: 'Backend Engineer', img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=300&q=80' },
                { name: 'Muflih Al Rasyid', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=300&q=80' },
              ].map((member, idx) => (
                <div className="col-12 col-sm-6 col-md-3" key={idx}>
                  <div className="card border-0 shadow-sm text-center p-3 h-100">
                    <img 
                      src={member.img} 
                      className="rounded-circle mx-auto mt-3 shadow-sm" 
                      alt={member.name}
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                      <p className="card-text text-primary small mb-3">{member.role}</p>
                      <div className="d-flex justify-content-center gap-2">
                        <button className="btn btn-sm btn-outline-secondary rounded-circle"><i className="fa-brands fa-github"></i></button>
                        <button className="btn btn-sm btn-outline-primary rounded-circle"><i className="fa-brands fa-linkedin"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="py-5">
            <div className="row g-5">
              <div className="col-md-5">
                <h1 className="fw-bold mb-3">Hubungi Kami</h1>
                <p className="text-secondary">Punya pertanyaan seputar ketersediaan buku, pemesanan, atau kerja sama? Silakan kirimkan pesan kepada kami.</p>
                <div className="mt-4">
                  <p className="mb-2"><i className="fa-solid fa-location-dot text-primary me-2"></i> JL. DI Panjaitan Gg.Remaja 2, Cipinang Besar Utara, Jatinegara, Jakarta Timur</p>
                  <p className="mb-2"><i className="fa-solid fa-envelope text-primary me-2"></i> support@bookstore.id</p>
                  <p className="mb-2"><i className="fa-solid fa-phone text-primary me-2"></i> +62 812-3456-7890</p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card border-0 shadow-sm p-4">
                  <form onSubmit={(e) => { e.preventDefault(); alert('Pesan berhasil dikirim!'); }}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Nama Lengkap</label>
                      <input type="text" className="form-control" placeholder="Masukkan nama Anda" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email</label>
                      <input type="email" className="form-control" placeholder="nama@email.com" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Pesan</label>
                      <textarea className="form-control" rows="4" placeholder="Tuliskan pesan Anda di sini..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100">Kirim Pesan</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <button onClick={() => setActiveTab('home')} className="nav-link px-2 text-body-secondary border-0 bg-transparent">Home</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setActiveTab('book')} className="nav-link px-2 text-body-secondary border-0 bg-transparent">Book</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setActiveTab('team')} className="nav-link px-2 text-body-secondary border-0 bg-transparent">Team</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setActiveTab('contact')} className="nav-link px-2 text-body-secondary border-0 bg-transparent">Contact</button>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2026 NF Academy</p>
        </footer>
      </div>
    </>
  );
}

export default App;