
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: '#',
      icon: '📸'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: '𝕏'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: '📺'
    },
    {
      name: 'Discord',
      url: '#',
      icon: '🎮'
    }
  ];

  const footerLinks = [
    {
      title: 'Game',
      links: [
        { name: 'Features', path: '/features' },
        { name: 'Screenshots', path: '/screenshots' },
        { name: 'Download', path: '/download' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Support', path: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
        { name: 'EULA', path: '#' }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <span>🍭</span>
              </div>
              <span className="footer-logo-text">Match Treasures</span>
            </Link>
            <p className="footer-description">
              A candy-popping, brain-tingling match-3 adventure that will keep you entertained for hours!
            </p>
            <div className="footer-cta">
              <Link to="/download" className="btn btn-primary">
                <span>📱</span>
                Get it on Google Play
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            {footerLinks.map((section) => (
              <div key={section.title} className="footer-section">
                <h4 className="footer-section-title">{section.title}</h4>
                <ul className="footer-section-links">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="footer-section-title">Follow Us</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
            <div className="footer-contact">
              <p>📧 support@mustplaygames.com</p>
              <p>🏢 Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Must Play Games. All rights reserved.
            </p>
            <p className="footer-tagline">
              Creating games that make people smile since 2014
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
