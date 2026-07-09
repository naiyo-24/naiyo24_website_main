import React from 'react';
import { Star, Code, Rocket, Zap, Sparkles } from 'lucide-react';

export default function FloatingElements() {
  return (
    <div className="hide-on-mobile">
      {/* Dotted Grid Left Top */}
      <div className="animate-float" style={{
        position: 'absolute', top: '100px', left: '20px', width: '80px', height: '120px',
        backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)', backgroundSize: '12px 12px',
        opacity: 0.3, zIndex: 1
      }}></div>

      {/* Floating Sparkles Square Right Hero */}
      <div className="animate-float-reverse neo-border-thick neo-shadow-black" style={{
        position: 'absolute', top: '240px', right: '40px', width: '50px', height: '50px',
        backgroundColor: 'var(--white)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: 'rotate(15deg)', zIndex: 2
      }}>
        <Sparkles size={24} color="var(--heading)" strokeWidth={2.5} />
      </div>

      {/* Floating Pink Rocket Square Left Hero */}
      <div className="animate-float neo-border-thick neo-shadow-black" style={{
        position: 'absolute', top: '650px', left: '30px', width: '50px', height: '50px',
        backgroundColor: 'var(--white)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2, transform: 'rotate(-10deg)'
      }}>
        <Rocket size={24} color="var(--heading)" strokeWidth={2.5} />
      </div>


      {/* Floating Code Icon Square Right */}
      <div className="animate-float-reverse neo-border-thick neo-shadow-black" style={{
        position: 'absolute', top: '710px', right: '2%', width: '55px', height: '55px',
        backgroundColor: 'var(--white)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2, transform: 'rotate(8deg)'
      }}>
        <Code size={24} color="var(--heading)" strokeWidth={2.5} style={{ marginTop: '-4px' }} />
      </div>

    </div>
  );
}
