import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Home Loans',
      subtitle: 'Own your dream home at the best rates',
      image: '🏠',
      color: 'from-blue-500 to-blue-700',
      stats: '25+ Lenders'
    },
    {
      title: 'Personal Loans',
      subtitle: 'Fast cash for your immediate needs',
      image: '💳',
      color: 'from-purple-500 to-purple-700',
      stats: '30+ Lenders'
    },
    {
      title: 'Car Loans',
      subtitle: 'Drive your favorite car today',
      image: '🚗',
      color: 'from-indigo-500 to-indigo-700',
      stats: '20+ Lenders'
    },
    {
      title: 'Business Loans',
      subtitle: 'Grow your business with ease',
      image: '📈',
      color: 'from-teal-500 to-teal-700',
      stats: '35+ Lenders'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-800 py-24 w-full relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full opacity-15 translate-y-1/2 -translate-x-1/2 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-yellow-500 rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="w-full px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 animate-slideInLeft">
            <div className="mb-6">
              <span className="inline-block text-yellow-400 text-lg font-bold uppercase tracking-widest animate-fadeInUp" style={{animationDelay: '0.1s'}}>Find the perfect loan</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-white leading-tight animate-slideInLeft" style={{animationDelay: '0.2s'}}>
              Get Instant <span className="bg-linear-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Loan Approval</span>
            </h1>
            <p className="text-lg md:text-xl mb-3 text-gray-300 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              Compare loans from <span className="text-yellow-400 font-bold">150+ leading banks</span> and NBFCs
            </p>
            <p className="text-base md:text-lg mb-10 text-gray-400 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              ✓ Fast approval in 24-48 hours | ✓ Transparent process | ✓ Zero commissions | ✓ 100% digital
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
              <Link to="/contact" onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} className="bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-center text-lg transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <span>Apply Now</span>
                <span className="group-hover:translate-x-1 transition-transform">🚀</span>
              </Link>
              <Link to="/emi-calculator" className="bg-white/20 backdrop-blur-lg border-2 border-white/40 text-white hover:bg-white/30 hover:border-yellow-400/60 px-10 py-4 rounded-xl font-bold transition-all duration-300 text-center text-lg transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <span>Calculate EMI</span>
                <span className="group-hover:rotate-12 transition-transform">📊</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 mt-12 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-yellow-400">150+</div>
                <div className="text-xs text-gray-400">Banks & NBFCs</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-yellow-400">100K+</div>
                <div className="text-xs text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-yellow-400">24-48H</div>
                <div className="text-xs text-gray-400">Approval Time</div>
              </div>
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="w-full md:w-1/2 animate-slideInRight" style={{animationDelay: '0.3s'}}>
            <div className="relative perspective">
              {/* Carousel Container */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-smooth hover-lift border-2 border-white/20">
                <div className={`bg-linear-to-br ${slides[currentSlide].color} p-16 text-center transition-all duration-700 ease-out relative overflow-hidden min-h-96 flex flex-col items-center justify-center`}>
                  {/* Grid pattern background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)',
                      backgroundSize: '40px 40px',
                      backgroundPosition: '0 0, 20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Emoji with animation */}
                  <div className="text-9xl mb-8 relative z-10 transform transition-all duration-700 animate-bounce-slow hover:scale-125" 
                    style={{
                      animation: 'slideInUp 0.8s ease-out, bounce-slow 3s ease-in-out infinite',
                      animationDelay: '0s, 0.8s'
                    }}>
                    {slides[currentSlide].image}
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-5xl font-bold text-white mb-3 relative z-10 transition-all duration-700 animate-slideInLeft" 
                    style={{animationDelay: '0.2s'}}>
                    {slides[currentSlide].title}
                  </h2>
                  
                  {/* Subtitle */}
                  <p className="text-white text-xl mb-6 relative z-10 transition-all duration-700 animate-fadeInUp"
                    style={{animationDelay: '0.3s'}}>
                    {slides[currentSlide].subtitle}
                  </p>

                  {/* Stats badge */}
                  <div className="bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 text-white font-semibold text-sm border border-white/30 relative z-10 animate-fadeInUp"
                    style={{animationDelay: '0.4s'}}>
                    {slides[currentSlide].stats}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 p-5 rounded-full font-bold transition-all duration-300 text-2xl hover:shadow-2xl hover:scale-125 shadow-xl transform hover:-translate-y-1 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform inline-block">❮</span>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 p-5 rounded-full font-bold transition-all duration-300 text-2xl hover:shadow-2xl hover:scale-125 shadow-xl transform hover:-translate-y-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform inline-block">❯</span>
              </button>

              {/* Dots Indicator with animation */}
              <div className="flex justify-center gap-3 mt-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all duration-300 hover:scale-125 transform ${
                      index === currentSlide 
                        ? 'bg-linear-to-r from-yellow-400 to-yellow-500 w-12 h-4 shadow-lg animate-pulse' 
                        : 'bg-gray-400/40 w-4 h-4 hover:bg-gray-400/60'
                    }`}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <div className="text-center mt-6 text-white/60 text-sm font-semibold">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
