import React, { useState } from 'react';
import Brand from './Brand';
import { Menu, X } from 'lucide-react';

export default function Navigation({ currentRoute, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: 'HOME' },
    { key: 'library', label: 'DESIGN LIBRARY' },
    { key: 'labs', label: 'LABS' },
    { key: 'knowledge', label: 'KNOWLEDGE' }
  ];

  const handleNavClick = (key) => {
    onNavigate(key);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(250, 250, 250, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--surface-border)',
        transition: 'background var(--duration-normal) var(--ease-ryuma)'
      }}
    >
      <div 
        className="content-wrapper"
        style={{
          height: '76px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand */}
        <Brand onClick={() => handleNavClick('home')} />

        {/* Desktop Navigation */}
        <nav 
          aria-label="Main Navigation"
          className="desktop-only"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px'
          }}
        >
          {navItems.map((item) => {
            const isActive = currentRoute === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.8rem',
                  fontWeight: isActive ? 800 : 700,
                  letterSpacing: '0.14em',
                  color: isActive ? 'var(--ryuma-black)' : 'var(--ryuma-muted)',
                  position: 'relative',
                  padding: '8px 0',
                  transition: 'color var(--duration-fast) var(--ease-ryuma)'
                }}
              >
                {item.label}
                {isActive && (
                  <span 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--ryuma-black)',
                      borderRadius: '1px'
                    }} 
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          style={{
            display: 'none',
            padding: '10px',
            borderRadius: 'var(--radius-xs)',
            background: 'rgba(32, 32, 42, 0.04)',
            color: 'var(--ryuma-black)'
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--surface)',
            borderBottom: '1px solid var(--surface-border-strong)',
            padding: '24px var(--space-24)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navItems.map((item) => {
            const isActive = currentRoute === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                style={{
                  textAlign: 'left',
                  fontSize: '1rem',
                  fontWeight: isActive ? 800 : 600,
                  letterSpacing: '0.12em',
                  color: isActive ? 'var(--ryuma-purple)' : 'var(--ryuma-black)',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(32, 32, 42, 0.05)'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
