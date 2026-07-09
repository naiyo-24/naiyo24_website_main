import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import A24MAIN from '../../assets/Attendx24/A24MAIN.png';
import A4 from '../../assets/Attendx24/A4.jpeg';
import A3 from '../../assets/Attendx24/A3.jpeg';
import A2 from '../../assets/Attendx24/A2.jpeg';
import A1 from '../../assets/Attendx24/A1.jpeg';
import videoSrc from '../../assets/Attendx24/video.mp4';
import CABY24MAIN from '../../assets/Caby24/CABY24MAIN.png';
import C1 from '../../assets/Caby24/C1.jpeg';
import C2 from '../../assets/Caby24/C2.jpeg';
import C3 from '../../assets/Caby24/C3.jpeg';
import C4 from '../../assets/Caby24/C4.jpeg';
import C5 from '../../assets/Caby24/C5.jpeg';
import C6 from '../../assets/Caby24/C6.jpeg';
import MEDY24MAIN from '../../assets/Medy24/MEDY24MAIN.png';
import M1 from '../../assets/Medy24/M1.jpeg';
import M2 from '../../assets/Medy24/M2.jpeg';
import M3 from '../../assets/Medy24/M3.jpeg';
import TALKYMAIN from '../../assets/Talky/TALKYMAIN.jpeg';
import T1 from '../../assets/Talky/T1.jpeg';
import T2 from '../../assets/Talky/T2.jpeg';
import T3 from '../../assets/Talky/T3.jpeg';
import T4 from '../../assets/Talky/T4.jpeg';
import MEDORICA_LOGO from '../../assets/Medorica_Logo.png';
import MEDORICAMAIN from '../../assets/Medorica/MEDORICAMAIN.png';
import Manju00 from '../../assets/Manju/Manju00.jpeg';
import Manju1 from '../../assets/Manju/Manju1.jpeg';
import Manju2 from '../../assets/Manju/Manju2.jpeg';
import ManjuHome from '../../assets/Manju/ManjuHome.jpeg';
import MANJUMAIN from '../../assets/Manju/MANJUMAIN.png';
import VWINGSMAIN from '../../assets/VWINGS/VWINGSMAIN.png';
import VIWINGS2 from '../../assets/VWINGS/VIWINGS2.png';
import VWINGS1 from '../../assets/VWINGS/VWINGS1.png';
import HumbahMain from '../../assets/humbah/HumbahMain.png';
import H0 from '../../assets/humbah/H0.jpeg';
import H1 from '../../assets/humbah/H1.jpeg';
import H2 from '../../assets/humbah/H2.jpeg';
import H3 from '../../assets/humbah/H3.jpeg';
import H4 from '../../assets/humbah/H4.jpeg';
import BHUKMAIN from '../../assets/Bhukk/BHUKMAIN.png';
import BHUK1 from '../../assets/Bhukk/BHUK1.png';
import BHUK2 from '../../assets/Bhukk/BHUK2.png';
import BHUK3 from '../../assets/Bhukk/BHUK3.png';
import BHUK4 from '../../assets/Bhukk/BHUK4.png';
import BHUK5 from '../../assets/Bhukk/BHUK5.png';

export default function ProjectDetailPage({ projectId, onNavigate }) {
  // Ensure the page always starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);


  const projectData = {
    attendx24: {
      title: "AttendX 24",
      subtitle: "Workforce Management & Ticketing Platform",
      url: "https://attendx24.com/",
      description: "Seamlessly manage your workforce with location tracking, selfie check-ins, and automated payroll integration.",
      client: "Internal Product / Start-up",
      timeline: "3 Months",
      role: "Full Stack Development & UI/UX Design",
      techStack: ["React", "Flutter", "FastAPI", "Python", "PostgreSQL"],
      challenge: "Managing a distributed workforce and event staff in real-time is historically chaotic. Traditional attendance systems rely on easily falsifiable manual logs or expensive biometric hardware. There was a desperate need for a lightweight, mobile-first solution that could instantly verify location, identity, and hours worked without friction.",
      solution: "We built a multi-platform ecosystem (Web & Mobile) anchored by a high-performance FastAPI backend. The mobile app utilizes native device capabilities for geofencing and facial-recognition selfie check-ins, instantly syncing with the cloud. The web dashboard provides managers with a real-time command center to track live personnel, manage shifts, and automatically generate accurate payroll reports.",
      assets: {
        hero: A24MAIN,
        video: videoSrc,
        grid: [A4, A1, A2, A3]
      }
    },
    caby24: {
      title: "Caby24",
      subtitle: "Premium Cab, Bike & Parcel Booking",
      url: "#",
      description: "Book instant rides and schedule reliable deliveries across India.",
      client: "Naiyo24 Company Private Limited",
      timeline: "Ongoing",
      role: "Full Stack Development & UI/UX Design",
      techStack: ["React", "Flutter", "FastAPI", "Python", "PostgreSQL"],
      challenge: "There was a need for a modern, safe, and fully compliant way to book instant rides and schedule reliable deliveries across India.",
      solution: "We crafted a modern, safe and fully compliant urban mobility solution that empowers drivers and connects the community with integrated mapping and real-time dispatch.",
      assets: {
        hero: CABY24MAIN,
        video: null,
        grid: [C1, C2, C3, C4, C5, C6]
      }
    },
    medy24: {
      title: "Medy24",
      subtitle: "Telemedicine & Pharmacy Delivery Platform",
      url: "http://localhost:5174/",
      description: "Connecting users with independent licensed medical professionals, NABL-certified diagnostic laboratories, and registered partner pharmacies.",
      client: "Naiyo24 Company Private Limited",
      timeline: "Ongoing",
      role: "Full Stack Development & UI/UX Design",
      techStack: ["React", "Flutter", "FastAPI", "Python", "PostgreSQL"],
      challenge: "Accessing reliable healthcare, booking certified lab tests, and getting quick medicine delivery can be fragmented and challenging. There was a need for a secure, compliant platform connecting all these crucial services.",
      solution: "We engineered a secure platform that brings telemedicine, pharmacy delivery, and diagnostic bookings into one unified ecosystem. It features real-time fulfillment, strict access controls for medical records, and PCI-DSS compliant payment integration.",
      assets: {
        hero: MEDY24MAIN,
        video: null,
        grid: [M1, M2, M3]
      }
    },
    talky: {
      title: "Talky",
      subtitle: "Authentic Real-Time News & Civic Engagement Platform",
      url: "http://localhost:5174/",
      description: "Connecting people with real-time, official updates and bridging the gap between citizens and local representatives.",
      client: "Naiyo24 Company Private Limited",
      timeline: "Ongoing",
      role: "Full Stack Development & UI/UX Design",
      techStack: ["React", "Flutter", "FastAPI", "Python", "PostgreSQL"],
      challenge: "The modern digital landscape is saturated with misinformation and noise, creating a disconnect between citizens and verified local updates.",
      solution: "We built a high-performance, real-time news application focused on authenticity. Utilizing strict verification systems, it serves as a direct bridge between citizens and official sources, bypassing fake news entirely.",
      assets: {
        hero: TALKYMAIN,
        heroSecondary: T1,
        video: null,
        grid: [T2, T3, T4]
      }
    },
    medorica: {
      title: "Medorica Pharma",
      subtitle: "Your Daily Dose of Healing",
      url: "https://www.medoricapharma.com/",
      description: "Delivering premium quality medicines and healthcare solutions with care, precision, and trust since 1995.",
      client: "Medorica Pharma",
      timeline: "Completed",
      role: "Full Stack Development & UI/UX Design",
      techStack: ["React", "Flutter", "FastAPI", "Python", "PostgreSQL"],
      challenge: "Medorica Pharma needed a digital transformation to bring their 25+ years of trusted offline healthcare services into a modern, accessible online experience.",
      solution: "We architected a secure, high-performance web platform integrating seamless e-commerce functionality to deliver premium quality medicines and support their extensive catalog of 500+ products.",
      assets: {
        hero: MEDORICAMAIN,
        video: null,
        grid: []
      }
    },
    manju: {
      title: "Manju Medical Stores",
      subtitle: "Digital Clinic & Pharmacy Platform",
      url: "https://www.manjumedicalstores.com/",
      description: "A comprehensive digital clinic to serve patients and process orders online efficiently.",
      client: "Manju Medical Stores",
      timeline: "Ongoing",
      role: "Full Stack Development & UI/UX Design",
      techStack: ["React", "Flutter", "FastAPI", "Python", "PostgreSQL"],
      challenge: "Transitioning a traditional medical store into a comprehensive digital clinic to serve patients and process orders online efficiently.",
      solution: "We built a robust digital clinic application that integrates tele-consultations, prescription management, and robust e-commerce capabilities into a single seamless platform.",
      assets: {
        hero: MANJUMAIN,
        heroSecondary: null,
        video: null,
        grid: [Manju00, ManjuHome, Manju1, Manju2]
      }
    },
    vwings: {
      title: "V-Wings Aviation Institute",
      subtitle: "Premier Aviation Training Institute",
      url: "https://vwings247.com/",
      description: "A professional educational platform showcasing world-class aviation training programs.",
      client: "V-Wings Aviation",
      timeline: "Completed",
      role: "Web Platform Engineering",
      techStack: ["React", "FastAPI", "Python", "PostgreSQL"],
      challenge: "Creating a professional digital presence for an elite aviation institute that seamlessly handles course enrollment, student inquiries, and program marketing for CPL, PPL, ATPL, and Cabin Crew training.",
      solution: "We developed a sleek, responsive educational platform to showcase their world-class training programs, driving conversions and empowering the next generation of aviation professionals.",
      assets: {
        hero: VWINGSMAIN,
        heroSecondary: null,
        video: null,
        grid: [VIWINGS2, VWINGS1]
      }
    },
    humbah: {
      title: "Humbah",
      subtitle: "AI Life Companion",
      url: "#",
      description: "An intelligent AI ecosystem where users connect with specialized AI companions for personalized advice, emotional support, and lifestyle assistance.",
      client: "Internal Product",
      timeline: "Ongoing",
      role: "AI & Mobile App Development",
      techStack: ["Flutter", "FastAPI", "Python", "PostgreSQL", "OpenAI"],
      challenge: "There was a need for an intelligent AI ecosystem where users can connect with multiple AI experts and companions through one application, receiving personalized advice, emotional support, education, and lifestyle assistance anytime.",
      solution: "We built a comprehensive AI companion platform with specialized assistants (Mentor, Chef, Guru, Beautician, Business Coach) for different aspects of everyday living, making AI feel more human, accessible, and helpful.",
      assets: {
        hero: HumbahMain,
        heroSecondary: null,
        video: null,
        grid: [H0, H1, H2, H3, H4]
      }
    },
    bhukk: {
      title: "Bhukk",
      subtitle: "India's Smart Beverages Delivery App",
      url: "https://bhukk.naiyo24.com/",
      description: "An innovative food and beverage delivery application focused on connecting users with local restaurants and providing a seamless ordering experience.",
      client: "Internal Product",
      timeline: "Ongoing",
      role: "Full Stack Development & UI/UX Design",
      techStack: ["React", "Flutter", "FastAPI", "Python", "PostgreSQL"],
      challenge: "The market needed a streamlined, intuitive application to revolutionize beverage and food delivery in India, ensuring rapid delivery and a seamless user experience.",
      solution: "We developed Bhukk, a high-performance delivery platform featuring real-time tracking, an intuitive ordering interface, and robust backend infrastructure capable of handling high-volume transactions seamlessly.",
      assets: {
        hero: BHUKMAIN,
        heroSecondary: null,
        video: null,
        grid: [BHUK1, BHUK2, BHUK3, BHUK4, BHUK5]
      }
    }
  };

  const project = projectData[projectId];
  
  if (!project) {
    return (
      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '140px', paddingBottom: '100px', textAlign: 'center' }}>
        <h2 style={{fontSize: '3rem', textTransform: 'uppercase', marginBottom: '20px'}}>Project not found</h2>
        <button onClick={() => onNavigate('home')} className="neo-btn">Back to Home</button>
      </div>
    );
  }


  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '140px', paddingBottom: '100px' }}>
      <div className="container">
        
        {/* Back Button */}
        <button 
          onClick={() => onNavigate('home')} 
          className="neo-btn" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', marginBottom: '40px', backgroundColor: 'var(--white)' }}
        >
          <ArrowLeft size={18} /> Back to Home
        </button>

        {/* Hero Section */}
        <div className="neo-card neo-card-dark reveal-on-scroll reveal-up" style={{ padding: '60px 40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', textTransform: 'uppercase', letterSpacing: '-2px', color: 'var(--white)', margin: 0 }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#DDD', margin: 0 }}>
            {project.subtitle}
          </p>
          <a href={project.url} target="_blank" rel="noreferrer" className="neo-btn neo-btn-dark-pill" style={{ 
            alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px'
          }}>
            Visit Live Website <ExternalLink size={18} />
          </a>
        </div>

        {/* Meta Data Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '40px' }}>
          
          <div className="neo-card reveal-on-scroll reveal-up delay-100" style={{ padding: '32px', backgroundColor: 'var(--white)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Client</span>
            <p style={{ fontSize: '1.2rem', fontWeight: '800', margin: '8px 0 0 0' }}>{project.client}</p>
          </div>

          <div className="neo-card reveal-on-scroll reveal-up delay-200" style={{ padding: '32px', backgroundColor: 'var(--white)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Timeline</span>
            <p style={{ fontSize: '1.2rem', fontWeight: '800', margin: '8px 0 0 0' }}>{project.timeline}</p>
          </div>

          <div className="neo-card reveal-on-scroll reveal-up delay-300" style={{ padding: '32px', backgroundColor: 'var(--white)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Role</span>
            <p style={{ fontSize: '1.2rem', fontWeight: '800', margin: '8px 0 0 0' }}>{project.role}</p>
          </div>

        </div>

        {/* The Challenge & Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginTop: '40px' }}>
          
          <div className="neo-card reveal-on-scroll reveal-left" style={{ padding: '48px', backgroundColor: '#FFEBB8' }}>
            <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '24px' }}>The Challenge</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, fontWeight: '600' }}>
              {project.challenge}
            </p>
          </div>

          <div className="neo-card reveal-on-scroll reveal-right" style={{ padding: '48px', backgroundColor: '#E0F2E9' }}>
            <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '24px' }}>The Solution</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, fontWeight: '600' }}>
              {project.solution}
            </p>
          </div>

        </div>

        
        {/* Product Gallery */}
        <div style={{ marginTop: '80px' }}>
          {project.assets.hero || project.assets.video || (project.assets.grid && project.assets.grid.length > 0) ? (
            <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '8px' }}>Product Gallery</h3>
          ) : null}
          
          {project.assets.video && (
            <div className="neo-card reveal-on-scroll reveal-up" style={{ padding: '0', overflow: 'hidden', border: 'var(--border-thick) solid var(--black)', borderRadius: 'var(--radius-xl)' }}>
              <video 
                src={project.assets.video} 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '70vh' }}
              />
            </div>
          )}
          
          {project.assets.hero && (
            <div className="neo-border-thick reveal-on-scroll reveal-up" style={{
              backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-xl)',
              boxShadow: '6px 6px 0px var(--black)', marginTop: '24px'
            }}>
              <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', height: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: '3px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
              </div>
              <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                <img src={project.assets.hero} alt={`${project.title} Website Dashboard`} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>
          )}

          {project.assets.heroSecondary && (
            <div className="neo-border-thick reveal-on-scroll reveal-up" style={{
              backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-xl)',
              boxShadow: '6px 6px 0px var(--black)', marginTop: '24px'
            }}>
              <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', height: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: '3px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
              </div>
              <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                <img src={project.assets.heroSecondary} alt={`${project.title} Secondary Desktop View`} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>
          )}

          {project.assets.grid && project.assets.grid.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '24px' }}>
              {project.assets.grid.map((imgSrc, idx) => (
                <div key={idx} className="neo-card reveal-on-scroll reveal-up" style={{ padding: '0', overflow: 'hidden', border: 'var(--border-thick) solid var(--black)', borderRadius: 'var(--radius-xl)' }}>
                  <img src={imgSrc} alt={`${project.title} Screen ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="neo-card reveal-on-scroll reveal-up" style={{ padding: '48px', backgroundColor: 'var(--white)', marginTop: '40px' }}>
          <h3 style={{ fontSize: '2rem', textTransform: 'uppercase', marginBottom: '32px', textAlign: 'center' }}>Technologies Used</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {project.techStack.map((tech, idx) => (
              <div key={idx} className="neo-border-thick" style={{ padding: '12px 24px', backgroundColor: 'var(--bg-card)', fontSize: '1.1rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={20} color="var(--black)" /> {tech}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
