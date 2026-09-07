import React from 'react';
import Button from './Button';
import { Sparkles, Layers, Box, Eye } from 'lucide-react';

export default function StyleCard({ styleItem, onViewStyle }) {
  const { id, number, name, shortDescription, characteristics, palette } = styleItem;

  // Render a mini visual specimen preview that authentically reflects the style
  const renderMiniSpecimen = () => {
    switch (id) {
      case 'glassmorphism':
        return (
          <div
            style={{
              height: '140px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #EBE5F8 0%, #FBD9DD 50%, #E3D9FC 100%)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '16px'
            }}
          >
            <div
              style={{
                width: '85%',
                height: '75%',
                background: 'rgba(255, 255, 255, 0.45)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.65)',
                borderRadius: '14px',
                boxShadow: '0 8px 24px rgba(118, 80, 199, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '12px 16px'
              }}
            >
              <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--ryuma-purple)', letterSpacing: '0.1em' }}>
                STUDY 02
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--ryuma-black)' }}>
                Frosted Transparency
              </span>
            </div>
          </div>
        );

      case 'brutalism':
        return (
          <div
            style={{
              height: '140px',
              background: '#FAFF00',
              border: '2px solid #000000',
              boxShadow: '4px 4px 0px #000000',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '0px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 900, background: '#000000', color: '#FFFFFF', padding: '2px 6px' }}>
                RAW_V04
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 900 }}>
                90° CORNERS
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 900, color: '#000000', textTransform: 'uppercase' }}>
              SOLID INK SHADOW
            </div>
          </div>
        );

      case 'neomorphism':
        return (
          <div
            style={{
              height: '140px',
              background: '#E0E5EC',
              borderRadius: '18px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <div
              style={{
                padding: '12px 24px',
                borderRadius: '50px',
                background: '#E0E5EC',
                boxShadow: '6px 6px 14px #A3B1C6, -6px -6px 14px #FFFFFF',
                color: '#4A5568',
                fontWeight: 800,
                fontSize: '0.85rem',
                letterSpacing: '0.04em'
              }}
            >
              Extruded Relief
            </div>
          </div>
        );

      case 'dark-ui':
        return (
          <div
            style={{
              height: '140px',
              background: '#121218',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              padding: '16px'
            }}
          >
            <div
              style={{
                width: '75%',
                background: '#1E1E28',
                border: '1px solid rgba(157, 78, 221, 0.3)',
                borderRadius: '10px',
                padding: '10px 14px',
                boxShadow: '0 0 20px rgba(157, 78, 221, 0.15)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#9D4EDD', boxShadow: '0 0 8px #9D4EDD' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#F0F0F5' }}>Bioluminescence</span>
              </div>
            </div>
          </div>
        );

      case 'aurora-gradient':
        return (
          <div
            style={{
              height: '140px',
              borderRadius: '16px',
              background: 'radial-gradient(circle at 20% 30%, #00F5D4, transparent 50%), radial-gradient(circle at 80% 70%, #7B2CBF, transparent 50%), #0B090A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <span style={{ color: '#FFFFFF', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.08em', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              ATMOSPHERIC DRIFT
            </span>
          </div>
        );

      case 'claymorphism':
        return (
          <div
            style={{
              height: '140px',
              background: '#F0F4FC',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <div
              style={{
                padding: '12px 26px',
                borderRadius: '26px',
                background: '#EEBBC3',
                color: '#232946',
                fontWeight: 900,
                fontSize: '0.85rem',
                boxShadow: 'inset 4px 4px 6px rgba(255,255,255,0.7), inset -4px -4px 6px rgba(0,0,0,0.12), 0 10px 20px rgba(238,187,195,0.35)'
              }}
            >
              Chubby Pill
            </div>
          </div>
        );

      case 'material-design':
        return (
          <div
            style={{
              height: '140px',
              background: '#F8F9FA',
              borderRadius: '12px',
              border: '1px solid #E0E0E0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <div
              style={{
                width: '80%',
                padding: '14px',
                background: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6200EE' }}>Elevation 4dp</span>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#03DAC6' }} />
            </div>
          </div>
        );

      case 'skeuomorphism':
        return (
          <div
            style={{
              height: '140px',
              background: 'linear-gradient(180deg, #3A3D42 0%, #202225 100%)',
              borderRadius: '12px',
              border: '1px solid #50545C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #555A64, #1B1D20)',
                border: '2px solid #303338',
                boxShadow: '0 6px 16px rgba(0,0,0,0.6), inset 0 2px 2px rgba(255,255,255,0.4)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingTop: '6px'
              }}
            >
              <div style={{ width: '3px', height: '14px', background: '#FFB800', borderRadius: '1px' }} />
            </div>
          </div>
        );

      case 'flat-design':
        return (
          <div
            style={{
              height: '140px',
              background: '#1ABC9C',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              color: '#FFFFFF'
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em' }}>
              PURE 2D SOLID
            </span>
            <span style={{ fontSize: '1.1rem', fontWeight: 900, marginTop: '4px' }}>Zero Skeuomorph</span>
          </div>
        );

      case 'fluent-design':
        return (
          <div
            style={{
              height: '140px',
              background: 'linear-gradient(135deg, #0078D4 0%, #50E6FF 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <div
              style={{
                width: '80%',
                padding: '12px',
                background: 'rgba(255,255,255,0.4)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.6)',
                borderRadius: '8px',
                color: '#1B1B1B',
                fontWeight: 800,
                fontSize: '0.8rem',
                textAlign: 'center'
              }}
            >
              Acrylic Light
            </div>
          </div>
        );

      case 'editorial-design':
        return (
          <div
            style={{
              height: '140px',
              background: '#FCFAF6',
              border: '1px solid #D6CEBE',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <span style={{ fontFamily: 'serif', fontSize: '1.1rem', fontWeight: 800, color: '#1A1816', lineHeight: 1.1 }}>
              Swiss Editorial.
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#666', marginTop: '6px' }}>
              STRICT BASELINE GRID
            </span>
          </div>
        );

      case 'organic-natural':
        return (
          <div
            style={{
              height: '140px',
              background: '#F5F2EB',
              borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              border: '1px solid #DDD6C8'
            }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#5B6350' }}>Wabi-Sabi Flow</span>
          </div>
        );

      case 'y2k':
        return (
          <div
            style={{
              height: '140px',
              background: 'linear-gradient(135deg, #FFD6E8, #D8F2FF)',
              border: '1px solid #FF77E9',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <span style={{ fontFamily: 'var(--font-primary)', fontStyle: 'italic', fontWeight: 900, color: '#C9009B', fontSize: '0.95rem' }}>
              ✦ Cyber Y2K ✦
            </span>
          </div>
        );

      case 'memphis-design':
        return (
          <div
            style={{
              height: '140px',
              background: '#FFF9E6',
              border: '2px solid #000',
              boxShadow: '4px 4px 0px #FF5E7E',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px'
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 900, background: '#00F0FF', padding: '2px 8px', border: '1px solid #000' }}>
              MEMPHIS 80s
            </span>
          </div>
        );

      case 'retro-vintage':
        return (
          <div
            style={{
              height: '140px',
              background: '#F7EED8',
              border: '2px solid #8C4E2D',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <span style={{ fontFamily: 'serif', fontSize: '1rem', fontWeight: 800, color: '#4A200B' }}>
              Patina & Grain
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#8C4E2D' }}>
              1970s ANALOG
            </span>
          </div>
        );

      case 'maximalism':
        return (
          <div
            style={{
              height: '140px',
              background: '#2B0938',
              border: '2px solid #FF007F',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <span style={{ fontWeight: 900, fontSize: '0.95rem', color: '#FFE600', letterSpacing: '0.08em' }}>
              MORE IS MORE
            </span>
          </div>
        );

      case 'minimalism':
      default:
        return (
          <div
            style={{
              height: '140px',
              background: '#FFFFFF',
              border: '1px solid var(--surface-border)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '18px'
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ryuma-soft)' }}>
              SYSTEM ARCHITECTURE
            </span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--ryuma-black)', marginTop: '4px' }}>
              Essential Space.
            </span>
            <div style={{ height: '1px', background: 'var(--surface-border)', width: '40px', marginTop: '10px' }} />
          </div>
        );
    }
  };

  return (
    <div
      className="hover-lift"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--surface-border)',
        borderRadius: 'var(--radius-md)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxShadow: 'var(--shadow-subtle)',
        transition: 'border-color var(--duration-normal) var(--ease-ryuma)'
      }}
    >
      <div>
        {/* Header with Number and Name */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <span 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--ryuma-purple)',
                display: 'block',
                marginBottom: '4px'
              }}
            >
              STYLE / {number}
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--ryuma-black)', letterSpacing: '-0.02em' }}>
              {name}
            </h3>
          </div>
        </div>

        {/* Visual Specimen Miniature */}
        <div style={{ marginBottom: '18px' }}>
          {renderMiniSpecimen()}
        </div>

        {/* Short Description */}
        <p style={{ fontSize: '0.9rem', color: 'var(--ryuma-muted)', lineHeight: 1.5, marginBottom: '18px' }}>
          {shortDescription}
        </p>

        {/* Characteristics List */}
        <div style={{ marginBottom: '20px' }}>
          <span 
            className="micro-label" 
            style={{ display: 'block', marginBottom: '8px', color: 'var(--ryuma-soft)' }}
          >
            CHARACTERISTICS
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {characteristics.slice(0, 3).map((char, index) => (
              <span
                key={index}
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '4px 8px',
                  background: 'rgba(32, 32, 42, 0.04)',
                  borderRadius: 'var(--radius-xs)',
                  color: 'var(--ryuma-black)'
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(32, 32, 42, 0.06)' }}>
        <Button
          onClick={() => onViewStyle(id)}
          variant="secondary"
          size="small"
          style={{ width: '100%' }}
        >
          VIEW STYLE
        </Button>
      </div>
    </div>
  );
}
