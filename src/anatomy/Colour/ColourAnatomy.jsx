import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';
import { Sliders, RefreshCw, Eye } from 'lucide-react';

export default function ColourAnatomy() {
  const [hue, setHue] = useState(260);
  const [saturation, setSaturation] = useState(60);
  const [lightness, setLightness] = useState(55);

  const mainColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const complementaryColor = `hsl(${(hue + 180) % 360}, ${saturation}%, ${lightness}%)`;
  const analogous1 = `hsl(${(hue + 30) % 360}, ${saturation}%, ${lightness}%)`;
  const analogous2 = `hsl(${(hue + 330) % 360}, ${saturation}%, ${lightness}%)`;
  const surfaceTint = `hsl(${hue}, 20%, 96%)`;

  // Luminance calculation for contrast
  const isDark = lightness < 55;
  const textColor = isDark ? '#FFFFFF' : '#1A1A24';

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
          <SectionLabel text="01 COLOUR" number="SYSTEM" accent="purple" japanese="色" />
          <span className="code-tag">HSL / CONTRAST</span>
        </div>
        <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ryuma-black)' }}>
          Atmosphere & Contrast
        </h4>
        <p style={{ color: 'var(--ryuma-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
          Sets the mood, creates emphasis and shapes perception.
        </p>
      </div>

      {/* Visual Specimen Canvas */}
      <div
        style={{
          borderRadius: 'var(--radius-sm)',
          background: surfaceTint,
          border: '1px solid var(--surface-border)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          transition: 'background var(--duration-fast) ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ryuma-muted)' }}>
            CANVAS SPECIMEN
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ryuma-black)' }}>
            {mainColor}
          </span>
        </div>

        {/* Primary Color Sample Pill with Contrast Text */}
        <div
          style={{
            height: '110px',
            background: mainColor,
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: textColor,
            transition: 'background var(--duration-fast) ease',
            boxShadow: '0 8px 24px rgba(32, 32, 42, 0.08)'
          }}
        >
          <span style={{ fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>
            Visual Perception
          </span>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.9 }}>
            Contrast: {isDark ? 'White Text (High)' : 'Dark Text (High)'}
          </span>
        </div>

        {/* Harmonic Palette Swatches */}
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--ryuma-muted)', display: 'block', marginBottom: '8px' }}>
            HARMONIC RELATIONSHIPS
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {[
              { label: 'DOMINANT', color: mainColor },
              { label: 'ANALOGOUS', color: analogous1 },
              { label: 'COMPLEMENT', color: complementaryColor },
              { label: 'MUTED', color: analogous2 }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ height: '36px', background: item.color, borderRadius: '4px', border: '1px solid rgba(0,0,0,0.08)' }} />
                <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--ryuma-muted)', textAlign: 'center' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manual Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>HUE ({hue}°)</span>
          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
            style={{ width: '60%', accentColor: 'var(--ryuma-purple)' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>SATURATION ({saturation}%)</span>
          <input
            type="range"
            min="0"
            max="100"
            value={saturation}
            onChange={(e) => setSaturation(Number(e.target.value))}
            style={{ width: '60%', accentColor: 'var(--ryuma-pink)' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>LIGHTNESS ({lightness}%)</span>
          <input
            type="range"
            min="10"
            max="90"
            value={lightness}
            onChange={(e) => setLightness(Number(e.target.value))}
            style={{ width: '60%', accentColor: 'var(--ryuma-black)' }}
          />
        </div>
      </div>
    </div>
  );
}
