import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const footerLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Partners', path: '/partners' }
  ];

  const components = [
    { label: 'Hero Section', path: '/#hero' },
    { label: 'Loan Cards', path: '/#loans' },
    { label: 'EMI Calculator', path: '/#emi' },
    { label: 'Offers', path: '/offers' },
    { label: 'Documents', path: '/documents' }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 w-full transition-smooth border-b border-gray-100">
      <div className="w-full">
        <div className="flex justify-between items-center h-16 px-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="CBE LOAN - Financial Solutions" className="h-14 group-hover:scale-[1.02] transition-all duration-300 drop-shadow-lg" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 items-center">
            {/* Home Link with Dropdown */}
            <div className="relative group">
              <Link to="/" className="px-4 py-2 text-gray-700 font-semibold relative hover:text-blue-600 transition-smooth flex items-center gap-1 rounded-lg hover:bg-blue-50">
                Home
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 border border-gray-100">
                {components.map((component, index) => (
                  <Link
                    key={index}
                    to={component.path}
                    className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-smooth font-medium text-sm relative group/item"
                  >
                    {component.label}
                    <span className="absolute bottom-3 left-4 w-0 h-0.5 bg-green-600 group-hover/item:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" className="px-4 py-2 text-gray-700 font-semibold relative group hover:text-blue-600 transition-smooth rounded-lg hover:bg-blue-50">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/why-us" className="px-4 py-2 text-gray-700 font-semibold relative group hover:text-blue-600 transition-smooth rounded-lg hover:bg-blue-50">
              Why Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/products" className="px-4 py-2 text-gray-700 font-semibold relative group hover:text-blue-600 transition-smooth rounded-lg hover:bg-blue-50">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="px-4 py-2 text-gray-700 font-semibold relative group hover:text-blue-600 transition-smooth rounded-lg hover:bg-blue-50">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <Link to="/contact" onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-300 text-center">
            Apply Now
          </Link>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden inline-flex items-center justify-center p-2 text-gray-700 hover:text-blue-600 transition-smooth rounded-lg hover:bg-blue-50">
            <svg className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-fadeInDown">
            {/* Mobile Home Dropdown */}
            <button
              onClick={toggleHomeDropdown}
              className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-smooth flex justify-between items-center"
            >
              Home
              <svg className={`w-4 h-4 transition-transform ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            
            {isHomeDropdownOpen && (
              <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium bg-blue-50" onClick={() => setIsOpen(false)}>
                Go to Home
              </Link>
            )}

            <Link to="/about" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-smooth" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/why-us" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-smooth" onClick={() => setIsOpen(false)}>Why Us</Link>
            <Link to="/products" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-smooth" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/contact" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-smooth" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/contact" onClick={() => { setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100); setIsOpen(false); }} className="block mx-3 mt-3 bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2.5 rounded-lg text-center hover:from-yellow-500 hover:to-yellow-600 font-bold transition-smooth shadow-lg hover-lift">
              Apply Now 🚀
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
