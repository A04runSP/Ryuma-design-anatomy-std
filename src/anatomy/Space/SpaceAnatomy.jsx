import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';

export default function SpaceAnatomy() {
  const [spaceGap, setSpaceGap] = useState(40);
  const [showGuides, setShowGuides] = useState(true);

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
          <SectionLabel text="04 SPACE" number="SYSTEM" accent="purple" japanese="空間 / 間" />
          <span className="code-tag">MA (間) / RHYTHM</span>
        </div>
        <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ryuma-black)' }}>
          Negative Space & Cadence
        </h4>
        <p style={{ color: 'var(--ryuma-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
          Builds rhythm, focus and room to breathe.
        </p>
      </div>

      {/* Visual Specimen Area: Object -> Negative space -> Object */}
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
          position: 'relative',
          padding: '20px',
          overflow: 'hidden'
        }}
      >
        {/* Top Object */}
        <div
          style={{
            padding: '8px 24px',
            background: 'var(--ryuma-black)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-xs)',
            fontSize: '0.82rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            zIndex: 2
          }}
        >
          OBJECT 01
        </div>

        {/* Negative Space Active Gap */}
        <div
          style={{
            height: `${spaceGap}px`,
            width: '200px',
            margin: '4px 0',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'height 120ms ease'
          }}
        >
          {showGuides && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(118, 80, 199, 0.08)',
                borderLeft: '1px dashed var(--ryuma-purple)',
                borderRight: '1px dashed var(--ryuma-purple)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--ryuma-purple)', fontWeight: 700, background: '#FFFFFF', padding: '1px 6px', borderRadius: '3px' }}>
                NEGATIVE SPACE: {spaceGap}px
              </span>
            </div>
          )}
        </div>

        {/* Bottom Object */}
        <div
          style={{
            padding: '8px 24px',
            background: 'var(--ryuma-black)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-xs)',
            fontSize: '0.82rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            zIndex: 2
          }}
        >
          OBJECT 02
        </div>
      </div>

      {/* Manual Space Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>GAP DISTANCE ({spaceGap}px)</span>
          <input
            type="range"
            min="12"
            max="80"
            value={spaceGap}
            onChange={(e) => setSpaceGap(Number(e.target.value))}
            style={{ width: '60%', accentColor: 'var(--ryuma-purple)' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>SHOW MEASUREMENT GUIDES</span>
          <button
            onClick={() => setShowGuides(!showGuides)}
            style={{
              padding: '6px 14px',
              borderRadius: '4px',
              background: showGuides ? 'var(--ryuma-purple)' : 'rgba(32, 32, 42, 0.06)',
              color: showGuides ? '#FFFFFF' : 'var(--ryuma-black)',
              fontSize: '0.75rem',
              fontWeight: 800
            }}
          >
            {showGuides ? 'ENABLED' : 'HIDDEN'}
          </button>
        </div>
      </div>
    </div>
  );
}
