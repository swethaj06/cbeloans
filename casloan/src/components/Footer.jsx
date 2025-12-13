import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-gray-300 py-16 w-full relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400 rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 px-4">
          {/* Company Info */}
          <div className="group hover-lift transition-smooth">
            <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-smooth flex items-center gap-2">
              <span className="text-3xl">🏦</span> CbeLOANS
            </h3>
            <p className="text-sm leading-relaxed mb-2">MaxDSA Business Services P Ltd</p>
            <p className="text-sm leading-relaxed mb-3">U82990TZ2025PTC035993</p>
            <p className="text-sm mt-3 leading-relaxed text-gray-400">Transforming how loans are discovered, compared, and disbursed.</p>
          </div>

          {/* Quick Links */}
          <div className="hover-lift transition-smooth">
            <h4 className="text-white font-bold mb-4 text-lg flex items-center gap-2">
              <span className="text-yellow-400">⚡</span> Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link></li>
              <li><Link to="/why-us" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
                Why Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
                Partners
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link></li>
            </ul>
          </div>

          {/* Loan Products */}
          <div className="hover-lift transition-smooth">
            <h4 className="text-white font-bold mb-4 text-lg flex items-center gap-2">
              <span className="text-yellow-400">💳</span> Loan Products
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home-loan" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
                Home Loans
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#personal-loan" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
                Personal Loans
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#car-loan" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
                Car Loans
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#emi-calculator" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
                EMI Calculator
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="group hover-lift transition-smooth">
            <h4 className="text-white font-bold mb-4 text-lg group-hover:text-yellow-400 transition-smooth flex items-center gap-2">
              <span className="text-yellow-400">📍</span> Contact Info
            </h4>
            <p className="text-sm mb-4 leading-relaxed">
              <strong className="text-gray-100 block mb-2">Head Office:</strong>
              4A, SreeVatsa Swagat Apartment,<br />
              Patel Road, Ram Nagar,<br />
              Coimbatore 641009
            </p>
            <p className="text-sm leading-relaxed">
              <strong className="text-gray-100 block mb-2">Branches:</strong>
              Chennai, Bangalore, Mumbai
            </p>
          </div>
        </div>

        <hr className="border-gray-700 my-8 opacity-50" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm px-4 gap-6">
          <p className="text-gray-400">&copy; 2025 CbeLOANS. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#privacy" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#terms" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
              Terms & Conditions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#disclaimer" className="text-gray-300 hover:text-yellow-400 transition-smooth font-medium relative group inline-block">
              Disclaimer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
