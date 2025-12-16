export default function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-smooth hover-lift group border border-gray-200 hover:border-blue-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-smooth rounded-2xl"></div>
      <div className="relative z-10">
        <div className="text-6xl mb-4 group-hover:animate-bounce-slow inline-block transform group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-smooth">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-smooth">{description}</p>
      </div>
    </div>
  );
}
