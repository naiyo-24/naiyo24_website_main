import React from 'react';

export default function Stats() {
  return (
    <section id="stats" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="grid-4">
          
          <div className="neo-card neo-card-interactive neo-card-dark reveal-on-scroll reveal-up" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '8px', letterSpacing: '-1px', color: 'var(--white)' }}>250+</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>Projects Delivered</p>
          </div>

          <div className="neo-card neo-card-interactive neo-card-dark reveal-on-scroll reveal-up delay-100" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '8px', letterSpacing: '-1px', color: 'var(--white)' }}>98%</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>Client Satisfaction</p>
          </div>

          <div className="neo-card neo-card-interactive neo-card-dark reveal-on-scroll reveal-up delay-200" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '8px', letterSpacing: '-1px', color: 'var(--white)' }}>24/7</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>Support Availability</p>
          </div>

          <div className="neo-card neo-card-interactive neo-card-dark reveal-on-scroll reveal-up delay-300" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '8px', letterSpacing: '-1px', color: 'var(--white)' }}>12+</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>Years Experience</p>
          </div>

        </div>
      </div>
    </section>
  );
}
