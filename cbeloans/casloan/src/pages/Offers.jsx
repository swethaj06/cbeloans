export default function Offers() {
  const offers = [
    {
      title: 'Zero Processing Fee',
      description: 'Apply for your loan without any processing charges. Save money from day one.',
      discount: 'Upto ₹10,000 saved'
    },
    {
      title: 'Cashback on Approval',
      description: 'Get cashback rewards when your loan is approved and disbursed.',
      discount: '₹5,000 - ₹50,000'
    },
    {
      title: 'Special Home Loan Rates',
      description: 'Get home loans starting from competitive interest rates with flexible tenure.',
      discount: 'From 6.5% p.a.'
    },
    {
      title: 'Personal Loan Bonanza',
      description: 'Quick personal loans approved in 24 hours with minimal documentation.',
      discount: 'Upto ₹40,00,000'
    },
    {
      title: 'Car Loan Special',
      description: 'Special rates on car and used car loans. Drive home your dream car today.',
      discount: 'From 7.99% p.a.'
    },
    {
      title: 'Business Loan Offer',
      description: 'SME and Corporate loans tailored to your business needs.',
      discount: 'Competitive rates'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Special Offers</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Check out our latest offers and promotions on various loan products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white p-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-2xl font-bold">{offer.discount}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{offer.description}</p>
                <button className="w-full bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Limited Time Offer Banner */}
        <div className="mt-12 bg-linear-to-r from-orange-400 to-red-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">⏰ Limited Time Offer!</h2>
          <p className="text-lg mb-6">Apply now and get exclusive benefits and faster approval</p>
          <button className="bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition shadow-lg">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
