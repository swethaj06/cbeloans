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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-800 text-white w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 animate-float"></div>
        <div className="w-full px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fadeInUp">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto animate-fadeInUp">
              Our loan experts are here to help you 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-6 animate-fadeInUp">Connect With Us</h2>
            <p className="text-xl text-center text-gray-600 mb-16 animate-fadeInUp">Multiple ways to reach our team</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }} className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition-smooth hover-lift group">
                <div className="text-7xl mb-6 group-hover:animate-bounce-slow">📍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-smooth">Head Office</h3>
                <p className="text-gray-700 leading-relaxed">
                  4A, SreeVatsa Swagat Apartment,<br />
                  Patel Road, Ram Nagar,<br />
                  Coimbatore 641009
                </p>
              </div>

              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }} className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition-smooth hover-lift group">
                <div className="text-7xl mb-6 group-hover:animate-bounce-slow">📱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-smooth">Phone</h3>
                <p className="text-gray-700 mb-3 font-semibold">+91-XXX-XXXX-XXXX</p>
                <p className="text-sm text-gray-600">
                  Monday to Friday<br />
                  9:00 AM to 6:00 PM IST
                </p>
              </div>

              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }} className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition-smooth hover-lift group">
                <div className="text-7xl mb-6 group-hover:animate-bounce-slow">📧</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-smooth">Email</h3>
                <p className="text-gray-700 mb-3">
                  <a href="mailto:info@cbeloans.com" className="font-bold text-blue-600 hover:text-blue-800 transition-smooth">
                    info@cbeloans.com
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-white w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slideInLeft" data-form-section>
                <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-800 font-bold mb-3 text-left">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-smooth text-gray-800 placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-800 font-bold mb-3 text-left">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-smooth text-gray-800 placeholder-gray-400"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-800 font-bold mb-3 text-left">Product Type *</label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-smooth text-gray-800 bg-white"
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

                    <div>
                      <label className="block text-gray-800 font-bold mb-3 text-left">Loan Amount (₹) *</label>
                      <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-smooth text-gray-800 placeholder-gray-400"
                        placeholder="Enter loan amount"
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-800 font-bold mb-3 text-left">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-smooth text-gray-800 placeholder-gray-400"
                        placeholder="Your city"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-800 font-bold mb-3 text-left">Employment Type *</label>
                      <div className="space-y-3">
                        <label className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="employmentType"
                            value="Salaried"
                            checked={formData.employmentType === 'Salaried'}
                            onChange={handleChange}
                            required
                            className="w-5 h-5 text-blue-600 cursor-pointer"
                          />
                          <span className="ml-3 text-gray-800 font-semibold group-hover:text-blue-600 transition-smooth">Salaried</span>
                        </label>
                        <label className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="employmentType"
                            value="Self-Employed"
                            checked={formData.employmentType === 'Self-Employed'}
                            onChange={handleChange}
                            required
                            className="w-5 h-5 text-blue-600 cursor-pointer"
                          />
                          <span className="ml-3 text-gray-800 font-semibold group-hover:text-blue-600 transition-smooth">Self-Employed</span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 py-4 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-smooth font-bold text-lg shadow-lg hover:shadow-xl hover-lift"
                    >
                      Send Message ✉️
                    </button>
                  </form>
                </div>
              </div>

              {/* Company Info */}
              <div className="animate-slideInRight space-y-8">
                <div className="bg-linear-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl p-10 hover-lift transition-smooth">
                  <h3 className="text-3xl font-bold mb-4">MaxDSA Business Services</h3>
                  <div className="h-1 w-16 bg-yellow-400 mb-6"></div>
                  <p className="text-blue-100 mb-4">
                    <strong>Registration:</strong><br />
                    U82990TZ2025PTC035993
                  </p>
                  <p className="text-lg leading-relaxed">
                    A trusted financial services company with <span className="text-yellow-300 font-bold">300+ years</span> of collective banking expertise. Committed to providing transparent, hassle-free loan solutions.
                  </p>
                </div>

                <div className="bg-linear-to-br from-green-600 to-green-800 text-white rounded-2xl shadow-xl p-10 hover-lift transition-smooth">
                  <h3 className="text-3xl font-bold mb-4">Our Branches</h3>
                  <div className="h-1 w-16 bg-yellow-400 mb-6"></div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                      <span><strong>Coimbatore</strong> - Head Office (Tamil Nadu)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                      <span><strong>Chennai</strong> - South India Regional Office</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                      <span><strong>Bangalore</strong> - Southern Hub</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                      <span><strong>Mumbai</strong> - Western Regional Office</span>
                    </li>
                  </ul>
                  <p className="text-green-100 mt-6 text-sm">
                    More branch locations coming soon in major cities across India.
                  </p>
                </div>

                <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white rounded-2xl shadow-xl p-10 hover-lift transition-smooth">
                  <div className="text-5xl mb-4">⭐</div>
                  <h3 className="text-2xl font-bold mb-3">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-300 font-bold mt-1">✓</span>
                      <span>150+ Lending Partners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-300 font-bold mt-1">✓</span>
                      <span>24-48 Hours Approval</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-300 font-bold mt-1">✓</span>
                      <span>Zero Commission Fee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-300 font-bold mt-1">✓</span>
                      <span>Expert Consultation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 animate-fadeInUp">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }} className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-smooth">
                <h3 className="text-xl font-bold text-blue-600 mb-3">How long does approval take?</h3>
                <p className="text-gray-700">Most loans are approved within 24-48 hours. It depends on the lender and document verification process.</p>
              </div>
              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }} className="bg-green-50 rounded-xl p-8 hover:shadow-lg transition-smooth">
                <h3 className="text-xl font-bold text-green-600 mb-3">Is there any processing fee?</h3>
                <p className="text-gray-700">No! We don't charge any commission or processing fee. Completely free consultation and guidance.</p>
              </div>
              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }} className="bg-purple-50 rounded-xl p-8 hover:shadow-lg transition-smooth">
                <h3 className="text-xl font-bold text-purple-600 mb-3">What documents do I need?</h3>
                <p className="text-gray-700">PAN, Aadhar, Bank statements (6 months), and Income proof are typically required. Requirements may vary by lender.</p>
              </div>
              <div style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }} className="bg-orange-50 rounded-xl p-8 hover:shadow-lg transition-smooth">
                <h3 className="text-xl font-bold text-orange-600 mb-3">Can I check my eligibility?</h3>
                <p className="text-gray-700">Yes! Our experts can help determine your eligibility based on income, credit score, and loan requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
