'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { EmailRow, DashboardFilters, ActivityFeedItem, SyncResponse } from '@/lib/types';
import { computeExecutiveSummary } from '@/lib/email-utils';
import { ExecutiveSummary } from '@/components/executive-summary';
import { EmailGrid } from '@/components/email-grid';
import { ActivityFeed } from '@/components/activity-feed';
import { FilterBar } from '@/components/filter-bar';
import { SyncButton } from '@/components/sync-button';
import { AuroraBorealis } from '@/components/ui/aurora-borealis';

import { LogOut, RefreshCw } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  const router = useRouter();

  const [emails, setEmails] = useState<EmailRow[]>([]);
  const [userEmail, setUserEmail] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<DashboardFilters>({
    category: 'All',
    priority: 'All',
    groupBy: 'priority',
  });
  const [activityItems, setActivityItems] = useState<ActivityFeedItem[]>([]);
  const [totalTimeMs, setTotalTimeMs] = useState(0);

  useEffect(() => {
    async function init() {
      // Dynamically import to avoid SSR issues
      const { createClient } = await import('@/lib/supabase');
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace('/');
        return;
      }
      setUserEmail(session.user.email || '');
      await loadEmails(supabase);
    }
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function loadEmails(supabaseClient?: any) {
    setLoading(true);
    try {
      const { createClient } = await import('@/lib/supabase');
      const supabase = supabaseClient || createClient();
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data } = await supabase
        .from('emails')
        .select('*')
        .eq('user_id', session.user.id)
        .order('received_at', { ascending: false });

      setEmails((data as EmailRow[]) || []);
    } finally {
      setLoading(false);
    }
  }

  function handleSyncComplete(response: SyncResponse) {
    setTotalTimeMs(response.totalTimeMs);
    loadEmails();

    const newItems: ActivityFeedItem[] = [
      {
        id: `sync-${Date.now()}`,
        message: `Synced ${response.processed} emails · ${response.escalations} escalations detected`,
        timestamp: Date.now(),
        type: response.escalations > 0 ? 'warning' : 'success',
      },
      {
        id: `time-${Date.now()}`,
        message: `Processed in ${(response.totalTimeMs / 1000).toFixed(1)}s`,
        timestamp: Date.now(),
        type: 'info',
      },
    ];
    setActivityItems((prev) => [...newItems, ...prev]);
  }

  async function handleSignOut() {
    const { createClient } = await import('@/lib/supabase');
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace('/');
  }

  const summaryData = computeExecutiveSummary(emails);
  summaryData.totalTimeMs = totalTimeMs;

  return (
    <div className="relative min-h-screen">
      <AuroraBorealis />
      <div className="fixed inset-0 z-[1] bg-slate-950/60 pointer-events-none" />
      <div className="relative z-10">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-black/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Triagent
          </Link>
          <div className="flex items-center gap-3">
            {userEmail && (
              <span className="text-sm text-slate-500 hidden sm:block">{userEmail}</span>
            )}
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {loading ? (
          <div className="flex items-center justify-center py-24 text-slate-500">
            Loading your inbox...
          </div>
        ) : (
          <>
            {/* Executive Summary */}
            <ExecutiveSummary data={summaryData} />

            {/* Sync + Filters row */}
            <div className="flex flex-wrap items-start gap-4">
              <SyncButton onSyncComplete={handleSyncComplete} />
              <FilterBar filters={filters} onChange={setFilters} />
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                {emails.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-24 text-slate-500 rounded-2xl border border-slate-800/60 bg-slate-900/30 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                      <RefreshCw className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-base font-semibold text-slate-300 mb-1">No emails yet</p>
                    <p className="text-sm text-slate-500">Click &quot;Sync Gmail&quot; to fetch and classify your inbox.</p>
                  </div>
                ) : (
                  <EmailGrid emails={emails} filters={filters} />
                )}
              </div>
              <div className="lg:col-span-1">
                <ActivityFeed items={activityItems} />
              </div>
            </div>
          </>
        )}
      </main>
      </div>
    </div>
  );
}
