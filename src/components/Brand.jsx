import React from 'react';

export default function Brand({ onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '14px',
        cursor: 'pointer',
        userSelect: 'none'
      }}
      role="banner"
    >
      {/* Monogram Box */}
      <div
        style={{
          width: '38px',
          height: '38px',
          background: 'var(--ryuma-black)',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontFamily: 'var(--font-primary)',
          fontWeight: 900,
          fontSize: '1.25rem',
          letterSpacing: '-0.02em',
          boxShadow: '0 4px 12px rgba(32, 32, 42, 0.12)',
          transition: 'transform var(--duration-normal) var(--ease-ryuma)'
        }}
      >
        R
      </div>

      {/* Brand Title & Japanese Subtitle */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span 
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 900,
              fontSize: '1.12rem',
              letterSpacing: '0.12em',
              color: 'var(--ryuma-black)',
              lineHeight: 1
            }}
          >
            RYŪMA
          </span>
          <span 
            style={{
              fontFamily: 'var(--font-jp)',
              fontWeight: 500,
              fontSize: '0.72rem',
              color: 'var(--ryuma-muted)',
              letterSpacing: '0.06em'
            }}
          >
            リューマ
          </span>
        </div>

        {/* Product Sub-Label */}
        <span 
          style={{
            fontFamily: 'var(--font-primary)',
            fontWeight: 800,
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ryuma-purple)',
            lineHeight: 1.2
          }}
        >
          DESIGN ANATOMY
        </span>
      </div>
    </div>
  );
}
