// Complete Data for the 17 Design Languages in Ryūma Design Anatomy

export const DESIGN_LANGUAGES = [
  {
    id: 'swiss-international',
    number: '04.01',
    name: 'Swiss / International Style',
    era: '1950s — Present',
    heroTag: 'Clarity through structure.',
    shortDescription: 'A disciplined visual language built on grids, typography, and objective communication.',
    description: 'The International Typographic Style uses modular grids, asymmetric composition, neutral sans-serif typography, and restrained colour to make information clear and direct.',
    characteristics: ['Modular grid systems', 'Asymmetric composition', 'Objective sans-serif typography', 'Restrained accent colours', 'Purposeful negative space', 'Clear information hierarchy'],
    palette: [
      { name: 'Paper', hex: '#F3EFE5', role: 'Primary background' },
      { name: 'Ink', hex: '#20201D', role: 'Primary typography' },
      { name: 'Signal Red', hex: '#D9382B', role: 'Primary accent' },
      { name: 'Grid Grey', hex: '#D8D3C9', role: 'Structural rules' },
      { name: 'Signal Blue', hex: '#244B9B', role: 'Secondary accent' }
    ],
    anatomy: {
      colour: { title: 'Purposeful restraint', explanation: 'Paper and ink create a neutral foundation. Accent colour directs attention rather than decorating the layout.' },
      type: { title: 'Type is the architecture', explanation: 'Grotesk sans-serif typography, decisive scale contrast, and clear hierarchy replace ornamental effects.' },
      form: { title: 'Geometric clarity', explanation: 'Rules, rectangles, and aligned edges expose relationships and structure information.' },
      space: { title: 'Whitespace as structure', explanation: 'Margins and gutters create grouping, pace, and emphasis. Negative space is an active design element.' },
      motion: { title: 'Motion with purpose', explanation: 'Restrained transitions clarify state and hierarchy without competing with the message.' }
    },
    principles: [
      { title: 'GRID', subtitle: 'ORDER THAT SCALES', detail: 'A modular grid creates repeatable relationships between text, image, and space.' },
      { title: 'TYPOGRAPHY', subtitle: 'THE MESSAGE FIRST', detail: 'Neutral sans-serif type and a deliberate scale make the reading order clear.' },
      { title: 'ASYMMETRY', subtitle: 'BALANCE WITHOUT MIRRORING', detail: 'Unequal elements can create dynamic balance when their weight and alignment are controlled.' },
      { title: 'OBJECTIVITY', subtitle: 'REMOVE THE NOISE', detail: 'Visual decisions serve the information and audience instead of the designer’s ego.' }
    ],
    layers: [
      { step: '01', title: 'GRID', text: 'Columns, margins, and gutters establish a reliable structural system.' },
      { step: '02', title: 'TYPOGRAPHY', text: 'Type scale and weight determine reading order.' },
      { step: '03', title: 'SPACE', text: 'Negative space separates, groups, and gives content room to breathe.' },
      { step: '04', title: 'ACCENT', text: 'A small amount of colour directs attention to the most important information.' }
    ],
    composition: 'Asymmetric compositions organized by modular columns, precise alignment, clear typographic hierarchy, and deliberate negative space.',
    applications: ['Posters and cultural campaigns', 'Editorial and magazine systems', 'Wayfinding and signage', 'Websites and digital interfaces'],
    specimen: { study: 'RYŪMA / STUDY 04.01', tagline: 'Clarity through structure.', caption: 'Grid · type · space · hierarchy', cta: 'EXPLORE →' }
  },

  {
    id: 'glassmorphism',
    number: '02',
    name: 'Glassmorphism',
    era: '2020 — Present',
    heroTag: 'Light through glass.',
    shortDescription: 'A visual language built from transparency, soft light, and layered depth.',
    description: 'A visual language built from transparency, soft light and layered depth. Translucent panels float above luminous colored backdrops, creating a physical sense of hierarchy.',
    characteristics: [
      'Translucent surfaces with backdrop blur',
      'Background colour showing through',
      'Soft multi-layered shadows',
      'Ultra-thin luminous borders',
      'Glossy specular highlights',
      'Layered z-index depth',
      'Smooth rounded surface corners'
    ],
    palette: [
      { name: 'Pure White', hex: '#FFFFFF', role: 'Surface & highlights' },
      { name: 'Pale Lavender', hex: '#EBE5F8', role: 'Atmospheric backdrop' },
      { name: 'Soft Pink', hex: '#FBD9DD', role: 'Ambient back-glow' },
      { name: 'Soft Red', hex: '#EF7180', role: 'Energy accent' },
      { name: 'Deep Purple', hex: '#7650C7', role: 'Depth & typographic contrast' }
    ],
    anatomy: {
      colour: {
        title: 'Soft atmosphere',
        explanation: 'White remains dominant while pale red and purple provide energy behind the surface.'
      },
      type: {
        title: 'Dark contrast',
        explanation: 'Black and deep purple carry information cleanly across variable frosted backgrounds.'
      },
      form: {
        title: 'Rounded surfaces',
        explanation: 'Quiet curves and thin borders make the glass feel physical and sculpted.'
      },
      space: {
        title: 'Breathing room',
        explanation: 'Generous margins keep translucent layers visually distinct and prevent visual muddiness.'
      },
      motion: {
        title: 'Gentle response',
        explanation: 'Small shifts, reveals and hover movement should feel soft, floating, and weightless.'
      }
    },
    principles: [
      {
        title: 'TRANSPARENCY',
        subtitle: 'LET LIGHT THROUGH',
        detail: 'A translucent white surface lets the colour and light beneath remain part of the composition.'
      },
      {
        title: 'DEPTH',
        subtitle: 'BUILD WITH LAYERS',
        detail: 'Layered surfaces, soft shadows and overlapping edges create a clear sense of front and back.'
      },
      {
        title: 'LIGHT',
        subtitle: 'SOFT REFRACTIONS',
        detail: 'Soft highlights and blurred colour fields make the material feel luminous rather than heavy.'
      },
      {
        title: 'HIERARCHY',
        subtitle: 'ORDER THROUGH ELEVATION',
        detail: 'Opacity, scale and position separate primary content from supporting background elements.'
      }
    ],
    layers: [
      { step: '01', title: 'TRANSPARENCY', text: 'A translucent white surface lets the colour and light beneath remain part of the composition.' },
      { step: '02', title: 'DEPTH', text: 'Layered surfaces, soft shadows and overlapping edges create a clear sense of front and back.' },
      { step: '03', title: 'LIGHT', text: 'Soft highlights and blurred colour fields make the material feel luminous rather than heavy.' },
      { step: '04', title: 'HIERARCHY', text: 'Opacity, scale and position separate primary content from supporting details.' }
    ],
    composition: 'Floating glass panels with 16px to 24px backdrop blur, 1px white 20% border, and stacked z-index elevations over soft saturated radial gradients.',
    applications: ['macOS Big Sur & visionOS', 'Crypto & Web3 dashboards', 'Creative portfolio showcases', 'Audio synthesizers & music players'],
    specimen: {
      study: 'RYŪMA / STUDY 02',
      tagline: 'Clarity in layers.',
      caption: 'White glass · soft light · subtle depth',
      cta: 'EXPLORE →'
    }
  },
  {
    id: 'minimalism',
    number: '01',
    name: 'Minimalism',
    era: '1960s — Present',
    heroTag: 'Form follows essence.',
    shortDescription: 'Radical reduction where negative space and precise typography carry the entire visual weight.',
    description: 'Minimalism strips all non-essential decorative styling, giving negative space functional primacy. Every millimeter of whitespace acts as an intentional structural element.',
    characteristics: [
      'Almost zero decorative ornamentation',
      'Severe typographic discipline',
      'Generous negative space / spatial rhythm',
      'Monochrome or restrained two-tone palette',
      'High structural grid alignment'
    ],
    palette: [
      { name: 'Canvas White', hex: '#FFFFFF', role: 'Absolute space' },
      { name: 'Warm Paper', hex: '#F9F8F6', role: 'Subtle ground' },
      { name: 'Graphite', hex: '#4A4A52', role: 'Secondary copy' },
      { name: 'Carbon Black', hex: '#111114', role: 'Primary typography' }
    ],
    anatomy: {
      colour: { title: 'Tonal restraint', explanation: 'Black on white with strict grey gradation. Color is only used for critical status.' },
      type: { title: 'Primary voice', explanation: 'Typography is the architecture. Clear scale, proportion, and tracking.' },
      form: { title: 'Unyielding rectilinearity', explanation: 'Pure rectangular grids with zero rounded gimmicks or faux physics.' },
      space: { title: 'The silent actor', explanation: 'Negative space is not empty void; it is the frame that commands visual attention.' },
      motion: { title: 'Instantaneous or imperceptible', explanation: 'Subtle crossfades and linear transitions without spring or bounce.' }
    },
    principles: [
      { title: 'REDUCTION', subtitle: 'STRIP THE EXCESS', detail: 'If an element does not clarify function or meaning, delete it without hesitation.' },
      { title: 'NEGATIVE SPACE', subtitle: 'ROOM TO BREATHE', detail: 'Whitespace creates visual silence, allowing content to resonate without distraction.' },
      { title: 'GRID DISCIPLINE', subtitle: 'MATHEMATICAL HARMONY', detail: 'All alignments adhere strictly to baseline and column rhythms.' }
    ],
    layers: [
      { step: '01', title: 'STRUCTURE', text: 'Mathematical columns and baseline grids create invisible order.' },
      { step: '02', title: 'TYPOGRAPHY', text: 'High-contrast scale steps establish unambiguous reading priority.' },
      { step: '03', title: 'WHITESPACE', text: 'Generous margins focus user gaze like an art gallery wall.' }
    ],
    composition: 'Strict grid layout with unadorned typography, hairline borders, and extreme margin ratios.',
    applications: ['Art galleries & museums', 'Architectural publications', 'Swiss editorial platforms', 'High-end horology & fashion'],
    specimen: {
      study: 'RYŪMA / STUDY 01',
      tagline: 'Silent architecture.',
      caption: 'Pure negative space · typographic hierarchy · intentional silence',
      cta: 'DISCOVER →'
    }
  },
  {
    id: 'brutalism',
    number: '04',
    name: 'Brutalism',
    era: '1950s Architecture / 2018+ Web',
    heroTag: 'Raw, unpolished honesty.',
    shortDescription: 'Hard edges, stark contrasts, monospace fonts, and deliberate anti-aesthetic rebellion.',
    description: 'Web brutalism rejects cookie-cutter corporate beauty. It embraces default browser aesthetics, black hairline borders, pure primary clashes, and abrasive typography.',
    characteristics: [
      'Thick 2px–4px black borders',
      'Zero border-radius (sharp 90° corners)',
      'Offset hard shadows with zero blur',
      'High-contrast neon or raw acid hues',
      'Monospace type and oversized headlines',
      'Raw HTML tables and raw data grids'
    ],
    palette: [
      { name: 'Acid Yellow', hex: '#FAFF00', role: 'Attention clash' },
      { name: 'Raw Black', hex: '#000000', role: 'Structural borders & ink' },
      { name: 'Terminal Green', hex: '#00FF66', role: 'Interactive callout' },
      { name: 'Pure White', hex: '#FFFFFF', role: 'Hard ground' }
    ],
    anatomy: {
      colour: { title: 'Abrasive collision', explanation: 'Acid yellow and electric hues collide against solid jet black.' },
      type: { title: 'Industrial monospace', explanation: 'Raw system fonts, typewriter tracking, and unapologetic loud scale.' },
      form: { title: 'Orthogonal rigidity', explanation: 'Sharp 90-degree corners with solid block drop-shadows.' },
      space: { title: 'Compressed tension', explanation: 'Intentionally crowded panels with high visual density.' },
      motion: { title: 'Mechanical snap', explanation: 'Immediate step jumps, 0ms ease, or rapid glitch transforms.' }
    },
    principles: [
      { title: 'RAW HONESTY', subtitle: 'NO POLISH', detail: 'Expose the technical bones of the interface instead of disguising them in glossy skins.' },
      { title: 'SOLID SHADOWS', subtitle: 'ZERO BLUR', detail: 'Shadows are crisp 4px offset solid blocks that suggest paper cutouts.' },
      { title: 'FUNCTIONAL IMPACT', subtitle: 'UNCOMPROMISING', detail: 'Function and content hit the retina with undeniable urgency.' }
    ],
    layers: [
      { step: '01', title: 'FRAMEWORK', text: 'Black 2px ink boundaries partition content without ambiguity.' },
      { step: '02', title: 'INK SHADOW', text: 'Solid 4px black drop-shadow creates an unmistakable pop-art elevation.' },
      { step: '03', title: 'TYPE WEIGHT', text: 'Heavy monospace and bold capitals emphasize utilitarian power.' }
    ],
    composition: 'Colliding blocks, monospace grids, neon sticker badges, and offset solid black drop-shadows.',
    applications: ['Experimental magazines', 'Independent record labels', 'Developer tools & manifestos', 'Contemporary art festivals'],
    specimen: {
      study: 'RYŪMA / STUDY 04',
      tagline: 'Raw velocity.',
      caption: 'Thick black stroke · 0px radius · solid drop-shadow',
      cta: 'PUNCH IN →'
    }
  },
  {
    id: 'neomorphism',
    number: '03',
    name: 'Neomorphism',
    era: '2020',
    heroTag: 'Sculpted from one surface.',
    shortDescription: 'Soft extruded plastic realism created with twin dual-directional light and shadow pairs.',
    description: 'Neomorphism treats the UI as a single continuous piece of pliable matte material. Elements do not float; they are pressed into or pushed out from the surface using paired shadows.',
    characteristics: [
      'Monochromatic surface-matching elements',
      'Paired light and dark drop-shadows',
      'Subtle convex and concave extrusions',
      'Tactile button depression states',
      'Low contrast, soft pastel presence'
    ],
    palette: [
      { name: 'Base Clay', hex: '#E0E5EC', role: 'Continuous substrate' },
      { name: 'Specular Highlight', hex: '#FFFFFF', role: 'Sun reflection (top-left)' },
      { name: 'Soft Umbra', hex: '#A3B1C6', role: 'Ambient occlusion (bottom-right)' },
      { name: 'Active Glow', hex: '#7650C7', role: 'Engaged indicator' }
    ],
    anatomy: {
      colour: { title: 'Substrate unity', explanation: 'Background and foreground share the exact same matte pigment.' },
      type: { title: 'Subtle deboss', explanation: 'Text blends into the surface with soft contrast and refined weight.' },
      form: { title: 'Pliable relief', explanation: 'Curved pill forms pushed outwards or stamped into the plane.' },
      space: { title: 'Generous clearance', explanation: 'Soft shadow plumes require wide breathing boundaries.' },
      motion: { title: 'Physical depression', explanation: 'Swapping outer drop-shadows for inner inset shadows on press.' }
    },
    principles: [
      { title: 'LIGHT SOURCE', subtitle: 'CONSISTENT VECTOR', detail: 'A simulated 45-degree top-left light source governs every highlight and shadow across the screen.' },
      { title: 'INTEGRAL SURFACE', subtitle: 'NO SEPARATE CARDS', detail: 'Controls are extruded from the same continuous sheet of material.' }
    ],
    layers: [
      { step: '01', title: 'SUBSTRATE', text: 'A neutral midtone canvas serves as both background and component.' },
      { step: '02', title: 'DUAL SHADOW', text: 'Light shadow on top-left, dark shadow on bottom-right creates extrusion.' }
    ],
    composition: 'Single-color canvas with dual shadow coordinates: -8px -8px white and +8px +8px soft grey.',
    applications: ['Smart home control dials', 'Audio hardware interfaces', 'Health biometric monitors', 'Minimalist calculators'],
    specimen: {
      study: 'RYŪMA / STUDY 03',
      tagline: 'Tactile relief.',
      caption: 'Continuous matte plane · dual light vectors · soft extruded controls',
      cta: 'TOUCH →'
    }
  },
  {
    id: 'skeuomorphism',
    number: '05',
    name: 'Skeuomorphism',
    era: '1984 — 2012',
    heroTag: 'Physical materials in digital glass.',
    shortDescription: 'Rich textures, brushed aluminum, leather stitching, and beveled realistic lighting.',
    description: 'Skeuomorphism bridges the physical and virtual worlds by mimicking tangible materials—polished glass, stitched leather, brushed metal, and mahogany dials.',
    characteristics: ['Realistic material textures', 'Deep multi-stop gradients', 'Complex bevels and inner shadows', 'Visual metaphors for real-world tools'],
    palette: [
      { name: 'Brushed Titanium', hex: '#7A808A', role: 'Metallic body' },
      { name: 'Amber Glow', hex: '#F5A623', role: 'Vacuum tube luminescence' },
      { name: 'Gloss Reflection', hex: '#E8ECEF', role: 'Specular glass curve' }
    ],
    anatomy: {
      colour: { title: 'Rich physical luster', explanation: 'Dynamic gradient fills imitating physical light falloff on matte metal.' },
      type: { title: 'Etched typography', explanation: 'Subtle text-shadows simulating debossed and stamped letterforms.' },
      form: { title: 'Beveled edges', explanation: 'Chiseled 3D borders with top highlights and bottom shadow bevels.' },
      space: { title: 'Tangible container', explanation: 'Component groupings resemble physical hardware chassis.' },
      motion: { title: 'Mechanical inertia', explanation: 'Rotary dials with physical momentum and mechanical clicks.' }
    },
    principles: [
      { title: 'MATERIAL FIDELITY', subtitle: 'REAL-WORLD ACCURACY', detail: 'Simulate natural physics, textures, and lighting behavior.' }
    ],
    layers: [
      { step: '01', title: 'TEXTURE', text: 'Realistic material grain provides organic warmth.' },
      { step: '02', title: 'BEVEL & EMBOSS', text: 'Highlights and shadows carve physical volume.' }
    ],
    composition: 'Heavy gradient maps, inner glows, directional highlights, and etched borders.',
    applications: ['Music production DAWs', 'Audio synthesizer emulators', 'Fine watch faces', 'Classic book readers'],
    specimen: {
      study: 'RYŪMA / STUDY 05',
      tagline: 'Physical memory.',
      caption: 'Tactile grain · etched bevels · tangible hardware warmth',
      cta: 'INSPECT →'
    }
  },
  {
    id: 'flat-design',
    number: '06',
    name: 'Flat Design',
    era: '2012 — 2016',
    heroTag: 'Zero illusion. Pure color.',
    shortDescription: 'Total rejection of 3D depth in favor of vibrant hues, simple silhouettes, and digital purity.',
    description: 'Flat design banished drop-shadows, gradients, and textures in favor of clean 2D vector shapes, clear typography, and bright saturated palettes.',
    characteristics: ['Zero gradients or shadows', 'Bold chromatic color blocking', 'Geometric clarity', 'Crisp icon silhouettes'],
    palette: [
      { name: 'Turquoise', hex: '#1ABC9C', role: 'Primary action' },
      { name: 'Emerald', hex: '#2ECC71', role: 'Success flag' },
      { name: 'Midnight Navy', hex: '#2C3E50', role: 'Container grounding' },
      { name: 'Sun Yellow', hex: '#F1C40F', role: 'Vibrant highlight' }
    ],
    anatomy: {
      colour: { title: 'Pure digital chromaticism', explanation: 'Unblended flat fills with uncompromising vibrancy.' },
      type: { title: 'Friendly sans-serif', explanation: 'High legibility geometric type with generous x-height.' },
      form: { title: 'Elementary geometry', explanation: 'Pure circles, squares, and clean rounded badges.' },
      space: { title: 'Balanced blocks', explanation: 'Consistent padding separating bold color fields.' },
      motion: { title: 'Snappy flips', explanation: 'Crisp card transitions without physics blur.' }
    },
    principles: [
      { title: 'DIGITAL PURITY', subtitle: 'HONEST SCREENS', detail: 'Never pretend a flat glass display has physical depth or bevels.' }
    ],
    layers: [
      { step: '01', title: 'SILHOUETTE', text: 'Clean vector shapes communicate instantly without decoration.' }
    ],
    composition: 'Color-blocked tiles with uniform flat fills and zero ambient occlusion.',
    applications: ['Early Windows Phone / Metro', 'Modern infographics', 'Mobile dashboards', 'Icon design systems'],
    specimen: {
      study: 'RYŪMA / STUDY 06',
      tagline: 'Digital canvas.',
      caption: 'Zero drop-shadow · bold color blocking · pure vector clarity',
      cta: 'VIEW →'
    }
  },
  {
    id: 'material-design',
    number: '07',
    name: 'Material Design',
    era: '2014 — Present',
    heroTag: 'Digital paper & ink in space.',
    shortDescription: 'A systematic design language based on physical sheets of virtual paper floating in simulated 3D space.',
    description: 'Developed by Google, Material Design systematizes elevation, responsive animations, dynamic color tokens, and tactile paper physics.',
    characteristics: ['Elevation z-axis shadows (1dp to 24dp)', 'Material ripples on touch', 'Floating Action Buttons (FAB)', 'Predictable component hierarchy', 'Dynamic M3 tonal palettes'],
    palette: [
      { name: 'Primary Indigo', hex: '#3F51B5', role: 'Key brand tone' },
      { name: 'Secondary Coral', hex: '#FF5722', role: 'Accent ripple' },
      { name: 'Surface White', hex: '#FFFFFF', role: 'Virtual paper plane' },
      { name: 'Elevation Shadow', hex: 'rgba(0,0,0,0.14)', role: 'Z-depth cue' }
    ],
    anatomy: {
      colour: { title: 'Tonal harmonic systems', explanation: 'Primary, secondary, and tertiary containers mapped by luminosity.' },
      type: { title: 'Systematic scale', explanation: 'Display, headline, title, body, and label tiers.' },
      form: { title: 'Structured sheets', explanation: 'Smooth 12–28dp rounded cards floating at calibrated elevations.' },
      space: { title: '8dp spatial grid', explanation: 'Every margin, padding, and gap snaps to the 8dp cadence.' },
      motion: { title: 'Choreographed choreo', explanation: 'Elements expand from the point of touch with custom decelerated curves.' }
    },
    principles: [
      { title: 'MATERIAL IS THE METAPHOR', subtitle: 'DIGITAL PAPER', detail: 'Surfaces exist in a 3D coordinate space with realistic cast shadows.' }
    ],
    layers: [
      { step: '01', title: 'SURFACE', text: 'Paper sheets provide uniform canvas.' },
      { step: '02', title: 'ELEVATION', text: 'Z-axis cast shadow indicates interactive priority.' }
    ],
    composition: 'Grid aligned cards with elevation shadows, FABs, and ripple touch targets.',
    applications: ['Android OS', 'Google Workspace applications', 'Enterprise design systems', 'E-commerce checkout funnels'],
    specimen: {
      study: 'RYŪMA / STUDY 07',
      tagline: 'Elevated paper.',
      caption: '8dp spatial grid · elevation z-shadows · dynamic tonal system',
      cta: 'INTERACT →'
    }
  },
  {
    id: 'fluent-design',
    number: '08',
    name: 'Fluent Design',
    era: '2017 — Present',
    heroTag: 'Light, depth, motion, material, scale.',
    shortDescription: 'Microsoft’s acrylic material system combining reveal lighting, connected animations, and depth.',
    characteristics: ['Acrylic noise texture surfaces', 'Reveal hover glow borders', 'Connected animations', 'Subtle 3D layering', 'Mica material integration'],
    palette: [
      { name: 'Windows Blue', hex: '#0078D4', role: 'System accent' },
      { name: 'Acrylic Grey', hex: '#F3F3F3', role: 'Mica translucent substrate' },
      { name: 'Reveal Glow', hex: 'rgba(255,255,255,0.4)', role: 'Cursor illumination' }
    ],
    anatomy: {
      colour: { title: 'Luminous tinting', explanation: 'Subtle accent color bleeding through acrylic textures.' },
      type: { title: 'Segoe typography', explanation: 'Clear humanistic sans-serif with calm balance.' },
      form: { title: 'Soft chamfered cards', explanation: 'Delicate 8px corner radii with light borders.' },
      space: { title: 'Organized navigation rails', explanation: 'Split-view hierarchical navigation with acrylic sidebars.' },
      motion: { title: 'Connected choreography', explanation: 'Shared element transitions fluidly morphing between views.' }
    },
    principles: [
      { title: 'REVEAL HIGHLIGHT', subtitle: 'CURSOR AWARENESS', detail: 'Light follows the cursor, illuminating boundaries as the user explores.' }
    ],
    layers: [
      { step: '01', title: 'ACRYLIC', text: 'Multi-layer frosted surface blending noise and backdrop.' }
    ],
    composition: 'Mica base with acrylic flyouts, reveal lighting borders, and connected page transitions.',
    applications: ['Windows 11 interface', 'Xbox dashboard', 'Microsoft 365 suites', 'Enterprise desktop software'],
    specimen: {
      study: 'RYŪMA / STUDY 08',
      tagline: 'Luminous acrylic.',
      caption: 'Reveal lighting · mica substrate · connected transitions',
      cta: 'EXPLORE →'
    }
  },
  {
    id: 'claymorphism',
    number: '09',
    name: 'Claymorphism',
    era: '2021 — Present',
    heroTag: 'Friendly 3D matte toy clay.',
    shortDescription: 'Chubby inflated buttons, candy pastels, and fluffy dual inner shadows resembling sculpted modeling clay.',
    characteristics: ['Extreme rounded corners (pill & bubble forms)', 'Chubby dual inner shadows (top light, bottom dark)', 'Soft pastel color palette', 'Playful toy-like tactile friendliness'],
    palette: [
      { name: 'Pastel Lilac', hex: '#B8C1EC', role: 'Primary clay pill' },
      { name: 'Bubble Pink', hex: '#EEBBC3', role: 'Puffy button' },
      { name: 'Soft Cream', hex: '#FFFFFE', role: 'Playful backdrop' }
    ],
    anatomy: {
      colour: { title: 'Sweet confectionery', explanation: 'Warm, inviting marshmallow pastels that feel welcoming.' },
      type: { title: 'Rounded friendly typography', explanation: 'Bouncy, heavy sans-serif with rounded stroke terminals.' },
      form: { title: 'Inflated balloons', explanation: 'Volumetric pill forms with 32px+ radii.' },
      space: { title: 'Spacious padding', explanation: 'Generous negative room around inflated clay components.' },
      motion: { title: 'Bouncy squish', explanation: 'Elastic physics with springy overshoot upon interaction.' }
    },
    principles: [
      { title: 'CHUBBY VOLUMETRICS', subtitle: 'MATTE INFLATION', detail: 'Inner shadows simulate inflated silicone or modeling clay.' }
    ],
    layers: [
      { step: '01', title: 'INNER HIGHLIGHT', text: 'Top-left white inner shadow gives puffy roundness.' },
      { step: '02', title: 'INNER SHADOW', text: 'Bottom-right darker inner shadow establishes 3D depth.' }
    ],
    composition: 'Volumetric clay pills, 32px border radius, double inner shadows, and soft ambient drop shadows.',
    applications: ['EdTech for children', 'Fintech for Gen Z', 'Gamified fitness apps', 'Casual 3D web games'],
    specimen: {
      study: 'RYŪMA / STUDY 09',
      tagline: 'Inflated softness.',
      caption: 'Matte clay volumes · twin inner shadows · marshmallow pastels',
      cta: 'SQUISH →'
    }
  },
  {
    id: 'aurora-gradient',
    number: '10',
    name: 'Aurora Gradient Design',
    era: '2021 — Present',
    heroTag: 'Northern lights in perpetual drift.',
    shortDescription: 'Dynamic organic color fields that bloom, shift, and diffuse like atmospheric plasma.',
    characteristics: ['Vibrant multi-color fluid gradients', 'Atmospheric mesh blur (60px–120px)', 'Slow organic ambient drift', 'High contrast white typography overlay'],
    palette: [
      { name: 'Aurora Cyan', hex: '#00F5D4', role: 'Ionized stream' },
      { name: 'Plasma Pink', hex: '#7B2CBF', role: 'Deep nebula' },
      { name: 'Solar Orange', hex: '#FF70A6', role: 'Radiant burst' },
      { name: 'Deep Space', hex: '#0B090A', role: 'Cosmic backdrop' }
    ],
    anatomy: {
      colour: { title: 'Chromatic fusion', explanation: 'Multi-stop mesh blending saturated spectral hues.' },
      type: { title: 'Crisp white contrast', explanation: 'Pure white sharp typography floating over shifting light.' },
      form: { title: 'Amorphous plasma', explanation: 'Non-geometric organic blobs morphing continuously.' },
      space: { title: 'Boundless expanse', explanation: 'Gradient bleeding edge-to-edge without hard containment.' },
      motion: { title: 'Continuous cosmic drift', explanation: 'Gentle 15–30 second looping sinusoidal translations.' }
    },
    principles: [
      { title: 'ATMOSPHERIC DIFFUSION', subtitle: 'LIGHT BLENDING', detail: 'Deep gaussian filters turn discrete color shapes into glowing plasma.' }
    ],
    layers: [
      { step: '01', title: 'COLOR BLOBS', text: 'Saturated color shapes positioned in radial clusters.' },
      { step: '02', title: 'GAUSSIAN DIFFUSION', text: '80px blur merges transitions into seamless aurora glow.' }
    ],
    composition: 'Sinusoidally animated CSS radial mesh gradients with ultra-high contrast crisp white typography.',
    applications: ['AI assistant landing pages', 'Creative agency heroes', 'Fintech innovation portals', 'Music streaming hubs'],
    specimen: {
      study: 'RYŪMA / STUDY 10',
      tagline: 'Atmospheric light.',
      caption: 'Dynamic mesh blur · radiant spectra · perpetual gentle drift',
      cta: 'IMMERSE →'
    }
  },
  {
    id: 'dark-ui',
    number: '11',
    name: 'Dark UI',
    era: '2019 — Present',
    heroTag: 'Luminance in the shadows.',
    shortDescription: 'Deep charcoal canvases that reduce eye strain and make vibrant accents and typography pop.',
    characteristics: ['Deep charcoal / obsidian background (#121218)', 'Elevation via tonal lightness rather than shadows', 'Vibrant neon and jewel-toned accents', 'Subtle 1px boundary borders for edge clarity'],
    palette: [
      { name: 'Obsidian Black', hex: '#121218', role: 'Canvas floor' },
      { name: 'Elevated Charcoal', hex: '#1E1E28', role: 'Card surface' },
      { name: 'Bioluminescent Purple', hex: '#9D4EDD', role: 'Accent vector' },
      { name: 'High-Purity Text', hex: '#F0F0F5', role: 'Primary legibility' }
    ],
    anatomy: {
      colour: { title: 'Controlled luminescence', explanation: 'Surfaces grow lighter as they rise in elevation.' },
      type: { title: 'Anti-glare balance', explanation: 'Off-white text (87% opacity) prevents blinding halo effects.' },
      form: { title: 'Subtle boundary lines', explanation: '1px borders at 10% opacity define card edges in low light.' },
      space: { title: 'Focused isolation', explanation: 'Dark canvases absorb peripheral noise, focusing gaze directly on data.' },
      motion: { title: 'Phosphor glow reveals', explanation: 'Smooth neon glow pulses and gentle fade transitions.' }
    },
    principles: [
      { title: 'ELEVATION BY LIGHTNESS', subtitle: 'TONAL CLIMB', detail: 'In dark mode, elevated surfaces are lighter gray, not shadowed.' }
    ],
    layers: [
      { step: '01', title: 'BASE CANVAS', text: 'Deep obsidian floor reduces eye fatigue in low ambient environments.' },
      { step: '02', title: 'ELEVATION TIER', text: 'Subtle lightness steps differentiate modal cards and sidebars.' }
    ],
    composition: 'Dark charcoal container layers, 1px translucent borders, glowing neon telemetry and pristine typography.',
    applications: ['Developer IDEs & terminals', 'Trading platforms & crypto trackers', 'Video editing suites', 'Night-time reading apps'],
    specimen: {
      study: 'RYŪMA / STUDY 11',
      tagline: 'Focused clarity.',
      caption: 'Obsidian canvas · elevation by luminance · glowing data accents',
      cta: 'ILLUMINATE →'
    }
  },
  {
    id: 'maximalism',
    number: '12',
    name: 'Maximalism',
    era: 'Counter-Cultural / 2022+',
    heroTag: 'More is more. Never apologize.',
    shortDescription: 'Visual overload, dense layers, electric clashes, sticker chaos, and unapologetic energy.',
    characteristics: ['Dense visual packing', 'Colliding patterns and textures', 'Extreme scale contrast', 'Overlapping graphic elements', 'Joyful sensory abundance'],
    palette: [
      { name: 'Shocking Magenta', hex: '#FF007F', role: 'High energy' },
      { name: 'Electric Cyan', hex: '#00F0FF', role: 'Clashing pulse' },
      { name: 'Acid Lime', hex: '#CCFF00', role: 'Screaming callout' },
      { name: 'Ultra Violet', hex: '#7928CA', role: 'Pattern base' }
    ],
    anatomy: {
      colour: { title: 'Hyper-saturated banquet', explanation: 'Zero restraint; multiple saturated primaries compete simultaneously.' },
      type: { title: 'Typographic explosion', explanation: 'Mixed serifs, fat grotesques, and warped lettering colliding in one layout.' },
      form: { title: 'Kaleidoscopic layering', explanation: 'Stickers, stamps, badges, and illustrations overlapping chaotically.' },
      space: { title: 'Anti-whitespace', explanation: 'Every square inch is activated with pattern, micro-copy, or glyphs.' },
      motion: { title: 'Frenetic vibrancy', explanation: 'Wiggles, marquees, rotations, and bouncing micro-interactions.' }
    },
    principles: [
      { title: 'CELEBRATION OF EXCESS', subtitle: 'SENSORY IMMERSION', detail: 'Reject boring corporate blandness with exuberant, layered vitality.' }
    ],
    layers: [
      { step: '01', title: 'BASE COLLAGE', text: 'Rich texture and clashing patterns establish vibrant texture.' }
    ],
    composition: 'Multi-layer graphic collages, diagonal stickers, rotating badges, and animated marquee tickers.',
    applications: ['Festival websites', 'Fashion lookbooks', 'Gen-Z community platforms', 'Creative portfolio extravaganzas'],
    specimen: {
      study: 'RYŪMA / STUDY 12',
      tagline: 'Visual feast.',
      caption: 'Colliding primaries · layered stickers · anti-whitespace vitality',
      cta: 'EXPLODE →'
    }
  },
  {
    id: 'retro-vintage',
    number: '13',
    name: 'Retro / Vintage',
    era: '1970s — 1980s Warmth',
    heroTag: 'Analog warmth in a digital era.',
    shortDescription: 'Warm earth tones, subtle halftones, classic serifs, and nostalgic analog printing textures.',
    characteristics: ['Warm paper & sepia color palettes', 'Halftone dot patterns & grain', 'Curved serif typography with swashes', 'Analog badge seals and stamps'],
    palette: [
      { name: 'Warm Cream', hex: '#F7F2E7', role: 'Aged newsprint' },
      { name: 'Burnt Sienna', hex: '#C85A32', role: 'Terracotta title' },
      { name: 'Forest Moss', hex: '#2D4B3E', role: 'Deep foliage' },
      { name: 'Mustard Gold', hex: '#DCAE42', role: 'Heritage badge' }
    ],
    anatomy: {
      colour: { title: 'Sun-drenched nostalgia', explanation: 'Earthy pigments that feel dried under sunlight and printed on cotton rag.' },
      type: { title: 'Heritage serifs', explanation: 'Humanist serif typefaces with organic curves and ink-trap details.' },
      form: { title: 'Embossed crests & badges', explanation: 'Scalloped ribbons, arched headers, and decorative border filigree.' },
      space: { title: 'Classic book proportions', explanation: 'Golden-ratio margins evoking mid-century book publishing.' },
      motion: { title: 'Warm analog flicker', explanation: 'Gentle dissolve transitions mimicking projector slides.' }
    },
    principles: [
      { title: 'TIMELESS HUMANITY', subtitle: 'HANDCRAFTED GRAIN', detail: 'Imperfections, textures, and warm tones bring comforting soul.' }
    ],
    layers: [
      { step: '01', title: 'PAPER GRAIN', text: 'Soft analog noise overlay simulating vintage newsprint.' }
    ],
    composition: 'Cream backdrop with halftone texture, terracotta headlines, and circular heritage seal badges.',
    applications: ['Artisanal coffee roasters', 'Boutique vinyl audio labels', 'Heritage craft brands', 'Literary reviews'],
    specimen: {
      study: 'RYŪMA / STUDY 13',
      tagline: 'Analog soul.',
      caption: 'Aged newsprint · terracotta pigments · humanist ink curves',
      cta: 'RECALL →'
    }
  },
  {
    id: 'y2k',
    number: '14',
    name: 'Y2K Aesthetic',
    era: '1998 — 2004',
    heroTag: 'Cyber-optimism of the turn of the millennium.',
    shortDescription: 'Chrome metallic textures, bubble typography, iridescent sheen, and futuristic techno-optimism.',
    characteristics: ['Chrome metallic text & bevels', 'Translucent plastic blob forms', 'Star glitter and cross-sparkles', 'High-gloss bubble capsules', 'Silver, icy blue, and cyber-pink sheen'],
    palette: [
      { name: 'Chrome Silver', hex: '#D8DEE9', role: 'Metallic liquid' },
      { name: 'Cyber Icy Blue', hex: '#70D6FF', role: 'Millennium sky' },
      { name: 'Bubblegum Fuchsia', hex: '#FF70A6', role: 'Optimism pulse' },
      { name: 'Matrix Black', hex: '#0D1117', role: 'Techno depth' }
    ],
    anatomy: {
      colour: { title: 'Holographic iridescence', explanation: 'Futuristic silver gradients blended with icy blues and fluorescent pinks.' },
      type: { title: 'Bubble cyber display', explanation: 'Chunky techno-fonts, metallic shine, and rounded pill characters.' },
      form: { title: 'Organic aerodynamic blobs', explanation: 'Futuristic capsules inspired by the original translucent iMac G3.' },
      space: { title: 'Dynamic starfield framing', explanation: 'Floating capsules interspersed with four-point glitter sparkles.' },
      motion: { title: 'Glitter spin & bubble float', explanation: 'Continuous slow sparkle rotations and liquid-jelly bobbing.' }
    },
    principles: [
      { title: 'TECHNO-OPTIMISM', subtitle: 'MILLENNIAL WONDER', detail: 'Celebrates the futuristic excitement of the early digital frontier.' }
    ],
    layers: [
      { step: '01', title: 'CHROME SPECULAR', text: 'Multi-stop metallic gradients give objects liquid metal sheen.' },
      { step: '02', title: 'CYBER SPARKLES', text: 'Rotating four-point star sparkles evoke optimistic digital wonder.' }
    ],
    composition: 'Metallic chrome typography, floating iridescent jelly capsules, and animated cyber sparkle stars.',
    applications: ['Contemporary music releases', 'Streetwear e-commerce', 'Creative portfolio web experiments', 'Youth culture magazines'],
    specimen: {
      study: 'RYŪMA / STUDY 14',
      tagline: 'Chrome future.',
      caption: 'Liquid chrome · iridescent capsules · cyber-optimism sparkles',
      cta: 'WARP IN →'
    }
  },
  {
    id: 'memphis-design',
    number: '15',
    name: 'Memphis Design',
    era: '1981 — 1988 / Modern Revival',
    heroTag: 'Rebellious geometry and playful chaos.',
    shortDescription: 'Squiggles, polka dots, clashing geometric primitives, and radical post-modern irony.',
    characteristics: ['Bacterio squiggles and confetti patterns', 'Bold primary and pastel collisions', 'Floating circles, zig-zags, and triangles', 'Thick graphic borders with playful tilts'],
    palette: [
      { name: 'Milano Coral', hex: '#FF5964', role: 'Warm post-modern pop' },
      { name: 'Lemonade Yellow', hex: '#FFE74C', role: 'Electric spark' },
      { name: 'Aegean Teal', hex: '#35A7FF', role: 'Vibrant companion' },
      { name: 'Ink Graphic', hex: '#2E2D4D', role: 'Squiggle outlines' }
    ],
    anatomy: {
      colour: { title: 'Radical contrast clash', explanation: 'Yellow, coral, and teal dancing against zebra graphic squiggles.' },
      type: { title: 'Geometric sans with personality', explanation: 'Playful wide sans-serif with quirky angular counter-forms.' },
      form: { title: 'Colliding geometric primitives', explanation: 'Triangles balancing on spheres, undulating squiggles, and zig-zags.' },
      space: { title: 'Confetti scatter', explanation: 'Randomized joyful scatter rhythm across the entire field.' },
      motion: { title: 'Whimsical hop', explanation: 'Pop-in bounces and 360-degree cartoonish spins.' }
    },
    principles: [
      { title: 'PLAYFUL REBELLION', subtitle: 'DOWN WITH GOOD TASTE', detail: 'Sottsass-inspired freedom from boring modernist uniformity.' }
    ],
    layers: [
      { step: '01', title: 'CONFETTI GROUND', text: 'Geometric squiggles and polka dot patterns fill empty canvas space.' }
    ],
    composition: 'Asymmetrical floating geometric primitives, zig-zag lines, and bright multi-color blocks.',
    applications: ['Creative design tools', 'Interactive games', 'Youth fashion campaigns', 'Children’s museums'],
    specimen: {
      study: 'RYŪMA / STUDY 15',
      tagline: 'Joyful rebellion.',
      caption: 'Geometric squiggles · colliding primaries · confetti pattern rhythm',
      cta: 'PLAY →'
    }
  },
  {
    id: 'editorial-design',
    number: '16',
    name: 'Editorial Design',
    era: 'Classic Print to Digital',
    heroTag: 'The elegance of the printed page.',
    shortDescription: 'Refined serif typography, high-contrast column grids, delicate rule lines, and literary prestige.',
    characteristics: ['High-contrast serif display typography', 'Delicate 1px hairline rules', 'Multi-column journalistic layouts', 'Subtle drop-caps and pull-quotes', 'Refined off-white paper canvas'],
    palette: [
      { name: 'Classic Parchment', hex: '#FAF9F6', role: 'Archival ground' },
      { name: 'Printer’s Carbon', hex: '#1C1B1F', role: 'Editorial ink' },
      { name: 'Vermilion Accent', hex: '#D83A2A', role: 'Journalistic callout' },
      { name: 'Warm Taupe', hex: '#8A857D', role: 'Metadata captions' }
    ],
    anatomy: {
      colour: { title: 'Ink on parchment', explanation: 'Near-black on archival paper with rare vermilion punctuation.' },
      type: { title: 'Prestigious serif hierarchy', explanation: 'High-contrast editorial serif paired with restrained modern grotesque.' },
      form: { title: 'Hairline rule architecture', explanation: 'Whisper-thin 1px dividers framing headlines and columns.' },
      space: { title: 'Journalistic columnation', explanation: 'Generous margins, justified gutters, and dramatic pull-quote breaks.' },
      motion: { title: 'Page-turn stillness', explanation: 'Extremely understated fade-ins that honor the quiet dignity of reading.' }
    },
    principles: [
      { title: 'LITERARY DIGNITY', subtitle: 'TYPOGRAPHIC REFINEMENT', detail: 'Words and ideas are celebrated as sacred cultural artifacts.' }
    ],
    layers: [
      { step: '01', title: 'HAIRLINE ARCHITECTURE', text: 'Crisp 1px horizontal and vertical rules partition journalistic thoughts.' }
    ],
    composition: 'Multi-column grid, drop-cap introduction, pull-quote callout, and hairline dividing rules.',
    applications: ['Literary publications & essays', 'High-end investigative journals', 'Boutique architectural monographs', 'Thought leadership platforms'],
    specimen: {
      study: 'RYŪMA / STUDY 16',
      tagline: 'Architectural words.',
      caption: 'Archival paper · hairline grid rules · high-contrast literary serifs',
      cta: 'READ →'
    }
  },
  {
    id: 'organic-natural',
    number: '17',
    name: 'Organic / Natural Design',
    era: 'Biophilic / Contemporary',
    heroTag: 'Earthy harmony and bio-morphic curves.',
    shortDescription: 'Sage greens, warm terracotta, soft pebble curves, and calming biophilic tranquility.',
    characteristics: ['Pebble & river-stone rounded geometries', 'Warm earthy botanical palettes', 'Soft natural shadows & diffuse daylight', 'Calming bio-centric whitespace'],
    palette: [
      { name: 'Botanical Sage', hex: '#7D8C7C', role: 'Living foliage' },
      { name: 'Warm Terracotta', hex: '#B8735C', role: 'Clay earth' },
      { name: 'Soft Sandstone', hex: '#F4F1EA', role: 'Riverbed floor' },
      { name: 'Deep Bark', hex: '#3B332E', role: 'Organic anchor' }
    ],
    anatomy: {
      colour: { title: 'Biophilic balance', explanation: 'Sage, clay, and sand evoking serene forests and rocky coastlines.' },
      type: { title: 'Gentle humanism', explanation: 'Warm, low-contrast letterforms with generous soft curves.' },
      form: { title: 'River-stone asymmetry', explanation: 'Pebble contours with non-uniform radius curves.' },
      space: { title: 'Expansive natural clearing', explanation: 'Generous negative space creating psychological tranquility.' },
      motion: { title: 'Gentle ocean breeze', explanation: 'Slow, breathing swells with long cubic-bezier deceleration.' }
    },
    principles: [
      { title: 'BIOPHILIC RESTORATION', subtitle: 'CALM LIVING RHYTHMS', detail: 'Digital environments that restore focus rather than provoke dopamine overload.' }
    ],
    layers: [
      { step: '01', title: 'PEBBLE FORMS', text: 'Asymmetric soft curves mimic stones smoothed by flowing water.' }
    ],
    composition: 'Asymmetrical pebble shapes, soft sandstone canvas, sage accents, and serene botanical typography.',
    applications: ['Mindfulness & meditation tools', 'Sustainable lifestyle brands', 'Natural skincare studios', 'Slow food publications'],
    specimen: {
      study: 'RYŪMA / STUDY 17',
      tagline: 'Living serenity.',
      caption: 'Pebble contours · sage & terracotta · biophilic breathing room',
      cta: 'BREATHE →'
    }
  }
];

export const FIVE_SYSTEMS = [
  {
    id: 'colour',
    number: '01',
    name: 'COLOUR',
    japanese: '色',
    tagline: 'Sets the mood, creates emphasis and shapes perception.',
    detail: 'Colour is emotional frequency. It establishes instantaneous subconscious atmosphere, guides eyes through contrast gradients, and encodes functional status.'
  },
  {
    id: 'type',
    number: '02',
    name: 'TYPE',
    japanese: '文字',
    tagline: 'Gives a design its voice, rhythm and hierarchy.',
    detail: 'Type is the visible voice of thought. Proportions, optical weight, tracking, and leading orchestrate reading cadence and intellectual authority.'
  },
  {
    id: 'form',
    number: '03',
    name: 'FORM',
    japanese: '形態',
    tagline: 'Creates shape, structure and visual character.',
    detail: 'Form defines physical presence. Sharp geometric edges evoke precision and urgency, while organic contours create approachable human warmth.'
  },
  {
    id: 'space',
    number: '04',
    name: 'SPACE',
    japanese: '空間 / 間',
    tagline: 'Builds rhythm, focus and room to breathe.',
    detail: 'The Japanese concept of Ma (間)—the negative space between objects is not an empty void, but an active participant that allows forms to resonate.'
  },
  {
    id: 'motion',
    number: '05',
    name: 'MOTION',
    japanese: '動き',
    tagline: 'Brings the system alive through movement and response.',
    detail: 'Motion confirms causality. Easing curves, timing thresholds, and directional choreographies turn static layout into an interactive living ecology.'
  }
];
