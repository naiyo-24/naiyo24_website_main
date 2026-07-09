import React from 'react';
import { ArrowRight, Code, Smartphone, Sparkles, Cpu, TrendingUp, Globe } from 'lucide-react';

const services = [
  {
    id: "web-development",
    icon: <Code size={28} color="var(--white)" />,
    title: "Web Development",
    desc: "High-performance, scalable websites and web platforms built with modern architectures for speed and impact.",
    bg: "var(--black)"
  },
  {
    id: "mobile-applications",
    icon: <Smartphone size={28} color="var(--white)" />,
    title: "Mobile Apps",
    desc: "Feature-rich, smooth native and cross-platform mobile apps crafted to deliver beautiful experiences on iOS & Android.",
    bg: "var(--black)"
  },
  {
    id: "logo-branding",
    icon: <Sparkles size={28} color="var(--white)" />,
    title: "UI/UX Design",
    desc: "Exceptional design systems, mockups, and client flows that capture attention and maximize conversion.",
    bg: "var(--black)"
  },
  {
    id: "business-solution",
    icon: <Cpu size={28} color="var(--white)" />,
    title: "AI Automation",
    desc: "Integrating advanced intelligence, workflows, and custom models to streamline operations and drive value.",
    bg: "var(--black)"
  },
  {
    id: "marketing",
    icon: <TrendingUp size={28} color="var(--white)" />,
    title: "Digital Marketing",
    desc: "Data-driven strategies, content management, campaigns, and optimization to capture visibility and engagement.",
    bg: "var(--black)"
  },
  {
    id: "servers-hosting",
    icon: <Globe size={28} color="var(--white)" />,
    title: "Cloud Infrastructure",
    desc: "Safe, resilient AWS/GCP architecture and deployment pipelines built to support limitless operations.",
    bg: "var(--black)"
  }
];

export default function Services({ onViewAllServices, onSelectService }) {
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

        <div className="grid-3">
          {services.map((svc, idx) => (
            <div 
              key={idx} 
              className={`neo-card neo-card-interactive reveal-on-scroll reveal-up delay-${(idx % 3) * 100 + 100}`} 
              style={{ padding: '32px', backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div className="neo-border-thick" style={{
                width: '56px', height: '56px', borderRadius: '16px', backgroundColor: svc.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {svc.icon}
              </div>
              <h3 style={{ fontSize: '1.6rem' }}>{svc.title}</h3>
              <p style={{ color: '#444', lineHeight: 1.6 }}>{svc.desc}</p>
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
      </div>
    </section>
  );
}
