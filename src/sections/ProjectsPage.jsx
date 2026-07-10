import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

export default function ProjectsPage({ onNavigate }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ensure the page always starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://192.168.0.159:8000/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

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

        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px 0' }}>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '40px 0' }}>No projects available yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {projects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              const textContent = (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <span className="neo-border-thick" style={{ alignSelf: 'flex-start', borderRadius: '50px', padding: '4px 10px', backgroundColor: 'var(--white)', color: 'var(--black)', fontSize: '0.75rem', fontWeight: '800' }}>
                    PROJECT
                  </span>
                  <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--black)' }}>{project.title}</h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--black)', lineHeight: 1.5, fontWeight: '600' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="neo-btn neo-btn-pink">
                        Visit Website <ExternalLink size={16} />
                      </a>
                    )}
                    <button onClick={(e) => { e.stopPropagation(); onNavigate('project-detail', project.id); }} className="neo-btn" style={{ backgroundColor: 'var(--white)', color: 'var(--black)' }}>
                      View Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );

              const imageContent = (
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
                    {project.image_url ? (
                      <img src={project.image_url} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '300px', backgroundColor: '#EEE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        No Image Provided
                      </div>
                    )}
                  </div>
                </div>
              );

              return (
                <div key={project.id || idx} className={`neo-border-thick hover-brutalist-card reveal-on-scroll reveal-up delay-${(idx % 3) * 100}`} style={{ padding: '40px', backgroundColor: 'var(--white)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
                    {isEven ? (
                      <>
                        {textContent}
                        {imageContent}
                      </>
                    ) : (
                      <>
                        {imageContent}
                        {textContent}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
