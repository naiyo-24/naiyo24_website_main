import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage({ onBackToHome }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPrivacy();
  }, []);

  const fetchPrivacy = async () => {
    try {
      const response = await fetch('https://backend.naiyo24.com/privacy');
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          try {
            const parsed = JSON.parse(data[0].content);
            setContent(Array.isArray(parsed) ? parsed : []);
          } catch (e) {
            setContent([{ title: 'Privacy Policy', content: data[0].content }]);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching privacy policy:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        <button
          onClick={onBackToHome}
          className="neo-btn"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', marginBottom: '32px', backgroundColor: 'var(--bg-card)' }}
        >
          <ArrowLeft size={18} /> Back to Home
        </button>

        <div className="neo-card" style={{ padding: '60px', backgroundColor: 'var(--bg-card)' }}>
          <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#666', marginBottom: '40px', fontWeight: '700' }}>
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#333', lineHeight: 1.7 }}>
            {loading ? (
              <p>Loading document...</p>
            ) : content && content.length > 0 ? (
              content.map((section, index) => (
                <section key={section.id || index}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>
                    {section.title}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: section.content }} style={{ fontSize: '1.1rem', whiteSpace: 'pre-wrap' }} />
                </section>
              ))
            ) : (
              <p>No privacy policy has been published yet.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
