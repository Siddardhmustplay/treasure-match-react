
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-purple-900 font-bold text-sm">MT</span>
            </div>
            <span className="text-white font-bold text-xl">Match Treasures</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white hover:text-yellow-300 transition-colors font-medium ${
                  isActive(item.path) ? 'text-yellow-300' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/download"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-300 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Link>
              <Link
                to="/contact"
                className="border border-white/30 text-white px-4 py-2 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-white hover:text-yellow-300 transition-colors font-medium ${
                    isActive(item.path) ? 'text-yellow-300' : ''
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
