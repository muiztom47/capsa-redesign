import React from 'react';

/* ============================================================
   Capsa.ai — Evaluate / diligence workspace mockup
   All keyframes are self-contained below — this component does
   NOT depend on Hero.tsx's <style> block.

   Note: this mockup is click-driven (tabs), not an autoplay loop
   like MockupSourcing. Every animation here is a one-shot
   "fade/slide in, then stay visible" — never `infinite` — and
   each tab pane is remounted via `key={activeTab}` on click so
   the entrance animation replays cleanly every time.
   ============================================================ */

const TABS = ['Trading comps', 'Legal review', 'Enterprise search'];

const MockupEvaluate = ({ activeTab, setActiveTab }: { activeTab: number; setActiveTab: (i: number) => void }) => {
  return (
    <div className="w-full h-full bg-white flex flex-col font-sans relative overflow-hidden">
      <style>{`
        @keyframes evalFadeUp {
          0%   { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes evalFadeIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes evalCursorBlink {
          0%, 49%   { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes evalPreviewIn {
          0%   { opacity: 0; transform: translateY(10px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes evalSearchPulse {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
        @keyframes evalStatusOut {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes evalLoadingBarOnce {
          0%   { width: 0%; opacity: 1; }
          85%  { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
        @keyframes evalTypeRevealOnce {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes evalClickOnce {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(0.94); }
        }
        @keyframes evalBarGrow {
          0%   { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
      `}</style>

      {/* Chrome */}
      <div className="flex items-center justify-between px-8 border-b border-slate-200/70 shrink-0">
        <div className="flex items-center gap-1">
          {TABS.map((t, ti) => (
            <button
              key={t}
              onClick={() => setActiveTab(ti)}
              className={`relative px-4 py-4 text-[12px] font-medium transition-colors ${
                activeTab === ti ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {t}
              {activeTab === ti && (
                <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#2B4BF2]"></span>
              )}
            </button>
          ))}
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400">
          Diligence workspace
        </span>
      </div>

      <div className="flex-1 overflow-hidden relative">
        {/* Trading Comps — headline stats first, then supporting detail. Built for a CFO scanning fast. */}
        {activeTab === 0 && (
          <div key={activeTab} className="h-full flex flex-col" style={{ animation: 'evalFadeIn 0.4s ease-out' }}>
            <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
              <h4 className="font-serif text-lg text-slate-900 tracking-tight">Trading comparables</h4>
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400">
                14 comps · FactSet live
              </span>
            </div>

            <div className="flex-1 overflow-auto px-8 py-6">

              {/* headline stat cards */}
              <div className="grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 mb-8">
                {[
                  { label: 'Median EV / EBITDA', value: '11.6x', sub: '8.2x – 17.2x range' },
                  { label: 'Implied EV', value: '€71.9M', sub: 'at €6.2M target EBITDA' },
                  { label: 'Peer set', value: '14', sub: 'EU healthcare, <€100M rev' },
                ].map((s, si) => (
                  <div
                    key={si}
                    className="px-6 py-5 first:pl-0 last:pr-0"
                    style={{ animation: `evalFadeUp 0.4s ease-out ${si * 0.08}s both` }}
                  >
                    <div className="text-[9.5px] font-mono uppercase tracking-[0.14em] text-slate-400 mb-2">
                      {s.label}
                    </div>
                    <div className="text-[28px] font-serif text-slate-900 tracking-tight leading-none">{s.value}</div>
                    <div className="text-[11px] text-slate-400 mt-2">{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* multiples table */}
              <div
                className="rounded-lg border border-slate-200 overflow-hidden mb-6"
                style={{ animation: 'evalFadeUp 0.4s ease-out 0.24s both' }}
              >
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] font-mono uppercase tracking-[0.12em] text-slate-400 bg-slate-50/70">
                      <th className="text-left px-6 py-3 font-normal">Multiple</th>
                      <th className="text-right px-6 py-3 font-normal">Low</th>
                      <th className="text-right px-6 py-3 font-normal">Median</th>
                      <th className="text-right px-6 py-3 font-normal">High</th>
                      <th className="text-left px-6 py-3 font-normal w-[180px]">Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { m: 'EV / EBITDA', low: '8.2x', med: '11.6x', high: '17.2x', lowPos: 0.1, pos: 0.48, highPos: 0.92 },
                      { m: 'EV / Revenue', low: '2.1x', med: '3.4x', high: '5.8x', lowPos: 0.08, pos: 0.4, highPos: 0.85 },
                      { m: 'P / E', low: '14.0x', med: '19.8x', high: '27.5x', lowPos: 0.12, pos: 0.44, highPos: 0.9 },
                    ].map((r, ri) => (
                      <tr
                        key={ri}
                        className="hover:bg-slate-50/60 transition-colors"
                        style={{ animation: `evalFadeUp 0.4s ease-out ${0.32 + ri * 0.08}s both` }}
                      >
                        <td className="px-6 py-4 text-[13px] font-medium text-slate-900">{r.m}</td>
                        <td className="px-6 py-4 text-right text-[13px] font-mono text-slate-400 tabular-nums">{r.low}</td>
                        <td className="px-6 py-4 text-right text-[13px] font-mono text-[#2B4BF2] font-semibold tabular-nums">{r.med}</td>
                        <td className="px-6 py-4 text-right text-[13px] font-mono text-slate-400 tabular-nums">{r.high}</td>
                        <td className="px-6 py-4">
                          <div className="relative h-[3px] rounded-full bg-slate-100">
                            <div
                              className="absolute top-0 h-full rounded-full bg-[#2B4BF2]/20 origin-left"
                              style={{
                                left: `${r.lowPos * 100}%`,
                                width: `${(r.highPos - r.lowPos) * 100}%`,
                                animation: `evalBarGrow 0.5s ease-out ${0.5 + ri * 0.08}s both`,
                              }}
                            ></div>
                            <div
                              className="absolute top-1/2 -translate-y-1/2 w-[3px] h-[10px] rounded-full bg-[#2B4BF2]"
                              style={{ left: `calc(${r.pos * 100}% - 1.5px)`, animation: `evalFadeIn 0.3s ease-out ${0.7 + ri * 0.08}s both` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="text-[10px] font-mono text-slate-400"
                style={{ animation: 'evalFadeUp 0.35s ease-out 0.6s both' }}
              >
                Methodology: EU healthcare services, revenue €20–100M, last synced 2 min ago
              </div>
            </div>
          </div>
        )}

        {/* Legal Review — typed question, thinking pulse, response streams in with live citations */}
        {activeTab === 1 && (
          <div key={activeTab} className="h-full flex flex-col px-8 py-8 relative" style={{ animation: 'evalFadeIn 0.4s ease-out' }}>

            {/* typed question, chat-style — matches Enterprise Search's pattern */}
            <div className="rounded-lg border border-slate-200 bg-white px-5 py-4 mb-4 self-start max-w-[560px]">
              <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400 mb-2">
                Ask Capsa
              </div>
              <div
                className="text-[14px] text-slate-800 leading-[1.6] font-light overflow-hidden whitespace-nowrap"
                style={{ animation: 'evalTypeRevealOnce 1.2s steps(60,end) both' }}
              >
                Summarize the covenant terms in SPA_Meridian_vFinal.pdf
              </div>
            </div>

            {/* thinking status — 1.4s → 2.3s, then fades */}
            <div
              className="flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.14em] text-slate-400 mb-4"
              style={{ animation: 'evalStatusOut 0.3s ease-in 2.3s both' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B4BF2]" style={{ animation: 'evalSearchPulse 0.8s ease-in-out infinite 1.4s' }}></span>
              <span style={{ animation: 'evalFadeIn 0.2s ease-out 1.4s both' }}>Reading SPA_Meridian_vFinal.pdf…</span>
            </div>

            <div
              className="rounded-lg border border-slate-200 bg-white p-6 relative"
              style={{ animation: 'evalFadeUp 0.45s ease-out 2.4s both' }}
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400 mb-4">
                Capsa response
              </div>
              <div className="text-[14px] text-slate-700 leading-[1.85] font-light">
                <p>
                  The agreement imposes a <span className="text-slate-900 font-normal">maximum total net leverage of 4.00:1.00</span>
                  <SourceChip n={1} />, tested quarterly on a trailing twelve-month basis
                  <SourceChip n={2} />. Change of control triggers mandatory prepayment subject to
                  lender consent<span className="text-[#2B4BF2] text-[11px] align-super ml-0.5 cursor-pointer">3</span>.
                  MAC carve-outs exclude sector-wide downturns<span className="text-[#2B4BF2] text-[11px] align-super ml-0.5 cursor-pointer">4</span>.
                </p>
              </div>

              {/* floating preview — arrives just after the response settles */}
              <div
                className="absolute right-6 bottom-[-14px] w-[340px] rounded-lg border border-slate-200 bg-white shadow-[0_12px_28px_-16px_rgba(15,23,42,0.18)] p-4"
                style={{ animation: 'evalPreviewIn 0.5s ease-out 2.9s both' }}
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400 mb-2">
                  Source 1 · SPA_Meridian_vFinal.pdf
                </div>
                <div className="text-[12px] text-slate-700 font-mono leading-relaxed">
                  "...the Company shall maintain a Total Net Leverage Ratio not exceeding{' '}
                  <span className="bg-[#2B4BF2]/10 text-[#2B4BF2] px-1 rounded">4.00:1.00</span>,
                  tested quarterly on a trailing twelve-month basis..."
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.14em] text-slate-400">
                  <span>Page 42 · §7.2(a)</span>
                  <span className="text-[#2B4BF2]">Open ↗</span>
                </div>
              </div>
            </div>

            {/* extracted terms — arrive last, after the reader has had a moment with the response */}
            <div className="mt-10">
              <div
                className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400 mb-3"
                style={{ animation: 'evalFadeUp 0.35s ease-out 3.3s both' }}
              >
                Extracted terms
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                {[
                  ['SPA', 'Covenant · 4.0x max leverage'],
                  ['NDA', 'Non-solicit · 24 months'],
                  ['SPA', 'Change of control · consent required'],
                  ['SPA', 'MAC clause · standard carve-outs'],
                ].map((row, ri) => (
                  <div
                    key={ri}
                    className="flex items-center gap-4 py-3 text-[12px] border-b border-slate-100"
                    style={{ animation: `evalFadeUp 0.4s ease-out ${3.4 + ri * 0.08}s both` }}
                  >
                    <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-slate-400 w-10 shrink-0">{row[0]}</span>
                    <span className="text-slate-700">{row[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Enterprise Search — conversational query → loader → color-coded comp table */}
        {activeTab === 2 && (
          <div key={activeTab} className="h-full flex flex-col px-8 py-8" style={{ animation: 'evalFadeIn 0.4s ease-out' }}>

            {/* typed question, chat-style */}
            <div className="rounded-lg border border-slate-200 bg-white px-5 py-4 mb-5 self-start max-w-[560px]">
              <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400 mb-2">
                Ask Capsa
              </div>
              <div className="text-[14px] text-slate-800 leading-[1.6] font-light overflow-hidden whitespace-nowrap" style={{ animation: 'evalTypeRevealOnce 1.3s steps(60,end) both' }}>
                How does Helvetia Diagnostics compare to similar deals we've evaluated?
              </div>
            </div>

            {/* loading state — visible 1.5s → 2.5s, then fades */}
            <div
              className="flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.14em] text-slate-400 mb-4"
              style={{ animation: 'evalStatusOut 0.3s ease-in 2.5s both' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B4BF2]" style={{ animation: 'evalSearchPulse 0.8s ease-in-out infinite 1.5s' }}></span>
              <span style={{ animation: 'evalFadeIn 0.2s ease-out 1.5s both' }}>Analyzing 6 comparable deals across your data room…</span>
            </div>

            {/* response line */}
            <div
              className="text-[13px] text-slate-700 leading-[1.7] font-light mb-4"
              style={{ animation: 'evalFadeUp 0.4s ease-out 2.6s both' }}
            >
              Helvetia leads the set on GP margin and sits mid-pack on EBITDA margin — highlighted below against five comparable healthcare assets.
            </div>

            {/* color-coded comp table */}
            <div
              className="flex-1 overflow-auto rounded-lg border border-slate-200"
              style={{ animation: 'evalFadeUp 0.5s ease-out 2.8s both' }}
            >
              <table className="w-full text-[12.5px]">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] font-mono uppercase tracking-[0.12em] text-slate-400 bg-[#2B4BF2]/[0.03]">
                    <th className="text-left px-4 py-3 font-normal">Company</th>
                    <th className="text-right px-4 py-3 font-normal">Revenue €m</th>
                    <th className="text-right px-4 py-3 font-normal">GP €m</th>
                    <th className="text-right px-4 py-3 font-normal">GP Margin</th>
                    <th className="text-right px-4 py-3 font-normal">EBITDA €m</th>
                    <th className="text-right px-4 py-3 font-normal">EBITDA Margin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: 'Helvetia Diagnostics', rev: '62.0', gp: '31.0', gpm: '50%', gpmUp: true, ebitda: '6.2', ebm: '10%', ebmUp: false, highlight: true },
                    { name: 'Nordklinik Group', rev: '58.4', gp: '25.1', gpm: '43%', gpmUp: false, ebitda: '5.8', ebm: '10%', ebmUp: false },
                    { name: 'Baltic Care Partners', rev: '48.9', gp: '22.5', gpm: '46%', gpmUp: true, ebitda: '5.1', ebm: '10%', ebmUp: false },
                    { name: 'Ceres Medical', rev: '71.2', gp: '30.6', gpm: '43%', gpmUp: false, ebitda: '9.3', ebm: '13%', ebmUp: true },
                    { name: 'Alpine HealthTech', rev: '54.0', gp: '27.5', gpm: '51%', gpmUp: true, ebitda: '7.6', ebm: '14%', ebmUp: true },
                  ].map((r, ri) => (
                    <tr
                      key={ri}
                      className={r.highlight ? 'bg-[#2B4BF2]/[0.05]' : ''}
                      style={{ animation: `evalFadeUp 0.35s ease-out ${3.0 + ri * 0.08}s both` }}
                    >
                      <td className={`px-4 py-3 font-medium text-slate-900 whitespace-nowrap border-l-2 ${r.highlight ? 'border-l-[#2B4BF2]' : 'border-l-transparent'}`}>
                        {r.name}
                        {r.highlight && (
                          <span className="ml-2 text-[9px] font-mono uppercase tracking-[0.1em] text-white bg-[#2B4BF2] px-1.5 py-0.5 rounded align-middle">
                            Target
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right font-mono tabular-nums text-slate-600">{r.rev}</td>
                      <td className="px-4 py-3 text-right font-mono tabular-nums text-slate-600">{r.gp}</td>
                      <td className={`px-4 py-3 text-right font-mono tabular-nums font-medium ${r.gpmUp ? 'bg-[#2B4BF2]/[0.07] text-[#2B4BF2]' : 'text-slate-400'}`}>
                        {r.gpm}
                      </td>
                      <td className="px-4 py-3 text-right font-mono tabular-nums text-slate-600">{r.ebitda}</td>
                      <td className={`px-4 py-3 text-right font-mono tabular-nums font-medium ${r.ebmUp ? 'bg-[#2B4BF2]/[0.07] text-[#2B4BF2]' : 'text-slate-400'}`}>
                        {r.ebm}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* numbered source chip */
const SourceChip = ({ n }: { n: number }) => (
  <span className="inline-flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#2B4BF2]/10 text-[#2B4BF2] text-[10px] font-mono align-middle mx-1 cursor-pointer hover:bg-[#2B4BF2]/20 transition-colors">
    {n}
  </span>
);

export default MockupEvaluate;