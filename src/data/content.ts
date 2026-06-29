/**
 * Structured content model for case studies and blog/insight articles.
 *
 * Pages are intentionally VISUAL and LOW-TEXT: instead of long prose, each doc
 * is a sequence of diagram-friendly `Block`s that the renderer turns into flow
 * diagrams, comparison tables, metric strips, etc. This keeps the brand's
 * type-led, diagram-driven look while still emitting enough crawlable text +
 * JSON-LD to rank.
 */

export type Block =
  | { kind: 'prose'; heading?: string; body: string }
  | { kind: 'flow'; title?: string; caption?: string; steps: { label: string; sub?: string }[] }
  | { kind: 'metrics'; title?: string; items: { value: string; label: string }[] }
  | { kind: 'compare'; title?: string; caption?: string; head: string[]; rows: string[][]; highlight?: number }
  | {
      kind: 'split';
      title?: string;
      before: { label: string; points: string[] };
      after: { label: string; points: string[] };
    }
  | { kind: 'stack'; title?: string; groups: { label: string; items: string[] }[] }
  | { kind: 'callouts'; title?: string; items: { title: string; body: string }[] }
  | { kind: 'steps'; title?: string; caption?: string; items: { title: string; body: string }[] }
  | { kind: 'quote'; text: string; by?: string; role?: string }
  | { kind: 'note'; body: string };

export type DocType = 'case-study' | 'tutorial' | 'comparison' | 'pillar' | 'guide';
export type Collection = 'work' | 'blog';

/** Human label for each doc type (used in hero eyebrows + listing cards). */
export const TYPE_LABELS: Record<DocType, string> = {
  'case-study': 'Case study',
  tutorial: 'Tutorial',
  comparison: 'Comparison',
  pillar: 'Guide',
  guide: 'Guide',
};

export interface Doc {
  slug: string; // path within its collection, e.g. "scaleup-zoho-crm-follow-up-agent"
  collection: Collection;
  type: DocType;
  /** Visible H1 */
  title: string;
  /** Short label for the breadcrumb + listing cards. Falls back to title. */
  crumb?: string;
  /** <title> / OG title (<= ~60 chars, keyword-led). Falls back to title. */
  seoTitle?: string;
  /** Meta description (<= ~155 chars). */
  description: string;
  keywords: string;
  /** Short eyebrow label above the H1 */
  eyebrow: string;
  /** One-paragraph crawlable intro under the H1 */
  dek: string;
  ogImage?: string;
  tags: string[];
  /** Named public client + logo (only when already public) */
  client?: string;
  clientLogo?: string;
  /** Hero headline metric, e.g. { value: "92%", label: "extraction accuracy" } */
  heroStat?: { value: string; label: string };
  blocks: Block[];
  faq?: { q: string; a: string }[];
  related?: { href: string; label: string; eyebrow?: string }[];
  cta?: { title: string; sub: string };
  /** schema.org @type for the page-level Article/Service/HowTo node */
  schemaType?: 'Article' | 'HowTo' | 'Service';
  /** Human-readable engagement timeframe, e.g. "2023–2025" or "Oct–Dec 2024" */
  timeframe?: string;
  datePublished: string; // ISO date
  dateModified?: string;
  author?: string;
  /** When true the doc is excluded from listings + getStaticPaths */
  draft?: boolean;
  /** True when Priyam personally delivered this engagement (timesheet-backed). Shows a badge. */
  directlyDelivered?: boolean;
  /** First-person "My Direct Contribution" paragraph (anonymized, no client names/hours). */
  contribution?: string;
}

const SITE = 'https://diverselabs.org';
const ORG_ID = `${SITE}/#organization`;

export const docUrl = (doc: Doc) => `${SITE}/${doc.collection}/${doc.slug}`;

/** Plain-text body copy used as articleBody / fallback OG text. */
export function plainText(doc: Doc): string {
  const parts: string[] = [doc.dek];
  for (const b of doc.blocks) {
    if (b.kind === 'prose') parts.push((b.heading ? b.heading + '. ' : '') + b.body);
    else if (b.kind === 'steps') parts.push(...b.items.map((i) => `${i.title}: ${i.body}`));
    else if (b.kind === 'callouts') parts.push(...b.items.map((i) => `${i.title}: ${i.body}`));
    else if (b.kind === 'note') parts.push(b.body);
    else if (b.kind === 'quote') parts.push(b.text);
  }
  return parts.join(' ');
}

export function articleJsonLd(doc: Doc) {
  const type = doc.schemaType ?? 'Article';
  if (type === 'Service') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: doc.title,
      description: doc.description,
      serviceType: doc.tags.join(', '),
      provider: { '@id': ORG_ID, '@type': 'ProfessionalService', name: 'Diverse Labs' },
      areaServed: 'Worldwide',
      url: docUrl(doc),
    };
  }
  if (type === 'HowTo') {
    const steps = doc.blocks.find((b) => b.kind === 'steps') as
      | Extract<Block, { kind: 'steps' }>
      | undefined;
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: doc.title,
      description: doc.description,
      ...(steps
        ? {
            step: steps.items.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s.title,
              text: s.body,
            })),
          }
        : {}),
    };
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: doc.title,
    description: doc.description,
    image: new URL(doc.ogImage ?? '/og-image.png', SITE).href,
    datePublished: doc.datePublished,
    dateModified: doc.dateModified ?? doc.datePublished,
    author: { '@type': 'Person', name: doc.author ?? 'Deven Rathod' },
    publisher: { '@id': ORG_ID, '@type': 'Organization', name: 'Diverse Labs' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': docUrl(doc) },
    articleSection: doc.collection === 'work' ? 'Case Study' : 'Insights',
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.href.startsWith('http') ? c.href : `${SITE}${c.href}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
