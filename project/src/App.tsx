import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Wisdom from './components/sections/Wisdom';
import Community from './components/sections/Community';
import Footer from './components/layout/Footer';
import Blog from './pages/Blog';
import ServicePage from './pages/Services';
import Retreats from './pages/Retreats';
import RetreatDetails from './pages/Retreats/[id]';
import WisdomPage from './pages/Wisdom';
import WhatsAppWidget from './components/widgets/WhatsAppWidget';
import LoadingScreen from './components/ui/LoadingScreen';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Handle initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('page-transition-in');
    }, 2000);

    // Handle route changes
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('locationchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('locationchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const renderContent = () => {
    if (currentPath === '/blog') {
      return <Blog />;
    }

    if (currentPath.startsWith('/services/')) {
      return <ServicePage />;
    }

    if (currentPath === '/retreats') {
      return <Retreats />;
    }

    if (currentPath.startsWith('/retreats/')) {
      return <RetreatDetails />;
    }

    if (currentPath === '/wisdom') {
      return <WisdomPage />;
    }

    if (currentPath === '/dashboard') {
      return <Dashboard />;
    }

    return (
      <main className="opacity-0 transition-opacity duration-1000 ease-out">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Wisdom />
        <Community />
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          {renderContent()}
          <Footer />
          <WhatsAppWidget />
        </>
      )}
    </div>
  );
}

export default App;