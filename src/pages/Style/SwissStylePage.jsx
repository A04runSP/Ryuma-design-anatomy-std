import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Grid2X2, Eye, EyeOff, RotateCcw } from 'lucide-react';
import './SwissStylePage.css';

const palette = [
  { name: 'Paper', hex: '#F3EFE5' }, { name: 'Ink', hex: '#20201D' },
  { name: 'Signal Red', hex: '#D9382B' }, { name: 'Grid Grey', hex: '#D8D3C9' },
  { name: 'Signal Blue', hex: '#244B9B' }, { name: 'Signal Yellow', hex: '#F2C94C' }
];
const anatomy = [
  ['01', 'Colour', 'Restrained, purposeful accents.', 'A neutral paper-and-ink foundation keeps information legible. Red marks urgency; blue and yellow appear as deliberate secondary signals.'],
  ['02', 'Typography', 'Type is the architecture.', 'Grotesk sans-serif typography, strong scale contrast, tight headline rhythm, and clear text hierarchy replace decorative ornament.'],
  ['03', 'Form', 'Geometry earns its place.', 'Rectangles, rules, and aligned edges make relationships visible. Shapes organize information instead of decorating it.'],
  ['04', 'Space', 'Whitespace is structural.', 'Margins, gutters, and negative space establish pace, grouping, and emphasis. Empty space is an active part of the grid.'],
  ['05', 'Motion', 'Transitions clarify change.', 'Use restrained, purposeful movement to show state changes and relationships. Avoid motion that competes with the message.']
];
const applications = [
  ['POSTERS', 'One message. One hierarchy.', 'Use a decisive headline, one supporting detail, and a grid that makes the reading order unmistakable.'],
  ['EDITORIAL', 'A system across many pages.', 'Baseline rhythm, consistent margins, and repeatable columns help complex information stay coherent.'],
  ['WAYFINDING', 'Clarity at a glance.', 'Strong contrast, predictable alignment, and concise language make information usable at a distance.'],
  ['DIGITAL', 'Structure for interaction.', 'Apply the same principles to navigation, dashboards, and responsive interfaces without sacrificing accessibility.']
];

export default function SwissStylePage({ onBack }) {
  const [gridOn, setGridOn] = useState(true);
  const [columns, setColumns] = useState(6);
  const [align, setAlign] = useState('left');
  const [accent, setAccent] = useState('#D9382B');
  const [headline, setHeadline] = useState('FORM FOLLOWS FUNCTION.');
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [challengeDone, setChallengeDone] = useState(false);
  const gridStyle = useMemo(() => ({ '--swiss-columns': columns, '--swiss-accent': accent, '--swiss-align': align }), [columns, accent, align]);

  return <div className="swiss-page" style={gridStyle}>
    <div className="swiss-topline">
      <button className="swiss-back" onClick={onBack}><ArrowLeft size={16}/> BACK TO LIBRARY</button>
      <span>RYŪMA / DESIGN ANATOMY <b>04.01</b></span>
    </div>

    <header className="swiss-hero swiss-grid">
      <div className="swiss-hero-copy">
        <p className="swiss-kicker"><span className="swiss-red-dot"/> DESIGN LANGUAGE / 04.01</p>
        <h1>Swiss <span>/</span><br/>International<br/>Style<span className="swiss-period">.</span></h1>
        <p className="swiss-intro">Clarity is not an aesthetic. It is a system.</p>
        <p className="swiss-body">A modernist design language shaped by grids, objective typography, asymmetric balance, and the belief that visual communication should be clear, direct, and useful.</p>
        <a className="swiss-text-link" href="#swiss-anatomy">EXPLORE THE SYSTEM <ArrowUpRight size={17}/></a>
      </div>
      <div className="swiss-poster" aria-label="Swiss typography specimen poster">
        <div className="swiss-poster-meta"><span>STUDY NO. 04.01</span><span>ZÜRICH / BASEL</span></div>
        <div className="swiss-poster-grid">
          <span className="swiss-poster-index">01</span>
          <div className="swiss-poster-title">DESIGN<br/><em>IS</em><br/>ORDER<span>.</span></div>
          <div className="swiss-poster-rule"/>
          <p>GRID / TYPE / SPACE<br/>INFORMATION, MADE CLEAR.</p>
          <div className="swiss-poster-block"/>
        </div>
        <div className="swiss-poster-footer"><span>INTERNATIONAL TYPOGRAPHIC STYLE</span><span>1950—</span></div>
      </div>
      <div className="swiss-hero-foot"><span>01 — PRINCIPLE</span><span>SCROLL TO DECONSTRUCT ↓</span></div>
    </header>

    <section className="swiss-philosophy swiss-section swiss-grid">
      <div><p className="swiss-kicker">THE IDEA / 01</p><h2>Make the message<br/>impossible to miss.</h2></div>
      <div className="swiss-philosophy-copy"><p>Emerging in Switzerland in the 1950s, the International Typographic Style pursued clarity through disciplined structure rather than personal ornament.</p><p>Designers including Josef Müller-Brockmann, Armin Hofmann, and Emil Ruder helped develop a visual language built around grids, sans-serif typography, photography, and asymmetrical composition.</p><p className="swiss-note">A grid is a tool for making decisions — not a substitute for them.</p></div>
    </section>

    <section id="swiss-anatomy" className="swiss-section swiss-anatomy">
      <div className="swiss-section-head"><div><p className="swiss-kicker">DECONSTRUCTION / 02</p><h2>Anatomy of a system.</h2></div><p>Five connected dimensions.<br/>One coherent visual language.</p></div>
      <div className="swiss-anatomy-list">{anatomy.map(([n,title,summary,detail]) => <article className="swiss-anatomy-row" key={n}>
        <span className="swiss-number">{n}</span><h3>{title}</h3><p className="swiss-anatomy-summary">{summary}</p><p className="swiss-anatomy-detail">{detail}</p>
      </article>)}</div>
    </section>

    <section className="swiss-playground swiss-section">
      <div className="swiss-section-head"><div><p className="swiss-kicker">LIVE EXPERIMENT / 03</p><h2>Work inside the grid.</h2></div><p>Change the rules.<br/>See the composition respond.</p></div>
      <div className="swiss-lab">
        <div className="swiss-controls">
          <label className="swiss-control-label">01 / GRID</label>
          <button className="swiss-toggle" onClick={() => setGridOn(v => !v)}>{gridOn ? <Eye size={16}/> : <EyeOff size={16}/>} {gridOn ? 'Hide grid' : 'Show grid'}</button>
          <label className="swiss-control-label" htmlFor="swiss-columns">02 / COLUMNS <b>{columns}</b></label>
          <input id="swiss-columns" type="range" min="2" max="12" value={columns} onChange={e => setColumns(Number(e.target.value))}/>
          <label className="swiss-control-label" htmlFor="swiss-headline">03 / MESSAGE</label>
          <input id="swiss-headline" className="swiss-text-input" maxLength="44" value={headline} onChange={e => setHeadline(e.target.value.toUpperCase())}/>
          <label className="swiss-control-label">04 / ALIGNMENT</label>
          <div className="swiss-align-buttons">{['left','center','right'].map(v => <button key={v} aria-pressed={align===v} onClick={() => setAlign(v)}>{v}</button>)}</div>
          <label className="swiss-control-label">05 / ACCENT</label>
          <div className="swiss-swatches">{palette.filter(p => ['#D9382B','#244B9B','#20201D'].includes(p.hex)).map(p => <button key={p.hex} aria-label={p.name} title={p.name} style={{background:p.hex}} className={accent===p.hex?'is-selected':''} onClick={() => setAccent(p.hex)}/>)}</div>
          <button className="swiss-reset" onClick={() => {setGridOn(true);setColumns(6);setAlign('left');setAccent('#D9382B');setHeadline('FORM FOLLOWS FUNCTION.')}}><RotateCcw size={14}/> RESET STUDY</button>
        </div>
        <div className={'swiss-canvas '+(gridOn?'has-grid':'')} style={{'--swiss-columns':columns,'--swiss-accent':accent,'--swiss-align':align}}>
          <div className="swiss-canvas-meta"><span>COMPOSITION / LIVE</span><span>{String(columns).padStart(2,'0')} COL GRID</span></div>
          <div className="swiss-canvas-content"><span className="swiss-canvas-label">STUDY — 001</span><h3>{headline || 'YOUR MESSAGE.'}</h3><div className="swiss-canvas-line"/><p>INFORMATION<br/>WITH INTENTION.</p><span className="swiss-canvas-index">RY—04.01</span></div>
          {showAnnotations && <div className="swiss-annotation"><Grid2X2 size={14}/> ALIGNMENT / HIERARCHY / RHYTHM</div>}
          <button className="swiss-annotation-toggle" onClick={() => setShowAnnotations(v=>!v)}>{showAnnotations?'Hide annotations':'Show annotations'}</button>
        </div>
      </div>
      <p className="swiss-lab-caption">The grid is visible as a guide, not as decoration. Turn it off to judge the composition by its own hierarchy.</p>
    </section>

    <section className="swiss-section swiss-applications">
      <div className="swiss-section-head"><div><p className="swiss-kicker">IN PRACTICE / 04</p><h2>One language.<br/>Many contexts.</h2></div><p>Consistency without sameness.</p></div>
      <div className="swiss-application-grid">{applications.map(([label,title,copy],i)=><article className="swiss-application" key={label}>
        <div className={'swiss-mini-poster swiss-mini-'+i}><span>0{i+1} / {label}</span><strong>{['MAKE IT CLEAR.','READ THE GRID.','FIND YOUR WAY.','BUILD WITH ORDER.'][i]}</strong><i/></div>
        <p className="swiss-kicker">{label}</p><h3>{title}</h3><p>{copy}</p>
      </article>)}</div>
    </section>

    <section className="swiss-challenge">
      <div><p className="swiss-kicker">YOUR TURN / 05</p><h2>Design with<br/>less noise.</h2><p>Create a cultural-event poster using one headline, one supporting detail, a limited palette, and a consistent grid. Every element must improve the reading order.</p></div>
      <div className="swiss-challenge-checks">{['One clear headline hierarchy','Consistent alignment and margins','Purposeful use of accent colour','No decorative element without a job'].map(item=><label key={item}><input type="checkbox" checked={undefined} onChange={()=>{}} disabled={false}/><span>{item}</span></label>)}
        <button className="swiss-challenge-button" onClick={()=>setChallengeDone(v=>!v)}>{challengeDone?'CHALLENGE MARKED COMPLETE ✓':'MARK CHALLENGE COMPLETE ↗'}</button>
        {challengeDone && <p className="swiss-success" role="status">Challenge complete. Review the four principles above before moving to another style.</p>}
      </div>
    </section>
    <footer className="swiss-footer"><span>RYŪMA DESIGN ANATOMY / 04.01</span><span>CLARITY THROUGH STRUCTURE.</span><button onClick={onBack}>BACK TO STYLE LIBRARY ↑</button></footer>
  </div>;
}
