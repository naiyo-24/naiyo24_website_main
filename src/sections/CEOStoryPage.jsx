import React from 'react';
import { ArrowLeft, Linkedin, Instagram, Facebook, Youtube, Github, Quote } from 'lucide-react';

export default function CEOStoryPage({ onBackToAbout }) {
  return (
    <div style={{ padding: '120px 0 80px 0', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Back navigation */}
        <button 
          onClick={onBackToAbout}
          className="neo-btn" 
          style={{ marginBottom: '40px', padding: '10px 20px', fontSize: '0.95rem' }}
        >
          <ArrowLeft size={18} /> Back to About Us
        </button>

        {/* Hero Bio Header */}
        <div className="reveal-on-scroll reveal-up" style={{ marginBottom: '60px' }}>
          <span className="neo-border-thick" style={{
            alignSelf: 'flex-start', padding: '6px 14px', backgroundColor: 'var(--black)',
            color: 'var(--white)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '800'
          }}>
            FOUNDER BIOGRAPHY
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-2px', textTransform: 'uppercase', marginTop: '16px', lineHeight: 1.1 }}>
            Debasish Baidya
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#555', marginTop: '12px', fontWeight: '600' }}>
            Architecting high-scale digital solutions and redefining technical execution.
          </p>
        </div>

        {/* Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
          
          {/* Left Column - Photo & Highlights */}
          <div className="reveal-on-scroll reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'sticky', top: '100px' }}>
            <div className="neo-border-thick" style={{
              borderRadius: '24px', overflow: 'hidden', boxShadow: '8px 8px 0px var(--border)',
              height: '420px', width: '100%', backgroundColor: '#EEE'
            }}>
              <img 
                src="/assets/DebasishBaidya.png" 
                alt="Debasish Baidya Portrait" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} 
              />
            </div>

            {/* Profile Metrics Box */}
            <div className="neo-card" style={{ padding: '24px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', borderBottom: '2px solid var(--border)', paddingBottom: '8px' }}>Highlights</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                <div>
                  <span style={{ fontWeight: '800', color: '#666' }}>Role:</span>
                  <p style={{ fontWeight: '800', margin: '2px 0 0 0' }}>CEO & Founder</p>
                </div>
                <div>
                  <span style={{ fontWeight: '800', color: '#666' }}>Specialties:</span>
                  <p style={{ fontWeight: '800', margin: '2px 0 0 0' }}>Fullstack Engineering, Distributed Systems, Cloud Architecture</p>
                </div>
                <div>
                  <span style={{ fontWeight: '800', color: '#666' }}>Location:</span>
                  <p style={{ fontWeight: '800', margin: '2px 0 0 0' }}>Kolkata, West Bengal, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px', borderTop: '2px dashed #EEE', paddingTop: '16px' }}>
                <a href="https://www.linkedin.com/company/naiyo24-official/" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '8px', borderRadius: '50%' }}>
                  <Linkedin size={16} />
                </a>
                <a href="https://www.instagram.com/naiyo24_official/" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '8px', borderRadius: '50%' }}>
                  <Instagram size={16} />
                </a>
                <a href="https://www.facebook.com/Naiyo24/" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '8px', borderRadius: '50%' }}>
                  <Facebook size={16} />
                </a>
                <a href="https://www.youtube.com/@naiyo24_official" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '8px', borderRadius: '50%' }}>
                  <Youtube size={16} />
                </a>
                <a href="https://github.com/naiyo-24" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '8px', borderRadius: '50%' }}>
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Full Biography Story */}
          <div className="reveal-on-scroll reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '28px', lineHeight: 1.6, color: '#222222', fontSize: '1.05rem' }}>
            
            <div className="neo-border-thick" style={{
              padding: '24px', backgroundColor: 'var(--black)', borderRadius: '16px',
              boxShadow: '4px 4px 0px var(--border)', display: 'flex', gap: '16px', alignItems: 'flex-start'
            }}>
              <Quote size={32} color="var(--white)" style={{ flexShrink: 0 }} />
              <p style={{ fontWeight: '800', margin: 0, fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--white)' }}>
                "We don't believe in templates. A digital product is the core engine of your company. It must be engineered with absolute clarity, and visual aesthetics that stand out."
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.6rem', borderBottom: '3px solid var(--border)', paddingBottom: '6px', marginBottom: '12px', textTransform: 'uppercase' }}>
                The Genesis of Naiyo24
              </h2>
              <p>
                Before establishing Naiyo24 in Kolkata, Debasish observed a critical problem in the digital service industry: startups and growing enterprises were forced to coordinate with multiple disjointed vendors to set up their business. They would hire one agency for legal incorporation, another for branding and logo design, a different developer group for mobile applications, and a separate vendor to manage server hosting.
              </p>
              <p style={{ marginTop: '12px' }}>
                This fragmentation resulted in delayed product launches, misaligned brand strategies, and massive technical overhead. Debasish founded Naiyo24 to serve as a consolidated, high-performance execution engine. By packing company registration, professional email setup, server management, custom web engineering, and product branding under a single unified dashboard, Naiyo24 provides startups with a turn-key solution to scale from concept to market.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.6rem', borderBottom: '3px solid var(--border)', paddingBottom: '6px', marginBottom: '12px', textTransform: 'uppercase' }}>
                Developer Roots
              </h2>
              <p>
                With a deep background in full-stack software development and systems engineering, Debasish is an advocate for high-performance code and hardware-accelerated interfaces. He actively steers the engineering culture at Naiyo24, prioritizing lightweight, scalable frameworks, optimized database querying, and robust DNS security configurations.
              </p>
              <p style={{ marginTop: '12px' }}>
                He continues to lead engineering sessions, mentoring young developers in Kolkata and ensuring that every application shipped under the Naiyo24 banner adheres to elite standards of performance, security, and responsive layouts.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.6rem', borderBottom: '3px solid var(--border)', paddingBottom: '6px', marginBottom: '12px', textTransform: 'uppercase' }}>
                Vision for the Future
              </h2>
              <p>
                Looking forward, Debasish aims to scale Naiyo24's services globally, introducing automated dashboard workflows for startup founders to manage their hosting status, domain DNS health, and corporate compliance details in real-time.
              </p>
              <p style={{ marginTop: '12px' }}>
                "We are building more than just websites. We are engineering the digital operating system for modern business ventures," says Debasish.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
