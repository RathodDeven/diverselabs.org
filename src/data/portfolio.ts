import type { Doc } from './content';
import { ENRICHED } from './portfolio.content';
import hiddenJson from './portfolio.hidden.json';
import localBlockData from './portfolio.local.json';

/**
 * LIVE visibility control. Slugs listed here are committed and therefore
 * EXCLUDED from the deployed (static) build, the index drops them and their
 * detail pages aren't generated. Locally (`astro dev`) they still render, marked
 * "Hidden from live", with a Hide/Unhide button that rewrites this file via a
 * dev-only middleware (see astro.config.mjs). Push to apply on live.
 */
export const HIDDEN: string[] = ((hiddenJson as { hidden?: string[] })?.hidden ?? []);
export const isHidden = (slug: string): boolean => HIDDEN.includes(slug);

/**
 * Priyam Haryani, independent advisory portfolio (HIDDEN page).
 *
 * Reconstructed from real pharma/biotech operations engagements, but every
 * entry is ANONYMIZED: no client names, no product names, no internal
 * codenames, no confidential financials or patient figures. Clients are
 * described by sector/stage only. Numbers are qualitative facts about the work
 * (e.g. "5 plan iterations"), never fabricated outcomes.
 *
 * These render at /portfolio/priyam-haryani/<slug> via the same ArticleShell /
 * ContentBlocks used by /work, but the section is excluded from the sitemap,
 * marked noindex, and not linked anywhere in the site nav.
 */

const AUTHOR = 'Priyam Haryani';

export const portfolioCaseStudies: Doc[] = [
  /* ───────────────────────── 1 · Gene therapy launch readiness ───────────────────────── */
  {
    slug: 'gene-therapy-launch-readiness',
    collection: 'work',
    type: 'case-study',
    title: 'Standing up the commercial supply chain for a first-in-class gene therapy launch',
    crumb: 'Gene therapy launch readiness',
    seoTitle: 'Gene Therapy Commercial Launch Supply Chain, Case Study',
    description:
      'A first gene-therapy launch needed a fit-for-purpose commercial supply chain, from a risk & gap assessment to a demand-capacity model and a labelling-and-kitting operation.',
    keywords: 'gene therapy supply chain, commercial launch readiness, labelling and kitting, demand capacity model, S&OP, CDMO governance',
    eyebrow: 'Gene therapy · Commercial launch readiness · Commercial-stage gene therapy (~$2B)',
    dek: 'A commercial-stage gene therapy company was preparing its first launch and needed a unique, fit-for-purpose commercial supply chain. The engagement grew from a one-off gap assessment into an enduring launch-readiness and capability-building program.',
    tags: ['Supply chain', 'Launch readiness', 'CDMO governance', 'S&OP'],
    heroStat: { value: '4-area', label: 'supply-chain readiness framework delivered' },
    datePublished: '2025-01-15',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'The client needed a launch-readiness assessment for a unique commercial supply chain, labeling/kitting, order management, distribution and demand planning, for a potentially blockbuster therapy. The kickoff scoped a <strong>Supply Chain Risk & Gap Assessment</strong> across three pillars: core process & scenario planning; resources, governance & partnerships; and launch timelines & change planning, all delivered with a deliberate "teach-to-fish" capability-building approach.',
      },
      {
        kind: 'flow',
        title: 'How the program progressed',
        steps: [
          { label: 'Activity map & gap assessment', sub: 'Labeling/kitting, OM, distribution, demand' },
          { label: 'Executive updates', sub: 'Methodology, gaps, solution catalogue' },
          { label: 'Demand–capacity model', sub: 'Forecast + capacity, S&OP design' },
          { label: 'CDMO joint planning', sub: 'Capacity analysis, process review' },
          { label: 'Labelling & kitting', sub: 'Suite, vision-system and flow design' },
        ],
        caption: 'A one-off launch assessment matured into ongoing supply-chain capability building across future products.',
      },
      {
        kind: 'callouts',
        title: 'What was built',
        items: [
          { title: 'Evaluation framework', body: 'A gap framework and readiness checklist that turned a fuzzy launch question into a prioritized, scored program.' },
          { title: 'Demand–capacity model', body: 'Demand forecast and capacity modeling, with a demand-capacity graph and scenario analysis, feeding a new S&OP process and a design hand-off calendar.' },
          { title: 'Labelling & kitting operation', body: 'A finishing-suite and vision-system flow design for patient-specific labelling and kitting, linked to a planning and operations dashboard.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Assessment', items: ['Risk & gap assessment', 'Activity maps', 'Functional timelines', 'Readiness checklist', 'Solution catalogue'] },
          { label: 'Planning', items: ['Demand–capacity model', 'S&OP process', 'Hand-off calendar', 'KPIs / RACIs'] },
          { label: 'Operate', items: ['Labelling & kitting flow', 'Operations dashboards', 'Batch tracking'] },
        ],
      },
    ],
  },

  /* ───────────────────────── 2 · Oncology commercial launch supply ───────────────────────── */
  {
    slug: 'oncology-commercial-launch-supply',
    collection: 'work',
    type: 'case-study',
    title: 'Commercial launch supply planning and 3PL selection ahead of an oncology NDA',
    crumb: 'Oncology launch supply',
    seoTitle: 'Oncology Commercial Launch Supply Plan & 3PL Selection',
    description:
      'End-to-end commercial launch supply planning for an oncology therapy, multiple plan iterations, a launch-readiness playbook, CMC batch analysis, and 3PL / pack-and-label selection.',
    keywords: 'commercial launch supply plan, oncology launch readiness, 3PL selection, demand supply modeling, pack and label RFP',
    eyebrow: 'Oncology · Launch supply & 3PL · Clinical-stage oncology biotech (pre-product revenue)',
    dek: 'An oncology biopharma approaching its NDA needed an end-to-end commercial launch supply plan. The work evolved from a demand backbone into a launch-readiness playbook, packaging and NDC architecture, and supplier selection for commercial launch.',
    tags: ['Launch supply', 'Demand–supply modeling', '3PL selection', 'Commercial readiness'],
    heroStat: { value: 'Iterated', label: 'launch supply plan, kickoff to selection' },
    datePublished: '2026-02-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'With the therapy heading toward an NDA and US launch, the client needed an end-to-end commercial launch supply plan. The first plan established the backbone: patient-based demand, dose/presentation economics, and base / upside / downside demand scenarios.',
      },
      {
        kind: 'flow',
        title: 'From plan to launch readiness',
        steps: [
          { label: 'Launch supply plan', sub: 'Demand backbone + scenarios' },
          { label: 'Demand–supply plan', sub: 'Production, obsolescence, capacity' },
          { label: 'Commercial playbook', sub: 'Roadmap to launch readiness' },
          { label: 'CMC batch analysis', sub: 'Supply feasibility' },
          { label: '3PL + pack-label selection', sub: 'Scorecard, TCO, recommendation' },
        ],
      },
      {
        kind: 'split',
        title: 'Why it worked',
        before: {
          label: 'Before',
          points: ['Strategy and supply planned separately', 'No single launch source of truth', 'Vendor choices made late and ad hoc'],
        },
        after: {
          label: 'After',
          points: ['One demand-to-supply model', 'A Day-1 launch-readiness playbook', 'A structured, scored 3PL & pack-label selection'],
        },
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Plan', items: ['Launch supply plan (iterated through several versions)', 'Production & inventory plans', 'Scenario & obsolescence planning'] },
          { label: 'Readiness', items: ['Commercial playbook', 'Packaging & NDC architecture', 'CMC batch analysis', 'Capacity planning'] },
          { label: 'Select', items: ['3PL scorecard & TCO', 'Selection recommendation', 'Pack-&-label RFP'] },
        ],
      },
    ],
  },

  /* ───────────────────────── 3 · R&D quality operating model ───────────────────────── */
  {
    slug: 'rnd-quality-operating-model',
    collection: 'work',
    type: 'case-study',
    title: 'Redesigning an R&D quality operating model after a major reorganization',
    crumb: 'R&D quality operating model',
    seoTitle: 'R&D Quality Operating Model & Oversight, Case Study',
    description:
      'After a reorg blurred who-does-what across embedded quality teams, a structured diagnostic produced a maturity model, a future-state operating model, and an implementation plan.',
    keywords: 'R&D quality operating model, quality oversight, quality maturity model, operating model assessment, governance design',
    eyebrow: 'Large pharma · R&D quality · Global biopharma (~$30B revenue)',
    dek: 'A large biopharma\'s R&D Quality function had grown duplicative embedded teams after a reorg, with no holistic approach to GxP oversight. A structured diagnostic turned ambiguity into an operating agreement.',
    tags: ['Operating model', 'Quality oversight', 'Maturity model', 'Governance'],
    heroStat: { value: '5-phase', label: 'current → future-state operating model' },
    datePublished: '2024-12-13',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'After a major reorganization, multiple development functions had grown their own embedded quality groups. The result: unclear ownership, duplicated effort and no holistic GxP oversight. The engagement opened with a structured oversight-model assessment, anchored on a set of partnership guiding principles and interview guides for both embedded and central quality audiences.',
      },
      {
        kind: 'flow',
        title: 'The five-phase plan',
        steps: [
          { label: 'Information gathering', sub: 'Stakeholder interviews, workflow mapping' },
          { label: 'Gap analysis', sub: 'Build a quality maturity model' },
          { label: 'Recommendations', sub: 'Future-state operating model' },
          { label: 'Readout', sub: 'Implementation planning' },
          { label: 'Finalization', sub: 'Execution' },
        ],
      },
      {
        kind: 'split',
        title: 'The shift',
        before: {
          label: 'Compliance-focused',
          points: ['Audits and inspections as the identity', 'Duplicated embedded teams', 'Unclear decision rights'],
        },
        after: {
          label: 'Partnership operating model',
          points: ['Clear current → future operating split', 'Defined roles across quality partners & vendor management', 'A diagnostic turned into an operating agreement'],
        },
      },
      {
        kind: 'callouts',
        title: 'Artifacts',
        items: [
          { title: 'Quality maturity model', body: 'A bespoke maturity model used to assess the current operating model against a defined target.' },
          { title: 'Activities heatmap', body: 'A "quality-owned" activities heatmap that made duplication and gaps visible.' },
          { title: 'Implementation plan', body: 'A dated implementation plan for the R&D quality and functional operating models.' },
          { title: 'Roles & responsibilities', body: 'A future operating split across clinical quality partnership and vendor quality management.' },
        ],
      },
    ],
  },

  /* ───────────────────────── 4 · External manufacturing network ───────────────────────── */
  {
    slug: 'external-manufacturing-network-resilience',
    collection: 'work',
    type: 'case-study',
    title: 'External manufacturing network and operations resilience for a scaling franchise',
    crumb: 'External manufacturing network',
    seoTitle: 'External Manufacturing Network & Tech Ops Resilience',
    description:
      'Maturing an external-manufacturing supply base, API, drug product CMOs, packaging and distribution, with supplier matrices, business-continuity plans and a board-level network strategy.',
    keywords: 'external manufacturing, CMO network, technical operations, supplier business continuity, operations resilience, supply agreement management',
    eyebrow: 'Commercial dermatology · Tech ops · Scaling commercial biotech (~$400M revenue)',
    dek: 'A commercial-stage dermatology biopharma needed to mature its technical operations and external-manufacturing base, and make the network resilient as commercial demand ramped.',
    tags: ['External manufacturing', 'CMO network', 'Resilience', 'Tech ops'],
    heroStat: { value: '150+ docs', label: 'external-manufacturing program' },
    datePublished: '2023-03-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'Launching and scaling a commercial dermatology franchise, the client needed to mature its technical operations and external-manufacturing supply base, spanning API, bulk and finished drug product, packaging and distribution, and to keep the network resilient as demand grew.',
      },
      {
        kind: 'flow',
        title: 'The manufacturing network',
        steps: [
          { label: 'API', sub: 'Supply agreement & technical governance' },
          { label: 'Bulk drug product', sub: 'CMO sourcing & tech transfer' },
          { label: 'Finished drug product', sub: 'CMO management & supply assurance' },
          { label: 'Packaging & distribution', sub: 'Current vs. future network sites' },
        ],
      },
      {
        kind: 'callouts',
        title: 'What the engagement covered',
        items: [
          { title: 'CMO landscape & matrix', body: 'A supplier matrix for sourcing decisions across the external-manufacturing stack.' },
          { title: 'Business continuity', body: 'Contingency / business-continuity plans for key single-source suppliers.' },
          { title: 'Supply-agreement portfolio', body: 'Management of the supply-agreement and SOW portfolio across API and drug product.' },
          { title: 'Resilience strategy', body: 'An operations-resilience strategy with a risk heat-map and a prioritized mitigation plan for leadership.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'The readout',
        body: 'The work fed a Technical Operations board presentation covering the global manufacturing network, commercial supply assurance and lifecycle management, and inventory optimization, including a scrap-exposure analysis across demand scenarios, confirmed production slots, a planned manufacturing slow-down to manage inventory, and a shelf-life extension to add supply-chain flexibility.',
      },
    ],
  },

  /* ───────────────────────── 5 · CDMO VOC + AI roadmap ───────────────────────── */
  {
    slug: 'cdmo-voice-of-customer-ai-roadmap',
    collection: 'work',
    type: 'case-study',
    title: 'A Voice-of-Customer program and operating-model redesign for a CDMO',
    crumb: 'CDMO business optimization',
    seoTitle: 'CDMO Voice-of-Customer & Operating-Model Review',
    description:
      'A leadership-sponsored, confidential Voice-of-Customer program plus a quality-system review for a contract manufacturer, feeding operating-model recommendations and a phased leadership roadmap.',
    keywords: 'CDMO business optimization, voice of customer program, quality system assessment, operating model recommendations, phase-appropriate quality',
    eyebrow: 'CDMO · Business optimization · Global CDMO (~$350M revenue)',
    dek: 'A global API contract manufacturer engaged a senior team for a business-optimization program: a confidential Voice-of-Customer effort and a quality-system review.',
    tags: ['Voice of Customer', 'Quality', 'Operating model'],
    heroStat: { value: '10–20', label: 'client & leader interviews run' },
    datePublished: '2026-04-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'A contract manufacturer engaged a senior team for a business-optimization program across early-stage programs, API services, an active commercial Voice-of-Customer effort and a quality-system review, focused on its sites and customer markets.',
      },
      {
        kind: 'steps',
        title: 'How it ran',
        items: [
          { title: 'A confidential VOC process', body: 'A leadership-sponsored, fully confidential client-engagement process: a standard outreach script, mutual confidentiality agreements, independently conducted interviews, and aggregated-only feedback shared back to leadership.' },
          { title: 'A quality work-stream', body: 'Mapped key challenges through interviews with project managers and BD/quality leads, on a biweekly status cadence with leadership readouts.' },
          { title: 'Operating-model recommendations', body: 'Recommendations for business development (quote speed and attractiveness) and a fit-for-purpose quality model.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Discover', items: ['VOC engagement process', 'Interview program', 'Quality-system assessment'] },
          { label: 'Report', items: ['Biweekly LT status', 'Executive readouts', 'Operating-model recommendations'] },
        ],
      },
    ],
  },

  /* ───────────────────────── 6 · US distribution & 3PL selection ───────────────────────── */
  {
    slug: 'us-distribution-3pl-selection',
    collection: 'work',
    type: 'case-study',
    title: 'U.S. distribution model design and 3PL selection through to launch implementation',
    crumb: 'US distribution & 3PL',
    seoTitle: 'US Distribution Model Design & 3PL Selection, Case Study',
    description:
      'Designing a U.S. distribution model for a rare-disease launch, benchmarking specialty 3PLs on a 3-year total-cost model, and carrying through contracting to an implementation kickoff.',
    keywords: 'US distribution model, 3PL selection, specialty distribution, cold chain logistics, DSCSA, launch implementation',
    eyebrow: 'Rare disease · Distribution & 3PL · Early-commercial rare-disease biotech (<$50M revenue)',
    dek: 'A rare-disease biopharma was establishing its U.S. supply & distribution model ahead of launch, design the model, select and onboard a 3PL partner, then support implementation through go-live.',
    tags: ['Distribution', '3PL selection', 'Cold chain', 'Launch implementation'],
    heroStat: { value: '3 specialty 3PLs', label: 'benchmarked on a 3-year TCO' },
    datePublished: '2026-02-15',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'The client was establishing its U.S. distribution model for a cold-chain rare-disease product ahead of commercial launch. The scope was to design an appropriate distribution model for the product/customer requirements, then select and onboard a suitable 3PL/4PL partner, with explicit intent to support the phases of US market entry, not stop at selection.',
      },
      {
        kind: 'compare',
        title: 'Specialty 3PL benchmark',
        head: ['Criterion', '3PL A', '3PL B', '3PL C'],
        rows: [
          ['Warehousing footprint', 'Broad', 'Moderate', 'Broad'],
          ['Cold-chain (2–8°C)', 'Strong', 'Strong', 'Moderate'],
          ['DSCSA compliance', 'Yes', 'Yes', 'Yes'],
          ['Returns management', 'Strong', 'Moderate', 'Strong'],
          ['Real-time data integration', 'Strong', 'Moderate', 'Moderate'],
        ],
        highlight: 1,
        caption: 'Benchmarked across warehousing, cold-chain logistics, order-to-cash, DSCSA, returns and data integration, with a 3-year total-cost model and scorecard. (3PLs anonymized.)',
      },
      {
        kind: 'flow',
        title: 'Selection to launch',
        steps: [
          { label: 'Model design', sub: 'Product/customer requirements' },
          { label: 'RFP & criteria', sub: 'Shortlist + scorecard' },
          { label: 'Comparison & TCO', sub: '3-year cost model' },
          { label: 'Selection', sub: 'Recommendation + timeline' },
          { label: 'Contracting', sub: 'Distribution, quality, title model' },
          { label: 'Implementation', sub: 'Go-live readiness' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Design', items: ['Distribution model', '3PL/4PL strategy', 'RFP'] },
          { label: 'Select', items: ['Comparative analysis', '3-year TCO', 'Scorecard & recommendation'] },
          { label: 'Land', items: ['Contract review & negotiation support', 'Implementation kickoff', 'Launch-readiness plan'] },
        ],
      },
    ],
  },

  /* ───────────────────────── 7 · Clinical supply / TechOps sprints ───────────────────────── */
  {
    slug: 'clinical-supply-techops-acceleration',
    collection: 'work',
    type: 'case-study',
    title: 'Agile sprints to get clinical drug supply off the critical path',
    crumb: 'Clinical supply TechOps',
    seoTitle: 'Clinical Supply / TechOps Acceleration Sprints',
    description:
      'A sprint-based program to keep clinical drug product, comparator and standard-of-care off the critical path for a multi-study oncology program, critical-path mapping, RACI and executive readouts.',
    keywords: 'clinical supply chain, TechOps, critical path mapping, agile sprints, RACI, study prioritization',
    eyebrow: 'Specialty/oncology · Clinical supply · Specialty pharma (~$4B revenue)',
    dek: 'A specialty & oncology pharma\'s clinical drug-supply (TechOps) function needed to ensure supply was off the critical path and at sites on time for a 2024–2025 study program. The answer was an agile, sprint-based delivery model.',
    tags: ['Clinical supply', 'TechOps', 'Critical path', 'Agile delivery'],
    heroStat: { value: '21 deliverables', label: 'assessed in the first sprint' },
    datePublished: '2024-01-15',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'The client\'s clinical drug-supply function needed to ensure drug product, standard-of-care and comparator were off the critical path and at clinical sites on time for an upcoming multi-study program. The engagement opened by framing the end-to-end clinical supply process and stood up an agile, sprint-based delivery model.',
      },
      {
        kind: 'flow',
        title: 'The first sprint',
        steps: [
          { label: 'Frame E2E flow', sub: 'Process + issues to resolve' },
          { label: 'Triage studies', sub: 'Prioritize the portfolio' },
          { label: 'Map critical path', sub: 'Highest-priority study' },
          { label: 'RACI & risk log', sub: 'Roles, gaps, risks' },
          { label: 'Executive readout', sub: 'Outcomes + decisions' },
          { label: 'Future-state maps', sub: 'Scale across the portfolio' },
        ],
        caption: 'A virtual "follow-the-sun" sprint with a cross-functional core team across multiple regions and functions.',
      },
      {
        kind: 'callouts',
        title: 'What it produced',
        items: [
          { title: 'Study prioritization', body: 'Triage and prioritization across sponsored studies, collaborations and investigator-initiated trials.' },
          { title: 'Critical-path map', body: 'A TechOps critical-path map for the highest-priority study, with risks and gaps identified.' },
          { title: 'RACI & templates', body: 'A risk log, RACI, and demand/supply and CMC-readiness templates.' },
          { title: 'Operating cadence', body: 'A drug-supply cost-management / operational-excellence charter and a path into current/future-state mapping.' },
        ],
      },
    ],
  },

  /* ───────────────────────── 8 · CMC portfolio prioritization ───────────────────────── */
  {
    slug: 'cmc-portfolio-prioritization',
    collection: 'work',
    type: 'case-study',
    title: 'CMC portfolio prioritization and resource-allocation modeling',
    crumb: 'CMC portfolio prioritization',
    seoTitle: 'CMC Portfolio Prioritization & Resource Modeling',
    description:
      'A prioritization workshop plus a project–resource matrix that allocated named CMC team members to activities and assets, surfacing over- and under-allocation across the portfolio.',
    keywords: 'CMC portfolio prioritization, resource allocation modeling, capacity planning, project resource matrix, biotech operations',
    eyebrow: 'Immuno-oncology · CMC portfolio · Clinical-stage oncology company (pre-product revenue)',
    dek: 'An immuno-oncology biotech needed to prioritize its CMC portfolio and allocate a finite team across competing programs, from a workshop to a per-person, per-program capacity model.',
    tags: ['CMC', 'Prioritization', 'Capacity planning', 'Resource modeling'],
    heroStat: { value: 'per-person', label: 'capacity & loading model' },
    datePublished: '2024-06-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The work',
        body: 'Beyond facilitating a prioritization workshop, the engagement built a detailed project–resource matrix allocating named CMC team members, across process & formulation development, drug substance, drug product and overall CMC, to specific activities and assets, tied to corporate goals.',
      },
      {
        kind: 'steps',
        title: 'From workshop to model',
        items: [
          { title: 'Prioritization workshop', body: 'Aligned leadership on the relative priority of programs and assets across the portfolio, including launch and commercial-workshop prep.' },
          { title: 'Project–resource matrix', body: 'Mapped people to activities and assets through a defined horizon, tied to "achieve filing readiness" and "advance pipeline" goals.' },
          { title: 'Capacity & loading views', body: 'Per-person and per-program capacity views (FTE %) plus FTE and budget graphs that surfaced over- and under-allocation across the portfolio.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Align', items: ['Prioritization workshop'] },
          { label: 'Model', items: ['Project–resource matrices', 'Per-person capacity', 'Per-program loading', 'FTE and budget graphs'] },
          { label: 'Map', items: ['Stakeholder and vendor mapping', 'Risk and gaps', 'Timelines and executive summary'] },
        ],
      },
    ],
  },

  /* ───────────────────────── 9 · Clinical supply chain dashboard ───────────────────────── */
  {
    slug: 'clinical-supply-chain-dashboard',
    collection: 'work',
    type: 'case-study',
    title: 'A clinical supply chain dashboard: from fragmented reports to one integrated view',
    crumb: 'Clinical supply dashboard',
    seoTitle: 'Clinical Supply Chain Dashboard (Power BI), Case Study',
    description:
      'A built-and-delivered clinical supply chain dashboard on a Power BI + SharePoint + Power Automate stack, with reconciliation logic that auto-flags mismatches before month-end sign-off.',
    keywords: 'clinical supply chain dashboard, Power BI, supply chain analytics, IRT reconciliation, inventory visibility, resupply planning',
    eyebrow: 'Oncology · Analytics product · Clinical-stage immuno-oncology biotech (pre-product revenue)',
    dek: 'A clinical-stage oncology biopharma went "from fragmented reports to a single integrated view" with a delivered dashboard on a low-code analytics stack and a monthly refresh.',
    tags: ['Analytics', 'Power BI', 'Clinical supply', 'Reconciliation'],
    heroStat: { value: '3 pillars', label: 'participants · inventory · resupply' },
    datePublished: '2026-05-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'What it was',
        body: 'A built-and-delivered clinical supply chain dashboard taking the client from fragmented reports to a single integrated view, on a Power BI + SharePoint + Power Automate stack with a monthly data refresh.',
      },
      {
        kind: 'steps',
        title: 'Three pillars',
        items: [
          { title: 'Participants', body: 'Enrollment vs target, cohort trends, site-level performance, and reconciliation that auto-flags mismatches before month-end sign-off.' },
          { title: 'Inventory', body: 'Depot and site stock, lot/expiry visibility, and inventory reconciliation across systems.' },
          { title: 'Resupply', body: 'Months-on-hand, demand signals, and re-supply timing.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Stack',
        groups: [
          { label: 'Platform', items: ['Power BI', 'SharePoint', 'Power Automate'] },
          { label: 'Logic', items: ['Participant model', 'Inventory model', 'Reconciliation rules'] },
          { label: 'Output', items: ['Executive update', 'Monthly refresh'] },
        ],
      },
    ],
  },

  /* ───────────────────────── 10 · SaaS pricing & data analytics ───────────────────────── */
  {
    slug: 'saas-pricing-data-analytics',
    collection: 'work',
    type: 'case-study',
    title: 'Pricing-model handover, data migration and cohort analytics for a SaaS platform',
    crumb: 'SaaS pricing & data',
    seoTitle: 'SaaS Pricing Model, Data Migration & Cohort Analytics',
    description:
      'A pricing and data engagement for a SaaS platform, price-model handover and CPQ prototypes, a substantial data-migration and cleaning effort, and Power BI cohort analytics.',
    keywords: 'SaaS pricing model, CPQ prototype, data migration, data cleaning, cohort analysis, account health scoring',
    eyebrow: 'SaaS · Pricing & data · Global SaaS platform (~$375M revenue)',
    dek: 'A consumer-reviews SaaS platform needed its pricing models handed over, a messy data estate migrated and cleaned, and cohort analytics to support packaging decisions.',
    tags: ['Pricing', 'Data migration', 'Analytics', 'CPQ'],
    datePublished: '2023-06-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The work',
        body: 'A pricing and data engagement covering a price-model handover (pricing models, CPQ prototype drafts, good/better/best packaging), a substantial data-migration and cleaning effort, and analytics.',
      },
      {
        kind: 'steps',
        title: 'Three workstreams',
        items: [
          { title: 'Price models & CPQ', body: 'Revenue & pricing models, CPQ prototype drafts, and good/better/best packaging.' },
          { title: 'Data migration & cleaning', body: 'A multi-step cleaning pipeline, accounts, contracts, domains, instance mapping and entitlements.' },
          { title: 'Cohort analytics', body: 'Power BI cohort analyses, account-health scoring, and content/usage datasets for pricing packages.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Pricing', items: ['Price models', 'CPQ prototypes', 'GBB packaging'] },
          { label: 'Data', items: ['Cleaned migration datasets', 'Entitlement mapping'] },
          { label: 'Insight', items: ['Power BI cohort analysis', 'Account-health scoring'] },
        ],
      },
    ],
  },

  /* ───────────────────────── 11 · AI agents for consulting operations ───────────────────────── */
  {
    slug: 'ai-agents-consulting-operations',
    collection: 'work',
    type: 'case-study',
    title: 'AI agents for a consulting firm\'s own operations: RFP response and CRM',
    crumb: 'AI agents: RFP response & CRM',
    seoTitle: 'AI Agents for Consulting Operations, RFP Response and CRM Case Study',
    description:
      'Two working AI agents built inside a boutique consulting firm: an RFP-response agent grounded in the firm\'s proposal library, and a CRM agent encoding the business-development standard operating procedure.',
    keywords: 'AI agents, RFP response automation, proposal automation, CRM agent, enterprise agent platform, applied AI, consulting operations',
    eyebrow: 'Applied AI · Agent builds · Boutique consulting firm',
    dek: 'A boutique consulting firm pointed AI at its own operating drag: an RFP-response agent grounded in the firm\'s proposal library, a CRM agent encoding the business-development SOP, and a structured enablement track on an enterprise agent platform.',
    tags: ['Applied AI', 'AI agents', 'Automation'],
    heroStat: { value: '2 agents', label: 'RFP response and CRM, built hands-on on an enterprise agent platform' },
    datePublished: '2025-09-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The situation',
        body: 'Proposal responses were among the firm\'s heaviest business-development costs: each RFP meant days of drafting from scratch, and one response ran to seven versions before it went out. CRM upkeep had the same shape, manual and procedural, absorbing consultant time better spent on client work. Before advising clients on AI, the firm turned it on its own operations.',
      },
      {
        kind: 'flow',
        title: 'How it progressed',
        caption: 'From a retrieval prototype to two working agents and a trained team.',
        steps: [
          { label: 'Prototype', sub: 'An RFP chatbot proved the retrieval idea (2024)' },
          { label: 'Rebuild as an agent', sub: 'Enterprise agent platform, grounded in the proposal library (2025)' },
          { label: 'CRM agent v1', sub: 'The business-development SOP, encoded' },
          { label: 'Enablement', sub: 'Nine-session platform training with guided exercises' },
        ],
      },
      {
        kind: 'callouts',
        title: 'The agents',
        items: [
          { title: 'RFP-response agent', body: 'Drafts a first-pass response from the firm\'s past proposals, case studies and team bios, so consultants edit instead of starting blank. Packaged with a recorded demo walkthrough and a conference deck.' },
          { title: 'CRM agent', body: 'A first working version built around the business-development SOP, turning pipeline upkeep from a manual routine into a prompted workflow.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Agents', items: ['RFP-response agent', 'CRM agent (SOP v1)', 'Demo recording'] },
          { label: 'Enablement', items: ['Nine-session training track', 'Guided exercises', 'Conference deck'] },
        ],
      },
    ],
  },

  /* ───────────────────────── 12 · QMS governance dashboards ───────────────────────── */
  {
    slug: 'qms-governance-dashboards',
    collection: 'work',
    type: 'case-study',
    title: 'Modernized quality-management-system governance dashboards',
    crumb: 'QMS governance dashboards',
    seoTitle: 'Modernized QMS Governance Dashboards, Case Study',
    description:
      'A modernized QMS governance-dashboard solution organized as module-wise governance boards plus a cross-module board, delivered with a module-by-module training guide.',
    keywords: 'QMS governance dashboard, quality management system, governance boards, escalation management, low-code platform enablement',
    eyebrow: 'Quality systems · Governance · Top-5 global pharma (>$50B revenue)',
    dek: 'A large global pharma needed a modernized quality-management-system governance solution, module-wise governance boards plus a cross-module board, with escalation, assessment and architecture views.',
    tags: ['Quality systems', 'Governance', 'Dashboards'],
    heroStat: { value: 'module-wise', label: 'governance + cross-module board' },
    datePublished: '2024-03-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'What was built',
        body: 'A modernized QMS governance-dashboard solution, organized as module-wise governance boards plus a cross-module board. Each module surfaces overall module health, escalated items aggregated across modules, annual assessment, regulatory changes, continuous improvement/feedback, action items, module architecture and meeting maintenance.',
      },
      {
        kind: 'callouts',
        title: 'Views per module',
        items: [
          { title: 'Module health', body: 'Status / description / action / due, ready for board meetings.' },
          { title: 'Escalations', body: 'Escalated items aggregated across every module.' },
          { title: 'Assessment & change', body: 'Annual assessment, regulatory changes and continuous-improvement feedback.' },
          { title: 'Architecture & cadence', body: 'Module architecture, documents, and meeting-maintenance cadence.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Build', items: ['Module governance boards', 'Cross-module board', 'Escalation & assessment views'] },
          { label: 'Adopt', items: ['Module-by-module training guide', 'Platform enablement & training'] },
        ],
      },
    ],
  },

  /* ───────────────────────── 13 · Pricing & trade analytics (BI) ───────────────────────── */
  {
    slug: 'pricing-trade-analytics-bi',
    collection: 'work',
    type: 'case-study',
    title: 'Multi-project BI pricing and trade analytics with a self-serve training manual',
    crumb: 'Pricing & trade analytics',
    seoTitle: 'BI Pricing & Trade Analytics, Case Study',
    description:
      'A multi-project "BI solution" delivering pricing & trade analytics, documented data models, dashboards and assumptions, with a project-by-project training manual for self-serve maintenance.',
    keywords: 'BI pricing analytics, trade analytics, data model, BI training manual, CPG analytics',
    eyebrow: 'CPG · BI & analytics',
    dek: 'A CPG pricing & trade analytics client needed a multi-project BI solution it could maintain and extend independently.',
    tags: ['BI', 'Pricing', 'Analytics', 'Enablement'],
    datePublished: '2023-05-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'What it was',
        body: 'A multi-project BI solution delivering pricing & trade analytics. For each project it documents data sources, the data model and table relationships, dashboard filters, charts, and assumptions, combining raw yearly data dynamically, with mapping files in the query layer.',
      },
      {
        kind: 'steps',
        title: 'How it was structured',
        items: [
          { title: 'Data sources & model', body: 'Documented data sources and a data model with explicit table relationships.' },
          { title: 'Dashboards', body: 'Filters, charts and views built for pricing and trade questions.' },
          { title: 'Assumptions & handover', body: 'Explicit assumptions and definitions, plus a project-by-project training manual.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Build', items: ['BI dashboards', 'Query-layer models', 'Mapping files'] },
          { label: 'Enable', items: ['Documented assumptions', 'Project-by-project training manual'] },
        ],
      },
    ],
  },
  /* ───────────────────── N · New product introduction playbook ───────────────────── */
  {
    slug: 'new-product-introduction-playbook',
    collection: 'work',
    type: 'case-study',
    title: 'Building a supply-chain new-product-introduction playbook for a cell-and-gene launch portfolio',
    crumb: 'New product introduction playbook',
    seoTitle: 'Supply Chain New Product Introduction (NPI) Playbook, Case Study',
    description: "How the team built a reusable New Product Introduction playbook and reporting layer so a cell-and-gene-therapy company's supply chain could run every future launch consistently.",
    keywords: 'new product introduction, NPI playbook, product launch playbook, supply chain readiness, stage-gate timeline, RACI, launch scenarios',
    eyebrow: 'Cell & gene therapy · New product introduction · Commercial-stage gene therapy (~$2B)',
    dek: "A reusable New Product Introduction playbook and reporting layer so a cell-and-gene-therapy supply chain could run every future launch consistently.",
    tags: ['NPI playbook', 'Launch readiness', 'Supply chain', 'Governance'],
    heroStat: {"value":"7-chapter","label":"reusable NPI Playbook, plus a 14-section Supply Chain Strategic Plan, plus the demand-capacity and release-throughput analysis behind it"},
    faq: [{"q":"How is an NPI playbook different from the launch-readiness work that precedes it?","a":"Launch-readiness work gets one specific product to market. A playbook makes the process repeatable: it captures the lessons, sequences every supply-chain activity against a backward-counting stage-gate timeline, assigns cross-functional ownership, and codifies the scenarios that reset the plan, so the next introduction (internal or in-licensed) runs to a standard rather than from scratch."},{"q":"How do you keep a playbook from becoming shelf-ware?","a":"Three mechanisms. It is published where the team already works and is navigable to specific sections; it is owned and governed with named chapter owners and a defined update cadence tied to development milestones; and it is paired with an ongoing reporting layer plus a continuous-improvement feedback loop, so using it and updating it are part of running programs, not a separate chore."},{"q":"What does it take to build one, and who needs to be involved?","a":"It is built from the client's own history (three real launch cases were used) through frequent working sessions with supply-chain leadership and SMEs, validated in a multi-day cross-functional workshop. Beyond Supply Chain, you need Clinical, Regulatory, Commercial Quality, TechOps, and Commercial at the table, plus input from external manufacturing and testing partners, because the critical path runs straight through their hand-offs."}],
    datePublished: '2025-02-15',
    author: AUTHOR,
    blocks: [{"kind":"prose","heading":"The situation","body":"A <strong>roughly $2B commercial-stage cell-and-gene-therapy company</strong> had successfully launched its first product, but every new-product introduction that followed was being run from scratch. Supply-chain knowledge lived in the heads of a handful of leaders and in scattered slide decks, spreadsheets, and a folder of reference materials. As the pipeline grew to include <strong>internally developed and in-licensed programs</strong> spanning multiple modalities, that improvised approach was no longer safe.\n\nThe Supply Chain organization needed a repeatable way to bring any new product to clinic and to market: a single source of truth that captured when each activity must start, who owns it, and which risks to mitigate. The mandate: build a reusable <strong>New Product Introduction (NPI) Playbook</strong> for Supply Chain and its cross-functional dependencies, and stand up ongoing reporting so future introductions ran to a standard rather than reinventing the process each time."},{"kind":"prose","heading":"The mandate","body":"The engagement delivered two things. First, a <strong>Product Launch Playbook</strong> for the Supply Chain organization and its interactions with other functions and partners. Second, the supporting analysis: demand-and-capacity scenarios and a release-throughput model to inform supply-chain status reviews and new-product planning.\n\nThree desired outcomes framed the work: a launch playbook covering Supply Chain and its cross-functional dependencies; <strong>ongoing NPI preparedness</strong> for new products driven by either internal or external development; and a strong, shared understanding of the <strong>end-to-end (E2E) supply-chain strategy</strong> across sourcing, manufacturing, distribution, and inventory management. Scope was explicitly all activities under the Supply Chain organization, with interfaces into Clinical, Regulatory, Commercial Quality, TechOps, and Commercial."},{"kind":"steps","title":"How the playbook was built","items":[{"title":"Mine the lessons learned","body":"The work started by dissecting the company's own track record, working from a gap list built off client calls: the first commercial launch, an in-flight multi-year program, and a near-term program in a different modality. Three real cases became the structural backbone, surfacing recurring failure modes in cross-functional communication, lot release, and inventory visibility."},{"title":"Anchor everything to a \"minus-months\" timeline","body":"Every activity was mapped to a stage-gate framework counting backward from launch (roughly t-27 through t-0). This turned a vague to-do list into a sequenced critical path with clear lead-time triggers for each supply-chain function."},{"title":"Capture requirements as activity checklists","body":"For each stage the team documented the activity, the right time to begin it, the parties to involve, and the risks to mitigate, plus watch-outs for time-consuming steps such as import requirements, QP release, shipping qualifications, and label-pack validations."},{"title":"Iterate weekly with SMEs and leadership","body":"Draft materials were refined in frequent working sessions with Supply Chain leadership and SMEs, with targeted input from TechOps, manufacturing, commercial, regulatory, and quality, and from external manufacturing and testing partners as needed, and were reworked on a collaborative whiteboard alongside the deck iterations."},{"title":"Validate in a multi-day cross-functional workshop","body":"A structured offsite walked the playbook chapter-by-chapter against live programs, flagged every cross-functional input, resolved gaps and risks, and assigned owners and deadlines, converting the draft into an operational V2."}]},{"kind":"stack","title":"What's inside the playbook: the seven chapters","groups":[{"label":"1. Introduction","items":["Objectives, scope, and when to use the playbook","Corporate goals and Supply Chain objectives","Continuous-improvement feedback loop to keep it current"]},{"label":"2. Recent experiences & lessons learned","items":["Early, structured CMC checkpoints with internal teams and external manufacturers","Change management and contingency planning","Global inventory visibility and controls","Lead-time alignment for new-country additions","Partner ability to deliver on critical requirements"]},{"label":"3. Key stakeholders in scope","items":["Roles across Supply Chain functions and interfaces","Ownership and responsibility mapping (RACIs)","Program-specific stakeholder template to fill at kickoff"]},{"label":"4-5. Clinical & commercial readiness","items":["Stage-by-stage clinical readiness timeline and checklist","Commercial readiness timeline and checklist","Stage-appropriate templates with input and impact points"]},{"label":"6. Key scenarios & implications","items":["Trigger-based playbooks for events that reset the timeline","Scenario owners lead impact analysis and plan of action"]},{"label":"7. Reference documents","items":["Supply Chain Strategic Plan and related references","Clinical- and commercial-readiness reference materials","Templates and sample completed exhibits"]}]},{"kind":"callouts","title":"The six launch scenarios codified in the playbook","items":[{"title":"New indication","body":"Triggered by a Clinical Strategy update; managed as a fresh NPI, often on a compressed timeline."},{"title":"Manufacturing process / network change","body":"Triggered by manufacturing or supply-chain strategy updates; may require a full checklist impact analysis."},{"title":"New geography","body":"Triggered by regulatory approvals; typically spins up a new project off the commercial-readiness checklist."},{"title":"New presentation or packaging","body":"Triggered by a packaging challenge; requires a targeted impact analysis and plan."},{"title":"Strategic label update","body":"Triggered by regulatory or CMC change; runs as a change control scoped to the listed activities."},{"title":"New formulation","body":"Triggered by Clinical Strategy, study-design, or protocol changes; usually treated as a new NPI."}]},{"kind":"split","title":"From ad hoc launches to a repeatable system","before":{"label":"Before: every launch from scratch","points":["Process knowledge held by a few leaders and scattered files","No common view of when activities must start","Cross-functional communication gaps and lot-release surprises","Late country decisions cascading into label, depot, and serialization delays","Each new asset re-learning the same lessons"]},"after":{"label":"After: the NPI Playbook","points":["Single, governed source of truth on the team's existing collaboration platform","Activities anchored to a backward-counting stage-gate timeline","Clear RACIs across Clinical, Regulatory, Quality, TechOps, Commercial","Stage-appropriate checklists, templates, and explicit watch-outs","Scenario playbooks and a reporting layer for ongoing preparedness"]}},{"kind":"flow","title":"The Supply Chain Strategic Plan: a living, asset-specific roadmap","caption":"Initiated early (~t-27) and refreshed at IND, pivotal-trial readiness, BLA submission, and launch.","steps":[{"label":"Strategic foundation","sub":"Executive summary, market & portfolio context, objectives & KPIs, lifecycle readiness"},{"label":"Structural design","sub":"E2E manufacturing/storage/distribution, capacity & scalability, risk & mitigation"},{"label":"Execution tools & readiness","sub":"Quality & regulatory, technology & digital supply chain, financial strategy, metrics, ESG"},{"label":"Operating model & governance","sub":"Partner governance & communication; legal & contractual infrastructure"}]},{"kind":"callouts","title":"A concrete watch-out the playbook makes unmissable","items":[{"title":"Lock clinical countries by t-12 (domestic) / t-6 (international)","body":"If the country list is not confirmed in time, a chain of dependencies stalls: country-specific label text cannot be finalized, depots cannot be selected and qualified, packaging design and serialization (which depend on the number and languages of countries) slip, and QP-release, translation, and distribution budgets cannot be locked."},{"title":"Why it sits in the playbook, not in someone's head","body":"This is exactly the kind of lead-time rule that used to live with a single experienced leader. Encoding it as a dated checklist trigger, with the downstream impacts spelled out, is what turns the playbook from a reference into an operating control."}]},{"kind":"metrics","title":"The build by the numbers","items":[{"value":"2","label":"Deliverables: the NPI Playbook plus the supporting demand-capacity and release-throughput analysis"},{"value":"7","label":"Playbook chapters, from introduction through reference documents"},{"value":"3","label":"Real launch cases mined to form the structural backbone"},{"value":"6","label":"Launch scenarios codified, each with a defined trigger and owner"},{"value":"6","label":"Supply-chain functions in scope, plus cross-functional interfaces"},{"value":"~t-27","label":"Earliest stage-gate anchor, counting backward to launch (t-0)"}]},{"kind":"compare","title":"Stakeholder ownership across the launch (illustrative RACI)","caption":"The playbook assigns Responsible/Accountable/Consulted/Informed across functions for each activity.","head":["Activity","Supply Chain","Clinical","Regulatory","Quality","TechOps","Commercial"],"rows":[["Set readiness timeline","A/R","C","C","I","C","I"],["CMC inputs & tech transfer","C","I","C","C","A/R","I"],["Country / label decisions","R","C","A","C","I","C"],["QP & shipping qualification","A/R","I","C","C","C","I"],["Commercial artwork & serialization","R","I","C","C","C","A"]],"highlight":1},{"kind":"prose","heading":"Deliverables and impact","body":"The engagement produced a published, version-controlled <strong>NPI Playbook</strong> (taken from first draft to a workshop-validated V2) covering seven chapters: introduction, lessons learned, stakeholders, clinical and commercial readiness timelines with checklists, scenarios, and references. Underneath it sits a set of reusable <strong>input templates</strong>, a Clinical Supply Plan with versioned cadence and country-timing rules, an E2E manufacturing/storage/distribution plan, the 14-section Supply Chain Strategic Plan, and the supporting analysis the playbook rests on: functional activity timelines, demand-and-capacity scenarios, and a release-throughput model run under constrained and dynamic assumptions.\n\nAlongside the playbook, the team built the supporting analysis it rests on: demand-and-capacity scenarios and a constrained-and-dynamic release-throughput model, with a path to roll templates from pilot programs out to the rest of the portfolio. The most durable result is structural: the organization moved from launching each product from memory to running new product introductions, internal or in-licensed, against a <strong>single governed standard</strong>, with <strong>named chapter owners</strong>, an update cadence tied to development milestones, sequenced lead times, and a built-in continuous-improvement loop, so the next launch starts from the codified standard rather than from tribal knowledge."},{"kind":"note","body":"All identifying details, including the client, its products and program codes, individuals, partners, sites, and software products, have been removed or generalized. This case study describes the work at the level of approach and structure only."}],
  },
  /* ───────────────────── N · Packaging, labeling & NDC strategy ───────────────────── */
  {
    slug: 'commercial-packaging-labeling-ndc-strategy',
    collection: 'work',
    type: 'case-study',
    title: "Packaging, labeling and NDC strategy for a US and EU oral oncology launch",
    crumb: "Packaging, labeling & NDC strategy",
    seoTitle: "Pharma Packaging, Labeling & NDC Strategy (US + EU), Case Study",
    description: "How an oncology biotech screened pack-and-label CMOs and shaped a US-vs-EU bottling, QP-release and serialization-readiness strategy for a first oral-product launch.",
    keywords: "pharma packaging strategy, pack and label CMO selection, NDC code, GS1 GTIN, DSCSA serialization, EU QP release, US EU distribution",
    eyebrow: "Oncology · Packaging, labeling & serialization · Clinical-stage oncology biotech (pre-product revenue)",
    dek: "How an oncology biotech screened pack-and-label CMOs and shaped a US-vs-EU bottling, QP-release and serialization-readiness strategy for a first oral-product launch.",
    tags: ["Packaging & labeling","NDC & serialization","QP release","Launch strategy"],
    heroStat: {"value":"3 markets","label":"US, EU and UK weighed under one packaging-network design, kept as two live options"},
    faq: [{"q":"Can one CMO handle both US and EU packaging for a small-volume launch?","a":"Sometimes, and it is usually the preferred starting hypothesis because it simplifies tech transfer, quality oversight and serialization. It hinges on whether that partner runs an EU facility for bottling and blistering, and on cost versus shipping US-packed product to an EU 3PL. Both models stay live until a revised RFP and site visits decide, not convenience."},{"q":"Where does QP release happen if finished product is packed in the US?","a":"If finished product is packed in the US and shipped to the EU for distribution, EU/UK QP release is outsourced to a Qualified Person in the EU, with QP certification anchored at the drug-product stage and a QP audit of the packaging partner. Alternatively, shipping bulk drug product to an EU CMO lets that single partner pack and QP-release for both the EU and the UK in-region."},{"q":"What identifier and serialization work has to be done before launch?","a":"The US needs an FDA labeler code (anchoring the 10-digit NDC, segmented 5-4-1 or 5-3-2), a licensed GS1 prefix, registered GTINs, and DSCSA serialization with case/pallet aggregation on the line. This master data locks early because it feeds artwork, the ERP and the serialization platform. It ran as a separate, later workstream alongside vendor selection."}],
    datePublished: '2025-09-15',
    author: AUTHOR,
    blocks: [{"kind":"prose","heading":"The mandate","body":"A pre-revenue <strong>oncology biotech preparing its first commercial oral-product launch</strong> needed a packaging, labeling and distribution strategy that could serve the <strong>US, EU and UK</strong> from a single, coherent supply network. The launch presentation was deliberately simple: <strong>one SKU</strong>, a low-strength hard-gelatin capsule, filled to a fixed count in an HDPE bottle, with a carton and an in-pack leaflet, handled as a refrigerated (2-8 degC) cold-chain product. A blister presentation for later line-extension strengths was on the roadmap as a post-launch follow-on.\n\nThe strategic questions were not about chemistry; they were about <strong>vendor selection and network design</strong>: which pack-and-label CMO(s) to engage, whether one partner could serve both regions, and where bottling, packaging, labeling and QP release should physically occur for the EU and UK. A parallel workstream standing up the US NDC, GS1 prefix, GTIN and DSCSA serialization ran on its own track, summarized below."},{"kind":"steps","title":"How the work progressed","items":[{"title":"Introductory CMO meetings","body":"Held introductory meetings with three US pack-and-label CMOs in late spring, reviewing each firm's pack-and-label quote against the launch profile."},{"title":"Preliminary selection review","body":"A product-supply review of the selection tables drove the first decision: pause one candidate whose price-per-bottle was high, non-negotiable, and paired with low engagement given the modest launch volumes."},{"title":"Widen the field","body":"Added a further US candidate whose quote arrived later (a lower per-bottle price but carrying an annual minimum-revenue commitment) and engaged a dedicated EU blister packager to quote the blister pack-and-label scope."},{"title":"Site visits","body":"Scheduled site visits to the remaining bottle/blister candidates to assess bottling and blister capabilities and the path for shipping finished product into the EU for distribution."},{"title":"Revised RFP","body":"Reissued the RFP built on an updated bottle forecast plus the new blister forecast, targeting deployment in early autumn with final CMO selection by the end of the third quarter."}]},{"kind":"split","title":"US strategy versus EU strategy","before":{"label":"US, single integrated CMO","points":["Select <strong>one</strong> bottling, pack-and-label CMO to handle both the launch bottle and the later blisters","Co-locating bottle and blister at one partner simplifies tech transfer, quality oversight and serialization integration","NDC-labeled, DSCSA-serialized finished product released for the US market"]},"after":{"label":"EU / UK, two candidate models","points":["<strong>Model 1:</strong> bottle, pack and label in the US, ship finished product to an EU 3PL for distribution; outsource EU/UK QP release in-region","<strong>Model 2:</strong> ship bulk drug product to an EU CMO that bottles, packs, labels and <strong>QP-releases for both EU and UK</strong>","Trigger for Model 2: if the selected US CMO operates an EU facility capable of bottling/blistering, issue an RFP for cost comparison"]}},{"kind":"compare","title":"Pack-and-label candidate screen (illustrative)","caption":"Candidates compared on price-per-bottle, commercial terms and engagement; one paused early. Order and labels generalized.","head":["Candidate","Price per bottle","Commercial terms","Engagement","Status"],"rows":[["US CMO (active, site visit)",", ","Standard","Active, site visit","In RFP"],["US CMO (added late)","Lower","Annual minimum-revenue commitment","Quote received","Under review"],["US CMO (paused)","High","Non-negotiable","Low (small launch volumes)","Paused"],["US CMO (active)",", ","Standard","Active","In RFP"],["EU blister packager",", ","Quote requested","Engaged for EU blisters","In RFP"]],"highlight":2},{"kind":"stack","title":"EU / UK QP release design","groups":[{"label":"Where certification starts","items":["QP certification begins at the <strong>drug-product</strong> stage","QP audit required for the EU packaging partner"]},{"label":"Model 1 (US-packed, EU-distributed)","items":["Finished product bottled, packed and labeled in the US","Shipped to a selected EU 3PL for distribution","EU/UK QP release <strong>outsourced</strong> to a QP in the EU"]},{"label":"Model 2 (EU-packed)","items":["Bulk drug product shipped to an EU CMO","EU CMO bottles, packs and labels in-region","Single EU CMO QP-releases for <strong>both EU and UK</strong>"]}]},{"kind":"flow","title":"US identifier and serialization readiness (parallel workstream)","caption":"A separate, later master-data and DSCSA effort behind the labeled US product, distinct from the 2025 vendor-selection work.","steps":[{"label":"Labeler code","sub":"FDA labeler code obtained (pharma prefix), anchoring the 10-digit NDC"},{"label":"NDC structure","sub":"A 10-digit NDC is segmented either 5-4-1 or 5-3-2, encoding dosage form and pack count"},{"label":"GS1 prefix","sub":"License a GS1 company prefix for global trade identifiers"},{"label":"GTIN","sub":"Register GTINs, required for DSCSA serialization and case/pallet aggregation"},{"label":"Serialization","sub":"Provisioning, commissioning and aggregation at the packaging line for DSCSA tracing"},{"label":"On-line coding","sub":"Laser-ablation coding applies serialization, lot and expiry at pack"}]},{"kind":"callouts","title":"Design constraints that shaped the recommendation","items":[{"title":"Low launch volumes","body":"Modest first-year demand weakened the biotech's negotiating leverage and made minimum-revenue commitments and per-bottle pricing the decisive screening criteria."},{"title":"Cold-chain product","body":"A refrigerated finished product constrains 3PL selection and cross-border shipping lanes, even though packaging itself runs at ambient conditions."},{"title":"VAT and cross-border tax","body":"Shipping fully-packed product from the US into the EU raised VAT implications that had to be weighed against in-region EU packaging."},{"title":"One partner, two formats","body":"A standing preference to leverage the same CMO for bottles and later blisters favored partners with both capabilities under one quality system."}]},{"kind":"metrics","title":"Scope at a glance","items":[{"value":"3","label":"US pack-and-label CMOs in the initial screen"},{"value":"4","label":"US candidates after widening the field"},{"value":"2","label":"EU/UK pack-label-distribution models evaluated"},{"value":"3","label":"market regions weighed (US, EU, UK)"},{"value":"2","label":"NDC segmentations available (5-4-1, 5-3-2)"},{"value":"1","label":"integrated bottle-and-blister CMO targeted for the US"}]},{"kind":"prose","heading":"Recommendation and deliverables","body":"The recommended path was a <strong>single integrated US pack-and-label CMO</strong> for both the launch bottle and future blisters, paired with a <strong>two-option EU/UK model</strong> kept deliberately open until the revised RFP and site visits resolved cost and capability: either US-packed product distributed through an EU 3PL with outsourced in-region QP release, or bulk drug product packed and QP-released by an EU CMO covering both EU and UK.\n\nDeliverables: a <strong>revised RFP</strong> on updated bottle and blister forecasts, a candidate screen and site-visit assessment, a packaging-network map placing bottling, packaging, labeling, QP release and distribution by region, packaging renders and a guidance deck for the bottle and later blister, and a QP-release plan anchored at the drug-product stage with a QP audit of the EU packager. The US master-data and serialization readiness (NDC, GS1 prefix, GTIN, DSCSA aggregation) was tracked as a parallel workstream. Target: <strong>final pack-and-label CMO selection by the end of the third quarter</strong>, sequenced ahead of the stability and packaging-validation activities the team was preparing in parallel."},{"kind":"note","body":"Fully anonymized research case study. All client, product, vendor, site and personnel names, and all prices, fees and volumes, have been removed or generalized. Dates and sequencing are generalized to seasons/quarters and are illustrative only. Region labels (US, EU, UK) are retained as market geographies only."}],
  },
  /* ───────────────────── N · Blister commercialization ───────────────────── */
  {
    slug: 'oral-oncology-blister-commercialization',
    collection: 'work',
    type: 'case-study',
    title: "Blister commercialization: a packaging-format study for an oral oncology launch",
    crumb: "Blister commercialization",
    seoTitle: "Blister vs Bottle Packaging-Format Study (Oral Oncology), Case Study",
    description: "Choosing a blister-vs-bottle format for an oral oncology capsule, benchmarked against comparator and biosimilar presentations, then planning configuration, stability and packaging validation.",
    keywords: "blister vs bottle, packaging format, comparator and biosimilar packaging benchmark, unit-of-use blister, forming and lidding film, primary stability batch, PQ PPQ, pack testing",
    eyebrow: "Oncology · Packaging-format benchmark (blister vs bottle) · Clinical-stage oncology biotech (pre-product revenue)",
    dek: "Choosing a blister-vs-bottle format for an oral oncology capsule, benchmarked against comparator and biosimilar presentations, then planning configuration, stability and packaging validation.",
    tags: ["Packaging format","Blister vs bottle","Comparator benchmark","Stability & validation"],
    heroStat: {"value":"~12","label":"Working weeks in the planned timeline from material lock to a primary stability batch on the commercial blister configuration"},
    faq: [{"q":"How long does it take to plan a commercial blister presentation through to a primary stability batch?","a":"On an expedited plan it can be compressed to roughly twelve working weeks from locking the forming and lidding films to manufacturing the primary stability batch on the commercial configuration, though embedded year-end holiday shutdowns can push that to about thirteen calendar weeks. It only holds if long-lead tooling and material are ordered early (often while the SOW is still routing), equipment IQ/OQ is sequenced ahead of trials, and placebo and engineering batches de-risk the process before the stability batch is committed."},{"q":"Why run a primary stability batch on the actual commercial blister configuration rather than a representative pack?","a":"Shelf-life claims for a moisture-sensitive oral product depend on the real barrier, the specific forming film, lidding film, seal, and cavity geometry. Putting the primary stability batch on the intended commercial configuration starts the stability clock on the pack you will actually sell, so the data supports the registered presentation rather than requiring a bridge later."},{"q":"What pack tests should a blister qualification plan include?","a":"At minimum, seal integrity, leak testing, moisture vapor transmission rate (MVTR) to confirm the barrier meets shelf-life, and mechanical tests covering push-through/peel force and card robustness for child-resistant and tamper-evident performance. These methods should be developed up front so they are ready for the engineering batches and the PQ/PPQ packaging validation."}],
    datePublished: '2025-11-15',
    author: AUTHOR,
    blocks: [{"kind":"prose","heading":"The situation","body":"A pre-revenue <strong>oncology biotech preparing its first oral-product launch</strong> was bringing a once-daily capsule therapy to market. The launch SKU was committed to a bottle presentation, but the planned line-extension strengths were intended to migrate to a <strong>thermoformed blister</strong> presentation to support per-dose unit-of-use and align with regional unit-dose preferences.\n\nThe engagement set out to answer a tightly bounded operations question: could a <strong>commercial blister presentation be designed, qualified, and operationalized</strong>, technically robust, compliant, and launch-ready, on an aggressive timeline, including a primary stability batch manufactured on the intended commercial configuration before the year-end manufacturing window closed?\n\nThis was deliberately scoped to the <strong>blister format itself</strong>, configuration, materials, tooling, trials, stability, and packaging validation. Vendor RFP selection, market codes, and EU release routes were run as separate workstreams."},{"kind":"steps","title":"Project objective: blister commercialization readiness","items":[{"title":"Freeze the configuration","body":"Finalize cavity count, card layout, child-resistant / tamper-evident (CR/TE) needs, and barrier requirements for the commercial presentation."},{"title":"Lock the materials","body":"Select and lock forming film and lidding film based on the product's moisture sensitivity and target shelf-life."},{"title":"Tooling and capacity","body":"Utilize existing blister capacity where possible; define, source, and install the required change-part tooling against the chosen format."},{"title":"Trials to set parameters","body":"Plan mechanical and engineering trials to establish viable, repeatable forming, sealing, and feed parameters."},{"title":"Primary stability batch","body":"Plan to manufacture and place a primary stability batch (PSB) on the intended commercial blister configuration to start the stability clock."},{"title":"Validation plan","body":"Define the packaging validation plan (PQ/PPQ) and integrate it with the overall process-validation strategy for full commercial readiness."}]},{"kind":"split","title":"Why blister, not just bottle","before":{"label":"Bottle (launch SKU)","points":["Single high-count fill, simple high-throughput line","Lower per-unit packaging cost at the count used","Launch bottle already on its own stability program","Adherence relies on patient self-counting","Less granular unit-of-use control"]},"after":{"label":"Blister (line-extension presentation)","points":["Engineered forming/lidding barrier tuned to shelf-life","Per-dose unit-of-use down to the individual cavity","Card layouts map to weekly/biweekly capsule strips","Requires tooling, films, trials, and its own stability","Aligns with regional unit-dose packaging preferences"]}},{"kind":"compare","title":"Configuration decision: two card layouts evaluated","caption":"Both options carry the same capsule count per carton; the trade is cavity geometry, tooling, and patient-facing layout. Industry rationale for unit-dose layouts (e.g. supporting adherence) is general and was not a stated project objective.","head":["Attribute","Config A, 2 x 14","Config B, 4 x 7"],"rows":[["Cards per carton","2 cards","4 cards"],["Cavities per card","14","7"],["Capsules per carton","28","28"],["Strip logic","Two-week strips","Single-week strips"],["Tooling footprint","Fewer, larger format","More, smaller format"],["CR/TE approach","Card-level CR peel/push","Card-level CR peel/push"]],"highlight":2},{"kind":"callouts","title":"Benchmarking the format: comparator and biosimilar presentations","items":[{"title":"Reference class","body":"The blister-versus-bottle choice was benchmarked against how <strong>comparator and biosimilar oral-oncology products</strong> present, bottle versus blister, unit-of-use versus loose count, and child-resistant / tamper-evident features."},{"title":"What the benchmark informed","body":"Comparator and biosimilar presentations strengthened the case for adding a <strong>unit-of-use blister</strong> for later line-extension strengths alongside the launch bottle."},{"title":"The compliance bar","body":"Reference packaging set the barrier, labeling and child-resistance expectations the commercial blister configuration had to meet or exceed."}]},{"kind":"stack","title":"Blister configuration and materials spec","groups":[{"label":"Format","items":["Thermoformed blister card","Cavity count and layout per chosen configuration (2x14 / 4x7)","Capsule presentation (oral hard-capsule product)","Carton as secondary pack"]},{"label":"Materials","items":["Forming film selected and locked to product","Lidding film selected and locked to product","Barrier matched to moisture sensitivity and shelf-life","Supplier qualification and draft material specs"]},{"label":"Compliance features","items":["Child-resistant (CR) requirement","Tamper-evident (TE) requirement","Barrier requirements defined up front","Specs drafted ahead of trials"]}]},{"kind":"flow","title":"How the work was sequenced","caption":"A linear plan from material lock to material on stability, mapped on a collaborative whiteboard and run against a fixed year-end-to-mid-Feb window straddling the holiday shutdowns.","steps":[{"label":"Select forming & lidding films","sub":"Lock materials to product and shelf-life"},{"label":"Qualify suppliers & draft specs","sub":"Material specs ahead of trials"},{"label":"Tooling & equipment PO","sub":"Use existing capacity; place tooling order, expedite"},{"label":"Develop pack test methods","sub":"Seal integrity, leak, MVTR, mechanical"},{"label":"Delivery, install, IQ/OQ","sub":"Qualify equipment and change parts"},{"label":"Mechanical trials","sub":"Placebo / blank blisters to set parameters"},{"label":"Engineering batches","sub":"Actual or surrogate drug product"},{"label":"Primary stability batch","sub":"Commercial blister configuration, ~mid-Feb"},{"label":"Place material on stability","sub":"Start the stability clock"}]},{"kind":"callouts","title":"Pack test methods defined for qualification","items":[{"title":"Seal integrity","body":"Confirm the forming-to-lidding seal is continuous and within parameters across the card, the primary defense for a moisture-sensitive product."},{"title":"Leak testing","body":"Detect channel leaks or pinholes in formed cavities that would compromise the barrier and shelf-life."},{"title":"MVTR","body":"Moisture vapor transmission rate of the formed pack, to verify the barrier meets the product's stability requirement."},{"title":"Mechanical tests","body":"Push-through / peel force and card robustness to confirm CR/TE function and patient usability without product damage."}]},{"kind":"metrics","title":"By the numbers","items":[{"value":"2","label":"Blister card configurations evaluated (2x14 and 4x7)"},{"value":"2","label":"Films to select and lock (forming + lidding)"},{"value":"4","label":"Pack test method families (seal, leak, MVTR, mechanical)"},{"value":"~12","label":"Working weeks in the planned PSB blister timeline"},{"value":"1","label":"Primary stability batch planned on the commercial configuration"},{"value":"2","label":"CR/TE compliance features designed in (child-resistant, tamper-evident)"}]},{"kind":"prose","heading":"Sequencing under a hard window","body":"The timeline was built backward from a <strong>mid-February PSB manufacturing target</strong> across roughly twelve numbered working weeks that, with two embedded holiday shutdown weeks (Thanksgiving and Christmas/New Year), spanned about thirteen calendar weeks. Two constraints drove the critical path: <strong>long-lead tooling and blister material</strong> had to be ordered and expedited while the quote and statement of work were still routing for approval, and <strong>IQ/OQ on the equipment and change parts</strong> had to complete before mechanical and engineering trials could begin.\n\nThe plan staged the work so that <strong>material selection and supplier qualification</strong> ran first and in parallel with method development, mechanical trials on placebo/blank blisters would de-risk the process parameters, and engineering batches with actual or surrogate drug product would confirm them before committing the primary stability batch on the true commercial configuration."},{"kind":"steps","title":"Deliverables and planned activities","items":[{"title":"Frozen blister configuration","body":"A design freeze on cavity count, card layout, CR/TE, and barrier requirements for the commercial presentation."},{"title":"Locked material specs","body":"Selected forming and lidding films with qualified suppliers and drafted material specifications."},{"title":"Process qualification plan","body":"Tooling installed against existing capacity, with equipment IQ/OQ and parameter-setting via mechanical and engineering trials defined as planned activities on the timeline."},{"title":"Primary stability batch (planned)","body":"A plan to manufacture a PSB on the intended commercial blister configuration and place it on stability at the mid-February target."},{"title":"Pack test method set","body":"Defined methods for seal integrity, leak, MVTR, and mechanical testing."},{"title":"Packaging validation plan","body":"A PQ/PPQ plan integrated with the overall process-validation strategy, with the activities and timing for full commercial readiness."}]},{"kind":"note","body":"This anonymized research case study is reconstructed from planning-stage materials; it describes the intended approach and timeline, not verified post-execution results. All names, products, sites, vendors, and figures have been removed or generalized. It illustrates an operations advisory approach to blister commercialization for an oral solid-dose oncology product and does not identify any client, asset, or vendor."}],
  },
  /* ───────────────────── N · Materials (BOM) internalization ───────────────────── */
  {
    slug: 'materials-internalization-playbook',
    collection: 'work',
    type: 'case-study',
    title: 'Materials (BOM) internalization: a make-vs-buy playbook for a cell-and-gene launch',
    crumb: 'Materials internalization',
    seoTitle: 'Drug-Substance Materials (BOM) Internalization, Make-vs-Buy Case Study',
    description: "Whether to internalize drug-substance bill-of-materials oversight from a CDMO: a roughly five-week make-vs-buy assessment across storage, planning, sourcing and quality, scenario by scenario.",
    keywords: 'materials internalization, bill of materials, BOM oversight, make vs buy, CDMO procurement fee, raw material QC, ERP LIMS',
    eyebrow: 'Cell & gene therapy · Materials / BOM internalization · Commercial-stage gene therapy (~$2B)',
    dek: "Whether to internalize drug-substance bill-of-materials oversight from a CDMO: a roughly five-week make-vs-buy assessment across storage, planning, sourcing and quality, scenario by scenario.",
    tags: ['Make vs buy', 'BOM / materials', 'CDMO', 'Cost modeling'],
    heroStat: { value: '4-scenario', label: 'make-vs-buy assessment of drug-substance BOM oversight, from fully outsourced to a client-owned warehouse' },
    datePublished: '2024-06-01',
    author: AUTHOR,
    blocks: [
      {
        "kind": "prose",
        "heading": "The work grew: a materials-internalization playbook",
        "body": "The launch-readiness work earned a second, enterprise mandate. The client, a roughly $2B commercial-stage gene-therapy company, was paying its drug-substance CDMO a materials-management <strong>procurement fee</strong>, a markup on pass-through raw-material and consumable costs, to fund a materials organization of <strong>100+ FTEs</strong> whose fully-loaded annual cost the CDMO put at roughly <strong>$20M</strong>. With a commercial bill of materials in the low millions per batch and volumes projected to scale, the question was whether to internalize oversight of the drug-substance BOM.\n\nA tight (~5-week) strategic assessment baselined the current BOM, storage, freight and insurance economics; model future-state OpEx, CapEx and savings across scenarios from fully outsourced to a client-owned warehouse; and map the staffing, ERP/inventory, LIMS and quality-system capabilities each scenario would require, plus the trigger points and sequencing to build them, with sensitivity across volume bands. It built on the materials-management and demand work from the launch-readiness effort, carrying the gap analysis scenario by scenario. The output was a go / no-go assessment with costs, timing, FTE needs and savings, supported by the demand and material-management analysis and a QA release model carried over from the launch-readiness work."
      },
      {
        "kind": "metrics",
        "title": "The materials-internalization assessment by the numbers",
        "items": [
          {
            "value": "low $M",
            "label": "Commercial bill-of-materials cost per batch (drug substance plus drug product)"
          },
          {
            "value": "multi-hundred",
            "label": "Distinct materials across the full BOM, spanning cell-bank, upstream, downstream and fill-finish"
          },
          {
            "value": "concentrated",
            "label": "Share of total BOM cost concentrated in a handful of the priciest materials"
          },
          {
            "value": "100+ FTE",
            "label": "CDMO materials-management organization the procurement fee covers"
          },
          {
            "value": "~5 weeks",
            "label": "Window for the go / no-go internalization assessment"
          },
          {
            "value": "flat fee",
            "label": "Percentage markup on pass-through costs renegotiated to a fixed annual fee"
          }
        ]
      },
      {
        "kind": "compare",
        "title": "BOM oversight: scenarios evaluated",
        "caption": "Each scenario weighed against current capabilities, key gaps, cost, savings and the systems and quality build required.",
        "head": [
          "Scenario",
          "Storage",
          "Planning & sourcing",
          "Quality / testing"
        ],
        "rows": [
          [
            "As-is with CDMO",
            "CDMO / 3PL",
            "CDMO",
            "CDMO"
          ],
          [
            "Keep storage with CDMO; client manages planning & suppliers",
            "CDMO",
            "Client",
            "CDMO"
          ],
          [
            "Third-party storage; client manages planning & suppliers",
            "New 3PL",
            "Client",
            "CDMO / contract lab"
          ],
          [
            "Client-owned warehouse, fully internalized",
            "Client",
            "Client",
            "Client QC for raw materials"
          ]
        ],
        "highlight": 3
      },
      {
        "kind": "callouts",
        "title": "What the materials deep-dive recommended",
        "items": [
          {
            "title": "Aggregate demand to win on price",
            "body": "Aggregating demand across CDMOs and process types could secure direct, tiered or fixed pricing on the costliest single-source reagents."
          },
          {
            "title": "Govern the BOM as a living asset",
            "body": "Recommended a standing BOM taskforce to control change approval and the annual cost adjustment, with version-over-version review to catch quantity and material discrepancies before they propagate."
          },
          {
            "title": "Sequence the capability build to volume",
            "body": "Internalization is not all-or-nothing: ERP/inventory, additional LIMS modules, supplier management, raw-material QC and safety-stock rules can be staged against volume trigger points rather than built all at once."
          },
          {
            "title": "Mind the hand-off risk",
            "body": "The biggest transition risk is roles and responsibilities: clear RACI between client, warehouse, testing labs and CDMO keeps materials from being dropped."
          }
        ]
      }
    ],
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   Optional LOCAL-ONLY client names (for on-screen review).
   Real names live in ./portfolio.clients.local.ts, which is GITIGNORED and
   never committed. import.meta.glob resolves to that file on a local machine
   (names render in dev + local build) and to NOTHING on the pushed repo /
   Cloudflare CI, so the deployed site is always fully ANONYMIZED.
   No client names live in this committed file.
   ────────────────────────────────────────────────────────────────────────── */
const localClientMods = import.meta.glob('./portfolio.clients.local.ts', { eager: true }) as Record<
  string,
  { REVIEW_CLIENTS?: Record<string, string> }
>;
/* Engagement timeframes (from the captured project dates). */
const TIMEFRAMES: Record<string, string> = {
  'gene-therapy-launch-readiness': '2023–2025',
  'materials-internalization-playbook': '2024–2025',
  'new-product-introduction-playbook': '2024–2025',
  'oncology-commercial-launch-supply': '2024–2026',
  'commercial-packaging-labeling-ndc-strategy': '2024–2025',
  'oral-oncology-blister-commercialization': '2024–2025',
  'rnd-quality-operating-model': 'Oct–Dec 2024',
  'external-manufacturing-network-resilience': '2022–2023',
  'cdmo-voice-of-customer-ai-roadmap': '2025–2026',
  'us-distribution-3pl-selection': '2024–2026',
  'clinical-supply-techops-acceleration': '2023–2024',
  'cmc-portfolio-prioritization': '2024',
  'clinical-supply-chain-dashboard': 'through 2026',
  'saas-pricing-data-analytics': '2022–2023',
  'ai-agents-consulting-operations': '2024–2025',
  'qms-governance-dashboards': '2022–2024',
  'pricing-trade-analytics-bi': '2022–2023',
};
for (const d of portfolioCaseStudies) d.timeframe = TIMEFRAMES[d.slug];

// Apply enriched, anonymized content mined from the full-text source (deeper
// narrative + accurate timeframe). Overrides the initial dek/blocks/timeframe.
for (const d of portfolioCaseStudies) {
  const e = ENRICHED[d.slug];
  if (!e) continue;
  if (e.dek) { d.dek = e.dek; d.description = e.dek; }
  // only override the timeframe when the enriched value carries a real year
  // (some came back as "Early 2020s"/""); otherwise keep the mapped range.
  if (e.timeframe && /\d{4}/.test(e.timeframe)) d.timeframe = e.timeframe;
  if (e.heroStat) d.heroStat = e.heroStat;
  if (e.faq && e.faq.length) d.faq = e.faq;
  if (e.blocks && e.blocks.length) d.blocks = e.blocks;
}

// "Keep reading", link each case study to two others.
const _pub = portfolioCaseStudies.filter((d) => !d.draft);
_pub.forEach((d, i) => {
  d.related = [_pub[(i + 1) % _pub.length], _pub[(i + 2) % _pub.length]].map((r) => ({
    href: `/portfolio/priyam-haryani/${r.slug}`,
    label: r.crumb ?? r.title,
    eyebrow: r.eyebrow,
  }));
});

// Final sweep: keep generic software-product names out of the metadata fields
// (title/desc/keywords/tags) too, matching the anonymized body.
const sanitize = (s: string): string => (s || '')
  .replace(/power ?bi/gi, 'low-code BI')
  .replace(/power automate/gi, 'workflow automation')
  .replace(/sharepoint/gi, 'a shared document store')
  .replace(/salesforce/gi, 'the CRM')
  .replace(/gainsight/gi, 'customer-success tooling')
  .replace(/smartsheet|outsystems/gi, 'a low-code platform');
for (const d of portfolioCaseStudies) {
  d.title = sanitize(d.title);
  if (d.seoTitle) d.seoTitle = sanitize(d.seoTitle);
  d.dek = sanitize(d.dek);
  d.description = sanitize(d.description);
  d.keywords = sanitize(d.keywords);
  d.tags = d.tags.map(sanitize);
}

const localClients = Object.values(localClientMods)[0]?.REVIEW_CLIENTS;
if (localClients) {
  for (const d of portfolioCaseStudies) {
    if (localClients[d.slug]) d.client = localClients[d.slug];
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   "Directly delivered by me": engagements Priyam personally produced,
   backed by timesheet hours. Anonymized first-person scope only: NO client
   names, NO hours, NO anonymized-away tool brands, NO em dashes. Slugs not
   listed here are left unmarked (insufficient personal-delivery hours).
   ────────────────────────────────────────────────────────────────────────── */
const CONTRIBUTIONS: Record<string, string> = {
  'gene-therapy-launch-readiness':
    'Delivered the hands-on supply-chain work behind this readiness assessment: the activity maps and functional timelines, the demand and capacity forecast, the clinical supply plan, and the QA-release model. Also produced the launch playbook across its iterations and the gap analysis. The framework was built and written, not just reviewed.',
  'new-product-introduction-playbook':
    'Authored the NPI playbook itself, built from the company\'s own launch history into the chapter structure, the backward-counting stage-gate timeline, the activity and RACI checklists, and the launch scenarios. Also built the supporting analysis: the functional timelines, demand-and-capacity scenarios, clinical supply plan timeline, and release-throughput model. Written, structured, and modelled end to end.',
  'materials-internalization-playbook':
    'Ran the make-versus-buy assessment hands-on: baselined the materials and demand picture, built the QA release model, modelled the scenarios from fully outsourced to a client-owned warehouse, and mapped the capabilities each would need. Produced the gap analysis and the material-management slides that fed it, plus the go / no-go recommendation.',
  'oncology-commercial-launch-supply':
    'I owned the commercial launch playbook on this engagement, the single largest piece of the work, and built the launch supply plan, the patient-based demand scenarios, and the readiness structure the team worked from. I also produced the packaging architecture and NDC structure (bottle, blister and stability slides, distribution design) that the supplier selection and serialization work were anchored to.',
  'commercial-packaging-labeling-ndc-strategy':
    'Built the packaging and NDC materials at the centre of this work: the pack-and-label slides, the NDC and serialization-readiness slides, and the bottle, blister and distribution analysis that fed the network design. Also reviewed the RFP and produced the packaging renders and guidance deck, so the vendor screen and the US-versus-EU model had concrete artefacts to decide against.',
  'oral-oncology-blister-commercialization':
    'Worked the packaging-format question hands-on: the configuration and materials analysis, the comparator benchmark, the packaging and stability slides, and the validation-and-stability plan mapping the blister presentation to a commercial timeline. Mapped the end-to-end sequence on a collaborative whiteboard so the format decision, materials lock and validation steps lined up against the manufacturing window.',
  'cdmo-voice-of-customer-ai-roadmap':
    'Ran the Voice-of-Customer interviews and built the quality material behind the diagnosis. Co-authored the structured interview questionnaire, scored each engagement across the nine dimensions, captured the why behind every score, and turned the won-versus-lost contrast and quality findings into the operating-model recommendations.',
  'rnd-quality-operating-model':
    'Built the maturity model matrix leadership scored the current operating model against, and wrote the functional-expert interview summaries (embedded and non-embedded areas) plus the quotes and count slides that calibrated each score, so the baseline reflected what people actually said. Also produced the connect-workshop deck, guiding principles, scoring criteria, tree map and activity heatmap that turned the assessment into something leadership could react to live.',
  'external-manufacturing-network-resilience':
    'Built the risk heat map that scored the network, iterating the impact-versus-vulnerability scoring template through several versions and weighting schemes, including a geographic-concentration dimension, and turned each pass into the board decks (static and dynamic) the technical-operations team carried into the readout.',
  'qms-governance-dashboards':
    'Built the QMS governance dashboard solution on an enterprise low-code application platform, designing the screens and logic, wiring a low-code data tool into the backend, and instantiating one repeatable board layout per module plus the cross-module roll-up. Wrote the multi-version training manual and ran the platform enablement so the quality team could run and extend it independently.',
  'cmc-portfolio-prioritization':
    'Produced the capacity-and-loading view at the heart of this work, the per-person FTE and budget graphs, plus the workshop and post-workshop decks leadership aligned around: timelines, executive summary, stakeholder and vendor mapping, risk and gaps, and the serialization and PPQ-scenario prep that fed the launch workshop.',
  'pricing-trade-analytics-bi':
    'Built the multi-project pricing and sales-analytics BI from the data model up: the retention-rate, single-time-buyer and repeat-versus-new-buyer views, the sales-performance and price-volume-mix (PVM) waterfall dashboards, and the reconciliation checks that validated every calculation against the source data, plus the project-by-project training manual so the team could extend it independently.',
  'ai-agents-consulting-operations':
    'Built both agents end to end: prototyped the RFP chatbot, rebuilt it as a platform agent grounded in the proposal library, produced the demo recording and the conference deck, and built the first SOP-driven version of the CRM agent. Completed the full platform enablement track (nine sessions plus guided exercises), and had written the manual RFP responses that motivated the automation in the first place.',
};
for (const d of portfolioCaseStudies) {
  const c = CONTRIBUTIONS[d.slug];
  if (c) {
    d.directlyDelivered = true;
    d.contribution = c;
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   Per-SECTION local controls (committed in portfolio.local.json):
     { "<slug>": { "hiddenBlocks": [int...], "edits": { "<blockIndex>": { "<field.path>": value } } } }
   - edits override individual block fields (inline editing on local).
   - hiddenBlocks drop a block from the LIVE build; on dev they stay (marked).
   Toggled/edited via the Hide button + contenteditable on the local dev site
   (see astro.config.mjs dev middleware). Push to apply on live.
   ────────────────────────────────────────────────────────────────────────── */
const LOCAL = localBlockData as Record<
  string,
  { hiddenBlocks?: number[]; edits?: Record<string, Record<string, unknown>> }
>;
function setPath(obj: Record<string, unknown>, pathStr: string, value: unknown): void {
  const parts = pathStr.split('.');
  let o: any = obj;
  for (let k = 0; k < parts.length - 1; k++) {
    const key = parts[k];
    if (o[key] == null) o[key] = /^\d+$/.test(parts[k + 1]) ? [] : {};
    o = o[key];
  }
  o[parts[parts.length - 1]] = value;
}
for (const d of portfolioCaseStudies) {
  const loc = LOCAL[d.slug];
  if (!loc) continue;
  if (loc.edits) {
    d.blocks = d.blocks.map((b, i) => {
      const patch = loc.edits![String(i)];
      if (!patch) return b;
      const clone = JSON.parse(JSON.stringify(b));
      for (const [p, v] of Object.entries(patch)) setPath(clone, p, v);
      return clone;
    });
  }
  if (loc.hiddenBlocks && loc.hiddenBlocks.length) {
    const hide = new Set(loc.hiddenBlocks);
    if (import.meta.env.DEV) {
      d.blocks = d.blocks.map((b, i) => (hide.has(i) ? ({ ...b, __hidden: true } as typeof b) : b));
    } else {
      d.blocks = d.blocks.filter((_, i) => !hide.has(i));
    }
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   Project-stage diagrams. Anonymized SVGs redrawn FROM the real client slides
   (no client data), multiple per engagement, one per project stage. Shown as
   a "How it progressed" gallery on the detail page. Stage 1 doubles as the
   listing-card cover. Engagements without stage SVGs fall back to the single
   /portfolio/<slug>.svg cover.
   ────────────────────────────────────────────────────────────────────────── */
export interface PortfolioStage { label: string; src: string }

const stageSet = (slug: string, labels: [string, string, string]): PortfolioStage[] =>
  labels.map((label, i) => ({ label, src: `/portfolio/${slug}/s${i + 1}.svg` }));

export const portfolioStages: Record<string, PortfolioStage[]> = {
  'gene-therapy-launch-readiness': stageSet('gene-therapy-launch-readiness',
    ['Risk & gap assessment', 'Demand–capacity & S&OP', 'Labelling & kitting']),
  'new-product-introduction-playbook': stageSet('new-product-introduction-playbook',
    ['Playbook architecture', 'Stage-gate timeline', 'RACI & launch scenarios']),
  'oncology-commercial-launch-supply': stageSet('oncology-commercial-launch-supply',
    ['Launch supply plan', 'Demand scenarios & obsolescence', '3PL & pack-label selection']),
  'commercial-packaging-labeling-ndc-strategy': stageSet('commercial-packaging-labeling-ndc-strategy',
    ['Pack-and-label CMO selection', 'US-vs-EU network strategy', 'NDC & serialization readiness']),
  'oral-oncology-blister-commercialization': stageSet('oral-oncology-blister-commercialization',
    ['Blister vs bottle', 'Configuration & materials', 'PSB & validation timeline']),
  'rnd-quality-operating-model': stageSet('rnd-quality-operating-model',
    ['Oversight assessment', 'Maturity model & heatmap', 'Future-state operating model']),
  'external-manufacturing-network-resilience': stageSet('external-manufacturing-network-resilience',
    ['Supplier landscape & matrix', 'Operations resilience & risk', 'Global manufacturing network']),
  'cdmo-voice-of-customer-ai-roadmap': [
    { label: 'Voice-of-Customer program', src: '/portfolio/cdmo-voice-of-customer-ai-roadmap/s1.svg' },
    { label: 'Quality assessment cadence', src: '/portfolio/cdmo-voice-of-customer-ai-roadmap/s2.svg' },
    { label: 'Willingness-to-pay band', src: '/portfolio/cdmo-voice-of-customer-ai-roadmap/s4.svg' },
    { label: 'Phased leadership roadmap', src: '/portfolio/cdmo-voice-of-customer-ai-roadmap/s3.svg' },
  ],
  'us-distribution-3pl-selection': stageSet('us-distribution-3pl-selection',
    ['Distribution model design', '3PL benchmark & scorecard', 'Launch implementation']),
  'clinical-supply-techops-acceleration': stageSet('clinical-supply-techops-acceleration',
    ['Sprint kickoff & objectives', 'Critical-path map & RACI', 'Future-state operating model']),
  'clinical-supply-chain-dashboard': stageSet('clinical-supply-chain-dashboard',
    ['Participants', 'Inventory', 'Resupply']),
  'ai-agents-consulting-operations': stageSet('ai-agents-consulting-operations',
    ['RFP-response agent', 'CRM agent (SOP v1)', 'Enablement track']),
  'cmc-portfolio-prioritization': stageSet('cmc-portfolio-prioritization',
    ['Portfolio prioritization', 'Project–resource matrix', 'Capacity & loading']),
  'saas-pricing-data-analytics': stageSet('saas-pricing-data-analytics',
    ['Pricing model (GBB / CPQ)', 'Data migration pipeline', 'Cohort analytics']),
  'qms-governance-dashboards': stageSet('qms-governance-dashboards',
    ['Module governance boards', 'Escalations & assessment', 'Training & low-code']),
  'pricing-trade-analytics-bi': stageSet('pricing-trade-analytics-bi',
    ['Data sources & model', 'Pricing & trade dashboard', 'Assumptions & training manual']),
};

// Drop any engagements declared but not yet illustrated (e.g. awaiting material).
for (const k of Object.keys(portfolioStages)) {
  if (portfolioStages[k].length === 0) delete portfolioStages[k];
}

/** Listing-card cover: first project stage if present, else the single cover. */
export const coverFor = (slug: string): string =>
  portfolioStages[slug]?.[0]?.src ?? `/portfolio/${slug}.svg`;
