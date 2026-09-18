import React from 'react';

/* ============================================================
   Capsa.ai — logo.dev brand icons
   Same publishable key used in MockupSourcing.tsx — safe client-side.
   ============================================================ */
const LOGO_DEV_TOKEN = 'pk_KnI5jJk1QmKibGPEWPdFjw';

const brandLogoUrl = (domain) =>
  `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=64&format=png&retina=true`;

const BrandIcon = ({ domain, label }) => (
  <img
    src={brandLogoUrl(domain)}
    alt={label}
    width={18}
    height={18}
    loading="lazy"
    className="rounded-[5px] shrink-0 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-200"
    onError={(e) => {
      e.currentTarget.style.display = 'none';
    }}
  />
);

/* ---------- export destinations toolbar ----------
   Same connector set as the Sourcing mockup, reused here as the
   places a finished memo can be pushed to on export. */
const DESTINATIONS = [
  { type: 'custom', render: () => <img src="/images/sharepointlogo.webp" alt="SharePoint" width={18} height={18} className="shrink-0" />, label: 'SharePoint' },
  { type: 'custom', render: () => <img src="/images/salesforcelogo.webp" alt="Salesforce" width={18} height={18} className="shrink-0" />, label: 'Salesforce' },
  { type: 'logo', domain: 'hubspot.com', label: 'HubSpot' },
  { type: 'custom', render: () => <img src="/images/wordlogo.webp" alt="Word" width={18} height={18} className="shrink-0" />, label: 'Word' },
  { type: 'custom', render: () => <img src="/images/excellogo.webp" alt="Excel" width={18} height={18} className="shrink-0" />, label: 'Excel' },
  { type: 'custom', render: () => <img src="/images/dropboxlogo.webp" alt="Dropbox" width={18} height={18} className="shrink-0" />, label: 'Dropbox' },
];

/* small inline icons — matches MockupSourcing's set */
const IconPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
  </svg>
);

const IconGlobe = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z" />
  </svg>
);

const IconFolder = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </svg>
);

const IconDownload = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14" />
  </svg>
);

const MockupUnderwriting = () => {
  const CYCLE = 14;

  return (
    <div className="w-full h-full bg-white flex flex-col font-sans relative overflow-hidden">

      <style>{`
        @keyframes capsaCursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
         @keyframes capsaStatusThinking {
          0%, 15% { opacity: 1; }
          18%, 100% { opacity: 0; }
        }
        @keyframes capsaStatusSynth {
          0%, 20% { opacity: 0; }
          22%, 27% { opacity: 1; }
          30%, 100% { opacity: 0; }
        }
        @keyframes capsaStatusDone {
          0%, 29% { opacity: 0; }
          31%, 98% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes capsaPromptPhase {
          0%, 15% { opacity: 1; }
          18%, 100% { opacity: 0; }
        }
  @keyframes capsaButtonPress {
          0%, 11%, 100% { transform: scale(1); }
          13% { transform: scale(0.92); }
          14% { transform: scale(1); }
        }
  
        @keyframes capsaClickGlowMemo {
          0%, 10%  { opacity: 0; transform: scale(0.6); }
          13%      { opacity: 1; transform: scale(1); }
          16%      { opacity: 0; transform: scale(1.8); }
          100%     { opacity: 0; transform: scale(1.8); }
        }
        @keyframes capsaRippleMemo {
          0%, 10%  { opacity: 0; transform: scale(1); }
          12%      { opacity: 0.9; transform: scale(1); }
          16%      { opacity: 0; transform: scale(1.6); }
          100%     { opacity: 0; transform: scale(1.6); }
        }
     @keyframes capsaCursorMoveMemo {
          0%, 6%   { transform: translate(-40px, -46px) scale(1); opacity: 0; }
          7%       { opacity: 1; }
          10%      { transform: translate(-4px, -4px) scale(1); opacity: 1; }
          12%      { transform: translate(0px, 0px) scale(0.88); opacity: 1; }
          13%, 14% { transform: translate(0px, 0px) scale(1); opacity: 1; }
          16%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0; }
        }
    
       
        @keyframes capsaLoadingPhase {
          0%, 18% { opacity: 0; }
          21%, 27% { opacity: 1; }
          29%, 100% { opacity: 0; }
        }
        @keyframes capsaSpin {
          to { transform: rotate(360deg); }
        }
       @keyframes capsaMemoPhase {
          0%, 28% { opacity: 0; transform: translateY(8px); }
          31%, 97% { opacity: 1; transform: translateY(0); }
          99%, 100% { opacity: 0; transform: translateY(8px); }
        }
        @keyframes capsaChatShow {
          0%, 36% { opacity: 0; transform: translateY(6px); }
          40%, 97% { opacity: 1; transform: translateY(0); }
          99%, 100% { opacity: 0; transform: translateY(6px); }
        }
        @keyframes capsaChatType {
          0%, 54% { width: 0%; }
          63%, 97% { width: 100%; }
          99%, 100% { width: 0%; }
        }
        @keyframes capsaSendShow {
          0%, 63% { opacity: 0; transform: translateX(4px); }
          66%, 97% { opacity: 1; transform: translateX(0); }
          99%, 100% { opacity: 0; transform: translateX(4px); }
        }
        .capsa-loop { animation-duration: ${CYCLE}s; animation-timing-function: ease-out; animation-iteration-count: infinite; animation-fill-mode: both; }
      `}</style>

      {/* Chrome */}
      <div className="flex items-center justify-between px-8 py-3.5 border-b border-slate-200 bg-white shrink-0 relative z-10">
        <div className="flex items-center gap-3">
          <span className="text-[13px] font-semibold text-slate-900 tracking-tight">Memo Workspace</span>
          <span className="text-[13px] text-slate-300 font-light select-none">/</span>
          <span className="text-[13px] text-slate-500 font-light">Meridian Industrials</span>
        </div>
        <span className="relative h-[22px] flex items-center w-[132px] justify-end">
          <span className="capsa-loop absolute right-0 inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-500 bg-slate-100 rounded-full pl-2 pr-2.5 py-1 whitespace-nowrap" style={{ animationName: 'capsaStatusThinking' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"></span>
            Thinking
          </span>
          <span className="capsa-loop absolute right-0 inline-flex items-center gap-1.5 text-[10px] font-medium text-[#2B4BF2] bg-[#2B4BF2]/10 rounded-full pl-2 pr-2.5 py-1 whitespace-nowrap" style={{ animationName: 'capsaStatusSynth' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B4BF2] animate-pulse"></span>
            Synthesizing
          </span>
          <span className="capsa-loop absolute right-0 inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-700 bg-emerald-50 rounded-full pl-2 pr-2.5 py-1 whitespace-nowrap" style={{ animationName: 'capsaStatusDone' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Draft ready
          </span>
        </span>
      </div>

      <div className="flex-1 overflow-hidden px-8 py-6 relative bg-white">

        {/* Phase 1 — prompt + toolbar */}
        <div className="capsa-loop absolute inset-0 px-8 py-10 flex items-start justify-center" style={{ animationName: 'capsaPromptPhase' }}>
           <div className="relative w-full max-w-[640px] rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="text-[13.5px] text-slate-800 leading-[1.6] font-light mb-4">
                          Draft the IC memo for Meridian. I need LTV:CAC benchmarked against peers, and I want to know we still clear covenant under a downside case.
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="text-[16px] leading-none">+</span>
                <span className="text-[13px]">⋮⋮</span>
                <span className="text-[11px] font-mono text-slate-400">↗ Start Workflow</span>
              </div>
              <button className="capsa-loop bg-[#2B4BF2] text-white text-[12px] font-medium px-4 py-1.5 rounded-md" style={{ animationName: 'capsaButtonPress' }}>
                Ask Capsa
              </button>
            </div>

            {/* animated cursor, arriving at the button — same treatment as Sourcing */}
            <div
              className="capsa-loop absolute pointer-events-none z-30"
              style={{ animationName: 'capsaCursorMoveMemo', bottom: '14px', right: '18px' }}
            >
              <span
                className="capsa-loop absolute rounded-full"
                style={{
                  width: '28px',
                  height: '28px',
                  left: '-4px',
                  top: '-4px',
                  background: 'radial-gradient(circle, rgba(43,75,242,0.35) 0%, transparent 70%)',
                  animationName: 'capsaClickGlowMemo',
                }}
              ></span>
              <svg width="30" height="30" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 1px 3px rgba(15,23,42,0.18))' }}>
                <g transform="scale(-1,1) translate(-24,0)">
                  <path
                    d="M21 3L3 10.6L11 12.8L13.2 20.8L21 3Z"
                    fill="white"
                    stroke="#94A3B8"
                    strokeWidth="0.9"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <path d="M21 3L11 12.8" stroke="#94A3B8" strokeWidth="0.9" strokeLinecap="round" />
                </g>
              </svg>
              <span
                className="capsa-loop absolute inset-0 rounded-lg pointer-events-none"
                style={{ border: '2px solid #2B4BF2', animationName: 'capsaRippleMemo' }}
              ></span>
            </div>
          </div>
        </div>

        {/* Phase 2 — loading */}
        <div className="capsa-loop absolute inset-0 flex items-center justify-center" style={{ animationName: 'capsaLoadingPhase' }}>
          <div className="w-full max-w-[520px] rounded-lg border border-slate-200/70 bg-white px-6 py-16 flex flex-col items-center justify-center gap-4">
            <div
              className="w-7 h-7 rounded-full border-[2.5px] border-[#2B4BF2]/15 border-t-[#2B4BF2]"
              style={{ animation: 'capsaSpin 0.9s linear infinite' }}
            ></div>
            <span className="text-[14px] font-medium text-[#2B4BF2] tracking-tight">Generating memo…</span>
          </div>
        </div>

        {/* Phase 3 — memo, then the export bar */}
        <div className="capsa-loop absolute inset-0 flex flex-col" style={{ animationName: 'capsaMemoPhase' }}>

          {/* Single container — memo and export bar live inside this one box */}
          <div className="flex-1 bg-white relative flex flex-col min-h-0">

            <div className="flex-1 overflow-y-auto min-h-0 px-10 pt-6 pb-5 w-full">

              <div className="pb-3 mb-4 border-b border-slate-900">
                <h4 className="font-serif text-[22px] text-slate-900 tracking-tight leading-snug">
                  Meridian Industrials
                </h4>
                <div className="text-[12.5px] text-slate-500 font-light mt-0.5">Proposed $45M Growth Investment</div>
              </div>

              {/* Metrics Row */}
              <div className="flex items-baseline justify-between gap-6 mb-5 pb-4 border-b border-slate-100">
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.12em] text-slate-400 mb-1">LTV : CAC</div>
                  <div className="text-[18px] font-serif text-slate-900">9.3x</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.12em] text-slate-400 mb-1">Gross Margin</div>
                  <div className="text-[18px] font-serif text-slate-900">71.5%</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.12em] text-slate-400 mb-1">Pro Forma Leverage</div>
                  <div className="text-[18px] font-serif text-slate-900">2.4x</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.12em] text-slate-400 mb-1">Adj. EBITDA</div>
                  <div className="text-[18px] font-serif text-slate-900">$5.0M</div>
                </div>
              </div>

              <div className="space-y-4 text-[12.5px] leading-[1.65] text-slate-700 font-light">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400 mb-1.5">I. Financial Performance</div>
                              <p>Gross margin held at 71.5% through the LTM period, roughly 800 bps above the peer median, with no material seasonality in the underlying revenue mix.</p>
                </div>

                {/* Capsa Insight Callout */}
                <div className="pl-4 py-1.5 relative bg-slate-50/50 rounded-r-lg">
                  <span className="absolute left-0 top-0 font-serif text-[28px] text-slate-200 leading-none select-none">&ldquo;</span>
                  <div className="pl-4 border-l-2 border-[#2B4BF2]/30">
                    <div className="text-[9.5px] font-mono uppercase tracking-[0.15em] text-[#2B4BF2] mb-1 pt-0.5">Capsa Insight</div>
                    <p className="text-slate-700 pb-0.5 pr-4">
                      LTV:CAC of 9.3x is more than double the peer median of 4.5x<sup className="text-[#2B4BF2] font-mono not-italic ml-0.5">1</sup>, and it's retention driving that gap, not pricing. One flag worth surfacing to committee: the $1.2M legal add-back inflates adjusted EBITDA by roughly 24 bps of margin and should be tested against the underlying litigation docket before it's treated as clean<sup className="text-[#2B4BF2] font-mono not-italic ml-0.5">2</sup>.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400 mb-1.5">II. Covenant Considerations</div>
                     <p>Pro forma leverage of 2.4x leaves 1.6x of headroom against the 4.0x covenant ceiling, enough to absorb a full turn of EBITDA compression before a breach becomes a real risk.</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="text-[9px] font-mono uppercase tracking-[0.12em] text-slate-400 mb-1.5">Sources</div>
                <div className="space-y-1 text-[10px] text-slate-400 font-mono leading-relaxed">
                  <div><sup className="mr-1.5">1</sup>Q3_Financials_vFinal.xlsx — CAC_blended, LTV_blended</div>
                  <div><sup className="mr-1.5">2</sup>SPA_Meridian_vFinal.pdf — p.42, §7.2(a)</div>
                </div>
              </div>
            </div>

          {/* just a thin line, not a box */}
          <div className="border-t border-slate-100 shrink-0"></div>

          {/* Export bar — now lives inside the same container, no border/shadow/rounded/margin of its own */}
          <div className="capsa-loop shrink-0 relative bg-white overflow-hidden">

            {/* typed follow-up, same treatment as the sourcing query row */}
            <div className="px-6 pt-5 pb-6 min-h-[50px] flex items-center justify-between gap-4">

              {/* left: typed text */}
              <div className="flex-1 min-w-0 text-[15px] leading-[1.6] text-slate-800 font-light whitespace-nowrap overflow-hidden">
                <span className="inline-block align-bottom" style={{ width: 'max-content' }}>
                  <span
                    className="text-slate-900 inline-block overflow-hidden whitespace-nowrap align-bottom"
                     style={{ animation: 'capsaChatType 14s steps(200, end) infinite' }}
                  >
                                     Cut the covenant section to two sentences. Lead with the headroom number.
                  </span>
                  <span
                    className="inline-block w-[1.5px] h-[16px] bg-[#2B4BF2] align-middle ml-1"
                    style={{ animation: 'capsaCursorBlink 0.9s steps(2) infinite' }}
                  ></span>
                </span>
              </div>

              {/* right: Send — appears after typing completes */}
              <button
                className="capsa-loop shrink-0 inline-flex items-center gap-1 text-[12px] font-medium text-[#2B4BF2] hover:text-[#1e3ad1] transition-colors whitespace-nowrap"
                style={{ animationName: 'capsaSendShow' }}
              >
              SEND
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </button>
            </div>

            {/* toolbar row: +, web, files, connectors as export destinations, then Export CTA */}
            <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-100 bg-slate-50/40">
              <div className="flex items-center gap-4 text-slate-400">
                <button className="hover:text-slate-700 transition-colors" aria-label="Attach">
                  <IconPlus />
                </button>
                <button className="hover:text-slate-700 transition-colors" aria-label="Web search">
                  <IconGlobe />
                </button>
                <button className="hover:text-slate-700 transition-colors" aria-label="Browse files">
                  <IconFolder />
                </button>

                <span className="w-px h-4 bg-slate-200 mx-1"></span>

                <div className="flex items-center gap-3.5">
                  {DESTINATIONS.map((c) =>
                    c.type === 'logo' ? (
                      <BrandIcon key={c.label} domain={c.domain} label={c.label} />
                    ) : (
                      <React.Fragment key={c.label}>{c.render()}</React.Fragment>
                    )
                  )}
                </div>
              </div>

              <button className="flex items-center gap-1.5 bg-[#2B4BF2] hover:bg-[#1e3ad1] transition-colors text-white text-[12px] font-semibold tracking-wide px-5 py-2.5 rounded-lg">
                Export
                <IconDownload />
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupUnderwriting;