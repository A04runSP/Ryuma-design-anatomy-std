import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';
import Button from '../../components/Button';
import { Download, Sliders, Sparkles, Copy, Check, RefreshCw } from 'lucide-react';

export default function ColourLab() {
  const [hue, setHue] = useState(264);
  const [saturation, setSaturation] = useState(75);
  const [lightness, setLightness] = useState(54);
  const [workflowMode, setWorkflowMode] = useState('MANUAL');
  const [copiedToken, setCopiedToken] = useState(null);

  // Helper conversions
  const hslString = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  // HSL to RGB conversion
  const hslToRgb = (h, s, l) => {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  };

  const [r, g, b] = hslToRgb(hue, saturation, lightness);
  const rgbString = `rgb(${r}, ${g}, ${b})`;

  const rgbToHex = (r, g, b) =>
    '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();

  const hexString = rgbToHex(r, g, b);

  // Derive full harmonic palette
  const complementaryHue = (hue + 180) % 360;
  const compHex = rgbToHex(...hslToRgb(complementaryHue, saturation, lightness));
  const analogousHue1 = (hue + 30) % 360;
  const ana1Hex = rgbToHex(...hslToRgb(analogousHue1, saturation, lightness));
  const analogousHue2 = (hue + 330) % 360;
  const ana2Hex = rgbToHex(...hslToRgb(analogousHue2, saturation, lightness));
  const triadicHue = (hue + 120) % 360;
  const triHex = rgbToHex(...hslToRgb(triadicHue, saturation, lightness));

  // Contrast check
  const isDark = lightness < 50;
  const contrastText = isDark ? '#FFFFFF' : '#14141E';

  // Preset AI Suggestions for Hybrid Mode
  const aiSuggestions = [
    { name: 'Kyoto Dusk', h: 260, s: 65, l: 45 },
    { name: 'Tokyo Neon Glow', h: 330, s: 90, l: 60 },
    { name: 'Bamboo Moss', h: 145, s: 40, l: 35 },
    { name: 'Sumi Ink & Amber', h: 38, s: 95, l: 52 }
  ];

  const handleCopy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedToken(key);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const handleDownload = () => {
    const paletteData = {
      name: "Ryuma-Generated-Palette",
      primary: { hex: hexString, rgb: rgbString, hsl: hslString },
      complementary: { hex: compHex },
      analogous: [{ hex: ana1Hex }, { hex: ana2Hex }],
      triadic: { hex: triHex },
      cssVariables: `
:root {
  --color-primary: ${hexString};
  --color-complementary: ${compHex};
  --color-analogous-1: ${ana1Hex};
  --color-analogous-2: ${ana2Hex};
  --color-triadic: ${triHex};
}
      `.trim()
    };

    const blob = new Blob([JSON.stringify(paletteData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ryuma-palette-${hexString.replace('#', '')}.json`;
    a.click();
  };

  return (
    <div style={{ padding: 'var(--space-48) 0' }}>
      <div style={{ marginBottom: '32px' }}>
        <SectionLabel text="INTERACTIVE STUDIO" number="LAB 01" accent="purple" japanese="色彩研究所" />
        <h1 className="display-title">
          Colour Lab.
        </h1>
        <p className="lead-p">
          Manual colour synthesis engine. Control chromatic spectrums, analyze contrast ratios, and explore harmonic systems.
        </p>
      </div>

      {/* Workflow Paradigm Bar (MANUAL / AI / HYBRID) */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--surface-border)',
          borderRadius: 'var(--radius-sm)',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '32px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--ryuma-black)', letterSpacing: '0.08em' }}>
            WORKFLOW MODE:
          </span>
          {['MANUAL', 'HYBRID', 'AI'].map((mode) => (
            <button
              key={mode}
              onClick={() => setWorkflowMode(mode)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-xs)',
                background: workflowMode === mode ? 'var(--ryuma-black)' : 'rgba(32, 32, 42, 0.05)',
                color: workflowMode === mode ? '#FFFFFF' : 'var(--ryuma-black)',
                fontWeight: 800,
                fontSize: '0.78rem',
                letterSpacing: '0.08em',
                cursor: 'pointer'
              }}
            >
              {mode}
            </button>
          ))}
        </div>

        <span style={{ fontSize: '0.75rem', color: 'var(--ryuma-muted)', fontWeight: 600 }}>
          {workflowMode === 'MANUAL' && 'Human directly controls all spectral parameters.'}
          {workflowMode === 'HYBRID' && 'AI suggests chromatic chords; human refines variables.'}
          {workflowMode === 'AI' && 'System synthesizes harmonic balance across archetypes.'}
        </span>
      </div>

      {/* Main Studio Grid */}
      <div className="grid-2" style={{ alignItems: 'start' }}>
        {/* Left Column: LIVE CANVAS */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-md)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--ryuma-purple)' }}>
              LIVE CANVAS
            </span>
            <span className="code-tag">{hexString}</span>
          </div>

          {/* Primary Color Hero Preview Canvas */}
          <div
            style={{
              height: '240px',
              borderRadius: 'var(--radius-sm)',
              background: hexString,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: contrastText,
              padding: '24px',
              textAlign: 'center',
              boxShadow: `0 16px 36px ${hexString}44`,
              transition: 'background 80ms ease'
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', opacity: 0.9 }}>
              OPTICAL WEIGHT
            </span>
            <h3 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '4px 0' }}>
              {hexString}
            </h3>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, opacity: 0.85 }}>
              Luminosity: {lightness}% · Contrast: {isDark ? 'White Text Pass' : 'Dark Text Pass'}
            </span>
          </div>

          {/* Value Readouts & Copy */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {[
              { label: 'HEX', val: hexString },
              { label: 'RGB', val: rgbString },
              { label: 'HSL', val: hslString }
            ].map((token) => (
              <div
                key={token.label}
                onClick={() => handleCopy(token.val, token.label)}
                style={{
                  background: 'var(--surface-subtle)',
                  border: '1px solid var(--surface-border)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transition: 'border-color var(--duration-fast) ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--ryuma-muted)' }}>
                    {token.label}
                  </span>
                  {copiedToken === token.label ? <Check size={12} color="green" /> : <Copy size={12} color="var(--ryuma-soft)" />}
                </div>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {token.val}
                </span>
              </div>
            ))}
          </div>

          {/* Harmonic Chord Swatches */}
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--ryuma-muted)', display: 'block', marginBottom: '10px' }}>
              DYNAMIC HARMONIC CHORDS
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {[
                { title: 'BASE', hex: hexString },
                { title: 'COMPLEMENT', hex: compHex },
                { title: 'ANALOGOUS 1', hex: ana1Hex },
                { title: 'TRIADIC', hex: triHex }
              ].map((swatch, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div
                    style={{
                      height: '48px',
                      background: swatch.hex,
                      borderRadius: '6px',
                      border: '1px solid rgba(32, 32, 42, 0.1)'
                    }}
                  />
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', textAlign: 'center', color: 'var(--ryuma-muted)' }}>
                    {swatch.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <div style={{ paddingTop: '10px' }}>
            <button
              onClick={handleDownload}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                padding: '12px 20px',
                background: 'var(--ryuma-black)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                border: 'none',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <Download size={16} />
              <span>DOWNLOAD PALETTE TOKENS</span>
            </button>
          </div>
        </div>

        {/* Right Column: MANUAL CONTROLS & AI SUGGESTIONS */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-md)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--ryuma-purple)' }}>
              MANUAL CONTROLS
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ryuma-black)', marginTop: '4px' }}>
              Spectral Calibration
            </h3>
          </div>

          {/* Hue Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>HUE</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700 }}>
                {hue}°
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)',
                appearance: 'none',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Saturation Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>SATURATION</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700 }}>
                {saturation}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={saturation}
              onChange={(e) => setSaturation(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: `linear-gradient(to right, hsl(${hue}, 0%, ${lightness}%), hsl(${hue}, 100%, ${lightness}%))`,
                appearance: 'none',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Lightness Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>LIGHTNESS</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700 }}>
                {lightness}%
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="95"
              value={lightness}
              onChange={(e) => setLightness(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: `linear-gradient(to right, #000000, hsl(${hue}, ${saturation}%, 50%), #ffffff)`,
                appearance: 'none',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* AI / Hybrid Preset Chords */}
          {(workflowMode === 'HYBRID' || workflowMode === 'AI') && (
            <div style={{ marginTop: '12px', borderTop: '1px solid rgba(32, 32, 42, 0.08)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Sparkles size={16} color="var(--ryuma-purple)" />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--ryuma-purple)', letterSpacing: '0.08em' }}>
                  AI SUGGESTED CHORDS
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {aiSuggestions.map((sug) => (
                  <button
                    key={sug.name}
                    onClick={() => {
                      setHue(sug.h);
                      setSaturation(sug.s);
                      setLightness(sug.l);
                    }}
                    style={{
                      padding: '10px 12px',
                      background: 'var(--surface-subtle)',
                      border: '1px solid var(--surface-border)',
                      borderRadius: 'var(--radius-xs)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: `hsl(${sug.h}, ${sug.s}%, ${sug.l}%)`,
                        display: 'inline-block'
                      }}
                    />
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--ryuma-black)' }}>
                      {sug.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
