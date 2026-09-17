import React, { useState, useEffect } from 'react';

/* ============================================================
   Capsa.ai — Portfolio tracking mockup
   Enterprise-grade post-close monitoring panel.
   ============================================================ */

const IconDownload = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14" />
  </svg>
);

const IconTrendUp = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" />
  </svg>
);

const IconTrendDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l6 6 4-4 8 8M21 17v-6M21 17h-6" />
  </svg>
);

const IconAlert = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
  </svg>
);

const PORTFOLIO_DATA = [
  { name: 'Meridian Renewables', sector: 'Infrastructure', arr: '$45.2M', ebitda: '$12.1M', yoy: '+18.4%', trend: 'up', status: 'On Track', risk: 'Low' },
  { name: 'Cobalt Grid Storage', sector: 'Energy', arr: '$18.9M', ebitda: '-$2.4M', yoy: '-6.2%', trend: 'down', status: 'Review', risk: 'Med' },
  { name: 'Amberline Health', sector: 'Healthcare', arr: '$34.1M', ebitda: '$4.2M', yoy: '-2.8%', trend: 'down', status: 'Flagged', risk: 'High' },
];

const KPIS = [
  { label: 'Portfolio ARR', value: '$98.2M', delta: '+3.1%', trend: 'up' },
  { label: 'Blended EBITDA', value: '$13.9M', delta: '+1.4%', trend: 'up' },
  { label: 'Covenant Health', value: '2 / 3', delta: '1 flagged', trend: 'down' },
  { label: 'Next Review', value: 'Q3 2026', delta: 'in 24 days', trend: 'flat' },
];

const MockupPortfolio = () => {
  const [pulseIdx, setPulseIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // subtle rotating highlight across the KPI cards so the panel feels live
  useEffect(() => {
    const id = setInterval(() => setPulseIdx((p) => (p + 1) % KPIS.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full bg-white flex flex-col font-sans relative overflow-hidden">
      <style>{`
        @keyframes portfolioFadeUp {
          0%   { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
        <div className="flex items-center gap-3">
     <span className="text-[13px] font-semibold text-slate-900 tracking-tight">Fund IV Operating Metrics</span>
          <span className="text-[13px] text-slate-300 font-light select-none">/</span>
          <span className="text-[13px] text-slate-500 font-light">Q3 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-[0.12em] text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Live sync
          </span>
          <button className="flex items-center gap-1.5 bg-[#2B4BF2] hover:bg-[#1e3ad1] transition-colors text-white text-[11px] font-semibold tracking-wide px-3.5 py-2 rounded-md">
            Export
            <IconDownload />
          </button>
        </div>
      </div>

      {/* KPI strip */}
 <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-100 bg-white shrink-0">
        {KPIS.map((k, i) => (
          <div
            key={k.label}
            className={`px-6 py-5 transition-colors duration-500 ${pulseIdx === i ? 'bg-[#2B4BF2]/[0.025]' : 'bg-white'}`}
             
          >
            <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-slate-400 mb-2">{k.label}</div>
            <div className="flex items-end justify-between gap-2">
              <div className="text-[28px] font-serif text-slate-900 tracking-tight leading-none">{k.value}</div>
          
                      {k.trend === 'up' && (
                <span className="text-slate-400 flex items-center gap-0.5 text-[12px] font-normal mb-0.5">
                  {k.delta}
                </span>
              )}
              {k.trend === 'down' && (
                <span className="text-rose-600 flex items-center gap-0.5 text-[12px] font-normal mb-0.5">
                  {k.delta}
                </span>
              )}
              {k.trend === 'flat' && (
                <span className="text-slate-400 text-[12px] font-medium mb-0.5">{k.delta}</span>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[1.6fr_0.9fr_0.9fr_0.7fr_0.8fr] gap-4 px-6 py-3 border-b border-slate-100 bg-[#2B4BF2]/[0.02] shrink-0">
        <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-slate-400">Asset</span>
        <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-slate-400 text-right">ARR</span>
        <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-slate-400 text-right">EBITDA</span>
        <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-slate-400 text-right">YoY</span>
        <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-slate-400 text-right">Status</span>
      </div>

      {/* Rows */}
      <div className="flex-1 overflow-auto">
        {PORTFOLIO_DATA.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[1.6fr_0.9fr_0.9fr_0.7fr_0.8fr] gap-4 items-center px-6 py-4 border-b border-slate-100 hover:bg-slate-50/60 transition-colors"
              
          >
            {/* Asset + sector */}
            <div className="min-w-0">
              <div className="text-[14.5px] font-medium text-slate-900 truncate">{item.name}</div>
              <div className="text-[12px] text-slate-400 font-light truncate">{item.sector}</div>
            </div>

            <div className="text-[14px] font-mono text-slate-700 text-right">{item.arr}</div>

            <div className={`text-[14px] font-mono text-right ${item.ebitda.startsWith('-') ? 'text-rose-500' : 'text-slate-700'}`}>
              {item.ebitda}
            </div>

            <div className={`text-[13px] font-mono text-right ${
              item.trend === 'up' ? 'text-slate-500' : 'text-rose-500'
            }`}>
              {item.yoy}
            </div>

            <div className="flex justify-end">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.1em] rounded-full ${
                item.status === 'On Track' ? 'text-slate-500' :
                item.status === 'Review' ? 'text-amber-700' :
                'text-rose-600'
              }`}>
                <span className={`w-1 h-1 rounded-full ${
                  item.status === 'On Track' ? 'bg-[#2B4BF2]' :
                  item.status === 'Review' ? 'bg-amber-500' :
                  'bg-rose-500'
                }`}></span>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div
        className="flex items-center justify-between px-6 py-3 border-t border-slate-100 bg-slate-50/40 shrink-0"
           
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400">
          Auto-refresh · ERP + Banking APIs · 12 min ago
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400">
          Next scheduled workflow: 04:00 UTC
        </span>
      </div>
    </div>
  );
};

export default MockupPortfolio;