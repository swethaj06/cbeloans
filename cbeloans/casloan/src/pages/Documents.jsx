export default function Documents() {
  const documents = [
    {
      title: 'PAN Card',
      description: 'Permanent Account Number - A unique 10-digit alphanumeric identifier for tax purposes',
      importance: 'Mandatory',
      icon: '🆔',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Aadhar Card',
      description: 'Unique 12-digit identity number issued by UIDAI. Proof of identity and address',
      importance: 'Mandatory',
      icon: '📱',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Bank Statements',
      description: 'Bank statements showing your transaction history and account status',
      importance: 'Mandatory',
      icon: '🏦',
      gradient: 'from-indigo-500 to-indigo-700'
    },
    {
      title: 'Payslip (3 Months)',
      description: 'Salary slips from your employer showing income, deductions, and earnings',
      importance: 'Mandatory',
      icon: '💰',
      gradient: 'from-cyan-500 to-cyan-700'
    },
    {
      title: 'Appointment Order',
      description: 'Original or copy of your latest appointment order from your current employer',
      importance: 'Important',
      icon: '📄',
      gradient: 'from-teal-500 to-teal-700'
    },
    {
      title: 'Form 16 (2 Years)',
      description: 'Tax certificate issued by your employer showing annual earnings and tax deducted',
      importance: 'Important',
      icon: '📋',
      gradient: 'from-green-500 to-green-700'
    }
  ];

  return (
    <div className="w-full bg-linear-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-b from-blue-50 to-white text-gray-900 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="w-full px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest mb-4 animate-fadeInUp">Required Documents</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight animate-fadeInUp">
              Document <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Checklist</span>
            </h1>
            <p className="text-xl text-gray-600 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Prepare all required documents for a smooth loan approval process
            </p>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="group animate-fadeInUp bg-white rounded-3xl shadow-lg border-2 border-gray-100 hover:border-transparent overflow-hidden transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:scale-105 hover:-translate-y-3"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {/* Top Gradient Bar */}
                  <div className={`h-2 bg-linear-to-r ${doc.gradient} transition-all duration-500`}></div>

                  {/* Icon Section */}
                  <div className="px-8 pt-8 pb-4 flex justify-center">
                    <div className={`bg-linear-to-br ${doc.gradient} rounded-3xl w-20 h-20 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110`}>
                      <span className="text-5xl">{doc.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-8 pb-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-3 mb-3">
                      <h3 className={`text-lg font-black transition-all duration-500 group-hover:bg-linear-to-r group-hover:${doc.gradient} group-hover:bg-clip-text group-hover:text-transparent text-gray-900`}>
                        {doc.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${doc.importance === 'Mandatory' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {doc.importance}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed grow">
                      {doc.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className={`h-1.5 bg-linear-to-r ${doc.gradient} rounded-full mt-6 transition-all duration-500 group-hover:w-full origin-left`} style={{ width: '32px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-blue-100 mb-16">
          <h2 className="text-4xl font-black mb-2 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Loan Type Specific Documents</h2>
          <p className="text-gray-600 mb-10">Additional documents required based on your loan type</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Home Loan */}
            <div className="group hover:shadow-xl transition-all duration-300 rounded-2xl p-8 bg-linear-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:border-transparent">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Home Loan</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-black mt-0.5">✓</span>
                  <span className="text-gray-700 font-semibold">Property documents (Registered deed, sale agreement)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-black mt-0.5">✓</span>
                  <span className="text-gray-700 font-semibold">Insurance policy documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-black mt-0.5">✓</span>
                  <span className="text-gray-700 font-semibold">NOC from previous lender (if applicable)</span>
                </li>
              </ul>
            </div>

            {/* Business Loan */}
            <div className="group hover:shadow-xl transition-all duration-300 rounded-2xl p-8 bg-linear-to-br from-green-50 to-green-100 border-2 border-green-200 hover:border-transparent">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Business/SME Loan</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-black mt-0.5">✓</span>
                  <span className="text-gray-700 font-semibold">Business registration documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-black mt-0.5">✓</span>
                  <span className="text-gray-700 font-semibold">ITR (Income Tax Returns) for last 2-3 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-black mt-0.5">✓</span>
                  <span className="text-gray-700 font-semibold">Balance sheet and profit & loss statements</span>
                </li>
              </ul>
            </div>

            {/* Loan Against Property */}
            <div className="group hover:shadow-xl transition-all duration-300 rounded-2xl p-8 bg-linear-to-br from-orange-50 to-orange-100 border-2 border-orange-200 hover:border-transparent">
              <div className="text-5xl mb-4">📑</div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Loan Against Property</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-black mt-0.5">✓</span>
                  <span className="text-gray-700 font-semibold">Property papers and ownership documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-black mt-0.5">✓</span>
                  <span className="text-gray-700 font-semibold">Property valuation report</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-black mt-0.5">✓</span>
                  <span className="text-gray-700 font-semibold">Insurance policy of the property</span>
                </li>
              </ul>
            </div>
            </div>
          </div>

        {/* Tips */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
          <div className="flex items-start gap-4 mb-8">
            <span className="text-5xl">📋</span>
            <div>
              <h2 className="text-4xl font-black mb-2">Tips for Document Submission</h2>
              <p className="text-blue-100">Follow these guidelines to ensure smooth document processing</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="font-black text-lg mb-2">Clear & Legible</h3>
                  <p className="text-blue-100">Ensure all documents are clear, legible, and not more than 6 months old</p>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="font-black text-lg mb-2">Original & Scanned</h3>
                  <p className="text-blue-100">Submit both scanned copies and originals for verification</p>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="font-black text-lg mb-2">Correct Format</h3>
                  <p className="text-blue-100">Keep documents in PDF or JPG format (max 5MB per file)</p>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="font-black text-lg mb-2">Name Matching</h3>
                  <p className="text-blue-100">Ensure all names match across documents</p>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="font-black text-lg mb-2">Expert Guidance</h3>
                  <p className="text-blue-100">Our consultants can guide you on document preparation</p>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="font-black text-lg mb-2">Fast Processing</h3>
                  <p className="text-blue-100">Complete documents = faster loan approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  );
}
