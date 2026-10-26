import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/layout/Nav.jsx';
import Footer from './components/layout/Footer.jsx';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp.jsx';
import AskAI from './components/layout/AskAI.jsx';
import Home from './pages/Home.jsx';
import ExploreApps from './pages/ExploreApps.jsx';
import PricingPage from './pages/PricingPage.jsx';
import ClientsPage from './pages/ClientsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AppDetails from './pages/AppDetails.jsx';
import LivePreview from './pages/LivePreview.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const isPreviewMode = location.pathname.includes('/preview');

  return (
    <div className="app-layout">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<ExploreApps />} />
        <Route path="/templates" element={<ExploreApps />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/app/:appId" element={<AppDetails />} />
        <Route path="/app/:appId/preview" element={<LivePreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isPreviewMode && <Footer />}
      <FloatingWhatsApp />
      <AskAI />
    </div>
  );
}
