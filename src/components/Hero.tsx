import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* ========================================================================
   ICONS & SVGS (Refined, thinner strokes for a premium enterprise feel)
   ======================================================================== */

const IconArrowRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M14 5l7 7-7 7" />
  </svg>
);

const IconSecurity = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
);

const IconLock = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="11" width="18" height="11" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const IconDocument = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const IconChart = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9l-5 5-4-4-5 5" />
  </svg>
);

const IconCheck = ({ className = "w-3 h-3" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconActivity = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const IconSearch = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconDatabase = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

/* ========================================================================
   DATA OBJECTS & MOCK DATA
   ======================================================================== */

const LOGOS = [
  { name: "ORION", type: "serif" },
  { name: "SWISS CREDIT", type: "sans" },
  { name: "QUADRIGA", type: "mono" },
  { name: "CAPITAL D", type: "bold" },
  { name: "DEUTSCHE BETEILIGUNGS", type: "light" },
  { name: "NOVA CAPITAL", type: "serif" }
];

const METRICS = [
  { value: '$45B+', label: 'Committed capital tracked' },
  { value: '1.2M+', label: 'Documents processed monthly' },
  { value: '40+', label: 'Leading global institutions' },
  { value: '99.99%', label: 'Uptime (SOC 2 Type II)' },
];

const USE_CASES = [
  {
    title: 'Private Credit',
    desc: 'Automate covenant testing and ingest heavy credit agreements without manual data entry.',
  },
  {
    title: 'Growth Equity',
    desc: 'Standardize metric collection across diverse, high-growth portfolios instantly.',
  },
  {
    title: 'Infrastructure',
    desc: 'Track complex capital deployment schedules and long-term project yields in one unified ledger.',
  },
];

const PORTFOLIO_DATA = [
  { name: 'Meridian Renewables', arr: '$45.2M', ebitda: '$12.1M', status: 'On Track', risk: 'Low' },
  { name: 'Cobalt Grid Storage', arr: '$18.9M', ebitda: '-$2.4M', status: 'Review', risk: 'Med' },
  { name: 'Vanguard Logistics', arr: '$112.5M', ebitda: '$41.8M', status: 'On Track', risk: 'Low' },
  { name: 'Amberline Health', arr: '$34.1M', ebitda: '$4.2M', status: 'Flagged', risk: 'High' },
  { name: 'Apex Infrastructure', arr: '$280.0M', ebitda: '$88.5M', status: 'On Track', risk: 'Low' },
];

/* ========================================================================
   UI MOCKUP COMPONENTS (Light, Glassy, Enterprise)
   ======================================================================== */

const MockupSourcing = () => (
  <div className="w-full h-full bg-white/60 border border-white/40 shadow-2xl flex flex-col font-sans text-sm rounded-xl overflow-hidden backdrop-blur-xl">
    <div className="border-b border-gray-200/50 bg-white/50 px-6 py-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
          <IconSearch className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900 tracking-tight">Sourcing Engine</div>
          <div className="text-[10px] text-gray-500 font-mono tracking-wider">v2.4.1 // ACTIVE</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-emerald-200/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Scan
        </div>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-px bg-gray-200/50 border-b border-gray-200/50">
      {[
        { label: 'Inbound Teaser', value: '14', sub: 'New today' },
        { label: 'Mandate Match', value: '8', sub: '>80% fit' },
        { label: 'IC Ready', value: '3', sub: 'Draft memos' },
      ].map((stat, i) => (
        <div key={i} className="bg-white/50 p-6 text-center">
          <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-2">{stat.label}</div>
          <div className="text-3xl font-serif text-gray-900 tracking-tight mb-1">{stat.value}</div>
          <div className="text-[10px] text-gray-400">{stat.sub}</div>
        </div>
      ))}
    </div>

    <div className="flex-1 p-6 bg-white/30 overflow-hidden">
      <div className="bg-white/80 border border-gray-200/60 rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50/80 border-b border-gray-200/60 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
          <div className="col-span-4">Target Company</div>
          <div className="col-span-2 text-center">Fit Score</div>
          <div className="col-span-3">Extracted Thesis</div>
          <div className="col-span-3">Status</div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {[
            { name: 'Helios Aerospace', fit: 94, thesis: 'Strong margin expansion, govt contracts', status: 'Shortlist', color: 'emerald' },
            { name: 'Riverstone Logistics', fit: 88, thesis: 'Consolidation play in fragmented market', status: 'Shortlist', color: 'emerald' },
            { name: 'Nexus Payment Systems', fit: 42, thesis: 'EBITDA below fund minimum threshold', status: 'Pass', color: 'amber' },
            { name: 'Alt-Protein Corp', fit: 12, thesis: 'Pre-revenue, outside current mandate', status: 'Pass', color: 'gray' },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 items-center hover:bg-blue-50/50 transition-colors cursor-pointer group">
              <div className="col-span-4 font-medium text-gray-800 text-xs flex items-center gap-2">
                <IconDocument className="text-gray-400 w-4 h-4 group-hover:text-blue-500 transition-colors" />
                {row.name}
              </div>
              <div className="col-span-2 flex justify-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                  row.fit >= 80 ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                  row.fit >= 40 ? 'border-amber-500 text-amber-600 bg-amber-50' :
                  'border-gray-300 text-gray-500 bg-gray-50'
                }`}>
                  {row.fit}
                </div>
              </div>
              <div className="col-span-3 text-gray-500 text-[11px] leading-snug line-clamp-2">{row.thesis}</div>
              <div className="col-span-3">
                <span className={`px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${
                  row.status === 'Shortlist' ? 'bg-emerald-50 text-emerald-700 border-emerald-200/50' : 
                  'bg-gray-100 text-gray-500 border-gray-200'
                }`}>
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-200/60 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> AI Analyzing 14 teasers...
          </div>
          <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MockupUnderwriting = () => (
  <div className="w-full h-full bg-white/60 border border-white/40 shadow-2xl flex flex-col font-sans text-sm rounded-xl overflow-hidden backdrop-blur-xl">
    <div className="border-b border-gray-200/50 bg-white/50 px-6 py-4 flex items-center justify-between">
       <div className="text-gray-500 text-xs font-mono tracking-widest">CAPSA // MEMO_GENERATOR</div>
       <div className="flex items-center gap-2">
         <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
         <span className="text-blue-600 text-xs font-mono font-medium">Synthesizing</span>
       </div>
    </div>
    <div className="flex-1 flex">
      {/* Left Pane - Raw Data */}
      <div className="w-1/3 border-r border-gray-200/50 bg-gray-50/50 p-6 font-mono text-[11px] text-gray-500 leading-relaxed overflow-hidden">
        <div className="text-gray-800 mb-4 border-b border-gray-200 pb-3 font-semibold">Source: Q3_Financials_vFinal.xlsx</div>
        <div className="space-y-1">
          <div>Row 42: Rev_Net ... 42,450,000</div>
          <div>Row 43: COGS ...... (12,100,000)</div>
          <div>Row 44: Gr_Margin.. 30,350,000 [71.5%]</div>
          <div className="pt-4">Row 89: CAC_blended.. $4,120</div>
          <div>Row 90: LTV_blended.. $38,500</div>
          <div className="pt-4 text-amber-600/80">*Note: One-time adjustment of $1.2M in legal fees added back to adjusted EBITDA.</div>
        </div>
      </div>
      {/* Right Pane - AI Output */}
      <div className="w-2/3 p-8 bg-white/40 font-serif text-gray-700 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none"></div>
        <h4 className="text-gray-900 text-2xl font-medium mb-6 tracking-tight">Investment Committee Memo</h4>
        <div className="space-y-6 text-sm leading-relaxed relative z-10">
          <p>
            <strong className="text-gray-900 font-sans text-xs uppercase tracking-widest block mb-2 opacity-80">Financial Performance</strong>
            The target exhibits robust margin profiles, maintaining a 71.5% gross margin over the LTM period. Software revenue continues to compound efficiently.
          </p>
          <div className="bg-blue-50/80 border-l-2 border-blue-500 p-4 text-blue-900 font-sans text-xs rounded-r-md">
            <strong className="text-blue-700">Capsa Insight:</strong> LTV:CAC ratio is exceptionally strong at 9.3x, well above the peer group median of 4.5x. However, the $1.2M legal add-back requires further diligence.
          </div>
          <p>
            <strong className="text-gray-900 font-sans text-xs uppercase tracking-widest block mb-2 opacity-80">Covenant Considerations</strong>
            Pro forma leverage sits at 2.4x, providing significant headroom against the 4.0x maximum stipulated in the primary facility...
          </p>
        </div>
      </div>
    </div>
  </div>
);

const MockupPortfolio = () => (
  <div className="w-full h-full bg-white/60 border border-white/40 shadow-2xl flex flex-col font-sans text-sm rounded-xl backdrop-blur-xl overflow-hidden">
    <div className="border-b border-gray-200/50 bg-white/50 px-6 py-5 flex items-center justify-between">
      <div>
        <h4 className="text-lg font-serif text-gray-900 tracking-tight">Fund IV - Operating Metrics</h4>
        <p className="text-gray-500 text-xs mt-1 font-light">Real-time sync via ERP & Banking APIs</p>
      </div>
      <button className="bg-gray-900 text-white px-5 py-2.5 text-xs font-semibold rounded-md hover:bg-gray-800 transition-colors shadow-sm">
        Export Report
      </button>
    </div>
    
    <div className="p-0 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50/80 text-gray-500 text-[10px] uppercase tracking-widest font-semibold border-b border-gray-200/60">
            <th className="px-6 py-4">Asset</th>
            <th className="px-6 py-4">ARR</th>
            <th className="px-6 py-4">EBITDA</th>
            <th className="px-6 py-4">Risk Profile</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {PORTFOLIO_DATA.map((item, i) => (
            <tr key={i} className="hover:bg-gray-50/80 transition-colors border-b border-gray-100">
              <td className="px-6 py-5 font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-5 font-mono text-xs text-gray-500">{item.arr}</td>
              <td className="px-6 py-5 font-mono text-xs text-gray-500">{item.ebitda}</td>
              <td className="px-6 py-5">
                <span className={`inline-block w-2 h-2 rounded-full mr-3 ${
                  item.risk === 'Low' ? 'bg-emerald-500' : 
                  item.risk === 'Med' ? 'bg-amber-500' : 'bg-red-500'
                }`}></span>
                <span className="text-gray-500 text-xs">{item.risk}</span>
              </td>
              <td className="px-6 py-5">
                <span className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
                  item.status === 'On Track' ? 'bg-emerald-50 text-emerald-700 border-emerald-200/50' :
                  item.status === 'Review' ? 'bg-amber-50 text-amber-700 border-amber-200/50' :
                  'bg-red-50 text-red-700 border-red-200/50'
                }`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* ========================================================================
   MAIN PAGE COMPONENT
   ======================================================================== */

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSource, setActiveSource] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    let dir = 1;
    const id = setInterval(() => {
      i += dir;
      if (i === 3 || i === 0) dir *= -1;
      setActiveSource(i);
    }, 630);
    return () => clearInterval(id);
  }, []);

  const WORKFLOWS = [
    {
      title: "Intelligent Sourcing",
      desc: "Stop triaging the same deals. Capsa ingests flow directly from inboxes and data rooms, scoring opportunities against firm-wide mandates before a human even looks at them.",
      component: <MockupSourcing />
    },
    {
      title: "Automated Underwriting",
      desc: "Upload the data room. Capsa extracts financials, flags covenant risks, and drafts the first pass of your investment committee memo in your firm's exact template.",
      component: <MockupUnderwriting />
    },
    {
      title: "Portfolio Monitoring",
      desc: "Know when a portfolio company drifts off plan before the board call. Capsa continuously tracks KPIs and covenant compliance, linking back to source documents automatically.",
      component: <MockupPortfolio />
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 antialiased">

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative pt-16 pb-40 overflow-hidden">
        
        {/* Light, Glassy Background */}
        <div className="absolute inset-0 pointer-events-none -z-10 bg-[#FAFAFA]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-blue-100/20 rounded-full blur-[130px]"></div>
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{ 
                 backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                 backgroundSize: '4rem 4rem',
                 maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
               }}>
          </div>
        </div>

        <div className="max-w-[140rem] mx-auto px-6 md:px-12 relative z-10">
                 {/* Left-Aligned Hero Content */}
          <div className="max-w-7xl mx-auto mb-14">
            <div className="inline-flex items-center gap-3 bg-white/80 border border-gray-200/80 rounded-full px-5 py-2 mb-10 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]"></span>
              <span className="text-[11px] font-medium text-gray-600 tracking-widest uppercase">AI built for private capital</span>
            </div>

            <h1 className="font-serif text-[3.5rem] leading-[1.1] md:text-[5.5rem] md:leading-[1.05] text-gray-900 tracking-[-0.03em] mb-8 max-w-4xl">
              The AI Operating System for Private Capital
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <p className="text-[19px] text-[#011522]/70 leading-relaxed font-light max-w-2xl font-inter">
                Connect your firm’s data, run custom investment workflows, and trace every insight back to its original source, all in one governed platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all flex items-center justify-center group shadow-sm hover:shadow-md whitespace-nowrap">
                  Book a Demo <IconArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/platform" className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap text-center">
                  View platform
                </Link>
              </div>
            </div>
          </div>
        

                  {/* Premium Glass Enterprise Dashboard Card */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/50 border border-white/70 rounded-[28px] shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)] overflow-hidden backdrop-blur-2xl relative">
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/60"></div>

              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 py-5 border-b border-slate-200/50 bg-white/40">
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 tracking-wide">
                  <span className="text-slate-800 font-semibold">capsa</span>
                  <span className="text-slate-300">/</span>
                  <span>deals</span>
                  <span className="text-slate-300">/</span>
                  <span>meridian-industrials</span>
                  <span className="text-slate-300">/</span>
                  <span className="text-slate-700">diligence</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-1.5 text-slate-500 px-3 py-1.5 rounded-full text-[10px] font-medium tracking-wide border border-slate-200/70">
                    <span className="w-1 h-1 rounded-full bg-emerald-500"></span> SOC 2 Type II
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500 px-3 py-1.5 rounded-full text-[10px] font-medium tracking-wide border border-slate-200/70">
                    <span className="w-1 h-1 rounded-full bg-blue-500"></span> No training on client data
                  </span>
                </div>
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_280px] divide-y lg:divide-y-0 lg:divide-x divide-slate-200/50">

                {/* Left: Sources */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-7">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em]">Connected sources</span>
                    <span className="text-[10px] text-slate-400 font-medium">4 linked</span>
                  </div>
                  <div className="relative">
                    <style>{`
                      @keyframes capsaScan {
                        0%   { top: 0%; }
                        50%  { top: 100%; }
                        100% { top: 0%; }
                      }
                    `}</style>
                    {/* connecting thread — spans the full row stack, edge to edge */}
                    <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-200"></div>

                    {/* scan beam — pure CSS animation, hits 0% and 100% exactly */}
                    <div
                      className="absolute left-0 right-0 h-px pointer-events-none z-20"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.9), transparent)',
                        boxShadow: '0 0 10px 1px rgba(59,130,246,0.45)',
                        animation: 'capsaScan 4s linear infinite',
                      }}
                    ></div>

                    <div className="space-y-1 relative">
                      {[
                        { tag: 'PDF', name: 'Meridian: Investment memo', sub: 'Shared drive · 42 pages' },
                        { tag: 'CRM', name: 'Meridian: Deal record', sub: 'CRM · updated 2d ago' },
                        { tag: 'DOC', name: 'Management Q&A notes', sub: 'Data room · 14 pages' },
                        { tag: 'FS', name: 'Sector comparables', sub: 'FactSet · live' },
                      ].map((src, i) => (
                        <div key={i} className="relative flex items-center gap-3.5 rounded-xl px-3 py-3">
                          <span className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[9px] font-semibold shrink-0 tracking-tight ring-1 transition-colors duration-300 relative z-10 ${
                            activeSource === i ? 'ring-blue-400/60 text-blue-600' : 'ring-slate-200/80 text-slate-500'
                          }`}>
                            {src.tag}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-[14px] font-semibold text-slate-800 truncate">{src.name}</div>
                            <div className="text-[12px] text-slate-500 mt-0.5">{src.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/50">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em]">Historical knowledge</span>
                      <span className="text-[10px] text-emerald-600 font-medium">Connected</span>
                    </div>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed">
                      Past deal folders surface relevant precedent, diligence structures, and institutional context.
                    </p>
                  </div>
                </div>

                {/* Middle: Analysis */}
                <div className="p-8 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em]">Custom PE workflow</span>
                    <span className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                      <span className="w-1 h-1 rounded-full bg-blue-500"></span> 3 citations linked
                    </span>
                  </div>

                  <h4 className="text-slate-900 text-[32px] font-serif font-medium mb-6 tracking-tight">Source-grounded analysis</h4>

                  <p className="text-[15.5px] text-slate-600 leading-[1.75] mb-8">
                    Revenue quality is supported by multi-year agreements, while customer concentration remains a key diligence area.{' '}
                    <span className="text-slate-800 border-b border-slate-300 hover:border-blue-400 transition-colors cursor-pointer">Every observation stays linked to the original document</span>
                    <sup className="text-blue-500 ml-0.5 text-[10px]">1</sup>, allowing the investment team to validate the output before it enters the committee record.
                    <sup className="text-blue-500 ml-0.5 text-[10px]">2</sup>
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {[
                      { label: 'Sources', value: '18' },
                      { label: 'Citations', value: '32' },
                      { label: 'Status', value: 'Review' },
                    ].map((s, i) => (
                      <div key={i} className="rounded-xl px-4 py-3.5 bg-slate-900/[0.02] ring-1 ring-slate-900/[0.05]">
                        <div className="text-[9px] text-slate-400 uppercase tracking-[0.15em] mb-1.5">{s.label}</div>
                        <div className="text-lg font-semibold text-slate-900">{s.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="text-[13px] font-semibold text-slate-700 px-4 py-2.5 rounded-lg ring-1 ring-slate-200 hover:ring-slate-300 hover:text-slate-900 transition-all">
                      View cited source ↗
                    </button>
                    <button className="text-[13px] font-semibold text-slate-700 px-4 py-2.5 rounded-lg ring-1 ring-slate-200 hover:ring-slate-300 hover:text-slate-900 transition-all">
                      Flag for partner
                    </button>
                  </div>
                </div>

                {/* Right: Workflow & Governance */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-7">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em]">Workflow</span>
                    <span className="text-[10px] text-slate-400 font-medium">2 / 4</span>
                  </div>

                  <div className="relative mb-9">
                    <div className="absolute left-[11px] top-1 bottom-1 w-px bg-slate-200"></div>
                    <div className="space-y-6 relative">
                      {[
                        { name: 'Data ingest', status: 'Complete', done: true },
                        { name: 'Source analysis', status: 'In progress', active: true },
                        { name: 'Diligence output', status: 'Queued' },
                        { name: 'Committee review', status: 'Pending' },
                      ].map((w, i) => (
                        <div key={i} className="flex items-center gap-4 relative">
                          <span className={`w-[23px] h-[23px] rounded-full flex items-center justify-center text-[9px] font-semibold shrink-0 bg-white ${
                            w.done ? 'ring-1 ring-slate-900 bg-slate-900 text-white' :
                            w.active ? 'ring-2 ring-blue-500 text-blue-600' :
                            'ring-1 ring-slate-200 text-slate-300'
                          }`}>
                            {w.done ? <IconCheck className="w-3 h-3" /> : i + 1}
                          </span>
                          <div>
                            <div className={`text-[14px] font-semibold ${w.active ? 'text-slate-900' : w.done ? 'text-slate-700' : 'text-slate-400'}`}>{w.name}</div>
                            <div className="text-[12px] text-slate-500 mt-0.5">{w.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200/50">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">Governance</div>
                    <div className="space-y-3 text-[13px]">
                      <div className="flex justify-between items-center"><span className="text-slate-400">Deployment</span><span className="text-slate-800 font-semibold">Single-tenant</span></div>
                      <div className="flex justify-between items-center"><span className="text-slate-400">Access</span><span className="text-slate-800 font-semibold">Admin controlled</span></div>
                      <div className="flex justify-between items-center"><span className="text-slate-400">Compliance</span><span className="text-slate-800 font-semibold">GDPR · DORA</span></div>
                    </div>
                  </div>
                </div>

              </div>
                    </div>
            </div>
          </div>
      </section>

      {/* ---------- LOGOS / INSTITUTIONAL PROOF ---------- */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-[140rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center gap-10">
            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.3em]">
              Trusted by leading global institutions managing over $40B
            </p>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">
              {LOGOS.map((logo, index) => (
                <div key={index} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                  {logo.type === 'serif' && (
                    <span className="font-serif text-xl font-bold text-gray-800 tracking-tight">{logo.name}</span>
                  )}
                  {logo.type === 'sans' && (
                    <span className="font-sans text-sm font-semibold text-gray-700 tracking-widest uppercase">{logo.name}</span>
                  )}
                  {logo.type === 'mono' && (
                    <span className="font-mono text-base font-bold text-gray-800 tracking-tighter">{logo.name}</span>
                  )}
                  {logo.type === 'bold' && (
                    <span className="font-sans text-lg font-black text-gray-900 tracking-tight italic">{logo.name}</span>
                  )}
                  {logo.type === 'light' && (
                    <span className="font-sans text-[10px] font-light text-gray-600 tracking-[0.2em] uppercase leading-tight text-center">{logo.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CORE WORKFLOWS (UNIFIED ENTERPRISE DASHBOARD) ---------- */}
      <section className="py-32 bg-white">
        <div className="max-w-[140rem] mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-blue-600"></span>
              <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-[0.3em]">The Capsa Platform</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-gray-900 leading-tight mb-8 tracking-tight">
              One system for how capital actually gets deployed.
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Disconnects between CRM, data rooms, and Excel models cost basis points. Capsa connects the entire investment lifecycle into a single source of truth.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[800px]">
            
            <div className="w-full lg:w-96 bg-gray-50/50 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col">
              
              <div className="p-8 border-b border-gray-200/60 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center border border-blue-200">
                    <IconActivity className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.2em]">Platform Modules</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col py-6">
                {WORKFLOWS.map((workflow, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`text-left px-8 py-6 transition-all duration-300 relative group flex items-start gap-5 ${
                      activeTab === index 
                        ? 'bg-white shadow-sm' 
                        : 'hover:bg-gray-100/50'
                    }`}
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300 ${activeTab === index ? 'bg-blue-600' : 'bg-transparent group-hover:bg-gray-300'}`}></div>
                    
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 border ${
                      activeTab === index 
                        ? 'bg-blue-50 text-blue-600 border-blue-100 shadow-sm' 
                        : 'bg-white text-gray-400 border-gray-200 group-hover:text-gray-600'
                    }`}>
                      {index === 0 && <IconSearch className="w-5 h-5" />}
                      {index === 1 && <IconDocument className="w-5 h-5" />}
                      {index === 2 && <IconChart className="w-5 h-5" />}
                    </div>

                    <div>
                      <h3 className={`text-sm font-semibold mb-2 transition-colors duration-300 ${activeTab === index ? 'text-gray-900' : 'text-gray-600'}`}>
                        {workflow.title}
                      </h3>
                      <p className={`text-xs leading-relaxed transition-colors duration-300 ${activeTab === index ? 'text-gray-500' : 'text-gray-400'}`}>
                        {workflow.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-8 border-t border-gray-200/60 hidden lg:block">
                <div className="flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-widest">
                  <IconSecurity className="w-4 h-4 text-gray-400" />
                  <span>Enterprise-grade security</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative bg-gray-50/30 flex items-center justify-center p-8 md:p-16">
              <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
                   style={{ 
                     backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                     backgroundSize: '32px 32px'
                   }}>
              </div>
              
              <div className="relative z-10 w-full max-w-5xl h-full flex items-center justify-center">
                {WORKFLOWS[activeTab].component}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------- ENTERPRISE SECURITY ---------- */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-[140rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl text-gray-900 leading-tight mb-8 tracking-tight">
              Institutional grade infrastructure.
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-16">
              We understand that private capital data is your most guarded asset. Capsa is engineered from the ground up for absolute data segregation, auditability, and compliance.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <IconLock className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Zero-Retention LLMs</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Models process your documents statelessly. Your deal data is never used to train foundational models. Period.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <IconDatabase className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Dedicated VPC Deployments</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    For enterprise clients, Capsa can be deployed in a dedicated Virtual Private Cloud, physically isolating your compute and storage.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <IconSecurity className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">SOC 2 Type II & GDPR Compliant</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Continuous monitoring and independent auditing ensure controls meet the highest regulatory standards globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 p-10 md:p-14 rounded-2xl relative overflow-hidden shadow-xl">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100"></div>
             <div className="font-mono text-sm text-gray-500 space-y-5">
               <p className="text-gray-400">{`> Executing security protocols...`}</p>
               <p className="text-emerald-600 flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> [OK] End-to-end encryption verified</p>
               <p className="text-emerald-600 flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> [OK] SSO Identity Provider synced</p>
               <p className="text-emerald-600 flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> [OK] Audit logs actively streaming</p>
               <p className="mt-10 text-gray-400">{`> Pinging dedicated tenant database...`}</p>
               <p className="text-blue-600 animate-pulse flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Establishing secure tunnel...</p>
             </div>
          </div>
        </div>
      </section>

      {/* ---------- USE CASES ---------- */}
      <section className="py-32 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-[140rem] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="font-serif text-4xl md:text-6xl text-gray-900 leading-tight mb-8 tracking-tight">
              Tailored for complex asset classes.
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Generic tools break down on bespoke deals. Capsa's data extraction models are specifically trained on private markets documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {USE_CASES.map((useCase, i) => (
              <div key={i} className="bg-white border border-gray-200 p-12 rounded-xl hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <IconChart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- METRICS ---------- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[140rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-gray-100">
            {METRICS.map((metric, i) => (
              <div key={i} className={i !== 0 ? "pl-12" : ""}>
                <div className="font-serif text-4xl md:text-6xl font-semibold text-gray-900 mb-3 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-40 bg-[#FAFAFA] relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-100/50 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl text-gray-900 leading-tight mb-10 tracking-tight">
            See Capsa on your own pipeline.
          </h2>
          <p className="text-xl text-gray-500 font-light mb-16 max-w-2xl mx-auto">
            Bring a live deal and we'll walk through sourcing, underwriting, and monitoring using your own data—no generic demo environment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/demo" className="w-full sm:w-auto bg-gray-900 text-white px-10 py-5 rounded-lg text-base font-semibold hover:bg-gray-800 transition-colors shadow-lg">
              Book a technical demo
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 rounded-lg hover:border-gray-400 bg-white shadow-sm">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
        <div className="max-w-[140rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
            
            <div className="col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-8">
                <IconDatabase className="w-5 h-5 text-gray-900" />
                <span className="font-serif text-2xl font-semibold tracking-tight text-gray-900">capsa.ai</span>
              </Link>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                The definitive AI operating system built exclusively for private capital markets and institutional investors.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-semibold text-gray-900 uppercase tracking-[0.2em] mb-8">Platform</h4>
              <ul className="space-y-5 text-sm text-gray-500">
                <li><Link to="/sourcing" className="hover:text-blue-600 transition-colors">Sourcing</Link></li>
                <li><Link to="/underwriting" className="hover:text-blue-600 transition-colors">Underwriting</Link></li>
                <li><Link to="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio Monitoring</Link></li>
                <li><Link to="/security" className="hover:text-blue-600 transition-colors">Security & Trust</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-semibold text-gray-900 uppercase tracking-[0.2em] mb-8">Company</h4>
              <ul className="space-y-5 text-sm text-gray-500">
                <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                <li><Link to="/news" className="hover:text-blue-600 transition-colors">Press & News</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-2">
              <h4 className="text-[10px] font-semibold text-gray-900 uppercase tracking-[0.2em] mb-8">Stay Updated</h4>
              <p className="text-sm text-gray-500 mb-6">Subscribe to our newsletter for product updates and private market AI insights.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-l-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 outline-none placeholder:text-gray-400" 
                  required 
                />
                <button type="submit" className="bg-gray-900 text-white px-6 py-3.5 rounded-r-md text-sm font-semibold hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>

          </div>

          <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Capsa AI, Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-8 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-gray-900 transition-colors">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}