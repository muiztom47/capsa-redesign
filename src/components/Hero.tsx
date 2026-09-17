import React, { useState, useEffect, useRef } from 'react';
import MockupSourcing from './mockups/MockupSourcing';
import MockupUnderwriting from './mockups/MockupUnderwriting';
import MockupEvaluate from './mockups/MockupEvaluate';
import MockupPortfolio from './mockups/MockupPortfolio';

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
  { src: "/images/bu-deutsche.svg", alt: "BU Deutsche Unternehmenscapital" },
  { src: "/images/genui.svg", alt: "GENUI" },
  { src: "/images/novum.svg", alt: "Novum Capital" },
  { src: "/images/bba.svg", alt: "BBA" },
  { src: "/images/bregal.svg", alt: "Bregal" },
  { src: "/images/hannover-finanz.svg", alt: "Hannover Finanz" },
  { src: "/images/quadriga.svg", alt: "Quadriga Capital" },
  { src: "/images/capital-d.svg", alt: "Capital D" },
];

const METRICS = [
  { value: '$15T', label: 'Private capital AUM' },
  { value: '48h → 5min', label: 'Financial data processing' },
  { value: '100x', label: 'Companies analyzed' },
  { value: '$35B', label: 'Manual search costs' },
];

const TESTIMONIALS = [
  {
    quote: 'Capsa is like having an AI member on our IC, providing us sharper insights and making us more competitive.',
    name: 'Mario Puclin',
    role: 'Investment Manager',
    firm: 'Hannover Finanz',
    logo: (
      <img
        src="/images/hannover-finanz.svg"
        alt="Hannover Finanz"
        className="h-7 w-auto"
        draggable={false}
      />
    ),
  },
  {
    quote: 'We move faster, with more conviction. Capsa is now essential to our investment processes.',
    name: 'Deniz Varan',
    role: 'Senior Investment Manager',
    firm: 'Quadriga Capital',
    logo: (
      <img
        src="/images/quadriga.svg"
        alt="Quadriga Capital"
        className="h-7 w-auto"
        draggable={false}
      />
    ),
  },
  {
    quote: "Capsa connects the dots across our entire firm's knowledge base. Pursuing our disruption theme, we spot patterns faster and move on opportunities with more conviction.",
    name: 'Lucas Angibeau',
    role: 'Senior Associate',
    firm: 'Capital D',
    logo: (
      <img
        src="/images/capital-d.svg"
        alt="Capital D"
        className="h-7 w-auto"
        draggable={false}
      />
    ),
  },
];

/* ========================================================================
   FAQ — objection-focused, mapped to PE buyer concerns
   ======================================================================== */

const FAQS = [
  {
    q: 'Where does Capsa sit in our existing stack?',
    a: 'Alongside it. Capsa sits on top of the systems you already run — your data room, CRM, ERP, and shared drives. Nothing is migrated, nothing is replaced, and no downstream workflows are disrupted.',
  },
  {
    q: 'How does the model avoid hallucination?',
    a: 'Every output is grounded. Each claim links back to the exact source document and page it came from, so your team validates findings before they enter the committee record.',
  },
  {
    q: 'What happens to our data?',
    a: 'It stays yours. Capsa is deployed single-tenant, access is admin-controlled, and no client data is ever used to train underlying models. SOC 2 Type II, GDPR, and DORA-ready.',
  },
  {
    q: 'How long until a team is live?',
    a: 'Weeks, not quarters. Capsa connects to your existing sources, mirrors your firm’s templates and mandate logic, and goes live on a live deal — not a synthetic sandbox.',
  },
  {
    q: 'Do we need an engineering team to run it?',
    a: 'No. Setup is handled by our team, workflows are configured to your firm’s existing standards, and day-to-day usage is entirely within the investment and portfolio teams.',
  },
  {
    q: 'How is this different from a general-purpose AI tool?',
    a: 'Generic tools are not built for private capital. Capsa is purpose-built around the deal lifecycle: sourcing, diligence, IC, close, and portfolio monitoring — with the governance those stages demand.',
  },
];

/* ========================================================================
   UI MOCKUP COMPONENTS (Light, Glassy, Enterprise)
   These are the full-size "product video" panels used in the workflow
   showcase further down — deliberately larger and denser than a card icon.
   ======================================================================== */

/* numbered source chip */
const SourceChip = ({ n }) => (
  <span className="inline-flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#2B4BF2]/10 text-[#2B4BF2] text-[10px] font-mono align-middle mx-1 cursor-pointer hover:bg-[#2B4BF2]/20 transition-colors">
    {n}
  </span>
);



/* ========================================================================
   WORKFLOW LIFECYCLE DATA — drives the alternating showcase section
   ======================================================================== */

const STAGES = [
  {
    n: '01',
    eyebrow: 'Source',
    tagline: 'Find the deal',
    title: 'Sourcing & add-on search',
    desc: "Search across CRM, data rooms, and internal records to find proprietary and add-on targets that match your firm's active investment mandates.",
    render: () => <MockupSourcing />,
    tall: true,
  },
  {
    n: '02',
    eyebrow: 'Evaluate',
    tagline: 'Diligence & research',
    title: 'A single diligence workspace',
    desc: "Work across financial models, legal documents, trading comps, and market research in one diligence workspace, with key findings linked directly to supporting evidence.",
    tabs: ['Trading Comps', 'Legal Review', 'Enterprise Search'],
    render: (activeTab, setActiveTab) => <MockupEvaluate activeTab={activeTab} setActiveTab={setActiveTab} />,
  },
  {
    n: '03',
    eyebrow: 'Execute',
    tagline: 'Committee & close',
    title: 'IC materials creation',
    desc: "Build investment committee memos from deal financials, diligence findings, market data, and risk flags, using your firm’s existing templates and review process.",
    render: () => <MockupUnderwriting />,
  },
 {
  n: '04',
  eyebrow: 'Monitor',
  tagline: 'Post-close',
  title: 'Portfolio tracking & scheduled workflows',
  desc: "Monitor portfolio company KPIs, debt covenants, and reporting requirements across connected sources, with recurring workflows running on schedule.",
  render: () => <MockupPortfolio />,
  tall: true,
},
];

/* ========================================================================
   MAIN PAGE COMPONENT
   ======================================================================== */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSource, setActiveSource] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [workflowsVisible, setWorkflowsVisible] = useState(false);
  const workflowsRef = useRef(null);

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

  // Auto-advance the Evaluate stage's internal tabs so the showcase
  // panel feels alive even before anyone touches it. Depends on
  // [activeTab] so a manual click resets the 30s countdown — whatever
  // tab the user picks stays put for a full 30s before moving on.
  useEffect(() => {
    const id = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 30000);
    return () => clearTimeout(id);
  }, [activeTab]);

  // One orchestrated reveal for the workflow showcase, the first time it
  // scrolls into view, rather than animating every section on every scroll.
  useEffect(() => {
    const el = workflowsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWorkflowsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

 const scrollToPlatform = (e) => {
    e.preventDefault();
    const element = document.getElementById('platform');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 antialiased">


      {/* ---------- HERO SECTION ---------- */}
      <section className="relative pt-16 pb-20 overflow-hidden">

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

        <div className="max-w-[100rem] mx-auto px-6 md:px-12 relative z-10">
                 {/* Left-Aligned Hero Content */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-3 bg-white/80 border border-gray-200/80 rounded-full px-5 py-2 mb-10 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]"></span>
              <span className="text-[11px] font-medium text-gray-600 tracking-widest uppercase">AI built for private capital</span>
            </div>

            <h1 className="font-serif text-[3.5rem] leading-[1.1] md:text-[5.5rem] md:leading-[1.05] text-gray-900 tracking-[-0.03em] mb-8 max-w-4xl">
              The AI Operating System for Private Capital
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <p className="text-[19px] text-[#011522]/80 leading-relaxed font-light max-w-3xl font-inter">
Connect your firm’s data, automate the work between sourcing and IC, and give every investment decision the context, evidence, and institutional memory behind it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              
<a  href="https://capsa.ai/contact"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#0508b3] text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#2a3ad4] transition-all flex items-center justify-center group shadow-sm hover:shadow-md whitespace-nowrap"
>
  Book a Demo <IconArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
</a>
              
                            <a 
                  href="#platform" 
                  onClick={scrollToPlatform}
                  className="border border-gray-200 text-gray-700 px-8 py-4 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap text-center cursor-pointer"
                >
                  Explore the product
                </a>
              </div>
            </div>
          </div>


                  {/* Premium Glass Enterprise Dashboard Card */}
          <div>
<div className="bg-white/60 border border-slate-200/60 rounded-[28px] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)] overflow-hidden backdrop-blur-2xl relative">
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
              <p className="text-[11.5px] text-[#011522] opacity-70 leading-relaxed">
  Past deal folders surface relevant precedent, diligence structures, and institutional context.
</p>
                  </div>
                </div>
                {/* Middle: Analysis */}
                <div className="p-8 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em]">Deal Intelligence</span>
                    <span className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> Analysing · 2 sources cited
                    </span>
                  </div>

           
        <h4 className="text-slate-900 text-[28px] pt-2 font-serif font-medium mb-6 tracking-tight leading-tight">“What’s revenue quality like at Meridian”</h4>

<p className="text-[15.5px] text-slate-600 leading-[1.75] mb-8">

  ARR expanded 24% YoY to{' '}
  <span className="text-slate-800 border-b border-slate-300 hover:border-blue-400 transition-colors cursor-pointer">$18.4M</span>
  <sup className="text-blue-500 ml-0.5 text-[10px]">1</sup>
  , driven by 112% net retention across core accounts. However, the top three customers represent{' '}
  <span className="text-slate-800 border-b border-slate-300 hover:border-blue-400 transition-colors cursor-pointer">42% of total revenue</span>
  <sup className="text-blue-500 ml-0.5 text-[10px]">2</sup>
  , with Vantex Logistics’ primary contract expiring in Q3.
</p>
                  
                                    <div className="flex items-center gap-5 mb-8 px-4 py-3.5 rounded-xl bg-slate-900/[0.02] ring-1 ring-slate-900/[0.05] text-[12.5px] text-slate-500">
                    <span><span className="font-semibold text-slate-800">18</span> sources</span>
                    <span className="w-px h-3 bg-slate-300"></span>
                    <span><span className="font-semibold text-slate-800">32</span> citations</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="text-[13px] font-semibold text-slate-700 px-4 py-2.5 rounded-lg ring-1 ring-slate-200 hover:ring-slate-300 hover:text-slate-900 transition-all">
                      View cited sources ↗
                    </button>
                    <button className="text-[13px] font-semibold text-slate-700 px-4 py-2.5 rounded-lg ring-1 ring-slate-200 hover:ring-slate-300 hover:text-slate-900 transition-all">
                      Flag for partner review
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
                       { num: 1, name: 'Data ingest', status: 'Complete', done: true },
{ num: 2, name: 'Source analysis', status: 'In progress', active: true },
{ num: 3, name: 'Diligence output', status: 'Queued' },
{ num: 4, name: 'Committee review', status: 'Pending' },
].map((w, i) => (
                        <div key={i} className="flex items-center gap-4 relative">
                          <span className={`w-[23px] h-[23px] rounded-full flex items-center justify-center text-[9px] font-semibold shrink-0 bg-white ${
                         w.done ? 'ring-1 ring-slate-900 bg-white text-slate-900' :
                             w.active ? 'ring-2 ring-blue-500 text-blue-600 animate-pulse' :
                            'ring-1 ring-slate-200 text-slate-300'
                          }`}>
                          {w.num}
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
<section className="relative py-8 bg-gradient-to-b from-[#0F0F1A] to-[#050507] border-y border-white/10 overflow-hidden">
  {/* ambient shine — makes the surface feel reflective rather than flat */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

  <div className="max-w-[140rem] mx-auto px-6 md:px-12 relative">
    <div className="flex flex-col items-center gap-4">
      <p className="text-[11px] font-medium text-white/50 uppercase tracking-[0.3em] mb-2 text-center">
        Trusted by leading global institutions managing over $40B
      </p>

            {/* Marquee */}
            <div className="relative w-full">
              {/* edge fades */}
<div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A12] to-transparent z-10"></div>
<div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A12] to-transparent z-10"></div>
              <style>{`
                @keyframes logoMarquee {
                  0%   { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}</style>

              <div
                className="flex items-center gap-24 w-max"
                style={{ animation: 'logoMarquee 40s linear infinite' }}
              >
           
             {[...LOGOS, ...LOGOS].map((logo, index) => (
  <div
  key={index}
  className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
><img
  src={logo.src}
  alt={logo.alt}
  className="h-7 md:h-8 w-auto select-none pointer-events-none brightness-0 invert opacity-70"
  draggable={false}
/>
  </div>
))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CORE WORKFLOWS (ALTERNATING, FULL-SIZE SHOWCASE) ---------- */}
      <section id="platform" ref={workflowsRef} className="py-32 bg-[#FAFAFA] border-t border-gray-100 overflow-hidden scroll-mt-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">

          {/* Section heading */}
          <div className="max-w-3xl mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#011522]"></span>
              <span className="text-[11px] font-semibold text-[#011522] uppercase tracking-[0.25em]">The Capsa Platform</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-[#011522] leading-[1.05] mb-7 tracking-tight">
              Workflows built for private capital teams.
            </h2>
            <p className="text-lg text-[#011522]/60 leading-relaxed font-light">
              Capsa connects the data, analysis, and workflows behind each stage of the investment process, from sourcing and diligence through committee, close, and portfolio monitoring.
            </p>
          </div>

          {/* Alternating showcase rows — one per lifecycle stage */}
          <div className="space-y-24">
            {STAGES.map((stage, i) => (
              <div
                key={stage.n}
              className={`grid grid-cols-1 ${
  i % 2 === 1
    ? 'lg:grid-cols-[1fr_minmax(0,420px)]'
    : 'lg:grid-cols-[minmax(0,420px)_1fr]'
} gap-14 lg:gap-20 items-center transition-all duration-700 ease-out ${
  i !== 0 ? 'pt-24 border-t border-gray-200/70' : ''
} ${workflowsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}

                style={{ transitionDelay: workflowsVisible ? `${i * 140}ms` : '0ms' }}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-baseline gap-5 mb-6">
                    <span className="font-serif text-6xl md:text-7xl text-[#011522]/15 leading-none tracking-tight">{stage.n}</span>
                    <div>
                      <div className="text-[11px] font-semibold text-blue-600 tracking-[0.25em] uppercase mb-1">{stage.eyebrow}</div>
                      <div className="text-[13px] text-[#011522]/45">{stage.tagline}</div>
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl md:text-[2.75rem] leading-[1.1] text-[#011522] tracking-tight mb-5 max-w-md">
                    {stage.title}
                  </h3>
                  <p className="text-[15.5px] text-[#011522]/60 leading-[1.75] max-w-md mb-8">
                    {stage.desc}
                  </p>
                  {stage.tabs && (
                    <div className="flex flex-wrap gap-2">
                      {stage.tabs.map((t, ti) => (
                        <button
                          key={t}
                          onClick={() => setActiveTab(ti)}
                          className={`px-4 py-2 rounded-full text-[12px] font-semibold transition-colors border ${
                            activeTab === ti
                              ? 'bg-[#011522] text-white border-[#011522]'
                              : 'text-[#011522]/55 border-[#011522]/20 hover:border-[#011522]/40'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Showcase panel */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`rounded-[12px] border border-slate-200 overflow-hidden ${
  stage.tall ? 'h-auto' : 'h-[440px] md:h-[560px]'
}`}>
                    {stage.render(activeTab, setActiveTab)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ENTERPRISE SECURITY ---------- */}
      <section
        className="py-20 md:py-24 border-t border-[#1E1F2E] relative overflow-hidden"
        style={{ backgroundColor: '#05050F' }}
      >
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: heading, description, and three inline trust points */}
            <div>
              <h2 className="font-serif text-4xl md:text-[3.5rem] leading-[1.08] text-[#FAFAF9] tracking-tight mb-7 max-w-3xl">
                Security and compliance<br />
                you can trust
              </h2>
              <p className="text-[17px] text-[#E5E5E5] leading-[1.7] font-light mb-12 max-w-3xl">
                Capsa is independently audited and continuously monitored to meet the compliance expectations of regulated financial institutions.
              </p>

              {/* compact inline trust points */}
              <div className="space-y-5">
                {[
                  { icon: <IconLock className="w-4 h-4" />, label: 'No training on client data' },
                  { icon: <IconSecurity className="w-4 h-4" />, label: 'SOC 2 Type II' },
                  { icon: <IconDatabase className="w-4 h-4" />, label: 'GDPR, DORA-ready' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3.5">
                    <span className="text-[#727276] shrink-0">{p.icon}</span>
                    <span className="text-[15px] text-[#E5E5E5] font-light">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 2×2 compliance badge grid — hairline cell dividers, no outer fill */}
            <div
              className="grid grid-cols-2"
              style={{
                borderTop: '1px solid #1E1F2E',
                borderLeft: '1px solid #1E1F2E',
              }}
            >
              {[
                { src: 'https://framerusercontent.com/images/sjTaDP8QeVltg5FFfM4oNc958M.png', alt: 'AICPA SOC 2' },
                { src: 'https://framerusercontent.com/images/aMU5VbtvMLQPgMkMcuPOwrWihSw.png', alt: 'GDPR compliant — EU' },
                { src: 'https://framerusercontent.com/images/Q4JsFopfw372TXU7efDQ3Fmi0Jc.png', alt: 'APP certified' },
                { src: 'https://framerusercontent.com/images/wWDJ16ZSX4oy39M8BoU7bT0TvbE.png', alt: 'California Privacy Rights Act' },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="aspect-[3/2] flex items-center justify-center"
                  style={{
                    backgroundColor: '#05050F',
                    borderRight: '1px solid #1E1F2E',
                    borderBottom: '1px solid #1E1F2E',
                  }}
                >
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="w-[62%] h-[62%] object-contain select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="py-32 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">

          {/* Header row: eyebrow on the left, count on the right — signals precision */}
          <div className="flex items-end justify-between mb-16 pb-6 border-b border-gray-200/70">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#011522]"></span>
                <span className="text-[11px] font-semibold text-[#011522] uppercase tracking-[0.25em]">Operator perspective</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-[#011522] leading-[1.05] tracking-tight max-w-3xl">
                What leading investors say about Capsa.
              </h2>
            </div>
            <span className="hidden md:block text-[11px] font-mono uppercase tracking-[0.2em] text-[#011522]/40 pb-1">
              03 / 03 references
            </span>
          </div>

          {/* Three-column reference cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200/70 border border-gray-200/70">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white p-10 lg:p-12 flex flex-col hover:bg-[#FAFAFA]/60 transition-colors duration-500"
              >
                {/* logo lockup */}
                <div className="mb-12 h-8 flex items-center">{t.logo}</div>

                {/* quote */}
                <blockquote className="font-serif text-[22px] leading-[1.4] text-[#011522] tracking-tight mb-16 flex-1">
                  <span className="text-[#011522]/25 mr-1 select-none">&ldquo;</span>
                  {t.quote}
                </blockquote>

                {/* attribution */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="text-[14px] font-medium text-[#011522] tracking-tight">{t.name}</div>
                  <div className="text-[12.5px] text-[#011522]/50 font-light mt-1">
                    {t.role} <span className="text-[#011522]/30 mx-1">·</span> {t.firm}
                  </div>
                </div>
              </div>
            ))}
          </div>

  

        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">

          {/* Section header — editorial split, eyebrow left, headline right */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_1fr] gap-12 lg:gap-20 mb-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#011522]"></span>
                <span className="text-[11px] font-semibold text-[#011522] uppercase tracking-[0.25em]">
                  Frequently asked
                </span>
              </div>
              <p className="text-[13.5px] text-[#011522]/50 leading-[1.7] font-light max-w-xs">
                The questions every investment committee asks before signing off on a new system.
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-[#011522] leading-[1.05] tracking-tight max-w-3xl">
              Built for the questions your IC will ask.
            </h2>
          </div>

          {/* FAQ list — numbered, hairline separated, no cards */}
          <div className="border-t border-gray-200/70">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group border-b border-gray-200/70 open:bg-[#FAFAFA]/40 transition-colors duration-300"
              >
                <summary className="cursor-pointer list-none py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[80px_1fr_40px] gap-6 lg:gap-10 items-start">
                  {/* index */}
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#011522]/30 pt-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* question */}
                  <span className="font-serif text-[22px] md:text-[28px] leading-[1.25] text-[#011522] tracking-tight group-hover:text-[#0508b3] transition-colors">
                    {faq.q}
                  </span>

                  {/* plus/minus indicator */}
                  <span className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full border border-[#011522]/15 text-[#011522]/60 group-open:bg-[#011522] group-open:text-white group-open:border-[#011522] group-hover:border-[#011522]/40 transition-all duration-300 self-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="w-3.5 h-3.5 transition-transform duration-300 group-open:rotate-45"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>

                <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_40px] gap-6 lg:gap-10 pb-10">
                  <span className="hidden lg:block" />
                  <p className="text-[15.5px] text-[#011522]/60 leading-[1.8] font-light max-w-2xl">
                    {faq.a}
                  </p>
                  <span className="hidden lg:block" />
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="py-32 md:py-40 border-t border-[#1E1F2E] relative overflow-hidden"
        style={{ backgroundColor: '#05050F' }}
      >
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 relative z-10">

          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-14">
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-[11px] font-semibold text-white/60 uppercase tracking-[0.25em]">Get started</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,480px)] gap-16 lg:gap-24 items-end">

            {/* Left: headline + description */}
            <div>
              <h2 className="font-serif text-4xl md:text-[4rem] leading-[1.05] text-[#FAFAF9] tracking-tight mb-7 max-w-2xl">
                See Capsa on your<br />own pipeline.
              </h2>
              <p className="text-[17px] text-[#E5E5E5]/70 leading-[1.7] font-light max-w-2xl">
                Bring a live deal and we'll walk through sourcing, underwriting, and monitoring using your own data—no generic demo environment.
              </p>
            </div>

            {/* Right: actions, stacked, hairline separated */}
            <div className="flex flex-col">

              {/* primary action row */}
              <Link
                to="/demo"
                className="group flex items-center justify-between gap-6 py-6 border-t border-[#1E1F2E] hover:border-white/30 transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">Primary</span>
                  <span className="text-[19px] font-medium text-[#FAFAF9] tracking-tight">Book a technical demo</span>
                </div>
                <span className="flex items-center justify-center w-11 h-11 rounded-full border border-white/15 group-hover:bg-white group-hover:border-white transition-colors shrink-0">
                  <IconArrowRight className="w-4 h-4 text-white group-hover:text-[#05050F] transition-colors" />
                </span>
              </Link>

              {/* secondary action row */}
              <Link
                to="/contact"
                className="group flex items-center justify-between gap-6 py-6 border-t border-b border-[#1E1F2E] hover:border-white/30 transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">Contact</span>
                  <span className="text-[19px] font-medium text-[#FAFAF9] tracking-tight">Talk to sales</span>
                </div>
                <span className="flex items-center justify-center w-11 h-11 rounded-full border border-white/15 group-hover:bg-white group-hover:border-white transition-colors shrink-0">
                  <IconArrowRight className="w-4 h-4 text-white group-hover:text-[#05050F] transition-colors" />
                </span>
              </Link>

    
            </div>
          </div>

        </div>
      </section>

 

    </div>
  );
}