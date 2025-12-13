import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: 'Smart Investment',
      subtitle: 'Start Investing in Bonds Today',
      image: '💰',
      color: 'from-blue-600 via-blue-700 to-blue-800',
      points: ['Earn up to 13.25% returns*', 'Monthly/Quarterly interest payout'],
      cta: 'Start Investing',
      highlight: 'Up to 13.25%*'
    },
    {
      title: 'Home Loans',
      subtitle: 'Turn your dream into reality',
      image: '🏠',
      color: 'from-indigo-600 via-indigo-700 to-purple-800',
      points: ['Competitive interest rates', 'Flexible repayment tenure'],
      cta: 'Apply Now',
      highlight: 'From 8.5% p.a.*'
    },
    {
      title: 'Personal Loans',
      subtitle: 'Quick funds for your needs',
      image: '💳',
      color: 'from-cyan-600 via-teal-700 to-teal-800',
      points: ['Instant digital approval', 'Minimal documentation required'],
      cta: 'Get Started',
      highlight: 'Up to ₹25 Lakh'
    },
    {
      title: 'Business Loans',
      subtitle: 'Fuel your business growth',
      image: '📈',
      color: 'from-emerald-600 via-green-700 to-teal-800',
      points: ['Customized loan solutions', 'Quick disbursement process'],
      cta: 'Apply Now',
      highlight: 'Up to ₹50 Lakh'
    }
  ];

  // Auto-carousel effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 w-full py-20 md:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Side - Text Content and Features */}
          <div className="w-full md:w-[55%] z-10">
            <div className="mb-12">
              <p className="text-slate-600 text-base md:text-lg mb-4 font-semibold tracking-wide uppercase">India's Trusted Platform</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Loans, Cards &<br />
                Investments
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
                Your comprehensive financial partner for all banking and investment needs with expert guidance and competitive rates.
              </p>
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200/60 hover:border-blue-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1.5">One Stop for All</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">Complete financial solutions under one roof</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200/60 hover:border-yellow-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1.5">Quick & Easy</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">Seamless digital process, hassle-free experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Carousel Cards */}
          <div className="w-full md:w-[45%] z-10">
            <div className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${slides[currentSlide].color} rounded-3xl p-8 md:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-700 min-h-[420px] md:min-h-[450px] flex flex-col justify-between overflow-hidden`}>
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-tr-full"></div>
                
                {/* Top Content */}
                <div className="relative z-10">
                  {/* Highlight Badge */}
                  <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-sm font-bold">{slides[currentSlide].highlight}</span>
                  </div>

                  <div className="flex justify-between items-start mb-8">
                    <div className="flex-1 pr-4">
                      <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{slides[currentSlide].title}</h2>
                      <p className="text-white/95 text-base md:text-lg font-medium leading-relaxed">{slides[currentSlide].subtitle}</p>
                    </div>
                    <div className="text-6xl md:text-7xl transform transition-transform duration-500 hover:scale-110 hover:rotate-12 flex-shrink-0">
                      {slides[currentSlide].image}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-3.5 mb-8">
                    {slides[currentSlide].points.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm md:text-base text-white font-medium">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  to="/contact" 
                  onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} 
                  className="relative z-10 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 text-center inline-flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-fit group"
                >
                  <span>{slides[currentSlide].cta}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Progress bar */}
              <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${((currentSlide + 1) / slides.length) * 100}%`,
                    transition: isPaused ? 'width 0.3s ease' : 'width 5s linear'
                  }}
                ></div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center items-center gap-3 mt-5">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                      index === currentSlide 
                        ? 'bg-blue-600 w-3 h-3 shadow-lg scale-110' 
                        : 'bg-slate-300 w-2.5 h-2.5 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
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
