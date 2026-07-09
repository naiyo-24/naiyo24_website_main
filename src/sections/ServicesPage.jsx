import React, { useState } from 'react';
import { 
  ArrowLeft, Globe, Smartphone, Server, Database, Cloud, 
  Palette, Monitor, ArrowRight, Star 
} from 'lucide-react';

const allServicesData = [
  {
    id: "web-development",
    icon: <Globe size={28} color="var(--white)" />,
    title: "Web Development",
    desc: "Custom websites that convert visitors into customers with SEO optimization.",
    bg: "var(--black)",
    category: "technology"
  },
  {
    id: "mobile-applications",
    icon: <Smartphone size={28} color="var(--white)" />,
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile solutions for iOS and Android with seamless performance.",
    bg: "var(--black)",
    category: "technology"
  },
  {
    id: "servers-hosting",
    icon: <Server size={28} color="var(--white)" />,
    title: "Servers & Hosting",
    desc: "Reliable server setup, cloud hosting, and infrastructure management for your business.",
    bg: "var(--black)",
    category: "technology"
  },
  {
    id: "professional-email",
    icon: <Database size={28} color="var(--white)" />,
    title: "Professional Email",
    desc: "Branded professional email solutions to enhance your business credibility.",
    bg: "var(--black)",
    category: "business"
  },
  {
    id: "domain-registration",
    icon: <Cloud size={28} color="var(--white)" />,
    title: "Domain Registration",
    desc: "Secure your online identity with our hassle-free domain registration services.",
    bg: "var(--black)",
    category: "technology"
  },
  {
    id: "marketing",
    icon: <Palette size={28} color="var(--white)" />,
    title: "Marketing",
    desc: "Grow your business with our comprehensive marketing solutions, including digital campaigns and social media management.",
    bg: "var(--black)",
    category: "creative"
  },
  {
    id: "business-solution",
    icon: <Monitor size={28} color="var(--white)" />,
    title: "Business Solution",
    desc: "Optimize your operations with our tailored business solutions, including process automation, ERP, and CRM systems.",
    bg: "var(--black)",
    category: "business"
  },
  {
    id: "logo-branding",
    icon: <Palette size={28} color="var(--white)" />,
    title: "Logo & Branding",
    desc: "Build a memorable brand identity with our logo design and branding services.",
    bg: "var(--black)",
    category: "creative"
  },
  {
    id: "company-incorporation",
    icon: <Database size={28} color="var(--white)" />,
    title: "Company Incorporation",
    desc: "Start your business journey with our company incorporation services, ensuring legal compliance and smooth registration.",
    bg: "var(--black)",
    category: "business"
  },
  {
    id: "seo",
    icon: <Database size={28} color="var(--white)" />,
    title: "SEO",
    desc: "Boost your online visibility and rankings with our expert SEO services, ensuring legal compliance and improved search performance.",
    bg: "var(--black)",
    category: "technology"
  },
  {
    id: "market-research",
    icon: <Globe size={28} color="var(--white)" />,
    title: "Market Research",
    desc: "Make informed decisions with our market research services, providing actionable insights and data-driven strategies.",
    bg: "var(--black)",
    category: "business"
  },
  {
    id: "finance",
    icon: <Globe size={28} color="var(--white)" />,
    title: "Finance",
    desc: "Comprehensive financial services including business loans, funding solutions, and financial consulting to support your growth.",
    bg: "var(--black)",
    category: "business"
  }
];

export default function ServicesPage({ onBackToHome, onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');

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

        {/* Filter Bar */}
        <div className="reveal-on-scroll reveal-up" style={{ 
          display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px', 
          paddingBottom: '24px', borderBottom: '4px solid var(--border)' 
        }}>
          {[
            { id: 'all', label: 'All Services' },
            { id: 'technology', label: 'Tech & Hosting' },
            { id: 'business', label: 'Business & Finance' },
            { id: 'creative', label: 'Branding & Marketing' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className="neo-btn"
              style={{
                backgroundColor: activeFilter === btn.id ? 'var(--black)' : '#FFFFFF',
                color: activeFilter === btn.id ? '#FFFFFF' : '#000000',
                padding: '8px 20px',
                fontSize: '0.95rem'
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grid System */}
        <div className="grid-3" style={{ marginBottom: '80px' }}>
          {allServicesData.map((svc, idx) => {
            const isVisible = activeFilter === 'all' || svc.category === activeFilter;
            return (
              <div 
                key={svc.id} 
                className={`neo-card neo-card-interactive reveal-on-scroll reveal-up`}
                style={{ 
                  padding: '36px 32px', 
                  backgroundColor: 'var(--bg-card)', 
                  display: isVisible ? 'flex' : 'none', 
                  flexDirection: 'column', 
                  gap: '24px',
                  transitionDelay: `${(idx % 3) * 0.08}s`
                }}
              >
                {/* Icon Frame */}
                <div className="neo-border-thick" style={{
                  width: '56px', height: '56px', borderRadius: '16px', backgroundColor: svc.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {svc.icon}
                </div>

                {/* Title & Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>{svc.title}</h3>
                  <p style={{ color: '#444444', fontSize: '0.95rem', lineHeight: 1.6 }}>{svc.desc}</p>
                </div>

                {/* Bottom Interactive Button */}
                <button 
                  onClick={() => onSelectService(svc.id)}
                  className="neo-btn" 
                  style={{ alignSelf: 'flex-start', padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  Explore More <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Hook */}
        <div className="neo-card reveal-on-scroll reveal-scale" style={{
          padding: '48px', backgroundColor: 'var(--black)', color: 'var(--white)', display: 'flex',
          flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px',
          borderRadius: 'var(--radius-xl)'
        }}>
          <h2 style={{ fontSize: '2rem', letterSpacing: '-1px', color: 'var(--white)' }}>Need a Bespoke Solution?</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', fontWeight: '600', color: '#EEEEEE' }}>
            We collaborate with stakeholders to customize architectures, processes, and systems tailored to your exact business specifications.
          </p>
          <a 
            href="#/contact"
            className="neo-btn neo-btn-dark-pill"
          >
            Start a Conversation <Star size={16} fill="var(--white)" />
          </a>
        </div>

      </div>
    </div>
  );
}
