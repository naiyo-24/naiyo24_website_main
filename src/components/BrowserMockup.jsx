import React, { useState, useEffect } from 'react';
import { TrendingUp, Layers, Users, Sparkles, Zap, Smile, Check, DollarSign, Activity } from 'lucide-react';

export default function BrowserMockup() {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Projects', 'Clients', 'Analytics', 'Finance'];

  // Automatic tab rotation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const nextIdx = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIdx];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="neo-card" style={{ padding: 0, overflow: 'hidden', backgroundColor: '#F8F9FA' }}>
      
      {/* Browser Header */}
      <div className="neo-border-thick" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 20px', backgroundColor: 'var(--bg-card)', borderTop: 'none', borderLeft: 'none', borderRight: 'none'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF605C', border: '1.5px solid var(--border)' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD44', border: '1.5px solid var(--border)' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#00CA4E', border: '1.5px solid var(--border)' }}></div>
        </div>
        <div className="neo-border-thin" style={{
          backgroundColor: '#F1F3F4', borderRadius: '8px', fontSize: '0.75rem',
          padding: '4px 24px', width: '220px', textAlign: 'center', fontWeight: '600'
        }}>
          naiyo24.com/dashboard
        </div>
        <div style={{ width: '30px' }}></div>
      </div>

      {/* Browser Dashboard Content */}
      <div style={{ display: 'flex', minHeight: '380px' }}>
        
        {/* Dashboard Sidebar */}
        <div className="neo-border-thin" style={{
          width: '80px', backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', padding: '20px 0', gap: '20px', borderTop: 'none', borderLeft: 'none', borderBottom: 'none'
        }}>
          {tabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                width: '42px', height: '42px', borderRadius: '10px',
                border: '2px solid ' + (activeTab === tab ? 'var(--border)' : 'transparent'),
                backgroundColor: activeTab === tab ? 'var(--white)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: activeTab === tab ? '3px 3px 0px var(--border)' : 'none'
              }}
            >
              {tab === 'Overview' && <TrendingUp size={20} color="var(--heading)" />}
              {tab === 'Projects' && <Layers size={20} color="var(--heading)" />}
              {tab === 'Clients' && <Users size={20} color="var(--heading)" />}
              {tab === 'Analytics' && <Sparkles size={20} color="var(--heading)" />}
              {tab === 'Finance' && <Zap size={20} color="var(--heading)" />}
            </button>
          ))}
        </div>

        {/* Dashboard Viewport */}
        <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Top Welcome banner */}
          <div className="neo-border-thick" style={{
            padding: '12px 16px', backgroundColor: 'var(--bg-card)', borderRadius: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            boxShadow: '4px 4px 0px var(--border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Smile size={24} color="var(--black)" fill="rgba(255, 111, 181, 0.2)" strokeWidth={2.5} />
              <span style={{ fontSize: '0.85rem', fontWeight: '800' }}>
                {activeTab === 'Overview' && "Overview Dashboard 👋"}
                {activeTab === 'Projects' && "Production Pipeline 📦"}
                {activeTab === 'Clients' && "Stakeholders Registry 👥"}
                {activeTab === 'Analytics' && "Real-time Metrics 📈"}
                {activeTab === 'Finance' && "Revenue Ledger 💰"}
              </span>
            </div>
            <span className="neo-border-thin" style={{
              backgroundColor: 'var(--black)', padding: '2px 8px', borderRadius: '6px',
              fontSize: '0.7rem', fontWeight: '800', color: 'var(--white)'
            }}>
              Live Feed
            </span>
          </div>

          {/* Dynamic Content View switcher */}
          {activeTab === 'Overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--black)', borderRadius: '12px', padding: '12px', boxShadow: '3px 3px 0px var(--border)', color: 'var(--white)' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#EEE' }}>Total Projects</span>
                  <p style={{ fontSize: '1.4rem', fontWeight: '800' }}>250+</p>
                </div>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--black)', borderRadius: '12px', padding: '12px', boxShadow: '3px 3px 0px var(--border)', color: 'var(--white)' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#EEE' }}>Client Rating</span>
                  <p style={{ fontSize: '1.4rem', fontWeight: '800' }}>98%</p>
                </div>
              </div>
              <div className="neo-border-thick" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '12px', padding: '12px', boxShadow: '3px 3px 0px var(--border)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', display: 'block', marginBottom: '8px' }}>Performance Overview</span>
                <svg viewBox="0 0 300 60" style={{ width: '100%', height: '60px' }}>
                  <path d="M 0 50 Q 50 15 100 40 Q 150 60 200 10 Q 250 -5 300 30" fill="none" stroke="var(--black)" strokeWidth="4" />
                  <circle cx="100" cy="40" r="5" fill="var(--heading)" />
                  <circle cx="200" cy="10" r="5" fill="var(--black)" stroke="#000000" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          )}

          {activeTab === 'Projects' && (
            <div className="neo-border-thick" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '12px', padding: '16px', boxShadow: '4px 4px 0px var(--border)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800' }}>Active Tasks</span>
              {[
                { name: "Acme Web App", status: "Active", bg: "var(--black)", color: 'var(--white)' },
                { name: "Equinox Mobile", status: "Review", bg: "var(--black)", color: 'var(--white)' },
                { name: "Vortex Branding", status: "Launch", bg: "var(--black)", color: 'var(--white)' }
              ].map((proj) => (
                <div key={proj.name} className="neo-border-thin" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', fontSize: '0.8rem' }}>
                  <span style={{ fontWeight: '700' }}>{proj.name}</span>
                  <span className="neo-border-thin" style={{ backgroundColor: proj.bg, color: proj.color, padding: '2px 8px', borderRadius: '6px', fontSize: '0.65rem', fontWeight: '800' }}>
                    {proj.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Clients' && (
            <div className="neo-border-thick" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '12px', padding: '16px', boxShadow: '4px 4px 0px var(--border)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800' }}>Recent Accounts</span>
              {[
                { company: "Nexus Logistics", industry: "SaaS Dev" },
                { company: "Octane Finance", industry: "Mobile Portal" },
                { company: "Vortex Security", industry: "Infrastructure" }
              ].map((client) => (
                <div key={client.company} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div className="neo-border-thin" style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--black)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: '800' }}>
                    {client.company[0]}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: '800' }}>{client.company}</span>
                    <span style={{ fontSize: '0.65rem', color: '#666' }}>{client.industry}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Analytics' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--black)', borderRadius: '12px', padding: '12px', boxShadow: '3px 3px 0px var(--border)', color: 'var(--white)' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: '800', color: '#EEE' }}>CTR Rate</span>
                  <p style={{ fontSize: '1.2rem', fontWeight: '800' }}>4.8% (+2%)</p>
                </div>
                <div className="neo-border-thick" style={{ backgroundColor: 'var(--black)', borderRadius: '12px', padding: '12px', boxShadow: '3px 3px 0px var(--border)', color: 'var(--white)' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: '800', color: '#EEE' }}>Page Views</span>
                  <p style={{ fontSize: '1.2rem', fontWeight: '800' }}>15,240</p>
                </div>
              </div>
              <div className="neo-border-thick" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '12px', padding: '12px', boxShadow: '3px 3px 0px var(--border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800' }}>Real-time Load Status</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={16} color="var(--black)" />
                  <div style={{ flex: 1, height: '10px', backgroundColor: '#EEE', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: '80%', height: '100%', backgroundColor: 'var(--black)' }}></div>
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800' }}>80%</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Finance' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="neo-border-thick" style={{ backgroundColor: 'var(--black)', borderRadius: '12px', padding: '14px', boxShadow: '3px 3px 0px var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--white)' }}>
                <div>
                  <span style={{ fontSize: '0.65rem', fontWeight: '800', color: '#EEE' }}>MRR Growth</span>
                  <p style={{ fontSize: '1.4rem', fontWeight: '800' }}>$48,250</p>
                </div>
                <DollarSign size={28} color="var(--white)" />
              </div>
              <div className="neo-border-thick" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '12px', padding: '12px', boxShadow: '3px 3px 0px var(--border)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800' }}>Recent Settlements</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', borderBottom: '1px solid #EEE', paddingBottom: '4px' }}>
                  <span>Invoice #2304</span>
                  <span style={{ fontWeight: '800', color: 'green' }}>+$4,200</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span>Invoice #2303</span>
                  <span style={{ fontWeight: '800', color: 'green' }}>+$1,850</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
