import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { WhyChoose } from './components/WhyChoose';
import { IndustryWeServe } from './components/IndustryWeServe';
import { Certifications } from './components/Certifications';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutUs } from './components/AboutUs';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { Services } from './components/Services';
import { Applications } from './components/Applications';
import { Catalogue } from './components/Catalogue';
import { ContactUs } from './components/ContactUs';

function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhyChoose />
      <IndustryWeServe />
      <Certifications />
      <Testimonials />
    </>
  );
}

function ProductsPage() {
  const navigate = useNavigate();
  
  const handleViewDetail = (productName: string) => {
    navigate(`/products/${encodeURIComponent(productName)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <Products onViewDetail={handleViewDetail} />;
}

function ProductDetailPage() {
  const location = useLocation();
  const productName = decodeURIComponent(location.pathname.split('/products/')[1] || '');

  return <ProductDetail productName={productName} />;
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const getCurrentPage = (): 'home' | 'about' | 'products' | 'services' | 'applications' | 'catalogue' | 'contact' => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/products')) return 'products';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/applications')) return 'applications';
    if (path.startsWith('/catalogue')) return 'catalogue';
    if (path.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const handleNavigate = (page: 'home' | 'about' | 'products' | 'services' | 'applications' | 'catalogue' | 'contact') => {
    const routes: Record<string, string> = {
      home: '/',
      about: '/about',
      products: '/products',
      services: '/services',
      applications: '/applications',
      catalogue: '/catalogue',
      contact: '/contact'
    };
    navigate(routes[page]);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productName" element={<ProductDetailPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      
      <Footer currentPage={getCurrentPage()} onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}