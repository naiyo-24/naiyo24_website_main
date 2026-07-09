import React from 'react';
import { ArrowLeft, Linkedin, Instagram, Facebook, Youtube, Github, Sparkles, Shield, Cpu, Zap, ArrowRight, Rocket, Lightbulb, Layout, Code, TrendingUp, Target, Users } from 'lucide-react';

export default function AboutPage({ onBackToHome }) {
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

        {/* Section 1: Our Story */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          marginBottom: '80px'
        }}>
          {/* Left: Text Content */}
          <div className="reveal-on-scroll reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span className="neo-border-thick" style={{
              alignSelf: 'flex-start', padding: '6px 14px', backgroundColor: 'var(--black)', color: 'var(--white)',
              borderRadius: '50px', fontSize: '0.85rem', fontWeight: '800'
            }}>
              ESTABLISHED 2024
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-2.5px', textTransform: 'uppercase' }}>
              Our Story
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#333333' }}>
              Founded in Kolkata, West Bengal, Naiyo24 emerged as a direct response to the generic, uninspired digital solutions dominating the modern web. We set out to build an engineering studio that bridges the gap between deep technical execution and premium interface design. By combining custom software engineering with robust startup infrastructure setup—such as company incorporation, professional branding, and server administration—we built the ultimate all-in-one launchpad for ambitious brands.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#333333' }}>
              We reject slow loading times, complex agency overhead, and bloated code. Our development cycles are driven by high-octane performance benchmarks, clean React architecture, and absolute security configurations. Whether we are building enterprise SaaS products, secure mobile apps, or corporate identity systems, our mission is to deliver digital systems that scale.
            </p>
          </div>

          {/* Right: Custom Neo-Brutalist Team Meeting Graphic */}
          <div className="reveal-on-scroll reveal-right" style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/assets/OurStory.png" 
                alt="Our Story Process" 
                style={{ 
                  width: '100%', 
                  maxWidth: '550px', 
                  height: 'auto', 
                  display: 'block', 
                  borderRadius: '24px',
                  animation: 'gentle-float 6s ease-in-out infinite',
                  filter: 'drop-shadow(8px 8px 0px var(--border))'
                }} 
              />
            </div>
          </div>
        </div>

        {/* Section 2: CEO's Message */}
        <div className="neo-card reveal-on-scroll reveal-up" style={{
          padding: '48px',
          backgroundColor: 'var(--bg-card)',
          marginBottom: '80px',
          boxShadow: '10px 10px 0px var(--border)'
        }}>
          <h2 style={{ fontSize: '2.5rem', letterSpacing: '-1.5px', marginBottom: '36px', textTransform: 'uppercase', textAlign: 'center' }}>
            CEO's Message
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            {/* Left: CEO Image Card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="neo-border-thick" style={{
                position: 'relative', width: '280px', height: '320px', borderRadius: '24px',
                overflow: 'hidden', boxShadow: '8px 8px 0px var(--border)', backgroundColor: '#EEE'
              }}>
                <img
                  src="/assets/DebasishBaidya.png"
                  alt="Debasish Baidya - CEO"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
                />
                <span className="neo-border-thin" style={{
                  position: 'absolute', bottom: '16px', left: '16px', backgroundColor: 'var(--black)',
                  color: 'var(--white)', padding: '4px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800',
                  boxShadow: '2px 2px 0px var(--border)'
                }}>
                  CEO & Founder
                </span>
              </div>
            </div>

            {/* Right: Message Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, color: '#333' }}>
                "At Naiyo24, we don't just write code; we architect paths for scale. Our mission is to empower visionaries, startups, and established enterprises with digital execution that stands out in a crowded market. We focus on performance, engineering clarity, and premium interface design."
              </p>

              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', margin: '0 0 4px 0' }}>Debasish Baidya</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', fontWeight: '700', margin: '0 0 12px 0' }}>CEO & Founder, Naiyo24</p>
                <p style={{ fontSize: '0.85rem', color: '#555', margin: '0 0 16px 0', lineHeight: 1.4 }}>
                  Technology enthusiast | Visionary leader | Digital transformation advocate
                </p>
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <a href="https://www.linkedin.com/company/naiyo24-official/" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '8px', borderRadius: '50%' }}>
                  <Linkedin size={18} />
                </a>
                <a href="https://www.instagram.com/naiyo24_official/" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '8px', borderRadius: '50%' }}>
                  <Instagram size={18} />
                </a>
                <a href="https://www.facebook.com/Naiyo24/" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '8px', borderRadius: '50%' }}>
                  <Facebook size={18} />
                </a>
                <a href="https://www.youtube.com/@naiyo24_official" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '8px', borderRadius: '50%' }}>
                  <Youtube size={18} />
                </a>
                <a href="https://github.com/naiyo-24" target="_blank" rel="noreferrer" className="neo-btn" style={{ padding: '8px', borderRadius: '50%' }}>
                  <Github size={18} />
                </a>
              </div>

              <a
                href="#/ceo-story"
                className="neo-btn neo-btn-purple"
                style={{ alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.95rem' }}
              >
                Read Full Biography <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Our Values */}
        <div className="reveal-on-scroll reveal-up" style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', letterSpacing: '-1.5px', marginBottom: '40px', textTransform: 'uppercase', textAlign: 'center' }}>
            Our Core Values
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>

            <div className="neo-card reveal-on-scroll reveal-up" style={{ padding: '24px', backgroundColor: 'var(--bg-card)' }}>
              <div className="neo-border-thin" style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Cpu size={20} color="var(--white)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Innovation</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.4 }}>Designing next-generation digital products with modern software stacks.</p>
            </div>

            <div className="neo-card reveal-on-scroll reveal-up delay-100" style={{ padding: '24px', backgroundColor: 'var(--bg-card)' }}>
              <div className="neo-border-thin" style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Sparkles size={20} color="var(--white)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Clarity</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.4 }}>Open channels, honest interface aesthetics, and clean technical blueprints.</p>
            </div>

            <div className="neo-card reveal-on-scroll reveal-up delay-200" style={{ padding: '24px', backgroundColor: 'var(--bg-card)' }}>
              <div className="neo-border-thin" style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Zap size={20} color="var(--white)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Speed</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.4 }}>High-velocity software shipping pipelines and highly optimized loading speeds.</p>
            </div>

            <div className="neo-card reveal-on-scroll reveal-up delay-300" style={{ padding: '24px', backgroundColor: 'var(--bg-card)' }}>
              <div className="neo-border-thin" style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Shield size={20} color="var(--white)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Trust</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.4 }}>Solid database infrastructure, bulletproof configurations, and long-term SLA support.</p>
            </div>

          </div>
        </div>

        {/* Section 4: Our Team */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', letterSpacing: '-1.5px', marginBottom: '40px', textTransform: 'uppercase', textAlign: 'center' }}>
            Meet The Core Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>

            {[
              { name: "Debasish Baidya", role: "CEO & Founder", initials: "DB", color: "#FFEBB8", img: "/assets/DebasishBaidya.png" },
              { name: "Subhankar Das", role: "Lead Developer", initials: "SD", color: "#E0F2E9", img: "/assets/SubhankarDas.jpeg" },
              { name: "Sayar Paul", role: "Full Stack Developer", initials: "SP", color: "#F8C8DC", img: "/assets/SayarPaul.jpeg" },
              { name: "Mudassar Sayeed", role: "Flutter Developer", initials: "MS", color: "#E6E6FA", img: "/assets/MuddasarSayed.png?v=3" },
              { name: "Nabomita Paul", role: "HR & Business Lead", initials: "NP", color: "#FFDAB9", img: "/assets/NabomitaPaul.png", objectPosition: "top center" }
            ].map((member, idx) => (
              <div key={idx} className="neo-card team-card reveal-on-scroll reveal-up" style={{ padding: '24px', backgroundColor: 'var(--white)', textAlign: 'center' }}>
                <div className="neo-border-thick" style={{ width: '100%', aspectRatio: '1', backgroundColor: member.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', fontSize: '3.5rem', fontWeight: '800', overflow: 'hidden' }}>
                  {member.img ? <img src={member.img} alt={member.name} className="team-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.objectPosition || 'center' }} /> : member.initials}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', textTransform: 'uppercase' }}>{member.name}</h3>
                <p style={{ fontSize: '0.95rem', color: '#555', fontWeight: '700', margin: 0 }}>{member.role}</p>
              </div>
            ))}

          </div>
        </div>

        {/* Section 5: Explore Our Projects */}
        <div className="neo-border-thick reveal-on-scroll reveal-scale" style={{
          padding: '48px', backgroundColor: 'var(--bg-card)', borderRadius: '24px',
          boxShadow: '10px 10px 0px var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', gap: '24px', color: 'var(--heading)'
        }}>
          <h2 style={{ fontSize: '2.2rem', letterSpacing: '-1px' }}>Explore Our Digital Projects</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '650px', fontWeight: '500', color: '#555' }}>
            We've engineered enterprise systems, custom APIs, high-performance web applications, and stunning brand assets.
          </p>
          <a href="#/projects" className="neo-btn neo-btn-inverted" style={{ padding: '12px 32px', fontSize: '1.1rem', marginTop: '16px', borderRadius: '50px' }}>
            View Full Service Catalog <Rocket size={20} />
          </a>
        </div>

      </div>
    </div>
  );
}
