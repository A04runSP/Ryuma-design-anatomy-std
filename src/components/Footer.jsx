import React from 'react';
import Brand from './Brand';

export default function Footer({ onNavigate }) {
  return (
    <footer
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--surface-border-strong)',
        padding: 'clamp(48px, 8vw, 80px) 0 clamp(32px, 5vw, 48px) 0',
        marginTop: 'var(--space-80)'
      }}
    >
      <div className="content-wrapper">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: 'var(--space-48)'
          }}
        >
          {/* Column 1: Brand & Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Brand onClick={() => onNavigate('home')} />
            <p style={{ fontSize: '0.92rem', color: 'var(--ryuma-muted)', lineHeight: 1.6, maxWidth: '320px' }}>
              Ryūma is a visual design-learning and experimentation platform. Deconstructing visual decisions across colour, type, form, space and motion.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-jp)', fontSize: '0.85rem', color: 'var(--ryuma-purple)', fontWeight: 700 }}>
                龍馬 · デザイン解剖
              </span>
            </div>
          </div>

          {/* Column 2: Systems */}
          <div>
            <h4 className="micro-label" style={{ color: 'var(--ryuma-black)', marginBottom: '16px' }}>
              THE 5 ANATOMY SYSTEMS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Colour (色)', 'Type (文字)', 'Form (形態)', 'Space / Ma (空間)', 'Motion (動き)'].map((sys, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('home')}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--ryuma-muted)',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    {sys}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Design Languages */}
          <div>
            <h4 className="micro-label" style={{ color: 'var(--ryuma-black)', marginBottom: '16px' }}>
              DESIGN LANGUAGES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Minimalism', 'Glassmorphism', 'Brutalism', 'Neomorphism', 'Dark UI', 'Material Design'].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('library')}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--ryuma-muted)',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Interactive Studios & Knowledge */}
          <div>
            <h4 className="micro-label" style={{ color: 'var(--ryuma-black)', marginBottom: '16px' }}>
              STUDIOS & KNOWLEDGE
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => onNavigate('labs', 'colour')}
                  style={{ fontSize: '0.88rem', color: 'var(--ryuma-muted)', cursor: 'pointer', textAlign: 'left' }}
                >
                  Colour Lab (Manual & Hybrid)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('labs', 'motion')}
                  style={{ fontSize: '0.88rem', color: 'var(--ryuma-muted)', cursor: 'pointer', textAlign: 'left' }}
                >
                  Motion Lab (Choreography)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('knowledge')}
                  style={{ fontSize: '0.88rem', color: 'var(--ryuma-muted)', cursor: 'pointer', textAlign: 'left' }}
                >
                  Structured Knowledge Tree
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--surface-border)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ryuma-muted)' }}>
              SEE → BREAK DOWN → UNDERSTAND → CREATE
            </span>
          </div>

          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ryuma-soft)' }}>
            © {new Date().getFullYear()} RYŪMA — DESIGN ANATOMY. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
