import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';

export default function ProjectDetailPage({ projectId, onNavigate }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Ensure the page always starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProject();
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const response = await fetch(`http://192.168.0.159:8000/projects/${projectId}`);
      if (response.ok) {
        const data = await response.json();
        setProject(data);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '120px 0', minHeight: '80vh', textAlign: 'center' }}>
        <div className="container">
          <h2>Loading project details...</h2>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div style={{ padding: '120px 0', minHeight: '80vh', textAlign: 'center' }}>
        <div className="container">
          <h2>Project not found.</h2>
          <button className="neo-btn" onClick={() => onNavigate('projects')} style={{ marginTop: '20px' }}>
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  // Parse JSON fields safely
  let techStack = [];
  try {
    if (project.technologies_json) techStack = JSON.parse(project.technologies_json);
  } catch(e) {}

  let gallery = [];
  try {
    if (project.gallery_json) gallery = JSON.parse(project.gallery_json);
  } catch(e) {}

  const servicesUsed = project.services_used ? project.services_used.split(',').map(s => s.trim()) : [];

  return (
    <div style={{ padding: '120px 0 80px 0', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Navigation Breadcrumbs */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('home')} className="neo-btn" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} /> Home
          </button>
          <button onClick={() => onNavigate('projects')} className="neo-btn" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            All Projects
          </button>
        </div>

        {/* Hero Section */}
        <div className="neo-card reveal-on-scroll reveal-up" style={{ 
          backgroundColor: 'var(--black)', color: 'var(--white)', padding: '60px 48px', marginBottom: '60px',
          display: 'flex', flexDirection: 'column', gap: '24px'
        }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-2px', textTransform: 'uppercase', lineHeight: 1 }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#DDDDDD', maxWidth: '800px', lineHeight: 1.6 }}>
            {project.description}
          </p>
          
          {project.link && (
            <div style={{ marginTop: '16px' }}>
              <a href={project.link} target="_blank" rel="noreferrer" className="neo-btn neo-btn-pink" style={{ display: 'inline-flex', padding: '12px 24px', fontSize: '1.1rem' }}>
                Visit Website <ExternalLink size={18} />
              </a>
            </div>
          )}
        </div>

        {/* Project Meta Info Grid */}
        <div className="grid-3 reveal-on-scroll reveal-up" style={{ marginBottom: '60px', gap: '24px' }}>
          <div className="neo-card" style={{ padding: '32px', backgroundColor: 'var(--white)' }}>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#555', marginBottom: '8px' }}>Client</h4>
            <p style={{ fontSize: '1.2rem', fontWeight: '800' }}>{project.client || "N/A"}</p>
          </div>
          <div className="neo-card" style={{ padding: '32px', backgroundColor: 'var(--white)' }}>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#555', marginBottom: '8px' }}>Timeline</h4>
            <p style={{ fontSize: '1.2rem', fontWeight: '800' }}>{project.timeline || "N/A"}</p>
          </div>
          <div className="neo-card" style={{ padding: '32px', backgroundColor: 'var(--white)' }}>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#555', marginBottom: '8px' }}>Services Provided</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
              {servicesUsed.length > 0 ? servicesUsed.map((svc, idx) => (
                <span key={idx} className="neo-border-thick" style={{ padding: '4px 12px', fontSize: '0.85rem', borderRadius: '50px', backgroundColor: 'var(--bg-card)' }}>
                  {svc}
                </span>
              )) : (
                <p style={{ fontWeight: '800' }}>N/A</p>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
          
          <div className="neo-card reveal-on-scroll reveal-left" style={{ padding: '40px', backgroundColor: 'var(--white)' }}>
            <h3 style={{ fontSize: '2rem', textTransform: 'uppercase', marginBottom: '24px' }}>The Challenge</h3>
            <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.8 }}>
              {project.challenge || "No challenge detailed."}
            </p>
          </div>

          <div className="neo-card reveal-on-scroll reveal-right" style={{ padding: '40px', backgroundColor: 'var(--bg-card)' }}>
            <h3 style={{ fontSize: '2rem', textTransform: 'uppercase', marginBottom: '24px' }}>The Solution</h3>
            <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.8 }}>
              {project.solution || "No solution detailed."}
            </p>
          </div>

        </div>

        
        {/* Product Gallery */}
        <div style={{ marginTop: '80px' }}>
          {(project.image_url || gallery.length > 0) && (
            <h3 style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '24px' }}>Product Gallery</h3>
          )}
          
          {project.image_url && (
            <div className="neo-border-thick reveal-on-scroll reveal-up" style={{
              backgroundColor: 'var(--white)', overflow: 'hidden', borderRadius: 'var(--radius-xl)',
              boxShadow: '6px 6px 0px var(--black)', marginTop: '24px'
            }}>
              <div className="neo-border-thick" style={{ backgroundColor: 'var(--white)', height: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: '3px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: '2px solid var(--black)' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', border: '2px solid var(--black)' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', border: '2px solid var(--black)' }}></div>
              </div>
              <div style={{ backgroundColor: 'var(--white)', padding: 0 }}>
                <img src={project.image_url} alt={`${project.title} Main`} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>
          )}

          {gallery.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '48px' }}>
              {gallery.map((imgSrc, idx) => (
                <div key={idx} className="neo-card reveal-on-scroll reveal-up" style={{ padding: '0', overflow: 'hidden', border: 'var(--border-thick) solid var(--black)', borderRadius: 'var(--radius-xl)' }}>
                  <img src={`http://192.168.0.159:8000${imgSrc}`} alt={`${project.title} Screen ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="neo-card reveal-on-scroll reveal-up" style={{ padding: '48px', backgroundColor: 'var(--white)', marginTop: '40px' }}>
            <h3 style={{ fontSize: '2rem', textTransform: 'uppercase', marginBottom: '32px', textAlign: 'center' }}>Technologies Used</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              {techStack.map((tech, idx) => (
                <div key={idx} className="neo-border-thick" style={{ padding: '12px 24px', backgroundColor: 'var(--bg-card)', fontSize: '1.1rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={20} color="var(--black)" /> {tech}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
