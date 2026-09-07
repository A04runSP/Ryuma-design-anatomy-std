import React, { useState } from 'react';
import SectionLabel from '../../components/SectionLabel';
import { Search, BookOpen, Layers, Cpu, User, Sparkles, Sliders } from 'lucide-react';

export default function Knowledge() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState('1.1');
  const [filterWorkflow, setFilterWorkflow] = useState('ALL');

  const knowledgeTree = [
    {
      id: '1',
      title: '1 Design',
      topics: [
        {
          id: '1.1',
          code: '1.1',
          title: 'Colour Theory & Perception',
          workflow: 'HYBRID',
          what: 'The physiological and cultural study of chromatic frequencies, contrast relationships, and psychological mood induction.',
          why: 'Users make subconscious judgments about an interface within 50 milliseconds; color dictates 62%–90% of that immediate assessment.',
          how: 'Calibrate dominant (60%), secondary structural (30%), and focal accent (10%) ratios. Guarantee WCAG AAA 7:1 contrast for micro text.',
          when: 'Establish during brand foundation before defining secondary interactive states.',
          example: 'Ryūma uses #20202A ink paired with #7650C7 spiritual purple and #EF7180 energetic rose.',
          visual: 'Dominant (60%) / Structural (30%) / Accent (10%)',
          tools: 'Ryūma Colour Lab, ColorBox, Contrast Checker, Adobe Spectrum'
        },
        {
          id: '1.2',
          code: '1.2',
          title: 'Typography & Readability',
          workflow: 'MANUAL',
          what: 'The structural craft of arranging type to make written language legible, readable, and appealing when displayed.',
          why: 'More than 90% of user interface design is information typography. Type establishes intellectual authority and reading speed.',
          how: 'Set strict geometric scale steps (1.25 major third or 1.333 perfect fourth), tune tracking for uppercase headers (+0.14em), and maintain 1.4–1.6 line height for body paragraphs.',
          when: 'Define alongside the 8dp vertical baseline grid.',
          example: 'Nunito 900 display paired with -0.04em tight tracking and generous negative space.',
          visual: 'Display (-0.04em) → Headline (-0.02em) → Body (0em) → Micro (+0.14em)',
          tools: 'Typescale.com, Google Fonts, Fontpair, Glyphs'
        },
        {
          id: '1.3',
          code: '1.3',
          title: 'Form & Geometry',
          workflow: 'MANUAL',
          what: 'The visual silhouettes, radii, and structural contours of UI surfaces.',
          why: 'Sharp angles signal precision and tension; smooth continuous radii trigger comforting tactile associations.',
          how: 'Maintain consistent corner radii hierarchy across nesting: inner radius = outer radius - padding.',
          when: 'Determining the spatial language of container elements and interactive triggers.',
          example: 'Ryūma specifies restrained 8px corners on base containers and 14px on focal specimens.',
          visual: 'Orthogonal 90° vs Sculpted Pebble vs Continuous Squircle',
          tools: 'Figma Corner Smoothing, CSS border-radius, SVG geometry generators'
        }
      ]
    },
    {
      id: '2',
      title: '2 UI Systems',
      topics: [
        {
          id: '2.1',
          code: '2.1',
          title: 'Components & Atomic Units',
          workflow: 'HYBRID',
          what: 'Reusable visual components encapsulating state, styling, and accessibility semantics.',
          why: 'Ensures absolute visual consistency across large ecosystems and eliminates redundant engineering overhead.',
          how: 'Follow Atomic Design: tokens → atoms (buttons, badges) → molecules (searchbars) → organisms (navigation headers).',
          when: 'As soon as a UI pattern is repeated more than twice.',
          example: 'SectionLabel component with Japanese glyph, micro-tracking, and polymorphic accent tokens.',
          visual: 'Atoms → Molecules → Organisms → Templates',
          tools: 'Storybook, Figma Design Systems, Chromatic'
        },
        {
          id: '2.2',
          code: '2.2',
          title: 'Layout & Spatial Grids',
          workflow: 'MANUAL',
          what: 'The mathematical distribution of elements across multiple device viewport dimensions.',
          why: 'Chaotic layouts cause cognitive overload; disciplined grids create calm intuitive scanning patterns.',
          how: 'Adopt an 8-point spatial grid with a 4-point subgrid for micro-alignment. Use CSS Grid for 2D matrices and Flexbox for 1D streams.',
          when: 'Before placing any visual element onto a canvas.',
          example: 'Ryūma 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160 spacing scale.',
          visual: 'Container → Columns (12) → Gutters (24px) → Margins (clamp)',
          tools: 'CSS Grid Generator, Figma AutoLayout, LayoutIt'
        },
        {
          id: '2.3',
          code: '2.3',
          title: 'Interaction & Affordance',
          workflow: 'HYBRID',
          what: 'The cues and tactile responses that communicate what an interface can do.',
          why: 'Interfaces that fail to signal interactive possibilities leave users frustrated and disoriented.',
          how: 'Pair clear hover lifts, active depressions, accessible focus outlines, and responsive cursor indications.',
          when: 'Configuring all primary, secondary, and tertiary user touchpoints.',
          example: 'Minimum 48x48px touch targets with smooth 150ms cubic-bezier transitions.',
          visual: 'Rest → Hover (-3px lift) → Active (98% scale) → Focus (2px outline)',
          tools: 'WCAG 2.1 Guidelines, Accessibility Insights, Lighthouse'
        }
      ]
    },
    {
      id: '3',
      title: '3 Technology',
      topics: [
        {
          id: '3.1',
          code: '3.1',
          title: 'Semantic HTML & DOM Architecture',
          workflow: 'MANUAL',
          what: 'The semantic document object model underpinning modern web applications.',
          why: 'Screen readers, search engines, and browsers rely on semantic landmarks (<header>, <nav>, <main>, <section>) to understand structure.',
          how: 'Never use a clickable <div> when a <button> is required. Maintain valid heading hierarchy (h1 through h6).',
          when: 'Writing any foundational template or component structure.',
          example: 'Accessible navigation landmarks, proper aria-expanded states, and keyboard tab indices.',
          visual: '<header> → <nav> → <main> → <article> → <footer>',
          tools: 'HTML5 Validator, axe DevTools, WAVE'
        },
        {
          id: '3.2',
          code: '3.2',
          title: 'CSS Architecture & Tokens',
          workflow: 'HYBRID',
          what: 'Modern cascading style sheet variables, container queries, and subgrid mechanics.',
          why: 'Centralized design tokens allow global themes to update in milliseconds without breaking legacy views.',
          how: 'Declare design tokens on :root, scope component-specific tokens locally, and leverage prefers-reduced-motion media queries.',
          when: 'Establishing project token foundations before authoring component stylesheets.',
          example: 'var(--ryuma-black), var(--space-64), clamp() fluid typography.',
          visual: ':root Tokens → Component Styles → Responsive Media Queries',
          tools: 'PostCSS, Stylelint, Chrome DevTools Styles Inspector'
        },
        {
          id: '3.3',
          code: '3.3',
          title: 'JavaScript & Web APIs',
          workflow: 'MANUAL',
          what: 'The client-side execution language powering browser interactivity, DOM manipulation, and asynchronous network streams.',
          why: 'JavaScript breathes life into static markup, transforming visual blueprints into reactive, stateful user experiences.',
          how: 'Leverage modern ES6+ syntax, async/await promises, requestAnimationFrame loops, and strict immutability patterns.',
          when: 'Handling dynamic user inputs, real-time calculations, and browser APIs.',
          example: 'ColourLab chromatic conversion algorithms and dynamic HSL calculations.',
          visual: 'Event Trigger → Event Loop → Execution Stack → State Mutation',
          tools: 'Chrome DevTools, TypeScript, Node.js, Vitest'
        },
        {
          id: '3.4',
          code: '3.4',
          title: 'React & Component Architecture',
          workflow: 'HYBRID',
          what: 'Declarative component-driven UI architecture, unidirectional data flow, and virtual DOM reconciliations.',
          why: 'Decomposing complex visual systems into discrete reusable components makes large-scale applications maintainable and testable.',
          how: 'Structure state with useState/useReducer, isolate side effects in useEffect, and encapsulate domain logic in custom hooks.',
          when: 'Engineering interactive design systems, dynamic playgrounds, and complex view routers.',
          example: 'Ryūma interactive 5-system specimen and real-time motion playground.',
          visual: 'Props Down → State Changes → Virtual DOM Diff → Real DOM Patch',
          tools: 'React Developer Tools, Vite, Next.js, Storybook'
        }
      ]
    }
  ];

  // Flatten all topics for searching & filtering
  const allTopics = knowledgeTree.flatMap((section) => section.topics);

  const filteredTopics = allTopics.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.what.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.why.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesWorkflow = filterWorkflow === 'ALL' || t.workflow === filterWorkflow;

    return matchesSearch && matchesWorkflow;
  });

  const currentTopic = allTopics.find((t) => t.id === selectedTopicId) || allTopics[0];

  return (
    <div style={{ padding: 'var(--space-48) 0' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <SectionLabel text="STRUCTURED ENCYCLOPEDIA" number="KNOWLEDGE" accent="purple" japanese="知識体系" />
        <h1 className="display-title">
          Design Knowledge.
        </h1>
        <p className="lead-p">
          Comprehensive structured principles covering Design, UI Architecture, and Technology. Classifying work across Manual, AI, and Hybrid paradigms.
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
          marginBottom: '32px',
          boxShadow: 'var(--shadow-subtle)'
        }}
      >
        {/* Search Input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '240px' }}>
          <Search size={18} color="var(--ryuma-muted)" />
          <input
            type="text"
            placeholder="Search topics (e.g. typography, contrast, grids)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Workflow Filter Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--ryuma-muted)' }}>
            WORKFLOW:
          </span>
          {['ALL', 'MANUAL', 'HYBRID', 'AI'].map((wf) => (
            <button
              key={wf}
              onClick={() => setFilterWorkflow(wf)}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-xs)',
                background: filterWorkflow === wf ? 'var(--ryuma-black)' : 'rgba(32, 32, 42, 0.05)',
                color: filterWorkflow === wf ? '#FFFFFF' : 'var(--ryuma-black)',
                fontSize: '0.72rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              {wf}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid-2" style={{ alignItems: 'start' }}>
        {/* Left: Hierarchical Topics Tree Navigation */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-md)',
            padding: '24px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--ryuma-purple)' }}>
              TOPIC DIRECTORY
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--ryuma-muted)' }}>
              {filteredTopics.length} entries
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {knowledgeTree.map((section) => {
              const visibleTopics = section.topics.filter((t) => filteredTopics.some((ft) => ft.id === t.id));
              if (visibleTopics.length === 0) return null;

              return (
                <div key={section.id}>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 900, color: 'var(--ryuma-muted)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                    {section.title}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {visibleTopics.map((topic) => {
                      const isSelected = selectedTopicId === topic.id;
                      return (
                        <button
                          key={topic.id}
                          onClick={() => setSelectedTopicId(topic.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 14px',
                            borderRadius: 'var(--radius-sm)',
                            background: isSelected ? 'var(--ryuma-black)' : 'var(--surface-subtle)',
                            color: isSelected ? '#FFFFFF' : 'var(--ryuma-black)',
                            border: '1px solid',
                            borderColor: isSelected ? 'var(--ryuma-black)' : 'var(--surface-border)',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all var(--duration-fast) var(--ease-ryuma)'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, opacity: isSelected ? 0.8 : 0.6 }}>
                              {topic.code}
                            </span>
                            <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>
                              {topic.title}
                            </span>
                          </div>

                          <span
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 800,
                              padding: '2px 6px',
                              borderRadius: '4px',
                              background: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'rgba(32, 32, 42, 0.08)',
                              color: isSelected ? '#FFFFFF' : 'var(--ryuma-black)'
                            }}
                          >
                            {topic.workflow}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Topic View (WHAT, WHY, HOW, WHEN, EXAMPLE, VISUAL, TOOLS) */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-md)',
            padding: '32px',
            boxShadow: 'var(--shadow-subtle)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--surface-border)', paddingBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="tag-badge purple">{currentTopic.code}</span>
              <span className="tag-badge pink">WORKFLOW: {currentTopic.workflow}</span>
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--ryuma-black)' }}>
              {currentTopic.title}
            </h2>
          </div>

          {/* Structured Sections */}
          {[
            { label: 'WHAT', text: currentTopic.what },
            { label: 'WHY', text: currentTopic.why },
            { label: 'HOW', text: currentTopic.how },
            { label: 'WHEN', text: currentTopic.when }
          ].map((item) => (
            <div key={item.label}>
              <span className="micro-label" style={{ color: 'var(--ryuma-purple)', marginBottom: '4px', display: 'block' }}>
                {item.label}
              </span>
              <p style={{ fontSize: '0.98rem', color: 'var(--ryuma-black)', lineHeight: 1.6 }}>
                {item.text}
              </p>
            </div>
          ))}

          {/* Visual Specimen Box */}
          <div
            style={{
              background: 'var(--surface-subtle)',
              border: '1px solid var(--surface-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '16px 20px'
            }}
          >
            <span className="micro-label" style={{ color: 'var(--ryuma-muted)', display: 'block', marginBottom: '6px' }}>
              VISUAL CADENCE DIAGRAM
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--ryuma-black)' }}>
              {currentTopic.visual}
            </span>
          </div>

          {/* Example & Recommended Tools */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
              <span className="micro-label" style={{ color: 'var(--ryuma-muted)', display: 'block', marginBottom: '4px' }}>
                EXAMPLE
              </span>
              <p style={{ fontSize: '0.88rem', color: 'var(--ryuma-muted)', lineHeight: 1.5 }}>
                {currentTopic.example}
              </p>
            </div>
            <div>
              <span className="micro-label" style={{ color: 'var(--ryuma-muted)', display: 'block', marginBottom: '4px' }}>
                RECOMMENDED TOOLS
              </span>
              <p style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', color: 'var(--ryuma-purple)', lineHeight: 1.5 }}>
                {currentTopic.tools}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
