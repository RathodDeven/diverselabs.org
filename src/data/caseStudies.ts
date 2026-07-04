import type { Doc } from './content';

/**
 * Case studies — real client + in-house builds, rendered at /work/<slug>.
 * Client names that are already public (ScaleUp, ClickPe YC S23) are kept;
 * internal numbers are framed qualitatively, never fabricated.
 */
export const caseStudies: Doc[] = [
  /* ───────────────────────── ScaleUp · Zoho CRM ───────────────────────── */
  {
    slug: 'scaleup-zoho-crm-follow-up-agent',
    collection: 'work',
    type: 'case-study',
    schemaType: 'Article',
    title: 'How we automated Zoho CRM follow-ups for ScaleUp — without replacing their stack',
    crumb: 'Zoho CRM follow-up agent',
    seoTitle: 'AI Follow-Up Agent for Zoho CRM — ScaleUp Case Study',
    description:
      'A human-in-the-loop AI agent that drafts context-aware email and LinkedIn follow-ups from Zoho CRM — researched, reviewed, and sent on approval. No rip-and-replace.',
    keywords:
      'AI follow-up email agent for Zoho CRM, automate follow-up emails Zoho CRM with AI, human-in-the-loop CRM follow-up, AI sales follow-up agent',
    eyebrow: 'ScaleUp · Zoho CRM',
    dek: 'ScaleUp runs follow-ups out of Zoho CRM. We layered an AI agent on top that pulls full contact context, researches the company, and drafts the email or LinkedIn message — then waits for a human to approve before anything sends.',
    ogImage: '/companies/scaleup.jpeg',
    tags: ['AI agent', 'Zoho CRM', 'Human-in-the-loop'],
    client: 'ScaleUp',
    clientLogo: '/companies/scaleup.jpeg',
    heroStat: { value: '100%', label: 'follow-ups reviewed before they send' },
    datePublished: '2026-06-13',
    author: 'Deven Rathod',
    blocks: [
      {
        kind: 'prose',
        heading: 'The brief',
        body: 'ScaleUp didn\'t want a new CRM or a black-box autoresponder. They wanted their reps to keep control of Zoho while losing the slow part — writing a personalised, well-researched follow-up for every contact. The constraint: <strong>nothing leaves without a human looking at it</strong>.',
      },
      {
        kind: 'flow',
        title: 'How the agent works',
        steps: [
          { label: 'Zoho trigger', sub: 'A cadence/workflow task fires a webhook' },
          { label: 'Fetch context', sub: 'Contact, account, notes, deal + email history' },
          { label: 'Research', sub: 'Company identity, recent news, public profile' },
          { label: 'Draft', sub: 'Email or LinkedIn copy, in ScaleUp\'s voice' },
          { label: 'Human approves', sub: 'Card in Google Chat — review, edit, send' },
          { label: 'Sync back', sub: 'Account/contact updated in Zoho' },
        ],
        caption: 'Built Cloudflare-native: a Worker takes the webhook, a queue does the slow research + drafting so Zoho gets an instant response.',
      },
      {
        kind: 'split',
        title: 'Why the drafts land',
        before: {
          label: 'Merge-tag template',
          points: ['Same body for everyone', 'No memory of the last touch', 'Generic “just checking in”', 'Reps still rewrite it'],
        },
        after: {
          label: 'Context-aware AI draft',
          points: ['Pulls real CRM + email history', 'Knows the company and recent news', 'Right channel: email or LinkedIn', 'Rep edits, not writes'],
        },
      },
      {
        kind: 'callouts',
        title: 'The decisions that made it safe',
        items: [
          { title: 'Drafted, not sent', body: 'The agent only ever prepares a draft. A teammate approves it from a Google Chat card with a one-click compose link.' },
          { title: 'No rip-and-replace', body: 'Zoho stays the source of truth. The agent reads and writes through the Zoho API — the team\'s workflow is untouched.' },
          { title: 'Email and LinkedIn', body: 'If a contact\'s email domain looks stale, the card flips to copy-ready LinkedIn content and explains why.' },
          { title: 'Idempotent by design', body: 'Each task is de-duplicated, so retries never double-send and cadence steps stay clean.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Stack',
        groups: [
          { label: 'Runtime', items: ['Cloudflare Workers', 'Cloudflare Queues', 'Cloudflare D1'] },
          { label: 'Integrations', items: ['Zoho CRM API', 'Google Chat', 'Gmail / Outlook compose'] },
          { label: 'Intelligence', items: ['LLM drafting', 'Company + news research', 'Public profile lookup'] },
        ],
      },
      {
        kind: 'quote',
        text: 'Deven quickly understood our Zoho CRM and follow-up workflow, then built a secure, practical automation that gives our team useful context without adding operational noise.',
        by: 'Marcos Buelvas',
        role: 'Global Operations Consulting · ScaleUp',
      },
    ],
    faq: [
      {
        q: 'Does this replace Zoho CRM?',
        a: 'No. Zoho stays your system of record. The agent reads context from Zoho and writes drafts/updates back through the API — your team keeps working exactly where they already do.',
      },
      {
        q: 'Can the AI send emails on its own?',
        a: 'Only if you want it to. ScaleUp runs it fully human-in-the-loop: the agent drafts, a person approves and sends. We also support hybrid and fully-automated modes per stage.',
      },
      {
        q: 'How is this different from Zoho Zia or a template autoresponder?',
        a: 'Zia and templates work from merge tags. This agent pulls real CRM history plus live company research and writes a specific message — closer to a junior rep than a mail-merge.',
      },
    ],
    related: [
      { href: '/work/clickpe-nudgeflow-whatsapp-voice-ai-agent', label: 'WhatsApp + voice lead agent for ClickPe (YC S23)', eyebrow: 'CASE STUDY' },
      { href: '/work/email-engine-ai-cold-email-aws-ses', label: 'AI cold-email system on AWS SES', eyebrow: 'CASE STUDY' },
    ],
    cta: {
      title: 'Run follow-ups out of a CRM?',
      sub: 'We\'ll map your cadence and show you exactly where an AI agent saves time — without changing your stack.',
    },
  },

  /* ─────────────────────── ClickPe · NudgeFlow ─────────────────────── */
  {
    slug: 'clickpe-nudgeflow-whatsapp-voice-ai-agent',
    collection: 'work',
    type: 'case-study',
    schemaType: 'Article',
    title: 'Inside NudgeFlow: a WhatsApp + voice AI lead agent for ClickPe (YC S23)',
    crumb: 'WhatsApp + voice lead agent',
    seoTitle: 'WhatsApp + Voice AI Lead Agent — NudgeFlow Case Study',
    description:
      'NudgeFlow orchestrates follow-ups across WhatsApp and AI voice calls — policy-driven, idempotent, with human handoff. Built for ClickPe (YC S23).',
    keywords:
      'WhatsApp voice lead follow-up automation, AI voice agent WhatsApp, multi-channel follow-up orchestration, automated lead follow-up system',
    eyebrow: 'ClickPe (YC S23) · NudgeFlow',
    dek: 'Leads go cold between channels. NudgeFlow is the orchestration layer we built so one dropped lead becomes a single, policy-aware journey across WhatsApp and AI voice calls — with a human able to step in at any point.',
    ogImage: '/work/nudgeflow.webp',
    tags: ['AI system', 'WhatsApp', 'Voice agent'],
    client: 'ClickPe · YC S23',
    clientLogo: '/companies/clickpe.jpeg',
    heroStat: { value: '3 channels', label: 'WhatsApp + AI voice in one journey' },
    datePublished: '2026-06-13',
    author: 'Deven Rathod',
    blocks: [
      {
        kind: 'prose',
        heading: 'The brief',
        body: 'High-intent leads stall when nobody follows up at the right moment, on the right channel. ClickPe needed follow-ups that resume on their own, respect contact rules, and hand off to a human the instant a conversation needs one.',
      },
      {
        kind: 'flow',
        title: 'The lead lifecycle',
        steps: [
          { label: 'Ingest', sub: 'Lead + status enters the system' },
          { label: 'Schedule', sub: 'Follow-ups become persistent jobs' },
          { label: 'Policy check', sub: 'Windows, caps, cooldowns, timezone' },
          { label: 'Engage', sub: 'WhatsApp message or AI voice call' },
          { label: 'Listen', sub: 'Replies + call intent tracked in memory' },
          { label: 'Handoff', sub: 'Pause the agent, route to a human' },
        ],
        caption: 'Every action is an idempotent job — retries and restarts never double-contact a lead.',
      },
      {
        kind: 'metrics',
        title: 'What ops watches every day',
        items: [
          { value: 'Reached', label: 'first touch delivered' },
          { value: 'Replied', label: 'lead responded' },
          { value: 'Resumed', label: 'journey re-engaged' },
          { value: 'Progressed', label: 'moved a stage' },
          { value: 'Converted', label: 'goal reached' },
        ],
      },
      {
        kind: 'callouts',
        title: 'What made it production-grade',
        items: [
          { title: 'Policy-driven', body: 'Contact windows, attempt limits, and cooldowns are config, not code. Sends that fall outside a lead\'s window are held, not dropped.' },
          { title: 'Compliance windows', body: 'Per-timezone send windows mean no 3 a.m. messages — ops monitors “outside-window” spikes as a health signal.' },
          { title: 'Human handoff', body: 'Any conversation can pause the agent and wait for a person — handoff sessions are a first-class thing the team monitors.' },
          { title: 'Call analytics', body: 'Each voice call leaves a snapshot — intent, disposition, summary — so the next touch is informed and the funnel is measurable.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Stack',
        groups: [
          { label: 'Orchestration', items: ['TypeScript workers', 'BullMQ', 'n8n entry points'] },
          { label: 'Channels', items: ['WhatsApp (Gupshup)', 'AI voice (Bolna)'] },
          { label: 'Data', items: ['PostgreSQL', 'Redis', 'Per-tenant config'] },
          { label: 'Ops', items: ['React dashboard', 'Batch outreach', 'CSV import/export'] },
        ],
      },
      {
        kind: 'prose',
        heading: 'The result',
        body: 'A dropped lead is no longer a dead end — it becomes a tracked journey that knows when to nudge on WhatsApp, when to place an AI voice call, when to wait, and when to get out of the way for a human. The whole funnel is visible, so the team optimises touches instead of guessing.',
      },
    ],
    faq: [
      {
        q: 'What channels does it cover?',
        a: 'WhatsApp messaging and AI voice calls today, orchestrated as one journey per lead. The architecture is channel-agnostic, so SMS or email can be added as additional adapters.',
      },
      {
        q: 'How does it avoid spamming leads?',
        a: 'Policies — contact windows, attempt caps, cooldowns, and per-timezone send hours — gate every action. Out-of-window actions are held and retried in-window, never force-sent.',
      },
      {
        q: 'Can a human take over a conversation?',
        a: 'Yes. Any conversation can trigger a handoff that pauses the agent and routes the lead to a person. Pending handoffs are a monitored part of daily operations.',
      },
    ],
    related: [
      { href: '/work/scaleup-zoho-crm-follow-up-agent', label: 'AI follow-up agent for ScaleUp\'s Zoho CRM', eyebrow: 'CASE STUDY' },
      { href: '/blog/whatsapp-voice-lead-followup-automation-guide', label: 'WhatsApp + voice follow-up: the orchestration guide', eyebrow: 'GUIDE' },
    ],
    cta: {
      title: 'Leads going cold between channels?',
      sub: 'We build the orchestration layer so follow-ups resume on their own — and a human steps in only when it matters.',
    },
  },

  /* ─────────────────── Distributor catalog automation ─────────────────── */
  {
    slug: 'distributor-catalog-automation',
    collection: 'work',
    type: 'case-study',
    schemaType: 'Article',
    title: 'From 200-page supplier PDFs to a live catalog: an automated price-list pipeline',
    crumb: 'Distributor catalog pipeline',
    seoTitle: 'Automate Distributor Catalog Data Entry — Case Study',
    description:
      'A distributor was retyping supplier price-list PDFs by hand. We built an AI pipeline that extracts, structures, and matches them into a clean catalog — in minutes, not days.',
    keywords:
      'automate distributor catalog data entry, convert distributor price list PDF to Excel, AI price list extraction, supplier price list automation',
    eyebrow: 'Distributor · Catalog ops',
    dek: 'Distributors live and die by their price lists — and most arrive as messy supplier PDFs that someone retypes by hand. We built a pipeline that reads those PDFs with AI, structures every line, and turns a stack of documents into a clean, matched catalog.',
    tags: ['Document AI', 'Extraction', 'Ops automation'],
    heroStat: { value: '200-page PDFs', label: 'to a structured catalog, automatically' },
    datePublished: '2026-06-13',
    author: 'Deven Rathod',
    blocks: [
      {
        kind: 'prose',
        heading: 'The brief',
        body: 'New supplier price lists landed constantly — as PDFs, in every layout imaginable. Staff retyped them into spreadsheets line by line: slow, expensive, and error-prone. The ask was simple: <strong>stop the manual data entry without losing accuracy</strong>.',
      },
      {
        kind: 'flow',
        title: 'The extraction pipeline',
        steps: [
          { label: 'Upload', sub: 'Drop in the supplier PDF(s)' },
          { label: 'Pre-check', sub: 'Detect scanned vs digital, page count' },
          { label: 'AI extract', sub: 'Gemini reads pages in parallel batches' },
          { label: 'Structure', sub: 'Rows → SKU, description, price, units' },
          { label: 'Match', sub: 'Align to the existing catalog' },
          { label: 'Export', sub: 'Clean Excel workbook out' },
        ],
        caption: 'Pages are extracted in concurrent batches, so a long catalog finishes in minutes rather than a day of typing.',
      },
      {
        kind: 'split',
        title: 'Before and after',
        before: {
          label: 'Manual data entry',
          points: ['Hours per supplier list', 'Typos priced into quotes', 'Bottlenecked on one person', 'Updates lag the market'],
        },
        after: {
          label: 'AI extraction pipeline',
          points: ['Minutes per list', 'Consistent structured output', 'Self-serve upload + download', 'Catalog stays current'],
        },
      },
      {
        kind: 'callouts',
        title: 'Built for real ops',
        items: [
          { title: 'Layout-agnostic', body: 'Different suppliers, different templates — the AI reads the content, not a fixed schema, so new formats don\'t need new code.' },
          { title: 'Credit-metered', body: 'Usage runs on a credit balance with an audit trail, so cost per job is transparent and controllable.' },
          { title: 'Privacy-minded', body: 'Uploaded PDFs and generated workbooks are processed and cleaned up — scratch files don\'t linger in storage.' },
          { title: 'Self-serve', body: 'A simple web app: upload, watch the job, download the workbook. No engineer in the loop for day-to-day runs.' },
        ],
      },
      {
        kind: 'stack',
        title: 'Stack',
        groups: [
          { label: 'Extraction', items: ['Google Gemini', 'Batched page processing', 'PDF parsing'] },
          { label: 'Backend', items: ['FastAPI', 'Neon Postgres', 'Background jobs'] },
          { label: 'Frontend', items: ['React + Vite', 'Upload/download flow', 'Credits + audit'] },
        ],
      },
      {
        kind: 'prose',
        heading: 'The result',
        body: 'The team stopped retyping price lists. Supplier PDFs now go in one side and a clean, matched catalog comes out the other — fast enough that pricing keeps pace with suppliers instead of trailing a week behind.',
      },
    ],
    faq: [
      {
        q: 'What kinds of PDFs can it handle?',
        a: 'Both digital and scanned supplier price lists, across varied layouts. Because the AI reads content rather than a fixed template, new supplier formats work without custom code.',
      },
      {
        q: 'Where does the data come out?',
        a: 'As a clean, structured Excel workbook matched against your existing catalog — ready to import or quote from.',
      },
      {
        q: 'Is it accurate enough to price from?',
        a: 'Extraction is structured and reviewable, and the pipeline is built so a person can spot-check output before it feeds quotes — far more consistent than line-by-line manual entry.',
      },
    ],
    related: [
      { href: '/blog/convert-distributor-price-list-pdf-to-excel', label: 'Convert a distributor price list PDF to Excel — automatically', eyebrow: 'GUIDE' },
      { href: '/work/scaleup-zoho-crm-follow-up-agent', label: 'AI follow-up agent for Zoho CRM', eyebrow: 'CASE STUDY' },
    ],
    cta: {
      title: 'Still retyping supplier PDFs?',
      sub: 'Send us a sample price list. We\'ll show you the structured catalog it becomes — and what the pipeline would cost you.',
    },
  },

  /* ───────────────────────── X-DM-Agent ───────────────────────── */
  {
    slug: 'x-dm-outreach-agent',
    collection: 'work',
    type: 'case-study',
    schemaType: 'Article',
    title: 'A safe, human-paced X (Twitter) DM outreach engine',
    crumb: 'X DM outreach engine',
    seoTitle: 'Automated X (Twitter) DM Outreach — Case Study',
    description:
      'An automated X/Twitter DM system built to stay unbanned: humanized timing, office hours, daily caps, reply detection, and A/B sequencing with a management dashboard.',
    keywords:
      'automate twitter dms without getting banned, X DM outreach automation, safe cold DM tool, twitter dm sequencing',
    eyebrow: 'In-house · Outreach',
    dek: 'Most DM automation gets accounts banned. We built the opposite: an outreach engine that behaves like a careful human — one message at a time, on a real schedule, that stops the moment someone replies.',
    tags: ['Outreach', 'Automation', 'Anti-ban'],
    heroStat: { value: '1 at a time', label: 'human-paced sends, built to stay unbanned' },
    datePublished: '2026-06-13',
    author: 'Deven Rathod',
    blocks: [
      {
        kind: 'prose',
        heading: 'The brief',
        body: 'Cold DM outreach on X works — until automation makes an account look like a bot and it gets locked. The goal was an engine that scales outreach while staying under X\'s radar, and that never keeps messaging someone who already answered.',
      },
      {
        kind: 'flow',
        title: 'How a campaign runs',
        steps: [
          { label: 'Import', sub: 'CSV with prefilled message per step' },
          { label: 'Queue', sub: 'One job at a time, human drip' },
          { label: 'Reply check', sub: 'Replied or hand-off? cancel the rest' },
          { label: 'Send', sub: 'Stealth browser types char-by-char' },
          { label: 'Schedule next', sub: 'Follow-up after a randomized delay' },
        ],
        caption: 'Messages are prefilled at import — the sender never calls an LLM mid-send, so timing stays natural.',
      },
      {
        kind: 'callouts',
        title: 'The anti-ban design',
        items: [
          { title: 'One job at a time', body: 'Worker concurrency is one. No parallel sends — the single strongest signal that a human, not a script, is at the keyboard.' },
          { title: 'Human-like timing', body: 'Randomized waits before opening a DM, before typing, and between messages — plus char-by-char typing speed, never fixed delays.' },
          { title: 'Office hours', body: 'Sends are restricted to normal waking hours in the account\'s timezone. No machine-like 24/7 activity.' },
          { title: 'Daily caps', body: 'Hard per-day limits scaled to account age, enforced with counters — exceed the cap and jobs wait for tomorrow.' },
        ],
      },
      {
        kind: 'split',
        title: 'Why it doesn\'t trip detection',
        before: {
          label: 'Typical DM blaster',
          points: ['Parallel sends', 'Fixed-interval messages', 'Sends at 3 a.m.', 'Keeps messaging after a reply'],
        },
        after: {
          label: 'This engine',
          points: ['Strictly one at a time', 'Randomized human timing', 'Office-hours only', 'Stops on reply or manual handoff'],
        },
      },
      {
        kind: 'stack',
        title: 'Stack',
        groups: [
          { label: 'Engine', items: ['Playwright stealth', 'BullMQ queue', 'Fresh context per action'] },
          { label: 'App', items: ['Hono API', 'Next.js dashboard', 'A/B + analytics'] },
          { label: 'Data', items: ['PostgreSQL (Prisma)', 'AES-256-GCM session storage', 'Redis caps'] },
        ],
      },
      {
        kind: 'prose',
        heading: 'The result',
        body: 'Outreach that runs like a diligent SDR, not a bot farm: prefilled sequences, reply-aware follow-ups, A/B comparison across strategies and audiences, and a dashboard to watch it all — without the account locks that kill most DM automation.',
      },
    ],
    faq: [
      {
        q: 'Will this get my X account banned?',
        a: 'It is engineered specifically to avoid that — one send at a time, randomized human timing, office-hours windows, and conservative daily caps scaled to account age. No automation is risk-free, but this mirrors human behavior closely.',
      },
      {
        q: 'Does it stop when someone replies?',
        a: 'Yes. Before every follow-up step it checks the conversation; if the contact replied — or you replied manually — the remaining steps are cancelled automatically.',
      },
      {
        q: 'How are messages written?',
        a: 'Every step\'s text is prefilled at import time from your CSV, so the sender never pauses to call an LLM mid-send. You control the copy and the sequencing.',
      },
    ],
    related: [
      { href: '/blog/automate-twitter-dms-without-getting-banned', label: 'How to automate X (Twitter) DMs without getting banned', eyebrow: 'GUIDE' },
      { href: '/work/email-engine-ai-cold-email-aws-ses', label: 'AI cold-email system on AWS SES', eyebrow: 'CASE STUDY' },
    ],
    cta: {
      title: 'Want outreach that doesn\'t get you banned?',
      sub: 'We build managed, human-paced DM and email systems around your ICP and sequencing. Let\'s scope it.',
    },
  },

  /* ───────────────────────── Email Engine ───────────────────────── */
  {
    slug: 'email-engine-ai-cold-email-aws-ses',
    collection: 'work',
    type: 'case-study',
    schemaType: 'Article',
    title: 'Email Engine: an AI cold-email system on AWS SES with deliverability built in',
    crumb: 'AI cold-email on AWS SES',
    seoTitle: 'AI Cold Email System on AWS SES — Case Study',
    description:
      'A cold-email system you own: AI personalizes copy, AWS SES sends one message per recipient, and suppression + bounce/complaint handling protect the sending domain.',
    keywords:
      'build cold email automation system AWS SES, AI cold email personalization, SES bounce complaint suppression, owned cold email infrastructure',
    eyebrow: 'In-house · Outbound',
    dek: 'Cold-email SaaS rents you someone else\'s infrastructure and rules. We built a system you own: AI writes the personalized copy, AWS SES does the sending, and deliverability hygiene is baked in from the first send.',
    tags: ['Cold email', 'AWS SES', 'Deliverability'],
    heroStat: { value: '1 send / recipient', label: 'with suppression + bounce handling built in' },
    datePublished: '2026-06-13',
    author: 'Deven Rathod',
    blocks: [
      {
        kind: 'prose',
        heading: 'The brief',
        body: 'Outbound at scale on rented SaaS means per-seat fees, shared IP reputation, and copy that reads like a template. The goal: an owned pipeline that personalizes properly, sends on your own AWS SES identity, and protects the domain instead of burning it.',
      },
      {
        kind: 'flow',
        title: 'The send pipeline, per lead',
        steps: [
          { label: 'Load', sub: 'CSV/Excel of leads, columns normalized' },
          { label: 'Suppress', sub: 'Skip invalid + suppressed recipients' },
          { label: 'Personalize', sub: 'Approved copy, or AI-drafted when missing' },
          { label: 'Render', sub: 'Lightweight HTML + opt-out footer' },
          { label: 'Send', sub: 'One AWS SES call per recipient' },
          { label: 'Log', sub: 'Per-row status: sent / skipped / failed' },
        ],
        caption: 'Live sends require an explicit confirm flag and run dry-run-first — no accidental blasts.',
      },
      {
        kind: 'callouts',
        title: 'Deliverability is the product',
        items: [
          { title: 'Suppression first', body: 'Every recipient is checked against a suppression list before generation or sending — known bounces and complaints never get a second email.' },
          { title: 'Bounce + complaint loop', body: 'SES publishes bounces and complaints to SNS → SQS; a processor appends them straight back to the suppression list.' },
          { title: 'One per recipient', body: 'Each email is its own SES call, which keeps auditing simple and avoids the blast patterns that wreck reputation.' },
          { title: 'Opt-out by default', body: 'A reply-based unsubscribe footer is added automatically unless the body already includes one.' },
        ],
      },
      {
        kind: 'split',
        title: 'Owned vs rented',
        before: {
          label: 'Cold-email SaaS',
          points: ['Per-seat pricing', 'Shared IP reputation', 'Their rules, their caps', 'Template-grade copy'],
        },
        after: {
          label: 'Owned Email Engine',
          points: ['Your AWS SES identity', 'Your domain reputation', 'Your caps + pacing', 'AI copy, when needed'],
        },
      },
      {
        kind: 'stack',
        title: 'Stack',
        groups: [
          { label: 'Delivery', items: ['AWS SES', 'SNS + SQS events', 'SPF / DKIM / DMARC'] },
          { label: 'Generation', items: ['LLM personalization', 'Jinja2 HTML', 'Structured output'] },
          { label: 'Runtime', items: ['Python CLI', 'Dry-run + confirm guard', 'Per-row logging'] },
        ],
      },
      {
        kind: 'prose',
        heading: 'The result',
        body: 'Outbound that you control end to end: personalized at the row level, sent on your own identity, and self-protecting through suppression and bounce handling — the parts that actually decide whether cold email lands or dies.',
      },
    ],
    faq: [
      {
        q: 'Why AWS SES instead of a cold-email tool?',
        a: 'SES is your own sending identity and reputation at a fraction of per-seat SaaS cost. You own the caps, the pacing, and the data — and there\'s no shared-IP risk from other senders.',
      },
      {
        q: 'How does it protect deliverability?',
        a: 'Suppression runs before every send, and SES bounces/complaints flow back into the suppression list automatically via SNS + SQS. One send per recipient keeps sending patterns clean.',
      },
      {
        q: 'Does the AI write every email?',
        a: 'Only when needed. Approved copy in your sheet is used as-is; the LLM drafts personalized subject/body only for rows without approved copy, which keeps cost and tone in check.',
      },
    ],
    related: [
      { href: '/blog/aws-ses-tenant-level-suppression-lists-guide', label: 'AWS SES tenant-level suppression lists, explained', eyebrow: 'TUTORIAL' },
      { href: '/work/x-dm-outreach-agent', label: 'Safe, human-paced X DM outreach engine', eyebrow: 'CASE STUDY' },
    ],
    cta: {
      title: 'Want cold-email infrastructure you own?',
      sub: 'We build owned SES pipelines with deliverability hygiene from day one. Tell us your volume and ICP.',
    },
  },
];
