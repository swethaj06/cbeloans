import LoanCard from '../components/LoanCard';

export default function Products() {
  const products = [
    {
      title: 'Home Loan',
      description: 'A home loan is a long-term financing option that helps you purchase, construct, or renovate a residential property. Offered by banks and financial institutions, it allows you to own your dream home with affordable EMIs, flexible repayment tenures, and competitive interest rates.',
      icon: '🏠'
    },
    {
      title: 'Personal Loan',
      description: 'A personal loan is an unsecured loan that provides quick financial support for any personal need—such as medical expenses, travel, education, or debt consolidation. With minimal documentation and fast approval.',
      icon: '👤'
    },
    {
      title: 'Car Loan',
      description: 'A car loan is a secured financing option that helps you purchase a new or used vehicle with easy EMIs and flexible repayment terms. Offered by banks and financial institutions, it allows you to own your desired car without a large upfront payment.',
      icon: '🚗'
    },
    {
      title: 'Used Car Loan',
      description: 'A used car loan is a convenient financing option that helps you purchase a pre-owned vehicle at affordable EMIs. With flexible tenures, competitive interest rates, and quick processing.',
      icon: '🚙'
    },
    {
      title: 'Loan Against Property',
      description: 'A Loan Against Property (LAP) is a secured loan where you can borrow funds by pledging your residential, commercial, or industrial property as collateral. It offers higher loan amounts, lower interest rates, and longer repayment tenures.',
      icon: '🏢'
    },
    {
      title: 'Loan Against Shares',
      description: 'A Loan Against Shares allows you to borrow money by pledging your equity shares as collateral. It offers quick access to funds without selling your investments, along with flexible withdrawals and competitive interest rates.',
      icon: '📈'
    },
    {
      title: 'SME Loans',
      description: 'SME Loans are business financing solutions designed to support the growth and working capital needs of Small and Medium Enterprises. With flexible repayment options, competitive interest rates, and quick processing.',
      icon: '🏭'
    },
    {
      title: 'Corporate Loans',
      description: 'Corporate Loans are large-scale financing solutions designed to meet the strategic, operational, and expansion needs of medium and large businesses. Offered with flexible structures and competitive interest rates.',
      icon: '🏛️'
    },
    {
      title: 'Loan Against Insurance',
      description: 'A Loan Against Insurance allows you to borrow money by using your life insurance policy\'s surrender value as collateral. It offers quick access to funds at lower interest rates compared to unsecured loans.',
      icon: '🛡️'
    },
    {
      title: 'Kirana Store Loans',
      description: 'A loan for Kirana stores is a small business financing option designed to help local shop owners manage working capital, stock inventory, upgrade their store, or expand operations.',
      icon: '🏪'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Loan Products</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Explore our wide range of loan products designed to meet every financial need
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <LoanCard
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
