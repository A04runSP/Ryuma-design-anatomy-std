import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';
import StyleCard from '../../components/StyleCard';
import { DESIGN_LANGUAGES } from '../../design-languages/data';
import { Search, Grid, Filter } from 'lucide-react';

export default function Library({ onSelectStyle }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredStyles = DESIGN_LANGUAGES.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.number.includes(searchTerm);

    if (activeFilter === 'ALL') return matchesSearch;
    if (activeFilter === 'CONTEMPORARY') return matchesSearch && ['glassmorphism', 'claymorphism', 'aurora-gradient', 'dark-ui'].includes(item.id);
    if (activeFilter === 'ARCHITECTURAL') return matchesSearch && ['minimalism', 'brutalism', 'material-design', 'editorial-design'].includes(item.id);
    if (activeFilter === 'TACTILE') return matchesSearch && ['neomorphism', 'skeuomorphism', 'organic-natural'].includes(item.id);
    if (activeFilter === 'PLAYFUL') return matchesSearch && ['y2k', 'memphis-design', 'maximalism', 'flat-design'].includes(item.id);
    return matchesSearch;
  });

  return (
    <div style={{ padding: 'var(--space-48) 0' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <SectionLabel text="DESIGN REPERTORY" number="LIBRARY" accent="purple" japanese="意匠体系録" />
        <h1 className="display-title">
          Visual Design Library.
        </h1>
        <p className="lead-p">
          17 systematic design languages. Every style is a distinct visual vocabulary with unique color physics, typographic voices, spatial geometries, and motion behaviors.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--surface-border)',
          borderRadius: 'var(--radius-sm)',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '36px',
          boxShadow: 'var(--shadow-subtle)'
        }}
      >
        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '240px' }}>
          <Search size={18} color="var(--ryuma-muted)" />
          <input
            type="text"
            placeholder="Search by name, era, or aesthetic token..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              width: '100%',
              fontSize: '0.92rem',
              fontFamily: 'var(--font-primary)'
            }}
          />
        </div>

        {/* Filter Categories */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto' }}>
          {['ALL', 'CONTEMPORARY', 'ARCHITECTURAL', 'TACTILE', 'PLAYFUL'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-xs)',
                background: activeFilter === filter ? 'var(--ryuma-black)' : 'rgba(32, 32, 42, 0.04)',
                color: activeFilter === filter ? '#FFFFFF' : 'var(--ryuma-black)',
                fontWeight: 800,
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 17 Style Cards */}
      <div className="grid-3">
        {filteredStyles.map((item) => (
          <StyleCard
            key={item.id}
            styleItem={item}
            onViewStyle={onSelectStyle}
          />
        ))}
      </div>

      {filteredStyles.length === 0 && (
        <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--ryuma-muted)' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>No design languages matched your query.</p>
        </div>
      )}
    </div>
  );
}
