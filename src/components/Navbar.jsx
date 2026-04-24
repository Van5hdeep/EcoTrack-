import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Drives', path: '/drives' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Stories', path: '/stories' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-eco-green-100 p-2 rounded-xl group-hover:bg-eco-green-200 transition-colors">
                <Leaf className="h-6 w-6 text-eco-green-600" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">
                Eco<span className="text-eco-green-600">Track</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-eco-green-600 ${
                  isActive(link.path) ? 'text-eco-green-600' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-eco-green-500/30 hover:shadow-eco-green-500/50 hover:-translate-y-0.5">
              Join Movement
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-eco-green-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-xl text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-eco-green-50 text-eco-green-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full bg-eco-green-500 hover:bg-eco-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-eco-green-500/30">
                Join Movement
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
