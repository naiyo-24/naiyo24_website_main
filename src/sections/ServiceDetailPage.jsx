import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Globe, Smartphone, Server, Database, Cloud, 
  Palette, Monitor, CheckCircle, Calendar, ShieldCheck, HelpCircle, Star, ArrowRight, Sparkles 
} from 'lucide-react';

export default function ServiceDetailPage({ serviceId, onBackToHome, onBackToServices }) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchServiceDetail();
  }, [serviceId]);

  const fetchServiceDetail = async () => {
    try {
      const response = await fetch(`http://192.168.0.159:8000/services/${serviceId}`);
      if (response.ok) {
        const data = await response.json();
        setDetail(data);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '120px 0', minHeight: '80vh', textAlign: 'center' }}>
        <div className="container">
          <h2>Loading service details...</h2>
        </div>
      </div>
    );
  }

  if (error || !detail) {
    return (
      <div style={{ padding: '120px 0', minHeight: '80vh', textAlign: 'center' }}>
        <div className="container">
          <h2>Service not found.</h2>
          <button className="neo-btn" onClick={onBackToHome} style={{ marginTop: '20px' }}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '120px 0 80px 0', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Navigation Breadcrumbs */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <button onClick={onBackToHome} className="neo-btn" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} /> Home
          </button>
          <button onClick={onBackToServices} className="neo-btn" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            All Services Catalog
          </button>
        </div>

        {/* Hero Banner Grid */}
        <div className="neo-card reveal-on-scroll reveal-up" style={{ 
          backgroundColor: 'var(--bg-card)', padding: '48px', marginBottom: '48px',
          boxShadow: '10px 10px 0px var(--border)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="neo-border-thick" style={{
                width: '72px', height: '72px', borderRadius: '20px', backgroundColor: 'var(--black)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {detail.icon_url ? (
                  <img src={detail.icon_url.startsWith('http') ? detail.icon_url : `http://192.168.0.159:8000/${detail.icon_url.startsWith('/') ? detail.icon_url.slice(1) : detail.icon_url}`} alt={detail.name} style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                ) : (
                  <Sparkles size={40} color="var(--white)" />
                )}
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1.5px', textTransform: 'uppercase' }}>
                {detail.name}
              </h1>
              <p style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--heading)', lineHeight: 1.4 }}>
                {detail.tagline || 'Premium Service'}
              </p>
              <p style={{ color: '#444444', lineHeight: 1.6 }}>
                {detail.description}
              </p>
            </div>

            {/* Right Information Box */}
            <div className="neo-border-thick" style={{ 
              padding: '32px', borderRadius: '16px', backgroundColor: 'var(--black)', color: 'var(--white)',
              display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '6px 6px 0px var(--border)'
            }}>
              <h3 style={{ fontSize: '1.4rem', borderBottom: '2px solid var(--border)', paddingBottom: '8px', color: 'var(--white)' }}>Project Metrics</h3>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: '#AAAAAA' }}>Timeline</span>
                <p style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--white)' }}>{detail.timeline || 'Custom Timeline'}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: '#AAAAAA' }}>Pricing Model</span>
                <p style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--white)' }}>{detail.pricing_model || 'Custom Pricing'}</p>
              </div>
              <a 
                href="#/contact" 
                className="neo-btn neo-btn-dark-pill"
                style={{ marginTop: '8px' }}
              >
                Inquire Service <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>

        {/* Double Column details */}
        <div className="grid-2" style={{ marginBottom: '60px', alignItems: 'stretch' }}>
          
          {/* Key Deliverables & Features */}
          <div className="neo-card reveal-on-scroll reveal-left" style={{ padding: '36px', backgroundColor: 'var(--bg-card)' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', letterSpacing: '-0.5px' }}>Key Capabilities</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none' }}>
              {detail.key_capabilities && detail.key_capabilities.length > 0 ? (
                detail.key_capabilities.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1rem', lineHeight: 1.5 }}>
                    <CheckCircle size={20} color="var(--black)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))
              ) : (
                <p style={{ color: '#555' }}>Capabilities tailored per project requirements.</p>
              )}
            </ul>

            <h3 style={{ fontSize: '1.2rem', marginTop: '32px', marginBottom: '12px', borderTop: '2px solid #EEE', paddingTop: '20px' }}>What You Get:</h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>
              {detail.what_you_get || 'Full access to deliverables specified during our project roadmap planning.'}
            </p>
          </div>

          {/* Operational Roadmap */}
          <div className="neo-card reveal-on-scroll reveal-right" style={{ padding: '36px', backgroundColor: 'var(--black)', color: 'var(--white)' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', letterSpacing: '-0.5px', color: 'var(--white)' }}>Execution Roadmap</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {detail.execution_roadmap && detail.execution_roadmap.length > 0 ? (
                detail.execution_roadmap.map((proc, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div className="neo-border-thick" style={{
                      width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--bg-card)', color: 'var(--heading)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0
                    }}>
                      {proc.step_number || proc.step || String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '4px', color: 'var(--white)' }}>{proc.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: '#EEEEEE', lineHeight: 1.4 }}>{proc.description || proc.desc}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ color: '#EEEEEE' }}>Custom execution roadmap defined after initial consultation.</p>
              )}
            </div>
          </div>

        </div>

        {/* Back buttons bottom banner */}
        <div className="reveal-on-scroll reveal-scale" style={{ textAlign: 'center', marginTop: '40px' }}>
          <button onClick={onBackToServices} className="neo-btn neo-btn-purple">
            Explore Other Services <Star size={16} fill="var(--heading)" />
          </button>
        </div>

      </div>
    </div>
  );
}
