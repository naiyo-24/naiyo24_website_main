import React from 'react';
import { ExternalLink, Star, ArrowRight } from 'lucide-react';
import attendXMain from '../../assets/Attendx24/A24MAIN.png';
import caby24Img from '../../assets/Caby24/CABY24MAIN.png';
import medy24Img from '../../assets/Medy24/MEDY24MAIN.png';
import talkyMain from '../../assets/Talky/TALKYMAIN.jpeg';

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 0', backgroundColor: 'var(--white)', borderTop: '4px solid var(--black)', borderBottom: '4px solid var(--black)' }}>
      <div className="container">
        <div className="reveal-on-scroll reveal-up" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '50px' }}>
          <span className="neo-border-thick" style={{
            alignSelf: 'flex-start', borderRadius: '50px', padding: '6px 14px', backgroundColor: 'var(--black)',
            color: 'var(--white)', fontSize: '0.85rem', fontWeight: '800'
          }}>
            CASE STUDIES
          </span>
          <h2 style={{ fontSize: '3.5rem', letterSpacing: '-2px', textTransform: 'uppercase', color: 'var(--black)' }}>Recent Work Showcase</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          
          {/* Project 1 */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-left" style={{ padding: '40px', backgroundColor: 'var(--white)', cursor: 'pointer' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
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
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-right" style={{ padding: '40px', backgroundColor: 'var(--white)', cursor: 'pointer' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
              
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
                <a href="#/projects/caby24" className="neo-btn neo-btn-pink" style={{ alignSelf: 'flex-start' }}>
                  Explore Case Study <ExternalLink size={16} />
                </a>
              </div>

            </div>
          </div>

          {/* Project 3 */}
          <div className="neo-border-thick hover-brutalist-card reveal-on-scroll reveal-left" style={{ padding: '40px', backgroundColor: 'var(--white)', cursor: 'pointer' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
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
                <a href="#/projects/medy24" className="neo-btn neo-btn-pink" style={{ alignSelf: 'flex-start' }}>
                  Explore Case Study <ExternalLink size={16} />
                </a>
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
        </div>
        
        <div className="reveal-on-scroll reveal-up" style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
          <a href="#/projects" className="neo-btn neo-btn-pink" style={{ padding: '16px 32px', fontSize: '1.2rem', display: 'flex', gap: '12px', alignItems: 'center' }}>
            View All Projects <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
