import { Link } from 'react-router-dom';

/* ========================================================================
   Footer — same layout as the one previously inline in Hero.tsx.
   Dark #05050F background to match the CTA + security sections.
   ======================================================================== */

const IconDatabase = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export default function Footer() {
  return (


  <footer
  className="border-t border-white/[0.08] pt-24 pb-12"
  style={{ backgroundColor: '#05050F' }}
>
      <div className="max-w-[100rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">

          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-8" aria-label="Capsa">
              <img
                src="/images/capsalogo.svg"
                alt="Capsa"
                className="h-7 w-auto"
                draggable={false}
              />
            </Link>
            <p className="text-sm text-[#E5E5E5]/55 max-w-xs leading-relaxed font-light">
              The definitive AI operating system built exclusively for private capital markets and institutional investors.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold text-[#E5E5E5]/40 uppercase tracking-[0.2em] mb-8">Pages</h4>
            <ul className="space-y-5 text-sm text-[#E5E5E5]/55">
              <li><a href="https://capsa.ai/product" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFAF9] transition-colors">Product</a></li>
              <li><a href="https://capsa.ai/security" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFAF9] transition-colors">Security</a></li>
              <li><a href="https://capsa.ai/company" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFAF9] transition-colors">Company</a></li>
              <li><a href="https://capsa.ai/news" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFAF9] transition-colors">News</a></li>
              <li><a href="https://capsa.ai/careers" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFAF9] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold text-[#E5E5E5]/40 uppercase tracking-[0.2em] mb-8">Legal</h4>
            <ul className="space-y-5 text-sm text-[#E5E5E5]/55">
              <li><a href="https://capsa.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFAF9] transition-colors">Terms of Service</a></li>
              <li><a href="https://capsa.ai/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFAF9] transition-colors">Privacy Policy</a></li>
              <li><a href="https://trust.capsa.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFAF9] transition-colors">Trust Center</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h4 className="text-[10px] font-semibold text-[#E5E5E5]/40 uppercase tracking-[0.2em] mb-8">Stay Updated</h4>
            <p className="text-sm text-[#E5E5E5]/55 mb-6 font-light">Subscribe to our newsletter for product updates and private market AI insights.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/[0.03] border border-[#1E1F2E] text-[#FAFAF9] text-sm rounded-l-md focus:ring-1 focus:ring-white/20 focus:border-white/20 block w-full p-3.5 outline-none placeholder:text-[#E5E5E5]/30"
                required
              />
              <button type="submit" className="bg-[#FAFAF9] text-[#05050F] px-6 py-3.5 rounded-r-md text-sm font-semibold hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Concept credit — sits above the legal row, framed subtly */}
        <div className="border-t border-white/[0.08] pt-10 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-[11px] text-[#E5E5E5]/40 font-light tracking-[0.01em]">
              Concept redesign by{' '}
              <a
                href="https://www.seo-growup.com/?utm_source=capsa-github&utm_medium=referral&utm_campaign=capsa-case-study"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5E5E5]/70 hover:text-[#FAFAF9] transition-colors underline decoration-white/15 underline-offset-[3px] hover:decoration-white/40"
              >
                GrowUp
              </a>
              . Not affiliated with Capsa AI, Inc.
            </p>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E5E5E5]/25">
              Portfolio piece
            </span>
          </div>
        </div>


      </div>
    </footer>
  );
}