import React from 'react';

function Grid({ books = [], activeTab, setActiveTab }) {
  return (
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
  );
}

export default Grid;