import { Link } from 'react-router-dom';

export default function LoanCard({ title, description, image, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-smooth transform hover:scale-105 hover-lift group border border-gray-100">
      {image && (
        <div className="h-48 bg-linear-to-br from-blue-400 via-blue-500 to-blue-700 flex items-center justify-center text-white text-6xl relative overflow-hidden group-hover:from-blue-500 group-hover:to-blue-800 transition-smooth">
          <div className="absolute inset-0 bg-white opacity-5"></div>
          <div className="group-hover:animate-bounce-slow text-7xl relative z-10">{icon || '🏠'}</div>
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-smooth">{title}</h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">{description}</p>
        <Link to="/contact" onClick={() => setTimeout(() => { document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' }); }, 100)} className="inline-block bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-smooth font-bold shadow-md hover:shadow-lg hover-lift transform hover:scale-105">
          Apply Now ➤
        </Link>
      </div>
    </div>
  );
}
