import { useState } from 'react';

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    
    if (r === 0) {
      return Math.round(p / n);
    }
    
    const emi = Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    return emi;
  };

  const emi = calculateEMI();
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - principal;

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">EMI Calculator</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Calculate your loan EMI (Equated Monthly Installment) and plan your finances better
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Calculator</h2>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Loan Amount: ₹{principal.toLocaleString()}
              </label>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="100000"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>₹1,00,000</span>
                <span>₹1,00,00,000</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Interest Rate (% p.a.): {rate.toFixed(2)}%
              </label>
              <input
                type="range"
                min="3"
                max="15"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>3%</span>
                <span>15%</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Loan Tenure (Years): {tenure}
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-semibold mb-4">Your Monthly EMI</h3>
              <p className="text-5xl font-bold mb-2">₹{emi.toLocaleString()}</p>
              <p className="text-gray-800">Per Month</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Loan Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-700">Loan Amount:</span>
                  <span className="font-bold text-gray-800">₹{principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-700">Interest Rate:</span>
                  <span className="font-bold text-gray-800">{rate.toFixed(2)}% p.a.</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-700">Tenure:</span>
                  <span className="font-bold text-gray-800">{tenure} Years ({tenure * 12} Months)</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-700">Total Interest Payable:</span>
                  <span className="font-bold text-red-600">₹{totalInterest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pt-4 bg-gray-50 p-4 rounded">
                  <span className="text-lg font-bold text-gray-800">Total Amount Payable:</span>
                  <span className="text-lg font-bold text-blue-600">₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition font-bold text-lg shadow-lg">
              Apply Now
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">How EMI Works?</h3>
          <p className="text-gray-700 mb-4">
            EMI (Equated Monthly Installment) is the fixed amount you need to pay every month towards your loan. It comprises both principal and interest components. As you repay the loan, the interest component decreases while the principal component increases.
          </p>
          <p className="text-gray-700">
            Use our calculator to estimate your monthly payments and plan your budget accordingly. The actual EMI may vary based on the lender's terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
