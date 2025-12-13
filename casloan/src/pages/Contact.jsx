import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    productType: '',
    loanAmount: '',
    city: '',
    employmentType: ''
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! Our loan expert will contact you shortly.');
    setFormData({
      name: '',
      mobileNumber: '',
      productType: '',
      loanAmount: '',
      city: '',
      employmentType: ''
    });
  };

  const contactMethods = [
    {
      icon: '📍',
      title: 'Head Office',
      details: ['4A, SreeVatsa Swagat Apartment,', 'Patel Road, Ram Nagar,', 'Coimbatore 641009'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: '📱',
      title: 'Phone',
      details: ['+91-XXX-XXXX-XXXX', 'Monday to Friday', '9:00 AM to 6:00 PM IST'],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['info@cbeloans.com', 'Response within 24 hours', 'Available 24/7'],
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const faqs = [
    { q: 'How long does approval take?', a: 'Most loans are approved within 24-48 hours. It depends on the lender and document verification process.' },
    { q: 'Is there any processing fee?', a: 'No! We don\'t charge any commission or processing fee. Completely free consultation and guidance.' },
    { q: 'What documents do I need?', a: 'PAN, Aadhar, Bank statements (6 months), and Income proof are typically required. Requirements may vary by lender.' },
    { q: 'Can I check my eligibility?', a: 'Yes! Our experts can help determine your eligibility based on income, credit score, and loan requirements.' }
  ];

  return (
    <div className="w-full bg-linear-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-b from-blue-50 to-white text-gray-900 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="w-full px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest mb-4 animate-fadeInUp">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight animate-fadeInUp">
              Connect With Our <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-600 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Our loan experts are here to help you 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center text-gray-900 mb-4 animate-fadeInUp">
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Multiple Ways</span> to Reach Us
            </h2>
            <p className="text-xl text-center text-gray-600 mb-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Choose your preferred way to get in touch with our team</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group animate-fadeInUp"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 transition-all duration-500 h-full flex flex-col hover:border-transparent ${hoveredCard === index ? 'transform scale-105 -translate-y-3 shadow-2xl' : ''}`}>
                    {/* Top Gradient Bar */}
                    <div className={`h-1.5 bg-linear-to-r ${method.color} transition-all duration-500`}></div>

                    {/* Icon Section */}
                    <div className="px-8 pt-10 pb-6 flex justify-center">
                      <div className={`bg-linear-to-br ${method.color} rounded-3xl w-24 h-24 flex items-center justify-center shadow-lg transition-all duration-500 ${hoveredCard === index ? 'scale-125 shadow-2xl' : ''}`}>
                        <span className={`text-6xl transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`}>{method.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-8 flex-1 flex flex-col items-center text-center">
                      <h3 className={`text-xl font-black mb-4 transition-all duration-500 ${hoveredCard === index ? `bg-linear-to-r ${method.color} bg-clip-text text-transparent` : 'text-gray-900'}`}>
                        {method.title}
                      </h3>

                      <div className="text-gray-600 text-sm leading-relaxed grow">
                        {method.details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                      </div>

                      {/* Bottom Accent */}
                      <div className={`h-1.5 bg-linear-to-r ${method.color} rounded-full mt-6 transition-all duration-500 ${hoveredCard === index ? 'w-16' : 'w-8'}`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2 animate-slideInLeft" data-form-section>
                <div className="bg-linear-to-br from-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100 hover:border-transparent transition-all duration-300">
                  {/* Header with Gradient Bar */}
                  <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-10 py-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <span className="inline-block bg-white/30 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-3">Get Started</span>
                      <h2 className="text-4xl font-black text-white mb-2">Quick Loan Application</h2>
                      <p className="text-blue-100 text-lg">Fill in your details and our experts will reach out within 24 hours</p>
                    </div>
                  </div>

                  {/* Form Content */}
                  <div className="p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-left text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 bg-white/50 hover:bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-left text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 bg-white/50 hover:bg-white"
                          placeholder="+91-XXXXXXXXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-left text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide">Product Type *</label>
                        <select
                          name="productType"
                          value={formData.productType}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-800 bg-white/50 hover:bg-white"
                        >
                          <option value="">Select a loan type</option>
                          <option value="Home Loan">Home Loan 🏠</option>
                          <option value="Personal Loan">Personal Loan 👤</option>
                          <option value="Car Loan">Car Loan 🚗</option>
                          <option value="Used Car Loan">Used Car Loan 🚙</option>
                          <option value="Loan Against Property">Loan Against Property 🏢</option>
                          <option value="Loan Against Shares">Loan Against Shares 📈</option>
                          <option value="SME Loans">SME Loans 🏭</option>
                          <option value="Corporate Loans">Corporate Loans 🏛️</option>
                          <option value="Loan Against Insurance">Loan Against Insurance 🛡️</option>
                          <option value="Two Wheeler Loan">Two Wheeler Loan 🏍️</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-left text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide">Loan Amount (₹) *</label>
                          <input
                            type="number"
                            name="loanAmount"
                            value={formData.loanAmount}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 bg-white/50 hover:bg-white"
                            placeholder="Amount"
                            min="0"
                          />
                        </div>

                        <div>
                          <label className="block text-left text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide">City *</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 bg-white/50 hover:bg-white"
                            placeholder="Your city"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-left text-gray-700 font-bold mb-4 text-sm uppercase tracking-wide">Employment Type *</label>
                        <div className="space-y-3">
                          <label className="flex items-center cursor-pointer group p-3 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all">
                            <input
                              type="radio"
                              name="employmentType"
                              value="Salaried"
                              checked={formData.employmentType === 'Salaried'}
                              onChange={handleChange}
                              required
                              className="w-5 h-5 text-blue-600 cursor-pointer"
                            />
                            <span className="ml-3 text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">Salaried</span>
                          </label>
                          <label className="flex items-center cursor-pointer group p-3 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all">
                          <input
                            type="radio"
                            name="employmentType"
                            value="Self-Employed"
                            checked={formData.employmentType === 'Self-Employed'}
                            onChange={handleChange}
                            required
                            className="w-5 h-5 text-blue-600 cursor-pointer"
                          />
                            <span className="ml-3 text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">Self-Employed</span>
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 mt-8"
                      >
                        Submit Application →
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right Side Info */}
              <div className="animate-slideInRight space-y-6">
                {/* Company Info */}
                <div className="bg-linear-to-br from-blue-600 to-indigo-600 text-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="text-6xl mb-4">🏢</div>
                  <h3 className="text-2xl font-black mb-4">MaxDSA</h3>
                  <div className="h-1 w-12 bg-white/30 mb-4"></div>
                  <p className="text-blue-100 mb-3">
                    <strong>Registration:</strong><br />
                    U82990TZ2025PTC035993
                  </p>
                  <p className="text-base leading-relaxed text-blue-50">
                    A trusted financial services company with <span className="font-bold text-white">300+ years</span> of collective banking expertise.
                  </p>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-blue-100">
                  <div className="text-4xl mb-4">⭐</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-black text-xl mt-0.5">✓</span>
                      <span className="text-gray-700 font-semibold">150+ Lending Partners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-black text-xl mt-0.5">✓</span>
                      <span className="text-gray-700 font-semibold">24-48 Hours Approval</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-black text-xl mt-0.5">✓</span>
                      <span className="text-gray-700 font-semibold">Zero Commission Fee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-black text-xl mt-0.5">✓</span>
                      <span className="text-gray-700 font-semibold">Expert Consultation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <span className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest mb-4">Common Questions</span>
              <h2 className="text-5xl font-black text-gray-900">
                Frequently Asked <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group animate-fadeInUp bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <h3 className="text-lg font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{faq.q}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
