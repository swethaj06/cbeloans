export default function AboutUs() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-800 text-white w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 animate-float"></div>
        <div className="w-full px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fadeInUp">About CbeLOANS</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl animate-fadeInUp">
              Your trusted partner in simplifying financial journeys
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slideInLeft">
                <h2 className="text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Welcome to <span className="text-blue-600 font-bold">Cbeloans.com</span>, a trusted digital marketplace designed to connect customers with the right loan solutions—quickly, transparently, and effortlessly.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  We deliver intelligent financial solutions that simplify, streamline, and accelerate every step of the loan journey—ensuring a transparent, seamless, and hassle-free experience.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We understand that every financial need is unique. Whether it's a home loan, business loan, loan against property, or personal loan, our platform brings together multiple lenders and expert guidance to help you make informed decisions.
                </p>
              </div>
              <div className="animate-slideInRight">
                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-12 shadow-xl hover-lift transition-smooth">
                  <div className="text-7xl mb-6">💼</div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-4">300+ Years</h3>
                  <p className="text-xl text-gray-700">of collective banking expertise from our founders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-linear-to-b from-blue-50 to-white w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-linear-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-2xl p-12 text-center text-gray-900 hover-lift transition-smooth">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-4xl font-bold mb-4">Our Transformation</h2>
              <p className="text-xl font-semibold max-w-3xl mx-auto">
                Cbeloans.com is transforming how loans are discovered, compared, and disbursed—redefining the future of intelligent lending in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-6 animate-fadeInUp">Our Core Focus Areas</h2>
            <p className="text-xl text-center text-gray-600 mb-16 animate-fadeInUp">Everything we do is centered around your success</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }} className="bg-linear-to-br from-blue-50 to-blue-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover-lift border-l-4 border-blue-600">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Smart Lead Sourcing</h3>
                <p className="text-gray-700 leading-relaxed">We bring high-quality, verified loan leads to lenders while offering customers a seamless way to explore the best financing options.</p>
              </div>
              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }} className="bg-linear-to-br from-green-50 to-green-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover-lift border-l-4 border-green-600">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold text-green-900 mb-3">Transparent Experience</h3>
                <p className="text-gray-700 leading-relaxed">Our platform is built to deliver clarity—clear comparisons, clear documentation guidance, and clear next steps.</p>
              </div>
              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }} className="bg-linear-to-br from-purple-50 to-purple-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover-lift border-l-4 border-purple-600">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-purple-900 mb-3">Faster Approvals</h3>
                <p className="text-gray-700 leading-relaxed">Through digital tools and partnerships with leading Banks and NBFCs, we ensure quicker turnaround times and smooth processing.</p>
              </div>
              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }} className="bg-linear-to-br from-orange-50 to-orange-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover-lift border-l-4 border-orange-600">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-orange-900 mb-3">24/7 Support</h3>
                <p className="text-gray-700 leading-relaxed">Our loan consultants assist borrowers at every stage—from eligibility checks to documentation and disbursal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-linear-to-b from-white to-gray-50 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 animate-fadeInUp">Vision & Mission</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="animate-slideInLeft bg-linear-to-br from-blue-600 to-blue-800 text-white p-12 rounded-2xl shadow-xl hover-lift transition-smooth">
                <div className="text-6xl mb-6">👁️</div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To become India's most reliable and transparent loan discovery platform, empowering both borrowers and financial institutions with seamless connectivity and trust.
                </p>
              </div>
              <div className="animate-slideInRight bg-linear-to-br from-green-600 to-green-800 text-white p-12 rounded-2xl shadow-xl hover-lift transition-smooth">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To make borrowing simple, digital, and stress-free while enabling lenders to reach genuine customers more efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-linear-to-br from-blue-50 via-white to-purple-50 p-12 rounded-2xl shadow-xl border border-blue-100">
              <h2 className="text-4xl font-bold text-gray-900 mb-3 animate-fadeInUp">MaxDSA Business Services P Ltd</h2>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-16 bg-linear-to-r from-yellow-400 to-yellow-500"></div>
                <p className="text-xl text-blue-600 font-bold">Transforming Financial Services</p>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-blue-600">Registration:</strong> U82990TZ2025PTC035993
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                MaxDSA Business Services Private Limited has been founded by a group of visionary banking professionals with a collective experience of over <span className="text-yellow-600 font-bold">300 man years</span> in the industry. With a mission to deliver world-class services to Banking Channel partners, MaxDSA is committed to redefining the way DSAs operate.
              </p>
              
              <div className="bg-white rounded-xl p-8 border-l-4 border-yellow-400">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over a decade of expertise in the retail loan distribution business, the group has proudly served more than <span className="font-bold text-blue-600">250 SME customers</span>, facilitating successful transactions exceeding <span className="font-bold text-green-600">₹500 crore</span>. MaxDSA Business Services P Ltd is a preferred professional Channel Partner for most of the Nationalised Banks, Private Banks, NBFCs and Fintech Companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
