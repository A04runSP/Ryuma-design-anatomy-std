import React from 'react';
import SectionLabel from '../../components/SectionLabel';
import Button from '../../components/Button';
import LivePreview from '../../components/LivePreview';
import HeroSpecimen from '../../components/HeroSpecimen';
import ColourAnatomy from '../../anatomy/Colour/ColourAnatomy';
import TypeAnatomy from '../../anatomy/Type/TypeAnatomy';
import FormAnatomy from '../../anatomy/Form/FormAnatomy';
import SpaceAnatomy from '../../anatomy/Space/SpaceAnatomy';
import MotionAnatomy from '../../anatomy/Motion/MotionAnatomy';
import { DESIGN_LANGUAGES } from '../../design-languages/data';
import StyleCard from '../../components/StyleCard';
import { ArrowRight, Eye, Layers, Compass, BookOpen, Sparkles } from 'lucide-react';

export default function Home({ onNavigate, onSelectStyle }) {
  // Take 3 featured styles for library preview on home
  const featuredStyles = DESIGN_LANGUAGES.slice(0, 3);

  return (
    <div style={{ width: '100%' }}>
      {/* 2. HERO */}
      <section
        style={{
          padding: 'clamp(56px, 8vw, 100px) 0 clamp(40px, 6vw, 72px) 0',
          position: 'relative'
        }}
      >
        <div className="content-wrapper">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-48)' }}>
            {/* Hero Text Content */}
            <div style={{ maxWidth: '880px' }}>
              <SectionLabel text="DESIGN ANATOMY" accent="purple" number="00" japanese="デザイン解剖" />
              
              <h1 className="display-hero" style={{ margin: '16px 0 24px 0' }}>
                Design has a language.<br />
                Don't just look at design.<br />
                <span style={{ color: 'var(--ryuma-purple)' }}>Learn to read it.</span>
              </h1>

              <p className="editorial-statement" style={{ maxWidth: '720px', marginBottom: '36px' }}>
                Every design is made from visual decisions. Ryūma breaks down those decisions into systems you can understand, experiment with, and master.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Button
                  onClick={() => onNavigate('library')}
                  variant="primary"
                  size="large"
                  testTag="explore_library_button"
                >
                  EXPLORE LIBRARY
                </Button>

                <Button
                  onClick={() => onNavigate('labs')}
                  variant="secondary"
                  size="large"
                  testTag="experiment_labs_button"
                >
                  EXPERIMENT LABS
                </Button>
              </div>
            </div>

            {/* Visual Element: Interactive Visual Specimen Showing the 5 Anatomy Systems */}
            <div>
              <HeroSpecimen />
            </div>
          </div>
        </div>
      </section>

      <div className="content-wrapper">
        <div className="editorial-line" />
      </div>

      {/* 3. WHAT IS DESIGN ANATOMY? */}
      <section style={{ padding: 'var(--space-64) 0' }}>
        <div className="content-wrapper">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            {/* Left: Heading & Philosophy */}
            <div>
              <SectionLabel text="METHODOLOGY" number="01" accent="pink" japanese="方法論" />
              <h2 className="display-title" style={{ marginBottom: '20px' }}>
                A way to see<br />what makes design work.
              </h2>
              <p className="lead-p" style={{ marginBottom: '20px' }}>
                A design can look simple, complex, beautiful or strange. Underneath, it is built from a series of visual decisions.
              </p>
              <p className="lead-p" style={{ marginBottom: '28px' }}>
                Design Anatomy breaks those decisions apart, so you can understand what you're looking at — and why it works.
              </p>

              <div
                style={{
                  padding: '24px 28px',
                  background: 'var(--surface)',
                  border: '1px solid var(--surface-border)',
                  borderLeft: '4px solid var(--ryuma-purple)',
                  borderRadius: 'var(--radius-xs)'
                }}
              >
                <p style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--ryuma-black)', lineHeight: 1.4 }}>
                  Don't just look at design.<br />
                  <span style={{ color: 'var(--ryuma-purple)' }}>Learn to read it.</span>
                </p>
              </div>
            </div>

            {/* Right: Visual Process Flow (SEE → BREAK DOWN → UNDERSTAND → CREATE) */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--surface-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(24px, 4vw, 40px)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <span className="micro-label" style={{ color: 'var(--ryuma-muted)', marginBottom: '8px' }}>
                THE RECURSIVE LEARNING CADENCE
              </span>

              {[
                { step: '01', title: 'SEE', desc: 'Observe whole compositions without immediate judgment.' },
                { step: '02', title: 'BREAK DOWN', desc: 'Isolate color, type, geometry, negative space, and kinetic curves.' },
                { step: '03', title: 'UNDERSTAND', desc: 'Deconstruct why specific combinations trigger specific emotional reactions.' },
                { step: '04', title: 'CREATE', desc: 'Synthesize your own deliberate visual decisions with technical control.' }
              ].map((flow, idx) => (
                <React.Fragment key={flow.step}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '12px 16px',
                      background: 'var(--surface-subtle)',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--surface-border)'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 900, color: 'var(--ryuma-purple)' }}>
                      {flow.step}
                    </span>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 900, letterSpacing: '0.04em', color: 'var(--ryuma-black)' }}>
                        {flow.title}
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--ryuma-muted)', marginTop: '2px' }}>
                        {flow.desc}
                      </p>
                    </div>
                  </div>

                  {idx < 3 && (
                    <div style={{ textAlign: 'center', color: 'var(--ryuma-soft)', fontSize: '0.9rem', lineHeight: 1 }}>
                      ↓
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="content-wrapper">
        <div className="editorial-line" />
      </div>

      {/* 4. THE FIVE ANATOMY SYSTEMS */}
      <section style={{ padding: 'var(--space-64) 0' }}>
        <div className="content-wrapper">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <SectionLabel text="FUNDAMENTAL FORCES" number="02" accent="purple" japanese="五大体系" />
            <h2 className="display-title" style={{ marginBottom: '16px' }}>
              Look closer.
            </h2>
            <p className="editorial-statement">
              Design isn't just what you see. It's a system of decisions.
            </p>
            <p className="lead-p" style={{ marginTop: '12px' }}>
              Every visual artifact in existence is composed from five interrelated subsystems. Explore and interact with each system directly:
            </p>
          </div>

          {/* Five Interactive Visual Modules */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="grid-2">
              <ColourAnatomy />
              <TypeAnatomy />
            </div>

            <div className="grid-3">
              <FormAnatomy />
              <SpaceAnatomy />
              <MotionAnatomy />
            </div>
          </div>
        </div>
      </section>

      <div className="content-wrapper">
        <div className="editorial-line" />
      </div>

      {/* 5. LIVE PREVIEW */}
      <section style={{ padding: 'var(--space-48) 0' }}>
        <div className="content-wrapper">
          <LivePreview onSelectStyle={onSelectStyle} />
        </div>
      </section>

      <div className="content-wrapper">
        <div className="editorial-line" />
      </div>

      {/* 6. DESIGN LIBRARY INTRO */}
      <section style={{ padding: 'var(--space-64) 0' }}>
        <div className="content-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <SectionLabel text="VISUAL ARCHIVE" number="03" accent="purple" japanese="デザイン言語録" />
              <h2 className="display-title">
                17 Design Languages.
              </h2>
              <p className="lead-p" style={{ marginTop: '6px' }}>
                From Bauhaus-rooted Minimalism to futuristic Glassmorphism and raw Brutalism.
              </p>
            </div>

            <Button
              onClick={() => onNavigate('library')}
              variant="primary"
            >
              BROWSE FULL LIBRARY (17)
            </Button>
          </div>

          {/* 3 Featured Style Cards */}
          <div className="grid-3">
            {featuredStyles.map((item) => (
              <StyleCard
                key={item.id}
                styleItem={item}
                onViewStyle={onSelectStyle}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
