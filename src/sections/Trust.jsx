import React from 'react';

const logoFiles = [
  "/assets/A24.png",
  "/assets/Manju_Medical.png",
  "/assets/Medorica_Logo.png",
  "/assets/naiyo24_official_bhukk_image.png",
  "/assets/naiyo24_official_eduquest247_image.jpeg",
  "/assets/naiyo24_official_nariii_image.png",
  "/assets/V-Wings_Logo_nobg.png",
  "/assets/TALKY.jpg",
  "/assets/Caby24Logo.png",
  "/assets/medy24logo.png"
];

const duplicatedLogos = [...logoFiles, ...logoFiles, ...logoFiles];

export default function Trust() {
  return (
    <section style={{ padding: '30px 0', borderTop: '4px solid var(--border)', borderBottom: '4px solid var(--border)', backgroundColor: 'var(--bg-card)', overflow: 'hidden' }}>
      <div className="reveal-on-scroll reveal-up">
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px', color: '#666' }}>
          Trusted by innovative businesses worldwide
        </p>
        
        <div className="marquee-container">
          <div className="marquee-content">
            {duplicatedLogos.map((logo, idx) => (
              <img 
                key={`logo-1-${idx}`}
                src={logo} 
                alt="Client Logo" 
                style={{ 
                  height: '60px', 
                  objectFit: 'contain', 
                  mixBlendMode: 'multiply', 
                  opacity: 1
                }} 
              />
            ))}
          </div>
          <div className="marquee-content">
            {duplicatedLogos.map((logo, idx) => (
              <img 
                key={`logo-2-${idx}`}
                src={logo} 
                alt="Client Logo Copy" 
                style={{ 
                  height: '60px', 
                  objectFit: 'contain', 
                  mixBlendMode: 'multiply', 
                  opacity: 1
                }} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
