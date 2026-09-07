import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export default function TypeAnatomy() {
  const [fontSize, setFontSize] = useState(36);
  const [fontWeight, setFontWeight] = useState(800);
  const [tracking, setTracking] = useState(-0.03);
  const [lineHeight, setLineHeight] = useState(1.1);
  const [alignment, setAlignment] = useState('left');

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
          <SectionLabel text="02 TYPE" number="SYSTEM" accent="purple" japanese="文字" />
          <span className="code-tag">VOICE / SCALE</span>
        </div>
        <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ryuma-black)' }}>
          Hierarchy & Rhythm
        </h4>
        <p style={{ color: 'var(--ryuma-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
          Gives a design its voice, rhythm and hierarchy.
        </p>
      </div>

      {/* Visual Specimen Aa / Aa / Aa */}
      <div
        style={{
          borderRadius: 'var(--radius-sm)',
          background: 'var(--surface-subtle)',
          border: '1px solid var(--surface-border)',
          padding: '24px',
          minHeight: '210px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <div style={{ textAlign: alignment }}>
          <div
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: fontWeight,
              letterSpacing: `${tracking}em`,
              lineHeight: lineHeight,
              color: 'var(--ryuma-black)',
              fontFamily: 'var(--font-primary)',
              transition: 'all 120ms ease'
            }}
          >
            Design has a voice.
          </div>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--ryuma-muted)',
              marginTop: '8px',
              fontFamily: 'var(--font-primary)'
            }}
          >
            Weight {fontWeight} · Tracking {tracking}em · Line Height {lineHeight}
          </p>
        </div>

        {/* Aa Aa Aa visual glyph row */}
        <div style={{ display: 'flex', gap: '24px', marginTop: '16px', borderTop: '1px solid rgba(32, 32, 42, 0.08)', paddingTop: '12px' }}>
          <span style={{ fontSize: '1.8rem', fontWeight: 400, color: 'var(--ryuma-soft)' }}>Aa</span>
          <span style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--ryuma-muted)' }}>Aa</span>
          <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--ryuma-black)' }}>Aa</span>
        </div>
      </div>

      {/* Manual Typographic Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Font Size */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>SIZE ({fontSize}px)</span>
          <input
            type="range"
            min="20"
            max="52"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            style={{ width: '60%', accentColor: 'var(--ryuma-purple)' }}
          />
        </div>

        {/* Font Weight */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>WEIGHT ({fontWeight})</span>
          <input
            type="range"
            min="400"
            max="900"
            step="100"
            value={fontWeight}
            onChange={(e) => setFontWeight(Number(e.target.value))}
            style={{ width: '60%', accentColor: 'var(--ryuma-purple)' }}
          />
        </div>

        {/* Tracking */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>TRACKING ({tracking}em)</span>
          <input
            type="range"
            min="-0.08"
            max="0.15"
            step="0.01"
            value={tracking}
            onChange={(e) => setTracking(Number(e.target.value))}
            style={{ width: '60%', accentColor: 'var(--ryuma-pink)' }}
          />
        </div>

        {/* Alignment */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>ALIGNMENT</span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['left', 'center', 'right'].map((align) => (
              <button
                key={align}
                onClick={() => setAlignment(align)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '4px',
                  background: alignment === align ? 'var(--ryuma-black)' : 'rgba(32, 32, 42, 0.05)',
                  color: alignment === align ? '#FFFFFF' : 'var(--ryuma-black)',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}
              >
                {align.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
