// AUTO-GENERATED — enriched, ANONYMIZED case-study content mined from the full-text
// source (no client/product/person/vendor names). Applied as overrides in portfolio.ts.
import type { Block } from './content';

export interface EnrichedContent { timeframe?: string; dek?: string; blocks: Block[]; }

export const ENRICHED: Record<string, EnrichedContent> = {
  "gene-therapy-launch-readiness": {
    "timeframe": "2023–2024",
    "dek": "How a commercial-stage gene-therapy company moved from a first-of-its-kind supply-chain launch readiness assessment to a person-in-plant operating playbook and an enterprise new-product-introduction framework.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "A commercial-stage gene-therapy company was preparing the launch of its lead gene-therapy product — widely regarded internally as the most critical launch in its pipeline, and one of the largest single-use biologics processes in the industry by reactor runs per year. As a <strong>first-of-its-kind gene therapy</strong>, it carried supply-chain, traceability, resourcing and oversight requirements with no established playbook to draw on.\n\nWe were engaged to assess <strong>commercial supply-chain launch readiness</strong>: to evaluate the core processes and operating model for planning the commercial supply chain, identify gaps and risks, and propose pragmatic, phase-appropriate solutions. The mandate was explicitly fit-for-purpose — surface immediate crunches, iterate on solutions without over-engineering, and stay stage-appropriate given approval uncertainty."
      },
      {
        "kind": "flow",
        "title": "How the work unfolded",
        "caption": "A launch-readiness assessment that expanded into operating playbooks across two fronts.",
        "steps": [
          {
            "label": "Launch readiness assessment",
            "sub": "8-week core-process and operating-model evaluation against a structured framework"
          },
          {
            "label": "Scenario & capacity modeling",
            "sub": "Labelling/kitting flow scenarios and a demand-capacity model for finishing suites"
          },
          {
            "label": "Person-in-plant operating playbook",
            "sub": "Governance, RACI, KPIs and a batch dashboard for at-the-CDMO oversight"
          },
          {
            "label": "Enterprise NPI playbook",
            "sub": "Generalized the launch operating model into a repeatable new-product-introduction approach"
          },
          {
            "label": "BOM oversight internalization study",
            "sub": "A separate ~5-week strategic assessment of bringing raw-material management in-house"
          }
        ]
      },
      {
        "kind": "stack",
        "title": "The launch-readiness framework",
        "groups": [
          {
            "label": "Supply chain planning",
            "items": [
              "Demand plan (clinical + commercial)",
              "Supply plan",
              "Capacity plan",
              "Inventory management",
              "Scenario planning"
            ]
          },
          {
            "label": "CDMO management",
            "items": [
              "Relationship management / CMO governance",
              "Communication methods",
              "Person in plant"
            ]
          },
          {
            "label": "Labelling & kitting operation",
            "items": [
              "Kit-level serialization",
              "Space requirements",
              "Resource requirements",
              "Clinical requirements"
            ]
          },
          {
            "label": "Order management & logistics",
            "items": [
              "Order details and processing",
              "Quality & on-time-delivery KPIs",
              "Cold-chain box prep, transport, proof of delivery"
            ]
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Modeling capacity and product flow",
        "body": "At the fill-finish CDMO, finished-goods packaging ran across <strong>four cold-chain packaging suites</strong> with vision systems available in only some of them — a hard constraint, since labelling and kitting compete for the same suites, crews and QA-release hours. We built a <strong>demand-capacity model</strong> translating quarterly ordered-batch forecasts for vial labelling and kitting into monthly suite, crew and QA-release requirements, and stress-tested it against rising demand bands.\n\nThe model exposed the real bottleneck: facility capacity was not the binding limit — <strong>crew staffing was</strong>. It also informed a strategic pack-to-order vs. pack-to-inventory decision: pack to order in the early years, shifting to pack to inventory as demand scaled. We evaluated multiple labelling-and-kitting flow scenarios (flow-through, label-to-inventory and kit-to-inventory variants, in both automated and manual modes) to keep the line resilient under shortage conditions."
      },
      {
        "kind": "metrics",
        "title": "Scope of the analysis",
        "items": [
          {
            "value": "8 weeks",
            "label": "Core launch-readiness assessment timeline"
          },
          {
            "value": "4",
            "label": "Cold-chain packaging suites modeled"
          },
          {
            "value": "4",
            "label": "Labelling/kitting flow scenarios evaluated"
          },
          {
            "value": "~5 weeks",
            "label": "BOM internalization strategic assessment"
          },
          {
            "value": "~131",
            "label": "FTEs in the CDMO materials-management team assessed"
          },
          {
            "value": "5",
            "label": "BOM internalization scenarios (outsourced to fully internal)"
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "Person-in-plant operating playbook",
        "items": [
          {
            "title": "Governance & RACI",
            "body": "A roles-and-responsibilities matrix spanning commercial, clinical, supply chain, quality, the CDMO and logistics partners — clarifying ownership of demand, supply, capacity, inventory, CMO governance and order management to prevent tasks being dropped at the seams."
          },
          {
            "title": "On-site oversight model",
            "body": "A defined person-in-plant role and communication cadence so the sponsor maintained real-time visibility into batch status at the contract finisher."
          },
          {
            "title": "Batch dashboard",
            "body": "A dynamic, low-code-style batch dashboard for person-in-plant tracking, plus a design hand-off calendar and process flow tying patient orders through to proof of delivery."
          },
          {
            "title": "S&OP cadence",
            "body": "A sales-and-operations-planning structure and meeting rhythm integrating clinical and commercial demand against shared finishing infrastructure."
          }
        ]
      },
      {
        "kind": "split",
        "title": "From one launch to a repeatable capability",
        "before": {
          "label": "Where it started",
          "points": [
            "Single first-of-its-kind launch",
            "No established gene-therapy supply-chain playbook",
            "Ad-hoc CDMO oversight",
            "Capacity decisions made without a shared model"
          ]
        },
        "after": {
          "label": "What it became",
          "points": [
            "Reusable launch-readiness framework",
            "Person-in-plant operating playbook with governance and KPIs",
            "Enterprise new-product-introduction approach",
            "Demand-capacity model as a standing planning tool"
          ]
        }
      },
      {
        "kind": "prose",
        "heading": "A parallel BOM-oversight study",
        "body": "As the launch work matured, the client asked us to assess <strong>internalizing oversight of its drug-substance bill of materials</strong> from its CDMOs — a separate, time-boxed (~5-week) strategic assessment. We baselined the per-batch BOM cost (driven heavily by a handful of single- and sole-source materials), benchmarked the top raw materials for savings, and modeled OpEx, CapEx and FTE requirements across scenarios ranging from fully outsourced to a sponsor-owned warehouse, with sensitivity to higher and lower volume bands.\n\nThe work produced a clear go / no-go view on costs, timing, staffing and potential savings — including identifying trigger points and the logical sequence for any future capability build-out."
      },
      {
        "kind": "steps",
        "title": "What we delivered",
        "items": [
          {
            "title": "Supply-chain risk & gap assessment",
            "body": "A prioritized gap list across planning, CDMO governance, labelling/kitting, and order management, scored by impact and ease."
          },
          {
            "title": "Demand-capacity model",
            "body": "An iteratively refined model converting batch demand into suite, crew and QA-release needs, with pack-to-order vs. pack-to-inventory guidance."
          },
          {
            "title": "Person-in-plant operating playbook",
            "body": "RACI, governance cadence, KPIs, S&OP structure and a batch dashboard for at-the-CDMO oversight."
          },
          {
            "title": "Enterprise NPI playbook",
            "body": "A generalized new-product-introduction operating model built from the launch work."
          },
          {
            "title": "BOM internalization assessment",
            "body": "A baseline, scenario model and go / no-go recommendation for bringing raw-material oversight in-house."
          }
        ]
      },
      {
        "kind": "note",
        "body": "This case study is an anonymized account of an operations-advisory engagement. All client, product, vendor, site and personnel identifiers have been removed, and figures are limited to non-identifying counts and scope quantities."
      }
    ]
  },
  "oncology-commercial-launch-supply": {
    "timeframe": "2024–2026",
    "dek": "Built launch-supply readiness for an oncology biopharma's first commercial product — production and inventory planning, demand-scenario and obsolescence modeling, and competitive selection of 3PL and pack-and-label partners.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "A clinical-stage oncology biopharma was approaching its first regulatory filing for a once-daily oral targeted therapy — its first-ever commercial product. The asset would launch as a single cold-chain SKU (a fixed-count bottle of capsules), with multiple lower-dose line-extension presentations planned to follow within two to three years and the launch SKU phased out as they arrived.\n\nThe company had a clinical supply chain but no commercial supply operation. It engaged us to build launch-supply readiness end-to-end: <strong>how much to make and hold, how to plan for uncertain demand and the eventual obsolescence of the launch SKU, and which external partners would package, serialize, store, and distribute the product</strong> — all sequenced to support an immediate, compliant launch the moment approval landed."
      },
      {
        "kind": "flow",
        "title": "How we structured the work",
        "caption": "Three parallel workstreams under one commercial-supply-readiness program.",
        "steps": [
          {
            "label": "Launch supply planning",
            "sub": "Production, batches, inventory, months-on-hand"
          },
          {
            "label": "Demand & obsolescence",
            "sub": "Scenario modeling across market-share cases"
          },
          {
            "label": "Supplier selection",
            "sub": "3PL plus pack-and-label / blister sourcing"
          },
          {
            "label": "Readiness governance",
            "sub": "Recurring cross-functional review cadence"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Kickoff: one source of truth for demand",
        "body": "We inherited two legacy demand forecasts built on older assumptions — one that materially under-estimated early uptake and one that over-estimated it. Before any production plan could be trusted, these had to be reconciled.\n\nWe rebuilt the demand picture from first principles: weighted dosing mix across the planned strengths, duration-of-therapy assumptions split by line of therapy, and an effective-patient-pool share. We benchmarked first-year uptake against a comparable recently launched therapy in the same indication, which revealed that the legacy models understated the minimum batch count needed for year one. That reconciled forecast became the shared input for every downstream supply, capacity, and sourcing decision."
      },
      {
        "kind": "metrics",
        "title": "Scope in numbers",
        "items": [
          {
            "value": "3",
            "label": "Demand scenarios modeled (base / upside / downside)"
          },
          {
            "value": "2",
            "label": "Legacy forecast models reconciled into one"
          },
          {
            "value": "4",
            "label": "3PL distributors competitively assessed"
          },
          {
            "value": "3",
            "label": "Pack-and-label CMOs in the initial RFP"
          },
          {
            "value": "2",
            "label": "Line-extension packaging options (bottle vs. blister)"
          },
          {
            "value": "2",
            "label": "Blister configurations quoted (4x7 and 2x14)"
          }
        ]
      },
      {
        "kind": "steps",
        "title": "Launch supply & inventory planning",
        "items": [
          {
            "title": "Production sizing",
            "body": "Translated the reconciled forecast into capsules required per year, then into commercial batch counts against a fixed batch yield — establishing a minimum launch batch build rather than the single batch the legacy plans implied."
          },
          {
            "title": "Months-on-hand & safety stock",
            "body": "Set target inventory and safety-stock levels to absorb approval-timing uncertainty and supply-chain disruption, drawing on validation-batch stock to bridge any gap between launch readiness and approval."
          },
          {
            "title": "Rapid-launch contingency",
            "body": "Designed a two-batch launch plan — an at-risk first batch built ahead of approval plus a contingency batch in case of late label changes — to hit an aggressive ship-after-approval window."
          },
          {
            "title": "Palletization & network flow",
            "body": "Worked out the full physical chain — capsules per bottle, bottles per shipper, shippers per pallet — to size storage, shipping, and validation needs across the launch network."
          }
        ]
      },
      {
        "kind": "split",
        "title": "Demand-scenario & obsolescence planning",
        "before": {
          "label": "The risk",
          "points": [
            "Uncertain approval and line-extension timing",
            "Launch SKU deliberately short-lived — to be phased out as line extensions arrive",
            "Over-building risks scrapping unsold, dated launch stock",
            "Under-building risks stockout at launch"
          ]
        },
        "after": {
          "label": "What we built",
          "points": [
            "Base, upside, and downside demand cases driving batch counts",
            "Production tied to the launch-then-migrate SKU roadmap",
            "Inventory held just deep enough to cover approval-timing risk without overstocking",
            "Explicit plan to wind down launch-SKU supply as successors ramp"
          ]
        }
      },
      {
        "kind": "prose",
        "heading": "Supplier selection: 3PL and pack-and-label",
        "body": "Two competitive sourcing tracks ran in parallel.\n\nFor <strong>third-party logistics</strong>, we assembled a cross-functional assessment team and evaluated four candidate distributors — three established large-scale players plus one emerging provider. We scored them on compliance, scalability, IT integration, order accuracy, and on-time performance, ran site visits (one candidate was eliminated after an unfavorable visit), and produced a three-year total-cost view feeding a single recommendation.\n\nFor <strong>pack-and-label</strong>, we ran an RFP across three contract packagers for bottling, serialization, and labeling. One was paused after pricing came in high with low engagement at launch volumes; we then broadened the RFP — refreshed volumes, an added bidder, and the forthcoming blister configurations — and separated US from EU strategy, including QP-release routing for the European market."
      },
      {
        "kind": "callouts",
        "title": "Cross-cutting readiness we drove",
        "items": [
          {
            "title": "Serialization & master data",
            "body": "Stood up the regulatory-traceability foundation — company prefix, product identifiers, and serialization onboarding — required for compliant commercial distribution."
          },
          {
            "title": "Shipping validation",
            "body": "Framed a cold-chain shipping-validation program (master plan, risk assessments, operational and performance qualification) across each manufacturing and transport segment."
          },
          {
            "title": "External supply operating model",
            "body": "Defined a tiered supplier-oversight and governance framework so the growing external network could be managed consistently from launch onward."
          },
          {
            "title": "Readiness cadence",
            "body": "Instituted a recurring cross-functional commercial-supply-readiness meeting with a dashboard format to track milestones, risks, and decisions to launch."
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Conclusion & deliverables",
        "body": "The company moved from two conflicting legacy forecasts and no commercial supply operation to a single reconciled demand model, a defensible launch production and inventory plan, and shortlisted, site-verified partners for distribution and packaging — all governed by a standing readiness cadence.\n\n<strong>Deliverables:</strong> a reconciled multi-scenario demand and batch-forecast model; a launch supply and inventory plan with months-on-hand, safety stock, and a rapid-launch contingency build; an obsolescence-aware roadmap for the launch SKU and its line-extension successors; a four-candidate 3PL assessment with three-year cost analysis and recommendation; a multi-bidder pack-and-label RFP and US/EU packaging strategy; and the supporting serialization, shipping-validation, and supplier-governance frameworks."
      },
      {
        "kind": "note",
        "body": "Anonymized for public publication. Client, product, people, vendor, and location names and exact financials have been generalized; figures cited are structural counts from the engagement, not outcome claims."
      }
    ]
  },
  "rnd-quality-operating-model": {
    "timeframe": "Sep 2024 – Feb 2025",
    "dek": "Redesigning a global pharma's R&D quality operating model after a reorganization — from oversight assessment to a future-state hub-and-spoke with clear roles and hand-offs.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation",
        "body": "A large global pharmaceutical company engaged us to redesign the operating model for its R&D quality function. The function had historically been compliance-focused, prioritizing audits and inspection facilitation, with less emphasis on the strategic advisory role a modern quality organization plays in support of the quality management system.\n\nTo fill that gap, individual development functions had built their own embedded quality groups and central process teams. Following a major reorganization that strengthened and expanded the central quality business-partner role across all development functions, the result was <strong>overlap, duplicated effort, and a lack of clarity on who owns what</strong> in quality oversight of GxP operations."
      },
      {
        "kind": "prose",
        "heading": "The mandate",
        "body": "The objective was a coordinated approach to quality oversight built on three pillars: an optimal <strong>hub-and-spoke model</strong> that could be tailored to each functional area's needs; a clear understanding for both central-quality and embedded staff of their role in executing quality processes; and <strong>right-sized, synergistic scopes</strong> between the two to remove redundancy and improve productivity.\n\nThe work ran as two parallel workstreams: (A) a functional quality operating-model assessment, and (B) installation of a business-process-owner (BPO) network within R&D quality."
      },
      {
        "kind": "flow",
        "title": "Five-phase delivery plan",
        "caption": "Sequenced across the engagement, each phase anchored by a dated deliverable.",
        "steps": [
          {
            "label": "Information gathering & stakeholder engagement",
            "sub": "Interviews across embedded and central quality"
          },
          {
            "label": "Gap analysis & model development",
            "sub": "Build the quality maturity model"
          },
          {
            "label": "Recommendations development",
            "sub": "Future-state operating model & roles"
          },
          {
            "label": "Readout & implementation planning",
            "sub": "Stakeholder feedback and readouts"
          },
          {
            "label": "Finalization & execution preparation",
            "sub": "Implementation plan and long-term resourcing"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Discovery: structured interviews at scale",
        "body": "We designed two tailored interview guides — one for embedded quality and adjacent functions, one for the central R&D quality team — anchored in partnership principles of mutual trust, active listening, and acting as \"one team.\"\n\nInterviews probed structure, roles and responsibilities, success factors, and the resources each role needs. The discovery surfaced consistent themes: BPOs understood the role's importance but felt it needed reinforcement; there was confusion around empowerment and how processes should be managed; and stakeholders wanted more structured forums to exchange experience, find interdependencies, and share successes."
      },
      {
        "kind": "metrics",
        "title": "Discovery footprint",
        "items": [
          {
            "value": "2",
            "label": "parallel workstreams (operating model + BPO network)"
          },
          {
            "value": "18",
            "label": "BPO-workstream interviews scheduled"
          },
          {
            "value": "8",
            "label": "development functions mapped in the model"
          }
        ]
      },
      {
        "kind": "stack",
        "title": "The hub-and-spoke model",
        "groups": [
          {
            "label": "Hub — second-line quality (central)",
            "items": [
              "Provides strategic advice",
              "Facilitates engagement with quality-system elements",
              "Independent oversight of the QMS"
            ]
          },
          {
            "label": "Spoke — first-line quality (embedded)",
            "items": [
              "Functional process ownership",
              "Quality control and supplier monitoring",
              "Implementation of continuous improvements"
            ]
          },
          {
            "label": "Functions in scope",
            "items": [
              "Four with embedded quality groups",
              "Four without embedded quality",
              "Tailored spoke depth per functional need"
            ]
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The quality-owned activities heat-map",
        "body": "To turn principles into operating reality, we built a heat-map of quality-owned and quality-led activities. Every key activity was broken into process steps — across audits, inspection management, deviations and CAPA, escalation, risk management, procedural documents and change control, training, quality reviews, and vendor quality.\n\nFor each step we assigned a role using a <strong>three-tier responsibility model — Decision, Advisor, Informed</strong> — split across the central hub (BPO and quality business partner) and the embedded spoke (functional and clinical SMEs). The heat-map made overlaps and gaps visible at a glance and became the working artifact for resolving who decides versus who advises."
      },
      {
        "kind": "split",
        "title": "Operating model: before and after",
        "before": {
          "label": "Before",
          "points": [
            "Compliance-first quality function",
            "Embedded groups grown ad hoc to fill gaps",
            "Duplicated effort and misplaced resources",
            "Roles confirmed informally, never codified",
            "No shared view of quality oversight"
          ]
        },
        "after": {
          "label": "After",
          "points": [
            "Strategic hub-and-spoke oversight model",
            "Clear hub (advisory) vs. spoke (process ownership) split",
            "Activity-level Decision/Advisor/Informed mapping",
            "Defined hand-offs across functions",
            "BPO network with charter, governance, and training"
          ]
        }
      },
      {
        "kind": "steps",
        "title": "Deliverables",
        "items": [
          {
            "title": "Current-state operating-model assessment",
            "body": "Baseline of the existing quality operating models across development functions."
          },
          {
            "title": "Quality maturity model & future-state recommendations",
            "body": "A maturity model to assess the current state against, plus targeted future-state operating-model recommendations and the quality-owned activities heat-map."
          },
          {
            "title": "BPO network charter, change-management & training plan",
            "body": "Refreshed BPO role descriptions, governance framework, and a charter to formalize the network."
          },
          {
            "title": "Implementation & long-term resource plan",
            "body": "An implementation plan for the central and functional operating models, plus a long-term resource model for process-engineering and BPO roles."
          }
        ]
      },
      {
        "kind": "note",
        "body": "All identifying details — company, products, people, internal program and platform names, vendors, and sites — have been removed or generalized. Counts reflect figures stated in the source engagement materials."
      }
    ]
  },
  "external-manufacturing-network-resilience": {
    "timeframe": "Nov 2020 – Mar 2023",
    "dek": "Helping a commercial-stage dermatology biopharma mature its external manufacturing: CMO landscape, supplier-continuity, a resilience heat-map, network design, and a Tech Ops board readout.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "A commercial-stage dermatology biopharma was scaling a topical prescription franchise from launch into sustained commercial supply — entirely through an external manufacturing network. Every node was a contract partner: a single-source API supplier abroad, a finished drug-product CMO running compounding, fill, inspection and analytical testing, a separate packaging/serialization and distribution provider, and a sample-distribution 3PL.\n\nThat outsourced posture created concentration risk. Several critical steps sat with <strong>single sources</strong>, and the lead CMO carried known vulnerabilities. We were brought in to mature technical operations — mapping the supplier landscape, stress-testing business continuity, designing a more resilient global network, and packaging it into a Technical Operations board readout."
      },
      {
        "kind": "flow",
        "title": "How the work was sequenced",
        "caption": "From supplier intelligence to a board-ready resilience strategy.",
        "steps": [
          {
            "label": "CMO landscape & matrix",
            "sub": "Score the contract-manufacturer universe against fit criteria"
          },
          {
            "label": "Supplier continuity",
            "sub": "Stress-test single sources and the lead CMO"
          },
          {
            "label": "Resilience strategy",
            "sub": "Risk heat-map across the network"
          },
          {
            "label": "Network design",
            "sub": "Primary nodes plus qualified alternates"
          },
          {
            "label": "Board readout",
            "sub": "Tech Ops review with inventory & shelf-life plan"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Mapping the contract-manufacturer landscape",
        "body": "We built a CDMO sourcing matrix for the priority dosage form — a commercial-scale topical cream — and scored candidates on a 1–4 priority scale. Each supplier was profiled across two dimensions: <strong>capabilities & services</strong> (dosage forms handled, capacity and batch scale, development depth, analytical and QA/compliance posture, regulatory-inspection status, filling and packaging) and <strong>business profile</strong> (location, footprint, ownership, strategy, prior experience, and named internal contacts).\n\nThe screen confirmed the structural problem the client already felt: qualified, regulatory-inspected CMOs for prescription topical drug product are genuinely scarce, which is exactly why the network had drifted toward single sources."
      },
      {
        "kind": "compare",
        "title": "Supplier landscape, scored by fit",
        "caption": "Priority bands applied across the contract-manufacturer matrix for commercial-scale Rx topicals.",
        "head": [
          "Priority",
          "What it signalled",
          "Typical profile"
        ],
        "rows": [
          [
            "1 — Lead fit",
            "Inspected, commercial-scale, strong analytical",
            "Full-service topical CDMO, FDA-inspected"
          ],
          [
            "2 — Viable",
            "Right capabilities, gaps to close",
            "Late-stage to commercial, dev-leaning"
          ],
          [
            "3 — Partial",
            "Adjacent capability or scale mismatch",
            "Health-and-beauty or limited Rx scope"
          ],
          [
            "4 — Screen-out",
            "Off-strategy dosage or no fit",
            "Solid-dose or non-topical focus"
          ]
        ],
        "highlight": 0
      },
      {
        "kind": "split",
        "title": "De-risking the lead CMO",
        "before": {
          "label": "Concentration risk at outset",
          "points": [
            "Primary single-source CMO for finished drug product",
            "Open questions on its ability to meet milestone obligations",
            "A failed tech transfer at one partner (impurity out-of-specification)",
            "Ownership change at the lead site under a new private-equity owner",
            "API resting on a single supplier abroad"
          ]
        },
        "after": {
          "label": "Resilience moves identified",
          "points": [
            "Qualify a second alternate cream CMO (former multinational site, strong quality culture)",
            "Stand up an alternate API site to break single-source exposure",
            "Negotiate supply-failure and alternate-source rights into the supply agreement",
            "Pursue capacity able to serve additional markets and reduce cost of goods"
          ]
        }
      },
      {
        "kind": "prose",
        "heading": "Building continuity into the contract, not just the plan",
        "body": "Resilience had to be enforceable, so it was written into the manufacturing supply agreement. We supported terms defining a <strong>Supply Failure</strong> trigger — failure to deliver at least 95% of any ordered quantity, escalating through defined notice and cure windows, with repeated delivery delays in a calendar year also constituting failure.\n\nJust as important, the client retained the right to source product from an <strong>alternate manufacturing facility</strong> at any time — not only after a failure. Forecasting was structured as a rolling 18-month outlook with the first three months firm and binding, balancing the CMO's planning needs against the client's flexibility. Exclusivity was scoped to the active ingredient in topical use without locking the client into a single plant."
      },
      {
        "kind": "metrics",
        "title": "Scope of the technical-operations footprint",
        "items": [
          {
            "value": "7+",
            "label": "Network nodes mapped (API, alternate API, lead CMO, two alternate CMOs, packaging/serialization, sample 3PL)"
          },
          {
            "value": "3",
            "label": "Active-ingredient strengths carried through tech transfer and stability"
          },
          {
            "value": "28",
            "label": "Drug-product lots delivered across development, launch and commercial supply by the lead CMO"
          },
          {
            "value": "36 mo",
            "label": "Target shelf life after extension, up from the prior dating"
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "The Tech Ops board readout",
        "items": [
          {
            "title": "Global network on one map",
            "body": "A single view of the manufacturing network — API, drug product, packaging and distribution — distinguishing current supporting sites from future network sites."
          },
          {
            "title": "Inventory & shelf-life optimization",
            "body": "Demand scenarios modelled against scrap exposure from launch-buildup lots, with production deliberately slowed to manage inventory and a shelf-life extension to 36 months to add supply-chain flexibility."
          },
          {
            "title": "Commercial supply assurance",
            "body": "Confirmed production slots forward, a defined stop-sell lead time ahead of expiry, and primary network with alternate sites being established."
          },
          {
            "title": "Lifecycle & geographic expansion",
            "body": "Supply planning extended to a second market launch, with alternate capacity positioned to support additional products and geographies."
          }
        ]
      },
      {
        "kind": "note",
        "body": "Anonymized for public release. The client, its products, partners, people, sites and any monetary figures have been generalized to sector and stage; all specifics shown are structural facts drawn from the source materials."
      }
    ]
  },
  "cdmo-voice-of-customer-ai-roadmap": {
    "timeframe": "Oct 2025 – Apr 2026",
    "dek": "A CEO-sponsored, confidential Voice-of-Customer and quality-system program for a global API CDMO — diagnosing why premium early-phase bids were lost and charting an agile operating model.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The mandate",
        "body": "A global contract development and manufacturing organization (CDMO) for active pharmaceutical ingredients faced a blunt problem from the top: <strong>order income was too low</strong>, and leadership no longer trusted that it understood shifting market and customer dynamics. Premium, Western-quality work was being undercut by fast, low-cost Asian competitors quoting a fraction of the price and compressing timelines.\n\nThe CEO sponsored a confidential business-optimization program with one main objective: <strong>streamline the offering process to produce faster, more attractive quotes</strong> — and, downstream, to streamline operations for preclinical and early-development projects, leverage global capacity for competitive pricing, and build an integrated service operating model for customers.\n\nBecause the questions were sensitive and the answers had to be candid, the program ran as an independent, third-party engagement so that clients and employees could speak freely."
      },
      {
        "kind": "flow",
        "title": "How the engagement ran",
        "caption": "A structured arc from confidential discovery to a sequenced leadership roadmap.",
        "steps": [
          {
            "label": "Kickoff & framing",
            "sub": "CEO-sponsored launch with ~25+ stakeholders; objectives and biweekly cadence set"
          },
          {
            "label": "VoC interviews",
            "sub": "Confidential win, loss, and internal-leadership sessions across the CDMO lifecycle"
          },
          {
            "label": "Quality assessment",
            "sub": "Quality-system and SOP review against early- vs. late-phase fit"
          },
          {
            "label": "Readouts",
            "sub": "Preliminary BD/sales workshop, then executive readout of findings"
          },
          {
            "label": "Operating model & roadmap",
            "sub": "Future-state recommendations plus a 6–12 month action roadmap"
          }
        ]
      },
      {
        "kind": "metrics",
        "title": "The work, in numbers",
        "items": [
          {
            "value": "25+ hrs",
            "label": "Deep-dive VoC interviews conducted"
          },
          {
            "value": "10",
            "label": "Won / active-client interviews"
          },
          {
            "value": "6",
            "label": "Lost-opportunity interviews"
          },
          {
            "value": "9",
            "label": "Internal leadership sessions"
          },
          {
            "value": "19",
            "label": "Quality interviews (SOP review)"
          },
          {
            "value": "9",
            "label": "Operational dimensions scored (1–5)"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "A safe, structured method",
        "body": "Every session was run by a dedicated interview team — <strong>two to three interviewers per session</strong> — to guarantee an unbiased space for honest feedback. A standardized Voice-of-Customer framework scored the client across <strong>nine core operational dimensions</strong> of the end-to-end CDMO journey, from first bid to assurance of supply, on a 1-to-5 scale.\n\nEvery numerical score was followed by open-ended probing to capture the <strong>\"why\"</strong> behind it — the exact anecdotes, pain points, and market shifts. The win and loss cohorts were then contrasted to isolate the precise thresholds at which qualified buyers either stayed loyal or walked away. Findings were reported on a biweekly cadence over roughly a 24-week program."
      },
      {
        "kind": "compare",
        "title": "Why buyers walked: market reality vs. the client's position",
        "caption": "Aggregated, anonymized signal from win and loss interviews across regions.",
        "head": [
          "Dimension",
          "Market expectation",
          "Client's position"
        ],
        "rows": [
          [
            "Early-phase price",
            "At or near low-cost base pricing",
            "Quoted materially higher; premium tolerated only to a point"
          ],
          [
            "Proposal turnaround",
            "Roughly two weeks",
            "Ranged from weeks to, in one case, months"
          ],
          [
            "Project start / capacity",
            "Start within ~2–4 months",
            "Lead times often well beyond competitors"
          ],
          [
            "Quality for early phase",
            "Fit-for-purpose, risk-based",
            "Commercial-grade rigor applied across all phases"
          ]
        ],
        "highlight": 2
      },
      {
        "kind": "split",
        "title": "What the win vs. loss split revealed",
        "before": {
          "label": "Why clients stayed (wins)",
          "points": [
            "Deep complex-chemistry and high-potency expertise",
            "Strong, proactive project management and \"service mindset\"",
            "Trusted quality and IP-security reputation",
            "Pragmatic flexibility and add-on work without re-bidding"
          ]
        },
        "after": {
          "label": "Why clients left (losses)",
          "points": [
            "Pricing seen as well above low-cost rivals",
            "Slow proposal generation and contracting bottlenecks",
            "Commercial-grade quality burdening early-phase work",
            "Capacity and site-credibility concerns"
          ]
        }
      },
      {
        "kind": "callouts",
        "title": "Quality system: the early-phase drag",
        "items": [
          {
            "title": "One-size-fits-all rigor",
            "body": "Commercial GMP standards applied uniformly to early-phase work, driven by mindset, thin guidance, and training gaps."
          },
          {
            "title": "Over-involvement",
            "body": "Heavy quality and regulatory involvement in low-risk early tasks; risk-based judgment encouraged but applied inconsistently."
          },
          {
            "title": "Fragmented tooling",
            "body": "An overload of inherited systems and SOPs that were never adapted for early-phase agility."
          },
          {
            "title": "\"Add, never remove\"",
            "body": "A culture that accumulated requirements without pruning, lengthening change and deviation cycles and missing clinical windows."
          }
        ]
      },
      {
        "kind": "steps",
        "title": "The recommended path forward",
        "items": [
          {
            "title": "Quick wins (0–3 months)",
            "body": "Standardize proposal templates and review cycles, empower BD to fast-track early-phase quotes, and pilot an \"early-phase fast lane.\""
          },
          {
            "title": "Strategic initiatives (3–6 months)",
            "body": "Introduce tiered pricing for early vs. late phase aligned to value and risk, and prioritize capacity where demand is strongest."
          },
          {
            "title": "Structural fixes (6–12 months)",
            "body": "Redesign contracting workflows to clear MSA bottlenecks, rebuild site credibility, and close the cost gap via hybrid and bundled models."
          },
          {
            "title": "Fit-for-purpose quality",
            "body": "A future-state operating model with risk-based, phase-appropriate quality to cut administrative burden on client-facing teams."
          },
          {
            "title": "AI opportunity & enablement",
            "body": "A proposed roadmap to apply automation and AI to proposal generation, knowledge capture, and intake — targeting the speed gaps the VoC exposed."
          }
        ]
      },
      {
        "kind": "note",
        "body": "Anonymized for public sharing. Client, customer, individual, product, system, and site names have been removed; figures are generalized and all interview input is kept aggregate and confidential."
      }
    ]
  },
  "us-distribution-3pl-selection": {
    "timeframe": "Nov 2024 – Sep 2026",
    "dek": "Designing the U.S. distribution model for a rare-disease biopharma, running a structured specialty-3PL selection, and driving contracting through to launch-ready go-live.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "A European rare-disease biopharma was preparing its first U.S. commercial entry. Finished product would ship from a contract manufacturer in Europe to a U.S. distribution partner, with no domestic infrastructure yet in place. The therapy is a refrigerated (2-8°C) biologic serving multiple treatment patterns — <strong>planned and scheduled</strong>, <strong>planned but unscheduled</strong>, and <strong>acute indications requiring emergency availability</strong> — each implying different distribution flows.\n\nWe were engaged to design the U.S. distribution model, run a structured selection of specialty third-party logistics (3PL) providers, finalize the contract with the chosen partner, and support implementation through to go-live. The mandate spanned warehousing, cold-chain logistics, order-to-cash, DSCSA compliance, returns management, and real-time data integration for national coverage."
      },
      {
        "kind": "flow",
        "title": "How we ran it",
        "caption": "A two-phase approach — model design and partner selection — overlapping to compress the timeline, then a third implementation phase.",
        "steps": [
          {
            "label": "Understand requirements",
            "sub": "Product attributes, handling, cold-chain, shelf life, U.S. import and distribution rules"
          },
          {
            "label": "Design model scenarios",
            "sub": "Distribution flows for planned, unscheduled, and emergency treatment cases"
          },
          {
            "label": "Finalize model",
            "sub": "Logistics flows, storage, routes; title model vs. state-license launch path"
          },
          {
            "label": "Build RFI/RFP + criteria",
            "sub": "Quality, supply chain, warehousing requirements as scored criteria"
          },
          {
            "label": "Evaluate & negotiate",
            "sub": "Score responses, shortlist, build cost model, negotiate terms"
          },
          {
            "label": "Onboard & implement",
            "sub": "Contracting, licensure, EDI, training, go-live"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Designing the distribution model",
        "body": "We mapped the end-to-end flow: finished packs shipping from the European packaging site under DAT Incoterms, import-of-record and customs clearance, temperature-data review on receipt, transfer to a local 3PL facility, and local release for onward distribution to treatment centers and hospitals.\n\nBecause the client lacked the state distribution licenses needed to sell directly at launch, we evaluated a <strong>title model</strong> — where the 3PL purchases and takes title to inventory — as a bridge, with a planned transition to a traditional 3PL model once licensure was complete. The channel strategy combined specialty distribution with drop-ship and direct-ship to select hospitals."
      },
      {
        "kind": "compare",
        "title": "Specialty 3PL benchmark",
        "caption": "Three specialty 3PLs were benchmarked on infrastructure, capability, and fit. 3PL A was selected. Candidates anonymized.",
        "head": [
          "Criterion",
          "3PL A",
          "3PL B",
          "3PL C"
        ],
        "rows": [
          [
            "Cold-chain warehousing",
            "2-8°C, large dedicated capacity",
            "2-8°C across multiple sites incl. FTZ",
            "2-8°C, very large capacity"
          ],
          [
            "Transport advantage",
            "Exclusive owned pharma transport network",
            "Integration with global specialty courier",
            "Largest U.S. wholesaler scale"
          ],
          [
            "Serialization / DSCSA",
            "Takes over full serialization monitoring after inbound receipt",
            "Outbound dates forwarded to manufacturer provider",
            "Outbound dates forwarded to manufacturer provider"
          ],
          [
            "Title model",
            "Flexible on period",
            "Flexible on period",
            "Capped at ~4-6 months"
          ],
          [
            "Implementation time",
            "~90-180 days",
            "~90-120 days",
            "~120 days"
          ],
          [
            "Data integration",
            "Reporting portal, dashboards, self-service inventory release",
            "Lean, pharma-centric KPI dashboards",
            "Deep historical data, BI integration"
          ]
        ],
        "highlight": 1
      },
      {
        "kind": "prose",
        "heading": "The selection: scorecard plus a 3-year cost model",
        "body": "Selection rested on two pillars. First, a <strong>scorecard</strong> assessing compliance, scalability, operational fit, serialization/DSCSA handling, IT and data integration, and alignment to the launch roadmap. Second, a <strong>three-year total-cost model</strong> built from each candidate's line-item RFP quote — account management, refrigerated inbound receipt and storage, pick/pack and order fees, freight, data-logger and recall handling — driven by a common set of forecast and volume assumptions so the quotes were truly comparable across Years 1, 2, and 3.\n\n<strong>3PL A</strong> was recommended: its owned pharmaceutical transport network, willingness to assume full serialization monitoring after inbound receipt, flexible title-model period, and launch-readiness gave it the strongest combination of compliance, scale, and operational fit for a small-volume, high-value cold-chain launch."
      },
      {
        "kind": "stack",
        "title": "Contract finalization",
        "groups": [
          {
            "label": "Core agreement",
            "items": [
              "Exclusive Distribution Agreement",
              "Operating Guidelines (OPG) — scope, roles, deliverables",
              "Fee schedule"
            ]
          },
          {
            "label": "Quality & regulatory",
            "items": [
              "Quality Agreement — responsibility delegation checklist",
              "cGMP / 21 CFR 205 warehousing compliance",
              "DSCSA / serialization handling"
            ]
          },
          {
            "label": "Launch bridge",
            "items": [
              "Title Model Addendum",
              "Inventory bounds set in days-on-hand",
              "Terms & conditions and credit setup for title customers"
            ]
          }
        ]
      },
      {
        "kind": "steps",
        "title": "Implementation to go-live",
        "items": [
          {
            "title": "Kickoff & team",
            "body": "Onsite kickoff with the client's supply-chain leadership and the 3PL's dedicated implementation team — executive sponsor, account executive, order-to-cash, warehouse operations, and IT — plus a facility tour."
          },
          {
            "title": "Licensure & EDI",
            "body": "State Board of Pharmacy licensure for both title and 3PL footprints; EDI setup with wholesalers, specialty distributors, and pharmacies, including the 856 ASN required before any partner accepts product."
          },
          {
            "title": "Operational readiness",
            "body": "Product and procedure training, warehouse and order-to-cash setup, DSCSA preparedness, and a regular implementation call cadence in the weeks before launch."
          },
          {
            "title": "Go-live",
            "body": "Operational-ready milestone targeted ahead of commercial launch, with a 30-60 day post-launch support window before steady-state day-to-day operations."
          }
        ]
      },
      {
        "kind": "metrics",
        "title": "Engagement at a glance",
        "items": [
          {
            "value": "3",
            "label": "Specialty 3PLs benchmarked"
          },
          {
            "value": "3-year",
            "label": "Total-cost model horizon"
          },
          {
            "value": "12-16 wks",
            "label": "Planned model + selection window"
          },
          {
            "value": "2-8°C",
            "label": "Cold-chain storage requirement"
          }
        ]
      },
      {
        "kind": "note",
        "body": "Counts and timeframes are drawn from engagement documents. All client, product, vendor, location, and individual names have been removed; the three evaluated providers are referred to only as 3PL A/B/C."
      }
    ]
  },
  "clinical-supply-techops-acceleration": {
    "timeframe": "Dec 2023 – Apr 2024",
    "dek": "Sprint-based clinical-supply and technical-operations acceleration to keep drug product, comparator and standard-of-care off the critical path for a specialty/oncology pipeline.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "A specialty/oncology pharmaceutical company had in-licensed and then acquired the rights to a clinical-stage HER2-targeted antibody, inheriting a fast-growing portfolio of trials split across multiple sponsorship models — company-sponsored studies, partner collaborations, investigator-sponsored trials and cooperative-group studies — with supply still partly managed by the originating biotech.\n\nThe risk was concrete: with pivotal studies enrolling and several new trials starting in 2024–2025, <strong>drug product, comparator and standard-of-care could slip onto the critical path</strong> and stall enrollment. We were brought in to run an agile, sprint-based technical-operations acceleration to make sure clinical sites were supplied on time, and to leave behind the process and governance to keep it that way."
      },
      {
        "kind": "flow",
        "title": "How the engagement ran",
        "caption": "A short discovery sprint set direction; the work then forked into two reinforcing workstreams.",
        "steps": [
          {
            "label": "Sprint 1 (3 days)",
            "sub": "One goal, four objectives — triage, critical path, risks, RACI"
          },
          {
            "label": "Readout & alignment",
            "sub": "Executive options session to confirm the path forward"
          },
          {
            "label": "Cost management",
            "sub": "Itemized monitoring, sourcing strategy, vendor selection"
          },
          {
            "label": "Current → future state",
            "sub": "E2E process mapping with a cross-functional charter"
          }
        ]
      },
      {
        "kind": "steps",
        "title": "Sprint 1: one goal, four objectives",
        "items": [
          {
            "title": "Triage the portfolio",
            "body": "Assess every active and planned study across all sponsorship types to determine which were most critical for technical operations to focus on against clinical-development timelines."
          },
          {
            "title": "Surface risks and gaps",
            "body": "Identify the challenges, gaps and major issues that could prevent drug product from reaching clinical sites, and the mitigations for each."
          },
          {
            "title": "Map the critical path",
            "body": "Map the critical-path activities for the highest-priority study and optimize wherever possible."
          },
          {
            "title": "Build the path forward",
            "body": "Define a clear plan to close the gaps identified, with ownership attached."
          }
        ]
      },
      {
        "kind": "metrics",
        "title": "Sprint 1 in numbers",
        "items": [
          {
            "value": "3 days",
            "label": "Virtual sprint, follow-the-sun across regions"
          },
          {
            "value": "24",
            "label": "Studies triaged and ranked across all sponsorship types"
          },
          {
            "value": "21",
            "label": "Key deliverables identified and assessed (from an initial 11)"
          },
          {
            "value": "9",
            "label": "Deliverables completed within the sprint"
          }
        ]
      },
      {
        "kind": "stack",
        "title": "What the sprint produced",
        "groups": [
          {
            "label": "Prioritization",
            "items": [
              "A consistent set of study attributes captured for every trial — ownership, region, priority and rationale, supply site, dosing milestones, combination/SOC and supply status",
              "Objective ranking of all studies by criticality to focus technical-operations effort"
            ]
          },
          {
            "label": "Critical path & risk",
            "items": [
              "Critical-path map for the highest-priority study with risks called out",
              "Program-wide risk register graded High / Medium / Low across business and study impact"
            ]
          },
          {
            "label": "Accountability",
            "items": [
              "A RACI that exposed ownership and responsibility gaps between the sponsor and the supply partner",
              "A path forward to close each identified gap"
            ]
          }
        ]
      },
      {
        "kind": "split",
        "title": "Cost monitoring: current vs. future state",
        "before": {
          "label": "Original state",
          "points": [
            "Central sourcing used as the default procurement strategy",
            "No itemized, product-level cost monitoring",
            "No dedicated owner for drug-cost management",
            "Excess and obsolescence risk on comparator and SOC buys"
          ]
        },
        "after": {
          "label": "Future state",
          "points": [
            "Shift toward site sourcing where viable, with a central-pharmacy model where appropriate",
            "Itemized cost monitoring on a defined quarterly cadence",
            "A dedicated resource accountable for drug-cost management",
            "Lessons-learned from early studies fed forward into later, larger ones"
          ]
        }
      },
      {
        "kind": "callouts",
        "title": "Putting it into practice",
        "items": [
          {
            "title": "Lessons learned, study to study",
            "body": "Sourcing and cost insights from the first small study were codified and carried into the next, then into the large pivotal study — turning one-off fixes into a repeatable method."
          },
          {
            "title": "Sourcing strategy in the RFP",
            "body": "For the large accelerated study, sourcing-strategy learnings were built directly into vendor selection — comparing vendors on unit cost, management fees, assurance of supply and speed to go-live."
          },
          {
            "title": "Critical-path mapping at country level",
            "body": "Drug-supply critical paths were mapped country by country against regulatory submission and first-patient-in dates, so label, pack and depot timelines stayed ahead of enrollment."
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Outcome and what we left behind",
        "body": "The engagement moved the program from fragmented, study-by-study firefighting to a prioritized, governed operating rhythm. Studies were ranked objectively, the critical path for the most urgent trial was mapped and optimized, and accountability gaps were made explicit through a working RACI.\n\nBeyond the sprint, the work left behind durable assets: an end-to-end current- and future-state process charter scoped across technical operations, regulatory, quality, clinical operations and development; an itemized cost-monitoring plan on a quarterly cadence; a benchmarking framework for vendor and sourcing decisions; and a deliverables transition log assigning a future owner to each work-product so the gains would persist after the engagement closed."
      },
      {
        "kind": "note",
        "body": "All identifying details — company, product, study codes, people, vendors and exact figures — have been removed. The client is referred to only by sector and stage, and counts reflect what was recorded in the source material."
      }
    ]
  },
  "cmc-portfolio-prioritization": {
    "timeframe": "2024–2025",
    "dek": "CMC portfolio prioritization and resource-allocation modeling for an immuno-oncology biotech — turning a cross-functional workshop into a living project–resource matrix and capacity view.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation",
        "body": "An immuno-oncology biotech was running a multi-asset CMC portfolio at different stages of maturity — one lead biologic approaching regulatory readiness, plus earlier-stage pipeline candidates advancing toward and through candidate nomination. Process and formulation development, drug substance, drug product, and overall CMC work all competed for the same finite specialist team. Without a shared model, leadership could not see who was over- or under-allocated, or whether the team could realistically carry every commitment at once."
      },
      {
        "kind": "steps",
        "title": "How the engagement worked",
        "items": [
          {
            "title": "Prioritization workshop",
            "body": "A cross-functional workshop set portfolio priorities and a clear goal for each asset — readiness for the lead program, pipeline advancement for the rest."
          },
          {
            "title": "Activity decomposition",
            "body": "Each asset's goal was broken into concrete CMC activities spanning process and formulation development, drug substance, and drug product."
          },
          {
            "title": "Resource mapping",
            "body": "Named team members were allocated to activities by percent of time on a standard full-time-equivalent basis, with each person's allocations summing across programs."
          },
          {
            "title": "Capacity readout",
            "body": "Per-person and per-program loading views were rolled up to surface over- and under-allocation against available capacity."
          }
        ]
      },
      {
        "kind": "stack",
        "title": "What the matrix covered",
        "groups": [
          {
            "label": "CMC functions",
            "items": [
              "Process & formulation development",
              "Drug substance",
              "Drug product",
              "Overall CMC / program-level activities"
            ]
          },
          {
            "label": "Asset goals",
            "items": [
              "Lead biologic — achieve regulatory (BLA) readiness",
              "Second candidate — advance pipeline",
              "Third candidate — advance pipeline toward nomination"
            ]
          },
          {
            "label": "Representative activities",
            "items": [
              "Module authoring and validation runs",
              "Process performance qualification campaigns at external CMOs",
              "Dose-strength optimization and biophysical characterization",
              "Tech transfer, cell-bank and manufacturer selection",
              "Candidate nomination writing"
            ]
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "What the model made visible",
        "items": [
          {
            "title": "Who is overcommitted",
            "body": "Per-person totals exceeding a full workload flagged individuals carrying more than one role's worth of activity across programs."
          },
          {
            "title": "Where slack exists",
            "body": "Under-allocated capacity became reusable headroom that could be redirected to higher-priority assets."
          },
          {
            "title": "Program-level load",
            "body": "Per-program rollups showed how much of the team each asset actually consumed, not just what it was promised."
          },
          {
            "title": "Internal vs. outsourced work",
            "body": "The matrix distinguished in-house effort from activities run at external manufacturing and testing partners."
          }
        ]
      },
      {
        "kind": "split",
        "title": "Before and after the matrix",
        "before": {
          "label": "Before",
          "points": [
            "Priorities asserted but not reconciled against capacity",
            "Allocation lived in people's heads, not a shared view",
            "No clear signal of who was over- or under-loaded",
            "Hard to test 'can we do all of this at once?'"
          ]
        },
        "after": {
          "label": "After",
          "points": [
            "Priorities tied to named owners and percent-time allocations",
            "Single project–resource matrix as the source of truth",
            "Per-person and per-program loading made explicit",
            "A model that can be re-run as the portfolio shifts"
          ]
        }
      },
      {
        "kind": "flow",
        "title": "From workshop to working model",
        "caption": "The prioritization decisions flow into an operating tool, not a one-off slide.",
        "steps": [
          {
            "label": "Prioritize",
            "sub": "Workshop sets asset goals and order"
          },
          {
            "label": "Decompose",
            "sub": "Goals become CMC activities"
          },
          {
            "label": "Allocate",
            "sub": "People assigned by percent time"
          },
          {
            "label": "Read capacity",
            "sub": "Loading views per person and program"
          },
          {
            "label": "Rebalance",
            "sub": "Shift effort to match priorities"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The deliverable",
        "body": "The output was a structured project–resource matrix linking prioritized assets to CMC activities to named team members, with percent-time allocations on a full-time-equivalent basis. Built on top of it were capacity and loading views — grand totals by person across all programs, and per-program rollups — that surfaced over- and under-allocation at a glance. Because the model is parameterized rather than static, the team can update allocations as programs progress and re-read the capacity picture without rebuilding from scratch."
      },
      {
        "kind": "note",
        "body": "Anonymized for public use. Client identity, asset names, individual team members, and external partners have been omitted; no figures or outcomes are claimed beyond the structure of the work delivered."
      }
    ]
  },
  "clinical-supply-chain-dashboard": {
    "timeframe": "2026",
    "dek": "A clinical-stage oncology biopharma went from fragmented spreadsheets to one integrated clinical supply chain view, with reconciliation that flags mismatches before month-end sign-off.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation",
        "body": "A clinical-stage oncology biopharma was running its clinical supply chain out of disconnected reports: enrollment and participant status from an interactive response system, depot and packaging inventory from a contract manufacturer, and planning files maintained by clinical operations. No single view tied them together, so questions about enrollment pace, stock coverage, and expiry risk required manual stitching across sources each cycle. We delivered an integrated dashboard on a low-code BI platform that consolidates all three sources into one report, refreshed monthly."
      },
      {
        "kind": "split",
        "title": "From fragmented reports to a single integrated view",
        "before": {
          "label": "Before",
          "points": [
            "Three sources reconciled by hand each cycle",
            "Enrollment, inventory, and planning lived in separate files",
            "Mismatches surfaced late, often after sign-off",
            "Expiry and coverage risk hard to see across depots and sites"
          ]
        },
        "after": {
          "label": "After",
          "points": [
            "One integrated report across all sources",
            "Per-source refresh dates and an on-demand refresh control",
            "Discrepancies flagged automatically every cycle",
            "Color-coded coverage and expiry alerts by location"
          ]
        }
      },
      {
        "kind": "stack",
        "title": "Three pillars in one view",
        "groups": [
          {
            "label": "Participants / enrollment",
            "items": [
              "Enrollment completion vs target with cohort-level trend",
              "Site-, country-, and cohort-level breakdowns",
              "Instant flag when a cohort falls behind plan"
            ]
          },
          {
            "label": "Inventory",
            "items": [
              "Depot and site stock with lot and expiry visibility",
              "Inventory bucketed by expiry, with alerts on lots expiring soon",
              "Months-on-Hand at every depot and site with red/amber/green coding"
            ]
          },
          {
            "label": "Resupply",
            "items": [
              "Months-on-Hand vs reorder point with reorder quantity and lead time",
              "Rolling shipment and dispensing velocity feeding coverage projections",
              "Executive summary consolidating enrollment coverage and depot stock"
            ]
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "Reconciliation that catches mismatches before sign-off",
        "items": [
          {
            "title": "Participant reconciliation",
            "body": "Auto-flags every mismatch between the interactive response system and the cohort tracker. Clinical operations resolves flags before month-end sign-off, with a defined turnaround for resolution."
          },
          {
            "title": "Inventory reconciliation",
            "body": "Compares system-of-record quantities against the contract manufacturer's depot quantities per lot every month. Variances must be investigated and resolved before the cycle is confirmed."
          },
          {
            "title": "Sign-off gates",
            "body": "Both reconciliations and the monthly inventory confirmation must be formally approved before planning signals are distributed. All exceptions are resolved or documented."
          }
        ]
      },
      {
        "kind": "flow",
        "title": "How a monthly cycle runs",
        "caption": "A repeatable workflow with an optional weekly enrollment pulse.",
        "steps": [
          {
            "label": "File staging & refresh",
            "sub": "Source files staged to a controlled library; refresh triggered and data cut-off confirmed"
          },
          {
            "label": "Reconciliation & inventory review",
            "sub": "Mismatch flags resolved, variances investigated, coverage reviewed, then signed off"
          },
          {
            "label": "Planning signals",
            "sub": "Demand confirmed and resupply windows reviewed; planning packet shared ahead of the meeting"
          },
          {
            "label": "Monthly supply review",
            "sub": "Dashboard presented, supply decisions made, actions logged"
          },
          {
            "label": "Snapshot & archival",
            "sub": "Snapshot distributed to executive sponsor; source files archived; exceptions closed out"
          }
        ]
      },
      {
        "kind": "steps",
        "title": "How we delivered it",
        "items": [
          {
            "title": "Discovery",
            "body": "Mapped the fragmented sources and defined requirements across supply, clinical, and CMC stakeholders."
          },
          {
            "title": "Design & build",
            "body": "Built the dashboard on a low-code BI platform through weekly working sessions, with a structured intake library, file standards, and automated notifications via flow tooling."
          },
          {
            "title": "Reconciliation logic",
            "body": "Added participant and inventory reconciliation to surface discrepancies automatically each cycle."
          },
          {
            "title": "Governance",
            "body": "Produced an operations and governance manual covering the full monthly workflow, roles, escalation paths, and onboarding."
          }
        ]
      },
      {
        "kind": "metrics",
        "title": "What it integrates",
        "items": [
          {
            "value": "3",
            "label": "data sources unified in one view"
          },
          {
            "value": "Monthly",
            "label": "refresh cycle, with optional weekly enrollment pulse"
          },
          {
            "value": "2",
            "label": "reconciliation checks run automatically each cycle"
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "What was handed over",
        "items": [
          {
            "title": "Integrated dashboard",
            "body": "A multi-page report spanning enrollment, inventory, Months-on-Hand, reconciliation, and an executive summary in one view."
          },
          {
            "title": "Intake structure & standards",
            "body": "A controlled document library with file naming, validation, and archival standards, plus automated notifications."
          },
          {
            "title": "Operations & governance manual",
            "body": "End-to-end monthly workflow, a responsibility matrix, approval gates, escalation paths, and an onboarding guide."
          },
          {
            "title": "Requirements & UAT artifacts",
            "body": "A functional spec and traceability matrix mapping every requirement to test cases for acceptance."
          }
        ]
      },
      {
        "kind": "note",
        "body": "Engagement and figures are anonymized. The client is identified only by sector and stage; platform, product, study, site, and personal names have been removed."
      }
    ]
  },
  "saas-pricing-data-analytics": {
    "timeframe": "",
    "dek": "Rebuilding a consumer-reviews SaaS platform's commercial engine: a good/better/best pricing model with a CPQ prototype, a four-step data migration, and cohort and account-health analytics.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The setup",
        "body": "A consumer-reviews SaaS platform needed to modernize how it priced, packaged, and understood its installed base. Pricing was inconsistent across legacy contracts, customer data was scattered across the CRM in shapes that didn't reconcile, and there was no clean view of which accounts were healthy or how cohorts behaved over time. The engagement spanned three connected workstreams: a pricing-model handover, a multi-step data migration and cleaning effort, and an analytics layer to make the result legible to the business."
      },
      {
        "kind": "stack",
        "title": "Three connected workstreams",
        "groups": [
          {
            "label": "Pricing model",
            "items": [
              "Good/better/best packaging",
              "CPQ configurator prototype",
              "Price-impact analysis"
            ]
          },
          {
            "label": "Data migration",
            "items": [
              "Source extraction from the CRM",
              "Four-step cleaning pipeline",
              "Reconciled migration datasets"
            ]
          },
          {
            "label": "Analytics",
            "items": [
              "Cohort analysis",
              "Account-health scoring",
              "Packaging datasets"
            ]
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Workstream one — pricing and packaging",
        "body": "We restructured pricing into a clear good/better/best framework, consolidating tiers into a single master mapping that translated legacy arrangements into the new packaging. From that master we built a price-impact analysis to model how existing accounts would land under the new model, then produced a CPQ configurator prototype so sales could assemble quotes against the new tiers consistently. Both the price model and the configurator were delivered as working drafts the client team could carry forward."
      },
      {
        "kind": "flow",
        "title": "The four-step migration pipeline",
        "caption": "Raw CRM exports — accounts, contracts, opportunities, quotes, and usage — were cleaned in sequence so each step depended on a validated prior one.",
        "steps": [
          {
            "label": "Contracts",
            "sub": "Reconcile and normalize services contracts"
          },
          {
            "label": "Domains",
            "sub": "Resolve customer sites and domains"
          },
          {
            "label": "Instance mapping",
            "sub": "Link domains to platform instances"
          },
          {
            "label": "Entitlements",
            "sub": "Derive what each account is entitled to"
          }
        ]
      },
      {
        "kind": "split",
        "title": "What the migration changed",
        "before": {
          "label": "Before",
          "points": [
            "CRM exports that didn't reconcile across objects",
            "Accounts, contracts, and sites loosely linked",
            "No reliable view of per-account entitlements",
            "Exceptions buried in raw dumps"
          ]
        },
        "after": {
          "label": "After",
          "points": [
            "Clean, sequenced datasets that tie together",
            "Accounts mapped to sites, instances, and contracts",
            "Entitlements derived and made explicit",
            "Exceptions surfaced as a tracked working set"
          ]
        }
      },
      {
        "kind": "callouts",
        "title": "The analytics layer",
        "items": [
          {
            "title": "Cohort analysis",
            "body": "A BI tool model grouping accounts into cohorts to make retention and behavior patterns visible to the business over time."
          },
          {
            "title": "Account-health scoring",
            "body": "Health signals consolidated from the customer-success platform into overall account health plus per-site health, giving a consistent read on risk."
          },
          {
            "title": "Packaging datasets",
            "body": "Pricing-package and entitlement data shaped so the new good/better/best model could be applied and analyzed against the real installed base."
          }
        ]
      },
      {
        "kind": "stack",
        "title": "What was handed over",
        "groups": [
          {
            "label": "Pricing",
            "items": [
              "Good/better/best price models",
              "CPQ configurator prototypes",
              "Price-impact analysis"
            ]
          },
          {
            "label": "Data",
            "items": [
              "Cleaned, reconciled migration datasets",
              "Instance, domain, and entitlement mappings",
              "Tracked exceptions set"
            ]
          },
          {
            "label": "Analytics",
            "items": [
              "Cohort analysis model",
              "Account-health scoring",
              "Packaging datasets"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "body": "Anonymized for public use. Sector and stage only; no client, vendor, product, or personal names, and no confidential figures."
      }
    ]
  },
  "llm-voice-ai-market-research": {
    "timeframe": "2025–2030 projection horizon",
    "dek": "An applied-AI market-intelligence study sizing LLM and Voice-AI markets across four verticals and three regions, with sourced comparative tables, CAGRs, and a consolidated outlook.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "An applied-AI market-intelligence initiative to size the addressable market for Large Language Model (text and voice) applications across high-growth verticals and emerging regions. The brief: move past headline hype to a defensible, source-attributed view of where LLM and Voice-AI demand is forming, how fast it is growing, and which sector-region combinations carry the steepest trajectories through 2030."
      },
      {
        "kind": "stack",
        "title": "Scope: verticals x regions",
        "groups": [
          {
            "label": "Verticals assessed",
            "items": [
              "Education (AI tutoring, multilingual learning)",
              "Legal (research, contract review, translation)",
              "Defense (decision support, intelligence, logistics)",
              "Agriculture (advisory bots, precision farming)"
            ]
          },
          {
            "label": "Regions sized",
            "items": [
              "India",
              "Asia-Pacific (APAC)",
              "Global South (developing markets)",
              "Global benchmark"
            ]
          },
          {
            "label": "Voice-AI layer",
            "items": [
              "ASR (speech recognition)",
              "STT (speech-to-text API)",
              "TTS (text-to-speech)",
              "Virtual assistants & contact-center AI"
            ]
          }
        ]
      },
      {
        "kind": "flow",
        "title": "Method",
        "caption": "From fragmented public forecasts to one comparable, decision-grade view.",
        "steps": [
          {
            "label": "Frame",
            "sub": "Define each sector-region cell and a common 2025 base / 2030 horizon"
          },
          {
            "label": "Source",
            "sub": "Triangulate third-party market research across multiple firms"
          },
          {
            "label": "Normalize",
            "sub": "Reconcile differing base years and scopes; infer where needed"
          },
          {
            "label": "Consolidate",
            "sub": "Comparative tables, CAGRs, drivers, constraints, outlook"
          }
        ]
      },
      {
        "kind": "compare",
        "title": "AI/LLM market size by sector (Global)",
        "caption": "Base value to 2030 projection with CAGR. Figures from third-party market research; Education shows the steepest curve.",
        "head": [
          "Sector",
          "Base",
          "2030",
          "CAGR"
        ],
        "rows": [
          [
            "Education",
            "$6.90B (2025)",
            "$41.01B",
            "~42.8%"
          ],
          [
            "Agriculture",
            "$2.55B (2025)",
            "$7.05B",
            "22.55%"
          ],
          [
            "Legal",
            "$1.45B (2024)",
            "$3.90B",
            "~17%"
          ],
          [
            "Defense",
            "$22.45B (2023)",
            "$43.02B",
            "9.8%"
          ]
        ],
        "highlight": 0
      },
      {
        "kind": "compare",
        "title": "India vs APAC — selected cells",
        "caption": "Emerging-market growth consistently outpaces the global average across sectors.",
        "head": [
          "Sector / Region",
          "Base",
          "2030",
          "CAGR"
        ],
        "rows": [
          [
            "Education — India",
            "$140.7M (2022)",
            "$2.06B",
            "39.9%"
          ],
          [
            "Education — APAC",
            "$712.6M (2022)",
            "~$9.76B",
            "38.7%"
          ],
          [
            "Legal — India",
            "$29.5M (2024)",
            "$106.3M",
            "23.0%"
          ],
          [
            "Legal — APAC",
            "$308.6M (2024)",
            "$940.7M",
            "19.6%"
          ],
          [
            "Defense — India",
            "$1.31B (2024)",
            "$2.75B",
            "13.2%"
          ],
          [
            "Defense — APAC",
            "$5.68B (2024)",
            "$11.83B",
            "13.1%"
          ]
        ],
        "highlight": 0
      },
      {
        "kind": "metrics",
        "title": "Voice-AI layer at a glance",
        "items": [
          {
            "value": "$7.1B",
            "label": "ASR market by 2030 (~14% CAGR)"
          },
          {
            "value": "$8.57B",
            "label": "Speech-to-text API by 2030 (14.4%)"
          },
          {
            "value": "$7.28B",
            "label": "Text-to-speech by 2030 (12.89%)"
          },
          {
            "value": "$16.6B",
            "label": "APAC voice market by 2030 (18.7%)"
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "Cross-cutting findings",
        "items": [
          {
            "title": "Emerging markets compound fastest",
            "body": "India and APAC repeatedly beat global CAGRs — Education in India approaches ~40% — making them the highest-velocity cells despite smaller bases."
          },
          {
            "title": "Generative subset is nascent",
            "body": "LLM-specific spend (e.g. ~$90M global legal genAI, sub-$300M agri genAI in 2024) is a fast-growing slice within larger AI markets — high upside, low base."
          },
          {
            "title": "Adjacent sectors heating up",
            "body": "Banking/financial services (31.8% CAGR) and media localization/voice (~29-30%) surfaced as the next wave of text/voice workloads."
          }
        ]
      },
      {
        "kind": "steps",
        "title": "What was delivered",
        "items": [
          {
            "title": "Consolidated comparative table",
            "body": "Education, Legal, Defense and Agriculture sized for India, APAC and Global with base year, 2030 projection, CAGR, drivers and constraints in one comparable grid."
          },
          {
            "title": "Vertical fact sheets",
            "body": "Per-sector deep dives plus a dedicated Voice-AI fact sheet covering ASR, STT and TTS with regional breakdowns."
          },
          {
            "title": "Consolidated outlook deck",
            "body": "An executive market-outlook presentation synthesizing the sizing, the fastest-growing cells, and the adjacent sectors to watch."
          }
        ]
      },
      {
        "kind": "note",
        "body": "All figures are public, third-party market-research estimates triangulated across multiple firms; where base years or scopes differed, totals were normalized or inferred and flagged. Estimates vary by definition — ranges, not single points, were preserved where sources disagreed."
      }
    ]
  },
  "qms-governance-dashboards": {
    "timeframe": "",
    "dek": "A modernized QMS governance solution for a large global pharma: module-wise boards, a cross-module health view, a training guide, and a low-code platform assessment.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "A large global pharmaceutical organization needed governance visibility across a modernized quality-management system (mQMS) made up of many distinct quality modules. Each module ran its own governance cadence, but leadership had no consistent, side-by-side way to see module health, surface escalations, or track follow-through across the system. We designed and built a governance-board solution on a collaborative work-management platform that gave every module a standard board, plus a cross-module board that rolled the whole picture up for senior review."
      },
      {
        "kind": "flow",
        "title": "How governance flows",
        "caption": "From per-module boards up to a single cross-module view",
        "steps": [
          {
            "label": "Module boards",
            "sub": "One standardized board per mQMS module"
          },
          {
            "label": "Escalation",
            "sub": "Items raised at module level are flagged for wider attention"
          },
          {
            "label": "Cross-module board",
            "sub": "Module health and escalations aggregated in one place"
          },
          {
            "label": "Governance meeting",
            "sub": "Reviewed on a defined, editable cadence"
          }
        ]
      },
      {
        "kind": "stack",
        "title": "What each module board captures",
        "groups": [
          {
            "label": "Health & escalation",
            "items": [
              "Overall Module Health — status, description, action, due date for board meetings",
              "Escalated Items — escalations summarized from across every module"
            ]
          },
          {
            "label": "Quality inputs",
            "items": [
              "Annual Assessment",
              "Regulatory Changes",
              "Continuous Improvement & Feedback — audit nonconformances, verbal and audit recommendations, lessons learned, external partners, other modules, sites and affiliates"
            ]
          },
          {
            "label": "Operate & maintain",
            "items": [
              "Action Items — including regulatory information",
              "Module Architecture — periodic review of processes, training, planned and backlog changes, module documents, new processes",
              "Meeting Maintenance — editable meeting cadence"
            ]
          }
        ]
      },
      {
        "kind": "split",
        "title": "Before and after",
        "before": {
          "label": "Before",
          "points": [
            "Each module governed in isolation",
            "No consistent view of module health",
            "Escalations hard to aggregate across modules",
            "Follow-up and action tracking fragmented"
          ]
        },
        "after": {
          "label": "After",
          "points": [
            "Standard board structure for every module",
            "Cross-module board for overall health at a glance",
            "Escalations summarized and visible system-wide",
            "Action items, assessments, and architecture tracked in one place"
          ]
        }
      },
      {
        "kind": "steps",
        "title": "The cross-module board",
        "items": [
          {
            "title": "Overall module health",
            "body": "A single status view spanning every module for senior governance review."
          },
          {
            "title": "Aggregated escalations",
            "body": "Escalated items pulled together across modules so nothing is reviewed in isolation."
          },
          {
            "title": "Annual assessment & regulatory changes",
            "body": "System-level assessment and regulatory tracking sit alongside module detail."
          },
          {
            "title": "Continuous improvement & action items",
            "body": "Feedback, lessons learned, and open actions are carried and closed out at the board."
          },
          {
            "title": "Architecture & cadence",
            "body": "Module architecture overview and a defined, editable meeting cadence keep governance running."
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "Adoption and enablement",
        "items": [
          {
            "title": "Module-by-module training guide",
            "body": "A walkthrough that explains each board section — cover, agenda, cadence, overall assessment, regulatory changes, continuous improvement, module architecture, additional topics, and action items."
          },
          {
            "title": "Built for the meeting record",
            "body": "Guidance covers printing for meeting-minutes records and requesting folder and dashboard backups, so governance is auditable and recoverable."
          },
          {
            "title": "One pattern, every module",
            "body": "Because every module shares the same board structure, users learn it once and apply it everywhere."
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Requirements and platform assessment",
        "body": "The build was grounded in a tool-requirements document that defined the modules, governance boards, escalation flows, reporting, and backup and maintenance needs. Alongside the work-management-platform build, we ran a capability assessment of a low-code platform to evaluate how the governance solution could be extended or re-platformed in the future."
      },
      {
        "kind": "note",
        "body": "All client, product, platform, and site names have been removed. Described by sector and stage only; no figures or outcomes are claimed."
      }
    ]
  },
  "pricing-trade-analytics-bi": {
    "timeframe": "",
    "dek": "A multi-project BI solution for a CPG client, turning raw yearly pricing and trade data into governed dashboards — plus a training manual so the team could maintain and extend it alone.",
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "A consumer-packaged-goods company needed a single, dependable place to read pricing and trade analytics. Source data lived in yearly raw files and scattered mapping spreadsheets, and analysis was rebuilt by hand each time a question came up. The goal was a reusable business-intelligence solution: documented sources, a clean data model, dashboards with stated assumptions, and a handover thorough enough that the client could run and grow it without us."
      },
      {
        "kind": "stack",
        "title": "Documented data sources",
        "groups": [
          {
            "label": "Raw inputs",
            "items": [
              "Yearly raw data files (one per year)",
              "A fixed structure so new years drop in cleanly",
              "Source-to-field mapping documented for each file"
            ]
          },
          {
            "label": "Derived and reference layers",
            "items": [
              "A sales file combining raw data dynamically in the BI tool",
              "A sales reference file for lookups",
              "Mapping files, including a retail-price tab derived from project mapping"
            ]
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The data model",
        "body": "Inside the BI tool, tables were related into one model rather than left as disconnected sheets. Raw yearly files fed a dynamic sales table carrying the calculations and columns reused across dashboards; reference and mapping tables joined in to resolve prices and labels. A query/ETL layer (the tool's transform step) shaped and combined the raw data, so the same logic applied everywhere and a new year of data flowed through without rework."
      },
      {
        "kind": "flow",
        "title": "Data flow",
        "caption": "From raw files to dashboards through a governed model.",
        "steps": [
          {
            "label": "Raw yearly files",
            "sub": "Fixed structure, year over year"
          },
          {
            "label": "Query/ETL layer",
            "sub": "Combine, clean, derive columns"
          },
          {
            "label": "Related data model",
            "sub": "Sales, reference, mapping tables joined"
          },
          {
            "label": "Dashboards",
            "sub": "Filters and charts on shared logic"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Dashboards and assumptions",
        "body": "Each project's dashboard followed a consistent shape: a cover tab, a consolidated definitions-and-assumptions tab, then the analytical views. Filters let users narrow by the dimensions that mattered for pricing and trade questions, and charts read off the shared model so numbers stayed consistent across views. Every assumption behind a metric was written down in one place, so a figure could be traced back to how it was defined rather than guessed at."
      },
      {
        "kind": "callouts",
        "title": "How the build stayed maintainable",
        "items": [
          {
            "title": "One model, many views",
            "body": "Calculations lived once in the shared tables, so dashboards reused the same definitions instead of redefining them."
          },
          {
            "title": "Add a year, not a rebuild",
            "body": "New raw files matching the agreed structure flow through the query layer automatically."
          },
          {
            "title": "Assumptions on the surface",
            "body": "A consolidated definitions tab kept every assumption visible and auditable, not buried in formulas."
          }
        ]
      },
      {
        "kind": "steps",
        "title": "Handover and training",
        "items": [
          {
            "title": "Project-by-project manual",
            "body": "For each project the manual covered its data sources and mapping files, the data model and table relationships, the dashboard filters and charts, and all assumptions."
          },
          {
            "title": "How to maintain it",
            "body": "Documented how to view and modify data through the tool's transform step, and how to add a new year by matching the existing file structure."
          },
          {
            "title": "Built to extend",
            "body": "With the model, conventions, and assumptions written down, the client could maintain existing dashboards and stand up new projects on the same pattern."
          }
        ]
      },
      {
        "kind": "stack",
        "title": "What was delivered",
        "groups": [
          {
            "label": "Working solution",
            "items": [
              "A delivered BI file per project",
              "Packaged data files and source mappings",
              "Multi-project dashboards (cover, definitions, analytics)"
            ]
          },
          {
            "label": "Enablement",
            "items": [
              "A comprehensive project-by-project training manual",
              "Documented assumptions and table relationships",
              "A repeatable pattern for adding years and projects"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "body": "Anonymized for public sharing. Client described by sector and stage only; product names generalized to \"a BI tool\" and \"a query/ETL layer.\" No real names or figures included."
      }
    ]
  }
};
