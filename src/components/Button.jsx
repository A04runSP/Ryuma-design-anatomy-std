import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon = true,
  disabled = false,
  className = '',
  testTag = 'button',
  style = {}
}) {
  // Styles for variants
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-primary)',
    fontWeight: 800,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all var(--duration-normal) var(--ease-ryuma)',
    borderRadius: 'var(--radius-sm)',
    letterSpacing: '0.04em',
    textTransform: 'none',
    minHeight: '48px', // Accessibility target
    padding: size === 'large' ? '14px 32px' : size === 'small' ? '8px 18px' : '12px 24px',
    fontSize: size === 'large' ? '1rem' : size === 'small' ? '0.85rem' : '0.92rem',
    ...style
  };

  let variantStyle = {};
  if (variant === 'primary') {
    variantStyle = {
      background: 'var(--ryuma-black)',
      color: '#FFFFFF',
      border: '1px solid var(--ryuma-black)',
      boxShadow: '0 4px 14px rgba(32, 32, 42, 0.12)'
    };
  } else if (variant === 'secondary') {
    variantStyle = {
      background: 'var(--surface)',
      color: 'var(--ryuma-black)',
      border: '1px solid var(--surface-border-strong)'
    };
  } else if (variant === 'purple') {
    variantStyle = {
      background: 'var(--ryuma-purple)',
      color: '#FFFFFF',
      border: '1px solid var(--ryuma-purple)',
      boxShadow: '0 4px 16px rgba(118, 80, 199, 0.25)'
    };
  } else if (variant === 'ghost') {
    variantStyle = {
      background: 'transparent',
      color: 'var(--ryuma-black)',
      border: '1px solid transparent'
    };
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-testid={testTag}
      className={`hover-lift ${className}`}
      style={{ ...baseStyle, ...variantStyle }}
    >
      <span>{children}</span>
      {icon && <ArrowRight size={16} strokeWidth={2.5} />}
    </button>
  );
}
