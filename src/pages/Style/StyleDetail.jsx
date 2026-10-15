import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';
import SwissStylePage from './SwissStylePage';
import Button from '../../components/Button';
import VisualSpecimen from '../../components/VisualSpecimen';
import AnatomySection from '../../components/AnatomySection';
import { DESIGN_LANGUAGES } from '../../design-languages/data';
import { ArrowLeft, Check, Layers, Sliders, Sparkles, ExternalLink } from 'lucide-react';

export default function StyleDetail({ styleId, onBack, onSelectOtherStyle }) {
  if (styleId === 'swiss-international') return <SwissStylePage onBack={onBack} />;
  const currentStyle = DESIGN_LANGUAGES.find((s) => s.id === styleId) || DESIGN_LANGUAGES[0];

  const [activeLayerTab, setActiveLayerTab] = useState(0);

  // Dynamic theme wrapper styling based on current style
  const getPageWrapperStyle = () => {
    switch (currentStyle.id) {
      case 'glassmorphism':
        return {
          background: 'linear-gradient(180deg, #F8F6FD 0%, #FAFAFA 40%, #FFF5F7 100%)',
          minHeight: '100vh'
        };
      case 'brutalism':
        return {
          background: '#FFFFFF',
          minHeight: '100vh'
        };
      case 'dark-ui':
        return {
          background: '#0F0E14',
          color: '#F0F0F5',
          minHeight: '100vh'
        };
      case 'skeuomorphism':
        return {
          background: '#1F2226',
          color: '#F0F0F5',
          minHeight: '100vh'
        };
      case 'aurora-gradient':
        return {
          background: '#0A0814',
          color: '#F0F0F5',
          minHeight: '100vh'
        };
      case 'maximalism':
        return {
          background: '#1D0A26',
          color: '#F0F0F5',
          minHeight: '100vh'
        };
      case 'neomorphism':
        return {
          background: '#E0E5EC',
          minHeight: '100vh'
        };
      case 'claymorphism':
        return {
          background: '#F2F6FE',
          minHeight: '100vh'
        };
      case 'retro-vintage':
        return {
          background: '#FAF4E8',
          minHeight: '100vh'
        };
      case 'y2k':
        return {
          background: '#F6F3FC',
          minHeight: '100vh'
        };
      case 'memphis-design':
        return {
          background: '#FFFDF6',
          minHeight: '100vh'
        };
      case 'editorial-design':
        return {
          background: '#FCFAF6',
          minHeight: '100vh'
        };
      case 'organic-natural':
        return {
          background: '#F5F2EB',
          minHeight: '100vh'
        };
      case 'flat-design':
        return {
          background: '#F4F8F7',
          minHeight: '100vh'
        };
      case 'fluent-design':
        return {
          background: '#F3F6F9',
          minHeight: '100vh'
        };
      case 'material-design':
        return {
          background: '#F8F9FA',
          minHeight: '100vh'
        };
      case 'minimalism':
      default:
        return {
          background: '#FFFFFF',
          minHeight: '100vh'
        };
    }
  };

  const isDark = ['dark-ui', 'skeuomorphism', 'aurora-gradient', 'maximalism'].includes(currentStyle.id);
  const textColor = isDark ? '#FFFFFF' : 'var(--ryuma-black)';
  const mutedColor = isDark ? '#A0A0B5' : 'var(--ryuma-muted)';

  return (
    <div style={{ ...getPageWrapperStyle(), transition: 'background 300ms ease' }}>
      <div className="content-wrapper" style={{ padding: 'var(--space-32) var(--space-24)' }}>
        {/* STYLE NAV */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-40)',
            paddingBottom: '16px',
            borderBottom: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--surface-border)'
          }}
        >
          <button
            onClick={onBack}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              fontWeight: 800,
              color: textColor,
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
            <span>BACK TO LIBRARY</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: mutedColor }}>
              SYSTEM / {currentStyle.number}
            </span>
            <span className={`tag-badge ${isDark ? 'purple' : 'pink'}`}>
              {currentStyle.name}
            </span>
          </div>
        </div>

        {/* STYLE HERO */}
        <div style={{ marginBottom: 'var(--space-48)', maxWidth: '820px' }}>
          <SectionLabel
            text={`DESIGN LANGUAGE / ${currentStyle.number}`}
            accent={isDark ? 'pink' : 'purple'}
          />
          <h1
            className="display-hero"
            style={{
              color: textColor,
              marginBottom: '16px',
              lineHeight: 1.02
            }}
          >
            {currentStyle.heroTag}
          </h1>
          <p
            className="editorial-statement"
            style={{ color: mutedColor, maxWidth: '680px' }}
          >
            {currentStyle.description}
          </p>

          {/* Color Palette Chips */}
          <div style={{ marginTop: '28px' }}>
            <span
              className="micro-label"
              style={{ color: mutedColor, display: 'block', marginBottom: '10px' }}
            >
              CANONICAL PALETTE
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {currentStyle.palette.map((c) => (
                <div
                  key={c.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 12px',
                    background: isDark ? 'rgba(255,255,255,0.06)' : 'var(--surface)',
                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-xs)'
                  }}
                >
                  <span
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: c.hex,
                      border: '1px solid rgba(0,0,0,0.15)',
                      display: 'inline-block'
                    }}
                  />
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: textColor }}>
                    {c.name}
                  </span>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: mutedColor }}>
                    {c.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VISUAL SPECIMEN */}
        <div style={{ marginBottom: 'var(--space-64)' }}>
          <VisualSpecimen styleData={currentStyle} />
        </div>

        {/* DESIGN ANATOMY */}
        <div style={{ marginBottom: 'var(--space-64)' }}>
          <AnatomySection
            anatomy={currentStyle.anatomy}
            styleName={currentStyle.name}
          />
        </div>

        {/* COMPOSITION & ARCHETYPE */}
        <div
          style={{
            background: isDark ? '#191822' : 'var(--surface)',
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(24px, 4vw, 44px)',
            marginBottom: 'var(--space-64)',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <SectionLabel text="SPATIAL RULES" number="COMPOSITION" accent="pink" />
          <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: textColor, marginBottom: '12px' }}>
            Composition Architecture
          </h3>
          <p style={{ fontSize: '1.05rem', color: mutedColor, lineHeight: 1.6, marginBottom: '24px' }}>
            {currentStyle.composition}
          </p>

          <div>
            <span className="micro-label" style={{ color: mutedColor, display: 'block', marginBottom: '12px' }}>
              CORE CHARACTERISTICS
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
              {currentStyle.characteristics.map((char, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '10px',
                    padding: '12px 16px',
                    background: isDark ? 'rgba(255,255,255,0.04)' : 'var(--surface-subtle)',
                    border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-xs)'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: 'var(--ryuma-purple)' }}>
                    0{index + 1}
                  </span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: textColor }}>
                    {char}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PRINCIPLES / LAYERS (Spec 14) */}
        <div
          style={{
            background: isDark ? '#191822' : 'var(--surface)',
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(24px, 4vw, 44px)',
            marginBottom: 'var(--space-64)',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <SectionLabel text="LAYER SPECIFICATION" number="LAYERS" accent="purple" />
          <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: textColor, marginBottom: '12px' }}>
            Material Layer Breakdown
          </h3>
          <p style={{ fontSize: '1.02rem', color: mutedColor, marginBottom: '28px' }}>
            How optical layers interact to create cohesive depth and meaning.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {currentStyle.layers.map((layer) => (
              <div
                key={layer.step}
                style={{
                  background: isDark ? 'rgba(255,255,255,0.03)' : 'var(--surface-subtle)',
                  border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--surface-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--ryuma-purple)' }}>
                  {layer.step}
                </span>
                <h4
                  className="glass-card-title"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    color: textColor,
                    letterSpacing: '0.06em',
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word'
                  }}
                >
                  {layer.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.55 }}>
                  {layer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATION */}
        <div
          style={{
            background: isDark ? '#191822' : 'var(--surface)',
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(24px, 4vw, 44px)',
            marginBottom: 'var(--space-64)'
          }}
        >
          <SectionLabel text="PRACTICAL CONTEXT" number="APPLICATION" accent="pink" />
          <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: textColor, marginBottom: '16px' }}>
            Where This Language Excels
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {currentStyle.applications.map((app, i) => (
              <span
                key={i}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-xs)',
                  background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(32, 32, 42, 0.04)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: textColor
                }}
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER SWITCHER (Jump to another style) */}
        <div
          style={{
            paddingTop: 'var(--space-40)',
            borderTop: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--surface-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: mutedColor }}>
            STUDYING {currentStyle.name.toUpperCase()} · RYŪMA DESIGN ANATOMY
          </span>

          <Button onClick={onBack} variant="primary">
            BACK TO ALL 17 STYLES
          </Button>
        </div>
      </div>
    </div>
  );
}
