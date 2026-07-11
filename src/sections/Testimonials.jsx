import React, { useState, useEffect } from 'react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('https://backend.naiyo24.com/testimonials');
      if (response.ok) {
        const data = await response.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="testimonials" style={{ padding: '120px 0 160px 0' }}>
      <div className="container">
        <div className="reveal-on-scroll reveal-up" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '50px', alignItems: 'center', textAlign: 'center' }}>
          <span className="neo-border-thick" style={{
            padding: '6px 14px', backgroundColor: 'var(--black)', color: 'var(--white)',
            borderRadius: '50px', fontSize: '0.85rem', fontWeight: '800'
          }}>
            TESTIMONIALS
          </span>
          <h2 style={{ fontSize: '3.5rem', letterSpacing: '-2px', maxWidth: '600px', textTransform: 'uppercase', color: 'var(--black)' }}>
            What Our Clients Say About Us
          </h2>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading testimonials...</p>
        ) : testimonials.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No testimonials available yet.</p>
        ) : (
          <div className="grid-3" style={{ gap: '28px' }}>
            {testimonials.map((t, idx) => {
              const initials = t.author_name ? t.author_name.substring(0, 2).toUpperCase() : 'NA';
              return (
                <div key={t.id || idx} className={`neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up delay-${(idx % 3) * 100 + 100}`} style={{ padding: '32px', backgroundColor: 'var(--white)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '16px' }}>
                  <div>
                    <div style={{ fontSize: '4rem', fontFamily: 'Georgia, serif', color: 'var(--black)', position: 'absolute', top: '10px', left: '20px', opacity: 0.15, lineHeight: 1 }}>
                      “
                    </div>
                    <p style={{ fontSize: '1rem', color: 'var(--black)', lineHeight: 1.6, marginBottom: '24px', zIndex: 2, position: 'relative', fontWeight: '600' }}>
                      {t.content}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                    <div className="neo-border-thick" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--black)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>
                      {initials}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', margin: '0 0 4px 0', textTransform: 'uppercase', color: 'var(--black)' }}>{t.author_name}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--black)', margin: 0, fontWeight: '700' }}>{t.designation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
