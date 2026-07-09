import React from 'react';
import { Rocket, Zap, ChevronRight } from 'lucide-react';
import BrowserMockup from '../components/BrowserMockup';

export default function Hero() {
  return (
    <section id="home" style={{ padding: '130px 0 60px 0' }}>
      <div className="container">
        <div className="hero-wrapper" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column Text */}
          <div className="reveal-on-scroll reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="neo-border-thick" style={{
              alignSelf: 'flex-start', padding: '6px 14px', backgroundColor: 'var(--black)', color: 'var(--white)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <Zap size={14} fill="var(--heading)" /> BUILD • SCALE • GROW
            </div>
            
            <h1 style={{ fontSize: 'clamp(1.5rem, 8vw, 4rem)', letterSpacing: '-2px', textTransform: 'uppercase' }}>
              Building <span style={{
                display: 'inline-block', position: 'relative', padding: '0 8px', margin: '4px 0',
                backgroundColor: 'var(--black)', color: 'var(--white)', borderRadius: '16px',
                border: '3px solid var(--border)', boxShadow: '4px 4px 0px var(--border)'
              }}>Digital Products</span> That Actually Grow Businesses.
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: '#333333', lineHeight: 1.6, maxWidth: '540px' }}>
              We build websites, mobile apps, AI products, cloud solutions, branding, marketing and business systems for startups and enterprises.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px' }}>
              <a href="#contact" className="neo-btn neo-btn-pink">
                Start Your Project <Rocket size={18} />
              </a>
              <a href="#portfolio" className="neo-btn">
                View Our Work <ChevronRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Column Browser Mockup */}
          <div className="reveal-on-scroll reveal-right delay-200">
            <BrowserMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
