import type { Doc } from './content';

/**
 * Insight articles — tutorials, comparisons, and pillar guides, at /blog/<slug>.
 * Each links UP to a service/case study and SIDEWAYS to siblings (topic-cluster
 * model). Facts on time-sensitive topics (SES, FTC) were web-verified.
 */
export const posts: Doc[] = [
  /* ───────────── AWS SES tenant-level suppression (P5, first-mover) ───────────── */
  {
    slug: 'aws-ses-tenant-level-suppression-lists-guide',
    collection: 'blog',
    type: 'tutorial',
    schemaType: 'HowTo',
    title: 'AWS SES tenant-level suppression lists: what they are and how to use them',
    crumb: 'SES tenant-level suppression',
    seoTitle: 'AWS SES Tenant-Level Suppression Lists — Guide',
    description:
      'Amazon SES added per-tenant suppression lists in June 2026. Here is how account, configuration-set, and tenant-level suppression fit together — and when to use each.',
    keywords:
      'AWS SES tenant-level suppression list, SES suppression list, PutTenantSuppressionAttributes, SES account-level vs tenant suppression, SES multi-tenant deliverability',
    eyebrow: 'Deliverability · AWS SES',
    dek: 'In June 2026 Amazon SES added tenant-level suppression lists — a separate suppressed-address list per tenant, instead of one shared account-wide list. If you send for multiple brands or clients on one SES account, this is the isolation you have been missing.',
    tags: ['AWS SES', 'Deliverability', 'Tutorial'],
    datePublished: '2026-06-13',
    dateModified: '2026-06-13',
    author: 'Deven Rathod',
    blocks: [
      {
        kind: 'prose',
        heading: 'The three levels, in plain terms',
        body: 'SES suppression stops you from re-emailing addresses that already bounced or complained. Until recently it lived at two levels; now there are three, and they nest.',
      },
      {
        kind: 'flow',
        title: 'How suppression nests',
        steps: [
          { label: 'Account-level', sub: 'One list for the whole account, per Region' },
          { label: 'Configuration-set', sub: 'Overrides which reasons add to the list' },
          { label: 'Tenant-level', sub: 'A separate list per tenant — full isolation' },
        ],
        caption: 'By default every tenant uses the account-level list. Enable tenant-level suppression and SES keeps a separate list for that tenant instead.',
      },
      {
        kind: 'compare',
        title: 'When to use which',
        head: ['Level', 'Scope', 'Best for'],
        rows: [
          ['Account-level', 'Whole account / Region', 'Single brand, one sending reputation'],
          ['Configuration-set', 'Per config set', 'Tuning which bounce/complaint reasons suppress'],
          ['Tenant-level', 'Per tenant', 'Agencies / SaaS sending for many clients'],
        ],
        highlight: 2,
      },
      {
        kind: 'steps',
        title: 'Turning on tenant-level suppression',
        items: [
          { title: 'Confirm you use SES multi-tenancy', body: 'Tenant-level suppression applies to SES tenants. If you send for multiple clients on one account, you likely want tenants anyway.' },
          { title: 'Enable it per tenant', body: 'Call the PutTenantSuppressionAttributes API operation to switch a tenant from the shared account list to its own isolated list.' },
          { title: 'Decide the reasons', body: 'Choose whether bounces, complaints, or both add addresses to that tenant\'s list — the same reason controls you already use at account level.' },
          { title: 'Wire your bounce/complaint loop', body: 'Keep SES → SNS → SQS feeding suppression so each tenant\'s list stays current automatically, without manual cleanup.' },
        ],
        caption: 'Result: one client\'s hard bounce never silences a perfectly good address for another client on the same account.',
      },
      {
        kind: 'callouts',
        title: 'Why it matters',
        items: [
          { title: 'No cross-client bleed', body: 'A bounce in tenant A no longer suppresses that address in tenant B. Reputation and lists stay scoped to each brand.' },
          { title: 'Cleaner reporting', body: 'Per-tenant suppression makes per-client deliverability legible — you can show each client their own list health.' },
          { title: 'Same hygiene, finer grain', body: 'It is the suppression you already trust, just isolated. The bounce/complaint automation pattern doesn\'t change.' },
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need tenant-level suppression if I send for one brand?',
        a: 'No. Account-level suppression is enough for a single sender. Tenant-level pays off when one SES account sends for multiple brands or clients that should not share a suppressed-address list.',
      },
      {
        q: 'Does enabling it move my existing suppressed addresses?',
        a: 'Enabling tenant-level suppression gives that tenant its own list going forward; plan a backfill if you need existing account-level entries reflected per tenant. Test on one tenant first.',
      },
      {
        q: 'How is this different from configuration-set suppression?',
        a: 'Configuration-set suppression changes which reasons add to the account list — it is not a separate list. Tenant-level suppression is a genuinely separate list scoped to one tenant.',
      },
    ],
    related: [
      { href: '/work/email-engine-ai-cold-email-aws-ses', label: 'How we built an owned AWS SES cold-email system', eyebrow: 'CASE STUDY' },
    ],
    cta: {
      title: 'Sending for multiple clients on SES?',
      sub: 'We build owned email infrastructure with per-tenant deliverability hygiene baked in. Let\'s scope yours.',
    },
  },

  /* ───────────── FTC disclosure for AI UGC (P5, lead magnet) ───────────── */
  {
    slug: 'ftc-disclosure-ai-ugc-ads',
    collection: 'blog',
    type: 'guide',
    schemaType: 'Article',
    title: 'FTC disclosure for AI UGC ads: the 2026 double-disclosure checklist',
    crumb: 'FTC disclosure for AI UGC',
    seoTitle: 'FTC Disclosure for AI UGC Ads — 2026 Checklist',
    description:
      'Running AI-generated UGC ads in 2026? The FTC now expects two disclosures — commercial relationship and AI involvement. Here is the practical checklist and placement rules.',
    keywords:
      'FTC disclosure AI UGC ads, AI generated content disclosure rules 2026, FTC AI endorsement, disclose AI ad video, AI UGC compliance',
    eyebrow: 'AI Creatives · Compliance',
    dek: 'AI UGC ads work — but in 2026 the FTC expects you to label them twice: once for the commercial relationship, once for the AI. One tag does not cover both. Here is a practical, plain-English checklist so your AI ads stay compliant.',
    tags: ['AI UGC', 'FTC', 'Compliance'],
    datePublished: '2026-06-13',
    dateModified: '2026-06-13',
    author: 'Deven Rathod',
    blocks: [
      {
        kind: 'note',
        body: '<strong>Not legal advice.</strong> This is a practical summary to help you brief creators and agencies. For anything binding, check the FTC\'s current endorsement guidance and your own counsel.',
      },
      {
        kind: 'prose',
        heading: 'The core idea: two labels, not one',
        body: 'The FTC treats these as separate obligations. The fact that something is an ad, and the fact that it was made with AI, are two different disclosures — and one never substitutes for the other.',
      },
      {
        kind: 'compare',
        title: 'What each label does (and doesn\'t) cover',
        head: ['Label', 'Covers', 'Does NOT cover'],
        rows: [
          ['#ad / “Sponsored”', 'The commercial relationship', 'The AI involvement'],
          ['“AI-generated”', 'The AI involvement', 'The commercial relationship'],
          ['Both, up front', 'Both obligations', '—'],
        ],
        highlight: 1,
      },
      {
        kind: 'steps',
        title: 'The placement rules',
        items: [
          { title: 'Video: first 3–5 seconds', body: 'Put both disclosures on-screen as text in the opening seconds — not buried at the end or in caption overflow.' },
          { title: 'Static images: visible without a click', body: 'Disclosures must be readable without expanding or tapping “more”.' },
          { title: 'Before engagement, not after', body: 'The label belongs in the first line of the post or the opening of the video — where a viewer sees it before they engage.' },
          { title: 'AI personas = endorsers + AI', body: 'An AI spokesperson describing a product needs the same disclosure a paid human endorser would, plus a clear note that the “person” is AI-generated.' },
        ],
      },
      {
        kind: 'callouts',
        title: 'Why it\'s worth getting right in 2026',
        items: [
          { title: 'There\'s an enforcement unit now', body: 'The FTC stood up a dedicated AI enforcement effort in January 2026 — this is being watched, not ignored.' },
          { title: 'Penalties scale per post', body: 'Disclosure violations carry steep per-violation penalties, so a large campaign of unlabeled AI posts is a real financial risk.' },
          { title: 'Synthetic testimonials count', body: 'AI-written reviews and composite testimonials that blend real feedback into a synthetic narrative fall squarely in scope.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'A copy-paste starting point',
        body: 'A compliant opener can be as simple as “Ad · AI-generated” on-screen in the first seconds, plus a first-line caption that names the brand relationship and the AI. Keep it legible, keep it early, and keep both parts.',
      },
    ],
    faq: [
      {
        q: 'Does #ad alone make an AI UGC video compliant?',
        a: 'No. In 2026 the FTC treats the commercial-relationship disclosure and the AI-involvement disclosure as separate. #ad covers the first but not the second — you need both, placed up front.',
      },
      {
        q: 'Where exactly do the disclosures go?',
        a: 'For video, on-screen as text in the first 3–5 seconds. For static images, visible without expanding. The label should appear before a viewer engages, not in end-of-post or overflow text.',
      },
      {
        q: 'Do AI avatars need extra disclosure?',
        a: 'Yes. An AI persona endorsing a product needs the same disclosure as a paid human endorser, plus a clear statement that the person is AI-generated.',
      },
    ],
    related: [
      { href: '/work/ai-creatives', label: 'AI-generated ad creatives & UGC we\'ve produced', eyebrow: 'WORK' },
    ],
    cta: {
      title: 'Want AI UGC ads done right?',
      sub: 'We produce brand-aligned AI video and UGC — built to convert and built to disclose. Let\'s talk creative.',
    },
  },

  /* ───────────── WhatsApp + voice pillar (links to NudgeFlow) ───────────── */
  {
    slug: 'whatsapp-voice-lead-followup-automation-guide',
    collection: 'blog',
    type: 'pillar',
    schemaType: 'Article',
    title: 'WhatsApp + voice lead follow-up automation: the orchestration guide',
    crumb: 'WhatsApp + voice follow-up guide',
    seoTitle: 'WhatsApp + Voice Lead Follow-Up Automation Guide',
    description:
      'How to orchestrate lead follow-ups across WhatsApp and AI voice calls without spamming — policies, idempotency, human handoff, and the funnel metrics that matter.',
    keywords:
      'WhatsApp voice lead follow-up automation, multi-channel follow-up orchestration, AI voice agent WhatsApp, automated lead follow-up system',
    eyebrow: 'Playbook · Multi-channel',
    dek: 'A single channel rarely revives a cold lead. This is how to orchestrate WhatsApp messages and AI voice calls into one disciplined journey — one that respects contact rules and knows when to hand off to a human.',
    tags: ['WhatsApp', 'Voice agent', 'Orchestration'],
    datePublished: '2026-06-13',
    author: 'Deven Rathod',
    blocks: [
      {
        kind: 'prose',
        heading: 'The problem with single-channel follow-up',
        body: 'A WhatsApp nudge that goes unread is a dead end. A voice call at the wrong hour is a complaint. Real follow-up is an <strong>orchestration problem</strong>: the right channel, at the right time, that stops the moment a human should take over.',
      },
      {
        kind: 'flow',
        title: 'The orchestration loop',
        steps: [
          { label: 'Schedule', sub: 'Each follow-up is a durable job' },
          { label: 'Gate', sub: 'Windows, caps, cooldowns, timezone' },
          { label: 'Act', sub: 'WhatsApp or AI voice call' },
          { label: 'Sense', sub: 'Reply + call intent captured' },
          { label: 'Decide', sub: 'Continue, wait, or hand off' },
        ],
      },
      {
        kind: 'compare',
        title: 'WhatsApp vs AI voice — when each wins',
        head: ['Signal', 'WhatsApp', 'AI voice call'],
        rows: [
          ['Low-friction nudge', 'Best', 'Overkill'],
          ['Time-sensitive / high intent', 'Good', 'Best'],
          ['Needs a real conversation', 'Limited', 'Best (then hand off)'],
          ['Cost per touch', 'Lower', 'Higher'],
        ],
        highlight: 1,
      },
      {
        kind: 'callouts',
        title: 'The four things that keep it safe',
        items: [
          { title: 'Idempotent jobs', body: 'Every action de-duplicates, so retries and restarts never double-contact a lead.' },
          { title: 'Policy windows', body: 'Contact hours, attempt caps, and cooldowns are configuration — out-of-window actions wait, they don\'t force-send.' },
          { title: 'Human handoff', body: 'Any conversation can pause the agent and route to a person. Handoff is a first-class state, not an afterthought.' },
          { title: 'Funnel visibility', body: 'Track reached → replied → resumed → progressed → converted so you optimise touches instead of guessing.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'See it in production',
        body: 'We built exactly this for ClickPe (YC S23) — NudgeFlow turns one dropped lead into a single, policy-aware journey across WhatsApp and AI voice. The case study walks through the lifecycle and the metrics ops watches daily.',
      },
    ],
    faq: [
      {
        q: 'How do you avoid spamming leads across two channels?',
        a: 'One orchestration layer owns all touches, so caps and cooldowns apply across channels — not per channel. Out-of-window actions are held and retried inside the contact window.',
      },
      {
        q: 'When should a bot hand off to a human?',
        a: 'The moment a conversation needs judgment — a complex objection, a complaint, or an explicit ask for a person. Good systems make handoff a monitored, first-class state.',
      },
    ],
    related: [
      { href: '/work/clickpe-nudgeflow-whatsapp-voice-ai-agent', label: 'NudgeFlow: WhatsApp + voice lead agent for ClickPe', eyebrow: 'CASE STUDY' },
      { href: '/work/scaleup-zoho-crm-follow-up-agent', label: 'AI follow-up agent for Zoho CRM', eyebrow: 'CASE STUDY' },
    ],
    cta: {
      title: 'Want follow-ups that resume on their own?',
      sub: 'We build multi-channel orchestration around your funnel — WhatsApp, voice, and a human in the loop. Let\'s scope it.',
    },
  },

  /* ───────────── Distributor PDF→Excel pillar (links to case study) ───────────── */
  {
    slug: 'convert-distributor-price-list-pdf-to-excel',
    collection: 'blog',
    type: 'pillar',
    schemaType: 'Article',
    title: 'Convert a distributor price list PDF to Excel — automatically, every time',
    crumb: 'Price list PDF → Excel',
    seoTitle: 'Convert Distributor Price List PDF to Excel (Automated)',
    description:
      'Stop retyping supplier price lists. Here is how an AI extraction pipeline turns messy distributor PDFs into a clean, matched Excel catalog — and where to put a human check.',
    keywords:
      'convert distributor price list PDF to Excel, supplier price list automation, AI price list extraction, PDF to spreadsheet catalog',
    eyebrow: 'Playbook · Document AI',
    dek: 'Supplier price lists arrive as PDFs in a hundred different layouts, and someone retypes them by hand. There is a better pipeline: read the PDF with AI, structure every line, match it to your catalog, and export clean Excel — repeatably.',
    tags: ['Document AI', 'Catalog ops', 'Extraction'],
    datePublished: '2026-06-13',
    author: 'Deven Rathod',
    blocks: [
      {
        kind: 'prose',
        heading: 'Why “just use a PDF converter” fails',
        body: 'Generic PDF-to-Excel tools dump raw text. Distributor price lists need <strong>structure</strong> — SKU, description, price, unit — pulled correctly across wildly different supplier layouts, then matched to what you already stock. That is an extraction problem, not a conversion problem.',
      },
      {
        kind: 'flow',
        title: 'The pipeline that actually works',
        steps: [
          { label: 'Upload', sub: 'Supplier PDF(s) in' },
          { label: 'Pre-check', sub: 'Scanned vs digital, page count' },
          { label: 'AI extract', sub: 'Read content, not a fixed template' },
          { label: 'Structure', sub: 'Rows → SKU / desc / price / unit' },
          { label: 'Match + export', sub: 'Align to catalog, output Excel' },
        ],
      },
      {
        kind: 'split',
        title: 'Manual vs automated',
        before: {
          label: 'By hand',
          points: ['Hours per supplier list', 'Typos priced into quotes', 'One-person bottleneck', 'Catalog lags suppliers'],
        },
        after: {
          label: 'AI pipeline',
          points: ['Minutes per list', 'Consistent structured output', 'Self-serve upload/download', 'Catalog stays current'],
        },
      },
      {
        kind: 'callouts',
        title: 'Where to keep a human',
        items: [
          { title: 'Spot-check new suppliers', body: 'The first run on an unfamiliar layout deserves a glance before it feeds quotes — after that, trust it.' },
          { title: 'Flag low-confidence rows', body: 'Surface anything the extractor is unsure about instead of silently guessing a price.' },
          { title: 'Keep an audit trail', body: 'Log what was extracted from which file, so a wrong price is traceable back to its source page.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'We built this for a distributor',
        body: 'Our distributor catalog pipeline turns 200-page supplier PDFs into a clean, matched Excel catalog in minutes. The case study shows the full flow and the stack behind it.',
      },
    ],
    faq: [
      {
        q: 'Can it read scanned price lists, not just digital PDFs?',
        a: 'Yes. A good pipeline detects scanned vs digital up front and uses AI extraction that reads content rather than relying on selectable text, so scans and varied layouts both work.',
      },
      {
        q: 'How accurate is AI extraction for pricing?',
        a: 'Structured and reviewable — far more consistent than manual entry. Keep a human spot-check on new supplier formats and flag low-confidence rows, and it is dependable enough to quote from.',
      },
    ],
    related: [
      { href: '/work/distributor-catalog-automation', label: 'Distributor catalog automation — the case study', eyebrow: 'CASE STUDY' },
    ],
    cta: {
      title: 'Drowning in supplier PDFs?',
      sub: 'Send a sample price list — we\'ll show you the clean catalog it becomes and what the pipeline costs.',
    },
  },

  /* ───────────── X DM safe-automation pillar (links to case study) ───────────── */
  {
    slug: 'automate-twitter-dms-without-getting-banned',
    collection: 'blog',
    type: 'pillar',
    schemaType: 'Article',
    title: 'How to automate X (Twitter) DMs without getting banned',
    crumb: 'Automate X DMs safely',
    seoTitle: 'Automate Twitter (X) DMs Without Getting Banned — Guide',
    description:
      'The safe-outreach playbook for automated X/Twitter DMs: human-paced sends, office hours, daily caps, reply detection, and the patterns that trip detection.',
    keywords:
      'how to automate twitter dms without getting banned, safe X DM automation, cold DM outreach, twitter dm automation limits',
    eyebrow: 'Playbook · Outreach',
    dek: 'Automated DM outreach on X works — right up until it looks like a bot and the account gets locked. The difference between scale and a ban is behavior. Here is the playbook that keeps automation under the radar.',
    tags: ['X / Twitter', 'Outreach', 'Anti-ban'],
    datePublished: '2026-06-13',
    author: 'Deven Rathod',
    blocks: [
      {
        kind: 'prose',
        heading: 'Bans are a behavior problem, not a volume problem',
        body: 'X doesn\'t publish DM limits, but the accounts that get locked share a profile: parallel sends, machine-perfect timing, 24/7 activity, and messaging people who already replied. Fix the behavior and you can run real outreach safely.',
      },
      {
        kind: 'callouts',
        title: 'The non-negotiables',
        items: [
          { title: 'One send at a time', body: 'No parallel sends, ever. Single-threaded sending is the strongest signal that a human is at the keyboard.' },
          { title: 'Randomized human timing', body: 'Vary the wait before opening a DM, before typing, and between messages — and type character-by-character, not instantly.' },
          { title: 'Office hours only', body: 'Send during normal waking hours in the account\'s timezone. 3 a.m. activity is a giveaway.' },
          { title: 'Stop on reply', body: 'Check the conversation before every follow-up; if they replied (or you replied manually), cancel the rest of the sequence.' },
        ],
      },
      {
        kind: 'compare',
        title: 'Safe daily limits by account age',
        head: ['Account age', 'Safe daily DMs'],
        rows: [
          ['Under 3 months', '5–10'],
          ['3–12 months', '15–20'],
          ['1+ years', '20–30'],
        ],
        caption: 'Treat these as ceilings, not targets. Warm up new accounts slowly before pushing volume.',
      },
      {
        kind: 'split',
        title: 'Bot behavior vs human behavior',
        before: {
          label: 'Looks like a bot',
          points: ['Parallel sends', 'Fixed intervals', 'Sends overnight', 'Ignores replies'],
        },
        after: {
          label: 'Looks like a person',
          points: ['One at a time', 'Randomized timing', 'Office hours', 'Stops on reply'],
        },
      },
      {
        kind: 'prose',
        heading: 'We built an engine on these rules',
        body: 'Our X DM outreach engine bakes every rule above into the system — single-threaded sends, randomized human timing, office-hours windows, and reply-aware sequencing. The case study shows how it stays unbanned at scale.',
      },
    ],
    faq: [
      {
        q: 'How many DMs a day is safe on X?',
        a: 'It depends on account age: roughly 5–10/day under three months, 15–20 up to a year, and 20–30 for established accounts. Treat these as ceilings and warm new accounts up gradually.',
      },
      {
        q: 'What\'s the single biggest thing that gets accounts banned?',
        a: 'Looking automated: parallel sends, identical timing, and 24/7 activity. Sending one message at a time on a human-like schedule removes the clearest red flags.',
      },
    ],
    related: [
      { href: '/work/x-dm-outreach-agent', label: 'Safe, human-paced X DM outreach engine — case study', eyebrow: 'CASE STUDY' },
      { href: '/work/email-engine-ai-cold-email-aws-ses', label: 'AI cold-email system on AWS SES', eyebrow: 'CASE STUDY' },
    ],
    cta: {
      title: 'Want managed outreach that doesn\'t get you banned?',
      sub: 'We run human-paced DM and email systems around your ICP and sequencing. Let\'s scope a campaign.',
    },
  },
];
