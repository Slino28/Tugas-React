import React from 'react';

function Contact() {
  return (
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
  );
}

export default Contact;