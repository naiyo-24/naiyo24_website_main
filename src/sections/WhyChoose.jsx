import React from 'react';
import { CheckCircle, Clock, Layers, Sparkles, Cpu, Shield } from 'lucide-react';

export default function WhyChoose() {
  return (
    <section id="solutions" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
          
          {/* Left side illustration - Premium Neo Brutalist Graphic representation */}
          <div className="neo-border-thick reveal-on-scroll reveal-left" style={{ padding: '40px', backgroundColor: 'var(--black)', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', minHeight: '400px', boxShadow: '8px 8px 0px #333', borderRadius: '16px', transform: 'rotate(-1deg)' }}>
            <h3 style={{ fontSize: '3rem', textTransform: 'uppercase', color: 'var(--white)', letterSpacing: '-1.5px' }}>Engineered for Growth.</h3>
            <p style={{ fontSize: '1.25rem', color: '#CCC', lineHeight: 1.5, fontWeight: '700' }}>
              We combine technical depth with custom branding to make sure your product looks premium, works fast, and delivers value day one.
            </p>
            
            {/* Graphic Vector representation */}
            <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', padding: '20px', borderRadius: '16px', position: 'relative', boxShadow: '6px 6px 0px #555', transform: 'rotate(2deg)' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', borderBottom: '3px solid var(--border)', paddingBottom: '12px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: '900', fontFamily: 'monospace', color: 'var(--black)' }}>
                const naiyo24 = &#123;<br/>
                &nbsp;&nbsp;delivery: "fast",<br/>
                &nbsp;&nbsp;design: "premium",<br/>
                &nbsp;&nbsp;support: "24/7"<br/>
                &#125;;
              </div>
              <div style={{
                position: 'absolute', bottom: '-24px', right: '-12px',
                backgroundColor: 'var(--black)', color: 'var(--white)', border: '4px solid var(--border)',
                padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '900',
                boxShadow: '4px 4px 0px #333'
              }}>
                npm run launch
              </div>
            </div>
          </div>

          {/* Right side features */}
          <div className="reveal-on-scroll reveal-right delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <h2 style={{ fontSize: '3.5rem', letterSpacing: '-2px', textTransform: 'uppercase', color: 'var(--heading)' }}>Why Work With Us?</h2>
            
            <div className="grid-2" style={{ gap: '24px' }}>
              
              <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px', backgroundColor: 'var(--white)', borderRadius: '16px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ backgroundColor: 'var(--white)', padding: '8px', border: '3px solid var(--black)', borderRadius: '8px' }}>
                    <CheckCircle size={24} color="var(--black)" />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', textTransform: 'uppercase', margin: 0 }}>Fast Delivery</h4>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--black)', fontWeight: '600', margin: 0 }}>We launch initial iterations fast to gather market validation early.</p>
              </div>

              <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px', backgroundColor: 'var(--white)', borderRadius: '16px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ backgroundColor: 'var(--white)', padding: '8px', border: '3px solid var(--black)', borderRadius: '8px' }}>
                    <Layers size={24} color="var(--black)" />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', textTransform: 'uppercase', margin: 0 }}>Scalable Setup</h4>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--black)', fontWeight: '600', margin: 0 }}>Infrastructure built using modular tech to scale with operations.</p>
              </div>

              <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px', backgroundColor: 'var(--white)', borderRadius: '16px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ backgroundColor: 'var(--white)', padding: '8px', border: '3px solid var(--black)', borderRadius: '8px' }}>
                    <Sparkles size={24} color="var(--black)" />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', textTransform: 'uppercase', margin: 0 }}>Modern Stack</h4>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--black)', fontWeight: '600', margin: 0 }}>React, Node, Tailwind, Next.js, and AWS for peak performance.</p>
              </div>

              <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up delay-400" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px', backgroundColor: 'var(--white)', borderRadius: '16px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ backgroundColor: 'var(--white)', padding: '8px', border: '3px solid var(--black)', borderRadius: '8px' }}>
                    <Clock size={24} color="var(--black)" />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', textTransform: 'uppercase', margin: 0 }}>Support 24/7</h4>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--black)', fontWeight: '600', margin: 0 }}>Our team monitors infrastructure to keep your web apps active.</p>
              </div>

              <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up delay-500" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px', backgroundColor: 'var(--white)', borderRadius: '16px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ backgroundColor: 'var(--white)', padding: '8px', border: '3px solid var(--black)', borderRadius: '8px' }}>
                    <Cpu size={24} color="var(--black)" />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', textTransform: 'uppercase', margin: 0 }}>AI Integration</h4>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--black)', fontWeight: '600', margin: 0 }}>Leveraging advanced tools to power workflows and products.</p>
              </div>

              <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up delay-600" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px', backgroundColor: 'var(--white)', borderRadius: '16px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ backgroundColor: 'var(--white)', padding: '8px', border: '3px solid var(--black)', borderRadius: '8px' }}>
                    <Shield size={24} color="var(--black)" />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', textTransform: 'uppercase', margin: 0 }}>Security First</h4>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--black)', fontWeight: '600', margin: 0 }}>Strict checks, data isolation, and standards for peace of mind.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
