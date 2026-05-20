import { ExecutiveSummaryData } from '@/lib/types';
import { ProcessedBadge } from '@/components/processed-badge';
import { Inbox, AlertTriangle, Tag, BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExecutiveSummaryProps {
  data: ExecutiveSummaryData;
}

const stats = (data: ExecutiveSummaryData) => [
  {
    label: 'Total Processed',
    value: data.totalProcessed,
    icon: Inbox,
    neonColor: 'via-blue-500',
    card: 'bg-blue-500/5 border-blue-500/20',
    iconClass: 'bg-blue-500/10 border-blue-500/25 text-blue-400',
    valueClass: 'text-blue-200',
    labelClass: 'text-blue-300/70',
  },
  {
    label: 'Escalations',
    value: data.escalationCount,
    icon: AlertTriangle,
    neonColor: data.escalationCount > 0 ? 'via-red-500' : 'via-slate-600',
    card: data.escalationCount > 0 ? 'bg-red-500/5 border-red-500/20' : 'bg-slate-800/20 border-slate-700/30',
    iconClass: data.escalationCount > 0 ? 'bg-red-500/10 border-red-500/25 text-red-400' : 'bg-slate-700/20 border-slate-700 text-slate-500',
    valueClass: data.escalationCount > 0 ? 'text-red-200' : 'text-slate-400',
    labelClass: data.escalationCount > 0 ? 'text-red-300/70' : 'text-slate-500',
  },
  {
    label: 'Top Category',
    value: data.topCategory,
    icon: Tag,
    neonColor: 'via-purple-500',
    card: 'bg-purple-500/5 border-purple-500/20',
    iconClass: 'bg-purple-500/10 border-purple-500/25 text-purple-400',
    valueClass: 'text-purple-200',
    labelClass: 'text-purple-300/70',
  },
  {
    label: 'Avg Confidence',
    value: `${Math.round(data.avgConfidence * 100)}%`,
    icon: BarChart2,
    neonColor: 'via-emerald-500',
    card: 'bg-emerald-500/5 border-emerald-500/20',
    iconClass: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
    valueClass: 'text-emerald-200',
    labelClass: 'text-emerald-300/70',
  },
];

export function ExecutiveSummary({ data }: ExecutiveSummaryProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats(data).map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={cn(
                'relative group border rounded-2xl backdrop-blur-md p-5 overflow-hidden bg-slate-950/80 transition-all duration-300 hover:bg-slate-900/90 cursor-default',
                stat.card,
              )}
            >
              {/* top neon line — animates in on hover (matches button pattern) */}
              <span className={cn(
                'absolute top-0 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out',
                stat.neonColor,
              )} />
              {/* top neon bloom */}
              <span className={cn(
                'absolute top-0 left-[12.5%] right-[12.5%] h-[6px] bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-40 transition-all duration-500 ease-in-out blur-sm',
                stat.neonColor,
              )} />

              {/* bottom neon line — dims in on hover */}
              <span className={cn(
                'absolute bottom-0 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent to-transparent opacity-30 group-hover:opacity-60 transition-all duration-500 ease-in-out',
                stat.neonColor,
              )} />

              <div className="flex items-start gap-3">
                <div className={cn('w-9 h-9 rounded-lg border flex items-center justify-center shrink-0', stat.iconClass)}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className={cn('text-xs font-medium mb-1', stat.labelClass)}>{stat.label}</p>
                  <p className={cn('text-2xl font-black leading-none', stat.valueClass)}>{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {data.totalTimeMs > 0 && (
        <div className="flex justify-end">
          <ProcessedBadge count={data.totalProcessed} timeMs={data.totalTimeMs} />
        </div>
      )}
    </div>
  );
}
