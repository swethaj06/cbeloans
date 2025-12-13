import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full opacity-10 translate-y-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center relative z-10 border border-gray-100 hover:shadow-3xl transition-smooth hover-lift">
        <div className="text-7xl mb-6 animate-bounce-slow">🎉</div>
        <h1 className="text-6xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">Welcome to CbeLOANS</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Your one-stop platform to find the perfect loan. Compare 150+ loan products from leading banks and NBFCs with zero commission.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-xl transition-smooth transform hover:scale-105 hover:shadow-lg shadow-md">
            Get Started 🚀
          </Link>
          <Link to="/products" className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-10 rounded-xl transition-smooth transform hover:scale-105 hover:shadow-lg border-2 border-blue-600 shadow-md">
            Explore Loans 🔍
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
