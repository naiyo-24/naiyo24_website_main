import React, { useState, useEffect } from 'react';
import { ArrowRight, LayoutGrid, X } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (currentPage !== 'home') {
      setActiveSection(currentPage);
      return;
    }

    const sections = ['home', 'about', 'services', 'hub', 'projects', 'testimonials', 'contact'];
    
    const handleScroll = () => {
      // Use a scroll offset (1/3rd of the viewport height) to trigger section changes slightly early
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleLinkClick = (e, item) => {
    const target = item.toLowerCase().replace(' ', '').replace('24', '');
    
    // Normalize links
    const sectionId = target === 'aboutus' ? 'about' : (target === 'naiyohub' ? 'hub' : (target === 'home' ? 'home' : target));
    
    const scrollToSection = () => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (currentPage !== 'home') {
      e.preventDefault();
      onNavigate('home');
      setTimeout(() => {
        scrollToSection();
      }, 150);
    } else {
      e.preventDefault();
      scrollToSection();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header style={{ position: 'fixed', top: '12px', left: 0, right: 0, zIndex: 1000, padding: '0 20px' }}>
      <div className="container" style={{ padding: 0 }}>
        <nav className="neo-border-thick neo-shadow-black" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 24px', backgroundColor: 'var(--bg-card)', borderRadius: '24px'
        }}>
          
          {/* Logo */}
          <div 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            <img src="/assets/naiyo_black_nobg.png" alt="Naiyo24 Logo" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                fontFamily: '"Jaldi", sans-serif', fontWeight: '700', fontSize: '1.8rem', 
                color: 'var(--heading)', lineHeight: 0.9 
              }}>Naiyo24</span>
              <span style={{ 
                fontSize: '0.65rem', fontWeight: '800', letterSpacing: '1px', 
                color: '#666', marginTop: '2px' 
              }}>PRIVATE LIMITED</span>
            </div>
          </div>
 
          {/* Desktop Menu */}
          <div className="nav-menu-desktop" style={{ display: 'flex' }}>
            <ul style={{ display: 'flex', gap: '24px', listStyle: 'none' }}>
              {['Home', 'About Us', 'Services', 'Naiyo24 Hub', 'Projects', 'Testimonials', 'Contact'].map((item) => {
                const itemKey = item === 'Services' ? 'services' 
                              : item === 'About Us' ? 'about' 
                              : item === 'Contact' ? 'contact'
                              : item === 'Naiyo24 Hub' ? 'hub'
                              : item === 'Projects' ? 'projects'
                              : item === 'Testimonials' ? 'testimonials'
                              : 'home';
                const isActive = activeSection === itemKey;
                const href = `#${itemKey}`;
                return (
                  <li key={item}>
                    <a 
                      href={href} 
                      onClick={(e) => handleLinkClick(e, item)}
                      style={{
                        fontFamily: 'var(--font-heading)', fontWeight: '700', textDecoration: 'none',
                        fontSize: '1rem', transition: 'color 0.2s', padding: '6px 12px',
                        borderRadius: '8px', border: '2px solid transparent',
                        backgroundColor: isActive ? 'var(--black)' : 'transparent',
                        color: isActive ? 'var(--white)' : 'var(--heading)',
                        borderColor: isActive ? '#000000' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.target.style.backgroundColor = 'var(--black)';
                          e.target.style.borderColor = '#000000';
                          e.target.style.color = 'var(--white)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.borderColor = 'transparent';
                          e.target.style.color = 'var(--heading)';
                        }
                      }}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
 
          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="neo-btn neo-btn-yellow hide-on-mobile" 
              style={{ padding: '8px 20px', fontSize: '0.95rem' }}
            >
              LET'S TALK ↗
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="neo-btn nav-toggle" 
              style={{ padding: '8px 12px' }}
            >
              {mobileMenuOpen ? <X size={20} /> : <LayoutGrid size={20} />}
            </button>
          </div>
 
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="neo-border-thick neo-shadow-black" style={{
            marginTop: '10px', backgroundColor: 'var(--bg-card)', borderRadius: '16px', padding: '20px',
            display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 99
          }}>
            {['Home', 'About Us', 'Services', 'Naiyo24 Hub', 'Projects', 'Testimonials', 'Contact'].map((item) => {
              const itemKey = item === 'Services' ? 'services' 
                            : item === 'About Us' ? 'about' 
                            : item === 'Contact' ? 'contact'
                            : item === 'Naiyo24 Hub' ? 'hub'
                            : item === 'Projects' ? 'projects'
                            : item === 'Testimonials' ? 'testimonials'
                            : 'home';
              const isActive = activeSection === itemKey;
              const href = `#${itemKey}`;
              return (
                <a 
                  key={item} 
                  href={href} 
                  onClick={(e) => handleLinkClick(e, item)}
                  style={{
                    fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1.2rem',
                    textDecoration: 'none', color: isActive ? 'var(--white)' : 'var(--heading)',
                    backgroundColor: isActive ? 'var(--black)' : 'transparent',
                    padding: '8px 12px', borderRadius: '8px', borderBottom: isActive ? 'none' : '2px solid #EEE'
                  }}
                >
                  {item}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
