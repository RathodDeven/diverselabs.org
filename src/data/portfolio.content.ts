// AUTO-GENERATED, deeply enriched, ANONYMIZED case-study content from the full-text
// source via a multi-pass workflow (author -> adversarial audit -> finalize). No client/
// product/person/vendor names. Applied as overrides in portfolio.ts.
import type { Block } from './content';

export interface EnrichedContent {
  timeframe?: string;
  dek?: string;
  heroStat?: { value: string; label: string };
  blocks: Block[];
  faq?: { q: string; a: string }[];
}

export const ENRICHED: Record<string, EnrichedContent> = {
  "gene-therapy-launch-readiness": {
    "timeframe": "2022-2025",
    "dek": "How a first-of-its-kind gene-therapy launch-readiness assessment built the demand-capacity model, labelling-and-kitting operation and CDMO operating model behind a cell-and-gene company's first commercial launch.",
    "heroStat": {
      "value": "4-area",
      "label": "Supply-chain readiness framework spanning CDMO management, labelling and kitting, order and logistics, and end-to-end planning"
    },
    "faq": [
      {
        "q": "We're approaching a first commercial launch from a clinical CDMO base. How early should launch-readiness work start?",
        "a": "For a first-of-its-kind product, start well before the approval decision and treat the assessment as phase-appropriate. In this engagement the work was framed explicitly so that not every gap had to be closed before approval; the priority was to surface the real crunches, risks and stage-appropriate fixes through a structured core-process review rather than to over-engineer. A focused 8-week diagnostic gives you a prioritized gap list scored by impact and ease, a demand-capacity view that ties forecast to suites and crews, and a governance and dashboard design the launch team can stand up incrementally as approval firms up."
      },
      {
        "q": "Should we internalize bill-of-materials and raw-material oversight from our CDMO, or leave it outsourced?",
        "a": "It is a quantified decision driven by volume and capability thresholds, not a philosophy. We baseline the current economics (BOM cost per batch, the highest-cost materials, storage, freight, insurance and the CDMO's procurement fee), then model future-state OpEx, CapEx and savings across scenarios from fully outsourced to a client-owned warehouse. The go / no-go turns on concrete triggers: the batch-volume band at which in-house storage and QC pay back, and whether the client can stand up the ERP/inventory, additional LIMS modules, supplier management and raw-material QC each scenario requires. We map those trigger points and the sequence to build against them, deliverable in roughly five weeks."
      },
      {
        "q": "What makes a gene-therapy commercial supply chain different from a conventional biologic?",
        "a": "Patient-specific traceability, kit-level serialization, cold-chain and walk-in-freezer constraints, and tight coupling between clinical and commercial demand that share the same finishing infrastructure. Labelling-and-kitting capacity, vision-system availability by suite, and QA-release hours all become hard constraints rather than back-office details. It demands a demand-capacity model and integrated clinical-commercial S&OP."
      }
    ],
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation",
        "body": "A commercial-stage cell-and-gene-therapy company was preparing the launch of its lead product, an exceptionally high-volume single-use bioprocess and the most critical launch in its pipeline, where a high-visibility, market-moving approval decision was the dominant near-term driver of company value.\n\nThis was the company's <strong>first gene-therapy commercial launch</strong>, with supply-chain, resourcing, traceability and oversight requirements unlike anything it had run before. Commercial finished-goods packaging, vial labelling and patient kitting, sat at a fill-finish CDMO; drug-substance manufacturing sat at a separate CDMO; and demand was split across clinical and commercial streams that shared the same constrained finishing suites. Leadership needed an honest, phase-appropriate read on whether the supply chain was ready to launch, and a plan to close the gaps."
      },
      {
        "kind": "prose",
        "heading": "The mandate",
        "body": "We were engaged to run a focused launch-readiness assessment of the commercial supply chain. The brief was deliberately pragmatic: identify the immediate crunches through focused interviews, stay agile and iterate on solutions without over-engineering, and keep every recommendation <strong>fit-for-purpose and stage-appropriate</strong> given the uncertainty of approval.\n\nThe work was framed so as not to critique prior launch-readiness efforts, given approval uncertainty, it was never expected that every gap would be closed before approval. The job was to see clearly, prioritize, and design the operating model the launch would need."
      },
      {
        "kind": "stack",
        "title": "The readiness framework: core processes assessed end to end",
        "groups": [
          {
            "label": "Supply-chain planning",
            "items": [
              "Demand plan (commercial + clinical)",
              "Supply plan and capacity plan",
              "Inventory management",
              "Scenario planning"
            ]
          },
          {
            "label": "CDMO management",
            "items": [
              "Relationship management and CMO governance",
              "Communication methods"
            ]
          },
          {
            "label": "Labelling & kitting operation",
            "items": [
              "Kit-level serialization",
              "Suite, space and resource requirements",
              "Clinical requirements"
            ]
          },
          {
            "label": "Order management & logistics",
            "items": [
              "Order details and order processing",
              "Quality and on-time-delivery KPIs",
              "Cryo-box prep, transport, proof-of-delivery"
            ]
          }
        ]
      },
      {
        "kind": "steps",
        "title": "How we ran the 8-week assessment",
        "items": [
          {
            "title": "Risk & gap assessment",
            "body": "Mapped the end-to-end supply chain and built a structured gap list against a fit-for-purpose readiness standard, separating facility-limited constraints from resourcing constraints."
          },
          {
            "title": "Core process deep-dives",
            "body": "Ran pack-to-order planning, operations and demand-planning deep-dives, surfacing the suite, vision-system and walk-in-freezer constraints that govern labelling and kitting throughput."
          },
          {
            "title": "Scenario evaluation",
            "body": "Modeled labelling-and-kitting flow scenarios, automated vs. manual, flow-through vs. label-to-inventory and kit-to-inventory, and tested each against forecast demand by suite."
          },
          {
            "title": "Resource, governance & partnership review",
            "body": "Assessed supply-chain, quality and CDMO staffing, and designed governance, RACI and ways of working including a weekly core-team cadence and a roughly four-week steering-committee rhythm."
          },
          {
            "title": "Recommendations & rollout",
            "body": "Consolidated gaps, risks and opportunities into a prioritized solutions catalogue scored by impact and ease, with draft launch plans and dashboard concepts."
          }
        ]
      },
      {
        "kind": "metrics",
        "title": "The launch-readiness assessment by the numbers",
        "items": [
          {
            "value": "8 weeks",
            "label": "Detailed process assessment to identify gaps, risks and opportunities"
          },
          {
            "value": "~20%",
            "label": "Under budget while on track at the executive-update checkpoint"
          },
          {
            "value": "4 suites",
            "label": "Finishing suites modeled, only two equipped with vision systems for cold-chain pack-out"
          },
          {
            "value": "4 scenarios",
            "label": "Labelling-and-kitting flow designs evaluated (automated/manual x flow-through/inventory)"
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "What the gap assessment surfaced",
        "items": [
          {
            "title": "Capacity was constrained by people, not bricks",
            "body": "The facility's theoretical batches-per-week capacity was not being reached because of crew constraints, one crew runs two suites, so full staffing (two crews) is needed to run all four."
          },
          {
            "title": "Vision systems were unevenly distributed",
            "body": "Only certain suites had vision systems, and only two of four suites could perform finished-goods pack-out in the walk-in freezer, a hard ceiling on automated kitting."
          },
          {
            "title": "Demand was outrunning the old capacity model",
            "body": "Peak weekly requirement was projected to more than double over the launch ramp, forcing a planned shift from pack-to-order in the early years toward pack-to-inventory."
          },
          {
            "title": "Clinical and commercial shared the same infrastructure",
            "body": "Both streams used the same finishing suites and walk-in freezers, requiring genuinely integrated clinical-commercial planning rather than two separate plans."
          }
        ]
      },
      {
        "kind": "flow",
        "title": "The order-to-delivery flow we mapped and instrumented",
        "caption": "Patient-specific gene-therapy product moving from order capture through CDMO finishing to the site of care.",
        "steps": [
          {
            "label": "Order capture",
            "sub": "Distributor receives the specialty-pharmacy or site-of-care order and routes it to patient services"
          },
          {
            "label": "Order review",
            "sub": "Patient services runs preliminary and final review; a purchase order is issued to the CDMO with a need-by date"
          },
          {
            "label": "Batch setup",
            "sub": "Project management sets up the order, raises the packaging request and batch record; QA reviews and issues to the floor"
          },
          {
            "label": "Labelling",
            "sub": "Stage, run and close out vial labelling in a finishing suite"
          },
          {
            "label": "Kitting",
            "sub": "Stage, run and close out patient kitting (kits banded by vial count) in a separate suite"
          },
          {
            "label": "QA release & disposition",
            "sub": "Each order is dispositioned through the QA-release model, then released and shipped to the site of care"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "From assessment to operating tools: the demand-capacity model and S&OP",
        "body": "The centerpiece of the build was a <strong>demand-capacity model</strong> that translated a combined clinical-plus-commercial forecast into the number of finishing suites, crews and QA-release hours required month by month. It encoded the constraints that actually drove the answer: vial-yield throughput stepping up over time, the fixed pool of QA-release hours split dynamically between labelling and kitting, and the crew rule that one crew runs two suites.\n\nThe model went through multiple iterations as forecasts firmed up, and it showed starkly how demand growth drove suite requirements, from a single suite in the early quarters toward the full four-suite, two-crew configuration as kitting volumes scaled. Around it we stood up an integrated <strong>sales-and-operations-planning</strong> process, meeting structure, participants and cadence, plus a design hand-off calendar and a dynamic planning dashboard. We also built a <strong>QA-release model</strong> that sized and sequenced the quality-release capacity feeding labelling and kitting, since QA-release hours were a binding constraint on finishing throughput."
      },
    ]
  },
  "oncology-commercial-launch-supply": {
    "timeframe": "2024-2026",
    "dek": "How a pre-approval oncology biopharma built launch supply readiness for its first commercial product: demand scenarios, batch and inventory planning, and 3PL plus pack-and-label supplier selection.",
    "heroStat": {
      "value": "<48 hr",
      "label": "Target time to ship commercial product after regulatory approval, with a sub-24-hour stretch goal, built from a standing cross-functional supply-readiness program with no commercial infrastructure to start from"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation",
        "body": "A clinical-stage oncology biopharma was approaching its first-ever regulatory filing and commercial launch for a once-daily oral targeted therapy in a rare solid-tumor indication. The asset had been acquired into the portfolio, and the company had no commercial supply infrastructure: no enterprise planning system, no commercial third-party logistics (3PL) provider, no commercial pack-and-label network, no serialization capability, and a fragmented set of legacy demand forecasts inherited from the prior owner.\n\nThe launch profile was deceptively simple but operationally demanding, a <strong>single launch SKU</strong>, a low-count cold-chain bottle requiring refrigerated (2-8 degree C) storage and shipping. Behind it sat a planned family of line-extension strengths in later years, to be offered in either bottle or blister presentations, with the original launch SKU phased out as they arrived. The mandate: stand up everything required to ship commercial product within 48 hours of approval, across both US and EU markets, while the asset was still in its registrational trial."
      },
      {
        "kind": "prose",
        "heading": "Why it was hard",
        "body": "Launch timing was bounded by clinical readout and regulatory review, not by the company's own schedule, so every supply decision had to be made <strong>at risk, ahead of approval</strong>, against forecasts with wide uncertainty. Two inherited forecast models disagreed materially: one consistently under-forecast first-year demand, the other over-forecast it.\n\nLayered on top were structural constraints that small biopharmas rarely confront all at once: a globally distributed contract manufacturing network spanning synthetic raw materials and API, drug product, and finished packaging across multiple countries; the need for EU/UK qualified-person (QP) release on top of US requirements; cold-chain transport for the majority of shipments; full serialization under US drug-supply-chain security rules; and a brand-new ERP build that had to go live before launch. Every commitment was effectively irreversible, made months early and at the company's own risk, against a regulatory clock the company did not control, and every one of them sat on the critical path."
      },
      {
        "kind": "prose",
        "heading": "The headline call: the inherited forecasts were under-calling Year 1",
        "body": "The most consequential analytical finding came out of reconciling the two legacy models. Rebuilding demand from patient-based first principles, dosing mix across strengths, duration of therapy by line of therapy, and conversion into capsules and then into discrete batches, and benchmarking the first year against a comparable recently launched therapy in the same indication, we concluded that <strong>both inherited models were materially under-forecasting first-year demand</strong>. The early patient ramp of the competitor implied a launch volume well above what either model assumed.\n\nThe recommendation was to <strong>raise the Year-1 minimum batch commitment by several multiples</strong> over the one-to-two batches the legacy models implied, to protect against a launch stockout while still containing obsolescence on a SKU slated for phase-out. Turning two conflicting, unowned forecasts into a single defensible planning forecast was a deliverable in its own right."
      },
      {
        "kind": "flow",
        "title": "How the engagement was structured",
        "caption": "A standing cross-functional Commercial Supply Readiness forum, run on a regular cadence, sequenced the work from demand through distribution.",
        "steps": [
          {
            "label": "Demand & scenarios",
            "sub": "Reconcile legacy forecasts; build base / upside / downside cases and translate to batches"
          },
          {
            "label": "Supply & inventory plan",
            "sub": "Production schedule, months-on-hand, safety stock, obsolescence risk on the phase-out SKU"
          },
          {
            "label": "Pack & label CMO selection",
            "sub": "RFP across US bottle/blister packagers; EU strategy and QP release"
          },
          {
            "label": "3PL selection",
            "sub": "Structured scorecard across multiple providers; site visits; 3-year cost"
          },
          {
            "label": "Logistics & shipping validation",
            "sub": "Cold-chain network, customs brokerage, OQ/PQ shipping validation program"
          },
          {
            "label": "Systems & serialization",
            "sub": "ERP build, master data (item numbers, NDC/GTIN), serialization implementation"
          },
          {
            "label": "Launch execution",
            "sub": "At-risk launch batches and a sub-48-hour ship-after-approval playbook"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Demand scenarios and the batch question",
        "body": "The core planning question was not revenue, it was <strong>how many batches to commit, and when</strong>, given a fixed commercial batch size in the hundreds of thousands of capsules and long manufacturing lead times across a multi-country network. We rebuilt the demand picture from patient-based first principles: a dosing mix across the planned strengths, a weighted-average capsule-per-patient-per-day rate, and duration-of-therapy assumptions that differed by line of therapy (first line modeled longer than second line).\n\nThat patient model was run across <strong>base, upside and downside cases</strong>, then converted into capsules and into discrete batch counts year by year through the end of the decade. The result was a defensible minimum batch commitment plus inventory and months-on-hand targets sized to avoid a launch stockout without over-building a SKU on its way to phase-out."
      },
      {
        "kind": "metrics",
        "title": "Planning parameters that anchored the supply model",
        "items": [
          {
            "value": "2",
            "label": "Conflicting legacy demand forecasts reconciled into one defensible planning forecast"
          },
          {
            "value": "3",
            "label": "Demand scenarios modeled, base, upside, downside, across the planning horizon"
          },
          {
            "value": "Patient-based",
            "label": "Bottom-up demand built from dosing mix and duration of therapy, then converted to batches"
          },
          {
            "value": "Single SKU",
            "label": "One cold-chain launch presentation (2-8 C), with later line extensions planned"
          },
          {
            "value": "4",
            "label": "3PL providers formally assessed against a common scorecard"
          },
          {
            "value": "<48 hr",
            "label": "Corporate goal for shipment after approval; stretch goal under 24 hours"
          }
        ]
      },
      {
        "kind": "compare",
        "title": "Pack-and-label CMO selection (US bottle)",
        "caption": "Quotes were gathered from several US packagers, then the RFP was revised and re-issued; selection was driven by unit economics, engagement, and willingness to scale from low launch volumes.",
        "head": [
          "Candidate",
          "Profile",
          "Outcome"
        ],
        "rows": [
          [
            "Packager A",
            "Quoted a high per-bottle price and showed limited willingness to scale at launch volumes",
            "De-prioritized"
          ],
          [
            "Packager B",
            "Established CMO with US sites and broad capability",
            "Advanced toward a site visit"
          ],
          [
            "Packager C",
            "Established CMO, competitive on capability",
            "Advanced toward a site visit"
          ],
          [
            "Packager D",
            "Attractive unit price offset by a high annual minimum-volume commitment",
            "Added to the revised RFP for comparison"
          ]
        ]
      },
      {
        "kind": "callouts",
        "title": "The packaging strategy that emerged",
        "items": [
          {
            "title": "One CMO, bottle plus blister",
            "body": "Consolidate US bottling, packaging and labeling, and the future blister line extensions, with a single CMO to simplify oversight and protect the rapid-launch timeline."
          },
          {
            "title": "EU served from the US, with QP release outsourced",
            "body": "Bottle, pack and label in the US and ship finished product to a selected EU 3PL for distribution, with EU/UK qualified-person release outsourced in-region, unless the chosen US CMO had an EU site able to bottle and QP-release locally."
          },
          {
            "title": "Blisters as a fast-follow",
            "body": "Launch on bottles; introduce the blister presentations as a fast-follow after launch, with cavity configuration quoted in parallel and decided ahead of stability batches."
          },
          {
            "title": "Rapid-launch quoting built in",
            "body": "Require packagers to quote at-risk pre-printed quantities and a 'rapid launch' service so the sub-48-hour goal was contractually supported, not improvised."
          }
        ]
      },
      {
        "kind": "steps",
        "title": "3PL selection, a structured, auditable down-select",
        "items": [
          {
            "title": "Define must-haves",
            "body": "Compliance, scalability and operational excellence for US storage and distribution of a cold-chain commercial product, plus the ability to satisfy commercial, finance, IT and tech-ops requirements."
          },
          {
            "title": "Build a cross-functional assessment team",
            "body": "Product supply, commercial operations, finance, IT, legal and quality systems each scored against their own requirements rather than relying on a single owner."
          },
          {
            "title": "Assess multiple providers on a common scorecard",
            "body": "Several established commercial-pharma logistics providers plus one challenger, compared on order accuracy, on-time shipping, footprint, transport network and annual product flow."
          },
          {
            "title": "Visit sites before committing",
            "body": "On-site visits were treated as decisive rather than confirmatory, one established provider was eliminated after an unfavorable site visit despite strong paper credentials."
          },
          {
            "title": "Cost it over a 3-year horizon",
            "body": "Total 3PL cost was modeled over three years on explicit costing assumptions, feeding an executive-summary recommendation and contract-review status."
          }
        ]
      },
      {
        "kind": "stack",
        "title": "The wider readiness program (workstreams stood up in parallel)",
        "groups": [
          {
            "label": "Demand & supply",
            "items": [
              "Reconciled demand forecast (base/upside/downside)",
              "Batch and capacity plan across the planning horizon",
              "Inventory, months-on-hand and safety-stock policy",
              "Obsolescence planning for the phased-out launch SKU"
            ]
          },
          {
            "label": "Sourcing & network",
            "items": [
              "US + EU pack-and-label CMO selection",
              "Commercial 3PL selection and onboarding",
              "Cold-chain carrier panel for resilience",
              "Single cross-border customs-broker strategy"
            ]
          },
          {
            "label": "Quality & compliance",
            "items": [
              "Three-way quality technical agreements with packagers",
              "Shipping-validation program (SOPs, master plan, OQ/PQ)",
              "Tiered supplier-oversight operating model",
              "Mock pre-approval inspections across the network"
            ]
          },
          {
            "label": "Systems & serialization",
            "items": [
              "ERP build with a fixed pre-launch go-live target",
              "Master data: item numbers, NDC, GTIN, GS1 prefix",
              "Serialization (provisioning, commissioning, aggregation)",
              "Artwork and labeling workflow with print partners"
            ]
          }
        ]
      },
      {
        "kind": "split",
        "title": "Where the engagement started vs. where it landed",
        "before": {
          "label": "At the start",
          "points": [
            "Two conflicting legacy demand forecasts, neither owned",
            "No commercial 3PL, no commercial packager, no serialization",
            "No ERP; master data (NDC/GTIN) not yet created",
            "No shipping-validation program for a cold-chain product",
            "Supplier oversight ad hoc across a multi-country network"
          ]
        },
        "after": {
          "label": "At handover",
          "points": [
            "Single reconciled forecast driving an explicit batch plan",
            "3PL and pack-and-label CMOs assessed, scored and down-selected",
            "ERP build underway to a fixed pre-launch go-live; NDC/GTIN established",
            "Shipping-validation master plan with risk assessments per transport leg",
            "Tiered supplier-oversight model with a defined governance cadence"
          ]
        }
      },
      {
        "kind": "prose",
        "heading": "The launch-execution playbook",
        "body": "The final piece was turning readiness into a repeatable launch maneuver. Because the company committed to shipping within 48 hours of approval, we designed an <strong>at-risk batch strategy</strong>: a small first launch batch produced ahead of approval, plus a larger contingency batch held in case label changes were required at approval. The plan mapped every step of the critical path, label printing and shipping, packaging-line production, and batch review, and had to find <strong>several hours of compression</strong> across those steps to bring the run inside the corporate 48-hour goal and toward a sub-24-hour stretch goal, backed by an all-hands launch-support model.\n\nUnderpinning all of it was a standing Commercial Supply Readiness forum with a dashboard-driven format: each function reported progress, next-90-day actions, and red/yellow risks, so leadership could see the whole launch on one timeline and make the at-risk commitments with eyes open."
      },
      {
        "kind": "note",
        "body": "Anonymized for publication. The client is referred to only by sector and stage (a pre-approval oncology biopharma). All company, product, asset-code, personnel, vendor, CDMO/CMO/3PL, site and software names, and all exact prices, dosing figures, batch sizes and patient counts, have been removed or generalized. Any figures shown are coarse structural descriptors retained only to convey the nature of the work, not the underlying product."
      }
    ],
    "faq": [
      {
        "q": "When should a pre-approval biopharma start commercial supply and 3PL selection?",
        "a": "Well before approval, ideally while the registrational trial is still reading out. Commercial 3PL onboarding, pack-and-label CMO selection, serialization, and ERP go-live each carry multi-month lead times and sit on the critical path, so a sub-48-hour launch is only achievable if those decisions and at-risk commitments are made in advance against scenario-based demand."
      },
      {
        "q": "How do you plan launch volumes when the demand forecast is so uncertain?",
        "a": "By planning in batches, not dollars. We model patient-based base, upside and downside scenarios, convert them to capsule requirements and then to discrete batch counts given a fixed batch size and known lead times, and benchmark the first year against comparable recent launches. In this case that benchmarking showed the inherited models were under-calling Year 1, so we recommended raising the minimum first-year batch commitment to protect against stockout while limiting obsolescence, especially important when a launch SKU is slated to be phased out as line extensions arrive."
      },
      {
        "q": "What makes 3PL and packaging selection different for a cold-chain oncology launch?",
        "a": "Cold-chain (2-8 C) handling, full serialization, and frequently a parallel EU/UK route requiring qualified-person release all narrow the credible vendor set. We run a structured, cross-functional scorecard (compliance, accuracy, on-time performance, footprint, transport network, multi-year cost), treat site visits as decisive rather than confirmatory, and favor consolidating bottle, blister and future line extensions with one packaging partner to keep oversight and the rapid-launch timeline manageable."
      }
    ]
  },
  "rnd-quality-operating-model": {
    "timeframe": "2024-2025",
    "dek": "How a global pharma untangled overlapping quality ownership after a reorganization, a central-vs-embedded operating model, an activity-level ownership map, and a professionalized process-owner network.",
    "heroStat": {
      "value": "~8 functions",
      "label": "Development functions brought under one tailorable quality operating model, roughly half with their own embedded quality teams and half without"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation: a quality function caught between two operating logics",
        "body": "A large global pharmaceutical company engaged the firm to redesign the operating model for its R&D Quality organization following a major reorganization. Historically, R&D Quality had been a <strong>compliance-focused function</strong>, its priority was conducting audits and facilitating regulatory inspections. Less weight was placed on the strategic role a modern quality organization plays in advising the business and stewarding the Quality Management System (QMS), such as procedural-document and training administration.\n\nIn that vacuum, individual Development functions had grown their own <strong>embedded quality groups and central process teams</strong> to meet local needs. The reorganization strengthened and expanded the central quality business-partner role to reach all Development functions, but it created a structural collision. There was no clear line for where central R&D Quality ended and the embedded teams began."
      },
      {
        "kind": "prose",
        "heading": "The problem, stated plainly",
        "body": "The diagnosis was a lack of clarity on the role played by central R&D Quality alongside the embedded process teams. The consequences were concrete: <strong>duplication of effort, potential misplacement of resources, and the absence of a coordinated, holistic approach</strong> to quality oversight of GxP business operations.\n\nBoth sides shared a genuine commitment to quality and each held a distinct remit, but capability, activity, and resource overlaps were real and unmanaged. An informal review roughly a year earlier had confirmed relative roles in support of quality processes, but its outputs were never formalized; the need for a proper redesign had only ever surfaced through informal mentions. The leading risk flagged at kickoff was getting the embedded teams aligned on the very basis and objectives of the work, to be mitigated by socializing a charter and securing Development leadership support."
      },
      {
        "kind": "flow",
        "title": "Two coordinated workstreams under one program",
        "caption": "The engagement ran two tracks against a shared design intent: separate central oversight from embedded execution.",
        "steps": [
          {
            "label": "A. Quality oversight model assessment",
            "sub": "Assess the functional quality operating model, build a maturity model, and design the future-state central-and-embedded structure."
          },
          {
            "label": "B. Process-owner network installation",
            "sub": "Stand up and professionalize the R&D Quality business-process-owner network, with a path to wider rollout."
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The organizing idea: separate strategic oversight from execution",
        "body": "The design centered on a two-tier quality model, tailorable to each functional area's needs. The <strong>central tier (second-line quality)</strong>, R&D Quality, provides strategic advice and facilitates engagement with the QMS. The <strong>embedded tier (first-line quality)</strong>, quality groups sitting inside the functions, owns functional process execution: quality control, supplier monitoring, and continuous improvement.\n\nCritically, the model was not one-size-fits-all. The Development landscape split into functions that already had embedded quality teams and functions that did not, roughly half and half across about eight functional areas, each requiring a different calibration of the same underlying model."
      },
      {
        "kind": "steps",
        "title": "How the work was done",
        "items": [
          {
            "title": "Information gathering and stakeholder engagement",
            "body": "A structured interview program across embedded-quality functions, central R&D Quality, and non-quality functional experts, with separate purpose-built interview guides for each audience."
          },
          {
            "title": "Current-state analysis",
            "body": "Synthesizing interview input by role to map how quality processes actually ran, workflows, hand-off points, and where the same activity was being owned in two places at once."
          },
          {
            "title": "Maturity model and gap analysis",
            "body": "Building a bespoke R&D Quality maturity model and assessing the current operating model against it to surface specific weaknesses and overlaps."
          },
          {
            "title": "Future-state design",
            "body": "An activity-level ownership map allocating each process step across the central and embedded tiers, plus right-sized scope and explicitly defined hand-offs."
          },
          {
            "title": "Implementation planning",
            "body": "Charter, change-management and training plans, reporting tools for key metrics, communication channels, and a long-term resource model focused on process-engineering and process-owner roles."
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The analytical core: a Decision / Advisor / Informed ownership map",
        "body": "The centerpiece deliverable was a heat-map that took every quality-owned activity and decomposed it into discrete <strong>process steps</strong>, then assigned ownership across the relevant roles, the central process owner, the quality business partner, the embedded quality group, and the functional subject-matter expert for the process under scrutiny. Each cell was coded <strong>Decision, Advisor, or Informed</strong>, color-coded live in workshops using stickies, to force explicit agreement on who decides versus who is merely consulted or notified.\n\nThe activity inventory was deliberately deep. Audit ran across planning (risk assessment, annual plan, execution plan), conduct, and response and corrective action. Inspection management split sponsor and site inspections each into readiness, preparation, conduct, and closure. Deviations covered intake, triage, investigation, and review and approval; corrective action covered plan, tracking, and effectiveness-check closure. Procedural-document management spanned change identification, review, training needs, approval, and implementation. Further chapters covered escalation of significant events, quality risk management, training ownership and content, quality reviews, and vendor quality management. The single mechanism, one decision-owner per step, was applied consistently across all of them."
      },
      {
        "kind": "split",
        "title": "From compliance executor to quality advisor",
        "before": {
          "label": "Legacy state",
          "points": [
            "Quality defined largely by audits and inspections",
            "Embedded groups grown ad hoc to fill the strategic gap",
            "Overlapping ownership and duplicated effort",
            "Relative roles confirmed informally, never documented",
            "No agreed decision-owner for many shared processes"
          ]
        },
        "after": {
          "label": "Future state",
          "points": [
            "Central tier advises; embedded tier owns execution",
            "One tailorable model calibrated per function",
            "Every process step assigned a Decision / Advisor / Informed role",
            "Charter, governance, and role descriptions formalized",
            "Professionalized process-owner network on shared standards"
          ]
        }
      },
      {
        "kind": "prose",
        "heading": "Track B: installing the process-owner network",
        "body": "In parallel, the firm worked to professionalize the R&D Quality <strong>process-owner network</strong>, the people accountable end-to-end for a given quality process. Interviews surfaced a consistent picture: a good baseline understanding of the role's importance, but a need to reinforce it; confusion around empowerment and how processes should actually be managed; and uneven experience, since several participants were relatively new to the role.\n\nThe recurring asks were practical: align on expectations (what to achieve by when), create structured time for owners to exchange interdependencies and challenges as a group, and clarify what was mandatory versus nice-to-have in the supporting tooling and portal. A process-owner 'academy' and possible immersion program were floated to accelerate consistency. The network spanned named owners across audit, inspection management, deviation and corrective action, escalation, quality risk management, procedural documents, training, quality reviews, and vendor quality management."
      },
      {
        "kind": "callouts",
        "title": "Where vendor quality oversight got its sharpest definition",
        "items": [
          {
            "title": "Single escalation point",
            "body": "Vendor quality oversight defined as the single point of contact for vendor quality events, process inefficiencies, inspections, and quality-to-quality items, one clear door for everything vendor-related."
          },
          {
            "title": "Owns the external record",
            "body": "Coordinates review of critical vendor quality events with the clinical quality business partner and stakeholders, owns the external deviation record as quality approver, and tracks corrective actions and effectiveness checks to closure."
          },
          {
            "title": "Serious events and reporting",
            "body": "Coordinates notification to the clinical quality business partner and therapeutic-area lead, and keeps the study team and vendor aligned on investigations that feed health-authority reporting."
          },
          {
            "title": "Indicators and trending",
            "body": "Develops key quality indicators evidencing sponsor oversight across sourcing models, aligns them with performance metrics, and provides quarter-over-quarter trending and analysis of any missed targets."
          }
        ]
      },
      {
        "kind": "metrics",
        "title": "The engagement by the numbers",
        "items": [
          {
            "value": "~8",
            "label": "Development functional areas mapped, roughly split between those with and without embedded quality teams"
          },
          {
            "value": "5",
            "label": "Phases in the quality oversight model plan, from information gathering through finalization and execution prep"
          },
          {
            "value": "5",
            "label": "Labeled phase bands in the process-owner network plan, through long-term resource planning"
          },
          {
            "value": "13",
            "label": "Process-owner interviews completed in the first wave, against a provisional schedule of roughly 18"
          },
          {
            "value": "3",
            "label": "Ownership levels assigned per process step: Decision, Advisor, or Informed"
          },
          {
            "value": "4",
            "label": "Role types resolved per activity: central owner, quality business partner, embedded group, and functional SME"
          }
        ]
      },
      {
        "kind": "compare",
        "title": "A defined deliverable cadence across both tracks",
        "caption": "Each track ran to its own deliverable sequence, spanning roughly four to five months from current-state assessment through long-term resourcing.",
        "head": [
          "Deliverable",
          "Track",
          "Stage"
        ],
        "rows": [
          [
            "Current-state operating model assessment",
            "A",
            "Early"
          ],
          [
            "Current-state process-owner network assessment",
            "B",
            "Early"
          ],
          [
            "Future-state operating model recommendations",
            "A",
            "Mid"
          ],
          [
            "Future-state process-owner network recommendations",
            "B",
            "Mid"
          ],
          [
            "Draft charter, change-management & training plan",
            "B",
            "Mid"
          ],
          [
            "Implementation plan (central + functional models)",
            "A",
            "Mid"
          ],
          [
            "Implementation & training plan",
            "B",
            "Late"
          ],
          [
            "Long-term resource model",
            "B",
            "Final"
          ]
        ],
        "highlight": 1
      },
      {
        "kind": "prose",
        "heading": "Where the engagement landed",
        "body": "The work was structured to run from current-state assessment through to implementation planning and long-term resourcing, not to a post-implementation outcome. Its value sat in the design itself: a single tailorable operating model replacing an ad-hoc patchwork, an activity-by-activity ownership map that forced one agreed decision-owner per process step where there had previously been none, formalized role descriptions and governance, and a professionalized process-owner network operating to shared standards. The deliverable set closed with a long-term resource model to sustain it, leaving the client with an executable plan rather than a one-off diagnosis."
      },
      {
        "kind": "note",
        "body": "All company, product, person, vendor, and program names have been removed, and identifying specifics generalized; the client is described only by sector and stage. Process structures, role frameworks, counts, and the deliverable sequence are drawn from the engagement source material."
      }
    ],
    "faq": [
      {
        "q": "What does an R&D quality operating-model redesign actually deliver?",
        "a": "A clear split between central (second-line) and embedded (first-line) quality, an activity-by-activity ownership map that codes each process step as Decision, Advisor, or Informed, formalized role descriptions and governance, and a dated implementation and resourcing plan. The goal is to eliminate duplicated effort and right-size scope without weakening oversight."
      },
      {
        "q": "How do you handle overlap between central quality and embedded functional teams?",
        "a": "We decompose every quality-owned activity into discrete process steps and assign ownership across the central process owner, the quality business partner, the embedded group, and the functional subject-matter expert, forcing explicit agreement on who decides versus who is merely consulted. A maturity model and current-state interviews ground the design in how work actually runs today, not the org chart."
      },
      {
        "q": "Why stand up a formal process-owner network alongside the model redesign?",
        "a": "A redesigned model only holds if named owners are accountable end-to-end for each process and operate to shared standards. We install the network with a charter, role descriptions, training, success metrics, and structured forums so owners can resolve interdependencies, then plan the long-term resourcing to sustain it."
      }
    ]
  },
  "external-manufacturing-network-resilience": {
    "timeframe": "Early 2020s",
    "dek": "How a commercial-stage specialty pharma de-risked a single-source topical drug-product network: a CMO sourcing matrix, alternate-site qualification, a node-by-node risk register, and a board-level inventory and shelf-life readout.",
    "heroStat": {
      "value": "End-to-end",
      "label": "external manufacturing network mapped from drug substance through fill, packaging and distribution, with every single point of failure flagged"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation",
        "body": "A commercial-stage specialty pharmaceutical company had launched its lead topical prescription product and was scaling supply behind a fast-ramping demand curve. The external manufacturing footprint that carried that launch was concentrated and, in places, single-threaded: <strong>one primary drug-product CMO</strong> performing the full fill-and-release workflow for the cream; a <strong>single primary drug-substance source</strong>; and a packaging-plus-distribution node handling labeling, serialization, storage and distribution.\n\nThat concentration had delivered the launch, the primary CMO had produced dozens of commercial drug-product lots across development, launch and continued supply, but it left the network exposed. The same partner had hit a failed tech transfer and an out-of-specification impurity result on an adjacent program, and had recently changed ownership. With Technical Operations preparing a board readout, leadership needed a clear-eyed view of where supply could break, what the alternates were, and how much inventory and shelf-life headroom stood between the company and a stock-out."
      },
      {
        "kind": "flow",
        "title": "How the engagement ran",
        "caption": "From landscape to board-ready resilience plan across the external manufacturing network.",
        "steps": [
          {
            "label": "Map the network",
            "sub": "Document every node, drug substance, bulk and finished drug product, packaging and distribution, and flag single points of failure"
          },
          {
            "label": "Scan the CMO market",
            "sub": "Build a CDMO sourcing matrix scored against topical-cream fit criteria"
          },
          {
            "label": "Qualify alternates",
            "sub": "Begin standing up second-source CMOs and a backup drug-substance site via formal tech transfer"
          },
          {
            "label": "Stress-test continuity",
            "sub": "Codify supply-failure triggers, forecast discipline and a ranked risk register"
          },
          {
            "label": "Read out to the board",
            "sub": "Inventory, shelf-life and network-design decisions in one Tech Ops deck"
          }
        ]
      },
      {
        "kind": "stack",
        "title": "The external manufacturing network, node by node",
        "groups": [
          {
            "label": "Drug substance (API)",
            "items": [
              "Primary drug-substance manufacturer, single-source at engagement start",
              "Alternate drug-substance site identified and entering qualification",
              "Two-region sourcing pursued to reduce geographic concentration"
            ]
          },
          {
            "label": "Drug product (compound / fill / inspect / test)",
            "items": [
              "Primary single-source cream CMO, proven across development, launch and supply",
              "Alternate CMO on hold, recently private-equity-owned, mid-transformation",
              "New alternate cream CMO at a repurposed former large-pharma facility"
            ]
          },
          {
            "label": "Packaging, serialization & distribution",
            "items": [
              "Commercial labeling, packaging and serialization partner",
              "Commercial third-party logistics for storage and distribution",
              "Separate logistics node for free-goods and samples"
            ]
          }
        ]
      },
      {
        "kind": "compare",
        "title": "CDMO sourcing matrix, how candidates were scored",
        "caption": "Optimizing for: Rx topical cream, commercial scale, strong analytical, regulatory-inspected. Each candidate was priority-ranked from best fit to screen-out.",
        "head": [
          "Screening dimension",
          "What we looked for",
          "Why it mattered"
        ],
        "rows": [
          [
            "Cream capability",
            "Creams, gels, lotions, ointments and semi-solids at commercial scale",
            "Topical Rx fill capacity is genuinely scarce"
          ],
          [
            "Capacity / scale",
            "Batch and annual tube throughput in the required range",
            "Must absorb a growing commercial forecast"
          ],
          [
            "Analytical & QA",
            "Method validation, stability, micro and full release",
            "Enables independent release, not just fill"
          ],
          [
            "Regulatory inspected",
            "Health-authority inspected with relevant market reach",
            "Speeds qualification and multi-market supply"
          ],
          [
            "Strategic fit",
            "Pricing, service levels and prior team experience",
            "Drives total landed cost and partnership risk"
          ]
        ],
        "highlight": 4
      },
      {
        "kind": "callouts",
        "title": "Why each drug-product CMO earned its place",
        "items": [
          {
            "title": "Primary CMO, proven but concentrated",
            "body": "Delivered development, launch and ongoing commercial supply under close governance. Risk: milestone reliability and limited technical headroom, and a sister-program tech transfer that failed on impurity out-of-specs."
          },
          {
            "title": "Alternate CMO (on hold)",
            "body": "Recently acquired by a private-equity owner on a repurposed ex-large-pharma site, mid organizational transformation with new executive, quality and site leadership. Tech transfer initiated; held as a de-risking option rather than active supply."
          },
          {
            "title": "New alternate cream CMO",
            "body": "A former big-pharma facility with a strong quality culture, room to add cream products, the ability to supply an additional major market, and a path to reduced cost of goods. Identified and entering qualification, not yet a delivering source."
          }
        ]
      },
      {
        "kind": "steps",
        "title": "Supplier business-continuity: turning a contract into a tripwire",
        "items": [
          {
            "title": "A hard supply-failure definition",
            "body": "Falling below a defined purchase-order fulfillment floor, with a cure period that runs from the original delivery date, opens a formal escalation; a single uncured shortfall, or repeated qualifying delivery delays within one calendar year, places the CMO in 'Supply Failure' status."
          },
          {
            "title": "The right to dual-source",
            "body": "The client retained the right to manufacture at an alternate facility at any time, not only after a declared failure, so a second source could be kept warm rather than theoretical."
          },
          {
            "title": "Forecast discipline",
            "body": "A rolling multi-month forecast updated monthly, with the near-term window firm and binding against the longest component lead time, converting demand signals into committed, plannable supply."
          },
          {
            "title": "Protecting the asset",
            "body": "Supply terms were structured to protect the molecule commercially while still permitting qualification of backup manufacturing capacity, a balance that was actively negotiated rather than assumed."
          }
        ]
      },
      {
        "kind": "split",
        "title": "Operations-resilience strategy: before vs. after",
        "before": {
          "label": "At engagement start",
          "points": [
            "Single-source primary CMO for the commercial cream",
            "Single primary drug-substance manufacturer",
            "No qualified, contract-backed alternate for fill or drug substance",
            "Continuity risk implicit, not mapped or escalated",
            "Inventory and scrap exposure not framed for the board"
          ]
        },
        "after": {
          "label": "Target-state network",
          "points": [
            "Primary plus two alternate drug-product CMOs identified and entering qualification",
            "Second drug-substance site in qualification in a different region",
            "Fulfillment-floor and repeat-delay supply-failure tripwires written into supply terms",
            "Node-by-node risk register ranking each exposure with a named mitigation",
            "Inventory, shelf-life and scrap decisions on one board page"
          ]
        }
      },
      {
        "kind": "prose",
        "heading": "Inventory & shelf-life optimization, the board readout",
        "body": "The resilience story only holds if there is enough product in the channel to ride out a disruption. The Tech Ops readout modeled <strong>three demand scenarios</strong> and the resulting scrap exposure of inventory sitting at its stop-sell date, from a modest baseline to a far larger downside running into tens of thousands of units of potential write-off, driven by launch-buildup lots manufactured roughly a year earlier.\n\nTwo levers reshaped the curve. First, <strong>doubling the registered shelf-life</strong> pushed the stop-sell date out and gave supply chain real flexibility, since stop-sell timing runs a full year ahead of true expiry. Second, <strong>actively modulating production</strong>, confirming near-term slots, then deliberately slowing manufacturing, pulled finished-goods inventory back toward the target months-of-coverage band. The readout framed the trade-off plainly: months of coverage against scrap-write-off exposure, with coverage held inside a defined target range."
      },
      {
        "kind": "metrics",
        "title": "The work in numbers",
        "items": [
          {
            "value": "Dozens",
            "label": "commercial drug-product lots delivered by the primary single-source CMO"
          },
          {
            "value": "3",
            "label": "drug-product CMO tiers: primary, on-hold alternate, new alternate"
          },
          {
            "value": "2",
            "label": "drug-substance sources mapped, primary plus an alternate site in qualification"
          },
          {
            "value": "2x",
            "label": "registered shelf-life extension that pushed out stop-sell and freed flexibility"
          },
          {
            "value": "3",
            "label": "demand scenarios modeled for inventory coverage and scrap exposure"
          },
          {
            "value": "1 page",
            "label": "board readout framing network design, inventory and shelf-life decisions"
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "The risk register, ranked exposures and mitigations",
        "items": [
          {
            "title": "Single-source drug product",
            "body": "Highest-priority exposure: one commercial fill site for the lead product. Mitigation, qualify two alternate CMOs and keep one transfer-ready."
          },
          {
            "title": "Single-source drug substance",
            "body": "Concentrated active-ingredient supply in one region. Mitigation, qualify a second site to spread geographic and supplier risk."
          },
          {
            "title": "Partner instability",
            "body": "Ownership change and a failed adjacent tech transfer at the primary CMO. Mitigation, close governance, supply-failure tripwires and active second-sourcing."
          },
          {
            "title": "Inventory & expiry",
            "body": "Launch-buildup lots aging toward stop-sell. Mitigation, shelf-life extension and a production slow-down to manage scrap exposure."
          }
        ]
      },
      {
        "kind": "steps",
        "title": "What we delivered",
        "items": [
          {
            "title": "Global manufacturing network map",
            "body": "A single view of every node, drug substance, bulk and finished drug product, packaging, serialization and distribution, with current and future sites and all single points of failure flagged."
          },
          {
            "title": "CDMO sourcing matrix",
            "body": "A scored, priority-ranked landscape of topical-cream CMO candidates against capability, capacity, analytical, regulatory and commercial fit criteria."
          },
          {
            "title": "Alternate-source qualification plan",
            "body": "Tech-transfer and site-qualification roadmaps for the second and third drug-product CMOs and the backup drug-substance site, spanning multiple product strengths and tube sizes on a multi-year stability program."
          },
          {
            "title": "Business-continuity & resilience playbook",
            "body": "Supply-failure definitions, dual-sourcing rights, forecast discipline and a node-by-node risk register with ranked exposures and named mitigations."
          },
          {
            "title": "Tech Ops board readout",
            "body": "An executive deck covering network design, inventory scenarios, scrap exposure and shelf-life optimization, and the two decisions leadership signed off on: a deliberate production slow-down and a shelf-life extension that together pulled finished-goods coverage back into its target band."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "How do you de-risk a single-source CMO without disrupting commercial supply?",
        "a": "You keep the proven primary partner running under tight governance while qualifying alternates in parallel. That means a scored sourcing matrix to find genuinely capable second sources, a formal tech-transfer and site-qualification plan, and supply terms that let you dual-source at will, plus contractual supply-failure tripwires such as a fulfillment floor and repeat-delay triggers, so a backup can be kept warm rather than theoretical."
      },
      {
        "q": "What does a manufacturing-network risk register actually cover?",
        "a": "Every node in the external network, drug substance, bulk and finished drug product, and packaging, serialization and distribution, ranked by likelihood and business impact. Typical high-priority exposures are single-source fill and single-source drug substance, partner-instability events such as ownership changes or failed transfers, and inventory aging toward its stop-sell date. Each ranked risk is paired with a concrete mitigation."
      },
      {
        "q": "How does shelf-life extension help supply-chain resilience?",
        "a": "Because stop-sell dates often sit a year ahead of true expiry, every month of added registered shelf-life is a month of additional saleable window and channel flexibility. Extending shelf-life, paired with deliberately modulating production, lets you hold finished-goods inventory in a target coverage band, reduce write-off exposure from launch-buildup lots, and absorb a manufacturing disruption without a stock-out."
      }
    ]
  },
  "cdmo-voice-of-customer-ai-roadmap": {
    "timeframe": "2025-2026",
    "dek": "How a CEO-sponsored Voice-of-Customer program and quality-system assessment gave a premium Western API CDMO a fact-based diagnosis of why it was losing early-phase work, and a plan to fix it.",
    "heroStat": {
      "value": "~25%",
      "label": "The premium clients would tolerate before walking, isolated against a competitor price gap several times larger, by scoring 9 dimensions across the CDMO lifecycle"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation",
        "body": "A global, Western-headquartered small-molecule and active-pharmaceutical-ingredient contract development and manufacturing organization (CDMO), long regarded as a <strong>gold-standard</strong> partner for complex chemistry, was watching order income soften. Its premium reputation was intact, but it was steadily losing early-phase (preclinical through Phase 2) work to faster, lower-cost Asian competitors.\n\nThe CEO sponsored a confidential business-optimization program with one blunt brief: <strong>understand today's market and customer dynamics, sharpen the offering, and compete on more than chemistry</strong>. The mandate was explicitly time-critical. It ran with our consulting team on a strict confidentiality footing, so clients and employees would speak candidly rather than diplomatically."
      },
      {
        "kind": "quote",
        "text": "The point of hiring us is so people will be honest and not just be nice to everybody. We want the truth, so the company can fix what's happening and win the business it should be winning.",
        "by": "Program sponsor",
        "role": "Engagement kickoff, to interview participants"
      },
      {
        "kind": "prose",
        "heading": "Why now: the competitive squeeze",
        "body": "The diagnosis had to confront an uncomfortable reality. Internal teams and clients alike acknowledged the firm was quoting <strong>on the order of twice the price</strong> of top-tier Chinese and Indian competitors for early-phase work, on <strong>lead times that often ran roughly double</strong> those of more agile rivals.\n\nThe threat was no longer just labor arbitrage. Asian CDMOs were parallelizing aggressively, compressing development timelines by roughly half, sourcing raw materials domestically to skip customs delays, deploying \"free chemistry\" loss-leader models to lock in downstream commercial rights, and hiring Western-based sales and project leaders to erase the old cultural-friction advantage. Geopolitical pressure on boards to de-risk from China opened a door, but the onshoring premium frequently produced \"sticker shock\" that sent projects back offshore."
      },
      {
        "kind": "flow",
        "title": "How the program ran",
        "caption": "A roughly six-month engagement on a biweekly reporting cadence, from kickoff to executive readout.",
        "steps": [
          {
            "label": "Kickoff & framework",
            "sub": "Stakeholders aligned and a standardized VoC framework set across the end-to-end CDMO lifecycle"
          },
          {
            "label": "Internal & external interviews",
            "sub": "Deep-dive sessions across won clients, lost opportunities, and internal leadership"
          },
          {
            "label": "Quality-system assessment",
            "sub": "SOP review and internal quality interviews to locate early-phase process overload"
          },
          {
            "label": "Preliminary BD readout",
            "sub": "Findings stress-tested with the sales and business-development team"
          },
          {
            "label": "Executive readout & roadmap",
            "sub": "Operating-model recommendations plus a sequenced 6-12 month leadership roadmap"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The method",
        "body": "Every session was run by two to three dedicated interviewers to create a safe, unbiased environment for candid feedback, with won, lost, and internal perspectives interviewed separately so internal assumptions could be tested against external reality.\n\nParticipants scored the CDMO across <strong>nine core operational dimensions on a 1-5 scale</strong>, bid and proposal process, project management, technical development, manufacturing and capacity, quality system and phase-fit, timeline credibility, cost and commercial terms, flexibility, and assurance of supply. Critically, every numerical score was followed by open-ended probing to capture the <strong>\"why\" behind the number</strong>: the exact anecdotes, dealbreakers, and market shifts. Won and lost opportunities were then contrasted on the same framework to isolate the precise thresholds at which clients stayed loyal or walked away."
      },
      {
        "kind": "metrics",
        "title": "The evidence base",
        "items": [
          {
            "value": "~25",
            "label": "Stakeholder interviews spanning won and active clients, lost opportunities, and internal leaders"
          },
          {
            "value": "3",
            "label": "Stakeholder segments mapped separately: won, lost, and internal perception"
          },
          {
            "value": "9",
            "label": "Operational dimensions scored 1-5, from initial bid to assurance of supply"
          },
          {
            "value": "25+ hrs",
            "label": "Deep-dive interview time, with 2-3 dedicated interviewers per session"
          },
          {
            "value": "~6 mo",
            "label": "Program duration on a biweekly reporting cadence"
          }
        ]
      },
      {
        "kind": "split",
        "title": "What the won-vs-lost contrast revealed",
        "before": {
          "label": "Why clients stayed (won)",
          "points": [
            "Responsive proposals and proactive, \"service-mindset\" project management",
            "Deep complex-chemistry credibility, viewed as the \"no-brainer\" choice",
            "Trusted quality and IP security; clean audit track record",
            "Premium accepted where tech-transfer risk was high or know-how already existed",
            "Single projects organically expanded into add-on work without re-bidding"
          ]
        },
        "after": {
          "label": "Why clients walked (lost)",
          "points": [
            "Headline price seen as several times higher than low-cost rivals",
            "Slow proposals and lead times that often ran roughly double the competition",
            "Contracting bottlenecks, master-agreement negotiations dragging beyond a year",
            "Secondary-site credibility gaps and capacity constraints blocking bids",
            "Perceived rigidity and \"one-size-fits-all\" commercial rigor on early-phase work"
          ]
        }
      },
      {
        "kind": "callouts",
        "title": "The diagnosis: where the premium broke, and why",
        "items": [
          {
            "title": "Clients paid for value, not for everything",
            "body": "The losses were not a simple price story. Buyers tolerated a meaningful premium, on the order of a quarter above the market, when tech-transfer risk was high or the firm already held relevant know-how. Beyond that threshold, the premium was rejected outright, no matter how strong the quality reputation."
          },
          {
            "title": "Speed and process drove as many losses as price",
            "body": "Slow proposal turnaround, lead times that ran roughly double rivals', and contracting that could drag beyond a year cost the firm qualified bids on their own, independent of headline price."
          },
          {
            "title": "Commercial rigor on early-phase work",
            "body": "Full commercial-grade GMP standards were applied indiscriminately across all phases, on inflexible platforms with no fit-for-purpose configuration, driven by mindset, limited guidance, and training gaps."
          },
          {
            "title": "Resource & alignment drag",
            "body": "Heavy quality and regulatory involvement in low-risk early-phase tasks; risk-based judgment encouraged but inconsistently applied; analytical capacity consumed by late-phase validation."
          },
          {
            "title": "Fragmented systems & tooling",
            "body": "An overload of inherited, commercial-site tools created inefficiency, lost documents, and onboarding that depended on tribal knowledge."
          },
          {
            "title": "\"Add but never remove\" culture",
            "body": "SOPs accumulated audit requirements without pushback, so process weight only ever grew, and quality-event cycles (changes, deviations, out-of-specifications) ran long enough to miss client clinical windows."
          },
          {
            "title": "Commercial friction at intake",
            "body": "Bids loaded with non-essential tasks, full validation where a simple feasibility study would do, inflated cost and lead time, pricing the firm out at the intake stage."
          }
        ]
      },
      {
        "kind": "steps",
        "title": "What we recommended: a phased leadership roadmap",
        "items": [
          {
            "title": "Phase 1, Quick wins (0-3 months)",
            "body": "Restore early-phase competitiveness: standardize proposal templates and review cycles, empower business development to fast-track early-phase quotes via an internal \"fast lane\" piloted with a handful of priority clients, and codify won-project success stories into the pitch."
          },
          {
            "title": "Phase 2, Strategic initiatives (3-6 months)",
            "body": "Build the infrastructure to grow and retain: introduce a tiered pricing model that differentiates early- from late-phase work and aligns price to perceived value and risk, relieve capacity bottlenecks, and invest in high-demand specialty capabilities."
          },
          {
            "title": "Phase 3, Structural fixes (6-12 months)",
            "body": "Resolve systemic barriers: redesign legal and contracting workflows with pre-negotiated templates for repeat clients, rebuild secondary-site credibility through independent audit, and close the cost gap via hybrid delivery models and bundled offerings."
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The quality operating-model redesign",
        "body": "Running alongside the VoC work, a quality-system assessment translated the diagnosis into a concrete future-state operating model, one built to streamline intake-to-delivery cycles, make the quality management system more agile, and cut the administrative burden on client-facing teams.\n\nThe core principle was <strong>phase-appropriate rigor</strong> rather than uniform commercial-grade control. Worked examples included risk-based handling of early-phase non-conformances, a deviation with a known root cause and no process impact would not trigger a full investigation, and a more proportionate footprint for quality and regulatory review on low-risk early-phase tasks. The aim was a market-credible, fit-for-purpose early-phase model that did not compromise the IP-security and quality reputation that wins late-phase work."
      },
      {
        "kind": "prose",
        "heading": "Deliverables & outcome",
        "body": "The engagement closed with a connected set of board-grade deliverables: a preliminary business-development workshop readout, a full executive readout, a quality-simplification readout, a comparative won-vs-lost SWOT, a prioritization heatmap of impact against ease of implementation, the future-state quality operating model, and a sequenced 6-12 month leadership action roadmap.\n\nFor the first time the leadership team had a <strong>fact-based, customer-validated diagnosis</strong> of exactly why qualified buyers were walking away, and a prioritized plan that protected the firm's premium positioning while removing the speed, pricing, and process friction that early-phase clients refused to tolerate."
      },
      {
        "kind": "note",
        "body": "All identifying details have been anonymized for public publication. Company, site, client, personnel, platform, and product names have been removed, and the client is referred to only by sector and stage. Financial figures, interview counts, and timelines have been generalized into ranges or directional bands; specifics are preserved only where they are non-identifying."
      }
    ],
    "faq": [
      {
        "q": "How do you keep a Voice-of-Customer program candid when you're interviewing a client's own customers and staff?",
        "a": "Sessions are run by dedicated independent interviewers, two to three per session, on a strict confidentiality footing, with an explicit sponsor message that honesty, not flattery, is the goal. Numerical scores on a fixed framework establish a baseline, and open-ended probing captures the real anecdotes and dealbreakers behind each score. Won, lost, and internal perspectives are interviewed separately so internal assumptions can be tested against external reality."
      },
      {
        "q": "We're a premium Western CDMO losing early-phase work to low-cost competitors. Is the answer just to cut price?",
        "a": "Usually not. Here the evidence showed clients tolerated a meaningful premium, roughly a quarter above market, when tech-transfer risk was high or the firm already held relevant know-how; the losses were driven as much by slow proposals, long contracting, and applying commercial-grade rigor to early-phase work as by headline price. The plan combined tiered, phase-appropriate pricing with a leaner early-phase operating model, rather than a blanket discount that would erode the premium positioning clients still valued."
      },
      {
        "q": "Why interview lost opportunities separately from won and active clients?",
        "a": "Because the contrast is where the diagnosis lives. Scoring won and lost engagements on the same nine-dimension framework isolates the precise thresholds at which a client stays or walks, for example, exactly how much premium is tolerable before price becomes a dealbreaker. Internal leadership is interviewed as a third segment so the firm's own assumptions can be measured against what external buyers actually say."
      }
    ]
  },
  "us-distribution-3pl-selection": {
    "timeframe": "2024-2026",
    "dek": "How a rare-disease biopharma designed its U.S. distribution model and ran a structured specialty-3PL selection, RFI/RFP, a three-year cost model, a weighted scorecard, contract finalization and launch to go-live.",
    "heroStat": {
      "value": "3-year TCO model",
      "label": "built per finalist and flowed against a common demand forecast, turning three specialty-3PL bids priced on a single line-item grid into one comparable total-cost-of-ownership view"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "A European rare-disease biopharma was preparing a U.S. launch of a <strong>cold-chain (2–8°C) biologic</strong> for an acute, hospital-administered indication, supplied from a contract packaging partner in Europe. Demand would be low-volume but high-value and clinically urgent, spanning <strong>planned-and-scheduled, planned-but-unscheduled, and acute emergency-availability</strong> treatment scenarios. The company had no U.S. distribution footprint, no state distribution licenses, and no selected logistics partner.\n\nIt engaged a boutique life-sciences operations consultancy to do two things in sequence and partly in parallel: <strong>design the U.S. distribution model</strong>, then <strong>run a structured selection of a specialty third-party logistics (3PL) partner</strong> and carry it through contract finalization and launch implementation toward go-live."
      },
      {
        "kind": "flow",
        "title": "Two-phase work plan, delivered in 12–16 weeks",
        "caption": "The phases overlapped to compress the timeline: heavy lifting in 10–12 weeks, with 4–6 weeks of lighter support for stakeholder socialization and partner follow-ups.",
        "steps": [
          {
            "label": "Phase 1, Distribution model",
            "sub": "Understand supply-chain requirements; benchmark comparable cold-chain indications; develop and workshop model scenarios; finalize the model and an implementation roadmap"
          },
          {
            "label": "Phase 2, 3PL/4PL selection",
            "sub": "Define requirements and criteria; build and issue the RFI/RFP; score responses; shortlist; negotiate terms with the selected partner"
          },
          {
            "label": "Phase 3, Onboarding & launch",
            "sub": "Contract finalization, operating guidelines and quality agreement, licensure, EDI/IT integration, operational readiness, go-live"
          }
        ]
      },
      {
        "kind": "steps",
        "title": "Designing the distribution model",
        "items": [
          {
            "title": "Benchmark comparable supply chains",
            "body": "Compiled data on similar cold-chain, low-volume indications already distributed in the U.S., handling and temperature-control needs, shelf life, and the regulatory requirements for importation, local release, and distribution."
          },
          {
            "title": "Map flows for every treatment scenario",
            "body": "Built distribution-model scenarios covering planned, unscheduled, and emergency demand, with logistics flows, storage requirements, and routing for each, including rapid-response logistics for acute cases."
          },
          {
            "title": "Resolve the launch-vehicle question",
            "body": "Framed the trade-off between launching via direct state distribution licenses versus a 3PL Title Model, in which the logistics partner takes title to product while the manufacturer secures its own state licenses."
          },
          {
            "title": "Workshop and finalize",
            "body": "Presented scenarios to commercial and supply-chain stakeholders, refined to close gaps, and locked a model: product shipped from the European packaging partner under agreed delivered Incoterms, cleared and released through an importer of record, then held and distributed by a U.S. specialty 3PL to hospitals via specialty distribution (drop-ship and direct-ship)."
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "What the selected partner had to prove",
        "items": [
          {
            "title": "Quality & regulatory compliance",
            "body": "21 CFR 205 compliance, audited cGMP/DEA/FDA training programs, controlled SOPs, and a quality agreement governing receipt, storage, and release."
          },
          {
            "title": "Cold-chain warehousing",
            "body": "Validated 2–8°C refrigerated storage and handling, data-logger management, and qualified temperature-controlled transport lanes."
          },
          {
            "title": "DSCSA & serialization",
            "body": "Serialization monitoring and DSCSA-compliant data exchange, a real differentiator, as one finalist absorbed full serialization monitoring after inbound receipt while others forwarded data back to the manufacturer's own provider."
          },
          {
            "title": "Returns & data integration",
            "body": "Recall and returns management, plus real-time, self-service inventory and order visibility through a reporting portal and EDI (notably the 856 ASN required by wholesalers and specialty distributors)."
          }
        ]
      },
      {
        "kind": "compare",
        "title": "Three finalists, benchmarked head-to-head",
        "caption": "Anonymized national specialty-3PL finalists, compared across infrastructure, scale, technology and launch fit. Tiers and bands describe each provider's platform, not this client's volumes.",
        "head": [
          "Dimension",
          "3PL A",
          "3PL B",
          "3PL C"
        ],
        "rows": [
          [
            "Footprint",
            "Two-site, several hundred thousand sq ft",
            "Multi-site, ~1M sq ft total, FTZ option",
            "Multi-site, well over 1M sq ft total"
          ],
          [
            "Scale tier",
            "Very large national platform",
            "Large national platform",
            "Niche, cell-&-gene–focused"
          ],
          [
            "Differentiator",
            "Scale, automation, packaging integration",
            "High-touch specialty launch, FTZ, affiliated courier",
            "Deep cell-&-gene logistics, flexible models"
          ],
          [
            "Implementation time",
            "90–180 days",
            "90–120 days",
            "~120 days"
          ],
          [
            "Title Model term",
            "Flexible",
            "Flexible",
            "Capped at ~4–6 months"
          ]
        ],
        "highlight": 1
      },
      {
        "kind": "steps",
        "title": "The selection mechanics",
        "items": [
          {
            "title": "RFI/RFP and a standardized pricing grid",
            "body": "Issued comprehensive RFI/RFP documents and a line-item pricing grid covering implementation, customer support, order-to-cash, and distribution fees, so every bid was priced on identical, comparable terms (per-pallet receiving, per-pallet-per-month refrigerated storage, per-order pick/pack, freight, recall support, and more)."
          },
          {
            "title": "Three-year total-cost model",
            "body": "Built a single comparative cost model that flowed each finalist's unit rates against a common demand forecast across Year 1, Year 2 and Year 3 to produce a defensible total-cost-of-ownership view rather than a headline-rate comparison."
          },
          {
            "title": "Weighted scorecard",
            "body": "Scored finalists on quality and regulatory posture, infrastructure, technology and data integration, organizational and launch fit, and cost, combining the cost model with qualitative fit into a single recommendation framework."
          }
        ]
      },
      {
        "kind": "split",
        "title": "The numbers behind the bids diverged sharply",
        "before": {
          "label": "Headline rates can mislead",
          "points": [
            "Per-pallet refrigerated receiving and storage, per-order pick/pack and recall support all varied widely between finalists",
            "One finalist's per-pallet receiving rate ran several times another's; recall and support fees differed by an order of magnitude",
            "A cheaper headline rate on one activity often paired with a far higher rate on another"
          ]
        },
        "after": {
          "label": "Why a three-year TCO view was decisive",
          "points": [
            "The model flowed every finalist's rates against one shared, ramping demand forecast across three years",
            "That surfaced the true cost ranking once volume and activity mix were held constant, not the lowest sticker price",
            "Cost was then weighed against quality, cold-chain, DSCSA and launch-fit scores, so the choice rested on total value"
          ]
        }
      },
      {
        "kind": "metrics",
        "title": "The selection artifacts",
        "items": [
          {
            "value": "3",
            "label": "national specialty-3PL finalists carried into full evaluation"
          },
          {
            "value": "Yr 1–3",
            "label": "comparative cost model built per finalist against a common forecast"
          },
          {
            "value": "5",
            "label": "distribution-model design steps, from requirements to finalized model"
          },
          {
            "value": "4",
            "label": "core capability areas evidenced: quality, cold chain, DSCSA, returns/data"
          }
        ]
      },
      {
        "kind": "split",
        "title": "Launch vehicle: Title Model, then transition",
        "before": {
          "label": "At launch, Title Model",
          "points": [
            "3PL purchases and takes title to product, distributing on the client's behalf while state licenses are pending",
            "Inventory held between 7 and 14 days-on-hand, with a minimum dating floor",
            "Bridges the gap so product can reach hospitals across the territory from day one"
          ]
        },
        "after": {
          "label": "Post-launch, Traditional 3PL",
          "points": [
            "Client completes its own state Board of Pharmacy licensure (home state plus required warehouse states)",
            "Client holds title; 3PL holds product on consignment and distributes as agent",
            "Cleaner economics and direct manufacturer-to-customer commercial relationships"
          ]
        }
      },
      {
        "kind": "steps",
        "title": "Contract finalization & launch implementation",
        "items": [
          {
            "title": "Contract stack",
            "body": "Finalized an exclusive distribution agreement with incorporated operating guidelines, a quality agreement (a responsibility-delegation checklist for warehousing and market release), and a Title Model addendum."
          },
          {
            "title": "Onboarding kickoff",
            "body": "Ran an on-site implementation kickoff, facility tour, contracts status, IT/EDI integration, order-to-cash, warehouse/logistics, and DSCSA, with a defined implementation team and call cadence."
          },
          {
            "title": "Licensure & EDI critical path",
            "body": "Tracked the long-pole items: state licensure for both Title and 3PL models, vendor-number setup gated on distribution agreements, and 6–8-week EDI build timelines with trading partners."
          },
          {
            "title": "Readiness to go-live",
            "body": "Drove a versioned implementation project plan across project sponsor, IT/DSCSA, quality/regulatory, operations, trade, finance and customer service toward an operational-ready date set roughly a month ahead of commercial launch."
          }
        ]
      },
      {
        "kind": "stack",
        "title": "What the client received",
        "groups": [
          {
            "label": "Strategy & design",
            "items": [
              "Finalized U.S. distribution model with scenario-based flows",
              "Implementation roadmap with milestones and decision points",
              "Launch-vehicle recommendation (Title Model with transition)"
            ]
          },
          {
            "label": "Selection",
            "items": [
              "RFI/RFP package and standardized pricing grid",
              "Three-year comparative total-cost model",
              "Weighted 3PL scorecard and recommendation framework"
            ]
          },
          {
            "label": "Execution",
            "items": [
              "Negotiated distribution agreement, operating guidelines, quality agreement and Title addendum",
              "Implementation kickoff and versioned project plan",
              "Licensure, EDI and DSCSA readiness tracking toward go-live"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "body": "All names, products, sites, vendors and figures have been removed or generalized. Capability descriptors (scale tiers, footprint bands, service areas) characterize the anonymized finalists' platforms in relative terms, not this client's volumes, and are not tied to any named provider."
      }
    ],
    "faq": [
      {
        "q": "How long does a distribution-model design and 3PL selection take?",
        "a": "For a single-product, cold-chain launch the model design and partner selection can be completed in roughly 12–16 weeks, with the two phases overlapping. The heavy analytical lifting fits in about 10–12 weeks; the balance is stakeholder socialization and partner follow-ups. Contract finalization and launch implementation then run on the launch calendar, with operational readiness targeted about a month before commercial launch."
      },
      {
        "q": "Why use a Title Model at launch instead of distributing directly?",
        "a": "State Board of Pharmacy licensure takes time, and a launching company often does not yet hold licenses in every required state. Under a Title Model the 3PL purchases and takes title to product, so it can distribute on the manufacturer's behalf from day one while the manufacturer's own licenses are pending. Once licenses are in place, the relationship transitions to a traditional consignment model with cleaner economics."
      },
      {
        "q": "How do you compare 3PL bids fairly when fee schedules differ?",
        "a": "You standardize. We issue a single line-item pricing grid so every finalist quotes the same activities, then flow each one's unit rates against a common multi-year demand forecast to produce a three-year total cost of ownership. That cost model is combined with a weighted scorecard covering quality and regulatory posture, cold-chain and DSCSA capability, technology and data integration, and organizational fit, so the decision rests on total value, not headline rates."
      }
    ]
  },
  "clinical-supply-techops-acceleration": {
    "timeframe": "2023-2025",
    "dek": "How an agile, sprint-based clinical-supply and TechOps acceleration triaged a 20+ study oncology program, mapped its critical path, and stood up a durable cost-and-supply operating model.",
    "heroStat": {
      "value": "20+ studies",
      "label": "triaged, ranked and put under one supply operating model in weeks, not quarters"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation",
        "body": "Within roughly six months, a specialty oncology pharmaceutical company in-licensed and then acquired the development rights to a targeted oncology biologic from a biotech partner. Overnight it inherited a sprawling, partner-built clinical program: a portfolio of <strong>20+ active and planned studies</strong> spanning sponsor-led trials, partner-initiated legacy studies transferring across to the new sponsor, investigator-sponsored trials (ISTs), collaborator-run studies, and cooperative-group trials, some global, some single-country.\n\nThe technical-operations (TechOps) and clinical-supply organization had to take ownership of drug product, comparator, and standard-of-care (SOC) supply across all of these at once, against fixed clinical-development timelines for pivotal filings over the following two years. Demand signals arrived piecemeal from multiple functions, focused mostly on new studies; there was no consolidated view of global and country-specific demand and supply, no agreed ownership model, and limited visibility into which studies were genuinely critical. The risk was blunt: drug product, comparator, or SOC slipping onto the critical path and delaying patient dosing.\n\nThe firm engaged us to run an <strong>agile, sprint-based acceleration</strong>, triage the portfolio, map the critical path, fix accountability, and stand up a durable cost-and-supply operating model the internal team could own."
      },
      {
        "kind": "flow",
        "title": "Sprint 1: one goal, four objectives",
        "caption": "A three-day virtual 'follow-the-sun' sprint with a nine-person core team spanning clinical-trial supply, supply chain, regulatory CMC, quality, clinical operations, operational excellence, and new-product technical integration.",
        "steps": [
          {
            "label": "Triage the portfolio",
            "sub": "Rank every study, sponsor, collaboration, IST, coop, for TechOps focus against development timelines"
          },
          {
            "label": "Surface risks & gaps",
            "sub": "Identify the challenges and issues that could keep drug product from reaching clinical sites"
          },
          {
            "label": "Map the critical path",
            "sub": "Build and optimize the activity critical path for the highest-priority study"
          },
          {
            "label": "Close the gaps",
            "sub": "Develop a concrete path forward against each identified gap"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "How we worked: a structured workbook, not a six-month study",
        "body": "The opening sprint compressed a full program assessment into three days by working virtually across US, European, and Asia-Pacific time zones in a continuous handoff. The team built a structured study workbook capturing, for every in-scope study, a consistent set of attributes tied to supply readiness: ownership and RACI, region and countries, priority and the rationale for it, supply site, first- and last-patient-dosed dates, comparator and SOC needs, supply status, sourcing strategy, quality/regulatory/label readiness, governance approval, and budget.\n\nFor the first time the program could be ranked objectively rather than by whoever shouted loudest. We then mapped the critical path for the lead pivotal study, built a program-wide risk register graded High / Medium / Low, and developed a RACI that exposed concrete ownership and responsibility gaps between the new sponsor and the transferring partner. As the picture cleared the scope itself sharpened, with the deliverable list growing from an initial 11 to 21, 9 of them completed in the first sprint alone."
      },
      {
        "kind": "callouts",
        "title": "The highest-impact risks we flagged",
        "items": [
          {
            "title": "Unsigned prerequisites",
            "body": "Agreements with collaborators, IST sites and vendors not yet executed, a hard blocker to initiating studies and the supply activities behind them."
          },
          {
            "title": "Constrained drug-product supply",
            "body": "A late decision to increase subject numbers outstripped the second-generation drug product available from the original fill-finish CDMO, forcing a planned transfer to a second manufacturer and a possible bridging campaign."
          },
          {
            "title": "No reliable demand/supply view",
            "body": "Ambiguity around key study attributes meant short- and long-term supply planning was unreliable; demand arrived piecemeal from multiple functions, focused only on new studies."
          },
          {
            "title": "Comparator switch exposure",
            "body": "Moving to a biosimilar version of the comparator antibody carried cost, vendor and CRO disruption that had not been quantified."
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The strategic pivot: cost first, then future state",
        "body": "The triage produced a clear recommendation, which the sponsor confirmed: rather than attempting a full end-to-end redesign immediately, <strong>prioritize cost management first and let it feed into the end-to-end future-state design</strong>, using the same core team. This sequencing let the program bank tangible savings while the slower work of mapping and aligning a cross-functional future-state process proceeded in parallel.\n\nThe cost workstream was chartered with a tight scope, all sponsored, transferring, IST and collaboration studies, with cost optimization balancing speed and cost for active drug, comparator and SOC, and explicit out-of-scope guardrails: no protocol or biosimilar selection, no country or site selection, no companion diagnostics. Single points of contact were named at both operational and executive levels so every decision had an owner."
      },
      {
        "kind": "steps",
        "title": "The cost-optimization engine",
        "items": [
          {
            "title": "Generate lessons learned from the in-flight study",
            "body": "We mined the first sponsor-run study to confirm that, with no regulatory implication, maximizing the number of sites sourcing their own comparator, SOC, pre-meds and ancillaries unlocked savings, then codified this as reusable lessons learned."
          },
          {
            "title": "Cascade learnings down the study pipeline",
            "body": "Insights flowed deliberately from the earliest study to the next, and into the large pivotal study still in its low-cost-of-change phase, where savings leverage was highest."
          },
          {
            "title": "Shift from central to site & central-pharmacy sourcing",
            "body": "We moved the default away from blanket central sourcing toward local site sourcing and, where appropriate, a clinical-trial-Rx central-pharmacy reimbursement model, cutting management fees, waste and batch-expiry risk."
          },
          {
            "title": "Run a competitive RFP for the pivotal study",
            "body": "We built RFP criteria, assurance of supply, regulatory coverage, overage and waste control, speed-to-go-live, cost transparency, and ran a head-to-head vendor evaluation for the accelerated pivotal study."
          },
          {
            "title": "Stand up cost monitoring & benchmarking",
            "body": "We instituted itemized, per-drug, per-country cost monitoring on a quarterly cadence with monthly check-ins, plus an industry benchmarking checklist across vendor selection, sourcing and procurement."
          }
        ]
      },
      {
        "kind": "compare",
        "title": "Vendor selection for the pivotal study: a structured head-to-head",
        "caption": "Two clinical-supply / packaging-and-distribution providers were evaluated for the accelerated pivotal study on the same comparator and SOC basket. Lower unit price did not win on its own, total landed cost, management fees and waste exposure decided it.",
        "head": [
          "Dimension",
          "Incumbent 3PL",
          "Alternative 3PL (selected)"
        ],
        "rows": [
          [
            "Unit drug cost",
            "Lower on several lines",
            "Higher on some lines"
          ],
          [
            "Management / service fees",
            "Higher",
            "Materially lower"
          ],
          [
            "Total landed cost (lead region)",
            "Reference",
            "~21% lower"
          ],
          [
            "Best-case line saving",
            ", ",
            "Up to ~38% on the strongest line"
          ],
          [
            "Waste & demand-gap exposure",
            "Higher",
            "Lower"
          ]
        ],
        "highlight": 2
      },
      {
        "kind": "split",
        "title": "Cost monitoring: original state vs. new state",
        "before": {
          "label": "Original state",
          "points": [
            "Central sourcing used as the default for SOC, pre-meds, ancillaries and comparator/combination drugs",
            "No cost monitoring at the itemized product level",
            "No dedicated resource owning drug cost",
            "Excess and obsolescence absorbed quietly"
          ]
        },
        "after": {
          "label": "New state",
          "points": [
            "Shift toward site sourcing, with a central-pharmacy reimbursement model where applicable",
            "Itemized, per-item cost monitoring on a fixed quarterly cadence",
            "A dedicated drug-cost-management resource and named supplier",
            "Projected savings of over $5M, with obsolescence and over-buying minimized"
          ]
        }
      },
      {
        "kind": "prose",
        "heading": "Critical-path mapping and the supply backbone",
        "body": "For the accelerated pivotal study, planned for hundreds of patients across tens of countries and 100+ sites, we built a country-by-country critical path that tied regulatory submission, drug ready-for-QP-release, label translation and booklet/single-panel labeling, pack-and-label, depot setup, and first-patient-in (screened and randomized) into a single timeline across North America, EMEA, APAC and Latin America. This made it possible to see, per country, exactly which activity threatened the dosing date, and to confirm where comparator and SOC could be kept off the critical path via local or central-pharmacy sourcing.\n\nUnderpinning the operating rhythm, we stood up a weekly Drug Supply Working Group that drove a live action-item log, tracked through the high tens of items, opened and closed against named owners, and specified a low-code BI forecasting model to project kit demand from depot to site per study, translating subject cycles, vials-per-cycle and on-hand inventory into forward kit requirements."
      },
      {
        "kind": "stack",
        "title": "What we left behind: the deliverable set",
        "groups": [
          {
            "label": "Decision & governance assets",
            "items": [
              "Triaged, ranked portfolio workbook covering every in-scope study",
              "Program risk register graded High / Medium / Low",
              "RACI exposing ownership & responsibility gaps",
              "Executive readout & path-forward decision pack"
            ]
          },
          {
            "label": "Process & operating model",
            "items": [
              "Current-state and future-state end-to-end process maps",
              "Cost-management & benchmarking charters",
              "Quarterly cost-monitoring plan with monthly cadence",
              "Weekly Drug Supply Working Group operating rhythm"
            ]
          },
          {
            "label": "Supply & cost tools",
            "items": [
              "Country-by-country critical-path maps",
              "Sourcing framework: site vs. central vs. central-pharmacy, plus RFP criteria",
              "Vendor lessons-learned, cascaded across studies",
              "Depot-to-site kit-demand BI forecasting model"
            ]
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Outcome",
        "body": "In a matter of sprints rather than quarters, the sponsor moved from an inherited, opaque multi-study program to a ranked portfolio with named owners, a mapped critical path for its pivotal study, and a working cost-and-supply operating model run by its own team. The demonstrable wins were structural: drug product, comparator and SOC were confirmed off the critical path for the priority studies; a competitive vendor evaluation selected a provider at materially lower total landed cost despite higher unit prices on some lines; and a full block of ancillary and project-management spend, roughly $10M, was designed out of the pivotal study's budget and sourcing plan entirely.\n\nOn top of those delivered outcomes, the new cost-monitoring and site-sourcing model put further projected savings of over $5M within reach. Crucially, every deliverable was handed to a named current and future owner with a transition date, the engagement built capability, then stepped back."
      },
      {
        "kind": "note",
        "body": "All names, products, vendors, sites, countries and figures in the source material have been anonymized or generalized. This case study describes the type and shape of the work; specifics are illustrative of the engagement, not attributable to any named party."
      }
    ],
    "faq": [
      {
        "q": "We just in-licensed an asset with a partner-built clinical program we now have to supply. Where do you start?",
        "a": "With triage. Before redesigning anything, we capture a consistent attribute set for every in-scope study, ownership, RACI, countries, priority and rationale, supply status, sourcing strategy, regulatory and label readiness, dosing dates and budget, so the portfolio can be ranked objectively. That ranked view, plus a critical-path map for the highest-priority study and a graded risk register, is usually achievable in the first one or two sprints and immediately tells you where drug product, comparator or SOC is about to slip onto the critical path."
      },
      {
        "q": "How do you actually take cost out of clinical supply without putting timelines at risk?",
        "a": "We separate cost levers by how much change they introduce. The safe, high-value moves are shifting from blanket central sourcing toward site sourcing and a central-pharmacy reimbursement model where regulations allow, running a structured competitive RFP that weighs total landed cost and management fees rather than just unit price, and instituting itemized per-drug, per-country cost monitoring on a fixed cadence. We generate lessons learned from an in-flight study and cascade them to studies still early enough to change cheaply, banking savings while leaving in-flight batch plans untouched."
      },
      {
        "q": "Will this leave our team dependent on consultants?",
        "a": "No. The model is deliberately capability-building. We work as a lean core team alongside your functions, name single points of contact at operational and executive levels, and hand every deliverable to a named current and future owner with a transition date. The recurring operating rhythm, a weekly supply working group, a quarterly cost-monitoring cadence and a forecasting model, is designed for your team to run after we step back."
      }
    ]
  },
  "cmc-portfolio-prioritization": {
    "timeframe": "2024-2025",
    "dek": "How a clinical-stage biotech turned an informal CMC staffing scramble into a prioritized, named-resource allocation model with per-person and per-program capacity views.",
    "heroStat": {
      "value": "Multi-asset",
      "label": "CMC portfolio prioritized and resourced across Drug Substance, Drug Product and Overall CMC, on a single named-resource allocation model"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation",
        "body": "A clinical-stage biotech advancing a multi-asset oncology portfolio faced a familiar mid-stage problem: more CMC work than people to do it. A lead program was driving toward regulatory submission readiness while earlier-stage assets needed to keep moving through the pipeline, all drawing on the same small, specialized Process & Formulation Development (PFD) bench.\n\nThere was no single, defensible view of who was working on what, at what intensity, against which deliverable. <strong>Capacity decisions were being made informally</strong>, asset by asset, with no way to see when a given scientist was committed past 100% or when a program was quietly under-resourced. The client needed a structured way to prioritize the portfolio and then allocate named people to it."
      },
      {
        "kind": "flow",
        "title": "How the engagement ran",
        "caption": "From prioritization to a living allocation model",
        "steps": [
          {
            "label": "Prioritization workshop",
            "sub": "Rank assets and CMC objectives with leadership; set the goal for each program"
          },
          {
            "label": "Activity decomposition",
            "sub": "Break each program into Drug Substance, Drug Product and Overall-CMC activities and deliverables"
          },
          {
            "label": "Resource matrix",
            "sub": "Allocate named team members to activities at % of time, on a 40 hrs/week basis"
          },
          {
            "label": "Capacity views",
            "sub": "Roll up per-person and per-program loading to expose over/under-allocation"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Anchoring on priorities first",
        "body": "The work began with a <strong>prioritization workshop</strong> with CMC leadership. Rather than starting from headcount, the team started from intent: each program was assigned an explicit objective so that allocation could follow strategy, not the other way round.\n\nThe lead program was framed around <strong>achieving regulatory submission readiness</strong>, authoring the relevant CMC quality module, running process-validation campaigns at contract manufacturers, optimizing dose strength, characterization work, and clinical and validation runs. The earlier-stage programs were framed around <strong>advancing the pipeline</strong>: one needed drug-product tech transfer, establishment and clinical runs at a manufacturing partner, and selection of cell-bank, drug-substance and drug-product partners; the earliest-stage asset was scoped around candidate-nomination work. With objectives fixed first, the allocation that followed could be defended as a strategy choice rather than a staffing accident."
      },
      {
        "kind": "stack",
        "title": "The matrix spanned the full CMC scope",
        "groups": [
          {
            "label": "Drug Substance",
            "items": [
              "Cell-line and upstream process development",
              "Cell-bank and DS manufacturer selection",
              "Establishment and clinical DS runs at contract manufacturers"
            ]
          },
          {
            "label": "Drug Product",
            "items": [
              "Formulation and DP process development",
              "DP tech transfer to fill-finish partners",
              "Process-validation and clinical/validation runs"
            ]
          },
          {
            "label": "Overall CMC",
            "items": [
              "Regulatory quality-module authoring",
              "Biophysical characterization in the PFD lab",
              "Dose-strength optimization"
            ]
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Normalizing a mixed bench to one honest scale",
        "body": "The hard part of any resource model is making heterogeneous people comparable. The bench mixed full-time scientists with fractional and shared resources, functional-service-provider staff and a part-period co-op among them, who do not map cleanly onto a full week.\n\nThe model put everyone on the same footing: every commitment expressed as a <strong>percentage of a 40-hour week</strong>, with each person's lines summing toward a 100% baseline. Fractional resources were entered at their true availability rather than rounded up, so a half-time contributor never read as a full head. That single normalization is what made the roll-ups trustworthy, a Grand Total only means something if a 100% line represents the same thing for every name in the column."
      },
      {
        "kind": "metrics",
        "title": "What the model covered",
        "items": [
          {
            "value": "Multi-asset",
            "label": "Portfolio prioritized: one submission-track program plus earlier-stage pipeline assets"
          },
          {
            "value": "3",
            "label": "Activity domains: Drug Substance, Drug Product, Overall CMC"
          },
          {
            "value": "Named bench",
            "label": "Specialist team members allocated by name across programs"
          },
          {
            "value": "100% / 40 hrs",
            "label": "Per-person totals normalized to a 40-hour-week baseline"
          },
          {
            "value": "2 views",
            "label": "Capacity roll-ups produced: per-person and per-program"
          },
          {
            "value": "1 artifact",
            "label": "Single re-runnable planning model owned by CMC leadership"
          }
        ]
      },
      {
        "kind": "split",
        "title": "Before and after the model",
        "before": {
          "label": "Before, informal allocation",
          "points": [
            "Capacity judged asset-by-asset, in people's heads",
            "No visibility into who was committed past 100%",
            "Thin coverage on a program went unnoticed until late",
            "No shared basis for trade-off conversations"
          ]
        },
        "after": {
          "label": "After, a single resource model",
          "points": [
            "Every person mapped to activities at an explicit % of time",
            "Per-person Grand Totals expose over-allocation at a glance",
            "Per-program loading shows where coverage is thin",
            "One artifact leadership can re-balance against"
          ]
        }
      },
      {
        "kind": "callouts",
        "title": "Why the per-person and per-program views mattered",
        "items": [
          {
            "title": "Spotting over-allocation early",
            "body": "Rolling each person's commitments to a Grand Total against a 100% / 40-hour baseline made it immediately visible when a specialist was booked beyond capacity, so a stretched scientist could be re-balanced before it affected delivery."
          },
          {
            "title": "Spotting thin coverage",
            "body": "The per-program view showed where an asset's activities lacked enough committed time, so leadership could deliberately pull capacity toward submission-track work or protect pipeline progress."
          },
          {
            "title": "Making trade-offs explicit",
            "body": "Because allocation was tied back to each program's stated objective, re-balancing became a strategy conversation, move time here, accept slower progress there, rather than an ad-hoc scramble. Every reallocation could be read against the goal it served."
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "What was delivered",
        "body": "The engagement produced a working <strong>CMC project-resource matrix</strong>, built directly from the prioritization workshop output, that allocated named team members across Drug Substance, Drug Product and Overall-CMC activities for each prioritized asset, at percentage-of-time on a 40-hour-week basis.\n\nOn top of the matrix sat two capacity views: a <strong>per-person view</strong> (Grand Totals by person across all programs) and a <strong>per-program view</strong>, each designed to surface over- and under-allocation. The result was a single, defensible planning artifact the CMC organization could re-run as priorities, milestones and partner selections evolved through the regulatory timeline."
      }
    ],
    "faq": [
      {
        "q": "How do you decide which programs get scarce CMC capacity?",
        "a": "We start with a prioritization workshop that assigns each asset an explicit objective, for example, driving one program to regulatory submission readiness while keeping earlier-stage assets advancing. Allocation then follows that intent, so capacity trade-offs are made against strategy rather than informally, asset by asset."
      },
      {
        "q": "What does the resource model actually produce?",
        "a": "A project-resource matrix that maps named team members to specific CMC activities across drug substance, drug product and overall CMC at a percentage of time on a 40-hour-week basis, plus two roll-up views: a per-person view that flags anyone committed beyond 100%, and a per-program view that flags under-resourced assets. Fractional and shared staff are entered at true availability so the totals stay honest."
      },
      {
        "q": "Is this a one-time analysis or something we can keep using?",
        "a": "It is built to be re-run. As milestones move, partner selections firm up and priorities shift, the same matrix and capacity views can be updated, giving leadership a living, defensible basis for re-balancing people across the portfolio."
      }
    ]
  },
  "clinical-supply-chain-dashboard": {
    "timeframe": "2026",
    "dek": "How a clinical-stage oncology biopharma moved from three fragmented supply reports to one governed dashboard with reconciliation that flags mismatches before month-end sign-off.",
    "heroStat": {
      "value": "17-page",
      "label": "low-code dashboard integrating three data sources across participants, inventory and resupply"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "A clinical-stage oncology biopharma was advancing its lead asset through expansion-cohort studies, with a registrational program on the horizon. Clinical supply ran off a patchwork of exports: an <strong>IRT system</strong> for enrollment and kit-level inventory, a <strong>CDMO depot inventory report</strong> for physical stock, and <strong>Clinical Operations planning files</strong> for cohort targets and demand. Each lived in its own spreadsheet, on its own cadence, in its own format. Nobody could answer a simple cross-cutting question, <em>are we on track to enroll, and do we have enough drug to cover it?</em>, without manually stitching three sources together every cycle.\n\nThe firm was engaged to deliver an integrated clinical supply chain dashboard on a low-code analytics and automation stack, replacing fragmented reporting with one governed monthly view across three pillars: <strong>participants and enrollment, inventory, and resupply</strong>. Critically, the build embedded reconciliation logic so that mismatches between systems surface and get resolved <em>before</em> month-end sign-off, not after."
      },
      {
        "kind": "flow",
        "title": "How the work was delivered",
        "caption": "A phased build, from source discovery to a governed operating rhythm",
        "steps": [
          {
            "label": "Discovery",
            "sub": "Mapped the fragmented sources, IRT exports, CDMO inventory reports, ClinOps planning files, and gathered requirements across supply, clinical and CMC."
          },
          {
            "label": "Design & build",
            "sub": "Built the multi-page dashboard through weekly working sessions; stood up the document-library intake structure, file standards and automated notifications."
          },
          {
            "label": "Reconciliation",
            "sub": "Added inventory (IRT vs CDMO) and participant (IRT vs cohort tracker) reconciliation to surface discrepancies automatically each cycle."
          },
          {
            "label": "Governance",
            "sub": "Produced the Operations & Governance Manual covering the full monthly workflow, RACI, escalation paths and onboarding."
          }
        ]
      },
      {
        "kind": "stack",
        "title": "Three integrated data sources, one model",
        "groups": [
          {
            "label": "IRT system (source of record)",
            "items": [
              "Enrollment: subject ID, site, cohort, status, first-dose and visit dates",
              "Inventory: labelled and manufacturing lot, kit status, quantity, expiry",
              "Maintained for accuracy by external site and depot teams"
            ]
          },
          {
            "label": "CDMO depot inventory",
            "items": [
              "Physical depot stock by lot",
              "Quantity available, in-transit and pending upload",
              "The independent check against IRT for reconciliation"
            ]
          },
          {
            "label": "ClinOps planning files",
            "items": [
              "Enrollment report at subject level",
              "Cohort tracker: first/last-patient-in, target vs actual enrollments",
              "A new file template designed and delivered as part of the build"
            ]
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The reconciliation engine",
        "body": "The dashboard's differentiator was not the charts; it was the <strong>two reconciliation checks that run every cycle</strong>. The <strong>inventory reconciliation</strong> compares IRT quantity-per-lot against the CDMO depot report; any variance must be investigated and resolved before sign-off. The <strong>participant reconciliation</strong> auto-flags every mismatch between IRT subject status and the ClinOps cohort tracker, so clinical operations can resolve timing lags or data-entry issues before the numbers are locked.\n\nThis turned the month-end close from a reactive scramble into a controlled gate. A documented methodology classifies discrepancy types, timing lags, data-entry errors, with defined remediation steps and an audit trail capturing who changed what and when. <strong>Lot and expiry were treated as mandatory fields</strong> across all datasets, with missing or invalid values surfaced for correction, and subject status constrained to a single canonical set (New Cohort, On Treatment, End-of-Treatment, Dose Modified, Completed) so the same status never means two things across sources."
      },
      {
        "kind": "metrics",
        "title": "What was built (by the numbers)",
        "items": [
          {
            "value": "17",
            "label": "content pages plus a Cover navigation hub in the final dashboard build"
          },
          {
            "value": "3",
            "label": "independent data sources integrated into one model (IRT, CDMO, ClinOps)"
          },
          {
            "value": "2",
            "label": "automated reconciliation checks running every monthly cycle"
          },
          {
            "value": "6",
            "label": "requirement domains traced from URS through functional design to UAT test cases"
          },
          {
            "value": "Monthly",
            "label": "refresh cadence, with an optional weekly enrollment pulse"
          }
        ]
      },
      {
        "kind": "split",
        "title": "Before and after",
        "before": {
          "label": "Fragmented reports",
          "points": [
            "Three sources reconciled by hand each cycle",
            "No single view of enrollment trajectory against supply coverage",
            "IRT-vs-depot quantity mismatches caught late, if at all",
            "Expiry risk buried in spreadsheets, not surfaced",
            "No defined escalation path when depot coverage ran short"
          ]
        },
        "after": {
          "label": "One integrated, governed view",
          "points": [
            "IRT, CDMO and ClinOps merged into one model",
            "Executive Summary ties enrollment coverage to depot months-on-hand",
            "Inventory and participant variances auto-flagged and resolved before sign-off",
            "Lots expiring under six months highlighted automatically in amber and red",
            "Red months-on-hand escalates to the CMC VP per a defined SLA"
          ]
        }
      },
      {
        "kind": "callouts",
        "title": "The questions it now answers in one place",
        "items": [
          {
            "title": "Are we on track to enroll?",
            "body": "Enrollment completion vs target with cohort-level trend, and an instant flag when a cohort falls behind last-patient-in."
          },
          {
            "title": "Do we have enough drug?",
            "body": "Months-on-Hand at every depot and site with red/amber/green coding, red means act now."
          },
          {
            "title": "What's at risk of expiring?",
            "body": "Inventory bucketed by expiry date; lots expiring within six months surface automatically in amber and red."
          },
          {
            "title": "When do we trigger the next run?",
            "body": "A bulk-to-finished-goods plan compares depot months-on-hand against the reorder point, with reorder quantity and lead time pre-calculated at the trigger threshold."
          },
          {
            "title": "What needs an executive decision?",
            "body": "The Executive Summary consolidates enrollment coverage and depot coverage; red flags escalate to the CMC VP per the governance process."
          }
        ]
      },
      {
        "kind": "steps",
        "title": "The monthly operating cycle",
        "items": [
          {
            "title": "Day 0–3 · File staging & refresh",
            "body": "IRT, CDMO and ClinOps files are staged to the controlled document library; the supply lead triggers the refresh and confirms the data cut-off on the Cover page."
          },
          {
            "title": "Day 3–5 · Reconciliation & inventory review",
            "body": "Participant flags resolved by ClinOps; inventory variances investigated by the CDMO; months-on-hand reviewed at depot and site; supply lead signs off both."
          },
          {
            "title": "Day 5–6 · Planning signals",
            "body": "Cycle demand confirmed, packaging and resupply windows reviewed, and the planning packet shared 24 hours before the meeting."
          },
          {
            "title": "Day 7–8 · Monthly supply review",
            "body": "The supply lead chairs the meeting, presents the dashboard, decisions are made and actions logged, with the CMC VP in the room."
          },
          {
            "title": "Day 9 · Snapshot & archival",
            "body": "A PDF snapshot goes to the CMC VP, source files are archived to a dated folder, and the exception log is closed out."
          }
        ]
      },
      {
        "kind": "compare",
        "title": "Validation and controls",
        "caption": "The build was specified and tested, not just assembled",
        "head": [
          "Discipline",
          "What it covered"
        ],
        "rows": [
          [
            "User & functional requirements",
            "Every business requirement traced from URS to functional design to acceptance criteria across six domains: master data, participant reconciliation, clinical inventory, planning signals, dashboards and governance"
          ],
          [
            "UAT test scripts",
            "One test case per functional requirement, positive and negative cases, performance and export checks, with pass/fail, tester and defect log"
          ],
          [
            "File standards",
            "Naming conventions, a validation checklist, a canonical status set and ISO-date formatting to keep ingestion automated and clean"
          ],
          [
            "Privacy",
            "No identifiers beyond subject ID / screening number; no protected health information in scope"
          ]
        ],
        "highlight": 1
      },
      {
        "kind": "prose",
        "heading": "The deliverables",
        "body": "The engagement closed with a working system and the operating model to run it: a <strong>17-page low-code dashboard</strong> spanning enrollment, inventory, months-on-hand, both reconciliations and an Executive Summary, fronted by a five-column Cover navigation grid with per-source refresh dates; a designed-and-delivered <strong>ClinOps file template and specification</strong> for a source that did not previously exist; a controlled document-library intake structure with file standards and automated notifications; a <strong>UAT and Functional Requirements pack</strong> tracing every requirement to a test; and an <strong>Operations & Governance Manual</strong> covering the monthly workflow, RACI, sign-off gates, escalation paths and onboarding.\n\nThe result moved the client from three disconnected spreadsheets to a single governed view that connects enrollment to supply coverage, and catches the mismatches that used to surface only after the books were closed."
      },
      {
        "kind": "note",
        "body": "All figures, systems and parties in this case study are anonymized. Vendors, products and platforms are described generically; the client is identified only by sector and stage."
      }
    ],
    "faq": [
      {
        "q": "What does a clinical supply chain dashboard like this actually integrate?",
        "a": "Three independent sources are merged into one model: the IRT system (enrollment and kit-level inventory, treated as the source of record), the CDMO depot inventory report (physical stock by lot), and Clinical Operations planning files (cohort targets, demand and the cohort tracker). The value is in connecting them so enrollment trajectory and supply coverage can be read against each other in a single view, refreshed monthly."
      },
      {
        "q": "How does the reconciliation logic prevent errors before sign-off?",
        "a": "Two checks run every cycle. One compares IRT quantity-per-lot against the CDMO depot report and flags any variance; the other flags every mismatch between IRT subject status and the cohort tracker. Both must be investigated and resolved, with discrepancies classified (timing lags, data-entry issues) and an audit trail kept, before the supply lead signs off and the planning packet is distributed. It turns month-end close into a controlled gate rather than a reactive cleanup."
      },
      {
        "q": "Do you need a heavy IT build, or can this run on a low-code stack?",
        "a": "It runs on a low-code analytics and automation stack with file-based ingestion through a controlled document library, no direct database connections in the initial phase. That keeps it fast to stand up and easy for the supply team to operate, while file standards, a naming convention, mandatory lot/expiry fields and automated notifications keep the monthly refresh clean and largely hands-off."
      }
    ]
  },
  "saas-pricing-data-analytics": {
    "timeframe": "",
    "dek": "How a consumer-reviews SaaS platform rebuilt pricing into good/better/best packaging, cleaned its commercial data, and stood up cohort and account-health analytics it could run itself.",
    "heroStat": {
      "value": "4-step",
      "label": "data-cleaning pipeline, contracts, then domains, then instance mapping, then entitlements"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The situation",
        "body": "A late-stage <strong>consumer-reviews SaaS platform</strong> ran <strong>two distinct commercial motions on overlapping CRM data</strong>, and each motion had been priced on its own independent logic. That single fact was the root of the problem: list prices, discounting, and packaging diverged depending on which motion a deal ran through, and the underlying records, accounts, contracts, usage, connections, were not clean enough to price against or to report on with confidence.\n\nThe brief was a <strong>handover</strong>, not a black box. The client wanted a defensible pricing model, a working configure-price-quote (CPQ) prototype, a migrated and cleaned data foundation, and analytics their own team could operate after the advisors stepped away. The work ran across three tightly coupled tracks, <strong>data migration and cleaning</strong>, <strong>pricing</strong>, and <strong>analytics</strong>, deliberately sequenced so each fed the next."
      },
      {
        "kind": "flow",
        "title": "How the three tracks connected",
        "caption": "Clean data fed the pricing model; the pricing model fed the CPQ prototypes; analytics sat on top of the same foundation.",
        "steps": [
          {
            "label": "Source extract",
            "sub": "CRM accounts, contracts, opportunities, quotes, usage and connections"
          },
          {
            "label": "Migrate & clean",
            "sub": "the four-step pipeline below"
          },
          {
            "label": "Price model",
            "sub": "good/better/best packaging per motion"
          },
          {
            "label": "CPQ prototype",
            "sub": "configurators that quote off the new model"
          },
          {
            "label": "Analytics",
            "sub": "cohort analysis and account-health scoring"
          }
        ]
      },
      {
        "kind": "steps",
        "title": "The data migration & cleaning pipeline",
        "items": [
          {
            "title": "Step 1, Contracts",
            "body": "Reconcile services contracts against active customer accounts, resolving the opportunity and quote extracts into a single contract-level spine, the authoritative record of what each customer was contracted for and paying."
          },
          {
            "title": "Step 2, Domains",
            "body": "Attach customer domains to that contract spine, untangling brands and URLs that spanned multiple agreements so each domain mapped cleanly to its commercial owner."
          },
          {
            "title": "Step 3, Instance mapping",
            "body": "Map product instances and their features to the cleaned domains, so usage and connections data could be tied to a specific deployment rather than a fuzzy account."
          },
          {
            "title": "Step 4, Entitlements",
            "body": "Resolve final entitlements per instance, which features each customer was licensed for. This is the bridge between the data foundation and the new pricing model."
          }
        ]
      },
      {
        "kind": "split",
        "title": "Pricing: from two independent logics to one packaging ladder",
        "before": {
          "label": "Before",
          "points": [
            "Two commercial motions, each priced on its own independent logic",
            "Packaging that did not reflect how customers actually consumed the product",
            "Ad hoc discounting with no shared list reference",
            "No way to model the effect of a price change before quoting it"
          ]
        },
        "after": {
          "label": "After",
          "points": [
            "Good/better/best (GBB) packaging tiers built per motion",
            "A documented price model with explicit data inputs",
            "A new-price calculation tied to the cleaned entitlement records",
            "A price-impact analysis prepared to size the change before rollout"
          ]
        }
      },
      {
        "kind": "prose",
        "heading": "Why good/better/best per motion",
        "body": "The most consequential design choice was to build a <strong>separate good/better/best ladder for each of the two motions</strong> rather than force both onto one unified scheme. The two motions sold against genuinely different value and consumption patterns; a single ladder would have papered over that and reintroduced the inconsistency the engagement set out to remove. Keeping the ladders distinct, while standardising the <em>method</em> (three tiers, documented inputs, a repeatable new-price calculation), let each motion price honestly against its own logic without the two drifting apart again. Legacy agreements were then mapped against the new ladders so the existing book could be placed onto tiers."
      },
      {
        "kind": "callouts",
        "title": "What was built",
        "items": [
          {
            "title": "GBB packaging framework",
            "body": "A good/better/best master that grouped features into three tiered packages, with legacy client agreements mapped against the tiers to position the existing book on the ladder."
          },
          {
            "title": "CPQ configurator prototypes",
            "body": "Working configure-price-quote prototypes for both commercial motions, quoting directly off the new price model rather than off spreadsheets."
          },
          {
            "title": "Price-impact analysis",
            "body": "A price-impact model, carried through successive draft versions, prepared to size how the new packaging and pricing would land before any switch-over."
          },
          {
            "title": "Two-level health scoring",
            "body": "Health scores at both the account level and the individual deployment level, drawn from the customer-success platform, to sit alongside pricing as a read on risk and expansion."
          }
        ]
      },
      {
        "kind": "metrics",
        "title": "Scope of the build",
        "items": [
          {
            "value": "2",
            "label": "Commercial motions modeled, each with its own price model and CPQ prototype"
          },
          {
            "value": "4",
            "label": "Sequential cleaning steps: contracts, domains, instance mapping, entitlements"
          },
          {
            "value": "3",
            "label": "Tiers in each good/better/best packaging ladder"
          },
          {
            "value": "2",
            "label": "Levels of health scoring: overall account and individual deployment"
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "Analytics & handover",
        "body": "On the cleaned foundation, the team stood up <strong>cohort analysis</strong> in a low-code BI platform, versioned and refined across iterations, supported by pivot tables and stair-step contract views that made renewal and expansion patterns legible. Paired with the two-level health scoring, this gave the client a consistent way to look at cohorts and accounts alongside the new pricing.\n\nEverything was delivered as <strong>operable artifacts</strong> so the client's own team could run it: the source and intermediate data files, the four-step cleaned migration datasets, the GBB master and pricing-model workbooks, both CPQ prototypes, and the cohort-analysis reports. The engagement was structured throughout for transfer of ownership, built so the team could requote in the CPQ prototypes and refresh the analytics without the advisors in the room."
      },
      {
        "kind": "stack",
        "title": "Deliverables handed over",
        "groups": [
          {
            "label": "Pricing",
            "items": [
              "Good/better/best packaging master",
              "Price models with data inputs and new-price calculation",
              "Price-impact analysis",
              "CPQ configurator prototypes (both motions)"
            ]
          },
          {
            "label": "Data",
            "items": [
              "Source & intermediate data files",
              "Four-step cleaned migration datasets",
              "Accounts-to-instances mapping",
              "URL / brand entitlement records"
            ]
          },
          {
            "label": "Analytics",
            "items": [
              "Cohort analysis (low-code BI)",
              "Pivot tables & stair-step contract views",
              "Account & deployment health scores"
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Why clean the data before touching pricing?",
        "a": "Pricing is only as defensible as the records it runs on. We reconcile contracts, domains, product instances, and entitlements into a single trusted spine first, so the price model and the impact analysis are calculated against what customers are actually contracted for and using, not against stale CRM exports."
      },
      {
        "q": "Why a separate good/better/best ladder per motion instead of one unified scheme?",
        "a": "The two commercial motions sold against different value and consumption patterns, so a single ladder would have masked real differences and reintroduced the inconsistency we were removing. We standardised the method, three tiers, documented inputs, a repeatable new-price calculation, while keeping a distinct ladder per motion, then mapped legacy agreements onto the tiers."
      },
      {
        "q": "Do we get something we can operate after you leave?",
        "a": "That is the point of the engagement. It is structured as a handover: cleaned migration datasets, the pricing-model and packaging workbooks, working CPQ configurator prototypes, and the cohort and health-score analytics are all delivered as artifacts built for your team to run and refresh independently."
      }
    ]
  },
  "llm-voice-ai-market-research": {
    "timeframe": "2025-2030",
    "dek": "An applied-AI market-intelligence engagement sizing LLM and Voice-AI demand across Education, Legal, Defense, and Agriculture for India, APAC, and the Global South, 2025-2030.",
    "heroStat": {
      "value": "~42.8%",
      "label": "Top vertical CAGR (Education) inside a 4-vertical comparative LLM/Voice-AI lattice sized across India, APAC, and the Global South for 2025-2030"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The mandate",
        "body": "A consulting team was engaged to build a defensible, decision-grade view of where Large Language Model (LLM) and Voice-AI demand is forming, not at the headline \"AI market\" level, but vertical-by-vertical and region-by-region. The brief was deliberately narrow on technology (text and voice LLM applications) and deliberately broad on geography, with a mandate to look past the well-covered developed markets toward <strong>India, the wider Asia-Pacific (APAC), and the Global South</strong> (developing economies across Asia, Africa, and Latin America).\n\nThe core question was an investment-grade one: across four target verticals, <strong>Education, Legal, Defense, and Agriculture</strong>, where is the money today, how fast is each pocket compounding to 2030, and which region/vertical intersections offer the steepest, least-contested growth? The deliverable had to be sourced, comparable, and honest about where the numbers were firm versus inferred."
      },
      {
        "kind": "flow",
        "title": "How the engagement ran",
        "caption": "A research pipeline from scoping to a board-ready outlook.",
        "steps": [
          {
            "label": "Scope the lattice",
            "sub": "4 verticals x 3+ geographies, plus a standalone Voice-AI cut"
          },
          {
            "label": "Source & triangulate",
            "sub": "Multiple syndicated research houses per cell; reconcile conflicting definitions"
          },
          {
            "label": "Normalize to a base",
            "sub": "Restate every figure to a 2025 base year and a 2030 projection"
          },
          {
            "label": "Infer the gaps",
            "sub": "Derive missing cells from CAGR + regional share, flagged as estimates"
          },
          {
            "label": "Consolidate",
            "sub": "One comparative master table + per-vertical fact sheets"
          },
          {
            "label": "Synthesize outlook",
            "sub": "Rank the hot intersections; write the 2025-2030 narrative"
          }
        ]
      },
      {
        "kind": "metrics",
        "title": "Scope of the build, in numbers",
        "items": [
          {
            "value": "4",
            "label": "Core verticals sized end-to-end (Education, Legal, Defense, Agriculture)"
          },
          {
            "value": "3+",
            "label": "Geographies per vertical (India, APAC, Global South / global)"
          },
          {
            "value": "3",
            "label": "Voice-AI technology markets sized separately (speech-to-text / ASR, and text-to-speech)"
          },
          {
            "value": "2025-2030",
            "label": "Common base year and projection horizon across every cell"
          },
          {
            "value": "2",
            "label": "Adjacent \"hot\" sectors flagged beyond the core four"
          },
          {
            "value": "8+",
            "label": "Independent syndicated research houses triangulated across the lattice"
          }
        ]
      },
      {
        "kind": "compare",
        "title": "The consolidated comparative table (core verticals)",
        "caption": "Base-year value, 2030 projection, and CAGR by vertical and region, the spine of the deliverable. Figures are public market-research estimates from top-tier syndicated research houses; cells marked (inferred) are computed from a stated CAGR or regional revenue share, not primary data.",
        "head": [
          "Vertical",
          "Region",
          "Base value",
          "2030 projection",
          "CAGR"
        ],
        "rows": [
          [
            "Education",
            "Global",
            "$6.90B (2025)",
            "$41.01B",
            "~42.8%"
          ],
          [
            "Education",
            "APAC",
            "$712.6M (2022)",
            "~$9.76B (inferred)",
            "38.7%"
          ],
          [
            "Education",
            "India",
            "$140.7M (2022)",
            "$2.06B",
            "39.9%"
          ],
          [
            "Legal",
            "Global",
            "$1.45B (2024)",
            "$3.90B",
            "~17%"
          ],
          [
            "Legal",
            "APAC",
            "$308.6M (2024)",
            "$940.7M",
            "19.6%"
          ],
          [
            "Legal",
            "India",
            "$29.5M (2024)",
            "$106.3M",
            "23.0%"
          ],
          [
            "Defense",
            "Global",
            "$22.45B (2023)",
            "$43.02B",
            "9.8%"
          ],
          [
            "Defense",
            "APAC",
            "$5.68B (2024)",
            "$11.83B",
            "13.1%"
          ],
          [
            "Defense",
            "India",
            "$1.31B (2024)",
            "$2.75B",
            "13.2%"
          ],
          [
            "Agriculture",
            "Global",
            "$2.55B (2025)",
            "$7.05B",
            "22.55%"
          ],
          [
            "Agriculture",
            "APAC",
            "$218.18M sw. (2022, 61.2% share)",
            "~$1.94B (inferred)",
            "~23-27%"
          ],
          [
            "Agriculture",
            "India",
            "$55.17M (2024)",
            "$109.30M",
            "~12%"
          ]
        ],
        "highlight": 1
      },
      {
        "kind": "callouts",
        "title": "What the numbers said, vertical by vertical",
        "items": [
          {
            "title": "Education, the steepest curve",
            "body": "The fastest-compounding vertical by far, with a global base of <strong>~$6.9B (2025) projected to ~$41B by 2030 (~42.8% CAGR)</strong>. APAC and India both run in the high-30s%, lifted by multilingual AI tutors and national AI-in-education policy. Drag factors: infrastructure limits, teacher-training gaps, rural connectivity, and adoption inequality."
          },
          {
            "title": "Legal, small base, explosive growth",
            "body": "A modest global base (<strong>~$1.45B in 2024</strong>) growing at ~17% globally, but India is the breakout at <strong>~23% CAGR</strong> ($29.5M to $106.3M). E-courts, judgment translation, and contract automation drive it; data-privacy and accuracy concerns plus low SME adoption hold it back."
          },
          {
            "title": "Defense, largest pool, but LLMs are pre-revenue",
            "body": "As of mid-2024 there were <strong>no publicly known operational LLM deployments in defense</strong>, the language-AI TAM here is essentially pre-commercial, sitting inside a much larger broader-AI market. That broader market is the biggest of the four (<strong>~$22-24B global in 2023-24, doubling to ~$43B by 2030</strong>) but the slowest-growing (~10% global, ~13% in APAC and India). The generative-AI/LLM subset was just ~$0.7-0.9B globally."
          },
          {
            "title": "Agriculture, fastest-growing developing-market story",
            "body": "Global ~$2.55B (2025) to ~$7.05B (2030) at ~22.5%, with APAC outpacing at ~23-27%. India grows steadily (~12%) off a tiny base. The generative-AI subset is the nascent edge: ~$216M (2024) heading toward $2B+ by the mid-2030s."
          }
        ]
      },
      {
        "kind": "split",
        "title": "Two ways to read the same market",
        "before": {
          "label": "Largest today (absolute $)",
          "points": [
            "Defense dominates on raw spend, tens of billions globally",
            "Developed markets (esp. North America) hold the bulk of current revenue",
            "Education and Agriculture are still sub-$10B globally in 2025",
            "Legal is the smallest core vertical by absolute size"
          ]
        },
        "after": {
          "label": "Fastest tomorrow (CAGR)",
          "points": [
            "Education leads at ~40%+, a 5-7x expansion across emerging regions by 2030",
            "Agriculture and Legal compound in the low-20s%, led by India and APAC",
            "Defense grows slowest (~10-13%) despite the largest base",
            "Emerging regions consistently outpace the global average"
          ]
        }
      },
      {
        "kind": "stack",
        "title": "The Voice-AI cut: technology markets and regional sizing",
        "groups": [
          {
            "label": "Technology markets (global, 2024-25 base to 2030)",
            "items": [
              "Speech-to-text, ASR apps: ~$3.2B to $7.1B, ~14% CAGR",
              "Speech-to-text API (a separate vendor market definition overlapping ASR): ~$3.81B to $8.57B, ~14.4% CAGR",
              "Text-to-speech (TTS): ~$3.87B to $7.28B, ~12.89% CAGR"
            ]
          },
          {
            "label": "Regional Voice-AI outlook to 2030",
            "items": [
              "APAC, ~$16.6B by 2030, ~18-19% CAGR (fastest major region)",
              "India, ~$1.1-1.8B by 2030 (NASSCOM ~$1.82B) at ~20-26% CAGR, off a ~$0.5-0.6B 2025 base",
              "Global South, ~$27-28B by 2030, mid-teens % CAGR",
              "Middle East & Africa, ~$6.8B by 2030; Latin America ~$4.43B"
            ]
          },
          {
            "label": "Demand drivers identified",
            "items": [
              "Vernacular / multilingual voice assistants for low-literacy users",
              "Voice-based customer service and call-center automation (esp. banking)",
              "Voice translation and accessibility interfaces across diverse languages"
            ]
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "Adjacent sectors flagged for the pipeline",
        "items": [
          {
            "title": "Banking / Financial Services",
            "body": "Chatbots, retrieval-augmented copilots, KYC/fraud operations, and advisor assistants (with voice next), growing at <strong>~31.8% (2024-2030)</strong>, the hottest adjacent signal surfaced."
          },
          {
            "title": "Media & Entertainment (Localization / Voice)",
            "body": "AI voiceover, dubbing, voice cloning, and adaptive TTS, <strong>~29-30% CAGR (2024-2030)</strong>, a natural extension of the Voice-AI thesis into content."
          }
        ]
      },
      {
        "kind": "steps",
        "title": "Methodology and how rigor was preserved",
        "items": [
          {
            "title": "Triangulate, don't trust a single source",
            "body": "Each cell drew on multiple top-tier syndicated research houses. Where estimates diverged (e.g., AI-in-education at ~$2.2B vs. ~$6.9B for 2025), the spread was reported and attributed to differing scope definitions rather than averaged away."
          },
          {
            "title": "Normalize base years and horizons",
            "body": "Sources used 2022, 2023, 2024, and 2025 base years. Every figure was restated to a common 2025-base, 2030-projection frame so verticals and regions could be compared on like terms."
          },
          {
            "title": "Flag inferred cells explicitly",
            "body": "Where no direct number existed (e.g., APAC Education 2030, or APAC Agriculture total derived from a 61.2% software share), values were computed from the stated CAGR or regional share and labelled \"inferred\" or \"est.\", never presented as primary data."
          },
          {
            "title": "Separate broad AI from LLM-specific AI",
            "body": "In Defense especially, the analysis distinguished the large broader-AI market from the small, nascent generative-AI/LLM subset, so growth headlines weren't conflated with addressable LLM demand. The same discipline kept overlapping voice-market definitions (ASR vs. speech-to-text API) from being double-counted."
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The consolidated outlook",
        "body": "The synthesis produced a clear strategic read. <strong>Education is the growth engine</strong>, the steepest CAGR of any vertical and a 5-7x market expansion across India, APAC, Latin America, and the Middle East & Africa by 2030. <strong>Defense is the cash pool with a catch</strong>, the largest absolute market, but slow-growing and, for LLMs specifically, still pre-commercial, with no known operational deployments as of mid-2024. <strong>Legal and Agriculture are the emerging-market plays</strong>, where India and APAC consistently grow faster than the global average off small bases.\n\nThe cross-cutting theme: in every vertical, <strong>developing regions outpaced the global average</strong>, and the binding constraint was rarely demand, it was infrastructure, connectivity, literacy, and trust. The Voice-AI layer reinforced this, with multilingual and vernacular interfaces emerging as the wedge for the Global South. Banking and Media localization were flagged as the highest-momentum adjacencies for any subsequent phase of work."
      },
      {
        "kind": "note",
        "body": "All monetary figures, CAGRs, verticals, and regions cited here are drawn from public market-research estimates (multiple independent top-tier syndicated research houses) restated to a common 2025-2030 frame. Cells marked \"inferred\" or \"est.\" were computed from stated CAGRs or regional shares and are not primary data. Note that ASR and speech-to-text API are overlapping market definitions from different research houses rather than wholly distinct layers. Client, author, and vendor identities are withheld."
      }
    ],
    "faq": [
      {
        "q": "How do you size emerging-market AI demand when published data is thin or inconsistent?",
        "a": "We triangulate across multiple top-tier syndicated research houses per cell, normalize every figure to a common base year and projection horizon, and derive missing regional cells from stated CAGRs or regional revenue shares. Inferred values are always flagged distinctly from primary data, and where credible sources diverge we report the spread and explain the scope difference rather than averaging it into a false-precision number."
      },
      {
        "q": "Why separate Voice-AI and the generative-AI subset from the broader AI market?",
        "a": "Headline 'AI in [sector]' numbers often bundle established narrow-AI (computer vision, predictive analytics) with the much smaller, faster-growing LLM and voice layer. Conflating them overstates addressable demand for a language-AI strategy. We size the voice markets, speech-to-text (ASR) and text-to-speech, separately, treat overlapping vendor definitions like ASR and speech-to-text API as overlapping rather than additive, and isolate the generative-AI subset so the addressable market reflects what an LLM or voice product can actually capture. In Defense, that discipline surfaced the key finding: no known operational LLM deployments as of mid-2024."
      },
      {
        "q": "What does a deliverable like this contain?",
        "a": "A consolidated comparative master table (vertical x region x base value, 2030 projection, CAGR, drivers, constraints, sources), per-vertical fact sheets, a dedicated Voice-AI section covering technology markets and regional sizing, a flag list of adjacent high-growth sectors, and a synthesized 2025-2030 outlook ranking the most attractive region/vertical intersections, all fully sourced to named syndicated research houses."
      }
    ]
  },
  "qms-governance-dashboards": {
    "timeframe": "2023",
    "dek": "How a large global pharma replaced fragmented quality oversight with one repeatable governance board across every QMS module, a cross-module board, and a low-code dashboard built for audit-ready decisions.",
    "heroStat": {
      "value": "One board template",
      "label": "a single repeatable governance layout instantiated for every modernized-QMS module and for the cross-module board that rolls them up"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The setup",
        "body": "A large global pharmaceutical company ran a <strong>modernized quality-management system (mQMS)</strong> spanning many interdependent quality modules, deviation, CAPA, change control, complaints, audit, document and training management, and the regulated processes that connect them. Each module had its own owners, metrics, and review rhythm, but governance was fragmented. Module health was discussed in isolation, escalations surfaced unevenly, and there was no single, audit-ready view a leadership board could open in a meeting and trust.\n\nThe client engaged us to design and build a <strong>governance dashboard solution</strong> that would standardize how every module is reviewed, how issues escalate across modules, and how the whole system is governed by a cross-module board, delivered on a low-code platform the quality organization could maintain itself."
      },
      {
        "kind": "prose",
        "heading": "The work",
        "body": "We began with a <strong>Tool Requirement Document</strong> that defined the solution before any build: the module set, the structure of each governance board, the escalation flows between modules, the reporting and meeting outputs, and the backup and maintenance model. That requirements baseline did double duty, it drove the dashboard build and framed a parallel <strong>low-code platform capability assessment</strong>.\n\nFrom there we designed a single, repeatable board template and instantiated it for <strong>every mQMS module</strong>, plus one <strong>cross-module board</strong> that rolls the modules up. Each board is a working meeting surface: a chair opens it live, walks the agenda, captures status and actions inside the tool, and prints the result as the meeting-minutes record. Because every module uses the identical section layout, a reviewer who learns one board can run any of them."
      },
      {
        "kind": "stack",
        "title": "What each governance board contains",
        "groups": [
          {
            "label": "Module status",
            "items": [
              "Overall Module Health, Status, Description, Action, Due, prepared for each board meeting",
              "Annual Assessment of the module",
              "Meeting Maintenance, editable meeting cadence"
            ]
          },
          {
            "label": "Cross-module signal",
            "items": [
              "Escalated Items, escalations summarized and aggregated from every module",
              "Regulatory Changes affecting the module",
              "Action Items tied to regulatory information"
            ]
          },
          {
            "label": "Improvement & architecture",
            "items": [
              "Continuous Improvement / Feedback, audit nonconformances, verbal recommendations, lessons learned, audit recommendations, external partners, other modules, sites and affiliates",
              "Module Architecture, periodic review of processes, training, planned and proposed changes and backlog; module documents; new standard or network processes"
            ]
          }
        ]
      },
      {
        "kind": "flow",
        "title": "How an item moves through governance",
        "caption": "From a single-module signal to a cross-module decision and an audit-ready record.",
        "steps": [
          {
            "label": "Capture in module board",
            "sub": "Health, nonconformance, feedback or regulatory change logged on the owning module's board"
          },
          {
            "label": "Escalate",
            "sub": "Significant items flagged into Escalated Items and summarized for visibility"
          },
          {
            "label": "Aggregate cross-module",
            "sub": "Cross-module board consolidates escalations and regulatory changes across all modules"
          },
          {
            "label": "Decide & assign",
            "sub": "Board sets status, owner, action and due date in the live dashboard"
          },
          {
            "label": "Record",
            "sub": "Board printed as the meeting-minutes record; backups requested for folders and dashboards"
          }
        ]
      },
      {
        "kind": "steps",
        "title": "The training guides, making it run without us",
        "items": [
          {
            "title": "mQMS Governance Dashboard training guide",
            "body": "A navigation guide covering the full meeting flow, instructions, cover, agenda, meeting cadence, overall assessment, regulatory changes, continuous improvement and feedback, module architecture, additional discussion topics, additional action items, printing for the minutes record, and requesting folder and dashboard backups."
          },
          {
            "title": "Module-by-module coverage",
            "body": "The guide walks through the governance board for each mQMS module and the cross-module board, explaining every component and section so any module owner can run their board unaided."
          },
          {
            "title": "Backup & maintenance discipline",
            "body": "Explicit procedures for requesting backups of both folders and dashboards, so the governance record stays recoverable and audit-defensible."
          }
        ]
      },
      {
        "kind": "prose",
        "heading": "The platform capability assessment",
        "body": "The dashboard solution was delivered on a <strong>low-code BI and collaboration platform</strong> the quality team could own and edit, boards, cadence, and sections are configurable without engineering. In parallel, and against the same requirements baseline, we ran a <strong>low-code platform capability assessment</strong>: we evaluated a separate <strong>enterprise low-code application platform</strong> for the heavier, workflow-driven capabilities the QMS roadmap might later require. The result gave the client an evidence-based view of what each tool class can and cannot do before committing further investment."
      },
      {
        "kind": "split",
        "title": "Before and after",
        "before": {
          "label": "Fragmented oversight",
          "points": [
            "Each module reviewed in isolation, on its own format",
            "Escalations surfaced unevenly, with no aggregated view",
            "No single source for board meetings or minutes",
            "Governance dependent on tribal knowledge"
          ]
        },
        "after": {
          "label": "Standardized governance",
          "points": [
            "One repeatable board template across every module",
            "Cross-module board aggregates escalations and regulatory change",
            "Live dashboards double as the printed minutes record",
            "Module-by-module training plus backup procedures make it self-sustaining"
          ]
        }
      },
      {
        "kind": "callouts",
        "title": "Deliverables",
        "items": [
          {
            "title": "Governance dashboard solution",
            "body": "Module-wise governance boards for every mQMS module plus a cross-module board, on a low-code platform, each carrying the full section layout from module health to architecture."
          },
          {
            "title": "Tool Requirement Document",
            "body": "Requirements baseline covering modules, governance boards, escalation flows, reporting, and backup and maintenance, the document that drove both the build and the platform evaluation."
          },
          {
            "title": "Training guides",
            "body": "A navigation guide and a module-by-module guide covering every section, the live meeting flow, minutes printing, and backup requests."
          },
          {
            "title": "Low-code capability assessment",
            "body": "An evaluation of an enterprise low-code application platform against the requirements, informing future QMS tooling decisions."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "How do you keep module-level reviews and enterprise-wide oversight in sync?",
        "a": "We use a single repeatable board template instantiated per module, then a cross-module board that aggregates the signals every module flags, chiefly escalated items and regulatory changes. Because the layout is identical everywhere, a local module review and the enterprise board read the same way, and an item escalated in one module surfaces consistently on the cross-module board."
      },
      {
        "q": "Will our quality team be able to run and maintain this without ongoing consulting support?",
        "a": "That is the design intent. The solution is built on a low-code platform your team can configure, and we deliver both a navigation training guide and a module-by-module guide that walks through every section, the live meeting flow, printing the minutes record, and requesting folder and dashboard backups. Cadence and sections are editable without engineering."
      },
      {
        "q": "How do you make the governance record audit-ready?",
        "a": "Every board is a live working surface during the meeting, then printed as the meeting-minutes record, so decisions, owners, actions and due dates are captured in one place. Defined backup procedures for folders and dashboards keep that record recoverable and defensible under audit."
      }
    ]
  },
  "pricing-trade-analytics-bi": {
    "timeframe": "Multi-project engagement",
    "dek": "How a CPG pricing and trade-analytics team got a multi-project BI solution, a documented data model, dashboards, and a project-by-project manual for self-serve upkeep.",
    "heroStat": {
      "value": "Multi-project",
      "label": "BI solution handed over with a project-by-project training manual so the client could maintain and extend every dashboard in-house"
    },
    "blocks": [
      {
        "kind": "prose",
        "heading": "The engagement",
        "body": "A consumer-packaged-goods (CPG) team responsible for <strong>pricing and trade analytics</strong> needed a governed, repeatable analytics environment built on a <strong>low-code BI platform</strong>. The work spanned several distinct analytical projects, each modeled and surfaced through filterable dashboards.\n\nThe brief was twofold. First, build a <strong>multi-project business-intelligence solution</strong>: connect the raw data, model it, and present it through dashboards with filters and charts. Second, and weighted equally, hand the solution over in a state the client's own team could <strong>maintain and extend without the consultant</strong>, including loading each new year of data and adding new projects."
      },
      {
        "kind": "prose",
        "heading": "A three-layer pattern, applied project by project",
        "body": "The technical spine of the solution is a reusable three-layer architecture rather than a one-off build. At its core is the design decision that pays off on every refresh: the working <strong>sales table is a dynamic combination of the raw yearly files</strong>, assembled in the platform's query/ETL layer. Because the combination is dynamic, adding a new year of data is <strong>additive</strong>, a drop-in refresh, provided the new file matches the existing structure, rather than a manual rebuild of the logic.\n\nThat combined sales table carries the calculations and derived columns reused across every dashboard in the project, so the analytical logic lives in one place. The same pattern was applied across the multiple projects in the solution, giving the client one consistent shape to learn once and reuse."
      },
      {
        "kind": "flow",
        "title": "How each project was built",
        "caption": "A repeatable pattern, from raw files to a governed dashboard.",
        "steps": [
          {
            "label": "Ingest raw sources",
            "sub": "Yearly raw data files plus mapping and reference files connected into the BI platform"
          },
          {
            "label": "Transform in the query layer",
            "sub": "Cleaned and combined via the platform's query/ETL editor"
          },
          {
            "label": "Combine the sales table",
            "sub": "Raw yearly files dynamically combined into one working sales table"
          },
          {
            "label": "Build the model",
            "sub": "Sales, reference, and mapping tables related to one another"
          },
          {
            "label": "Layer calculations",
            "sub": "Calculated columns on the combined table, reused across dashboards"
          },
          {
            "label": "Surface dashboards",
            "sub": "Filters and charts on top of the model, opening on a cover and consolidated assumptions view"
          }
        ]
      },
      {
        "kind": "stack",
        "title": "What sits inside each project",
        "groups": [
          {
            "label": "Data layer",
            "items": [
              "Raw yearly data files (structure-matched)",
              "Dynamically combined sales table",
              "Sales reference file",
              "Mapping files, including a derived retail-price view"
            ]
          },
          {
            "label": "Model layer",
            "items": [
              "Defined relationships between the sales, reference, and mapping tables",
              "Calculations and derived columns reused across dashboards"
            ]
          },
          {
            "label": "Presentation layer",
            "items": [
              "Cover tab",
              "Consolidated Definitions and Assumptions tab",
              "Filtered, charted analysis dashboards"
            ]
          }
        ]
      },
      {
        "kind": "callouts",
        "title": "Design principles that made it maintainable",
        "items": [
          {
            "title": "Structure-matched inputs",
            "body": "New years of raw data match the existing file structure, so refreshing the model is a drop-in operation rather than a rebuild."
          },
          {
            "title": "One combined working table",
            "body": "A single dynamically combined sales table holds the shared calculations, so logic lives in one place instead of being re-derived per dashboard."
          },
          {
            "title": "Consolidated assumptions",
            "body": "A dedicated Definitions and Assumptions view holds every assumption in one place, so methodology stays transparent and auditable."
          },
          {
            "title": "One way to inspect the pipeline",
            "body": "All data is viewed and modified through the platform's query/ETL editor, giving the client a single consistent way to inspect and adjust the data."
          }
        ]
      },
      {
        "kind": "metrics",
        "title": "The solution by the numbers",
        "items": [
          {
            "value": "3 years",
            "label": "Raw yearly data files dynamically combined into the flagship project's working sales table"
          },
          {
            "value": "1 table",
            "label": "Single combined sales table carrying the calculations reused across that project's dashboards"
          },
          {
            "value": "1 view",
            "label": "Consolidated Definitions and Assumptions view per dashboard, after the cover tab"
          },
          {
            "value": "1 manual",
            "label": "Project-by-project training manual covering sources, model, filters, charts, and assumptions"
          }
        ]
      },
      {
        "kind": "steps",
        "title": "What was delivered",
        "items": [
          {
            "title": "The working BI files",
            "body": "A delivered, versioned solution file per project plus the accompanying data-file packages, so the client owns and operates the running solution outright."
          },
          {
            "title": "A documented data model",
            "body": "For each project: the data sources and mapping files, a data-model overview with the relationships between tables, the dashboard filters, the charts, and all assumptions."
          },
          {
            "title": "A project-by-project training manual",
            "body": "A comprehensive manual walking through every project end to end, so the client can load new data, adjust assumptions, and extend the dashboards without ongoing dependency on the consultant."
          }
        ]
      },
      {
        "kind": "note",
        "body": "This case study is anonymized. The client, sector specifics, project names, file names, and the BI platform have been generalized; no confidential figures or identifiers are disclosed."
      }
    ],
    "faq": [
      {
        "q": "Can our team maintain the dashboards after handover, or will we be dependent on a consultant?",
        "a": "Self-serve maintenance is a primary design goal. The solution ships with a project-by-project training manual covering data sources, the data model and table relationships, dashboard filters, charts, and all assumptions. Because the sales table is a dynamic combination of the yearly files, loading a new year is a drop-in refresh as long as the new data matches the existing structure, and the manual documents how to extend or add dashboards."
      },
      {
        "q": "How do you keep assumptions and definitions transparent across many projects?",
        "a": "Every dashboard follows a consistent spine: a cover view, then a single consolidated Definitions and Assumptions view. Methodology and assumptions live in one place rather than being scattered across individual charts, which keeps the analysis auditable and easy to revisit."
      },
      {
        "q": "What do we actually receive at the end of the engagement?",
        "a": "The running BI solution files, a versioned package per project, plus the underlying data-file packages, a documented data model for each project, and the comprehensive project-by-project training manual. You own and can operate the full solution in-house."
      }
    ]
  }
};
