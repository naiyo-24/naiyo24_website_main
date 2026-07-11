import React, { useEffect, useState } from 'react';
import { ArrowLeft, Briefcase, Code, PenTool, TrendingUp, Smartphone, X } from 'lucide-react';

export default function CareersPage({ onBackToHome }) {
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitting, setSubmitting] = useState(false);
  const [messageModal, setMessageModal] = useState({ isOpen: false, type: 'success', message: '' });

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://backend.naiyo24.com/apply', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessageModal({
          isOpen: true,
          type: 'success',
          message: `Application successfully submitted for ${selectedRole.title}! Our team will review it shortly.`
        });
        setSelectedRole(null);
      } else {
        setMessageModal({
          isOpen: true,
          type: 'error',
          message: 'There was an error submitting your application. Please try again.'
        });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMessageModal({
        isOpen: true,
        type: 'error',
        message: `Unable to connect to the server. Error: ${error.message}`
      });
    } finally {
      setSubmitting(false);
    }
  };

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://backend.naiyo24.com/jobs/');
      if (response.ok) {
        const data = await response.json();
        setJobs(data.filter(j => j.status === 'Open'));
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const getJobIcon = (title, category) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('design') || lowerTitle.includes('ui')) return <PenTool size={24} color="var(--black)" />;
    if (lowerTitle.includes('market') || lowerTitle.includes('growth')) return <TrendingUp size={24} color="var(--black)" />;
    if (lowerTitle.includes('mobile') || lowerTitle.includes('flutter') || lowerTitle.includes('ios')) return <Smartphone size={24} color="var(--black)" />;
    if (category === 'tech') return <Code size={24} color="var(--black)" />;
    return <Briefcase size={24} color="var(--black)" />;
  };

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px', overflowX: 'hidden' }}>
      <style>
        {`
          @keyframes floating {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .icon-float {
            animation: floating 3s ease-in-out infinite;
          }
          
          .career-card-hover {
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, background-color 0.3s ease;
            border-radius: 16px;
          }
          .career-card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 6px 12px 0px 0px #000000 !important;
            background-color: #FFFFEA !important;
          }
          .career-card-hover:hover p, .career-card-hover:hover div, .career-card-hover:hover span {
            color: #000000 !important;
          }
          .career-card-hover:hover span.type-pill {
            color: #FFFFFF !important;
          }
        `}
      </style>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <button
          onClick={onBackToHome}
          className="neo-btn"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', marginBottom: '32px', backgroundColor: 'var(--bg-card)' }}
        >
          <ArrowLeft size={18} /> Back to Home
        </button>

        <div className="neo-card reveal-on-scroll reveal-scale" style={{ padding: '80px 60px', backgroundColor: 'var(--bg-card)', textAlign: 'center', marginBottom: '60px' }}>
          <div className="icon-float" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '80px', height: '80px', backgroundColor: 'var(--black)', borderRadius: '50%', border: '4px solid var(--border)', marginBottom: '24px', boxShadow: '4px 4px 0px var(--border)' }}>
            <Briefcase size={40} color="var(--white)" />
          </div>
          <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', margin: '0 0 16px 0', letterSpacing: '-1px' }}>
            Join the <span style={{ color: 'var(--black)' }}>Movement</span>
          </h1>
          <p style={{ color: '#555', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto 40px auto' }}>
            We're building the future of digital software, cloud infrastructure, and brutalist brand identity. If you are passionate, driven, and ready to disrupt, you belong at Naiyo24.
          </p>
        </div>

        <div style={{ marginBottom: '80px' }}>
          <h3 className="reveal-on-scroll reveal-up" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', marginBottom: '32px', textAlign: 'center', textTransform: 'uppercase' }}>Why You'll Love It Here</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div className="neo-border career-card-hover reveal-on-scroll reveal-up delay-100" style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderTop: '8px solid var(--black)' }}>
              <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Innovative Culture</h4>
              <p style={{ color: '#555', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>We encourage out-of-the-box thinking, Neo-Brutalist design exploration, and pushing boundaries.</p>
            </div>
            <div className="neo-border career-card-hover reveal-on-scroll reveal-up delay-200" style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderTop: '8px solid var(--black)' }}>
              <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Growth Focused</h4>
              <p style={{ color: '#555', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Work on diverse, global projects that rapidly accelerate your professional skills and network.</p>
            </div>
            <div className="neo-border career-card-hover reveal-on-scroll reveal-up delay-300" style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderTop: '8px solid var(--black)' }}>
              <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Flexible Output</h4>
              <p style={{ color: '#555', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>We believe in output over hours. Enjoy remote flexibility and a highly supportive team structure.</p>
            </div>
            <div className="neo-border career-card-hover reveal-on-scroll reveal-up delay-400" style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderTop: '8px solid var(--black)' }}>
              <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Flat Hierarchy</h4>
              <p style={{ color: '#555', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Work alongside passionate experts in a highly collaborative environment where ideas are valued.</p>
            </div>
            <div className="neo-border career-card-hover reveal-on-scroll reveal-up delay-500" style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderTop: '8px solid var(--black)' }}>
              <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Continuous Learning</h4>
              <p style={{ color: '#555', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>We sponsor courses, tech conferences, and certifications to keep your skillset on the cutting edge.</p>
            </div>
            <div className="neo-border career-card-hover reveal-on-scroll reveal-up delay-600" style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderTop: '8px solid var(--black)' }}>
              <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Wellness & Balance</h4>
              <p style={{ color: '#555', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Comprehensive health coverage, mental wellness days, and a supportive environment for your well-being.</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '80px' }}>
          <h3 className="reveal-on-scroll reveal-up" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', marginBottom: '32px', textAlign: 'center', textTransform: 'uppercase' }}>Open Positions</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
            {loading ? (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Loading positions...</p>
            ) : jobs.length === 0 ? (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No open positions currently available.</p>
            ) : (
              jobs.map((role, idx) => (
                <div key={idx} className={`neo-border career-card-hover reveal-on-scroll reveal-up delay-${(idx % 4 + 1) * 100}`} style={{ padding: '32px', backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ padding: '12px', backgroundColor: '#F8F9FA', border: '2px solid var(--border)', borderRadius: '12px', boxShadow: '2px 2px 0px var(--border)' }}>
                        {getJobIcon(role.title, role.category)}
                      </div>
                      <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', margin: 0 }}>{role.title}</h4>
                    </div>
                  </div>
                  <span className="type-pill" style={{ alignSelf: 'flex-start', fontSize: '0.85rem', fontWeight: 'bold', backgroundColor: 'var(--black)', color: 'var(--white)', border: '2px solid var(--border)', padding: '4px 12px', borderRadius: '20px' }}>
                    {role.employment_type}
                  </span>
                  <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.6, flexGrow: 1, whiteSpace: 'pre-wrap' }}>{role.description}</p>
                  <div style={{ marginTop: '8px', fontSize: '0.95rem', color: 'var(--heading)', fontWeight: '700' }}>
                    📍 {role.location}
                  </div>
                  <button
                    onClick={() => setSelectedRole(role)}
                    className="neo-btn"
                    style={{ alignSelf: 'flex-start', marginTop: '16px', padding: '12px 24px', backgroundColor: 'var(--black)', color: 'var(--white)', border: '4px solid var(--white)' }}
                  >
                    Apply Now
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="neo-card reveal-on-scroll reveal-up delay-200" style={{ padding: '60px', backgroundColor: 'var(--black)', textAlign: 'center', color: 'var(--white)', border: '4px solid var(--white)' }}>
          <h3 style={{ color: 'var(--white)', fontSize: '2.5rem', fontFamily: 'var(--font-heading)', marginBottom: '16px', textTransform: 'uppercase' }}>Don't see a perfect fit?</h3>
          <p style={{ color: 'var(--white)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 32px auto' }}>
            We're constantly expanding. Send your resume and portfolio and we'll keep you in mind for future groundbreaking roles.
          </p>
          <a href="mailto:naiyooffice@gmail.com" className="neo-btn neo-btn-dark-pill" style={{ fontSize: '1.2rem', padding: '16px 32px' }}>
            Email naiyooffice@gmail.com
          </a>
        </div>
      </div>

      {/* Application Modal Overlay */}
      {selectedRole && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px', overflowY: 'auto'
        }}>
          <div className="neo-card" style={{
            backgroundColor: 'var(--bg-card)', padding: '40px', maxWidth: '600px', width: '100%',
            position: 'relative', marginTop: 'auto', marginBottom: 'auto'
          }}>
            <button
              onClick={() => setSelectedRole(null)}
              className="neo-btn"
              style={{ position: 'absolute', top: '20px', right: '20px', padding: '8px', backgroundColor: '#EEE' }}
            >
              <X size={24} />
            </button>

            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
              Apply for <span style={{ color: 'var(--black)' }}>{selectedRole.title}</span>
            </h2>
            <p style={{ color: '#666', marginBottom: '32px' }}>Fill out the form below to submit your application.</p>

            <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Full Name *</label>
                <input type="text" name="full_name" required className="neo-border-thick" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '1rem' }} placeholder="John Doe" />
              </div>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Email *</label>
                  <input type="email" name="email" required className="neo-border-thick" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '1rem' }} placeholder="john@example.com" />
                </div>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Phone</label>
                  <input type="tel" name="phone" className="neo-border-thick" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '1rem' }} placeholder="+91 00000 00000" />
                </div>
              </div>
              {selectedRole.title.toLowerCase().includes('dev') || selectedRole.title.toLowerCase().includes('ui/ux') ? (
                <>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 200px' }}>
                      <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>GitHub Profile *</label>
                      <input type="url" name="github" required className="neo-border-thick" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '1rem' }} placeholder="https://github.com/..." />
                    </div>
                    <div style={{ flex: '1 1 200px' }}>
                      <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>LinkedIn Profile *</label>
                      <input type="url" name="linkedin" required className="neo-border-thick" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '1rem' }} placeholder="https://linkedin.com/in/..." />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Portfolio / Website URL</label>
                    <input type="url" name="portfolio" className="neo-border-thick" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '1rem' }} placeholder="https://yourwebsite.com" />
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 100%' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>LinkedIn Profile *</label>
                    <input type="url" name="linkedin" required className="neo-border-thick" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '1rem' }} placeholder="https://linkedin.com/in/..." />
                  </div>
                  <div style={{ flex: '1 1 200px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>GitHub Profile</label>
                    <input type="url" name="github" className="neo-border-thick" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '1rem' }} placeholder="https://github.com/..." />
                  </div>
                  <div style={{ flex: '1 1 200px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Portfolio / Website URL</label>
                    <input type="url" name="portfolio" className="neo-border-thick" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '1rem' }} placeholder="https://yourportfolio.com" />
                  </div>
                </div>
              )}
              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Upload CV / Resume *</label>
                <input type="file" name="cv" required accept=".pdf,.doc,.docx" className="neo-border-thick" style={{ width: '100%', padding: '10px', borderRadius: '8px', fontSize: '0.9rem', backgroundColor: '#F8F9FA' }} />
                <span style={{ fontSize: '0.8rem', color: '#666', marginTop: '4px', display: 'block' }}>Accepted formats: PDF, DOC, DOCX (Max 5MB)</span>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Cover Letter / Note</label>
                <textarea name="cover_letter" rows="4" className="neo-border-thick" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }} placeholder="Tell us why you're a great fit..."></textarea>
              </div>

              <button type="submit" disabled={submitting} className="neo-btn" style={{ backgroundColor: 'var(--black)', color: 'var(--white)', fontSize: '1.2rem', padding: '16px', marginTop: '12px', width: '100%', opacity: submitting ? 0.7 : 1 }}>
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Message Modal Overlay */}
      {messageModal.isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
        }}>
          <div className="neo-card" style={{
            backgroundColor: 'var(--bg-card)', padding: '40px', maxWidth: '450px', width: '100%',
            textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px',
            border: '4px solid var(--black)', boxShadow: '8px 8px 0px var(--black)'
          }}>
            <div style={{ fontSize: '3rem', margin: '0 auto' }}>
              {messageModal.type === 'success' ? '✅' : '❌'}
            </div>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--black)', textTransform: 'uppercase' }}>
              {messageModal.type === 'success' ? 'Success!' : 'Oops!'}
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.5, fontWeight: '600' }}>
              {messageModal.message}
            </p>
            <button
              onClick={() => setMessageModal({ ...messageModal, isOpen: false })}
              className="neo-btn neo-btn-blue"
              style={{ padding: '14px 24px', fontSize: '1.1rem', marginTop: '16px', width: '100%' }}
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
