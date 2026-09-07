import React, { useState } from 'react';
import { Palette, Type, Box, MoveHorizontal, Play, Sparkles } from 'lucide-react';

export default function HeroSpecimen({ onExploreSystem }) {
  const [activeSystem, setActiveSystem] = useState('colour');
  const [heroColorHue, setHeroColorHue] = useState(264);
  const [heroTracking, setHeroTracking] = useState(-0.03);
  const [heroRadius, setHeroRadius] = useState(16);
  const [heroPadding, setHeroPadding] = useState(28);
  const [motionTrigger, setMotionTrigger] = useState(0);

  const systems = [
    { key: 'colour', label: 'COLOUR', glyph: '色', icon: Palette, summary: 'Mood & Contrast' },
    { key: 'type', label: 'TYPE', glyph: '文字', icon: Type, summary: 'Voice & Hierarchy' },
    { key: 'form', label: 'FORM', glyph: '形態', icon: Box, summary: 'Shape & Geometry' },
    { key: 'space', label: 'SPACE', glyph: '空間', icon: MoveHorizontal, summary: 'Ma & Breathing Room' },
    { key: 'motion', label: 'MOTION', glyph: '動き', icon: Play, summary: 'Velocity & Physics' }
  ];

  const primaryColor = `hsl(${heroColorHue}, 70%, 54%)`;
  const accentTint = `hsl(${heroColorHue}, 40%, 96%)`;

  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--surface-border-strong)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-medium)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all var(--duration-normal) var(--ease-ryuma)'
      }}
    >
      {/* Specimen Header & Systems Selector */}
      <div
        style={{
          background: 'var(--surface-subtle)',
          borderBottom: '1px solid var(--surface-border)',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ryuma-purple)' }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: 'var(--ryuma-black)'
            }}
          >
            SPECIMEN / 00 · FIVE CORE SYSTEMS
          </span>
        </div>

        {/* System Tabs */}
        <div style={{ display: 'flex', gap: '4px', overflowX: 'auto' }}>
          {systems.map((sys) => {
            const isActive = activeSystem === sys.key;
            return (
              <button
                key={sys.key}
                onClick={() => {
                  setActiveSystem(sys.key);
                  if (sys.key === 'motion') {
                    setMotionTrigger((prev) => prev + 1);
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-xs)',
                  background: isActive ? 'var(--ryuma-black)' : 'transparent',
                  color: isActive ? '#FFFFFF' : 'var(--ryuma-muted)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-primary)',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all var(--duration-fast) var(--ease-ryuma)',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontFamily: 'var(--font-jp)', fontSize: '0.7rem' }}>{sys.glyph}</span>
                <span>{sys.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Visual Stage */}
      <div
        style={{
          padding: `${heroPadding}px`,
          background: activeSystem === 'colour' ? accentTint : 'var(--surface)',
          minHeight: '260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          transition: 'all 200ms ease'
        }}
      >
        {/* Visual Specimen Center Artifact */}
        <div
          style={{
            width: '100%',
            maxWidth: '520px',
            background: 'var(--surface)',
            border: '1px solid var(--surface-border-strong)',
            borderRadius: `${heroRadius}px`,
            padding: 'clamp(20px, 4vw, 32px)',
            boxShadow: 'var(--shadow-subtle)',
            position: 'relative',
            transform: activeSystem === 'motion' ? `scale(${motionTrigger % 2 === 0 ? 1 : 1.02})` : 'none',
            transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), border-radius 200ms ease'
          }}
        >
          {/* Top Micro Label */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 800,
                color: activeSystem === 'colour' ? primaryColor : 'var(--ryuma-purple)',
                letterSpacing: '0.12em'
              }}
            >
              ACTIVE DECONSTRUCTION: {activeSystem.toUpperCase()}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-jp)',
                fontSize: '0.78rem',
                color: 'var(--ryuma-soft)'
              }}
            >
              {systems.find((s) => s.key === activeSystem)?.summary}
            </span>
          </div>

          {/* Dynamic Typographic Artifact */}
          <h3
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: 900,
              letterSpacing: `${heroTracking}em`,
              lineHeight: 1.08,
              color: activeSystem === 'colour' ? primaryColor : 'var(--ryuma-black)',
              marginBottom: '10px',
              transition: 'color 150ms ease, letter-spacing 150ms ease'
            }}
          >
            Design is deliberate.
          </h3>

          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--ryuma-muted)',
              lineHeight: 1.5,
              marginBottom: '18px'
            }}
          >
            Every line, stroke, hue, and pause conveys intentional emotional weight.
          </p>

          {/* System-Specific Artifact Visual */}
          {activeSystem === 'colour' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
              {[0, 30, 60, 180].map((deg) => (
                <div
                  key={deg}
                  style={{
                    flex: 1,
                    height: '28px',
                    borderRadius: '4px',
                    background: `hsl(${(heroColorHue + deg) % 360}, 75%, 55%)`,
                    border: '1px solid rgba(0,0,0,0.08)'
                  }}
                />
              ))}
            </div>
          )}

          {activeSystem === 'type' && (
            <div
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'baseline',
                borderTop: '1px solid var(--surface-border)',
                paddingTop: '12px',
                marginTop: '12px'
              }}
            >
              <span style={{ fontSize: '1.4rem', fontWeight: 400, color: 'var(--ryuma-soft)' }}>Light 400</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--ryuma-muted)' }}>Bold 700</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--ryuma-black)' }}>Black 900</span>
            </div>
          )}

          {activeSystem === 'form' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--surface-border)',
                paddingTop: '12px',
                marginTop: '12px'
              }}
            >
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ryuma-muted)' }}>
                SURFACE GEOMETRY
              </span>
              <span className="code-tag">BORDER RADIUS: {heroRadius}PX</span>
            </div>
          )}

          {activeSystem === 'space' && (
            <div
              style={{
                border: '1px dashed var(--ryuma-purple)',
                padding: '8px 12px',
                borderRadius: '4px',
                background: 'rgba(118, 80, 199, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '12px'
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ryuma-purple)', fontWeight: 700 }}>
                MA (間) ACTIVE PADDING: {heroPadding}PX
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--ryuma-muted)' }}>8-point grid</span>
            </div>
          )}

          {activeSystem === 'motion' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--surface-border)',
                paddingTop: '12px',
                marginTop: '12px'
              }}
            >
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ryuma-muted)' }}>
                CURVE: cubic-bezier(0.16, 1, 0.3, 1)
              </span>
              <button
                onClick={() => setMotionTrigger((prev) => prev + 1)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  background: 'var(--ryuma-black)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                <Play size={10} />
                <span>PULSE</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--surface-border)',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', flex: 1 }}>
          {activeSystem === 'colour' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '220px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: 'var(--ryuma-muted)' }}>
                HUE ({heroColorHue}°)
              </span>
              <input
                type="range"
                min="0"
                max="360"
                value={heroColorHue}
                onChange={(e) => setHeroColorHue(Number(e.target.value))}
                style={{ accentColor: 'var(--ryuma-purple)', flex: 1 }}
              />
            </div>
          )}

          {activeSystem === 'type' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '220px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: 'var(--ryuma-muted)' }}>
                TRACKING ({heroTracking}em)
              </span>
              <input
                type="range"
                min="-0.06"
                max="0.10"
                step="0.01"
                value={heroTracking}
                onChange={(e) => setHeroTracking(Number(e.target.value))}
                style={{ accentColor: 'var(--ryuma-pink)', flex: 1 }}
              />
            </div>
          )}

          {activeSystem === 'form' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '220px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: 'var(--ryuma-muted)' }}>
                CORNER RADIUS ({heroRadius}px)
              </span>
              <input
                type="range"
                min="0"
                max="36"
                value={heroRadius}
                onChange={(e) => setHeroRadius(Number(e.target.value))}
                style={{ accentColor: 'var(--ryuma-purple)', flex: 1 }}
              />
            </div>
          )}

          {activeSystem === 'space' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '220px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: 'var(--ryuma-muted)' }}>
                NEGATIVE SPACE ({heroPadding}px)
              </span>
              <input
                type="range"
                min="16"
                max="48"
                value={heroPadding}
                onChange={(e) => setHeroPadding(Number(e.target.value))}
                style={{ accentColor: 'var(--ryuma-purple)', flex: 1 }}
              />
            </div>
          )}

          {activeSystem === 'motion' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ryuma-muted)' }}>
                TRIGGER KINETIC DECONSTRUCTION:
              </span>
              <button
                onClick={() => setMotionTrigger((prev) => prev + 1)}
                style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'var(--ryuma-purple)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                TRIGGER PULSE #{motionTrigger + 1}
              </button>
            </div>
          )}
        </div>

        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--ryuma-muted)', letterSpacing: '0.04em' }}>
          INTERACTIVE SPECIMEN
        </span>
      </div>
    </div>
  );
}
