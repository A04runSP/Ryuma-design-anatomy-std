import React, { useState } from 'react';
import SectionLabel from './SectionLabel';
import { Palette, Type, Box, MoveHorizontal, Play } from 'lucide-react';

export default function AnatomySection({ anatomy, styleName = 'Style' }) {
  const [activeSystem, setActiveSystem] = useState('colour');

  const systems = [
    { key: 'colour', label: 'COLOUR', icon: Palette, japanese: '色' },
    { key: 'type', label: 'TYPE', icon: Type, japanese: '文字' },
    { key: 'form', label: 'FORM', icon: Box, japanese: '形態' },
    { key: 'space', label: 'SPACE', icon: MoveHorizontal, japanese: '空間' },
    { key: 'motion', label: 'MOTION', icon: Play, japanese: '動き' }
  ];

  const currentData = anatomy[activeSystem] || {
    title: 'Visual Decision',
    explanation: 'Fundamental design system parameter.'
  };

  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--surface-border)',
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(24px, 4vw, 44px)',
        boxShadow: 'var(--shadow-subtle)'
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <SectionLabel text="SYSTEM DECONSTRUCTION" number="ANATOMY" />
        <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
          Design Anatomy for {styleName}
        </h3>
        <p style={{ color: 'var(--ryuma-muted)', marginTop: '6px', fontSize: '1rem' }}>
          Explore the exact visual decisions defining this design language across the five core systems.
        </p>
      </div>

      {/* 5 Systems Selector Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '10px',
          marginBottom: '32px'
        }}
      >
        {systems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSystem === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setActiveSystem(item.key)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '12px 14px',
                borderRadius: 'var(--radius-sm)',
                background: isActive ? 'var(--ryuma-black)' : 'rgba(32, 32, 42, 0.03)',
                color: isActive ? '#FFFFFF' : 'var(--ryuma-black)',
                border: '1px solid',
                borderColor: isActive ? 'var(--ryuma-black)' : 'transparent',
                cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--ease-ryuma)',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '8px' }}>
                <Icon size={16} strokeWidth={isActive ? 2.5 : 2} color={isActive ? '#FFFFFF' : 'var(--ryuma-muted)'} />
                <span style={{ fontFamily: 'var(--font-jp)', fontSize: '0.7rem', opacity: 0.8 }}>
                  {item.japanese}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-primary)', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em' }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* System Explanation Card */}
      <div
        style={{
          background: 'var(--surface-subtle)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--surface-border)',
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="tag-badge purple">{activeSystem.toUpperCase()}</span>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ryuma-black)' }}>
            {currentData.title}
          </h4>
        </div>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--ryuma-muted)' }}>
          {currentData.explanation}
        </p>
      </div>
    </div>
  );
}
