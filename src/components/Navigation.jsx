
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/screenshots', label: 'Screenshots' },
    { path: '/about', label: 'About' },
    { path: '/download', label: 'Download' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 treasure-gradient rounded-lg flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform">
              <span className="text-purple-900 font-bold text-lg">🍭</span>
            </div>
            <span className="text-white font-bold text-xl text-candy group-hover:scale-105 transition-transform">Match Treasures</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white hover:text-yellow-300 transition-all duration-300 font-medium relative group ${
                  isActive(item.path) ? 'text-yellow-300' : ''
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* Enhanced CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/download"
                className="btn-candy text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center shadow-lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Link>
              <Link
                to="/contact"
                className="glass-card border border-white/30 text-white px-6 py-2 rounded-full font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 glass-card-dark rounded-b-2xl mt-2">
            <div className="flex flex-col space-y-4 stagger-animation">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-white hover:text-yellow-300 transition-colors font-medium p-2 rounded-lg hover:bg-white/10 ${
                    isActive(item.path) ? 'text-yellow-300 bg-white/10' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
