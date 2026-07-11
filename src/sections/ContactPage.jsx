import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, Sparkles, RefreshCw, Linkedin, Instagram, Facebook, Youtube, Github } from 'lucide-react';

// Memory game icons
const GAME_SYMBOLS = ["💻", "📱", "🌐", "⚡", "🎨", "🛡️"];

export default function ContactPage({ onBackToHome }) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [messageModal, setMessageModal] = useState({ isOpen: false, type: 'success', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Bug Smasher game state
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('bug_smasher_high_score') || '0', 10);
  });
  const [timeLeft, setTimeLeft] = useState(0);
  const [activeBugIndex, setActiveBugIndex] = useState(-1);
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'playing' | 'gameover'

  // Start the game
  const startGame = () => {
    setScore(0);
    setTimeLeft(20);
    setGameState('playing');
    setActiveBugIndex(Math.floor(Math.random() * 9));
  };

  // Bug click handler
  const handleBugClick = (index) => {
    if (gameState !== 'playing') return;
    if (index === activeBugIndex) {
      setScore(prev => prev + 1);
      // Immediately move to a new random index
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * 9);
      } while (nextIndex === activeBugIndex);
      setActiveBugIndex(nextIndex);
    }
  };

  // Countdown timer loop
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (timeLeft === 0) {
      setGameState('gameover');
      setActiveBugIndex(-1);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameState]);

  // Post Game Over check for High Scores
  useEffect(() => {
    if (gameState === 'gameover') {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('bug_smasher_high_score', score.toString());
      }
    }
  }, [gameState, score, highScore]);

  // Bug movement loop (bug jumps randomly)
  useEffect(() => {
    if (gameState !== 'playing') return;

    // Speed up as score increases (starts at 1500ms, caps at 600ms speed)
    const intervalTime = Math.max(600, 1500 - score * 25);

    const interval = setInterval(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * 9);
      } while (nextIndex === activeBugIndex);
      setActiveBugIndex(nextIndex);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [activeBugIndex, gameState, score]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await fetch('https://backend.naiyo24.com/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          subject: formData.subject || 'General Inquiry',
          message: formData.message
        })
      });

      if (response.ok) {
        setMessageModal({
          isOpen: true,
          type: 'success',
          message: "Thank you! Your project inquiry has been received. Our team will contact you within 24 hours."
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setMessageModal({
          isOpen: true,
          type: 'error',
          message: "There was an error submitting your query. Please try again."
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
      setSubmitted(false);
    }
  };

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
        <div className="reveal-on-scroll reveal-up" style={{
          display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px',
          alignItems: 'center', textAlign: 'center'
        }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-2px', textTransform: 'uppercase' }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#555555', maxWidth: '650px', lineHeight: 1.6 }}>
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Form & Map Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'start' }}>

          {/* Left Column (Info & Map) */}
          <div className="reveal-on-scroll reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: '2rem', letterSpacing: '-0.5px' }}>Contact Information</h2>
              <p style={{ color: '#444', fontSize: '1rem', lineHeight: 1.5 }}>
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#666', letterSpacing: '1px' }}>Contact Person</span>
                  <p style={{ fontSize: '1.1rem', fontWeight: '800' }}>Debasish Baidya</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#666', letterSpacing: '1px' }}>Phone Number</span>
                  <p style={{ fontSize: '1.1rem' }}>
                    <a href="tel:+916289171798" style={{ color: 'var(--heading)', fontWeight: '800', textDecoration: 'none' }} onMouseEnter={e => e.target.style.textDecoration = 'underline'} onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                      +91 62891 71798
                    </a>
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#666', letterSpacing: '1px' }}>Email Address</span>
                  <p style={{ fontSize: '1.1rem' }}>
                    <a href="mailto:naiyooffice@gmail.com" style={{ color: 'var(--heading)', fontWeight: '800', textDecoration: 'none' }} onMouseEnter={e => e.target.style.textDecoration = 'underline'} onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                      naiyooffice@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '2px dashed var(--border)', paddingTop: '20px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800' }}>Business Hours</h4>
              <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#222' }}>Monday - Saturday: 12:00 PM - 7:00 PM</p>
            </div>

            {/* Embedded Live Google Map */}
            <div className="neo-border-thick" style={{
              borderRadius: '24px', overflow: 'hidden', boxShadow: '8px 8px 0px var(--border)',
              height: '560px', width: '100%', backgroundColor: '#EEE'
            }}>
              <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=Naiyo24%20Private%20Limited,%20H/30B,%20Chittaranjan%20Colony,%20Baghajatin%20Colony,%20Kolkata,%20West%20Bengal%20700032&t=&z=14&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              ></iframe>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '2px dashed var(--border)', paddingTop: '20px', marginTop: '12px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800' }}>Connect with Us</h4>
              <div style={{ display: 'flex', gap: '12px' }}>
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
            </div>

          </div>

          {/* Right Column (Form & Game) */}
          <div className="reveal-on-scroll reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

            {/* Form Box */}
            <div className="neo-card" style={{ padding: '40px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '28px', borderBottom: '3px solid var(--border)', paddingBottom: '12px' }}>
                Send us a message
              </h3>

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', marginBottom: '6px' }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Enter Your Full Name"
                    style={{
                      width: '100%', padding: '12px 16px', border: '3px solid var(--border)', borderRadius: '12px',
                      fontSize: '0.95rem', outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', marginBottom: '6px' }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Enter your email address"
                    style={{
                      width: '100%', padding: '12px 16px', border: '3px solid var(--border)', borderRadius: '12px',
                      fontSize: '0.95rem', outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', marginBottom: '6px' }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="Enter your phone number"
                    style={{
                      width: '100%', padding: '12px 16px', border: '3px solid var(--border)', borderRadius: '12px',
                      fontSize: '0.95rem', outline: 'none', backgroundColor: '#F8F9FA'
                    }}
                  />
                </div>

                <div style={{ position: 'relative' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', marginBottom: '6px' }}>Subject</label>

                  {/* Trigger Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                    style={{
                      width: '100%', padding: '12px 16px', border: '3px solid var(--border)', borderRadius: '12px',
                      fontSize: '0.95rem', outline: 'none', backgroundColor: 'var(--bg-card)', cursor: 'pointer',
                      fontFamily: 'inherit', textAlign: 'left', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', boxShadow: '3px 3px 0px var(--border)', fontWeight: formData.subject ? '700' : '400'
                    }}
                  >
                    <span>{formData.subject || "Select a Subject"}</span>
                    <span style={{ transition: 'transform 0.2s', transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
                  </button>

                  {/* Dropdown Options List */}
                  {isDropdownOpen && (
                    <div style={{
                      position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px',
                      backgroundColor: 'var(--bg-card)', border: '3px solid var(--border)', borderRadius: '12px',
                      boxShadow: '6px 6px 0px var(--border)', zIndex: 10, maxHeight: '240px', overflowY: 'auto',
                      display: 'flex', flexDirection: 'column'
                    }}>
                      {[
                        "Project Inquiry (General)",
                        "Web Development Project",
                        "Mobile Applications Development",
                        "Servers & Hosting Setup",
                        "Professional Email Setup",
                        "Domain Registration",
                        "Marketing Campaign",
                        "Business Solution (ERP/CRM)",
                        "Logo & Branding Identity",
                        "Company Incorporation Registration",
                        "SEO Optimization",
                        "Market Research & Analysis",
                        "Financial Modeling & Advisory",
                        "Careers / Join Our Team",
                        "Partnership or Support Query"
                      ].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, subject: option });
                            setIsDropdownOpen(false);
                          }}
                          style={{
                            padding: '10px 16px', textAlign: 'left', border: 'none', borderBottom: '1px solid #EEE',
                            backgroundColor: formData.subject === option ? 'var(--black)' : '#FFFFFF',
                            color: formData.subject === option ? 'var(--white)' : 'var(--heading)',
                            cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: '600',
                            transition: 'background-color 0.15s, color 0.15s'
                          }}
                          onMouseEnter={(e) => {
                            if (formData.subject !== option) {
                              e.target.style.backgroundColor = 'var(--black)';
                              e.target.style.color = 'var(--white)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (formData.subject !== option) {
                              e.target.style.backgroundColor = '#FFFFFF';
                              e.target.style.color = 'var(--heading)';
                            }
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', marginBottom: '6px' }}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell us about your project..."
                    style={{
                      width: '100%', padding: '12px 16px', border: '3px solid var(--border)', borderRadius: '12px',
                      fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit', resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="neo-btn neo-btn-blue"
                  style={{ display: 'inline-flex', justifyContent: 'center', width: '100%', padding: '14px 20px', fontSize: '1rem', marginTop: '10px' }}
                >
                  <Send size={18} /> {submitted ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Game Box */}
            <div className="neo-card" style={{ padding: '40px', backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '400px', margin: '0 auto' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>Bug Smasher</h3>
              <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '24px', textAlign: 'center' }}>Squash the bugs before launching the application!</p>

              {/* Bug Smasher Grid - 3 Columns, 3 Rows */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                width: '100%',
                maxWidth: '280px',
                marginBottom: '24px'
              }}>
                {Array.from({ length: 9 }).map((_, idx) => {
                  const hasBug = idx === activeBugIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleBugClick(idx)}
                      disabled={gameState !== 'playing'}
                      style={{
                        height: '76px',
                        border: '3px solid var(--border)',
                        borderRadius: '12px',
                        backgroundColor: hasBug ? 'var(--black)' : '#F8F9FA',
                        fontSize: '2.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: gameState === 'playing' ? 'pointer' : 'default',
                        boxShadow: '3px 3px 0px var(--border)',
                        transition: 'transform 0.1s, background-color 0.1s',
                        transform: hasBug ? 'scale(1.05)' : 'none',
                        outline: 'none'
                      }}
                    >
                      {hasBug ? '🪲' : ''}
                    </button>
                  );
                })}
              </div>

              {/* Game Controls Panel */}
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                {gameState === 'idle' && (
                  <button onClick={startGame} className="neo-btn neo-btn-pink" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
                    Start Game ⚡
                  </button>
                )}

                {gameState === 'playing' && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%' }}>
                    <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', width: '100%' }}>
                      <span style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--heading)' }}>Score: <span style={{ color: 'var(--black)' }}>{score}</span></span>
                      <span style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--heading)' }}>Time: <span style={{ color: 'var(--black)' }}>{timeLeft}s</span></span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Click the bug fast!</span>
                  </div>
                )}

                {gameState === 'gameover' && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
                    <div style={{ textAlign: 'center' }}>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--black)', margin: '0 0 4px 0', textTransform: 'uppercase' }}>Game Over!</h4>
                      <p style={{ margin: '0 0 6px 0', fontWeight: '800', fontSize: '0.95rem' }}>Smashed bugs: {score}</p>
                      {score === highScore && score > 0 && (
                        <span className="neo-border-thin" style={{ display: 'inline-block', padding: '2px 8px', backgroundColor: 'var(--black)', fontSize: '0.7rem', fontWeight: '800', borderRadius: '4px' }}>
                          NEW HIGH SCORE! 🎉
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', borderTop: '2px dashed #EEE', paddingTop: '12px', width: '100%', justifyContent: 'center' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#666' }}>High Score: {highScore}</span>
                      <button onClick={startGame} className="neo-btn neo-btn-pink" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                        Play Again
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

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
