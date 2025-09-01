import './index.css';
import './components/Cursor.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import Download from './components/Download';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';

import TermsAndConditions from './pages/TermsAndConditions.tsx';
import RefundPolicy from './pages/RefundPolicy.tsx';
import ContactUs from './pages/ContactUs.tsx';
import ComingSoon from './pages/ComingSoon.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import DeleteAccount from './pages/DeleteAccount.tsx';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Features />
    <Download />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<><Navbar /><TermsAndConditions /><Footer /></>} />
        <Route path="/refund" element={<><Navbar /><RefundPolicy /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><ContactUs /><Footer /></>} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/privacy-policy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        <Route path="/delete-account" element={<><Navbar /><DeleteAccount /><Footer /></>} />
      </Routes>
    </Router>
  );
};

export default App;
