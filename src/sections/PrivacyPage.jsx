import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage({ onBackToHome }) {
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
            Privacy Policy
          </h1>
          <p style={{ color: '#666', marginBottom: '40px', fontWeight: '700' }}>
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#333', lineHeight: 1.7 }}>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>1. Information We Collect</h3>
              <p>
                At Naiyo24 Private Limited, we are committed to protecting your personal data. When you visit our website, submit inquiries, or use our services, we may collect the following types of information:
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and company details provided through forms.</li>
                <li><strong>Usage Data:</strong> Information on how you navigate our website, including IP addresses, browser types, and usage metrics via analytics tools.</li>
                <li><strong>Project Data:</strong> Any business materials, assets, or specifications you provide to us to facilitate the delivery of our services.</li>
              </ul>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>2. How We Use Your Information</h3>
              <p>
                We use the information we collect primarily to provide, maintain, and improve our digital solutions and services. Specific uses include:
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                <li>Responding to inquiries and providing customer support.</li>
                <li>Delivering contracted services (e.g., website development, marketing, cloud setups).</li>
                <li>Sending administrative updates, invoices, and project milestones.</li>
                <li>Analyzing website traffic to improve user experience and marketing efforts.</li>
              </ul>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>3. Data Sharing and Protection</h3>
              <p>
                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates. We implement strict security measures, including encryption and secure servers, to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>4. Cookies</h3>
              <p>
                Our website uses "cookies" to enhance user experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>5. Third-Party Links</h3>
              <p>
                You may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, or other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>6. Changes to this Privacy Policy</h3>
              <p>
                Naiyo24 Private Limited has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
              </p>
            </section>

            <section>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>7. Contacting Us</h3>
              <p>
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:<br /><br />
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
