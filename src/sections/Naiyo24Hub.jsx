import React, { useState, useEffect } from 'react';
import { Users, Shield, Phone, Car, Store, GraduationCap, Activity, HeartPulse, Scale, BookOpen, MapPin, Video, Cloud, Info } from 'lucide-react';

export default function Naiyo24Hub() {
  const [activeStep, setActiveStep] = useState(0);

  // Automatic step rotation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      num: "1",
      title: "Emergency / NARI",
      subtitle: "Immediate alerts",
      desc: "Automatically route live coordinate streams to the NARI dispatch dashboard for immediate emergency alert broadcast.",
      icon: <Phone size={24} />
    },
    {
      num: "2",
      title: "OEMs247",
      subtitle: "Nearest verified drivers",
      desc: "Alert and redirect nearby registered automotive and logistics drivers on the OEMs247 network for rapid response.",
      icon: <Car size={24} />
    },
    {
      num: "3",
      title: "Bhukk Network",
      subtitle: "Hyperlocal partners",
      desc: "Activate local merchant partners and shops on the Bhukk network to establish safe havens and instant refuge centers.",
      icon: <Store size={24} />
    },
    {
      num: "4",
      title: "EduQuest247",
      subtitle: "Student communities",
      desc: "Notify nearby verified student response networks and campus groups via EduQuest247 for community support.",
      icon: <GraduationCap size={24} />
    }
  ];

  return (
    <section id="hub" style={{ backgroundColor: 'var(--black)', color: 'var(--white)', padding: '100px 0', position: 'relative' }}>
      <div className="container">

        {/* Header Dashboard Card */}
        <div className="neo-border-thick reveal-on-scroll reveal-up" style={{
          backgroundColor: '#FFC900', color: 'var(--heading)', padding: '40px', borderRadius: '24px',
          display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'space-between', alignItems: 'center',
          boxShadow: '12px 12px 0px var(--black)', marginBottom: '80px', border: '5px solid var(--white)'
        }}>
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="neo-border-thin" style={{
              alignSelf: 'flex-start', padding: '6px 14px', backgroundColor: 'var(--white)', color: 'var(--heading)',
              borderRadius: '8px', fontSize: '0.8rem', fontWeight: '800', border: '3px solid var(--border)',
              boxShadow: '4px 4px 0px var(--black)'
            }}>
              HUB PLATFORM
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-2px', textTransform: 'uppercase', lineHeight: 1.1, textShadow: '2px 2px 0px var(--white)' }}>
              Most trusted digital safety ecosystem by NAIYO24
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--heading)', lineHeight: 1.5, fontWeight: '600' }}>
              The Narii Helping Hand — a community-first platform combining technology, partners and verified responders to minimise response times and maximise safety.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div className="neo-border-thick" style={{
              backgroundColor: 'var(--white)', padding: '24px', borderRadius: '16px', border: '3px solid var(--border)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '150px',
              boxShadow: '6px 6px 0px var(--black)', transform: 'rotate(-3deg)'
            }}>
              <Users size={32} color="var(--black)" />
              <span style={{ fontSize: '0.9rem', fontWeight: '800', textAlign: 'center' }}>Community Reach</span>
            </div>
            <div className="neo-border-thick" style={{
              backgroundColor: 'var(--white)', padding: '24px', borderRadius: '16px', border: '3px solid var(--border)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '150px',
              boxShadow: '6px 6px 0px var(--black)', transform: 'rotate(2deg)'
            }}>
              <Shield size={32} color="var(--black)" />
              <span style={{ fontSize: '0.9rem', fontWeight: '800', textAlign: 'center' }}>Verified Responders</span>
            </div>
          </div>
        </div>

        {/* Escalation Roadmap Section */}
        <div style={{ marginBottom: '80px', position: 'relative' }}>
          
          {/* Background Doodles for Roadmap */}
          <svg width="80" height="80" viewBox="0 0 100 100" style={{ position: 'absolute', top: '10%', left: '-50px', transform: 'rotate(-15deg)', zIndex: 0, opacity: 0.8 }}>
            <path d="M 10 50 L 30 10 L 50 90 L 70 10 L 90 50" fill="none" stroke="#FFBD2E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg width="60" height="60" viewBox="0 0 100 100" style={{ position: 'absolute', bottom: '20%', right: '-40px', transform: 'rotate(25deg)', zIndex: 0, opacity: 0.8 }}>
            <path d="M 50 10 L 60 40 L 90 50 L 60 60 L 50 90 L 40 60 L 10 50 L 40 40 Z" fill="none" stroke="#00E5FF" strokeWidth="8" strokeLinejoin="round" />
          </svg>

          <svg width="100" height="100" viewBox="0 0 100 100" style={{ position: 'absolute', bottom: '5%', left: '0%', transform: 'rotate(10deg)', zIndex: 0, opacity: 0.4 }}>
            <path d="M 20 50 Q 50 10 80 50 T 20 50" fill="none" stroke="#FF90E8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10" />
          </svg>

          {/* Curly Coil Doodle */}
          <svg width="140" height="80" viewBox="0 0 120 80" style={{ position: 'absolute', top: '20%', right: '-5%', transform: 'rotate(-5deg)', zIndex: 0, opacity: 0.8 }}>
            <path d="M 10 50 C -5 20 25 10 35 45 C 45 80 15 70 20 50 C 25 20 55 10 65 45 C 75 80 45 70 50 50 C 55 20 85 10 95 45 C 105 80 75 70 80 50 C 85 20 115 10 120 45" fill="none" stroke="#FF605C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="reveal-on-scroll reveal-left" style={{ marginBottom: '50px', textAlign: 'center', position: 'relative', zIndex: 5 }}>
            <h3 style={{ fontSize: '2.5rem', letterSpacing: '-1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Interactive Escalation Roadmap
            </h3>
            <p style={{ color: '#AAA', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.5 }}>
              How help reaches you, step by step: Our rapid-response chain ensures your safety is never left to chance. <strong style={{ color: '#FF90E8' }}>Tap each step to learn more.</strong>
            </p>
          </div>

          {/* 2-Column Roadmap Layout Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Left Column: Flowchart */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '16px',
              width: '100%'
            }}>
              {steps.map((step, idx) => (
                <React.Fragment key={step.title}>
                  {/* Step Card */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`neo-border-thick reveal-on-scroll reveal-scale delay-${(idx * 2) * 100 + 1000}`}
                    style={{
                      backgroundColor: activeStep === idx ? '#FF90E8' : 'var(--white)',
                      color: 'var(--heading)',
                      padding: '16px 24px',
                      borderRadius: '50px',
                      width: '100%',
                      textAlign: 'center',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      gap: '16px',
                      border: '4px solid var(--border)',
                      boxShadow: activeStep === idx ? '6px 6px 0px var(--white)' : '4px 4px 0px #333',
                      transform: activeStep === idx ? 'translate(-2px, -2px) scale(1.05)' : 'none',
                      transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      outline: 'none'
                    }}
                  >
                    <div className="neo-border-thin" style={{
                      width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--white)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900',
                      fontSize: '1rem', border: '3px solid var(--border)', flexShrink: 0
                    }}>
                      {step.num}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0, textTransform: 'uppercase' }}>{step.title}</h4>
                    </div>
                  </button>

                  {/* Arrow Down */}
                  {idx < steps.length - 1 && (
                    <span 
                      className={`reveal-on-scroll reveal-scale delay-${(idx * 2 + 1) * 100 + 1000}`}
                      style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--white)', display: 'block', margin: '4px 0' }}
                    >
                      ↓
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Right Column: Active Step Explain Panel */}
            <div className="neo-border-thick" style={{
              width: '100%', justifySelf: 'center',
              backgroundColor: '#00E5FF', borderRadius: '16px', padding: '0', border: '4px solid var(--white)',
              boxShadow: '8px 8px 0px var(--black)', overflow: 'hidden'
            }}>
              {/* Terminal Header */}
              <div style={{ backgroundColor: 'var(--white)', padding: '12px 20px', borderBottom: '4px solid var(--border)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--border)' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--border)' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--border)' }}></div>
                <span style={{ marginLeft: '12px', fontWeight: '800', fontSize: '0.9rem', color: 'var(--heading)', letterSpacing: '1px' }}>SYSTEM LOG // STEP {steps[activeStep].num}</span>
              </div>
              {/* Terminal Body */}
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--black)', backgroundColor: 'var(--white)', width: '72px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', border: '4px solid var(--border)', boxShadow: '4px 4px 0px var(--black)', flexShrink: 0 }}>
                  {steps[activeStep].icon}
                </div>
                <div>
                  <h5 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--heading)', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    {steps[activeStep].subtitle}
                  </h5>
                  <p style={{ color: 'var(--heading)', fontSize: '1.25rem', lineHeight: 1.6, margin: 0, fontWeight: '600' }}>
                    {steps[activeStep].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Helping Hand Pillars Section */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ fontSize: '2.5rem', letterSpacing: '-1.5px', textTransform: 'uppercase', marginBottom: '40px', textAlign: 'center' }}>
            The Helping Hand Pillars
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            
            {/* Medical */}
            <div className="neo-border-thick reveal-on-scroll reveal-up" style={{ backgroundColor: '#FF90E8', color: 'var(--heading)', borderRadius: '24px', padding: '32px', border: '4px solid var(--border)', boxShadow: '8px 8px 0px var(--white)', transform: 'rotate(-2deg)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-4px, -4px) rotate(-1deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}>
              <div className="neo-border-thin" style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '3px solid var(--border)' }}>
                <Activity size={26} color="var(--black)" />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '12px', textTransform: 'uppercase' }}>Medical</h4>
              <p style={{ fontSize: '1rem', color: 'var(--heading)', fontWeight: '600', lineHeight: 1.5 }}>Hospital & nursing home partnerships for discounted or free emergency treatment.</p>
            </div>

            {/* Diagnostics */}
            <div className="neo-border-thick reveal-on-scroll reveal-up delay-100" style={{ backgroundColor: '#B8FF2B', color: 'var(--heading)', borderRadius: '24px', padding: '32px', border: '4px solid var(--border)', boxShadow: '8px 8px 0px var(--white)', transform: 'rotate(1.5deg)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-4px, -4px) rotate(2deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(1.5deg)'}>
              <div className="neo-border-thin" style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '3px solid var(--border)' }}>
                <HeartPulse size={26} color="var(--black)" />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '12px', textTransform: 'uppercase' }}>Diagnostics</h4>
              <p style={{ fontSize: '1rem', color: 'var(--heading)', fontWeight: '600', lineHeight: 1.5 }}>Reduced-cost lab testing via Naiyo24's diagnostics IT platform.</p>
            </div>

            {/* Legal */}
            <div className="neo-border-thick reveal-on-scroll reveal-up delay-200" style={{ backgroundColor: '#00E5FF', color: 'var(--heading)', borderRadius: '24px', padding: '32px', border: '4px solid var(--border)', boxShadow: '8px 8px 0px var(--white)', transform: 'rotate(-1deg)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-4px, -4px) rotate(0deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-1deg)'}>
              <div className="neo-border-thin" style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '3px solid var(--border)' }}>
                <Scale size={26} color="var(--black)" />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '12px', textTransform: 'uppercase' }}>Legal</h4>
              <p style={{ fontSize: '1rem', color: 'var(--heading)', fontWeight: '600', lineHeight: 1.5 }}>Affordable access to verified lawyers for post-incident legal support.</p>
            </div>

            {/* Education */}
            <div className="neo-border-thick reveal-on-scroll reveal-up delay-300" style={{ backgroundColor: '#FFC900', color: 'var(--heading)', borderRadius: '24px', padding: '32px', border: '4px solid var(--border)', boxShadow: '8px 8px 0px var(--white)', transform: 'rotate(2deg)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-4px, -4px) rotate(3deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(2deg)'}>
              <div className="neo-border-thin" style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '3px solid var(--border)' }}>
                <BookOpen size={26} color="var(--black)" />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '12px', textTransform: 'uppercase' }}>Education</h4>
              <p style={{ fontSize: '1rem', color: 'var(--heading)', fontWeight: '600', lineHeight: 1.5 }}>Student-led safety groups via EduQuest247 for verified local response.</p>
            </div>

          </div>
        </div>

        {/* Capabilities Section */}
        <div>
          <h3 style={{ fontSize: '2.5rem', letterSpacing: '-1.5px', textTransform: 'uppercase', marginBottom: '40px', textAlign: 'center' }}>
            System Capabilities
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            
            {/* GPS */}
            <div className="neo-border-thick reveal-on-scroll reveal-left flex-col-mobile" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--heading)', borderRadius: '24px', padding: '32px', border: '4px solid var(--border)', gap: '20px', alignItems: 'flex-start', boxShadow: '8px 8px 0px #FF90E8', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-4px, -4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0px, 0px)'}>
              <div style={{ color: 'var(--white)', backgroundColor: 'var(--black)', padding: '12px', borderRadius: '12px', border: '3px solid var(--border)', boxShadow: '4px 4px 0px #FF90E8' }}>
                <MapPin size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '900', marginBottom: '8px', textTransform: 'uppercase' }}>Real-time GPS</h4>
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.5, margin: 0, fontWeight: '600' }}>Exact live location sharing with responders and contacts.</p>
              </div>
            </div>

            {/* Recording */}
            <div className="neo-border-thick reveal-on-scroll reveal-up flex-col-mobile delay-100" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--heading)', borderRadius: '24px', padding: '32px', border: '4px solid var(--border)', gap: '20px', alignItems: 'flex-start', boxShadow: '8px 8px 0px #B8FF2B', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-4px, -4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0px, 0px)'}>
              <div style={{ color: 'var(--white)', backgroundColor: 'var(--black)', padding: '12px', borderRadius: '12px', border: '3px solid var(--border)', boxShadow: '4px 4px 0px #B8FF2B' }}>
                <Video size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '900', marginBottom: '8px', textTransform: 'uppercase' }}>Automatic Recording</h4>
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.5, margin: 0, fontWeight: '600' }}>Automatic audio & video capture to create admissible evidence.</p>
              </div>
            </div>

            {/* Cloud */}
            <div className="neo-border-thick reveal-on-scroll reveal-right flex-col-mobile delay-200" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--heading)', borderRadius: '24px', padding: '32px', border: '4px solid var(--border)', gap: '20px', alignItems: 'flex-start', boxShadow: '8px 8px 0px #00E5FF', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-4px, -4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0px, 0px)'}>
              <div style={{ color: 'var(--white)', backgroundColor: 'var(--black)', padding: '12px', borderRadius: '12px', border: '3px solid var(--border)', boxShadow: '4px 4px 0px #00E5FF' }}>
                <Cloud size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '900', marginBottom: '8px', textTransform: 'uppercase' }}>Secure Cloud</h4>
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.5, margin: 0, fontWeight: '600' }}>Encrypted evidence storage with user-controlled access.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
