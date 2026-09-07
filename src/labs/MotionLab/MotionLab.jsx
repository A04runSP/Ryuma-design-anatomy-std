import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';
import Button from '../../components/Button';
import { Play, Copy, Check, Download, RotateCcw, Sparkles } from 'lucide-react';

export default function MotionLab() {
  const categories = [
    'ENTRANCE',
    'EXIT',
    'TEXT',
    'ATTENTION',
    'BACKGROUND',
    'HOVER',
    'SCROLL',
    'TRANSFORM'
  ];

  const [activeCategory, setActiveCategory] = useState('ENTRANCE');
  const [duration, setDuration] = useState(400);
  const [delay, setDelay] = useState(0);
  const [direction, setDirection] = useState('up');
  const [distance, setDistance] = useState(30);
  const [scale, setScale] = useState(1);
  const [opacityStart, setOpacityStart] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [easing, setEasing] = useState('cubic-bezier(0.16, 1, 0.3, 1)');
  const [iterations, setIterations] = useState(1);
  
  const [animState, setAnimState] = useState('idle'); // idle | running
  const [animKey, setAnimKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const easings = [
    { label: 'Ryūma Soft', value: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    { label: 'Ease Out Expo', value: 'cubic-bezier(0.19, 1, 0.22, 1)' },
    { label: 'Spring Bouncy', value: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
    { label: 'Linear', value: 'linear' }
  ];

  const triggerPlay = () => {
    setAnimState('idle');
    setTimeout(() => {
      setAnimKey(prev => prev + 1);
      setAnimState('running');
    }, 20);
  };

  // Calculate transform delta
  const getTransformBefore = () => {
    let x = 0;
    let y = 0;
    if (direction === 'up') y = distance;
    if (direction === 'down') y = -distance;
    if (direction === 'left') x = distance;
    if (direction === 'right') x = -distance;

    return `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotation}deg)`;
  };

  // Generate CSS code
  const generatedCSS = `
/* Ryūma Motion Lab — ${activeCategory} Effect */
@keyframes ryuma-${activeCategory.toLowerCase()} {
  0% {
    opacity: ${opacityStart};
    transform: ${getTransformBefore()};
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
  }
}

.element-${activeCategory.toLowerCase()} {
  animation-name: ryuma-${activeCategory.toLowerCase()};
  animation-duration: ${duration}ms;
  animation-delay: ${delay}ms;
  animation-timing-function: ${easing};
  animation-iteration-count: ${iterations === 999 ? 'infinite' : iterations};
  animation-fill-mode: both;
}
  `.trim();

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(generatedCSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCode = () => {
    const blob = new Blob([generatedCSS], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ryuma-${activeCategory.toLowerCase()}-motion.css`;
    a.click();
  };

  return (
    <div style={{ padding: 'var(--space-48) 0' }}>
      <div style={{ marginBottom: '32px' }}>
        <SectionLabel text="INTERACTIVE STUDIO" number="LAB 02" accent="pink" japanese="動作研究所" />
        <h1 className="display-title">
          Motion Lab.
        </h1>
        <p className="lead-p">
          Future-ready choreography playground. Fine-tune velocities, directions, and deceleration curves with immediate visual feedback.
        </p>
      </div>

      {/* Workflow Indicator */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--surface-border)',
          borderRadius: 'var(--radius-sm)',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '28px',
          overflowX: 'auto'
        }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--ryuma-muted)', whiteSpace: 'nowrap' }}>
          WORKFLOW:
        </span>
        {['01 SELECT EFFECT', '→', '02 CUSTOMIZE', '→', '03 LIVE PREVIEW', '→', '04 COPY / EXPORT'].map((step, i) => (
          <span
            key={i}
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              color: step.includes('→') ? 'var(--ryuma-soft)' : 'var(--ryuma-purple)',
              whiteSpace: 'nowrap'
            }}
          >
            {step}
          </span>
        ))}
      </div>

      {/* Categories Row */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '8px',
          marginBottom: '28px'
        }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                triggerPlay();
              }}
              style={{
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: isActive ? 'var(--ryuma-black)' : 'var(--surface)',
                color: isActive ? '#FFFFFF' : 'var(--ryuma-black)',
                border: '1px solid',
                borderColor: isActive ? 'var(--ryuma-black)' : 'var(--surface-border)',
                fontWeight: 800,
                fontSize: '0.78rem',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all var(--duration-fast) var(--ease-ryuma)'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Lab Layout: Left = Stage & Controls, Right = Code Engine */}
      <div className="grid-2" style={{ alignItems: 'start' }}>
        {/* Left: Stage + Visual Controls */}
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
          {/* Live Stage */}
          <div
            style={{
              height: '240px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--surface-subtle)',
              border: '1px solid var(--surface-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Target Card */}
            <div
              key={animKey}
              style={{
                padding: '20px 32px',
                background: 'var(--surface)',
                border: '1px solid var(--surface-border-strong)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '0 12px 32px rgba(32, 32, 42, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                transform: animState === 'running' ? 'translate3d(0, 0, 0) scale(1) rotate(0deg)' : getTransformBefore(),
                opacity: animState === 'running' ? 1 : opacityStart,
                transition: animState === 'running' ? `transform ${duration}ms ${easing} ${delay}ms, opacity ${duration}ms ${easing} ${delay}ms` : 'none'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--ryuma-purple), var(--ryuma-pink))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 900
                }}
              >
                ●
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--ryuma-muted)', display: 'block' }}>
                  {activeCategory} TARGET
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--ryuma-black)' }}>
                  Kinetic Surface
                </span>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={triggerPlay}
              style={{
                position: 'absolute',
                bottom: '14px',
                right: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                background: 'var(--ryuma-black)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-xs)',
                fontWeight: 800,
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}
            >
              <Play size={14} />
              <span>REPLAY EFFECT</span>
            </button>
          </div>

          {/* Controls Sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Duration */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>DURATION ({duration}ms)</span>
              <input
                type="range"
                min="100"
                max="1500"
                step="50"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                style={{ width: '55%', accentColor: 'var(--ryuma-purple)' }}
              />
            </div>

            {/* Delay */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>DELAY ({delay}ms)</span>
              <input
                type="range"
                min="0"
                max="800"
                step="50"
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                style={{ width: '55%', accentColor: 'var(--ryuma-pink)' }}
              />
            </div>

            {/* Distance */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>DISTANCE ({distance}px)</span>
              <input
                type="range"
                min="0"
                max="120"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                style={{ width: '55%', accentColor: 'var(--ryuma-purple)' }}
              />
            </div>

            {/* Direction */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>DIRECTION</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['up', 'down', 'left', 'right'].map((dir) => (
                  <button
                    key={dir}
                    onClick={() => setDirection(dir)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: direction === dir ? 'var(--ryuma-black)' : 'rgba(32, 32, 42, 0.05)',
                      color: direction === dir ? '#FFFFFF' : 'var(--ryuma-black)',
                      fontSize: '0.72rem',
                      fontWeight: 800
                    }}
                  >
                    {dir.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Scale */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>START SCALE ({scale}x)</span>
              <input
                type="range"
                min="0.5"
                max="1.5"
                step="0.05"
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                style={{ width: '55%', accentColor: 'var(--ryuma-black)' }}
              />
            </div>

            {/* Easing */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>EASING</span>
              <select
                value={easing}
                onChange={(e) => setEasing(e.target.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '4px',
                  border: '1px solid var(--surface-border)',
                  background: 'var(--surface)',
                  fontSize: '0.78rem',
                  fontWeight: 700
                }}
              >
                {easings.map(item => (
                  <option key={item.label} value={item.value}>{item.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right: Code Generation */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-md)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--ryuma-purple)' }}>
              EXPORT GENERATED CSS
            </span>
            <span className="code-tag">CSS KEYFRAMES</span>
          </div>

          <pre
            style={{
              background: 'var(--ryuma-black)',
              color: '#F0F0F5',
              padding: '20px',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              lineHeight: 1.5,
              overflowX: 'auto',
              maxHeight: '360px'
            }}
          >
            {generatedCSS}
          </pre>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            <button
              onClick={handleCopyCode}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                background: 'var(--surface-subtle)',
                border: '1px solid var(--surface-border-strong)',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer',
                color: 'var(--ryuma-black)'
              }}
            >
              {copied ? <Check size={16} color="green" /> : <Copy size={16} />}
              <span>{copied ? 'COPIED!' : 'COPY CSS'}</span>
            </button>

            <button
              onClick={handleDownloadCode}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                background: 'var(--ryuma-black)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer',
                border: 'none'
              }}
            >
              <Download size={16} />
              <span>DOWNLOAD CODE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
