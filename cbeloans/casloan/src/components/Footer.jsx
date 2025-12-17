import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo-light.svg';

export default function Footer() {
  const navigate = useNavigate();

  // Scroll to top and navigate for quick links
  const handleQuickLink = (to) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(to);
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 px-4">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="CBE LOAN - Financial Solutions" className="h-16 mb-4" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              India's trusted platform for loans, cards & investments. Compare 150+ products from leading banks.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/yuvapadmanabhan/" target="_blank" rel="noopener noreferrer" className="group relative text-gray-400 hover:text-white transition-smooth rounded-full bg-gray-800 p-2 shadow-lg hover:bg-blue-700" aria-label="LinkedIn 1">
                <span className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-90 group-hover:blur-lg" style={{background: 'radial-gradient(circle, #0a66c2 0%, #1e293b 80%)'}}></span>
                <svg className="relative z-10" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.25h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.354c.417-.646 1.18-1.354 2.25-1.354 1.933 0 3.5 1.567 3.5 3.5v6.5z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/arun-kumar-manickam-b7476150/" target="_blank" rel="noopener noreferrer" className="group relative text-gray-400 hover:text-white transition-smooth rounded-full bg-gray-800 p-2 shadow-lg hover:bg-blue-700" aria-label="LinkedIn 2">
                <span className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-90 group-hover:blur-lg" style={{background: 'radial-gradient(circle, #0a66c2 0%, #1e293b 80%)'}}></span>
                <svg className="relative z-10" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.25h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.354c.417-.646 1.18-1.354 2.25-1.354 1.933 0 3.5 1.567 3.5 3.5v6.5z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-4 text-lg">Quick Links</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleQuickLink('/about')}
                  className="text-gray-300 hover:text-white transition-smooth bg-transparent border-none p-0 m-0 cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('/why-us')}
                  className="text-gray-300 hover:text-white transition-smooth bg-transparent border-none p-0 m-0 cursor-pointer"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('/products')}
                  className="text-gray-300 hover:text-white transition-smooth bg-transparent border-none p-0 m-0 cursor-pointer"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('/contact')}
                  className="text-gray-300 hover:text-white transition-smooth bg-transparent border-none p-0 m-0 cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h5 className="text-white font-bold mb-4 text-lg">Our Loans</h5>
            <ul className="space-y-2 text-sm">
              {['Home Loans', 'Personal Loans', 'Car Loans', 'Business Loans', 'Education Loans'].map((loan, idx) => (
                <li key={loan}>
                  <button
                    onClick={() => handleQuickLink('/products')}
                    className="text-gray-300 hover:text-white transition-smooth bg-transparent border-none p-0 m-0 cursor-pointer"
                  >
                    {loan}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-bold mb-4 text-lg">Contact Us</h5>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <p className="text-gray-300 hover:text-white transition-smooth cursor-pointer">cbeloans25@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <p className="text-gray-300 hover:text-white transition-smooth cursor-pointer">+91 9003912395</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Hours</p>
                <p className="text-gray-300">9 AM - 9 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-8 mx-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 gap-6 text-sm">
          <div className="text-gray-400">
            <p>&copy; 2025 CbeLOANS. All rights reserved.</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-gray-400">
              Built By <a href="https://cubeaisolutions.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-smooth font-semibold">CubeAI Solutions</a>
            </p>
          </div>
          <div className="flex gap-8">
            <Link to="#" className="text-gray-400 hover:text-white transition-smooth">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-smooth">Terms & Conditions</Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-smooth">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
