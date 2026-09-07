import React, { useState } from 'react';
import { ArrowRight, Sliders, Layers, Sparkles, SunMedium, Eye, RotateCw, Volume2, Shield, Circle, Square, Triangle } from 'lucide-react';

export default function VisualSpecimen({ 
  styleData,
  interactive = true,
  onExplore
}) {
  const [activeTab, setActiveTab] = useState('preview');

  // Glassmorphism state
  const [blurAmount, setBlurAmount] = useState(16);
  const [glassOpacity, setGlassOpacity] = useState(0.45);

  // Brutalism state
  const [brutalShadow, setBrutalShadow] = useState(8);
  const [brutalInvert, setBrutalInvert] = useState(false);

  // Minimalism state
  const [minimalPadding, setMinimalPadding] = useState(36);
  const [minimalTracking, setMinimalTracking] = useState(-0.03);

  // Neomorphism state
  const [neoDepth, setNeoDepth] = useState(10);
  const [neoPressed, setNeoPressed] = useState(false);

  // Dark UI state
  const [darkGlowColor, setDarkGlowColor] = useState('#7650C7');

  // Material Design state
  const [materialElevation, setMaterialElevation] = useState(4);

  // Claymorphism state
  const [clayPuffiness, setClayPuffiness] = useState(12);

  // Aurora Gradient state
  const [auroraShift, setAuroraShift] = useState(0);

  // Skeuomorphism state
  const [knobRotation, setKnobRotation] = useState(45);

  // Flat Design state
  const [flatPalette, setFlatPalette] = useState('primary');

  // Editorial Design state
  const [editorialCols, setEditorialCols] = useState(2);

  // Organic Natural state
  const [organicRadius, setOrganicRadius] = useState(40);

  // Y2K state
  const [y2kChrome, setY2kChrome] = useState(true);

  // Memphis state
  const [memphisPattern, setMemphisPattern] = useState(true);

  // Retro Vintage state
  const [retroWarmth, setRetroWarmth] = useState(15);

  // Fluent Design state
  const [fluentAcrylic, setFluentAcrylic] = useState(20);

  // Maximalism state
  const [maximalismDensity, setMaximalismDensity] = useState(3);

  const styleId = styleData?.id || 'glassmorphism';

  // 1. GLASSMORPHISM SPECIMEN
  if (styleId === 'glassmorphism') {
    return (
      <div
        style={{
          width: '100%',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, #EBE5F8 0%, #FBD9DD 45%, #E3D9FC 85%, #F7E5F9 100%)',
          position: 'relative',
          padding: 'clamp(24px, 5vw, 64px)',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(118, 80, 199, 0.14)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '10%',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #EF7180 0%, rgba(239, 113, 128, 0) 70%)',
            opacity: 0.6,
            filter: 'blur(30px)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            right: '5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #7650C7 0%, rgba(118, 80, 199, 0) 70%)',
            opacity: 0.5,
            filter: 'blur(40px)',
            pointerEvents: 'none'
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            background: `rgba(255, 255, 255, ${glassOpacity})`,
            backdropFilter: `blur(${blurAmount}px)`,
            WebkitBackdropFilter: `blur(${blurAmount}px)`,
            border: '1px solid rgba(255, 255, 255, 0.75)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(24px, 4vw, 56px)',
            boxShadow: '0 20px 48px rgba(32, 32, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--ryuma-purple)',
                letterSpacing: '0.12em'
              }}
            >
              RYŪMA / STUDY 02
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ryuma-pink)' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ryuma-black)' }}>
                FROSTED REFRACTION ENGINE
              </span>
            </div>
          </div>

          <div>
            <h2
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                color: 'var(--ryuma-black)',
                marginBottom: '12px'
              }}
            >
              Clarity<br />in layers.
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                fontWeight: 600,
                color: 'var(--ryuma-muted)',
                letterSpacing: '-0.01em'
              }}
            >
              White glass · soft light · subtle depth
            </p>
          </div>

          {onExplore && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={onExplore}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  background: 'var(--ryuma-black)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 8px 20px rgba(32, 32, 42, 0.2)'
                }}
              >
                <span>EXPLORE</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          )}

          {/* Floating Mini Cards - Spec 12: The word TRANSPARENCY must never overflow or clip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginTop: '12px'
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.85)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px 20px',
                boxShadow: '0 6px 18px rgba(32, 32, 42, 0.05)',
                minWidth: 0
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--ryuma-purple)' }}>
                  01
                </span>
                <span
                  className="glass-card-title"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ryuma-black)',
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word'
                  }}
                >
                  TRANSPARENCY
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ryuma-muted)', letterSpacing: '0.06em' }}>
                LET LIGHT THROUGH
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.85)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px 20px',
                boxShadow: '0 6px 18px rgba(32, 32, 42, 0.05)',
                minWidth: 0
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--ryuma-purple)' }}>
                  02
                </span>
                <span
                  className="glass-card-title"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ryuma-black)'
                  }}
                >
                  DEPTH
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ryuma-muted)', letterSpacing: '0.06em' }}>
                BUILD WITH LAYERS
              </p>
            </div>
          </div>

          {/* Interactive controls */}
          {interactive && (
            <div
              style={{
                marginTop: '12px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(32, 32, 42, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--ryuma-muted)' }}>
                    BLUR ({blurAmount}px)
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={blurAmount}
                    onChange={(e) => setBlurAmount(Number(e.target.value))}
                    style={{ accentColor: 'var(--ryuma-purple)', width: '90px' }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--ryuma-muted)' }}>
                    OPACITY ({Math.round(glassOpacity * 100)}%)
                  </span>
                  <input
                    type="range"
                    min="0.1"
                    max="0.9"
                    step="0.05"
                    value={glassOpacity}
                    onChange={(e) => setGlassOpacity(Number(e.target.value))}
                    style={{ accentColor: 'var(--ryuma-pink)', width: '90px' }}
                  />
                </div>
              </div>

              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--ryuma-purple)', letterSpacing: '0.04em' }}>
                LIVE MATERIAL EXPERIMENT
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 2. BRUTALISM SPECIMEN
  if (styleId === 'brutalism') {
    const bg = brutalInvert ? '#000000' : '#FAFF00';
    const text = brutalInvert ? '#FAFF00' : '#000000';
    const shadowColor = brutalInvert ? '#00FF66' : '#000000';

    return (
      <div
        style={{
          width: '100%',
          background: bg,
          border: '3px solid #000000',
          boxShadow: `${brutalShadow}px ${brutalShadow}px 0px ${shadowColor}`,
          padding: 'clamp(24px, 5vw, 56px)',
          position: 'relative',
          transition: 'all 150ms ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 900, background: text, color: bg, padding: '4px 10px' }}>
            RAW_BRUTAL_STUDY_04
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 900, color: text, border: `2px solid ${text}`, padding: '4px 8px' }}>
            90° CORNERS · ZERO RADIUS
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: text,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: '16px'
          }}
        >
          TRUTH IN<br />MATERIAL.
        </h2>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 800, color: text, maxWidth: '540px', marginBottom: '28px' }}>
          No soft shadows. No subtle gradients. Hyper-contrasting ink lines and abrasive mechanical collisions.
        </p>

        {interactive && (
          <div
            style={{
              paddingTop: '20px',
              borderTop: `2px solid ${text}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 900, color: text }}>
                  OFFSET ({brutalShadow}PX)
                </span>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="2"
                  value={brutalShadow}
                  onChange={(e) => setBrutalShadow(Number(e.target.value))}
                  style={{ accentColor: '#000000', width: '100px' }}
                />
              </div>

              <button
                onClick={() => setBrutalInvert(!brutalInvert)}
                style={{
                  padding: '6px 12px',
                  background: text,
                  color: bg,
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 900,
                  fontSize: '0.75rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                INVERT COLOR
              </button>
            </div>

            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 900, color: text }}>
              HARD PIXEL OFFSET
            </span>
          </div>
        )}
      </div>
    );
  }

  // 3. MINIMALISM SPECIMEN
  if (styleId === 'minimalism') {
    return (
      <div
        style={{
          width: '100%',
          background: '#FFFFFF',
          border: '1px solid #EAEAEA',
          borderRadius: '4px',
          padding: `clamp(24px, 4vw, ${minimalPadding}px)`,
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
          transition: 'all 200ms ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#999999', letterSpacing: '0.15em' }}>
            MINIMALISM / 01
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#999999' }}>
            LESS BUT BETTER
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
            fontWeight: 400,
            letterSpacing: `${minimalTracking}em`,
            color: '#111111',
            lineHeight: 1.08,
            marginBottom: '16px'
          }}
        >
          Essential Space.
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#666666', maxWidth: '500px', lineHeight: 1.7, marginBottom: '36px' }}>
          Every redundant flourish is subtracted until nothing more can be removed without breaking the message.
        </p>

        <div style={{ height: '1px', background: '#EAEAEA', width: '60px', marginBottom: '32px' }} />

        {interactive && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888' }}>
                  NEGATIVE SPACE ({minimalPadding}px)
                </span>
                <input
                  type="range"
                  min="24"
                  max="64"
                  value={minimalPadding}
                  onChange={(e) => setMinimalPadding(Number(e.target.value))}
                  style={{ accentColor: '#111111', width: '90px' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888' }}>
                  TRACKING ({minimalTracking}em)
                </span>
                <input
                  type="range"
                  min="-0.06"
                  max="0.08"
                  step="0.01"
                  value={minimalTracking}
                  onChange={(e) => setMinimalTracking(Number(e.target.value))}
                  style={{ accentColor: '#111111', width: '90px' }}
                />
              </div>
            </div>

            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#999' }}>
              MA (間) HARMONY
            </span>
          </div>
        )}
      </div>
    );
  }

  // 4. NEOMORPHISM SPECIMEN
  if (styleId === 'neomorphism') {
    const neoShadow = neoPressed
      ? `inset ${neoDepth}px ${neoDepth}px ${neoDepth * 2}px #A3B1C6, inset -${neoDepth}px -${neoDepth}px ${neoDepth * 2}px #FFFFFF`
      : `${neoDepth}px ${neoDepth}px ${neoDepth * 2}px #A3B1C6, -${neoDepth}px -${neoDepth}px ${neoDepth * 2}px #FFFFFF`;

    return (
      <div
        style={{
          width: '100%',
          background: '#E0E5EC',
          borderRadius: '28px',
          padding: 'clamp(28px, 5vw, 60px)',
          boxShadow: '16px 16px 32px #A3B1C6, -16px -16px 32px #FFFFFF',
          transition: 'all 200ms ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#6E7D93' }}>
            NEOMORPHISM / 03
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6E7D93' }}>
            SOFT EXTRUDED EMBOSS
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 900, color: '#3A4454', marginBottom: '12px' }}>
          Molded from One Surface.
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#6E7D93', maxWidth: '520px', lineHeight: 1.6, marginBottom: '36px' }}>
          UI elements are not layered on top; they are physically extruded and pressed into the background plane.
        </p>

        {/* Interactive Tactile Push Plate */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
          <button
            onClick={() => setNeoPressed(!neoPressed)}
            style={{
              padding: '16px 32px',
              borderRadius: '50px',
              background: '#E0E5EC',
              boxShadow: neoShadow,
              color: neoPressed ? '#7650C7' : '#3A4454',
              fontWeight: 900,
              fontSize: '0.92rem',
              letterSpacing: '0.06em',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 150ms ease'
            }}
          >
            {neoPressed ? '● PRESSED (CONCAVE)' : '○ RELEASED (CONVEX)'}
          </button>
          <span style={{ fontSize: '0.8rem', color: '#6E7D93' }}>Click plate to depress</span>
        </div>

        {interactive && (
          <div style={{ paddingTop: '20px', borderTop: '1px solid #D1D9E6', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: '#6E7D93' }}>
                SHADOW DEPTH ({neoDepth}px)
              </span>
              <input
                type="range"
                min="4"
                max="18"
                value={neoDepth}
                onChange={(e) => setNeoDepth(Number(e.target.value))}
                style={{ accentColor: '#7650C7', width: '100px' }}
              />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#6E7D93' }}>
              DUAL LIGHT SOURCE (45°)
            </span>
          </div>
        )}
      </div>
    );
  }

  // 5. DARK UI SPECIMEN
  if (styleId === 'dark-ui') {
    return (
      <div
        style={{
          width: '100%',
          background: '#0F0E14',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(28px, 5vw, 60px)',
          boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 40px ${darkGlowColor}15`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800, color: darkGlowColor, letterSpacing: '0.1em' }}>
            OBSIDIAN STUDY / 11
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: darkGlowColor, boxShadow: `0 0 10px ${darkGlowColor}` }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#A0A0B0' }}>BIOLUMINESCENT CONTRAST</span>
          </div>
        </div>

        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.05, marginBottom: '16px' }}>
          Obsidian Depths.
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#9090A0', maxWidth: '520px', lineHeight: 1.6, marginBottom: '32px' }}>
          Preserves ocular comfort, minimizes emissive glare, and uses concentrated photon accents to guide visual focus.
        </p>

        {/* Glow Chip Row */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {['#7650C7', '#00F0FF', '#00FF66', '#EF7180'].map((color) => (
            <button
              key={color}
              onClick={() => setDarkGlowColor(color)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: darkGlowColor === color ? `${color}25` : '#181722',
                border: `1px solid ${darkGlowColor === color ? color : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#FFF' }}>{color}</span>
            </button>
          ))}
        </div>

        {interactive && (
          <div style={{ paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#707080' }}>
              OLED TRUE BLACK #000000 / DEEP VOID #0F0E14
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: darkGlowColor }}>
              ACCENT GLOW ACTIVE
            </span>
          </div>
        )}
      </div>
    );
  }

  // 6. MATERIAL DESIGN SPECIMEN
  if (styleId === 'material-design') {
    const shadowFormula = `0 ${materialElevation * 2}px ${materialElevation * 6}px rgba(0,0,0,0.15)`;
    return (
      <div
        style={{
          width: '100%',
          background: '#F8F9FA',
          border: '1px solid #E0E0E0',
          borderRadius: '16px',
          padding: 'clamp(28px, 5vw, 60px)',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800, color: '#6200EE' }}>
            MATERIAL SPECIMEN / 07
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#666' }}>
            8DP PHYSICAL CADENCE
          </span>
        </div>

        {/* Elevated Virtual Sheet */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '32px',
            boxShadow: shadowFormula,
            marginBottom: '32px',
            transition: 'box-shadow 200ms ease'
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: '#6200EE' }}>
            VIRTUAL PAPER LAYER · ELEVATION {materialElevation}DP
          </span>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#202124', margin: '8px 0' }}>
            Physical Metaphor.
          </h3>
          <p style={{ color: '#5F6368', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Surfaces exist in a 3D Z-space. Light cast from a virtual key light creates depth cues that indicate interaction hierarchy.
          </p>
        </div>

        {interactive && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: '#666' }}>
                ELEVATION ({materialElevation}DP)
              </span>
              <input
                type="range"
                min="1"
                max="16"
                value={materialElevation}
                onChange={(e) => setMaterialElevation(Number(e.target.value))}
                style={{ accentColor: '#6200EE', width: '110px' }}
              />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#666' }}>
              SHADOW = F(Z-DEPTH)
            </span>
          </div>
        )}
      </div>
    );
  }

  // 7. CLAYMORPHISM SPECIMEN
  if (styleId === 'claymorphism') {
    return (
      <div
        style={{
          width: '100%',
          background: '#F0F4FC',
          borderRadius: '32px',
          padding: 'clamp(28px, 5vw, 60px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#7E92B5', marginBottom: '16px' }}>
          CLAYMORPHISM / 09 · INFLATED GEOMETRY
        </span>

        <div
          style={{
            padding: '36px clamp(24px, 5vw, 56px)',
            background: '#FFFFFF',
            borderRadius: '40px',
            boxShadow: `inset -${clayPuffiness}px -${clayPuffiness}px ${clayPuffiness * 1.5}px rgba(0,0,0,0.06), inset ${clayPuffiness}px ${clayPuffiness}px ${clayPuffiness * 1.5}px #FFFFFF, 0 20px 40px rgba(126,146,181,0.2)`,
            maxWidth: '540px',
            marginBottom: '32px',
            transition: 'all 200ms ease'
          }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, color: '#2B3A55', marginBottom: '8px' }}>
            Pillowy Volume.
          </h2>
          <p style={{ color: '#6C7E9E', fontSize: '1rem', lineHeight: 1.5 }}>
            Double inner shadows simulate soft clay with rounded inflated edges and friendly tactile physics.
          </p>
        </div>

        {interactive && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: '#7E92B5' }}>
              INFLATION PUFFINESS ({clayPuffiness}PX)
            </span>
            <input
              type="range"
              min="4"
              max="20"
              value={clayPuffiness}
              onChange={(e) => setClayPuffiness(Number(e.target.value))}
              style={{ accentColor: '#EF7180', width: '100px' }}
            />
          </div>
        )}
      </div>
    );
  }

  // 8. AURORA GRADIENT SPECIMEN
  if (styleId === 'aurora-gradient') {
    return (
      <div
        style={{
          width: '100%',
          borderRadius: '24px',
          background: `radial-gradient(circle at ${20 + auroraShift}% ${30 + auroraShift}%, #00F5D4 0%, transparent 45%), radial-gradient(circle at ${80 - auroraShift}% ${70 - auroraShift}%, #7B2CBF 0%, transparent 45%), radial-gradient(circle at 50% 50%, #FF007F 0%, transparent 50%), #0A0814`,
          padding: 'clamp(28px, 5vw, 64px)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background 400ms ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#00F5D4' }}>
            AURORA MESH / 10
          </span>
          <span style={{ fontSize: '0.75rem', color: '#DDD' }}>CELESTIAL DRIFT</span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '16px' }}>
          Luminous Spectral Drift.
        </h2>

        <p style={{ color: '#E0E0F0', fontSize: '1.1rem', maxWidth: '520px', lineHeight: 1.6, marginBottom: '32px' }}>
          Multi-stop blurred vector meshes interact with soft blending modes to create organic cosmic atmospheric energy.
        </p>

        {interactive && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setAuroraShift((prev) => (prev + 15) % 40)}
              style={{
                padding: '10px 20px',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                color: '#FFF',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              SHIFT AURORA VECTOR ({(auroraShift / 15) + 1}/3)
            </button>
          </div>
        )}
      </div>
    );
  }

  // 9. SKEUOMORPHISM SPECIMEN
  if (styleId === 'skeuomorphism') {
    return (
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(180deg, #3A3D42 0%, #202225 100%)',
          border: '2px solid #50545C',
          borderRadius: '20px',
          padding: 'clamp(28px, 5vw, 60px)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 20px 40px rgba(0,0,0,0.5)',
          color: '#E0E0E0'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#FFB800' }}>
            SKEUOMORPHISM / 05 · TACTILE REALISM
          </span>
          <span style={{ fontSize: '0.75rem', color: '#AAA' }}>METALLIC BEVEL</span>
        </div>

        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 900, color: '#FFFFFF', marginBottom: '12px' }}>
          Physical Familiarity.
        </h2>
        <p style={{ color: '#AAAAAA', fontSize: '1rem', maxWidth: '520px', marginBottom: '32px' }}>
          Recreates physical analog materials—brushed aluminum, stitched leather, tactile rotary dials, and specular bevels.
        </p>

        {/* Rotary Dial Interactive Specimen */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
          <div
            onClick={() => setKnobRotation((prev) => (prev + 45) % 360)}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #555A64, #1B1D20)',
              border: '3px solid #303338',
              boxShadow: '0 8px 24px rgba(0,0,0,0.7), inset 0 2px 2px rgba(255,255,255,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transform: `rotate(${knobRotation}deg)`,
              transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ width: '4px', height: '24px', background: '#FFB800', borderRadius: '2px', alignSelf: 'flex-start', marginTop: '6px' }} />
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, color: '#FFB800' }}>
              ANALOG POTENTIOMETER: {knobRotation}°
            </div>
            <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '4px' }}>
              Click dial to turn rotary potentiometer
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 10. EDITORIAL DESIGN SPECIMEN
  if (styleId === 'editorial-design') {
    return (
      <div
        style={{
          width: '100%',
          background: '#FCFAF6',
          border: '1px solid #D6CEBE',
          padding: 'clamp(28px, 5vw, 64px)',
          color: '#1A1816'
        }}
      >
        <div style={{ borderBottom: '2px solid #1A1816', paddingBottom: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em' }}>
            THE EDITORIAL ARCHIVE / VOL. 16
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>SWISS GRID SYSTEM</span>
        </div>

        <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 400, lineHeight: 1.02, marginBottom: '20px' }}>
          Rhythm, Typography<br />& Asymmetry.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${editorialCols}, 1fr)`, gap: '24px', marginBottom: '32px' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.65, color: '#4A4640' }}>
            <span style={{ fontSize: '2.8rem', float: 'left', lineHeight: 0.8, marginRight: '8px', fontFamily: 'serif', fontWeight: 700 }}>E</span>
            ditorial layouts master the tension between tight typographic columns, expansive white space, and authoritative serif hierarchy.
          </p>
          {editorialCols >= 2 && (
            <p style={{ fontSize: '1rem', lineHeight: 1.65, color: '#4A4640' }}>
              Strict baseline grids anchor headlines and captions, allowing asymmetric images to puncture the rhythm with deliberate intent.
            </p>
          )}
        </div>

        {interactive && (
          <div style={{ borderTop: '1px solid #D6CEBE', paddingTop: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800 }}>COLUMN GRID:</span>
            {[1, 2, 3].map((cols) => (
              <button
                key={cols}
                onClick={() => setEditorialCols(cols)}
                style={{
                  padding: '4px 10px',
                  background: editorialCols === cols ? '#1A1816' : 'transparent',
                  color: editorialCols === cols ? '#FFF' : '#1A1816',
                  border: '1px solid #1A1816',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer'
                }}
              >
                {cols} COL
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // 11. ORGANIC / NATURAL DESIGN SPECIMEN
  if (styleId === 'organic-natural') {
    return (
      <div
        style={{
          width: '100%',
          background: '#F5F2EB',
          border: '1px solid #DDD6C8',
          borderRadius: `${organicRadius}% ${100 - organicRadius}% 45% 55% / 55% 45% ${100 - organicRadius}% ${organicRadius}%`,
          padding: 'clamp(32px, 6vw, 72px)',
          color: '#34382C',
          transition: 'border-radius 400ms ease'
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#7E8B65', display: 'block', marginBottom: '12px' }}>
          ORGANIC HARMONY / 17 · WABI-SABI
        </span>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, color: '#2B3124', marginBottom: '12px' }}>
          Forms from Nature.
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#5B6350', maxWidth: '520px', lineHeight: 1.6, marginBottom: '28px' }}>
          Earthy pigments, tactile paper warmth, and soft undulating curvatures mimic stones, leaves, and flowing water.
        </p>

        {interactive && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: '#5B6350' }}>
              MORPH ORGANIC CURVATURE ({organicRadius}%)
            </span>
            <input
              type="range"
              min="20"
              max="70"
              value={organicRadius}
              onChange={(e) => setOrganicRadius(Number(e.target.value))}
              style={{ accentColor: '#7E8B65', width: '110px' }}
            />
          </div>
        )}
      </div>
    );
  }

  // 12. FLAT DESIGN SPECIMEN
  if (styleId === 'flat-design') {
    return (
      <div
        style={{
          width: '100%',
          background: flatPalette === 'primary' ? '#1ABC9C' : '#3498DB',
          padding: 'clamp(28px, 5vw, 60px)',
          borderRadius: '8px',
          color: '#FFFFFF',
          transition: 'background 200ms ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800 }}>FLAT DESIGN / 06</span>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>ZERO GRADIENTS · ZERO SKEUOMORPHISM</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '12px' }}>
          Pure Color & Clarity.
        </h2>
        <p style={{ fontSize: '1.05rem', opacity: 0.9, maxWidth: '520px', lineHeight: 1.6, marginBottom: '28px' }}>
          Vibrant solid primary swatches, bold vector icons, and geometric clarity prioritized over physical imitation.
        </p>
        {interactive && (
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setFlatPalette(flatPalette === 'primary' ? 'secondary' : 'primary')}
              style={{
                padding: '10px 18px',
                background: '#FFFFFF',
                color: '#2C3E50',
                fontWeight: 900,
                fontSize: '0.8rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              TOGGLE FLAT PALETTE
            </button>
          </div>
        )}
      </div>
    );
  }

  // 13. Y2K CYBER SPECIMEN
  if (styleId === 'y2k') {
    return (
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #FFD6E8 0%, #D8F2FF 50%, #E8D7FF 100%)',
          border: '2px solid #FF77E9',
          borderRadius: '24px',
          padding: 'clamp(28px, 5vw, 60px)',
          boxShadow: '0 12px 30px rgba(255, 119, 233, 0.25)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 900, color: '#C9009B' }}>
            ✦ Y2K CYBER OPTIMISM / 14 ✦
          </span>
          <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#006699' }}>LIQUID CHROME & BUBBLES</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, color: '#550088', fontStyle: 'italic', marginBottom: '12px' }}>
          Cyber Millennium.
        </h2>
        <p style={{ color: '#442266', fontSize: '1rem', maxWidth: '520px', lineHeight: 1.5, marginBottom: '24px' }}>
          Early 2000s technological utopia, iridescent chrome finishes, inflated fonts, and neon starbursts.
        </p>
      </div>
    );
  }

  // 14. MEMPHIS DESIGN SPECIMEN
  if (styleId === 'memphis-design') {
    return (
      <div
        style={{
          width: '100%',
          background: '#FFF9E6',
          border: '3px solid #000000',
          boxShadow: '6px 6px 0px #FF5E7E',
          padding: 'clamp(28px, 5vw, 60px)',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 900, background: '#00F0FF', padding: '3px 8px', border: '2px solid #000' }}>
            MEMPHIS GROUP / 15
          </span>
          <span style={{ fontSize: '0.8rem', fontWeight: 900 }}>1980s POSTMODERN CHAOS</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#000', textTransform: 'uppercase', marginBottom: '12px' }}>
          Squiggles, Dots & Rebel Shapes.
        </h2>
        <p style={{ fontSize: '1rem', color: '#000', fontWeight: 700, maxWidth: '520px', lineHeight: 1.5 }}>
          Rejecting strict Bauhaus functionalism in favor of candy hues, clashing patterns, and joyous absurdity.
        </p>
      </div>
    );
  }

  // 15. RETRO / VINTAGE SPECIMEN
  if (styleId === 'retro-vintage') {
    return (
      <div
        style={{
          width: '100%',
          background: '#F7EED8',
          border: '2px solid #8C4E2D',
          borderRadius: '12px',
          padding: 'clamp(28px, 5vw, 60px)',
          color: '#5C2D15'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: '#8C4E2D' }}>
            RETRO SPECIMEN / 13
          </span>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>WARM HALFTONE GRAIN</span>
        </div>
        <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: '#4A200B', marginBottom: '12px' }}>
          Golden Era Warmth.
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#6E3C1B', maxWidth: '520px', lineHeight: 1.6 }}>
          Warm mustard yellows, burnt sienna, and aged newsprint patina bringing analog nostalgia to digital canvases.
        </p>
      </div>
    );
  }

  // 16. MAXIMALISM SPECIMEN
  if (styleId === 'maximalism') {
    return (
      <div
        style={{
          width: '100%',
          background: '#2B0938',
          border: '3px solid #FF007F',
          borderRadius: '16px',
          padding: 'clamp(28px, 5vw, 60px)',
          color: '#FFFFFF'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 900, color: '#FFE600' }}>
            MAXIMALISM / 12
          </span>
          <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#00F5D4' }}>MORE IS MORE</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)', fontWeight: 900, color: '#FFF', lineHeight: 1, marginBottom: '12px' }}>
          UNAPOLOGETIC SENSORY DENSITY.
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#E8D0FF', maxWidth: '520px', lineHeight: 1.5 }}>
          Layered patterns, bold typography clashes, and joyful expressive saturation defying quiet minimalism.
        </p>
      </div>
    );
  }

  // 17. FLUENT DESIGN SPECIMEN
  if (styleId === 'fluent-design') {
    return (
      <div
        style={{
          width: '100%',
          background: 'rgba(240, 243, 246, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.7)',
          borderRadius: '12px',
          padding: 'clamp(28px, 5vw, 60px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.06)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: '#0078D4' }}>
            FLUENT SYSTEM / 08
          </span>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#555' }}>ACRYLIC LIGHT & DEPTH</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, color: '#1B1B1B', marginBottom: '12px' }}>
          Dynamic Illumination.
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#505050', maxWidth: '520px', lineHeight: 1.6 }}>
          Subtle noise texture, responsive cursor reveal lighting, and connected dimensional depth.
        </p>
      </div>
    );
  }

  // Default Fallback Specimen
  return (
    <div
      style={{
        width: '100%',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface)',
        border: '1px solid var(--surface-border-strong)',
        padding: 'clamp(24px, 4vw, 56px)',
        boxShadow: 'var(--shadow-medium)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--ryuma-purple)' }}>
          {styleData.specimen?.study || `RYŪMA / STUDY ${styleData.number}`}
        </span>
        <span className="tag-badge purple">{styleData.name}</span>
      </div>

      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '8px' }}>
        {styleData.specimen?.tagline || styleData.heroTag}
      </h2>
      <p style={{ fontSize: '1.1rem', color: 'var(--ryuma-muted)', marginBottom: '28px' }}>
        {styleData.specimen?.caption || styleData.shortDescription}
      </p>

      {onExplore && (
        <button
          onClick={onExplore}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'var(--ryuma-black)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 800,
            cursor: 'pointer',
            border: 'none'
          }}
        >
          <span>{styleData.specimen?.cta || 'EXPLORE →'}</span>
        </button>
      )}
    </div>
  );
}
