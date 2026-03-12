import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AiIt from './pages/AiIt';
import HoldingCompany from './pages/HoldingCompany';
import ProductsHub from './pages/products/ProductsHub';
import SarwHub from './pages/products/SarwHub';
import SarwCal from './pages/products/SarwCal';
import SarwBill from './pages/products/SarwBill';
import Careers from './pages/Careers';
import PartnerWithUs from './pages/PartnerWithUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import RefundPolicy from './pages/RefundPolicy';
import VerifyCertificate from './pages/VerifyCertificate';
import AdminCertificates from './pages/AdminCertificates';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<HoldingCompany />} />
          <Route path="holding-company" element={<HoldingCompany />} />
          <Route path="ai-it" element={<AiIt />} />
          <Route path="products" element={<ProductsHub />} />
          <Route path="products/sarwhub" element={<SarwHub />} />
          <Route path="products/sarwcal" element={<SarwCal />} />
          <Route path="products/sarwbill" element={<SarwBill />} />
          <Route path="careers" element={<Careers />} />
          <Route path="partner" element={<PartnerWithUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="verify" element={<VerifyCertificate />} />
          <Route path="verify/:id" element={<VerifyCertificate />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/certificates" element={<AdminCertificates />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
