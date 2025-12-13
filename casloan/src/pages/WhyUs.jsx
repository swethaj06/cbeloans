import { useState } from 'react';

export default function WhyUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '💡',
      title: 'Free Expert Loan Consultation',
      description: 'Get personalized guidance from our experienced banking professionals',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: '📊',
      title: 'Compare Interest Rates',
      description: 'Compare the Interest Rates of all Banks at one stop',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '📈',
      title: 'Higher Eligibility',
      description: 'Higher loan eligibility with competitive interest rates',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '🎯',
      title: 'Understand Your Needs',
      description: 'Complete focus on understanding your specific loan requirements',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '🤝',
      title: '150+ Partnerships',
      description: 'Partnerships with 150+ leading Financial Institutions',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: '⚙️',
      title: 'Customized Solutions',
      description: 'Customized, tailor-made financial solutions for your needs',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: '📋',
      title: 'Documentation Support',
      description: 'Assistance with end-to-end loan documentation',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: '🎁',
      title: 'Exclusive Offers',
      description: 'Access to exclusive offers and deals',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: '💰',
      title: 'Zero Commissions',
      description: 'Zero commissions — no extra charges',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: '👥',
      title: 'After-Sales Support',
      description: 'Dedicated after-sales support throughout your loan journey',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: '📍',
      title: 'Local Experts',
      description: 'Local experts always available in your city',
      color: 'from-lime-400 to-lime-600'
    },
    {
      icon: '🌐',
      title: 'One-Stop Solution',
      description: 'One-stop access to all major Financial Institutions',
      color: 'from-violet-400 to-violet-600'
    },
    {
      icon: '⚡',
      title: 'Fully Digital',
      description: 'Seamless and fully digital loan journey',
      color: 'from-sky-400 to-sky-600'
    }
  ];

  const stats = [
    { number: '300+', label: 'Years of Experience' },
    { number: '150+', label: 'Partner Institutions' },
    { number: '100K+', label: 'Happy Customers' },
    { number: '₹10K Cr+', label: 'Loans Disbursed' }
  ];

  return (
    <div className="bg-linear-to-b from-blue-50 via-white to-blue-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest mb-4">Why Choose Us</span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Why Apply Through <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CBE LOANS?</span>
          </h1>
        </div>

        {/* About Section */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 mb-20 shadow-2xl animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="text-center text-white">
            <p className="text-xl mb-6 leading-relaxed">
              We are a team of highly experienced banking professionals with more than <span className="font-bold text-2xl">300 years of experience</span> committed to guiding customers through their entire loan journey with trust, confidence, and professionalism.
            </p>
            <p className="text-lg text-white/90">
              These values form the core reasons why customers choose to apply through us.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fadeInUp" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-white/80 font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <h2 className="text-4xl font-black text-gray-900 mb-12 text-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          Our <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Key Benefits</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group animate-fadeInUp"
              style={{ animationDelay: `${0.4 + index * 0.05}s` }}
            >
              <div className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 transition-all duration-500 h-full flex flex-col hover:border-transparent ${hoveredCard === index ? 'transform scale-105 -translate-y-3 shadow-2xl' : ''}`}>
                {/* Top Gradient Bar */}
                <div className={`h-1 bg-linear-to-r ${benefit.color} transition-all duration-500`}></div>

                {/* Icon Section - Top Centered */}
                <div className="px-8 pt-10 pb-6 flex justify-center">
                  <div className={`bg-linear-to-br ${benefit.color} rounded-3xl w-24 h-24 flex items-center justify-center shadow-lg transition-all duration-500 ${hoveredCard === index ? 'scale-125 shadow-2xl' : ''}`}>
                    <span className={`text-6xl transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`}>{benefit.icon}</span>
                  </div>
                </div>

                {/* Content Section - Center Aligned */}
                <div className="px-8 pb-8 flex-1 flex flex-col items-center text-center">
                  <h3 className={`text-xl font-black mb-4 transition-all duration-500 leading-tight ${hoveredCard === index ? `bg-linear-to-r ${benefit.color} bg-clip-text text-transparent` : 'text-gray-900'}`}>
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed grow group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`h-1.5 bg-linear-to-r ${benefit.color} rounded-full mt-6 transition-all duration-500 ${hoveredCard === index ? 'w-16' : 'w-8'}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
          <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Find Your Perfect Loan?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Apply now and experience the difference of working with India's most trusted loan platform
            </p>
            <a href="/contact" onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
