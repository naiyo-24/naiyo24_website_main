import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="neo-card neo-card-dark reveal-on-scroll reveal-scale" style={{
          padding: '60px 40px', backgroundColor: 'var(--black)', display: 'flex',
          flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '28px',
          boxShadow: '10px 10px 0px var(--border)'
        }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '800px', letterSpacing: '-1.5px', textTransform: 'uppercase', color: 'white' }}>
            Let&apos;s Build Something Amazing Together.
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', fontWeight: '600', color: 'white' }}>
            Have an idea or a project that needs technical execution? Contact us today for a free strategic consultation session.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <a href="mailto:naiyooffice@gmail.com" className="neo-btn neo-btn-dark-pill" style={{ fontSize: '1.1rem' }}>
              Book Free Consultation <ArrowRight size={18} />
            </a>
            <a href="#/contact" className="neo-btn" style={{
              fontSize: '1.1rem',
              backgroundColor: 'transparent',
              color: 'var(--white)',
              borderColor: 'var(--white)',
              boxShadow: '4px 4px 0 0 var(--white)'
            }}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
