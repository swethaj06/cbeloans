export default function Apply() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Apply for a Loan</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Quick, transparent, and hassle-free loan application process
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Start your loan journey with us today!
            </p>
            <p className="text-gray-600">
              Our loan consultants will guide you through the entire process.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-6 py-2 bg-yellow-50">
              <h3 className="font-bold text-gray-800 mb-1">Step 1: Assess Your Eligibility</h3>
              <p className="text-gray-600 text-sm">Check if you qualify for our loans</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-6 py-2 bg-yellow-50">
              <h3 className="font-bold text-gray-800 mb-1">Step 2: Submit Your Documents</h3>
              <p className="text-gray-600 text-sm">Upload the required documents</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-6 py-2 bg-yellow-50">
              <h3 className="font-bold text-gray-800 mb-1">Step 3: Get Approval</h3>
              <p className="text-gray-600 text-sm">Receive approval in 24-48 hours</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-6 py-2 bg-yellow-50">
              <h3 className="font-bold text-gray-800 mb-1">Step 4: Loan Disbursement</h3>
              <p className="text-gray-600 text-sm">Get funds credited to your account</p>
            </div>
          </div>

          <button className="w-full mt-8 bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition font-bold text-lg shadow-lg">
            Start Application
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            or call us at +91-XXXX-XXXX-XXXX for assistance
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-gray-800 mb-2">Fast Approval</h3>
            <p className="text-gray-600 text-sm">24-48 hours processing</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="font-bold text-gray-800 mb-2">Minimal Docs</h3>
            <p className="text-gray-600 text-sm">Simple documentation</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="font-bold text-gray-800 mb-2">100% Digital</h3>
            <p className="text-gray-600 text-sm">Fully online process</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-bold text-gray-800 mb-2">No Hidden Charges</h3>
            <p className="text-gray-600 text-sm">Transparent pricing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
