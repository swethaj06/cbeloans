import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 px-4">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">
              🏦 CbeLOANS
            </h4>
            <p className="text-sm leading-relaxed mb-6">
              India's trusted platform for loans, cards & investments. Compare 150+ products from leading banks.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-smooth">f</a>
              <a href="#" className="text-gray-400 hover:text-white transition-smooth">𝕏</a>
              <a href="#" className="text-gray-400 hover:text-white transition-smooth">in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-4 text-lg">Quick Links</h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-smooth">About Us</Link></li>
              <li><Link to="/why-us" className="text-gray-300 hover:text-white transition-smooth">Why Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-smooth">Products</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-smooth">Contact</Link></li>
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h5 className="text-white font-bold mb-4 text-lg">Our Loans</h5>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 hover:text-white transition-smooth cursor-pointer">Home Loans</li>
              <li className="text-gray-300 hover:text-white transition-smooth cursor-pointer">Personal Loans</li>
              <li className="text-gray-300 hover:text-white transition-smooth cursor-pointer">Car Loans</li>
              <li className="text-gray-300 hover:text-white transition-smooth cursor-pointer">Business Loans</li>
              <li className="text-gray-300 hover:text-white transition-smooth cursor-pointer">Education Loans</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-bold mb-4 text-lg">Contact Us</h5>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <p className="text-gray-300 hover:text-white transition-smooth cursor-pointer">support@cbeloans.com</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <p className="text-gray-300 hover:text-white transition-smooth cursor-pointer">+91-XXXX-XXXX-XXXX</p>
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
