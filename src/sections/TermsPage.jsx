import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage({ onBackToHome }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Terms & Conditions
          </h1>
          <p style={{ color: '#666', marginBottom: '40px', fontWeight: '700' }}>
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#333', lineHeight: 1.7 }}>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>1. Introduction</h3>
              <p>
                Welcome to Naiyo24 Private Limited ("Naiyo24", "we", "our", "us"). These Terms and Conditions govern your use of our website, platform, and the business, software, marketing, and incorporation services we provide. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>2. Services Provided</h3>
              <p>
                Naiyo24 offers a range of digital solutions, including but not limited to Web Development, Mobile Application Development, UI/UX Design, Cloud Infrastructure setups, Digital Marketing, SEO optimization, and Corporate Registration/Filing services. The specific scope, deliverables, timeline, and pricing for any service will be agreed upon in a separate Statement of Work (SOW) or Service Agreement.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>3. User Responsibilities</h3>
              <p>
                You agree to use our website and services only for lawful purposes. You are responsible for ensuring that any information or materials you provide to us (such as brand assets, business details, or legal documents) are accurate, complete, and do not infringe on the intellectual property rights of any third party.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>4. Intellectual Property</h3>
              <p>
                Unless otherwise stated in a Service Agreement, all materials, software, designs, and content created by Naiyo24 remain the intellectual property of Naiyo24 until full payment is received. Upon full payment, the specific rights and licenses to the deliverables transfer to you as outlined in your respective SOW.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>5. Payment Terms</h3>
              <p>
                Payment schedules will be defined per project. We typically require an upfront deposit before commencing work, with milestone payments due upon completion of specific project phases. Late payments may result in the suspension of services or project delays.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>6. Limitation of Liability</h3>
              <p>
                Naiyo24 shall not be held liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>7. Governing Law</h3>
              <p>
                These Terms shall be governed and construed in accordance with the laws of West Bengal, India, without regard to its conflict of law provisions. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>8. Contact Us</h3>
              <p>
                If you have any questions about these Terms, please contact us at:<br /><br />
                <strong>Naiyo24 Private Limited</strong><br />
                H/30B, Chittaranjan Colony, Baghajatin Colony<br />
                Kolkata, West Bengal 700032<br />
                Email: naiyooffice@gmail.com<br />
                Phone: +91 62891 71798
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
