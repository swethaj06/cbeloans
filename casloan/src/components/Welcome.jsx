import { Link } from 'react-router-dom';
function Welcome() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-40 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">India's Trusted Loan Platform</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Find Your Perfect <span className="text-blue-600">Loan</span> Here
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
          Compare 150+ Loan Products from Leading Banks
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
          Get personalized loan recommendations, compare interest rates, and apply with zero commission. Fast approval in 24-48 hours.
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Quick & Easy</h3>
            <p className="text-gray-600 text-sm">Apply in minutes, get approved in 24-48 hours</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-bold text-gray-900 mb-2">Compare & Save</h3>
            <p className="text-gray-600 text-sm">Get the best rates from 150+ lenders at one place</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-bold text-gray-900 mb-2">Safe & Secure</h3>
            <p className="text-gray-600 text-sm">ISO certified with industry-best security controls</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg shadow-md text-lg">
            Apply for Loan Now
          </Link>
          <Link to="/emi-calculator" className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg border-2 border-blue-600 shadow-md text-lg">
            Calculate EMI
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-gray-600 mb-6 font-medium">Trusted by</p>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">100K+</div>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">₹10K Cr+</div>
              <p className="text-gray-600 text-sm">Loans Disbursed</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">4.8★</div>
              <p className="text-gray-600 text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
