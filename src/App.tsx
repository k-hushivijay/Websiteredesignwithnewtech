import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { PatientEMRPage } from './pages/PatientEMRPage';
import { FixedAssetPage } from './pages/FixedAssetPage';
import { InternationalMedicalTourismPage } from './pages/InternationalMedicalTourismPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'clients':
        return <ClientsPage />;
      case 'contact':
        return <ContactPage />;
      case 'patient-emr':
        return <PatientEMRPage onNavigate={setCurrentPage} />;
      case 'fixed-asset-inventory':
        return <FixedAssetPage onNavigate={setCurrentPage} />;
      case 'medical-tourism':
        return <InternationalMedicalTourismPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Toaster />
    </div>
  );
}