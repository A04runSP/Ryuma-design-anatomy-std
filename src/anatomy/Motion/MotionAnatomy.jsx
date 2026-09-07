import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';
import { Play, RotateCcw } from 'lucide-react';

export default function MotionAnatomy() {
  const [duration, setDuration] = useState(400);
  const [easing, setEasing] = useState('cubic-bezier(0.16, 1, 0.3, 1)');
  const [distance, setDistance] = useState(120);
  const [scaleFactor, setScaleFactor] = useState(1.2);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const easings = [
    { label: 'Ryūma Soft', value: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    { label: 'Linear', value: 'linear' },
    { label: 'Ease In-Out', value: 'ease-in-out' },
    { label: 'Bounce', value: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
  ];

  const triggerMotion = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setAnimKey(prev => prev + 1);
      setIsPlaying(true);
    }, 20);
  };

  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--surface-border)',
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(20px, 4vw, 36px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <SectionLabel text="05 MOTION" number="SYSTEM" accent="purple" japanese="動き" />
          <span className="code-tag">● → → → ●</span>
        </div>
        <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ryuma-black)' }}>
          Velocity & Easing
        </h4>
        <p style={{ color: 'var(--ryuma-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
          Brings the system alive through movement and response.
        </p>
      </div>

      {/* Motion Stage */}
      <div
        style={{
          borderRadius: 'var(--radius-sm)',
          background: 'var(--surface-subtle)',
          border: '1px solid var(--surface-border)',
          height: '210px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          position: 'relative',
          padding: '24px 36px',
          overflow: 'hidden'
        }}
      >
        {/* Track Line */}
        <div
          style={{
            position: 'absolute',
            left: '36px',
            right: '36px',
            height: '2px',
            background: 'rgba(32, 32, 42, 0.08)'
          }}
        />

        {/* Animated Moving Element */}
        <div
          key={animKey}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--ryuma-purple), var(--ryuma-pink))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontWeight: 900,
            fontSize: '0.9rem',
            boxShadow: '0 8px 20px rgba(118, 80, 199, 0.3)',
            transform: isPlaying ? `translateX(${distance}px) scale(${scaleFactor})` : 'translateX(0px) scale(1)',
            transition: isPlaying ? `transform ${duration}ms ${easing}` : 'none',
            zIndex: 2
          }}
        >
          ●
        </div>

        {/* Action Button inside Stage */}
        <div style={{ position: 'absolute', bottom: '16px', right: '20px' }}>
          <button
            onClick={triggerMotion}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-xs)',
              background: 'var(--ryuma-black)',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            <Play size={12} />
            <span>RUN MOTION</span>
          </button>
        </div>
      </div>

      {/* Manual Motion Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>DURATION ({duration}ms)</span>
          <input
            type="range"
            min="150"
            max="1200"
            step="50"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            style={{ width: '60%', accentColor: 'var(--ryuma-purple)' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>DISTANCE ({distance}px)</span>
          <input
            type="range"
            min="40"
            max="220"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            style={{ width: '60%', accentColor: 'var(--ryuma-pink)' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>EASING</span>
          <select
            value={easing}
            onChange={(e) => setEasing(e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: '4px',
              border: '1px solid var(--surface-border)',
              background: 'var(--surface)',
              fontSize: '0.78rem',
              fontWeight: 700
            }}
          >
            {easings.map(item => (
              <option key={item.label} value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
