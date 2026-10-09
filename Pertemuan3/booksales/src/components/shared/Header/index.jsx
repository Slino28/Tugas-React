import React from 'react';
import { NavLink } from 'react-router-dom';

const menus = [
  { to: '/', label: 'Home' },
  { to: '/book', label: 'Book' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  return (
    <header
      className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-4 py-3 mb-4 sticky-top shadow-sm"
      style={{ backgroundColor: '#1c7ed6' }}
    >
      <div className="col-md-3 mb-2 mb-md-0">
        <NavLink to="/" className="d-inline-flex align-items-center text-white text-decoration-none">
          <i className="fa-solid fa-book fa-2x" style={{ color: '#a5d8ff' }}></i>
          <span className="ms-2 fs-4 fw-bold">BookStore</span>
        </NavLink>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {menus.map((menu) => (
          <li key={menu.to}>
            <NavLink
              to={menu.to}
              end={menu.to === '/'}
              className={({ isActive }) =>
                `nav-link px-2 ${isActive ? 'text-white fw-bold' : 'text-white-50'}`
              }
            >
              {menu.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="col-md-3 text-end">
        <NavLink to="/login" className="btn btn-outline-light me-2">Login</NavLink>
        <NavLink to="/register" className="btn btn-light" style={{ color: '#1c7ed6' }}>Register</NavLink>
      </div>
    </header>
  );
}

export default Header;