import type { Doc } from './content';
import { ENRICHED } from './portfolio.content';

/**
 * Priyam Haryani — independent advisory portfolio (HIDDEN page).
 *
 * Reconstructed from real pharma/biotech operations engagements, but every
 * entry is ANONYMIZED: no client names, no product names, no internal
 * codenames, no confidential financials or patient figures. Clients are
 * described by sector/stage only. Numbers are qualitative facts about the work
 * (e.g. "5 plan iterations"), never fabricated outcomes.
 *
 * These render at /portfolio/priyam-haryani/<slug> via the same ArticleShell /
 * ContentBlocks used by /work — but the section is excluded from the sitemap,
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
    seoTitle: 'Gene Therapy Commercial Launch Supply Chain — Case Study',
    description:
      'A first gene-therapy launch needed a fit-for-purpose commercial supply chain — from a risk & gap assessment to a demand-capacity model and a labelling-and-kitting operation.',
    keywords: 'gene therapy supply chain, commercial launch readiness, labelling and kitting, demand capacity model, S&OP, CDMO governance',
    eyebrow: 'Gene therapy · Commercial launch readiness',
    dek: 'A commercial-stage gene therapy company was preparing its first launch and needed a unique, fit-for-purpose commercial supply chain. The engagement grew from a one-off gap assessment into an enduring launch-readiness and capability-building program.',
    tags: ['Supply chain', 'Launch readiness', 'CDMO governance', 'S&OP'],
    heroStat: { value: '4-area', label: 'supply-chain readiness framework delivered' },
    datePublished: '2025-01-15',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'The client needed a launch-readiness assessment for a unique commercial supply chain — labeling/kitting, order management, distribution and demand planning — for a potentially blockbuster therapy. The kickoff scoped a <strong>Supply Chain Risk & Gap Assessment</strong> across three pillars: core process & scenario planning; resources, governance & partnerships; and launch timelines & change planning — all delivered with a deliberate "teach-to-fish" capability-building approach.',
      },
      {
        kind: 'flow',
        title: 'How the program progressed',
        steps: [
          { label: 'Gap & risk assessment', sub: 'Labeling/kitting, OM, distribution, demand' },
          { label: 'Executive updates', sub: 'Methodology, gaps, solution catalogue' },
          { label: 'Demand–capacity model', sub: 'Forecast + capacity, S&OP design' },
          { label: 'CDMO joint planning', sub: 'Capacity analysis, process review' },
          { label: 'Person-in-plant playbook', sub: '9-chapter operating playbook + dashboard' },
          { label: 'Enterprise launch model', sub: 'New-product-introduction playbook' },
        ],
        caption: 'A one-off launch assessment matured into ongoing supply-chain capability building across future products.',
      },
      {
        kind: 'callouts',
        title: 'What was built',
        items: [
          { title: 'Evaluation framework', body: 'A gap framework and readiness checklist that turned a fuzzy launch question into a prioritized, scored program.' },
          { title: 'Demand–capacity model', body: 'Demand forecast and capacity modeling feeding a new S&OP process and a design hand-off calendar.' },
          { title: 'Operating playbook', body: 'A multi-chapter person-in-plant playbook covering plant operations, exceptions, governance, metrics, systems and lifecycle management — linked to a live dashboard.' },
          { title: 'Institutionalized launch', body: 'A new-product-introduction playbook so launch preparedness carried from the first product to the next.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Assessment', items: ['Risk & gap assessment', 'Readiness checklist', 'Solution catalogue'] },
          { label: 'Planning', items: ['Demand–capacity model', 'S&OP process', 'Hand-off calendar', 'KPIs / RACIs'] },
          { label: 'Operate', items: ['Person-in-plant playbook', 'Operations dashboards', 'NPI launch playbook'] },
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
      'End-to-end commercial launch supply planning for an oncology therapy — five plan iterations, a launch-readiness playbook, CMC batch analysis, and 3PL / pack-and-label selection.',
    keywords: 'commercial launch supply plan, oncology launch readiness, 3PL selection, demand supply modeling, pack and label RFP',
    eyebrow: 'Oncology · Launch supply & 3PL',
    dek: 'An oncology biopharma approaching its NDA needed an end-to-end commercial launch supply plan. The work evolved from a demand backbone into a launch-readiness playbook and supplier selection for commercial launch.',
    tags: ['Launch supply', 'Demand–supply modeling', '3PL selection', 'Commercial readiness'],
    heroStat: { value: '5 iterations', label: 'launch supply plan, kickoff to selection' },
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
          { label: 'Plan', items: ['Launch supply plan (v1–v5)', 'Production & inventory plans', 'Scenario & obsolescence planning'] },
          { label: 'Readiness', items: ['Commercial playbook', 'CMC batch analysis', 'Capacity planning'] },
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
    seoTitle: 'R&D Quality Operating Model & Oversight — Case Study',
    description:
      'After a reorg blurred who-does-what across embedded quality teams, a structured diagnostic produced a maturity model, a future-state operating model, and an implementation plan.',
    keywords: 'R&D quality operating model, quality oversight, quality maturity model, operating model assessment, governance design',
    eyebrow: 'Large pharma · R&D quality',
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
      'Maturing an external-manufacturing supply base — API, drug product CMOs, packaging and distribution — with supplier matrices, business-continuity plans and a board-level network strategy.',
    keywords: 'external manufacturing, CMO network, technical operations, supplier business continuity, operations resilience, supply agreement management',
    eyebrow: 'Commercial dermatology · Tech ops',
    dek: 'A commercial-stage dermatology biopharma needed to mature its technical operations and external-manufacturing base — and make the network resilient as commercial demand ramped.',
    tags: ['External manufacturing', 'CMO network', 'Resilience', 'Tech ops'],
    heroStat: { value: '150+ docs', label: 'external-manufacturing program' },
    datePublished: '2023-03-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'Launching and scaling a commercial dermatology franchise, the client needed to mature its technical operations and external-manufacturing supply base — spanning API, bulk and finished drug product, packaging and distribution — and to keep the network resilient as demand grew.',
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
        body: 'The work fed a Technical Operations board presentation covering the global manufacturing network, commercial supply assurance and lifecycle management, and inventory optimization — including a scrap-exposure analysis across demand scenarios, confirmed production slots, a planned manufacturing slow-down to manage inventory, and a shelf-life extension to add supply-chain flexibility.',
      },
    ],
  },

  /* ───────────────────────── 5 · CDMO VOC + AI roadmap ───────────────────────── */
  {
    slug: 'cdmo-voice-of-customer-ai-roadmap',
    collection: 'work',
    type: 'case-study',
    title: 'A Voice-of-Customer program and AI enablement roadmap for a CDMO',
    crumb: 'CDMO business optimization',
    seoTitle: 'CDMO Voice-of-Customer & AI Enablement Roadmap',
    description:
      'A CEO-sponsored, confidential Voice-of-Customer program plus a quality-system review for a contract manufacturer — feeding operating-model recommendations and a prioritized AI roadmap.',
    keywords: 'CDMO business optimization, voice of customer program, quality system assessment, AI enablement roadmap, operating model recommendations',
    eyebrow: 'CDMO · Business optimization',
    dek: 'A global API contract manufacturer engaged a senior team for a business-optimization program — an active, confidential Voice-of-Customer effort and a quality-system review, then a proposed AI enablement roadmap.',
    tags: ['Voice of Customer', 'Quality', 'Operating model', 'Applied AI'],
    heroStat: { value: '10–20', label: 'client & leader interviews run' },
    datePublished: '2026-04-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'A contract manufacturer engaged a senior team for a business-optimization program across early-stage programs, API services, an active commercial Voice-of-Customer effort and a quality-system review — focused on its sites and customer markets.',
      },
      {
        kind: 'steps',
        title: 'How it ran',
        items: [
          { title: 'A confidential VOC process', body: 'A CEO-sponsored, fully confidential client-engagement process: a standard outreach script, mutual confidentiality agreements, independently conducted interviews, and aggregated-only feedback shared back to leadership.' },
          { title: 'A quality work-stream', body: 'Mapped key challenges through interviews with project managers and BD/quality leads, on a biweekly status cadence with leadership readouts.' },
          { title: 'Operating-model recommendations', body: 'Recommendations for business development (quote speed and attractiveness) and a fit-for-purpose quality model.' },
          { title: 'An AI enablement roadmap', body: 'A proposed follow-on translating the findings into a prioritized portfolio of AI use cases, a data/system-readiness assessment, and a pilot-to-implementation roadmap.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Discover', items: ['VOC engagement process', 'Interview program', 'Quality-system assessment'] },
          { label: 'Report', items: ['Biweekly LT status', 'Executive readouts', 'Operating-model recommendations'] },
          { label: 'Enable', items: ['AI maturity assessment', 'Use-case portfolio', 'Enablement roadmap'] },
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
    seoTitle: 'US Distribution Model Design & 3PL Selection — Case Study',
    description:
      'Designing a U.S. distribution model for a rare-disease launch, benchmarking specialty 3PLs on a 3-year total-cost model, and carrying through contracting to an implementation kickoff.',
    keywords: 'US distribution model, 3PL selection, specialty distribution, cold chain logistics, DSCSA, launch implementation',
    eyebrow: 'Rare disease · Distribution & 3PL',
    dek: 'A rare-disease biopharma was establishing its U.S. supply & distribution model ahead of launch — design the model, select and onboard a 3PL partner, then support implementation through go-live.',
    tags: ['Distribution', '3PL selection', 'Cold chain', 'Launch implementation'],
    heroStat: { value: '3 specialty 3PLs', label: 'benchmarked on a 3-year TCO' },
    datePublished: '2026-02-15',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The setup',
        body: 'The client was establishing its U.S. distribution model for a cold-chain rare-disease product ahead of commercial launch. The scope was to design an appropriate distribution model for the product/customer requirements, then select and onboard a suitable 3PL/4PL partner — with explicit intent to support the phases of US market entry, not stop at selection.',
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
      'A sprint-based program to keep clinical drug product, comparator and standard-of-care off the critical path for a multi-study oncology program — critical-path mapping, RACI and executive readouts.',
    keywords: 'clinical supply chain, TechOps, critical path mapping, agile sprints, RACI, study prioritization',
    eyebrow: 'Specialty/oncology · Clinical supply',
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
    eyebrow: 'Immuno-oncology · CMC portfolio',
    dek: 'An immuno-oncology biotech needed to prioritize its CMC portfolio and allocate a finite team across competing programs — from a workshop to a per-person, per-program capacity model.',
    tags: ['CMC', 'Prioritization', 'Capacity planning', 'Resource modeling'],
    heroStat: { value: 'per-person', label: 'capacity & loading model' },
    datePublished: '2024-06-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'The work',
        body: 'Beyond facilitating a prioritization workshop, the engagement built a detailed project–resource matrix allocating named CMC team members — across process & formulation development, drug substance, drug product and overall CMC — to specific activities and assets, tied to corporate goals.',
      },
      {
        kind: 'steps',
        title: 'From workshop to model',
        items: [
          { title: 'Prioritization workshop', body: 'Aligned leadership on the relative priority of programs and assets across the portfolio.' },
          { title: 'Project–resource matrix', body: 'Mapped people to activities and assets through a defined horizon, tied to "achieve filing readiness" and "advance pipeline" goals.' },
          { title: 'Capacity & loading views', body: 'Per-person and per-program capacity views (FTE %) that surfaced over- and under-allocation across the portfolio.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Align', items: ['Prioritization workshop'] },
          { label: 'Model', items: ['Project–resource matrices', 'Per-person capacity', 'Per-program loading'] },
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
    seoTitle: 'Clinical Supply Chain Dashboard (Power BI) — Case Study',
    description:
      'A built-and-delivered clinical supply chain dashboard on a Power BI + SharePoint + Power Automate stack, with reconciliation logic that auto-flags mismatches before month-end sign-off.',
    keywords: 'clinical supply chain dashboard, Power BI, supply chain analytics, IRT reconciliation, inventory visibility, resupply planning',
    eyebrow: 'Oncology · Analytics product',
    dek: 'A clinical-stage oncology biopharma went "from fragmented reports to a single integrated view" with a delivered dashboard on a low-code analytics stack and a monthly refresh.',
    tags: ['Analytics', 'Power BI', 'Clinical supply', 'Reconciliation'],
    heroStat: { value: '3 pillars', label: 'participants · inventory · resupply' },
    datePublished: '2026-05-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'What it was',
        body: 'A built-and-delivered clinical supply chain dashboard taking the client from fragmented reports to a single integrated view — on a Power BI + SharePoint + Power Automate stack with a monthly data refresh.',
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
      'A pricing and data engagement for a SaaS platform — price-model handover and CPQ prototypes, a substantial data-migration and cleaning effort, and Power BI cohort analytics.',
    keywords: 'SaaS pricing model, CPQ prototype, data migration, data cleaning, cohort analysis, account health scoring',
    eyebrow: 'SaaS · Pricing & data',
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
          { title: 'Data migration & cleaning', body: 'A multi-step cleaning pipeline — accounts, contracts, domains, instance mapping and entitlements.' },
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

  /* ───────────────────────── 11 · LLM & Voice-AI market research ───────────────────────── */
  {
    slug: 'llm-voice-ai-market-research',
    collection: 'work',
    type: 'case-study',
    title: 'Sizing the LLM and Voice-AI markets across emerging economies',
    crumb: 'LLM & Voice-AI market research',
    seoTitle: 'LLM & Voice-AI Market Sizing — Research Case Study',
    description:
      'A market-research body of work assessing the size, growth and outlook of LLM and Voice-AI markets across multiple verticals and regions, with sourced comparative tables.',
    keywords: 'LLM market sizing, voice AI market, market research, AI in education, legal AI, AI in defense, AI in agriculture',
    eyebrow: 'Applied AI · Market research',
    dek: 'An applied-AI market-intelligence initiative assessing the size, growth and outlook of LLM and Voice-AI markets across emerging economies — Education, Legal, Defense, Agriculture, and Voice AI.',
    tags: ['Market research', 'Applied AI', 'Market sizing'],
    heroStat: { value: '4 verticals + Voice AI', label: 'market sizing, 2025–2030' },
    datePublished: '2025-09-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'What it was',
        body: 'A market-research body of work assessing the size, growth and outlook of LLM and Voice-AI markets across emerging economies (2025–2030), spanning multiple verticals plus Voice AI (ASR/TTS/STT, voice biometrics, virtual assistants, contact-center automation and speech analytics).',
      },
      {
        kind: 'callouts',
        title: 'Verticals covered',
        items: [
          { title: 'Education', body: 'Market sizing and growth projections for AI in education.' },
          { title: 'Legal', body: 'Comparative market-size and CAGR analysis for legal AI.' },
          { title: 'Defense', body: 'AI in aerospace & defense, sized globally and regionally.' },
          { title: 'Agriculture & Voice AI', body: 'AI in agriculture plus a dedicated Voice-AI market analysis.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Deliverables',
        groups: [
          { label: 'Outputs', items: ['Market-outlook presentation', 'Per-vertical analyses', 'Comparative data tables'] },
          { label: 'Method', items: ['Multi-sector sizing', 'CAGRs with sourcing', 'Regional breakdowns'] },
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
    seoTitle: 'Modernized QMS Governance Dashboards — Case Study',
    description:
      'A modernized QMS governance-dashboard solution organized as module-wise governance boards plus a cross-module board, delivered with a module-by-module training guide.',
    keywords: 'QMS governance dashboard, quality management system, governance boards, escalation management, low-code platform assessment',
    eyebrow: 'Quality systems · Governance',
    dek: 'A large global pharma needed a modernized quality-management-system governance solution — module-wise governance boards plus a cross-module board, with escalation, assessment and architecture views.',
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
          { label: 'Adopt', items: ['Module-by-module training guide', 'Low-code platform capability assessment'] },
        ],
      },
    ],
  },

  /* ───────────────────────── 13 · Pricing & trade analytics (BI) ───────────────────────── */
  {
    slug: 'pricing-trade-analytics-bi',
    collection: 'work',
    type: 'case-study',
    title: 'Power BI pricing and trade analytics with a self-serve training manual',
    crumb: 'Pricing & trade analytics',
    seoTitle: 'Power BI Pricing & Trade Analytics — Case Study',
    description:
      'A multi-project Power BI "BI solution" delivering pricing & trade analytics — documented data models, dashboards and assumptions, with a project-by-project training manual for self-serve maintenance.',
    keywords: 'Power BI pricing analytics, trade analytics, Power Query data model, BI training manual, CPG analytics',
    eyebrow: 'CPG · BI & analytics',
    dek: 'A CPG pricing & trade analytics client needed a multi-project Power BI solution — and the ability to maintain and extend it independently.',
    tags: ['Power BI', 'Pricing', 'Analytics', 'Enablement'],
    datePublished: '2023-05-01',
    author: AUTHOR,
    blocks: [
      {
        kind: 'prose',
        heading: 'What it was',
        body: 'A multi-project Power BI "BI solution" delivering pricing & trade analytics. For each project the solution documents data sources, the data model and table relationships, dashboard filters, charts, and explicit assumptions — combining raw yearly data dynamically in Power BI, with mapping files handled via Power Query.',
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
          { label: 'Build', items: ['Power BI dashboards', 'Power Query models', 'Mapping files'] },
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
    seoTitle: 'Supply Chain New Product Introduction (NPI) Playbook — Case Study',
    description: "How we built a reusable New Product Introduction playbook and reporting layer so a cell-and-gene-therapy company's supply chain could run every future launch consistently.",
    keywords: 'new product introduction, NPI playbook, product launch playbook, supply chain readiness, stage-gate timeline, RACI, launch scenarios',
    eyebrow: 'Cell & gene therapy · New product introduction',
    dek: "How we built a reusable New Product Introduction playbook and reporting layer so a cell-and-gene-therapy company's supply chain could run every future launch consistently.",
    tags: ['NPI playbook', 'Launch readiness', 'Supply chain', 'Governance'],
    heroStat: {"value":"7-chapter","label":"reusable NPI Playbook, plus a 14-section Supply Chain Strategic Plan and an ongoing reporting build"},
    faq: [{"q":"How is an NPI playbook different from the launch-readiness work that precedes it?","a":"Launch-readiness work gets one specific product to market. A playbook makes the process repeatable: it captures the lessons, sequences every supply-chain activity against a backward-counting stage-gate timeline, assigns cross-functional ownership, and codifies the scenarios that reset the plan, so the next introduction (internal or in-licensed) runs to a standard rather than from scratch."},{"q":"How do you keep a playbook from becoming shelf-ware?","a":"Three mechanisms. It is published where the team already works and is navigable to specific sections; it is owned and governed with named chapter owners and a defined update cadence tied to development milestones; and it is paired with an ongoing reporting layer plus a continuous-improvement feedback loop, so using it and updating it are part of running programs, not a separate chore."},{"q":"What does it take to build one, and who needs to be involved?","a":"It is built from the client's own history (we used three real launch cases) through frequent working sessions with supply-chain leadership and SMEs, validated in a multi-day cross-functional workshop. Beyond Supply Chain, you need Clinical, Regulatory, Commercial Quality, TechOps, and Commercial at the table, plus input from external manufacturing and testing partners, because the critical path runs straight through their hand-offs."}],
    datePublished: '2025-02-15',
    author: AUTHOR,
    blocks: [{"kind":"prose","heading":"The situation","body":"A <strong>commercial-stage cell-and-gene-therapy company</strong> had successfully launched its first product, but every new-product introduction that followed was being run from scratch. Supply-chain knowledge lived in the heads of a handful of leaders and in scattered slide decks, spreadsheets, and a folder of reference materials. As the pipeline grew to include <strong>internally developed and in-licensed programs</strong> spanning multiple modalities, that improvised approach was no longer safe.\n\nThe Supply Chain organization needed a repeatable way to bring any new product to clinic and to market: a single source of truth that captured when each activity must start, who owns it, and which risks to mitigate. The mandate was to build a reusable <strong>New Product Introduction (NPI) Playbook</strong> for Supply Chain and its cross-functional dependencies, and to stand up ongoing reporting so the team could run future introductions consistently rather than reinventing the process each time."},{"kind":"prose","heading":"The mandate","body":"We were engaged to deliver two things. First, a <strong>Product Launch Playbook</strong> for the Supply Chain organization and its interactions with other functions and partners. Second, an <strong>ongoing low-code reporting and dashboard build</strong> to support supply-chain status monitoring and new-product planning.\n\nThree desired outcomes framed the work: a launch playbook covering Supply Chain and its cross-functional dependencies; <strong>ongoing NPI preparedness</strong> for new products driven by either internal or external development; and a strong, shared understanding of the <strong>end-to-end (E2E) supply-chain strategy</strong> across sourcing, manufacturing, distribution, and inventory management. Scope was explicitly all activities under the Supply Chain organization, with interfaces into Clinical, Regulatory, Commercial Quality, TechOps, and Commercial."},{"kind":"steps","title":"How the playbook was built","items":[{"title":"Mine the lessons learned","body":"We started by dissecting the company's own track record: the first commercial launch, an in-flight multi-year program, and a near-term program in a different modality. Three real cases became the structural backbone, surfacing recurring failure modes in cross-functional communication, lot release, and inventory visibility."},{"title":"Anchor everything to a \"minus-months\" timeline","body":"Every activity was mapped to a stage-gate framework counting backward from launch (roughly t-27 through t-0). This turned a vague to-do list into a sequenced critical path with clear lead-time triggers for each supply-chain function."},{"title":"Capture requirements as activity checklists","body":"For each stage we documented the activity, the right time to begin it, the parties to involve, and the risks to mitigate, plus watch-outs for time-consuming steps such as import requirements, QP release, shipping qualifications, and label-pack validations."},{"title":"Iterate weekly with SMEs and leadership","body":"Draft materials were refined in frequent working sessions with Supply Chain leadership and SMEs, with targeted input from TechOps, manufacturing, commercial, regulatory, and quality, and from external manufacturing and testing partners as needed."},{"title":"Validate in a multi-day cross-functional workshop","body":"A structured offsite walked the playbook chapter-by-chapter against live programs, flagged every cross-functional input, resolved gaps and risks, and assigned owners and deadlines, converting the draft into an operational V2."}]},{"kind":"stack","title":"What's inside the playbook: the seven chapters","groups":[{"label":"1. Introduction","items":["Objectives, scope, and when to use the playbook","Corporate goals and Supply Chain objectives","Continuous-improvement feedback loop to keep it current"]},{"label":"2. Recent experiences & lessons learned","items":["Early, structured CMC checkpoints with internal teams and external manufacturers","Change management and contingency planning","Global inventory visibility and controls","Lead-time alignment for new-country additions","Partner ability to deliver on critical requirements"]},{"label":"3. Key stakeholders in scope","items":["Roles across Supply Chain functions and interfaces","Ownership and responsibility mapping (RACIs)","Program-specific stakeholder template to fill at kickoff"]},{"label":"4-5. Clinical & commercial readiness","items":["Stage-by-stage clinical readiness timeline and checklist","Commercial readiness timeline and checklist","Stage-appropriate templates with input and impact points"]},{"label":"6. Key scenarios & implications","items":["Trigger-based playbooks for events that reset the timeline","Scenario owners lead impact analysis and plan of action"]},{"label":"7. Reference documents","items":["Supply Chain Strategic Plan and related references","Clinical- and commercial-readiness reference materials","Templates and sample completed exhibits"]}]},{"kind":"callouts","title":"The six launch scenarios codified in the playbook","items":[{"title":"New indication","body":"Triggered by a Clinical Strategy update; managed as a fresh NPI, often on a compressed timeline."},{"title":"Manufacturing process / network change","body":"Triggered by manufacturing or supply-chain strategy updates; may require a full checklist impact analysis."},{"title":"New geography","body":"Triggered by regulatory approvals; typically spins up a new project off the commercial-readiness checklist."},{"title":"New presentation or packaging","body":"Triggered by a packaging challenge; requires a targeted impact analysis and plan."},{"title":"Strategic label update","body":"Triggered by regulatory or CMC change; runs as a change control scoped to the listed activities."},{"title":"New formulation","body":"Triggered by Clinical Strategy, study-design, or protocol changes; usually treated as a new NPI."}]},{"kind":"split","title":"From ad hoc launches to a repeatable system","before":{"label":"Before: every launch from scratch","points":["Process knowledge held by a few leaders and scattered files","No common view of when activities must start","Cross-functional communication gaps and lot-release surprises","Late country decisions cascading into label, depot, and serialization delays","Each new asset re-learning the same lessons"]},"after":{"label":"After: the NPI Playbook","points":["Single, governed source of truth on the team's existing collaboration platform","Activities anchored to a backward-counting stage-gate timeline","Clear RACIs across Clinical, Regulatory, Quality, TechOps, Commercial","Stage-appropriate checklists, templates, and explicit watch-outs","Scenario playbooks and a reporting layer for ongoing preparedness"]}},{"kind":"flow","title":"The Supply Chain Strategic Plan: a living, asset-specific roadmap","caption":"Initiated early (~t-27) and refreshed at IND, pivotal-trial readiness, BLA submission, and launch.","steps":[{"label":"Strategic foundation","sub":"Executive summary, market & portfolio context, objectives & KPIs, lifecycle readiness"},{"label":"Structural design","sub":"E2E manufacturing/storage/distribution, capacity & scalability, risk & mitigation"},{"label":"Execution tools & readiness","sub":"Quality & regulatory, technology & digital supply chain, financial strategy, metrics, ESG"},{"label":"Operating model & governance","sub":"Partner governance & communication; legal & contractual infrastructure"}]},{"kind":"callouts","title":"A concrete watch-out the playbook makes unmissable","items":[{"title":"Lock clinical countries by t-12 (domestic) / t-6 (international)","body":"If the country list is not confirmed in time, a chain of dependencies stalls: country-specific label text cannot be finalized, depots cannot be selected and qualified, packaging design and serialization (which depend on the number and languages of countries) slip, and QP-release, translation, and distribution budgets cannot be locked."},{"title":"Why it sits in the playbook, not in someone's head","body":"This is exactly the kind of lead-time rule that used to live with a single experienced leader. Encoding it as a dated checklist trigger, with the downstream impacts spelled out, is what turns the playbook from a reference into an operating control."}]},{"kind":"metrics","title":"The build by the numbers","items":[{"value":"2","label":"Deliverables: the NPI Playbook plus an ongoing low-code reporting/dashboard build"},{"value":"7","label":"Playbook chapters, from introduction through reference documents"},{"value":"3","label":"Real launch cases mined to form the structural backbone"},{"value":"6","label":"Launch scenarios codified, each with a defined trigger and owner"},{"value":"6","label":"Supply-chain functions in scope, plus cross-functional interfaces"},{"value":"~t-27","label":"Earliest stage-gate anchor, counting backward to launch (t-0)"}]},{"kind":"compare","title":"Stakeholder ownership across the launch (illustrative RACI)","caption":"The playbook assigns Responsible/Accountable/Consulted/Informed across functions for each activity.","head":["Activity","Supply Chain","Clinical","Regulatory","Quality","TechOps","Commercial"],"rows":[["Set readiness timeline","A/R","C","C","I","C","I"],["CMC inputs & tech transfer","C","I","C","C","A/R","I"],["Country / label decisions","R","C","A","C","I","C"],["QP & shipping qualification","A/R","I","C","C","C","I"],["Commercial artwork & serialization","R","I","C","C","C","A"]],"highlight":1},{"kind":"prose","heading":"Deliverables and impact","body":"The engagement produced a published, version-controlled <strong>NPI Playbook</strong> (taken from first draft to a workshop-validated V2) covering seven chapters: introduction, lessons learned, stakeholders, clinical and commercial readiness timelines with checklists, scenarios, and references. Underneath it sits a set of reusable <strong>input templates</strong>, a Clinical Supply Plan with versioned cadence and country-timing rules, a depot enablement checklist, an E2E manufacturing/storage/distribution plan, and the 14-section Supply Chain Strategic Plan.\n\nAlongside the playbook, we delivered the <strong>ongoing low-code reporting build</strong>, designing program status-monitoring dashboards and iterating requirements through a define-measure-analyze-improve-control loop, with a path to roll templates from pilot programs out to the rest of the portfolio. The most durable result is structural: the organization moved from launching each product from memory to running new product introductions, internal or in-licensed, against a <strong>single governed standard</strong>, with <strong>named chapter owners</strong>, an update cadence tied to development milestones, sequenced lead times, and a built-in continuous-improvement loop, so the next launch starts from the codified standard rather than from tribal knowledge."},{"kind":"note","body":"All identifying details, including the client, its products and program codes, individuals, partners, sites, and software products, have been removed or generalized. This case study describes the work at the level of approach and structure only."}],
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   Optional LOCAL-ONLY client names (for on-screen review).
   Real names live in ./portfolio.clients.local.ts, which is GITIGNORED and
   never committed. import.meta.glob resolves to that file on a local machine
   (names render in dev + local build) and to NOTHING on the pushed repo /
   Cloudflare CI — so the deployed site is always fully ANONYMIZED.
   No client names live in this committed file.
   ────────────────────────────────────────────────────────────────────────── */
const localClientMods = import.meta.glob('./portfolio.clients.local.ts', { eager: true }) as Record<
  string,
  { REVIEW_CLIENTS?: Record<string, string> }
>;
/* Engagement timeframes (from the captured project dates). */
const TIMEFRAMES: Record<string, string> = {
  'gene-therapy-launch-readiness': '2023–2025',
  'new-product-introduction-playbook': '2024–2025',
  'oncology-commercial-launch-supply': '2024–2026',
  'rnd-quality-operating-model': 'Oct–Dec 2024',
  'external-manufacturing-network-resilience': '2022–2023',
  'cdmo-voice-of-customer-ai-roadmap': '2025–2026',
  'us-distribution-3pl-selection': '2024–2026',
  'clinical-supply-techops-acceleration': '2023–2024',
  'cmc-portfolio-prioritization': '2024',
  'clinical-supply-chain-dashboard': 'through 2026',
  'saas-pricing-data-analytics': '2022–2023',
  'llm-voice-ai-market-research': '2025',
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

// "Keep reading" — link each case study to two others.
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
   Project-stage diagrams. Anonymized SVGs redrawn FROM the real client slides
   (no client data) — multiple per engagement, one per project stage. Shown as
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
  'rnd-quality-operating-model': stageSet('rnd-quality-operating-model',
    ['Oversight assessment', 'Maturity model & heatmap', 'Future-state operating model']),
  'external-manufacturing-network-resilience': stageSet('external-manufacturing-network-resilience',
    ['Supplier landscape & matrix', 'Operations resilience & risk', 'Global manufacturing network']),
  'cdmo-voice-of-customer-ai-roadmap': stageSet('cdmo-voice-of-customer-ai-roadmap',
    ['Voice-of-Customer program', 'Quality assessment cadence', 'AI enablement roadmap']),
  'us-distribution-3pl-selection': stageSet('us-distribution-3pl-selection',
    ['Distribution model design', '3PL benchmark & scorecard', 'Launch implementation']),
  'clinical-supply-techops-acceleration': stageSet('clinical-supply-techops-acceleration',
    ['Sprint kickoff & objectives', 'Critical-path map & RACI', 'Future-state operating model']),
  'clinical-supply-chain-dashboard': stageSet('clinical-supply-chain-dashboard',
    ['Participants', 'Inventory', 'Resupply']),
  'llm-voice-ai-market-research': stageSet('llm-voice-ai-market-research',
    ['Market sizing by vertical', 'Growth trajectory & CAGR', 'Voice-AI landscape']),
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
