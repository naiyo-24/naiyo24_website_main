import React, { useEffect, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Navbar from './sections/Navbar';
import FloatingElements from './components/FloatingElements';
import Hero from './sections/Hero';
import Trust from './sections/Trust';
import Stats from './sections/Stats';
import Services from './sections/Services';
import WhyChoose from './sections/WhyChoose';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import ServicesPage from './sections/ServicesPage';
import ServiceDetailPage from './sections/ServiceDetailPage';
import ContactPage from './sections/ContactPage';
import AboutPage from './sections/AboutPage';
import CEOStoryPage from './sections/CEOStoryPage';
import Naiyo24Hub from './sections/Naiyo24Hub';
import AboutSection from './sections/AboutSection';
import TermsPage from './sections/TermsPage';
import PrivacyPage from './sections/PrivacyPage';
import CareersPage from './sections/CareersPage';
import ProjectDetailPage from './sections/ProjectDetailPage';
import ProjectsPage from './sections/ProjectsPage';

const parseHash = () => {
  const hash = window.location.hash;
  if (hash.startsWith('#/services/')) {
    const id = hash.replace('#/services/', '');
    return { page: 'service-detail', serviceId: id };
  } else if (hash.startsWith('#/projects/')) {
    const id = hash.replace('#/projects/', '');
    return { page: 'project-detail', projectId: id };
  } else if (hash === '#/projects') {
    return { page: 'projects', serviceId: null };
  } else if (hash === '#/services') {
    return { page: 'services', serviceId: null };
  } else if (hash === '#/contact') {
    return { page: 'contact', serviceId: null };
  } else if (hash === '#/about') {
    return { page: 'about', serviceId: null };
  } else if (hash === '#/ceo-story') {
    return { page: 'ceo-story', serviceId: null };
  } else if (hash === '#/terms') {
    return { page: 'terms', serviceId: null };
  } else if (hash === '#/privacy') {
    return { page: 'privacy', serviceId: null };
  } else if (hash === '#/careers') {
    return { page: 'careers', serviceId: null };
  } else {
    return { page: 'home', serviceId: null };
  }
};

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="animate-float" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
      <button 
        onClick={handleClick}
        className="neo-btn"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
        title="Scroll to Top"
      >
        <ArrowUp size={28} color="var(--heading)" />
      </button>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const { page, serviceId, projectId } = parseHash();
      const hash = window.location.hash;
      const isHomepageSection = hash && !hash.startsWith('#/');
      
      setCurrentPage(page);
      setSelectedServiceId(serviceId || null);
      setSelectedProjectId(projectId || null);
      
      if (!isHomepageSection) {
        window.scrollTo({ top: 0 });
      }
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Timeout allows the DOM to render before selecting elements
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [currentPage, selectedServiceId]);

  const handleNavigate = (page, id = null) => {
    if (page === 'service-detail' && id) {
      window.location.hash = `#/services/${id}`;
    } else if (page === 'project-detail' && id) {
      window.location.hash = `#/projects/${id}`;
    } else if (page === 'services') {
      window.location.hash = `#/services`;
    } else if (page === 'contact') {
      window.location.hash = `#/contact`;
    } else if (page === 'about') {
      window.location.hash = `#/about`;
    } else if (page === 'ceo-story') {
      window.location.hash = `#/ceo-story`;
    } else if (page === 'terms') {
      window.location.hash = `#/terms`;
    } else if (page === 'privacy') {
      window.location.hash = `#/privacy`;
    } else if (page === 'careers') {
      window.location.hash = `#/careers`;
    } else {
      window.location.hash = `#/`;
    }
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Background decorations */}
      <FloatingElements />
      
      {/* Sticky navigation */}
      <Navbar currentPage={currentPage} onNavigate={(page) => handleNavigate(page)} />

      {/* Conditional page render */}
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Trust />
          <Stats />
          <AboutSection />
          <Services 
            onViewAllServices={() => handleNavigate('services')} 
            onSelectService={(id) => handleNavigate('service-detail', id)}
          />
          <Naiyo24Hub />
          <WhyChoose />
          <Projects onSelectProject={(id) => handleNavigate('project-detail', id)} />
          <Testimonials />
          <CTA />
        </>
      ) : currentPage === 'projects' ? (
        <ProjectsPage onNavigate={handleNavigate} />
      ) : currentPage === 'services' ? (
        <ServicesPage 
          onBackToHome={() => handleNavigate('home')} 
          onSelectService={(id) => handleNavigate('service-detail', id)}
        />
      ) : currentPage === 'contact' ? (
        <ContactPage onBackToHome={() => handleNavigate('home')} />
      ) : currentPage === 'about' ? (
        <AboutPage onBackToHome={() => handleNavigate('home')} />
      ) : currentPage === 'ceo-story' ? (
        <CEOStoryPage onBackToAbout={() => handleNavigate('about')} />
      ) : currentPage === 'terms' ? (
        <TermsPage onBackToHome={() => handleNavigate('home')} />
      ) : currentPage === 'privacy' ? (
        <PrivacyPage onBackToHome={() => handleNavigate('home')} />
      ) : currentPage === 'careers' ? (
        <CareersPage onBackToHome={() => handleNavigate('home')} />
      ) : currentPage === 'project-detail' ? (
        <ProjectDetailPage 
          projectId={selectedProjectId} 
          onNavigate={handleNavigate}
        />
      ) : (
        <ServiceDetailPage 
          serviceId={selectedServiceId} 
          onBackToHome={() => handleNavigate('home')}
          onBackToServices={() => handleNavigate('services')}
        />
      )}
      
      <ScrollButton />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

