function Section(activeTab, setActiveTab) { 
    return (
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
    );
}
 export default Section;