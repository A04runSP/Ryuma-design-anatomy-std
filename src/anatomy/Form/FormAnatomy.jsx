import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';
import { Circle, Square, Triangle, Hexagon } from 'lucide-react';

export default function FormAnatomy() {
  const [activeShape, setActiveShape] = useState('organic');
  const [borderRadius, setBorderRadius] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [isFilled, setIsFilled] = useState(false);

  const shapes = [
    { key: 'circle', label: 'Circle', info: 'Harmonious, protective, unified' },
    { key: 'square', label: 'Square', info: 'Architectural, stable, structured' },
    { key: 'triangle', label: 'Triangle', info: 'Directional, dynamic, energetic' },
    { key: 'organic', label: 'Organic', info: 'Living, fluid, biomorphic' }
  ];

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
          <SectionLabel text="03 FORM" number="SYSTEM" accent="purple" japanese="形態" />
          <span className="code-tag">GEOMETRY / SILHOUETTE</span>
        </div>
        <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ryuma-black)' }}>
          Structure & Character
        </h4>
        <p style={{ color: 'var(--ryuma-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
          Creates shape, structure and visual character.
        </p>
      </div>

      {/* Visual Specimen Area */}
      <div
        style={{
          borderRadius: 'var(--radius-sm)',
          background: 'var(--surface-subtle)',
          border: '1px solid var(--surface-border)',
          height: '210px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        {activeShape === 'circle' && (
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: isFilled ? 'var(--ryuma-purple)' : 'transparent',
              border: `${strokeWidth}px solid var(--ryuma-black)`,
              transition: 'all 200ms ease'
            }}
          />
        )}

        {activeShape === 'square' && (
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: `${borderRadius}px`,
              background: isFilled ? 'var(--ryuma-pink)' : 'transparent',
              border: `${strokeWidth}px solid var(--ryuma-black)`,
              transition: 'all 200ms ease'
            }}
          />
        )}

        {activeShape === 'triangle' && (
          <svg width="130" height="130" viewBox="0 0 100 100">
            <polygon
              points="50,15 90,85 10,85"
              fill={isFilled ? '#7650C7' : 'none'}
              stroke="#20202A"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
          </svg>
        )}

        {activeShape === 'organic' && (
          <div
            style={{
              width: '140px',
              height: '120px',
              borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
              background: isFilled ? 'linear-gradient(135deg, #7650C7, #EF7180)' : 'transparent',
              border: `${strokeWidth}px solid var(--ryuma-black)`,
              animation: 'pulseGently 4s ease-in-out infinite',
              transition: 'all 200ms ease'
            }}
          />
        )}

        <span style={{ position: 'absolute', bottom: '12px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ryuma-muted)' }}>
          {shapes.find(s => s.key === activeShape)?.info}
        </span>
      </div>

      {/* Shape Selector & Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
          {shapes.map((s) => (
            <button
              key={s.key}
              onClick={() => setActiveShape(s.key)}
              style={{
                padding: '8px',
                borderRadius: '4px',
                background: activeShape === s.key ? 'var(--ryuma-black)' : 'rgba(32, 32, 42, 0.05)',
                color: activeShape === s.key ? '#FFFFFF' : 'var(--ryuma-black)',
                fontSize: '0.75rem',
                fontWeight: 800,
                textAlign: 'center'
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {activeShape === 'square' && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>RADIUS ({borderRadius}px)</span>
            <input
              type="range"
              min="0"
              max="60"
              value={borderRadius}
              onChange={(e) => setBorderRadius(Number(e.target.value))}
              style={{ width: '60%', accentColor: 'var(--ryuma-purple)' }}
            />
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>STROKE ({strokeWidth}px)</span>
          <input
            type="range"
            min="1"
            max="8"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(Number(e.target.value))}
            style={{ width: '60%', accentColor: 'var(--ryuma-pink)' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>FILL SURFACE</span>
          <button
            onClick={() => setIsFilled(!isFilled)}
            style={{
              padding: '6px 14px',
              borderRadius: '4px',
              background: isFilled ? 'var(--ryuma-purple)' : 'rgba(32, 32, 42, 0.06)',
              color: isFilled ? '#FFFFFF' : 'var(--ryuma-black)',
              fontSize: '0.75rem',
              fontWeight: 800
            }}
          >
            {isFilled ? 'FILLED' : 'OUTLINE'}
          </button>
        </div>
      </div>
    </div>
  );
}
