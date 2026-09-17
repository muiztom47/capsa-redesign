import React from 'react';

/* ============================================================
   Capsa.ai — logo.dev brand icons
   Publishable keys are safe to use client-side (logo.dev says so
   themselves in the dashboard). Swap this if you ever rotate it.
   ============================================================ */
const LOGO_DEV_TOKEN = 'pk_KnI5jJk1QmKibGPEWPdFjw';

const brandLogoUrl = (domain: string) =>
  `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=64&format=png&retina=true`;

/* ---------- Microsoft product icons ----------
   logo.dev resolves company domains, not individual product marks, so
   microsoft.com would return the same Microsoft logo for SharePoint,
   Word, and Excel alike. These three are hand-coded instead, using each
   product's actual icon color, so they read correctly at a glance. */

const IconSharePoint = () => (
  <div className="w-[18px] h-[18px] rounded-[5px] bg-[#036C70] flex items-center justify-center shrink-0">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="7" r="6" fill="#1A9BA1" />
      <circle cx="16" cy="10" r="5" fill="#37C6D0" />
      <circle cx="10" cy="16" r="5.5" fill="#7CDBE6" />
    </svg>
  </div>
);

const IconWord = () => (
  <img src="/images/wordlogo.webp" alt="Word" width={18} height={18} className="shrink-0" />
);

const IconExcel = () => (
  <img src="/images/excellogo.webp" alt="Excel" width={18} height={18} className="shrink-0" />
);

/* ---------- connector toolbar order ----------
   'logo' entries pull a live, colored brand mark from logo.dev.
   'custom' entries render a hand-coded icon component above.
   The last two are unidentified from the reference screenshot —
   swap the domain/component once you confirm what they are. */
const CONNECTORS: Array<
  | { type: 'logo'; domain: string; label: string }
  | { type: 'custom'; render: () => React.ReactNode; label: string }
> = [
  {
    type: 'custom',
    render: () => <img src="/images/sharepointlogo.webp" alt="SharePoint" width={18} height={18} className="shrink-0" />,
    label: 'SharePoint',
  },
  {
    type: 'custom',
    render: () => <img src="/images/salesforcelogo.webp" alt="Salesforce" width={18} height={18} className="shrink-0" />,
    label: 'Salesforce',
  },
  { type: 'logo', domain: 'hubspot.com', label: 'HubSpot' },
  { type: 'custom', render: () => <IconWord />, label: 'Word' },
  { type: 'custom', render: () => <IconExcel />, label: 'Excel' },
  // TODO: confirm and swap — placeholder domains, currently unverified
  {
    type: 'custom',
    render: () => (
      <img
        src="https://framerusercontent.com/images/C1SuE8L4ADKWyfGSV5425em60o.svg?width=24&height=24"
        alt="Integration"
        width={18}
        height={18}
        className="shrink-0"
      />
    ),
    label: 'Integration',
  },
  {
    type: 'custom',
    render: () => <img src="/images/dropboxlogo.webp" alt="Dropbox" width={18} height={18} className="shrink-0" />,
    label: 'Dropbox',
  },
];

/* ---------- small inline icons (no external icon-lib dependency) ---------- */

const IconPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
  </svg>
);

const IconGlobe = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="9" />
    <path
      strokeLinecap="round"
      d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z"
    />
  </svg>
);

const IconFolder = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
    />
  </svg>
);

const IconArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
  </svg>
);

/* logo.dev connector icon — full color, subtle lift on hover, and it
   just disappears rather than showing a broken-image icon if a domain
   ever fails to resolve */
const BrandIcon = ({ domain, label }: { domain: string; label: string }) => (
  <img
    src={brandLogoUrl(domain)}
    alt={label}
    width={18}
    height={18}
    loading="lazy"
    className="rounded-[5px] shrink-0 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-200"
    onError={(e) => {
      (e.currentTarget as HTMLImageElement).style.display = 'none';
    }}
  />
);

/* ============================================================
   MAIN MOCKUP
   Depends on global keyframes already declared in Hero.tsx's
   <style> block: capsaTypeReveal, capsaCursorBlink, capsaCursorVisible,
   capsaCursorMove, capsaClick, capsaClickGlow, capsaRipple,
   capsaLoadingBar, capsaResultIn, capsaPulse.
   ============================================================ */
const MockupSourcing = () => (
  <div className="w-full h-auto bg-white flex flex-col font-sans relative overflow-hidden">
<style>{`
  @keyframes capsaTypeReveal {
    0%, 2%    { width: 0%; }
    32%, 88%  { width: 100%; }
    94%, 100% { width: 0%; }
  }
  @keyframes capsaCursorVisible {
    0%, 30%   { opacity: 1; }
    31%, 94%  { opacity: 0; }
    96%, 100% { opacity: 1; }
  }
  @keyframes capsaCursorBlink {
    0%, 49%   { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
 @keyframes capsaCursorMove {
    0%, 31% { transform: translate(-36px, -52px) scale(1); opacity: 0; }
    32%  { opacity: 1; }
    34%  { transform: translate(-4px, -4px) scale(1); opacity: 1; }
    36%  { transform: translate(0px, 0px) scale(0.88); opacity: 1; }
    38%  { transform: translate(0px, 0px) scale(1); opacity: 1; }
    86%  { transform: translate(0px, 0px) scale(1); opacity: 1; }
    100% { transform: translate(0px, 0px) scale(1); opacity: 0; }
  }
  @keyframes capsaClick {
    0%, 38%   { transform: scale(1); }
    40%       { transform: scale(0.94); }
    44%, 100% { transform: scale(1); }
  }
  @keyframes capsaClickGlow {
    0%, 37%   { opacity: 0; transform: scale(0.6); }
    40%       { opacity: 1; transform: scale(1); }
    52%       { opacity: 0; transform: scale(1.8); }
    100%      { opacity: 0; transform: scale(1.8); }
  }
  @keyframes capsaRipple {
    0%, 37%   { opacity: 0; transform: scale(1); }
    39%       { opacity: 0.9; transform: scale(1); }
    52%       { opacity: 0; transform: scale(1.6); }
    100%      { opacity: 0; transform: scale(1.6); }
  }
  @keyframes capsaLoadingBar {
    0%, 40%   { width: 0%; opacity: 0; }
    42%       { opacity: 1; }
    58%       { width: 100%; opacity: 1; }
    64%       { width: 100%; opacity: 0; }
    100%      { width: 100%; opacity: 0; }
  }
  @keyframes capsaResultIn1 {
    0%, 66%   { opacity: 0; transform: translateY(8px); }
    72%, 88%  { opacity: 1; transform: translateY(0); }
    94%, 100% { opacity: 0; transform: translateY(8px); }
  }
  @keyframes capsaResultIn2 {
    0%, 70%   { opacity: 0; transform: translateY(8px); }
    76%, 88%  { opacity: 1; transform: translateY(0); }
    94%, 100% { opacity: 0; transform: translateY(8px); }
  }
  @keyframes capsaResultIn3 {
    0%, 74%   { opacity: 0; transform: translateY(8px); }
    80%, 88%  { opacity: 1; transform: translateY(0); }
    94%, 100% { opacity: 0; transform: translateY(8px); }
  }
  @keyframes capsaPulse {
    0%, 100% { opacity: 0.35; }
    50%      { opacity: 1; }
  }
`}</style>

    {/* Chrome */}
    <div className="flex items-center justify-between px-8 py-4 border-b border-slate-200/70 shrink-0">
      <div className="flex items-center gap-4">
        <span className="text-[13px] font-semibold text-slate-900 tracking-tight">Ask Capsa</span>
        <span className="text-slate-300">/</span>
        <span className="text-[12px] text-slate-500 font-mono">Sourcing workspace</span>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400">Q3 2026</span>
    </div>

    {/* Prompt card — modeled on the capsa.ai/product multi-source search bar */}
    <div className="px-8 pt-8 pb-4 shrink-0">
      <div className="relative rounded-lg border border-[#2B4BF2]/40 bg-white overflow-hidden">

        {/* typed query */}
     <div className="px-6 pt-6 pb-8 min-h-[64px] text-[16px] leading-[1.6] text-slate-800 font-light whitespace-nowrap overflow-hidden">
  <span className="inline-block align-bottom" style={{ width: 'max-content' }}>
    <span
      className="text-slate-900 inline-block overflow-hidden whitespace-nowrap align-bottom"
      style={{ animation: 'capsaTypeReveal 8s steps(200, end) infinite' }}
    >
   Find me add-on targets in European healthcare with&nbsp;&nbsp;
      <span className="inline-block rounded-md px-1.5 -mx-0.5 font-medium bg-[#2B4BF2]/10 text-[#2B4BF2]">
        EBITDA &gt; €5M
      </span>
    </span>
    <span
      className="inline-block w-[2px] h-[18px] bg-[#2B4BF2] align-middle ml-1"
      style={{
        animation: 'capsaCursorBlink 0.9s steps(2) infinite, capsaCursorVisible 8s steps(1) infinite',
      }}
    ></span>
  </span>
</div>

        {/* toolbar row: +, web, files, connectors, then the CTA */}
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
              {CONNECTORS.map((c) =>
                c.type === 'logo' ? (
                  <BrandIcon key={c.label} domain={c.domain} label={c.label} />
                ) : (
                  <React.Fragment key={c.label}>{c.render()}</React.Fragment>
                )
              )}
            </div>
          </div>

          <button
            className="relative flex items-center gap-1.5 bg-[#2B4BF2] text-white text-[12px] font-semibold tracking-wide px-5 py-2.5 rounded-lg"
            style={{ animation: 'capsaClick 8s ease-in-out infinite' }}
          >
            Ask Capsa
            <IconArrowUpRight />
            <span
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{ border: '2px solid #2B4BF2', animation: 'capsaRipple 8s ease-out infinite' }}
            ></span>
          </button>
        </div>

        {/* animated cursor, arriving at the button */}
        <div
          className="absolute pointer-events-none z-30"
          style={{ animation: 'capsaCursorMove 8s cubic-bezier(0.22,0.9,0.3,1) infinite', bottom: '14px', right: '96px' }}
        >
          <span
            className="absolute rounded-full"
            style={{
              width: '28px',
              height: '28px',
              left: '-4px',
              top: '-4px',
              background: 'radial-gradient(circle, rgba(43,75,242,0.35) 0%, transparent 70%)',
              animation: 'capsaClickGlow 8s cubic-bezier(0.65,0,0.35,1) infinite',
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
              <path
                d="M21 3L11 12.8"
                stroke="#94A3B8"
                strokeWidth="0.9"
                strokeLinecap="round"
              />
            </g>
          </svg>

        </div>
      </div>

      <div className="mt-3 h-[2px] bg-slate-100 overflow-hidden rounded-full">
        <div className="h-full bg-[#2B4BF2]" style={{ animation: 'capsaLoadingBar 8s ease-in-out infinite' }}></div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400">
        <span>Scanning 2,140 documents across 4 mandates</span>
        <span style={{ animation: 'capsaPulse 1.6s ease-in-out infinite' }} className="text-[#2B4BF2]">
          running…
        </span>
      </div>
    </div>

 {/* Results */}
    <div className="overflow-hidden px-8 pb-6">
      <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 mb-3 mt-4">
        Ranked matches · 2
      </div>
      <div className="space-y-2">
        {[
          { name: 'Helvetia Diagnostics', meta: 'Teaser · Data room · 09/12', score: 94, reason: 'EBITDA €6.2M · fragmented EU market' },
          { name: 'Nordklinik Group', meta: 'Precedent · 2024 · passed', score: 88, reason: 'EBITDA €5.8M · 6 clinic roll-up' },
        ].map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 rounded-md border border-slate-200/80 bg-white px-4 py-3 hover:border-[#2B4BF2]/40 hover:bg-[#2B4BF2]/[0.02] transition-colors"
            style={{
              animation: `${['capsaResultIn1', 'capsaResultIn2', 'capsaResultIn3'][i]} 8s ease-out infinite`,
              opacity: 0,
            }}
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-medium text-slate-900">{r.name}</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-400">{r.meta}</span>
              </div>
              <div className="text-[11.5px] text-slate-500 mt-0.5 truncate">{r.reason}</div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400">fit</span>
              <span className="text-[16px] font-mono tabular-nums text-[#2B4BF2] font-semibold">{r.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

 
  </div>
);

export default MockupSourcing;