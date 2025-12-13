import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import WhyUs from './pages/WhyUs'
import Products from './pages/Products'
import Partners from './pages/Partners'
import Offers from './pages/Offers'
import EMICalculator from './pages/EMICalculator'
import Documents from './pages/Documents'
import Contact from './pages/Contact'
import Apply from './pages/Apply'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/emi-calculator" element={<EMICalculator />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
