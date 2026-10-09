function Footer({ activeTab, setActiveTab }) {
    return (
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
    );
}

export default Footer;