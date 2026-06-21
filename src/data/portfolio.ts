import type { Doc } from './content';

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
      'A first gene-therapy launch needed a fit-for-purpose commercial supply chain — from a risk & gap assessment to a person-in-plant operating playbook and an enterprise launch model.',
    keywords: 'gene therapy supply chain, commercial launch readiness, person-in-plant playbook, demand capacity model, CDMO governance',
    eyebrow: 'Gene therapy · Commercial launch readiness',
    dek: 'A commercial-stage gene therapy company was preparing its first launch and needed a unique, fit-for-purpose commercial supply chain. The engagement grew from a one-off gap assessment into an enduring launch-readiness and capability-building program.',
    tags: ['Supply chain', 'Launch readiness', 'CDMO governance', 'S&OP'],
    heroStat: { value: '9-chapter', label: 'person-in-plant operating playbook delivered' },
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
const localClients = Object.values(localClientMods)[0]?.REVIEW_CLIENTS;
if (localClients) {
  for (const d of portfolioCaseStudies) {
    if (localClients[d.slug]) d.client = localClients[d.slug];
  }
}
