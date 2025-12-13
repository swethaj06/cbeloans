# CbeLOANS - Loan Marketplace Website

A modern, responsive static website built with React, Vite, Tailwind CSS, and React Router. This platform connects customers with loan solutions from 150+ leading banks and NBFCs.

## 🎯 Project Overview

CbeLOANS is a digital marketplace designed to simplify the loan discovery, comparison, and disbursement process. The website features comprehensive information about various loan products, transparent processes, and easy navigation.

## 📁 Project Structure

```
casloan/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx      # Navigation bar with routing
│   │   ├── Footer.jsx      # Footer component
│   │   ├── HeroSection.jsx # Hero banner
│   │   ├── LoanCard.jsx    # Loan product card
│   │   └── BenefitCard.jsx # Benefits display card
│   │
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home page
│   │   ├── AboutUs.jsx      # About company page
│   │   ├── WhyUs.jsx        # Why choose us page
│   │   ├── Products.jsx     # Loan products listing
│   │   ├── Partners.jsx     # Partner banks display
│   │   ├── Offers.jsx       # Special offers page
│   │   ├── EMICalculator.jsx # EMI calculation tool
│   │   ├── Documents.jsx    # Document checklist
│   │   ├── Contact.jsx      # Contact form & info
│   │   └── Apply.jsx        # Apply page
│   │
│   ├── App.jsx              # Main app with routing
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
│
├── public/                  # Static assets
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # This file
```

## 🌐 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with highlights |
| `/about` | About Us | Company information and mission |
| `/why-us` | Why Us | Benefits and advantages |
| `/products` | Products | 10 different loan types |
| `/partners` | Partners | Partner banks and NBFCs |
| `/offers` | Offers | Current promotions |
| `/emi-calculator` | EMI Calculator | Interactive EMI calculation tool |
| `/documents` | Documents | Required documents checklist |
| `/contact` | Contact Us | Contact form and office details |
| `/apply` | Apply | Loan application page |

## 🏆 Key Features

### 1. **Responsive Design**
   - Mobile-first approach
   - Fully responsive across all devices
   - Tailwind CSS for modern styling

### 2. **Interactive Components**
   - EMI Calculator with real-time calculations
   - Interactive loan cards with hover effects
   - Contact form with validation

### 3. **Navigation**
   - Sticky navbar with active links
   - Mobile hamburger menu
   - Footer with quick links

### 4. **Content Organization**
   - 10 loan product types
   - 13 key benefits listed
   - Comprehensive company information
   - Partner bank integration

### 5. **User Experience**
   - Fast loading with Vite
   - Smooth page transitions
   - Clear call-to-actions throughout
   - Professional color scheme (Blue/White/Gray)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
cd casloan
npm install
```

### Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📦 Dependencies

- **React** (^19.2.0) - UI library
- **React DOM** (^19.2.0) - React rendering
- **React Router DOM** (^7.10.1) - Routing and navigation
- **Vite** (^7.2.4) - Build tool
- **Tailwind CSS** (^4.1.18) - CSS framework

### Dev Dependencies
- ESLint - Code linting
- PostCSS & Autoprefixer - CSS processing
- React plugin for Vite

## 🎨 Components

### Navbar Component
- Logo with branding
- Navigation links for all pages
- "Apply Now" CTA button
- Mobile responsive hamburger menu

### Footer Component
- Company information
- Quick links section
- Loan products links
- Contact information
- Copyright notice

### LoanCard Component
- Product title
- Product description
- Icon representation
- Apply Now button
- Hover effects

### BenefitCard Component
- Emoji icon
- Title and description
- Clean minimalist design
- Shadow and hover effects

### HeroSection Component
- Banner with gradient background
- Call-to-action buttons
- Feature highlights

## 💻 Page Features

### Home Page
- Hero section with main CTA
- 3 key features highlighted
- Quick navigation to main sections

### About Us Page
- Company introduction
- Vision and mission statements
- 4 focus areas explained
- Company registration details

### Why Us Page
- Team experience highlights
- 13 benefits in grid layout
- Professional value proposition

### Products Page
- 10 loan product types
- Detailed descriptions
- Apply Now buttons on each product
- Icon representation for each product type

### Partners Page
- Nationalized banks logos
- Private banks & NBFCs logos
- Partnership information
- Future opportunities

### Offers Page
- 6 special offers displayed
- Discount information
- Limited-time offer banner
- Call-to-action buttons

### EMI Calculator Page
- Interactive loan amount slider
- Interest rate slider
- Tenure selector
- Real-time EMI calculation
- Comprehensive loan breakdown
- Visual summary cards

### Documents Page
- Required documents checklist
- Importance indicators (Mandatory/Important)
- Loan-type specific documents
- Document submission tips

### Contact Us Page
- Contact form with validation
- Office location information
- Phone and email details
- Company information sidebar
- Branch office locations

### Apply Page
- Application step-by-step guide
- Key features highlighting
- Application process overview

## 🎯 Website Contents Covered

✅ About Us  
✅ Why apply through us?  
✅ Products (10 types)  
✅ Our Partner Banks  
✅ Offers  
✅ EMI Calculator  
✅ Document Check List  
✅ Contact us  

## 🔧 Configuration

### Tailwind CSS
Already configured in `tailwind.config.js`

### Vite
Configured for React with Fast Refresh in `vite.config.js`

### PostCSS
Configured for Tailwind CSS processing in `postcss.config.js`

## 📱 Mobile Optimization

- Hamburger menu for mobile navigation
- Touch-friendly interface
- Responsive grid layouts
- Mobile-first design approach
- Optimized for screens from 320px to 4K

## 🔐 Best Practices

- Component-based architecture
- Reusable components (LoanCard, BenefitCard)
- Consistent styling using Tailwind
- Proper routing with React Router
- SEO-friendly structure
- Accessible color contrasts

## 📈 Future Enhancements

- Backend API integration
- User authentication
- Loan application form submission
- Real-time loan eligibility calculator
- Blog/News section
- Admin dashboard
- Payment gateway integration

## 📞 Contact & Support

For support, contact:
- **Email:** info@cbeloans.com
- **Phone:** +91-XXX-XXXX-XXXX
- **Location:** Coimbatore, Chennai, Bangalore, Mumbai

## 📄 License

This project is proprietary and owned by MaxDSA Business Services P Ltd.

## 👥 Team

Built by the MaxDSA Business Services team with 300+ years of collective banking experience.

---

**Last Updated:** December 2025  
**Version:** 1.0.0  
**Status:** Production Ready
