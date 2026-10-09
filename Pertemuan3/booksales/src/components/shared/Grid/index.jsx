import React, { useState } from 'react';

function Grid({ books = [] }) {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <div className="card shadow-sm h-100 border-0">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold">{book.title}</h5>
                    <p className="card-text text-secondary fs-6">{book.description}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <small className="text-body-secondary">
                      {book.author} &bull; {book.year}
                    </small>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => setSelectedBook(book)}
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pop-up detail buku */}
        {selectedBook && (
          <>
            <div
              className="modal fade show d-block"
              tabIndex="-1"
              role="dialog"
              onClick={() => setSelectedBook(null)}
            >
              <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content border-0 shadow">
                  <div className="modal-header">
                    <h5 className="modal-title fw-bold">{selectedBook.title}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Tutup"
                      onClick={() => setSelectedBook(null)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    {selectedBook.image && (
                      <img
                        src={selectedBook.image}
                        alt={selectedBook.title}
                        className="img-fluid rounded mb-3 w-100"
                        style={{ maxHeight: '240px', objectFit: 'cover' }}
                      />
                    )}
                    <p className="text-secondary mb-2">oleh {selectedBook.author}</p>
                    <span className="badge text-bg-primary mb-3">Terbit {selectedBook.year}</span>
                    <p className="mb-0">{selectedBook.description}</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setSelectedBook(null)}
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default Grid;
