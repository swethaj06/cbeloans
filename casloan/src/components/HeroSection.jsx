import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Earn up to 13.25%*',
      subtitle: 'Start Investing in Bonds Today',
      image: '💰',
      color: 'from-blue-700 to-blue-900',
      points: ['Invest as low as ₹1,000', 'Interest paid monthly/quarterly'],
      cta: 'Invest Now'
    },
    {
      title: 'Home Loans',
      subtitle: 'Own your dream home',
      image: '🏠',
      color: 'from-indigo-700 to-indigo-900',
      points: ['Loans up to ₹1 Cr', 'Flexible tenure options'],
      cta: 'Apply Now'
    },
    {
      title: 'Personal Loans',
      subtitle: 'Fast cash instantly',
      image: '💳',
      color: 'from-cyan-700 to-cyan-900',
      points: ['Instant approval', 'Minimal documentation'],
      cta: 'Apply Now'
    },
    {
      title: 'Business Loans',
      subtitle: 'Grow your business',
      image: '📈',
      color: 'from-teal-700 to-teal-900',
      points: ['Up to ₹50 Lakh', 'Quick processing'],
      cta: 'Apply Now'
    }
  ];

  return (
    <div className="bg-linear-to-b from-blue-50 to-white w-full py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Text Content and Features */}
          <div className="w-full md:w-3/5">
            <div className="mb-8">
              <p className="text-gray-600 text-lg mb-2">India's best platform for</p>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                Loans, Cards & Investments
              </h1>
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                    <span className="text-xl">📊</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">One Stop for all</h3>
                  <p className="text-gray-600 text-sm">Financial Solutions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                    <span className="text-xl">⚡</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Quick, easy &</h3>
                  <p className="text-gray-600 text-sm">hassle free</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Carousel Cards */}
          <div className="w-full md:w-2/5">
            <div className="relative">
              {/* Card */}
              <div className={`bg-linear-to-br ${slides[currentSlide].color} rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-700 min-h-80 flex flex-col justify-between`}>
                {/* Top Content */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
                      <p className="text-white/90 text-base">{slides[currentSlide].subtitle}</p>
                    </div>
                    <div className="text-6xl">{slides[currentSlide].image}</div>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-6">
                    {slides[currentSlide].points.map((point, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                        <span>•</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link to="/contact" onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition-all duration-300 text-center inline-block w-fit">
                  {slides[currentSlide].cta} →
                </Link>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentSlide 
                        ? 'bg-blue-600 w-3 h-3' 
                        : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
