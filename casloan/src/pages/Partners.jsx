export default function Partners() {
  const banks = [
    { name: 'State Bank of India', logo: 'SBI' },
    { name: 'ICICI Bank', logo: 'ICICI' },
    { name: 'HDFC Bank', logo: 'HDFC' },
    { name: 'Axis Bank', logo: 'AXIS' },
    { name: 'Kotak Mahindra Bank', logo: 'KOTAK' },
    { name: 'IDBI Bank', logo: 'IDBI' },
    { name: 'PNB', logo: 'PNB' },
    { name: 'Canara Bank', logo: 'CANARA' },
  ];

  const nbfcs = [
    { name: 'Bajaj Finance', logo: 'BAJAJ' },
    { name: 'Home Credit', logo: 'HCF' },
    { name: 'Cholamandalam', logo: 'CHOLA' },
    { name: 'Sundaram Finance', logo: 'SUNDARAM' },
    { name: 'L&T Finance', logo: 'L&T' },
    { name: 'Shriram Finance', logo: 'SHRIRAM' },
    { name: 'DHFL', logo: 'DHFL' },
    { name: 'IIFC', logo: 'IIFC' },
  ];

  const BankLogo = ({ bank }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition">
      <div className="text-center">
        <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
          <span className="font-bold text-sm text-gray-600">{bank.logo}</span>
        </div>
        <p className="text-sm font-semibold text-gray-700">{bank.name}</p>
      </div>
    </div>
  );

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Partner Banks</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          We work with 150+ leading financial institutions to bring you the best loan options
        </p>

        {/* Nationalized Banks */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Nationalized Banks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {banks.map((bank, index) => (
              <BankLogo key={index} bank={bank} />
            ))}
          </div>
        </div>

        {/* Private Banks */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Private Banks & NBFCs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nbfcs.map((nbfc, index) => (
              <BankLogo key={index} bank={nbfc} />
            ))}
          </div>
        </div>

        {/* Partnership Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Partner with Us</h3>
          <p className="text-gray-700 mb-4">
            MaxDSA Business Services P Ltd is a preferred professional Channel Partner for most of the Nationalised Banks, Private Banks, NBFCs and Fintech Companies.
          </p>
          <p className="text-gray-700">
            We also venture into BC Model, Loan Service Provider Model (LSP), and Co-lending opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
