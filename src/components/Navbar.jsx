
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/features', label: 'Features' },
    { path: '/screenshots', label: 'Screenshots' },
    { path: '/download', label: 'Download' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <span>🍭</span>
          </div>
          <span className="logo-text">Match Treasures</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.path} className="navbar-item">
              <Link
                to={link.path}
                className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar-item">
            <Link to="/download" className="btn btn-primary btn-sm">
              Get Game
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-mobile-menu">
            {navLinks.map((link) => (
              <li key={link.path} className="navbar-mobile-item">
                <Link
                  to={link.path}
                  className={`navbar-mobile-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="navbar-mobile-item">
              <Link
                to="/download"
                className="btn btn-primary"
                onClick={closeMenu}
              >
                Get Game
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
