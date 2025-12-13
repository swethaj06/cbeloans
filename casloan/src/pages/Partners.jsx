// Import bank logos from banks folder
import sbiLogo from '../assets/banks/sbi.svg?url';
import iciciLogo from '../assets/banks/icici.svg?url';
import hdfcLogo from '../assets/banks/hdfc.svg?url';
import axisLogo from '../assets/banks/axis.svg?url';
import kotakLogo from '../assets/banks/kotak.svg?url';
import idbiLogo from '../assets/banks/idbi.svg?url';
import pnbLogo from '../assets/banks/pnb.svg?url';
import canaraLogo from '../assets/banks/canara.svg?url';
import bajajLogo from '../assets/banks/bajaj.svg?url';
import homecreditLogo from '../assets/banks/homecredit.svg?url';
import cholaLogo from '../assets/banks/chola.svg?url';
import sundaramLogo from '../assets/banks/sundaram.svg?url';
import ltLogo from '../assets/banks/lt.svg?url';
import shriramLogo from '../assets/banks/shriram.svg?url';
import dhflLogo from '../assets/banks/dhfl.svg?url';
import iifcLogo from '../assets/banks/iifc.svg?url';

export default function Partners() {
  const banks = [
    { name: 'State Bank of India', image: sbiLogo },
    { name: 'ICICI Bank', image: iciciLogo },
    { name: 'HDFC Bank', image: hdfcLogo },
    { name: 'Axis Bank', image: axisLogo },
    { name: 'Kotak Mahindra Bank', image: kotakLogo },
    { name: 'IDBI Bank', image: idbiLogo },
    { name: 'Punjab National Bank', image: pnbLogo },
    { name: 'Canara Bank', image: canaraLogo },
  ];

  const nbfcs = [
    { name: 'Bajaj Finance', image: bajajLogo },
    { name: 'Home Credit', image: homecreditLogo },
    { name: 'Cholamandalam', image: cholaLogo },
    { name: 'Sundaram Finance', image: sundaramLogo },
    { name: 'L&T Finance', image: ltLogo },
    { name: 'Shriram Finance', image: shriramLogo },
    { name: 'DHFL', image: dhflLogo },
    { name: 'IIFC', image: iifcLogo },
  ];

  const BankLogo = ({ bank }) => (
    <div className="bg-white border-2 border-gray-100 rounded-xl p-6 flex items-center justify-center hover:shadow-2xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group cursor-pointer min-h-[180px]">
      <div className="text-center w-full">
        <div className="flex items-center justify-center mx-auto mb-4 h-28">
          <img 
            src={bank.image} 
            alt={bank.name}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
            className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-300" 
          />
          <div className="hidden items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
            <span className="text-2xl font-bold text-blue-700">{bank.name.split(' ').map(w => w[0]).join('')}</span>
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">{bank.name}</p>
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
