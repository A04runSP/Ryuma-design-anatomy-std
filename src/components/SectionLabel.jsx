import React from 'react';

export default function SectionLabel({ 
  text, 
  number, 
  japanese, 
  accent = 'purple',
  className = '' 
}) {
  return (
    <div 
      className={`section-label-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px',
        userSelect: 'none'
      }}
    >
      {/* Decorative accent dot/bar */}
      <span 
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: accent === 'pink' ? 'var(--ryuma-pink)' : 'var(--ryuma-purple)',
          display: 'inline-block'
        }} 
      />

      {number && (
        <span 
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            color: 'var(--ryuma-soft)',
            letterSpacing: '0.1em'
          }}
        >
          {number}
        </span>
      )}

      <span 
        className="micro-label"
        style={{
          color: accent === 'pink' ? 'var(--ryuma-pink)' : accent === 'purple' ? 'var(--ryuma-purple)' : 'var(--ryuma-muted)',
          fontWeight: 800,
          fontSize: '0.72rem',
          letterSpacing: '0.18em'
        }}
      >
        {text}
      </span>

      {japanese && (
        <span 
          style={{
            fontFamily: 'var(--font-jp)',
            fontSize: '0.72rem',
            color: 'var(--ryuma-soft)',
            fontWeight: 500,
            marginLeft: '4px'
          }}
        >
          {japanese}
        </span>
      )}
    </div>
  );
}
