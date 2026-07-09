import React, { useEffect } from 'react';
import { ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import attendXMain from '../../assets/Attendx24/A24MAIN.png';
import caby24Img from '../../assets/Caby24/CABY24MAIN.png';
import medy24Img from '../../assets/Medy24/MEDY24MAIN.png';
import talkyMain from '../../assets/Talky/TALKYMAIN.jpeg';
import medoricaLogo from '../../assets/Medorica_Logo.png';
import medoricaMain from '../../assets/Medorica/MEDORICAMAIN.png';
import manjuMain from '../../assets/Manju/MANJUMAIN.png';
import vwingsMain from '../../assets/VWINGS/VWINGSMAIN.png';
import humbahMain from '../../assets/humbah/HumbahMain.png';
import bhukkMain from '../../assets/Bhukk/BHUKMAIN.png';

export default function ProjectsPage({ onNavigate }) {
  // Ensure the page always starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', padding: '120px 0 80px 0' }}>
      <div className="container">
        
        {/* Back Button */}
        <button 
          onClick={() => onNavigate('home')} 
          className="neo-btn" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', marginBottom: '40px', backgroundColor: 'var(--white)' }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div className="reveal-on-scroll reveal-up" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
          <span className="neo-border-thick" style={{
            alignSelf: 'flex-start', borderRadius: '50px', padding: '6px 14px', backgroundColor: 'var(--black)',
            color: 'var(--white)', fontSize: '0.85rem', fontWeight: '800'
          }}>
            ALL PROJECTS
          </span>
          <h1 style={{ fontSize: '4rem', letterSpacing: '-2px', textTransform: 'uppercase', color: 'var(--black)' }}>
            Our Complete Work
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#333', maxWidth: '700px', lineHeight: 1.6 }}>
            Explore the robust digital solutions, responsive web platforms, and scalable mobile applications we have engineered for our partners.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          
          {/* Project 1 */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up" style={{ padding: '40px', backgroundColor: 'var(--white)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className="neo-border-thick" style={{ alignSelf: 'flex-start', borderRadius: '50px', padding: '4px 10px', backgroundColor: 'var(--white)', color: 'var(--black)', fontSize: '0.75rem', fontWeight: '800' }}>
                  WEB PLATFORM
                </span>
                <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--black)' }}>AttendX 24</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--black)', lineHeight: 1.5, fontWeight: '600' }}>
                  Seamlessly manage your workforce with location tracking, selfie check-ins, and automated payroll integration.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>React</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Flutter</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>FastAPI</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Python</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>PostgreSQL</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <a href="https://attendx24.com/" target="_blank" rel="noreferrer" className="neo-btn neo-btn-pink">
                    Visit Website <ExternalLink size={16} />
                  </a>
                  <a href="#/projects/attendx24" className="neo-btn" style={{ backgroundColor: 'var(--white)', color: 'var(--black)' }}>
                    More Details <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Laptop Mockup Graphic */}
              <div className="neo-border-thick" style={{
                backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-lg)',
                boxShadow: '6px 6px 0px var(--black)'
              }}>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', height: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: '3px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
                </div>
                <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                  <img src={attendXMain} alt="AttendX 24 Dashboard" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up" style={{ padding: '40px', backgroundColor: 'var(--white)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
              
              {/* Laptop Mockup Graphic */}
              <div className="neo-border-thick" style={{
                backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-lg)',
                boxShadow: '6px 6px 0px var(--black)'
              }}>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', height: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: '3px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
                </div>
                <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                  <img src={caby24Img} alt="Caby24 Website" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className="neo-border-thick" style={{ alignSelf: 'flex-start', borderRadius: '50px', padding: '4px 10px', backgroundColor: 'var(--white)', color: 'var(--black)', fontSize: '0.75rem', fontWeight: '800' }}>
                  MOBILITY & LOGISTICS
                </span>
                <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--black)', margin: 0 }}>Caby24</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--black)', lineHeight: 1.5, fontWeight: '600' }}>
                  Premium Cab, Bike & Parcel Booking. We crafted a modern, safe and fully compliant urban mobility solution that empowers drivers and connects the community.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>React</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Flutter</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>FastAPI</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Python</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>PostgreSQL</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <a href="#/projects/caby24" className="neo-btn neo-btn-pink">
                    Explore Case Study <ExternalLink size={16} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Project 3 */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up" style={{ padding: '40px', backgroundColor: 'var(--white)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className="neo-border-thick" style={{ alignSelf: 'flex-start', borderRadius: '50px', padding: '4px 10px', backgroundColor: 'var(--white)', color: 'var(--black)', fontSize: '0.75rem', fontWeight: '800' }}>
                  HEALTHCARE
                </span>
                <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--black)', margin: 0 }}>Medy24</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--black)', lineHeight: 1.5, fontWeight: '600' }}>
                  Connecting users with independent licensed medical professionals, NABL-certified diagnostic laboratories, and registered partner pharmacies.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>React</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Flutter</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>FastAPI</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Python</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>PostgreSQL</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <a href="#/projects/medy24" className="neo-btn neo-btn-pink">
                    Explore Case Study <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Laptop Mockup Graphic */}
              <div className="neo-border-thick" style={{
                backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-lg)',
                boxShadow: '6px 6px 0px var(--black)'
              }}>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', height: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: '3px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
                </div>
                <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                  <img src={medy24Img} alt="Medy24 Website" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Project 4: Talky */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up" style={{ padding: '40px', backgroundColor: 'var(--white)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
              
              {/* Laptop Mockup Graphic */}
              <div className="neo-border-thick" style={{
                backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-lg)',
                boxShadow: '6px 6px 0px var(--black)'
              }}>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', height: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: '3px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
                </div>
                <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                  <img src={talkyMain} alt="Talky News Website" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className="neo-border-thick" style={{ alignSelf: 'flex-start', borderRadius: '50px', padding: '4px 10px', backgroundColor: 'var(--white)', color: 'var(--black)', fontSize: '0.75rem', fontWeight: '800' }}>
                  NEWS & MEDIA
                </span>
                <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--black)', margin: 0 }}>Talky</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--black)', lineHeight: 1.5, fontWeight: '600' }}>
                  Authentic Real-Time News & Civic Engagement Platform. We built a strict verification ecosystem connecting citizens directly to local representatives.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>React</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Flutter</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>FastAPI</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Python</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>PostgreSQL</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <a href="#/projects/talky" className="neo-btn neo-btn-pink">
                    Explore Case Study <ExternalLink size={16} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Project 5: Medorica */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up" style={{ padding: '40px', backgroundColor: 'var(--white)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className="neo-border-thick" style={{ alignSelf: 'flex-start', borderRadius: '50px', padding: '4px 10px', backgroundColor: 'var(--white)', color: 'var(--black)', fontSize: '0.75rem', fontWeight: '800' }}>
                  HEALTHCARE E-COMMERCE
                </span>
                <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--black)', margin: 0 }}>Medorica Pharma</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--black)', lineHeight: 1.5, fontWeight: '600' }}>
                  Your Daily Dose of Healing. We architected a secure, high-performance web platform integrating seamless e-commerce functionality to support their catalog of 500+ products.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>React</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Flutter</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>FastAPI</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Python</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>PostgreSQL</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <a href="https://www.medoricapharma.com/" target="_blank" rel="noreferrer" className="neo-btn neo-btn-pink">
                    Visit Website <ExternalLink size={16} />
                  </a>
                  <a href="#/projects/medorica" className="neo-btn" style={{ backgroundColor: 'var(--white)' }}>
                    More Details <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Laptop Mockup Graphic */}
              <div className="neo-border-thick" style={{
                backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-lg)',
                boxShadow: '6px 6px 0px var(--black)'
              }}>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', height: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: '3px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
                </div>
                <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                  <img src={medoricaMain} alt="Medorica Pharma" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

            </div>
          </div>

          {/* Project 6: Manju Medical */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up" style={{ padding: '40px', backgroundColor: 'var(--white)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
              
              {/* Laptop Mockup Graphic */}
              <div className="neo-border-thick" style={{
                backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-lg)',
                boxShadow: '6px 6px 0px var(--black)'
              }}>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', height: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: '3px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
                </div>
                <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                  <img src={manjuMain} alt="Manju Medical Stores" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className="neo-border-thick" style={{ alignSelf: 'flex-start', borderRadius: '50px', padding: '4px 10px', backgroundColor: 'var(--white)', color: 'var(--black)', fontSize: '0.75rem', fontWeight: '800' }}>
                  DIGITAL CLINIC
                </span>
                <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--black)', margin: 0 }}>Manju Medical Stores</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--black)', lineHeight: 1.5, fontWeight: '600' }}>
                  We built a robust digital clinic application that integrates tele-consultations, prescription management, and e-commerce capabilities into a single seamless platform.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>React</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Flutter</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>FastAPI</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Python</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>PostgreSQL</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <a href="https://www.manjumedicalstores.com/" target="_blank" rel="noreferrer" className="neo-btn neo-btn-pink">
                    Visit Website <ExternalLink size={16} />
                  </a>
                  <a href="#/projects/manju" className="neo-btn" style={{ backgroundColor: 'var(--white)' }}>
                    More Details <ArrowRight size={16} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Project 7: VWings */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up" style={{ padding: '40px', backgroundColor: 'var(--white)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className="neo-border-thick" style={{ alignSelf: 'flex-start', borderRadius: '50px', padding: '4px 10px', backgroundColor: 'var(--white)', color: 'var(--black)', fontSize: '0.75rem', fontWeight: '800' }}>
                  AVIATION EDUCATION
                </span>
                <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--black)', margin: 0 }}>V-Wings Aviation Institute</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--black)', lineHeight: 1.5, fontWeight: '600' }}>
                  We developed a sleek, responsive educational platform to showcase their world-class training programs, driving conversions and empowering the next generation of aviation professionals.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>React</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>FastAPI</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Python</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>PostgreSQL</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <a href="https://vwings247.com/" target="_blank" rel="noreferrer" className="neo-btn neo-btn-pink">
                    Visit Website <ExternalLink size={16} />
                  </a>
                  <a href="#/projects/vwings" className="neo-btn" style={{ backgroundColor: 'var(--white)' }}>
                    More Details <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Laptop Mockup Graphic */}
              <div className="neo-border-thick" style={{
                backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-lg)',
                boxShadow: '6px 6px 0px var(--black)'
              }}>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', height: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: '3px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
                </div>
                <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                  <img src={vwingsMain} alt="V-Wings Aviation Dashboard" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

            </div>
          </div>

          {/* Project 8: Humbah */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up" style={{ padding: '40px', backgroundColor: 'var(--white)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
              
              {/* Mobile Mockup Graphic */}
              <div className="neo-border-thick" style={{
                backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-lg)',
                boxShadow: '6px 6px 0px var(--black)'
              }}>
                <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                  <img src={humbahMain} alt="Humbah AI App Dashboard" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className="neo-border-thick" style={{ alignSelf: 'flex-start', borderRadius: '50px', padding: '4px 10px', backgroundColor: 'var(--white)', color: 'var(--black)', fontSize: '0.75rem', fontWeight: '800' }}>
                  AI COMPANION
                </span>
                <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--black)', margin: 0 }}>Humbah</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--black)', lineHeight: 1.5, fontWeight: '600' }}>
                  We built a comprehensive AI companion platform with specialized assistants for different aspects of everyday living, making AI feel more human, accessible, and helpful.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Flutter</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>FastAPI</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Python</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>PostgreSQL</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>OpenAI</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <a href="#/projects/humbah" className="neo-btn" style={{ backgroundColor: 'var(--white)' }}>
                    More Details <ArrowRight size={16} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Project 9: Bhukk */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up" style={{ padding: '40px', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className="neo-border-thick" style={{ alignSelf: 'flex-start', borderRadius: '50px', padding: '4px 10px', backgroundColor: 'var(--white)', color: 'var(--black)', fontSize: '0.75rem', fontWeight: '800' }}>
                  FOOD & BEVERAGE DELIVERY
                </span>
                <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--heading)', margin: 0 }}>Bhukk</h3>
                <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.5, fontWeight: '500' }}>
                  We developed Bhukk, a high-performance delivery platform featuring real-time tracking, an intuitive ordering interface, and robust backend infrastructure capable of handling high-volume transactions seamlessly.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>React</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Flutter</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>FastAPI</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>Python</span>
                  <span className="neo-border-thick" style={{ backgroundColor: 'var(--white)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.8rem', fontWeight: '700' }}>PostgreSQL</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <a href="https://bhukk.naiyo24.com/" target="_blank" rel="noreferrer" className="neo-btn neo-btn-pink">
                    Visit Website <ExternalLink size={16} />
                  </a>
                  <a href="#/projects/bhukk" className="neo-btn" style={{ backgroundColor: 'var(--white)' }}>
                    More Details <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Mobile Mockup Graphic */}
              <div className="neo-border-thick" style={{
                backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-lg)',
                boxShadow: '-6px 6px 0px var(--black)'
              }}>
                <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                  <img src={bhukkMain} alt="Bhukk Delivery App Dashboard" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
