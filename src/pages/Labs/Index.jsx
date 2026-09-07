import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';
import ColourLab from '../../labs/ColourLab/ColourLab';
import MotionLab from '../../labs/MotionLab/MotionLab';
import { Palette, Play } from 'lucide-react';

export default function Labs({ initialTab = 'colour' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="content-wrapper">
      {/* Studio Nav Switcher */}
      <div
        style={{
          paddingTop: 'var(--space-32)',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            background: 'var(--surface)',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '4px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <button
            onClick={() => setActiveTab('colour')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              borderRadius: 'var(--radius-xs)',
              background: activeTab === 'colour' ? 'var(--ryuma-black)' : 'transparent',
              color: activeTab === 'colour' ? '#FFFFFF' : 'var(--ryuma-black)',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              transition: 'all var(--duration-fast) var(--ease-ryuma)'
            }}
          >
            <Palette size={16} />
            <span>COLOUR LAB</span>
          </button>

          <button
            onClick={() => setActiveTab('motion')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              borderRadius: 'var(--radius-xs)',
              background: activeTab === 'motion' ? 'var(--ryuma-black)' : 'transparent',
              color: activeTab === 'motion' ? '#FFFFFF' : 'var(--ryuma-black)',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              transition: 'all var(--duration-fast) var(--ease-ryuma)'
            }}
          >
            <Play size={16} />
            <span>MOTION LAB</span>
          </button>
        </div>
      </div>

      {activeTab === 'colour' ? <ColourLab /> : <MotionLab />}
    </div>
  );
}
