import React, { useState } from 'react';
import { Send, Linkedin, Instagram, Facebook, Youtube, Github } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      try {
        const response = await fetch('https://backend.naiyo24.com/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        const data = await response.json();
        setStatus(data.message || 'Subscribed! 🚀');
        if (response.ok) {
          setTimeout(() => {
            setEmail('');
            setStatus('');
          }, 3000);
        }
      } catch (error) {
        setStatus('Error connecting to server.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'careers' || target === 'terms' || target === 'privacy') {
      if (onNavigate) onNavigate(target);
    } else {
      const sectionMap = {
        'aboutus': 'about',
        'portfolio': 'projects',
        'webdev': 'services',
        'mobileapps': 'services',
        'ui/uxdesign': 'services',
        'aiautomation': 'services',
        'cloudinfra': 'services'
      };
      const sectionId = sectionMap[target] || target;
      
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
    }
  };

  return (
    <footer style={{ padding: '80px 0 40px 0', borderTop: '4px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', marginBottom: '60px' }}>

          {/* Branding Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                height: '65px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <img src="/assets/naiyo_black_nobg.png" alt="Naiyo24 Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
              </div>
              <span style={{ fontFamily: '"Jaldi", sans-serif', fontWeight: '700', fontSize: '1.8rem', color: 'var(--heading)' }}>
                Naiyo24
              </span>
            </div>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Building high-performance digital systems, mobile apps, website designs, and cloud infrastructure for businesses looking to scale.
            </p>
          </div>

          {/* Links Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Home', 'About Us', 'Portfolio', 'Contact'].map((link) => {
                const target = link.toLowerCase().replace(' ', '');
                return (
                  <li key={link}>
                    <a 
                      href={`#${target === 'aboutus' ? 'about' : (target === 'portfolio' ? 'projects' : target)}`} 
                      onClick={(e) => handleLinkClick(e, target)} 
                      className="footer-link"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
              <li>
                <a href="/careers" onClick={(e) => handleLinkClick(e, 'careers')} className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="/terms" onClick={(e) => handleLinkClick(e, 'terms')} className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" onClick={(e) => handleLinkClick(e, 'privacy')} className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Web Dev', 'Mobile Apps', 'UI/UX Design', 'AI automation', 'Cloud infra'].map((link) => {
                const target = link.toLowerCase().replace(' ', '').replace('/', '');
                return (
                  <li key={link}>
                    <a 
                      href="#services" 
                      onClick={(e) => handleLinkClick(e, target)} 
                      className="footer-link"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>Newsletter</h4>
            <p style={{ color: '#555', fontSize: '0.95rem' }}>Subscribe to get our latest insights and tech summaries.</p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="neo-border-thick"
                style={{
                  padding: '8px 12px', borderRadius: '8px', fontSize: '0.9rem',
                  flex: 1, outline: 'none'
                }}
              />
              <button type="submit" className="neo-btn neo-btn-pink" style={{ padding: '8px 14px' }} disabled={loading}>
                {loading ? <span style={{ fontSize: '0.8rem' }}>...</span> : <Send size={16} />}
              </button>
            </form>
            {status && (
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--black)' }}>
                {status}
              </span>
            )}
          </div>

        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'center', borderTop: '2px solid #EEE', paddingTop: '32px', gap: '20px'
        }}>
          <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: '600' }}>
            © {new Date().getFullYear()} Naiyo24. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="https://www.linkedin.com/company/naiyo24-official/" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '6px', borderRadius: '50%', display: 'inline-flex' }}>
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com/naiyo24_official/" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '6px', borderRadius: '50%', display: 'inline-flex' }}>
              <Instagram size={16} />
            </a>
            <a href="https://www.facebook.com/Naiyo24/" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '6px', borderRadius: '50%', display: 'inline-flex' }}>
              <Facebook size={16} />
            </a>
            <a href="https://www.youtube.com/@naiyo24_official" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '6px', borderRadius: '50%', display: 'inline-flex' }}>
              <Youtube size={16} />
            </a>
            <a href="https://github.com/naiyo-24" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '6px', borderRadius: '50%', display: 'inline-flex' }}>
              <Github size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
