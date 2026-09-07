import React, { useState, useEffect } from 'react';
import SectionLabel from './SectionLabel';
import { Sparkles, Eye, ArrowRight, Play, Pause } from 'lucide-react';

export default function LivePreview({ onSelectStyle }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const previewStyles = [
    {
      id: 'glassmorphism',
      name: 'Glassmorphism',
      tagline: 'Light through frosted layers',
      themeClass: 'glass-theme'
    },
    {
      id: 'brutalism',
      name: 'Brutalism',
      tagline: 'Raw ink, 90° corners, hard drop shadow',
      themeClass: 'brutal-theme'
    },
    {
      id: 'minimalism',
      name: 'Minimalism',
      tagline: 'Absolute whitespace, strict typography',
      themeClass: 'minimal-theme'
    },
    {
      id: 'dark-ui',
      name: 'Dark UI',
      tagline: 'Obsidian depths with bioluminescent accents',
      themeClass: 'dark-theme'
    },
    {
      id: 'material-design',
      name: 'Material Design',
      tagline: 'Elevated virtual paper with 8dp cadence',
      themeClass: 'material-theme'
    }
  ];

  // Auto-cycle every 4.5 seconds unless paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % previewStyles.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const current = previewStyles[activeIdx];

  // Render the visual interface specimen for each style
  const renderSpecimenUI = () => {
    switch (current.id) {
      case 'glassmorphism':
        return (
          <div
            style={{
              height: '380px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #EBE5F8 0%, #FBD9DD 45%, #E3D9FC 85%, #F7E5F9 100%)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(20px, 4vw, 40px)',
              overflow: 'hidden',
              boxShadow: '0 20px 48px rgba(118, 80, 199, 0.12)'
            }}
          >
            {/* Soft Ambient Blobs */}
            <div style={{ position: 'absolute', top: '-20px', left: '20px', width: '220px', height: '220px', borderRadius: '50%', background: '#EF7180', opacity: 0.5, filter: 'blur(35px)' }} />
            <div style={{ position: 'absolute', bottom: '-20px', right: '20px', width: '240px', height: '240px', borderRadius: '50%', background: '#7650C7', opacity: 0.45, filter: 'blur(40px)' }} />

            {/* Glass Card */}
            <div
              style={{
                width: '100%',
                maxWidth: '480px',
                background: 'rgba(255, 255, 255, 0.52)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                borderRadius: '18px',
                padding: '32px',
                boxShadow: '0 16px 40px rgba(32, 32, 42, 0.08)',
                position: 'relative',
                zIndex: 2
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--ryuma-purple)', letterSpacing: '0.12em' }}>
                  GLASSMORPHISM SPECIMEN
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ryuma-muted)' }}>
                  BLUR: 20PX
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--ryuma-black)', lineHeight: 1.15, marginBottom: '8px' }}>
                Translucent Surface
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--ryuma-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                Colors and illumination from behind bleed organically through the frosted barrier.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => onSelectStyle('glassmorphism')}
                  style={{
                    padding: '10px 20px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.95)',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    color: 'var(--ryuma-black)',
                    cursor: 'pointer'
                  }}
                >
                  Inspect Glass Layers →
                </button>
              </div>
            </div>
          </div>
        );

      case 'brutalism':
        return (
          <div
            style={{
              height: '380px',
              background: '#FAFF00',
              border: '3px solid #000000',
              boxShadow: '8px 8px 0px #000000',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(24px, 4vw, 40px)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 900, background: '#000000', color: '#FFFFFF', padding: '4px 10px' }}>
                [BRUTALISM_ENGINE_04]
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 900, border: '2px solid #000000', padding: '3px 8px' }}>
                SHADOW: 8PX SOLID #000
              </span>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#000000', textTransform: 'uppercase', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '12px' }}>
                NO BLUR.<br />NO GRADIENT.
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 800, color: '#000000', maxWidth: '440px' }}>
                Raw borders, default monospace typography, and abrasive visual collisions.
              </p>
            </div>

            <div>
              <button
                onClick={() => onSelectStyle('brutalism')}
                style={{
                  padding: '12px 24px',
                  background: '#000000',
                  color: '#FFFFFF',
                  border: '2px solid #000000',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  boxShadow: '4px 4px 0px #00FF66',
                  cursor: 'pointer'
                }}
              >
                PUNCH IN TO BRUTALISM →
              </button>
            </div>
          </div>
        );

      case 'minimalism':
        return (
          <div
            style={{
              height: '380px',
              background: '#FFFFFF',
              border: '1px solid var(--surface-border-strong)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(24px, 4vw, 44px)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--ryuma-soft)' }}>
                SYSTEM / 01 MINIMALISM
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ryuma-muted)' }}>
                GRID: 1:1 RATIO
              </span>
            </div>

            <div style={{ maxWidth: '460px' }}>
              <h3 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--ryuma-black)', lineHeight: 1.08, marginBottom: '14px' }}>
                Whitespace is<br />structure.
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--ryuma-muted)', lineHeight: 1.6 }}>
                Without ornamentation, proportions, negative space, and line heights perform all visual communication.
              </p>
            </div>

            <div>
              <button
                onClick={() => onSelectStyle('minimalism')}
                style={{
                  padding: '10px 24px',
                  background: 'transparent',
                  border: '1px solid var(--ryuma-black)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  cursor: 'pointer'
                }}
              >
                DISCOVER MINIMALISM →
              </button>
            </div>
          </div>
        );

      case 'dark-ui':
        return (
          <div
            style={{
              height: '380px',
              background: '#121218',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9D4EDD', letterSpacing: '0.14em' }}>
                DARK UI / LUMINESCENCE
              </span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#9D4EDD', boxShadow: '0 0 10px #9D4EDD' }} />
            </div>

            <div style={{ maxWidth: '440px' }}>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#F0F0F5', lineHeight: 1.1, marginBottom: '12px', letterSpacing: '-0.03em' }}>
                Luminance in the shadows.
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#9A91A2', lineHeight: 1.6 }}>
                Low-fatigue dark surfaces where elevation is achieved through lighter grey tints rather than drop shadows.
              </p>
            </div>

            <div>
              <button
                onClick={() => onSelectStyle('dark-ui')}
                style={{
                  padding: '12px 24px',
                  background: '#9D4EDD',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 0 24px rgba(157, 78, 221, 0.4)'
                }}
              >
                EXPLORE DARK UI →
              </button>
            </div>
          </div>
        );

      case 'material-design':
      default:
        return (
          <div
            style={{
              height: '380px',
              background: '#F5F5F9',
              borderRadius: '24px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(20px, 4vw, 40px)'
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '460px',
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 12px 28px rgba(63, 81, 181, 0.15)',
                border: '1px solid rgba(63, 81, 181, 0.08)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3F51B5', letterSpacing: '0.12em' }}>
                  MATERIAL DESIGN / 8DP GRID
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FF5722' }}>
                  ELEVATION: 8DP
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1A1A24', lineHeight: 1.2, marginBottom: '8px' }}>
                Digital Paper in Space
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6E6877', lineHeight: 1.5, marginBottom: '20px' }}>
                Surfaces exist in a 3D coordinate space with calibrated shadows and predictable ripple responses.
              </p>
              <button
                onClick={() => onSelectStyle('material-design')}
                style={{
                  padding: '10px 22px',
                  background: '#3F51B5',
                  color: '#FFFFFF',
                  borderRadius: '24px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(63, 81, 181, 0.3)'
                }}
              >
                INTERACT WITH MATERIAL →
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ width: '100%', margin: 'var(--space-64) 0' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <SectionLabel text="LIVE PREVIEW" number="05" accent="pink" japanese="実演" />
          <h2 className="display-title">
            Watch design change.
          </h2>
          <p style={{ color: 'var(--ryuma-muted)', fontSize: '1.05rem', marginTop: '6px' }}>
            Experience how the exact same product concept shifts across radically distinct visual languages.
          </p>
        </div>

        {/* Auto-play pause toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'var(--surface)',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.78rem',
            fontWeight: 800,
            cursor: 'pointer',
            color: 'var(--ryuma-muted)'
          }}
        >
          {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
          <span>{isAutoPlaying ? 'CYCLE ACTIVE' : 'PAUSED'}</span>
        </button>
      </div>

      {/* Manual Controls / Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '8px',
          marginBottom: '20px'
        }}
      >
        {previewStyles.map((item, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveIdx(idx);
                setIsAutoPlaying(false);
              }}
              style={{
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: isActive ? 'var(--ryuma-black)' : 'var(--surface)',
                color: isActive ? '#FFFFFF' : 'var(--ryuma-black)',
                border: '1px solid',
                borderColor: isActive ? 'var(--ryuma-black)' : 'var(--surface-border)',
                fontFamily: 'var(--font-primary)',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: '0.04em',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all var(--duration-fast) var(--ease-ryuma)'
              }}
            >
              <span>{idx + 1}. {item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Live Specimen View */}
      <div>
        {renderSpecimenUI()}
      </div>

      {/* Indicator dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
        {previewStyles.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveIdx(idx);
              setIsAutoPlaying(false);
            }}
            aria-label={`Select preview ${idx + 1}`}
            style={{
              width: activeIdx === idx ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: activeIdx === idx ? 'var(--ryuma-black)' : 'var(--ryuma-light)',
              cursor: 'pointer',
              border: 'none',
              transition: 'all var(--duration-fast) var(--ease-ryuma)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
