import React from 'react';

const testimonials = [
  {
    quote: "I had a very positive experience with Naiyo24. The team is professional, communicates clearly, and delivers work on time. They understand client requirements well and provide practical solutions. I would definitely recommend their services to anyone looking for a reliable technology partner.",
    name: "Subhankar Das",
    role: "Overall Service Experience ⭐⭐⭐⭐⭐",
    initials: "SD",
    bg: "var(--black)"
  },
  {
    quote: "The Naiyo24 website has a clean and professional design that makes it easy to explore their services. Navigation is smooth, the content is well organized, and the overall user experience feels intuitive. It gives a good first impression and reflects a modern digital company.",
    name: "Sayar Paul",
    role: "Website & UI/UX ⭐⭐⭐⭐⭐",
    initials: "SP",
    bg: "var(--black)"
  },
  {
    quote: "One of the best things about Naiyo24 is their customer support. The team responds quickly, answers questions patiently, and keeps clients updated throughout the project. Their professionalism and willingness to help make the entire experience hassle-free.",
    name: "Pritam Mondal",
    role: "Customer Support ⭐⭐⭐⭐⭐",
    initials: "PM",
    bg: "var(--black)"
  },
  {
    quote: "Naiyo24 delivers high-quality work with great attention to detail. Their technical knowledge, creative approach, and commitment to meeting deadlines make them a trustworthy company. I'm satisfied with the final results and look forward to working with them again.",
    name: "Aniket Majumder",
    role: "Quality of Work ⭐⭐⭐⭐⭐",
    initials: "AM",
    bg: "var(--black)"
  },
  {
    quote: "Naiyo24 appears to be a great place for professionals who want to learn and grow. The company encourages innovation, teamwork, and continuous skill development. It seems like a positive environment for building a career in technology and digital services.",
    name: "Ananya Das",
    role: "Career & Work Culture ⭐⭐⭐⭐⭐",
    initials: "AD",
    bg: "var(--black)"
  },
  {
    quote: "Naiyo24 provides a supportive environment for freshers and interns to gain practical experience. The guidance from the team, exposure to real-world projects, and opportunities to develop technical and professional skills make it a valuable place to start and grow a career.",
    name: "Mudassar Sayeed",
    role: "Learning & Internship Experience ⭐⭐⭐⭐⭐",
    initials: "MS",
    bg: "var(--black)"
  }
];

export default function Testimonials() {
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

        <div className="grid-3" style={{ gap: '28px' }}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={`neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up delay-${(idx % 3) * 100 + 100}`} style={{ padding: '32px', backgroundColor: 'var(--white)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '16px' }}>
              <div>
                <div style={{ fontSize: '4rem', fontFamily: 'Georgia, serif', color: 'var(--black)', position: 'absolute', top: '10px', left: '20px', opacity: 0.15, lineHeight: 1 }}>
                  “
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--black)', lineHeight: 1.6, marginBottom: '24px', zIndex: 2, position: 'relative', fontWeight: '600' }}>
                  {t.quote}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                <div className="neo-border-thick" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: t.bg, color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', margin: '0 0 4px 0', textTransform: 'uppercase', color: 'var(--black)' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--black)', margin: 0, fontWeight: '700' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
