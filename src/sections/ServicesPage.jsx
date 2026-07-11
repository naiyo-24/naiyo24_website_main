import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, ArrowRight, Star, Sparkles
} from 'lucide-react';

export default function ServicesPage({ onBackToHome, onSelectService }) {
  const [hoveredService, setHoveredService] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('http://192.168.0.159:8000/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '120px 0 80px 0', minHeight: '100vh' }}>
      <div className="container">

        {/* Back navigation */}
        <button
          onClick={onBackToHome}
          className="neo-btn"
          style={{ marginBottom: '40px', padding: '10px 20px', fontSize: '0.95rem' }}
        >
          <ArrowLeft size={18} /> Back to Home
        </button>

        {/* Page Header */}
        <div className="reveal-on-scroll reveal-up" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '60px' }}>
          <span className="neo-border-thick" style={{
            alignSelf: 'flex-start', padding: '6px 14px', backgroundColor: 'var(--black)',
            color: 'var(--white)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '800'
          }}>
            OUR COMPLETE CATALOG
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-2px', textTransform: 'uppercase' }}>
            Full Suite of Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#333333', maxWidth: '700px', lineHeight: 1.6 }}>
            Naiyo24 provides top-tier technology execution, business infrastructure setup, and creative branding strategies to power startups and enterprises.
          </p>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px 0' }}>Loading services...</p>
        ) : services.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '40px 0' }}>No services available yet.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
            {services.map((svc, idx) => {
              const isHovered = hoveredService === svc.id;

              return (
                <div
                  key={svc.id || idx}
                  onMouseEnter={() => setHoveredService(svc.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`neo-card reveal-on-scroll reveal-up delay-${(idx % 4) * 100}`}
                  style={{
                    padding: '32px', backgroundColor: 'var(--white)', position: 'relative', overflow: 'hidden',
                    display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    transform: isHovered ? 'translate(-4px, -4px)' : 'none',
                    boxShadow: isHovered ? '12px 12px 0px var(--black)' : '8px 8px 0px var(--black)'
                  }}
                >
                  {isHovered && (
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', backgroundColor: 'var(--black)', opacity: 0.05, borderRadius: '0 0 0 100%', pointerEvents: 'none' }}></div>
                  )}

                  <div className="neo-border-thick" style={{
                    width: '64px', height: '64px', borderRadius: '16px', backgroundColor: 'var(--black)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', flexShrink: 0
                  }}>
                    {svc.icon_url ? (
                      <img src={svc.icon_url.startsWith('http') ? svc.icon_url : `http://192.168.0.159:8000/${svc.icon_url}`} alt={svc.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                    ) : (
                      <Sparkles size={32} color="var(--white)" />
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'var(--black)' }}>
                    {svc.name}
                  </h3>

                  <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '32px', flexGrow: 1 }}>
                    {svc.description}
                  </p>

                  <button
                    onClick={() => onSelectService(svc.id)}
                    className="neo-btn"
                    style={{
                      alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.95rem',
                      backgroundColor: isHovered ? 'var(--black)' : 'var(--white)',
                      color: isHovered ? 'var(--white)' : 'var(--black)',
                      borderColor: 'var(--black)', transition: 'all 0.2s'
                    }}
                  >
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Contact Hook */}
        <div className="neo-card reveal-on-scroll reveal-scale" style={{
          padding: '48px', backgroundColor: 'var(--black)', color: 'var(--white)', display: 'flex',
          flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px',
          borderRadius: 'var(--radius-xl)', marginTop: '80px'
        }}>
          <h2 style={{ fontSize: '2rem', letterSpacing: '-1px', color: 'var(--white)' }}>Need a Bespoke Solution?</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', fontWeight: '600', color: '#EEEEEE' }}>
            We collaborate with stakeholders to customize architectures, processes, and systems tailored to your exact business specifications.
          </p>
          <a
            href="/contact"
            className="neo-btn neo-btn-dark-pill"
          >
            Start a Conversation <Star size={16} fill="var(--white)" />
          </a>
        </div>

      </div>
    </div>
  );
}
