import { useState } from 'react';

export default function AboutUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const focusAreas = [
    {
      icon: '🎯',
      title: 'Smart Lead Sourcing',
      description: 'We bring high-quality, verified loan leads to lenders while offering customers a seamless way to explore the best financing options.',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: '✨',
      title: 'Transparent Experience',
      description: 'Our platform is built to deliver clarity—clear comparisons, clear documentation guidance, and clear next steps.',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: '⚡',
      title: 'Faster Approvals',
      description: 'Through digital tools and partnerships with leading Banks and NBFCs, we ensure quicker turnaround times and smooth processing.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Our loan consultants assist borrowers at every stage—from eligibility checks to documentation and disbursal.',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <div className="w-full bg-linear-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-b from-blue-50 to-white text-gray-900 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="w-full px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest mb-4 animate-fadeInUp">About Our Company</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight animate-fadeInUp">
              Transforming Loans with <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Trust & Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Your trusted partner in simplifying financial journeys
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeInUp">
              <div>
                <span className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest mb-4">Who We Are</span>
                <h2 className="text-5xl font-black text-gray-900 mb-8 leading-tight">
                  Simplifying Loans with <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Trust</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Welcome to <span className="text-blue-600 font-bold text-xl">Cbeloans.com</span>, a trusted digital marketplace designed to connect customers with the right loan solutions—quickly, transparently, and effortlessly.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We deliver intelligent financial solutions that simplify, streamline, and accelerate every step of the loan journey—ensuring a transparent, seamless, and hassle-free experience.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We understand that every financial need is unique. Whether it's a home loan, business loan, loan against property, or personal loan, our platform brings together multiple lenders and expert guidance.
                  </p>
                </div>
              </div>
              <div className="animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 -translate-y-2">
                  <div className="text-8xl mb-6">💼</div>
                  <h3 className="text-4xl font-black text-white mb-4">300+</h3>
                  <p className="text-xl text-blue-100">Years of collective banking expertise from our founders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <span className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest mb-4">Our Approach</span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Core <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Focus Areas</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything we do is centered around your success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group animate-fadeInUp"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 transition-all duration-500 h-full flex flex-col hover:border-transparent ${hoveredCard === index ? 'transform scale-105 -translate-y-3 shadow-2xl' : ''}`}>
                    {/* Top Gradient Bar */}
                    <div className={`h-1.5 bg-linear-to-r ${area.color} transition-all duration-500`}></div>

                    {/* Icon Section */}
                    <div className="px-8 pt-10 pb-6 flex justify-center">
                      <div className={`bg-linear-to-br ${area.color} rounded-3xl w-24 h-24 flex items-center justify-center shadow-lg transition-all duration-500 ${hoveredCard === index ? 'scale-125 shadow-2xl' : ''}`}>
                        <span className={`text-6xl transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`}>{area.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-8 flex-1 flex flex-col items-center text-center">
                      <h3 className={`text-xl font-black mb-4 transition-all duration-500 leading-tight ${hoveredCard === index ? `bg-linear-to-r ${area.color} bg-clip-text text-transparent` : 'text-gray-900'}`}>
                        {area.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed grow group-hover:text-gray-700 transition-colors duration-300">
                        {area.description}
                      </p>

                      {/* Bottom Accent */}
                      <div className={`h-1.5 bg-linear-to-r ${area.color} rounded-full mt-6 transition-all duration-500 ${hoveredCard === index ? 'w-16' : 'w-8'}`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center text-gray-900 mb-16 animate-fadeInUp">
              Vision & <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mission</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="animate-slideInLeft group">
                <div className="bg-linear-to-br from-blue-600 to-blue-800 text-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="text-8xl mb-6 group-hover:scale-110 transition-transform">👁️</div>
                  <h3 className="text-3xl font-black mb-6">Our Vision</h3>
                  <p className="text-lg leading-relaxed text-blue-100">
                    To become India's most reliable and transparent loan discovery platform, empowering both borrowers and financial institutions with seamless connectivity and trust.
                  </p>
                </div>
              </div>
              <div className="animate-slideInRight group" style={{ animationDelay: '0.2s' }}>
                <div className="bg-linear-to-br from-indigo-600 to-indigo-800 text-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="text-8xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
                  <h3 className="text-3xl font-black mb-6">Our Mission</h3>
                  <p className="text-lg leading-relaxed text-indigo-100">
                    To make borrowing simple, digital, and stress-free while enabling lenders to reach genuine customers more efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-linear-to-br from-blue-50 via-white to-indigo-50 p-12 rounded-3xl shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 animate-fadeInUp">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1.5 w-20 bg-linear-to-r from-blue-600 to-indigo-600"></div>
                <h2 className="text-4xl font-black text-gray-900">MaxDSA Business Services</h2>
              </div>
              <p className="text-xl text-blue-600 font-bold mb-8">Transforming Financial Services</p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-blue-600">Registration:</strong> U82990TZ2025PTC035993
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                MaxDSA Business Services Private Limited has been founded by a group of visionary banking professionals with a collective experience of over <span className="text-blue-600 font-bold">300 man years</span> in the industry. With a mission to deliver world-class services to Banking Channel partners, MaxDSA is committed to redefining the way DSAs operate.
              </p>
              
              <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white border-l-4 border-white">
                <p className="text-lg leading-relaxed">
                  With over a decade of expertise in the retail loan distribution business, the group has proudly served more than <span className="font-bold">250 SME customers</span>, facilitating successful transactions exceeding <span className="font-bold">₹500 crore</span>. MaxDSA Business Services P Ltd is a preferred professional Channel Partner for most of the Nationalised Banks, Private Banks, NBFCs and Fintech Companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
