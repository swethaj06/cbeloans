import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import LoanCard from '../components/LoanCard';
import BenefitCard from '../components/BenefitCard';

export default function Home() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    if (r === 0) return Math.round(p / n);
    const emi = Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    return emi;
  };

  const emi = calculateEMI();
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - principal;

  const products = [
    { title: 'Home Loan', description: 'Long-term financing for purchasing, constructing, or renovating residential property with affordable EMIs and competitive rates.', icon: '🏠' },
    { title: 'Personal Loan', description: 'Quick financial support for medical expenses, travel, education, or debt consolidation with minimal documentation.', icon: '👤' },
    { title: 'Car Loan', description: 'Secured financing for purchasing new or used vehicles with easy EMIs and flexible repayment terms.', icon: '🚗' },
    { title: 'Used Car Loan', description: 'Convenient financing for pre-owned vehicles at affordable EMIs with quick processing.', icon: '🚙' },
    { title: 'Loan Against Property', description: 'Secured loan by pledging property as collateral with higher amounts and lower interest rates.', icon: '🏢' },
    { title: 'SME Loans', description: 'Business financing for Small and Medium Enterprises with flexible repayment and competitive rates.', icon: '🏭' },
  ];

  const benefits = [
    { icon: '💡', title: 'Free Expert Consultation', description: 'Personalized guidance from experienced banking professionals' },
    { icon: '📊', title: 'Compare Interest Rates', description: 'Compare rates of all banks at one stop' },
    { icon: '📈', title: 'Higher Eligibility', description: 'Higher loan eligibility with competitive rates' },
    { icon: '🤝', title: '150+ Partnerships', description: 'Partnerships with 150+ leading institutions' },
    { icon: '💰', title: 'Zero Commissions', description: 'No extra charges or hidden fees' },
    { icon: '⚡', title: 'Fully Digital', description: 'Seamless digital loan journey' },
  ];

  const documents = [
    { title: 'PAN Card', importance: 'Mandatory' },
    { title: 'Aadhar Card', importance: 'Mandatory' },
    { title: 'Bank Statements (6 months)', importance: 'Mandatory' },
    { title: 'Payslip (3 months)', importance: 'Mandatory' },
    { title: 'Appointment Order', importance: 'Important' },
    { title: 'Form 16 (2 years)', importance: 'Important' },
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Key Features */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center mb-4 px-4 animate-fadeInUp">Welcome to CbeLOANS</h2>
          <p className="text-lg text-center text-gray-600 mb-12 px-4 animate-fadeInUp">Your trusted partner in finding the perfect loan</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-smooth hover-lift group border border-gray-100">
              <div className="text-6xl mb-4 group-hover:animate-bounce-slow">🚀</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-smooth">Fast Approval</h3>
              <p className="text-gray-600 leading-relaxed">Get loan approval in as little as 24 hours with our streamlined process</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-smooth hover-lift group border border-gray-100">
              <div className="text-6xl mb-4 group-hover:animate-bounce-slow">🏦</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-smooth">150+ Partners</h3>
              <p className="text-gray-600 leading-relaxed">Access loans from leading banks and NBFCs across the country</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-smooth hover-lift group border border-gray-100">
              <div className="text-6xl mb-4 group-hover:animate-bounce-slow">💰</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-smooth">Zero Commission</h3>
              <p className="text-gray-600 leading-relaxed">No extra charges, completely free consultation and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section id="products" className="py-20 bg-white w-full">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4 px-4 animate-fadeInUp">Our Loan Products</h2>
          <p className="text-lg text-center text-gray-600 mb-12 px-4 animate-fadeInUp">Explore our wide range of loan products designed to meet every financial need</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {products.map((product, index) => (
              <div key={index} style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}>
                <LoanCard title={product.title} description={product.description} icon={product.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 w-full relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="w-full relative z-10">
          <div className="text-center mb-16 px-4">
            <div className="inline-block mb-4">
              <span className="text-yellow-400 text-lg font-bold uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp leading-tight">
              Why Apply Through <span className="bg-linear-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">CbeLOANS?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-2 animate-fadeInUp max-w-3xl mx-auto">300+ years of combined banking expertise dedicated to your financial success</p>
            <div className="h-1 w-24 bg-linear-to-r from-yellow-400 to-yellow-300 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }} className="group">
                <div className="bg-white/10 backdrop-blur-lg hover:bg-white/20 rounded-2xl p-8 h-full border border-white/20 transition-all duration-300 hover:border-yellow-400/50 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                  {/* Icon container */}
                  <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {benefit.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-smooth">{benefit.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{benefit.description}</p>
                  
                  {/* Bottom accent */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center text-yellow-400 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                      Learn more
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-20 px-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:border-yellow-400/50 transition-all group">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">150+</div>
              <p className="text-gray-300 text-lg">Banking Partners</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:border-yellow-400/50 transition-all group">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">24-48</div>
              <p className="text-gray-300 text-lg">Hour Approval</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:border-yellow-400/50 transition-all group">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">0%</div>
              <p className="text-gray-300 text-lg">Hidden Charges</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:border-yellow-400/50 transition-all group">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">100%</div>
              <p className="text-gray-300 text-lg">Digital Process</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16 px-4">
            <Link to="/contact" onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} className="inline-block bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-12 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              Start Your Loan Journey Now 🚀
            </Link>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section id="emi-calculator" className="py-20 bg-white w-full">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4 px-4 animate-fadeInUp">EMI Calculator</h2>
          <p className="text-lg text-center text-gray-600 mb-12 px-4 animate-fadeInUp">Calculate your monthly EMI and plan your finances</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
            <div className="bg-linear-to-br from-blue-50 to-gray-50 rounded-2xl shadow-xl p-10 border border-blue-100 hover-lift transition-smooth">
              <div className="mb-8">
                <label className="block text-gray-800 font-bold mb-3 text-lg">Loan Amount: <span className="text-yellow-600">₹{principal.toLocaleString()}</span></label>
                <input type="range" min="100000" max="10000000" step="100000" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer hover:bg-gray-400 transition-smooth" />
              </div>
              <div className="mb-8">
                <label className="block text-gray-800 font-bold mb-3 text-lg">Interest Rate: <span className="text-yellow-600">{rate.toFixed(2)}% p.a.</span></label>
                <input type="range" min="3" max="15" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer hover:bg-gray-400 transition-smooth" />
              </div>
              <div className="mb-8">
                <label className="block text-gray-800 font-bold mb-3 text-lg">Tenure: <span className="text-yellow-600">{tenure} Years</span></label>
                <input type="range" min="1" max="30" step="1" value={tenure} onChange={(e) => setTenure(e.target.value)} className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer hover:bg-gray-400 transition-smooth" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-yellow-400 to-yellow-500 text-gray-900 rounded-2xl shadow-2xl p-10 hover-lift transition-smooth group">
                <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-smooth">Your Monthly EMI</h3>
                <p className="text-6xl font-bold mb-3">₹{emi.toLocaleString()}</p>
                <p className="text-lg text-gray-800 font-semibold">Per Month</p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-smooth">
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Principal Amount:</span>
                    <span className="font-bold text-lg">₹{principal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Total Interest:</span>
                    <span className="font-bold text-lg text-red-600">₹{totalInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-lg text-gray-800">Total Amount Payable:</span>
                    <span className="font-bold text-lg text-blue-600">₹{totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="documents" className="py-20 bg-gray-50 w-full">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4 px-4 animate-fadeInUp">Document Checklist</h2>
          <p className="text-lg text-center text-gray-600 mb-12 px-4 animate-fadeInUp">Prepare these documents for a smooth loan application</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {documents.map((doc, index) => (
              <div key={index} style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }} className={`p-8 rounded-xl shadow-md hover:shadow-xl transition-smooth hover-lift border-l-4 ${doc.importance === 'Mandatory' ? 'bg-red-50 border-red-500' : 'bg-yellow-50 border-yellow-500'}`}>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-800 text-lg">{doc.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ml-2 ${doc.importance === 'Mandatory' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'}`}>
                    {doc.importance}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 px-4">
            <Link to="/documents" className="inline-block bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition-smooth shadow-lg hover-lift">
              View Complete Document List →
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section id="offers" className="py-20 bg-white w-full">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4 px-4 animate-fadeInUp">Special Offers</h2>
          <p className="text-lg text-center text-gray-600 mb-12 px-4 animate-fadeInUp">Limited time offers on various loan products</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-smooth group border border-gray-100">
              <div className="bg-linear-to-br from-blue-600 to-blue-800 text-white p-8 group-hover:from-blue-700 group-hover:to-blue-900 transition-smooth">
                <h3 className="text-2xl font-bold mb-3">Zero Processing Fee</h3>
                <p className="text-4xl font-bold">Save ₹10,000</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg font-semibold">Apply without any processing charges</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-smooth group border border-gray-100">
              <div className="bg-linear-to-br from-green-600 to-green-800 text-white p-8 group-hover:from-green-700 group-hover:to-green-900 transition-smooth">
                <h3 className="text-2xl font-bold mb-3">Special Home Loan Rates</h3>
                <p className="text-4xl font-bold">From 6.5% p.a.</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg font-semibold">Competitive rates with flexible tenure</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-smooth group border border-gray-100">
              <div className="bg-linear-to-br from-purple-600 to-purple-800 text-white p-8 group-hover:from-purple-700 group-hover:to-purple-900 transition-smooth">
                <h3 className="text-2xl font-bold mb-3">Quick Personal Loans</h3>
                <p className="text-4xl font-bold">Up to ₹40L</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg font-semibold">Approved in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Banks */}
      <section id="partners" className="py-20 bg-linear-to-b from-white to-gray-50 w-full">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4 px-4 animate-fadeInUp">Our Partner Banks</h2>
          <p className="text-lg text-center text-gray-600 mb-14 px-4 animate-fadeInUp">We work with 150+ leading financial institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
            {['SBI', 'ICICI', 'HDFC', 'AXIS', 'KOTAK', 'PNB', 'CANARA', 'IDBI', 'BAJAJ', 'L&T', 'SHRIRAM', 'CHOLA'].map((bank, index) => (
              <div key={index} style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.05}s both` }} className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-2xl hover:border-blue-400 transition-smooth hover-lift group">
                <div className="text-center">
                  <div className="bg-linear-to-br from-blue-50 to-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:from-blue-100 group-hover:to-blue-50 transition-smooth">
                    <span className="font-bold text-sm text-gray-700 group-hover:text-blue-600">{bank}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 text-white w-full relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full opacity-5 translate-y-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="w-full text-center px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 animate-fadeInUp">Apply now and get your loan approved in 24-48 hours</p>
          <Link to="/contact" onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} className="inline-block bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-12 py-5 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-smooth font-bold text-xl shadow-2xl hover:shadow-3xl hover-lift">
            Apply for a Loan Now 🚀
          </Link>
        </div>
      </section>
    </div>
  );
}
