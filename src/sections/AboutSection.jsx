import React from 'react';
import { ArrowRight, Quote, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '20px 0 160px 0', backgroundColor: '#F8F9FA', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: Short Story summary */}
          <div className="reveal-on-scroll reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span className="neo-border-thick" style={{
              alignSelf: 'flex-start', padding: '6px 14px', backgroundColor: 'var(--black)', color: 'var(--white)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '800'
            }}>
              WHO WE ARE
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', letterSpacing: '-2px', textTransform: 'uppercase', lineHeight: 1.1 }}>
              Engineering Scalable Startup Systems
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#333333' }}>
              Headquartered in Kolkata, West Bengal, Naiyo24 is a high-performance digital engineering studio. We build next-generation web applications, secure mobile platforms, and robust corporate infrastructure.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#333333' }}>
              By combining custom software engineering with essential startup infrastructure setup—such as company incorporation, professional branding, and server administration—we provide the complete toolkit to scale ideas into market leaders.
            </p>
            
            {/* Core Value Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '8px 0', borderTop: '2px dashed #E0E0E0', paddingTop: '16px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="var(--heading)" fill="var(--black)" />
                <span style={{ fontWeight: '800', fontSize: '0.95rem', color: '#111' }}>Design Honesty & Brutalist aesthetics</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="var(--heading)" fill="var(--black)" />
                <span style={{ fontWeight: '800', fontSize: '0.95rem', color: '#111' }}>High-performance, zero-bloat React codebase</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="var(--heading)" fill="var(--black)" />
                <span style={{ fontWeight: '800', fontSize: '0.95rem', color: '#111' }}>Fullscale execution (Branding, Development, Clouds & Legals)</span>
              </div>
            </div>

            <a 
              href="#/about" 
              className="neo-btn neo-btn-pink"
              style={{ alignSelf: 'flex-start', padding: '10px 24px', fontSize: '0.95rem', marginTop: '8px' }}
            >
              Read Full Story <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Column: CEO Portrait Quote Card */}
          <div className="reveal-on-scroll reveal-right" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="neo-card" style={{ 
              padding: '32px', backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', 
              gap: '24px', maxWidth: '380px', boxShadow: '8px 8px 0px var(--border)'
            }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                {/* CEO Image */}
                <div className="neo-border-thick" style={{
                  width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden',
                  flexShrink: 0, border: '3px solid var(--border)', backgroundColor: '#EEE'
                }}>
                  <img 
                    src="/assets/DebasishBaidya.png" 
                    alt="Debasish Baidya" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }} 
                  />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '0 0 2px 0' }}>Debasish Baidya</h4>
                  <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: '800' }}>CEO & Founder, Naiyo24</span>
                </div>
              </div>

              {/* Quote Block */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', borderTop: '2px dashed #EEE', paddingTop: '16px' }}>
                <Quote size={20} color="var(--black)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#333', margin: 0, lineHeight: 1.5 }}>
                  "At Naiyo24, we don't just write code; we architect paths for scale. Our mission is to empower visionaries with digital execution."
                </p>
              </div>

              <a 
                href="#/ceo-story" 
                className="neo-btn neo-btn-purple"
                style={{ padding: '8px 16px', fontSize: '0.85rem', alignSelf: 'flex-start' }}
              >
                Read Biography <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
