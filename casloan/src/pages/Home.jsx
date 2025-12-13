import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import LoanCard from '../components/LoanCard';
import BenefitCard from '../components/BenefitCard';
// Import bank logos
import sbiLogo from '../assets/sbi.png';
import iciciLogo from '../assets/icici.jpeg';
import hdfcLogo from '../assets/hdf.png';
import axisLogo from '../assets/Axis_Bank.png';
import kotakLogo from '../assets/kotak.png';
import idbiLogo from '../assets/indusindbank.png';
import pnbLogo from '../assets/punjab.jpg';
import canaraLogo from '../assets/Borado.png';
import bajajLogo from '../assets/Bajaj.png';
import idfc from '../assets/idfc.jpg';
import tataLogo from '../assets/tata.png';
import yesLogo from '../assets/Yes_Bank.png';

export default function Home() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    if (r === 0) return Math.round(p / n);
    const emi = Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    return emi;
  };

  const emi = calculateEMI();
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - principal;

  const products = [
    { title: 'Home Loan', description: 'Long-term financing for purchasing, constructing, or renovating residential property with affordable EMIs and competitive rates.', icon: '🏠' },
    { title: 'Personal Loan', description: 'Quick financial support for medical expenses, travel, education, or debt consolidation with minimal documentation.', icon: '👤' },
    { title: 'Car Loan', description: 'Secured financing for purchasing new or used vehicles with easy EMIs and flexible repayment terms.', icon: '🚗' },
    { title: 'Used Car Loan', description: 'Convenient financing for pre-owned vehicles at affordable EMIs with quick processing.', icon: '🚙' },
    { title: 'Loan Against Property', description: 'Secured loan by pledging property as collateral with higher amounts and lower interest rates.', icon: '🏢' },
    { title: 'SME Loans', description: 'Business financing for Small and Medium Enterprises with flexible repayment and competitive rates.', icon: '🏭' },
  ];

  const benefits = [
    { icon: '💡', title: 'Free Expert Consultation', description: 'Personalized guidance from experienced banking professionals' },
    { icon: '📊', title: 'Compare Interest Rates', description: 'Compare rates of all banks at one stop' },
    { icon: '📈', title: 'Higher Eligibility', description: 'Higher loan eligibility with competitive rates' },
    { icon: '🤝', title: '150+ Partnerships', description: 'Partnerships with 150+ leading institutions' },
    { icon: '💰', title: 'Zero Commissions', description: 'No extra charges or hidden fees' },
    { icon: '⚡', title: 'Fully Digital', description: 'Seamless digital loan journey' },
  ];

  const documents = [
    { title: 'PAN Card', importance: 'Mandatory' },
    { title: 'Aadhar Card', importance: 'Mandatory' },
    { title: 'Bank Statements (6 months)', importance: 'Mandatory' },
    { title: 'Payslip (3 months)', importance: 'Mandatory' },
    { title: 'Appointment Order', importance: 'Important' },
    { title: 'Form 16 (2 years)', importance: 'Important' },
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Loans and Cards Section */}
      <section className="py-20 bg-white w-full border-b border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Loans and Cards</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
            {/* Personal Loan */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-32 flex items-end justify-center mb-3">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-emerald-200 shadow-sm">
                  Cashback Offer
                </div>
                <div className="w-20 h-20 bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-blue-200/50">
                  <span className="text-3xl">💰</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center">Personal Loan</span>
            </div>

            {/* Credit Cards */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-32 flex items-end justify-center mb-3">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-emerald-200 shadow-sm">
                  5% Cashback
                </div>
                <div className="w-20 h-20 bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-purple-200/50">
                  <span className="text-3xl">💳</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center">Credit Cards</span>
            </div>

            {/* Business Loan */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-32 flex items-end justify-center mb-3">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-emerald-200 shadow-sm">
                  Cashback Offer
                </div>
                <div className="w-20 h-20 bg-linear-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-orange-200/50">
                  <span className="text-3xl">💼</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center">Business Loan</span>
            </div>

            {/* Home Loan */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-32 flex items-end justify-center mb-3">
                <div className="w-20 h-20 bg-linear-to-br from-pink-50 to-pink-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-pink-200/50">
                  <span className="text-3xl">🏠</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center">Home Loan</span>
            </div>

            {/* Loan Against Property */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-32 flex items-end justify-center mb-3">
                <div className="w-20 h-20 bg-linear-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-teal-200/50">
                  <span className="text-3xl">🏢</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center px-1">Loan Against Property</span>
            </div>

            {/* Transfer Home Loan */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-32 flex items-end justify-center mb-3">
                <div className="w-20 h-20 bg-linear-to-br from-cyan-50 to-cyan-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-cyan-200/50">
                  <span className="text-3xl">🔄</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center px-1">Transfer Home Loan</span>
            </div>

            {/* Instant Personal Loan */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-32 flex items-end justify-center mb-3">
                <div className="w-20 h-20 bg-linear-to-br from-yellow-50 to-yellow-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-yellow-200/50">
                  <span className="text-3xl">⚡</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center px-1">Instant Personal Loan</span>
            </div>

            {/* Cashback Cards */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-32 flex items-end justify-center mb-3">
                <div className="w-20 h-20 bg-linear-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-indigo-200/50">
                  <span className="text-3xl">💎</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center">Cashback Cards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Score & Bill Payments Section */}
      <section className="py-20 bg-slate-50 w-full border-b border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Credit Score & Bill Payments</h2>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm w-fit">
              <span className="font-bold text-sm text-slate-700">Bharat</span>
              <span className="text-red-500 text-xs">●</span>
              <span className="font-bold text-sm text-slate-700">Connect</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
            {/* Credit Score */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-linear-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3 border border-green-200/50">
                <span className="text-3xl">📊</span>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center">Credit Score</span>
            </div>

            {/* Credit Health Pro */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3 border border-blue-200/50">
                <span className="text-3xl">📈</span>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center px-1">Credit Health Pro</span>
            </div>

            {/* Video Credit Report */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-linear-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3 border border-red-200/50">
                <span className="text-3xl">📹</span>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center px-1">Video Credit Report</span>
            </div>

            {/* PB Money */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-linear-to-br from-yellow-50 to-yellow-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3 border border-yellow-200/50">
                <span className="text-3xl">💰</span>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center">PB Money</span>
            </div>

            {/* Credit Card Bill */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3 border border-slate-200/50">
                <span className="text-3xl">💳</span>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center px-1">Credit Card Bill</span>
            </div>

            {/* Loan Repayment */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-linear-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3 border border-emerald-200/50">
                <span className="text-3xl">💵</span>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center px-1">Loan Repayment</span>
            </div>

            {/* Electricity Bill */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-linear-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3 border border-amber-200/50">
                <span className="text-3xl">💡</span>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center">Electricity Bill</span>
            </div>

            {/* Explore More */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3 border border-purple-200/50">
                <span className="text-3xl">🔍</span>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug h-10 flex items-center">Explore More</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Insurance Products Section */}
      <section className="py-20 bg-white w-full border-b border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Investment & Insurance Products</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-6 md:gap-8">
            {/* Bonds */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-36 flex items-end justify-center mb-2">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-emerald-200 shadow-sm z-10">
                  Invest & Earn
                </div>
                <div className="w-20 h-20 bg-linear-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-green-200/50">
                  <span className="text-3xl">📜</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug mb-1">Bonds</span>
              <span className="text-xs text-slate-600 text-center">SEBI Regulated</span>
            </div>

            {/* Fixed Deposits */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-36 flex items-end justify-center mb-2">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-emerald-200 shadow-sm z-10">
                  Newly Launched
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-blue-200/50">
                  <span className="text-3xl">🏦</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug mb-1 px-1">Fixed Deposits</span>
              <span className="text-xs text-slate-600 text-center">Earn upto 8%</span>
            </div>

            {/* Market Linked Plans */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="h-36 flex items-end justify-center mb-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-purple-200/50">
                  <span className="text-3xl">📊</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug px-1">Market Linked Plans</span>
            </div>

            {/* National Pension Scheme */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="h-36 flex items-end justify-center mb-2">
                <div className="w-20 h-20 bg-linear-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-red-200/50">
                  <span className="text-3xl">🏛️</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug px-1">National Pension Scheme</span>
            </div>

            {/* Health Insurance */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-36 flex items-end justify-center mb-2">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-emerald-200 shadow-sm z-10">
                  0% GST
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-pink-200/50">
                  <span className="text-3xl">🏥</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug px-1">Health Insurance</span>
            </div>

            {/* Term Life Insurance */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-36 flex items-end justify-center mb-2">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-emerald-200 shadow-sm z-10">
                  0% GST
                </div>
                <div className="w-20 h-20 bg-linear-to-br from-sky-50 to-sky-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-sky-200/50">
                  <span className="text-3xl">☂️</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug px-1">Term Life Insurance</span>
            </div>

            {/* Car Insurance */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-36 flex items-end justify-center mb-2">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-emerald-200 shadow-sm z-10">
                  Lowest Price
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-yellow-200/50">
                  <span className="text-3xl">🚗</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug">Car Insurance</span>
            </div>

            {/* All Insurance Products */}
            <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="h-36 flex items-end justify-center mb-2">
                <div className="w-20 h-20 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-slate-200/50">
                  <span className="text-3xl">📋</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center leading-snug px-1">All Insurance Products</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-white w-full border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 px-4 animate-fadeInUp">Why Choose CbeLOANS?</h2>
          <p className="text-lg text-center text-gray-600 mb-12 px-4 animate-fadeInUp">We make loan comparison easy and transparent</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="text-center bg-blue-50 p-8 rounded-lg border border-blue-100 hover:border-blue-300 transition-smooth group">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quick & Easy</h3>
              <p className="text-gray-700 leading-relaxed">Get loan approval in 24-48 hours with minimal documentation</p>
            </div>
            <div className="text-center bg-blue-50 p-8 rounded-lg border border-blue-100 hover:border-blue-300 transition-smooth group">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Compare & Save</h3>
              <p className="text-gray-700 leading-relaxed">Compare 150+ loan products and get the best rates</p>
            </div>
            <div className="text-center bg-blue-50 p-8 rounded-lg border border-blue-100 hover:border-blue-300 transition-smooth group">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Safe & Secure</h3>
              <p className="text-gray-700 leading-relaxed">ISO certified with industry-best security controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section id="products" className="py-16 bg-gray-50 w-full">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4 px-4 animate-fadeInUp">Our Loan Products</h2>
          <p className="text-lg text-center text-gray-600 mb-12 px-4 animate-fadeInUp">Explore a wide range of loans designed for your needs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {products.map((product, index) => (
              <div key={index} style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}>
                <LoanCard title={product.title} description={product.description} icon={product.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us and Why Us Cards */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* About Us Card */}
            <Link to="/about" className="group block">
              <div className="bg-gradient-to-br from-sky-300 to-sky-400 rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <div className="p-12 flex flex-col items-center justify-center flex-grow">
                  <div className="mb-8">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cg%3E%3Crect fill='%23374151' x='80' y='120' width='30' height='60' rx='2'/%3E%3Crect fill='%23374151' x='120' y='100' width='30' height='80' rx='2'/%3E%3Crect fill='%23374151' x='160' y='80' width='30' height='100' rx='2'/%3E%3Ccircle fill='%23FCD34D' cx='220' cy='120' r='35'/%3E%3Crect fill='%2360A5FA' x='240' y='110' width='60' height='50' rx='3'/%3E%3Ccircle fill='%234ADE80' cx='340' cy='130' r='30'/%3E%3Cpath fill='%234ADE80' d='M310,180 Q325,200 340,180 Q355,200 370,180 L370,200 L310,200 Z'/%3E%3C/g%3E%3C/svg%3E" alt="About Us Illustration" className="w-64 h-48 object-contain" />
                  </div>
                  <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">About Us</h2>
                  <p className="text-xl text-gray-700 text-center font-medium">
                    How we are building a strong CbeLOANS Brand
                  </p>
                </div>
                <div className="bg-white mx-8 mb-8 rounded-xl shadow-lg transform transition-all duration-300 group-hover:translate-y-[-4px]">
                  <button className="w-full px-8 py-4 text-blue-600 font-bold text-lg flex items-center justify-center gap-2 hover:gap-4 transition-all">
                    KNOW MORE
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>

            {/* Work with Us Card */}
            <Link to="/why-us" className="group block">
              <div className="bg-gradient-to-br from-emerald-300 to-emerald-400 rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <div className="p-12 flex flex-col items-center justify-center flex-grow">
                  <div className="mb-8">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cg%3E%3Cellipse fill='%234ADE80' cx='200' cy='200' rx='120' ry='30' opacity='0.3'/%3E%3Ccircle fill='%23FCD34D' cx='150' cy='140' r='35'/%3E%3Crect fill='%2360A5FA' x='130' y='175' width='40' height='60' rx='3'/%3E%3Ccircle fill='%23374151' cx='200' cy='120' r='40'/%3E%3Crect fill='%23374151' x='175' y='160' width='50' height='70' rx='3'/%3E%3Ccircle fill='%23F59E0B' cx='270' cy='135' r='38'/%3E%3Crect fill='white' x='250' y='173' width='40' height='65' rx='3'/%3E%3Cpath fill='%234ADE80' d='M300,230 Q320,250 340,230 L360,230 L360,250 L280,250 L280,230 Z' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E" alt="Work with Us Illustration" className="w-64 h-48 object-contain" />
                  </div>
                  <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">Why with Us</h2>
                  <p className="text-xl text-gray-700 text-center font-medium">
                    Want to Join CbeLOANS?
                  </p>
                </div>
                <div className="bg-white mx-8 mb-8 rounded-xl shadow-lg transform transition-all duration-300 group-hover:translate-y-[-4px]">
                  <button className="w-full px-8 py-4 text-blue-600 font-bold text-lg flex items-center justify-center gap-2 hover:gap-4 transition-all">
                    JOIN US
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section id="emi-calculator" className="py-20 bg-white w-full">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4 px-4 animate-fadeInUp">EMI Calculator</h2>
          <p className="text-lg text-center text-gray-600 mb-12 px-4 animate-fadeInUp">Calculate your monthly EMI and plan your finances</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
            <div className="bg-linear-to-br from-blue-50 to-gray-50 rounded-2xl shadow-xl p-10 border border-blue-100 hover-lift transition-smooth">
              <div className="mb-8">
                <label className="block text-gray-800 font-bold mb-3 text-lg">Loan Amount: <span className="text-yellow-600">₹{principal.toLocaleString()}</span></label>
                <input type="range" min="100000" max="10000000" step="100000" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer hover:bg-gray-400 transition-smooth" />
              </div>
              <div className="mb-8">
                <label className="block text-gray-800 font-bold mb-3 text-lg">Interest Rate: <span className="text-yellow-600">{rate.toFixed(2)}% p.a.</span></label>
                <input type="range" min="3" max="15" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer hover:bg-gray-400 transition-smooth" />
              </div>
              <div className="mb-8">
                <label className="block text-gray-800 font-bold mb-3 text-lg">Tenure: <span className="text-yellow-600">{tenure} Years</span></label>
                <input type="range" min="1" max="30" step="1" value={tenure} onChange={(e) => setTenure(e.target.value)} className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer hover:bg-gray-400 transition-smooth" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-yellow-400 to-yellow-500 text-gray-900 rounded-2xl shadow-2xl p-10 hover-lift transition-smooth group">
                <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-smooth">Your Monthly EMI</h3>
                <p className="text-6xl font-bold mb-3">₹{emi.toLocaleString()}</p>
                <p className="text-lg text-gray-800 font-semibold">Per Month</p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-smooth">
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Principal Amount:</span>
                    <span className="font-bold text-lg">₹{principal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Total Interest:</span>
                    <span className="font-bold text-lg text-red-600">₹{totalInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-lg text-gray-800">Total Amount Payable:</span>
                    <span className="font-bold text-lg text-blue-600">₹{totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="documents" className="py-20 bg-gray-50 w-full">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4 px-4 animate-fadeInUp">Document Checklist</h2>
          <p className="text-lg text-center text-gray-600 mb-12 px-4 animate-fadeInUp">Prepare these documents for a smooth loan application</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {documents.map((doc, index) => (
              <div key={index} style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }} className={`p-8 rounded-xl shadow-md hover:shadow-xl transition-smooth hover-lift border-l-4 ${doc.importance === 'Mandatory' ? 'bg-red-50 border-red-500' : 'bg-yellow-50 border-yellow-500'}`}>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-800 text-lg">{doc.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ml-2 ${doc.importance === 'Mandatory' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'}`}>
                    {doc.importance}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 px-4">
            <Link to="/documents" className="inline-block bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition-smooth shadow-lg hover-lift">
              View Complete Document List →
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section id="offers" className="py-20 bg-white w-full">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4 px-4 animate-fadeInUp">Special Offers</h2>
          <p className="text-lg text-center text-gray-600 mb-12 px-4 animate-fadeInUp">Limited time offers on various loan products</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-smooth group border border-gray-100">
              <div className="bg-linear-to-br from-blue-600 to-blue-800 text-white p-8 group-hover:from-blue-700 group-hover:to-blue-900 transition-smooth">
                <h3 className="text-2xl font-bold mb-3">Zero Processing Fee</h3>
                <p className="text-4xl font-bold">Save ₹10,000</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg font-semibold">Apply without any processing charges</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-smooth group border border-gray-100">
              <div className="bg-linear-to-br from-green-600 to-green-800 text-white p-8 group-hover:from-green-700 group-hover:to-green-900 transition-smooth">
                <h3 className="text-2xl font-bold mb-3">Special Home Loan Rates</h3>
                <p className="text-4xl font-bold">From 6.5% p.a.</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg font-semibold">Competitive rates with flexible tenure</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-smooth group border border-gray-100">
              <div className="bg-linear-to-br from-purple-600 to-purple-800 text-white p-8 group-hover:from-purple-700 group-hover:to-purple-900 transition-smooth">
                <h3 className="text-2xl font-bold mb-3">Quick Personal Loans</h3>
                <p className="text-4xl font-bold">Up to ₹40L</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg font-semibold">Approved in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Banks */}
      <section id="partners" className="py-20 bg-linear-to-b from-white to-gray-50 w-full">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4 px-4 animate-fadeInUp">Our Partner Banks</h2>
          <p className="text-lg text-center text-gray-600 mb-14 px-4 animate-fadeInUp">We work with 150+ leading financial institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 max-w-7xl mx-auto">
            {[
              { name: 'SBI', image: sbiLogo },
              { name: 'ICICI', image: iciciLogo },
              { name: 'HDFC', image: hdfcLogo },
              { name: 'AXIS', image: axisLogo },
              { name: 'KOTAK', image: kotakLogo },
              { name: 'PNB', image: pnbLogo },
              { name: 'CANARA', image: canaraLogo },
              { name: 'IDBI', image: idbiLogo },
              { name: 'BAJAJ', image: bajajLogo },
              { name: 'IDFC', image: idfc },
              { name: 'TATA', image: tataLogo },
              { name: 'YES BANK', image: yesLogo },
            ].map((bank, index) => (
              <div key={index} style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.05}s both` }} className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-2xl hover:border-blue-400 transition-smooth hover-lift group min-h-[140px]">
                <div className="text-center w-full flex flex-col items-center">
                  <img 
                    src={bank.image} 
                    alt={bank.name}
                    className="h-20 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="font-bold text-xs text-gray-700 group-hover:text-blue-600 text-center">{bank.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 text-white w-full relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full opacity-5 translate-y-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="w-full text-center px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 animate-fadeInUp">Apply now and get your loan approved in 24-48 hours</p>
          <Link to="/contact" onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} className="inline-block bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-12 py-5 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-smooth font-bold text-xl shadow-2xl hover:shadow-3xl hover-lift">
            Apply for a Loan Now 🚀
          </Link>
        </div>
      </section>
    </div>
  );
}
