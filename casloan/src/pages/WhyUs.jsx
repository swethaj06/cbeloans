import BenefitCard from '../components/BenefitCard';

export default function WhyUs() {
  const benefits = [
    {
      icon: '💡',
      title: 'Free Expert Loan Consultation',
      description: 'Get personalized guidance from our experienced banking professionals'
    },
    {
      icon: '📊',
      title: 'Compare Interest Rates',
      description: 'Compare the Interest Rates of all Banks at one stop'
    },
    {
      icon: '📈',
      title: 'Higher Eligibility',
      description: 'Higher loan eligibility with competitive interest rates'
    },
    {
      icon: '🎯',
      title: 'Understand Your Needs',
      description: 'Complete focus on understanding your specific loan requirements'
    },
    {
      icon: '🤝',
      title: '150+ Partnerships',
      description: 'Partnerships with 150+ leading Financial Institutions'
    },
    {
      icon: '⚙️',
      title: 'Customized Solutions',
      description: 'Customized, tailor-made financial solutions for your needs'
    },
    {
      icon: '📋',
      title: 'Documentation Support',
      description: 'Assistance with end-to-end loan documentation'
    },
    {
      icon: '🎁',
      title: 'Exclusive Offers',
      description: 'Access to exclusive offers and deals'
    },
    {
      icon: '💰',
      title: 'Zero Commissions',
      description: 'Zero commissions — no extra charges'
    },
    {
      icon: '👥',
      title: 'After-Sales Support',
      description: 'Dedicated after-sales support throughout your loan journey'
    },
    {
      icon: '📍',
      title: 'Local Experts',
      description: 'Local experts always available in your city'
    },
    {
      icon: '🌐',
      title: 'One-Stop Solution',
      description: 'One-stop access to all major Financial Institutions'
    },
    {
      icon: '⚡',
      title: 'Fully Digital',
      description: 'Seamless and fully digital loan journey'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Why Apply Through Us?</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            We are a team of highly experienced banking professionals with more than 300 years of man years' experience committed to guiding customers through their entire loan journey with trust, confidence, and professionalism.
          </p>
          <p className="text-lg text-gray-700">
            These values form the core reasons why customers choose to apply through us.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
