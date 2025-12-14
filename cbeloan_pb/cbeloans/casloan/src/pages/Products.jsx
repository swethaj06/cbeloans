import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Products() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const products = [
    {
      title: 'Home Loan',
      description: 'A home loan is a long-term financing option that helps you purchase, construct, or renovate a residential property. Offered by banks and financial institutions, it allows you to own your dream home with affordable EMIs, flexible repayment tenures, and competitive interest rates.',
      icon: '🏠',
      color: 'from-blue-500 to-blue-700',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Personal Loan',
      description: 'A personal loan is an unsecured loan that provides quick financial support for any personal need—such as medical expenses, travel, education, or debt consolidation. With minimal documentation and fast approval.',
      icon: '👤',
      color: 'from-purple-500 to-purple-700',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Car Loan',
      description: 'A car loan is a secured financing option that helps you purchase a new or used vehicle with easy EMIs and flexible repayment terms. Offered by banks and financial institutions, it allows you to own your desired car without a large upfront payment.',
      icon: '🚗',
      color: 'from-indigo-500 to-indigo-700',
      borderColor: 'border-indigo-200'
    },
    {
      title: 'Used Car Loan',
      description: 'A used car loan is a convenient financing option that helps you purchase a pre-owned vehicle at affordable EMIs. With flexible tenures, competitive interest rates, and quick processing.',
      icon: '🚙',
      color: 'from-cyan-500 to-cyan-700',
      borderColor: 'border-cyan-200'
    },
    {
      title: 'Loan Against Property',
      description: 'A Loan Against Property (LAP) is a secured loan where you can borrow funds by pledging your residential, commercial, or industrial property as collateral. It offers higher loan amounts, lower interest rates, and longer repayment tenures.',
      icon: '🏢',
      color: 'from-teal-500 to-teal-700',
      borderColor: 'border-teal-200'
    },
    {
      title: 'Loan Against Shares',
      description: 'A Loan Against Shares allows you to borrow money by pledging your equity shares as collateral. It offers quick access to funds without selling your investments, along with flexible withdrawals and competitive interest rates.',
      icon: '📈',
      color: 'from-green-500 to-green-700',
      borderColor: 'border-green-200'
    },
    {
      title: 'SME Loans',
      description: 'SME Loans are business financing solutions designed to support the growth and working capital needs of Small and Medium Enterprises. With flexible repayment options, competitive interest rates, and quick processing.',
      icon: '🏭',
      color: 'from-orange-500 to-orange-700',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Corporate Loans',
      description: 'Corporate Loans are large-scale financing solutions designed to meet the strategic, operational, and expansion needs of medium and large businesses. Offered with flexible structures and competitive interest rates.',
      icon: '🏛️',
      color: 'from-red-500 to-red-700',
      borderColor: 'border-red-200'
    },
    {
      title: 'Loan Against Insurance',
      description: 'A Loan Against Insurance allows you to borrow money by using your life insurance policy\'s surrender value as collateral. It offers quick access to funds at lower interest rates compared to unsecured loans.',
      icon: '🛡️',
      color: 'from-pink-500 to-pink-700',
      borderColor: 'border-pink-200'
    },
    {
      title: 'Kirana Store Loans',
      description: 'A loan for Kirana stores is a small business financing option designed to help local shop owners manage working capital, stock inventory, upgrade their store, or expand operations.',
      icon: '🏪',
      color: 'from-yellow-500 to-yellow-700',
      borderColor: 'border-yellow-200'
    }
  ];

  return (
    <div className="bg-linear-to-b from-blue-50 via-white to-blue-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest mb-4">Loan Solutions</span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Our Loan <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of loan products designed to meet every financial need with affordable EMIs and flexible repayment options
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group h-full animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 ${product.borderColor} transition-all duration-500 h-full flex flex-col hover:shadow-2xl ${hoveredCard === index ? 'transform scale-105 -translate-y-2' : ''}`}>
                {/* Icon Section */}
                <div className={`bg-linear-to-br ${product.color} p-8 flex items-center justify-center relative overflow-hidden group-hover:shadow-inner transition-all duration-500`}>
                  <div className="absolute inset-0 opacity-10 group-hover:animate-pulse"></div>
                  <div className={`text-8xl relative z-10 transition-all duration-500 ${hoveredCard === index ? 'scale-125 rotate-12' : 'group-hover:scale-110'}`}>
                    {product.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className={`text-2xl font-bold mb-3 transition-all duration-500 ${hoveredCard === index ? `bg-linear-to-r ${product.color} bg-clip-text text-transparent` : 'text-gray-900'}`}>
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed grow group-hover:text-gray-700 transition-colors duration-300">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  <Link 
                    to="/contact" 
                    onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)}
                    className={`inline-block text-white px-6 py-3 rounded-lg font-bold transition-all duration-500 shadow-md hover:shadow-lg transform hover:scale-105 bg-linear-to-r ${product.color} text-center group-hover:from-opacity-90`}
                  >
                    Apply Now →
                  </Link>
                </div>

                {/* Hover Accent Line */}
                <div className={`h-1 bg-linear-to-r ${product.color} transition-all duration-500 ${hoveredCard === index ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Confused about which loan is right for you?</h2>
            <p className="text-white/90 text-lg mb-8">Our loan experts are here to help you find the perfect solution</p>
            <Link to="/contact" onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
