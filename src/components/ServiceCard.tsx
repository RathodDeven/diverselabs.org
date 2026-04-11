import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="surface-card p-6 md:p-8 rounded-xl transition-all group hover:-translate-y-0.5">
      <div className="w-14 h-14 icon-surface rounded-lg mb-5 transition-all flex items-center justify-center">
        <Icon className="w-7 h-7 text-white/90" strokeWidth={1.5} />
      </div>
      <h3 className="text-white font-bold text-lg mb-3 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-text-secondary mb-5 leading-relaxed">{description}</p>
      <ul className="text-text-tertiary text-sm space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-white/40 mt-0.5">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
