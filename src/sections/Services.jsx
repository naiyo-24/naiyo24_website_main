import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Smartphone, Sparkles, Cpu, TrendingUp, Globe } from 'lucide-react';

export default function Services({ onViewAllServices, onSelectService }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('http://192.168.0.159:8000/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data.slice(0, 6)); // Display max 6 on homepage
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="services" style={{ padding: '80px 0', backgroundColor: 'var(--bg-card)', borderTop: '4px solid var(--border)', borderBottom: '4px solid var(--border)' }}>
      <div className="container">
        <div className="reveal-on-scroll reveal-up" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '50px' }}>
          <span className="neo-border-thick" style={{
            alignSelf: 'flex-start', padding: '6px 14px', backgroundColor: 'var(--black)',
            color: 'var(--white)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '800'
          }}>
            OUR SERVICES
          </span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <h2 style={{ fontSize: '2.8rem', maxWidth: '600px', letterSpacing: '-1px' }}>
              We Build Products That Grow Businesses
            </h2>
            <button
              onClick={(e) => {
                e.preventDefault();
                onViewAllServices();
              }}
              className="neo-btn"
            >
              View All Services <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px 0' }}>Loading services...</p>
        ) : services.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '40px 0' }}>No services available yet.</p>
        ) : (
          <div className="grid-3">
            {services.map((svc, idx) => (
              <div
                key={svc.id || idx}
                className={`neo-card neo-card-interactive reveal-on-scroll reveal-up delay-${(idx % 3) * 100 + 100}`}
                style={{ padding: '32px', backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <div className="neo-border-thick" style={{
                  width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--black)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {svc.icon_url ? (
                    <img src={svc.icon_url.startsWith('http') ? svc.icon_url : `http://192.168.0.159:8000/${svc.icon_url}`} alt={svc.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  ) : (
                    <Sparkles size={28} color="var(--white)" />
                  )}
                </div>
                <h3 style={{ fontSize: '1.6rem' }}>{svc.name}</h3>
                <p style={{ color: '#444', lineHeight: 1.6 }}>{svc.description}</p>
                <button
                  onClick={() => onSelectService(svc.id)}
                  className="neo-btn"
                  style={{ alignSelf: 'flex-start', padding: '8px 16px', fontSize: '0.9rem' }}
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
