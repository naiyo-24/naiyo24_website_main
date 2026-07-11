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

const parsePath = () => {
  const path = window.location.pathname;
  if (path.startsWith('/services/')) {
    const id = path.replace('/services/', '');
    return { page: 'service-detail', serviceId: id };
  } else if (path.startsWith('/projects/')) {
    const id = path.replace('/projects/', '');
    return { page: 'project-detail', projectId: id };
  } else if (path === '/projects' || path === '/projects/') {
    return { page: 'projects', serviceId: null };
  } else if (path === '/services' || path === '/services/') {
    return { page: 'services', serviceId: null };
  } else if (path === '/contact' || path === '/contact/') {
    return { page: 'contact', serviceId: null };
  } else if (path === '/about' || path === '/about/') {
    return { page: 'about', serviceId: null };
  } else if (path === '/ceo-story' || path === '/ceo-story/') {
    return { page: 'ceo-story', serviceId: null };
  } else if (path === '/terms' || path === '/terms/') {
    return { page: 'terms', serviceId: null };
  } else if (path === '/privacy' || path === '/privacy/') {
    return { page: 'privacy', serviceId: null };
  } else if (path === '/careers' || path === '/careers/') {
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

  const handlePathChange = () => {
    const { page, serviceId, projectId } = parsePath();
    setCurrentPage(page);
    setSelectedServiceId(serviceId || null);
    setSelectedProjectId(projectId || null);
    
    // Smooth scroll or snap to top on path change
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    // Run on initial load
    handlePathChange();

    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      // Intercept clean internal paths (e.g. /about, /services)
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        window.history.pushState(null, '', href);
        handlePathChange();
      }
    };

    window.addEventListener('popstate', handlePathChange);
    document.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('popstate', handlePathChange);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  useEffect(() => {
    let observer;
    let mutationObserver;
    let timeouts = [];

    const startObserver = () => {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.05,
      };

      observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const observeElements = () => {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        revealElements.forEach((el) => {
          if (!el.classList.contains('revealed')) {
            // Check if element is already inside the viewport
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            if (isVisible) {
              el.classList.add('revealed');
            } else {
              observer.observe(el);
            }
          }
        });
      };

      // Initial observation
      observeElements();

      // Setup MutationObserver to watch for any DOM updates (API loaded items, state changes, etc.)
      mutationObserver = new MutationObserver(() => {
        observeElements();
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Fallback timeouts and periodic interval to guarantee re-observation and reveal
      [100, 300, 800, 1500, 3000].forEach((delay) => {
        const t = setTimeout(observeElements, delay);
        timeouts.push(t);
      });

      const interval = setInterval(observeElements, 500);
      timeouts.push(interval);
    };

    // Delay the setup of the observers until the layout settles and scroll resets
    const initTimeout = setTimeout(startObserver, 200);
    timeouts.push(initTimeout);

    return () => {
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [currentPage, selectedServiceId]);

  const handleNavigate = (page, id = null) => {
    let path = '/';
    if (page === 'service-detail' && id) {
      path = `/services/${id}`;
    } else if (page === 'project-detail' && id) {
      path = `/projects/${id}`;
    } else if (page === 'services') {
      path = `/services`;
    } else if (page === 'contact') {
      path = `/contact`;
    } else if (page === 'about') {
      path = `/about`;
    } else if (page === 'ceo-story') {
      path = `/ceo-story`;
    } else if (page === 'terms') {
      path = `/terms`;
    } else if (page === 'privacy') {
      path = `/privacy`;
    } else if (page === 'careers') {
      path = `/careers`;
    }

    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
      handlePathChange();
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
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

