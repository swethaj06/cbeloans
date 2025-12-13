export default function Documents() {
  const documents = [
    {
      title: 'PAN Card',
      description: 'Permanent Account Number - A unique 10-digit alphanumeric identifier for tax purposes',
      importance: 'Mandatory'
    },
    {
      title: 'Aadhar Card',
      description: 'Unique 12-digit identity number issued by UIDAI. Proof of identity and address',
      importance: 'Mandatory'
    },
    {
      title: 'Last 6 Months Bank Statements',
      description: 'Bank statements showing your transaction history and account status',
      importance: 'Mandatory'
    },
    {
      title: 'Payslip (Last 3 Months)',
      description: 'Salary slips from your employer showing income, deductions, and earnings',
      importance: 'Mandatory'
    },
    {
      title: 'Latest Appointment Order Copy',
      description: 'Original or copy of your latest appointment order from your current employer',
      importance: 'Important'
    },
    {
      title: 'Form 16 (Last 2 Years)',
      description: 'Tax certificate issued by your employer showing annual earnings and tax deducted',
      importance: 'Important'
    }
  ];

  const getImportanceColor = (importance) => {
    if (importance === 'Mandatory') return 'bg-red-50 border-red-200';
    return 'bg-yellow-50 border-yellow-200';
  };

  const getImportanceBadge = (importance) => {
    if (importance === 'Mandatory') return 'bg-red-100 text-red-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Document Checklist</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Prepare the following documents to apply for your loan
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {documents.map((doc, index) => (
            <div key={index} className={`border rounded-lg p-6 ${getImportanceColor(doc.importance)}`}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-800">{doc.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getImportanceBadge(doc.importance)}`}>
                  {doc.importance}
                </span>
              </div>
              <p className="text-gray-700">{doc.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Documents (Based on Loan Type)</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">For Home Loan:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Property documents (Registered deed, sale agreement)</li>
                <li>Insurance policy documents</li>
                <li>NOC from previous lender (if applicable)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">For Business/SME Loan:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Business registration documents</li>
                <li>ITR (Income Tax Returns) for last 2-3 years</li>
                <li>Balance sheet and profit & loss statements</li>
                <li>Business plan documents</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">For Loan Against Property:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Property papers and ownership documents</li>
                <li>Property valuation report</li>
                <li>Insurance policy of the property</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">📋 Tips for Document Submission</h2>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Ensure all documents are clear, legible, and not more than 6 months old</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Submit both scanned copies and originals for verification</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Keep documents in PDF or JPG format (max 5MB per file)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Ensure all names match across documents</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Our consultants can guide you on document preparation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
