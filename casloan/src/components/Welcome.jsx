function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-12 max-w-2xl w-full text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Welcome</h1>
        <p className="text-xl text-gray-600 mb-8">
          Get started with your loan application today
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Welcome;
