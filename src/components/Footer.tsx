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
      className="border-t border-[#1E1F2E] pt-24 pb-12"
      style={{ backgroundColor: '#05050F' }}
    >
      <div className="max-w-[100rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">

          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <IconDatabase className="w-5 h-5 text-[#FAFAF9]" />
              <span className="font-serif text-2xl font-semibold tracking-tight text-[#FAFAF9]">capsa.ai</span>
            </Link>
            <p className="text-sm text-[#E5E5E5]/55 max-w-xs leading-relaxed font-light">
              The definitive AI operating system built exclusively for private capital markets and institutional investors.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold text-[#E5E5E5]/40 uppercase tracking-[0.2em] mb-8">Platform</h4>
            <ul className="space-y-5 text-sm text-[#E5E5E5]/55">
              <li><Link to="/sourcing" className="hover:text-[#FAFAF9] transition-colors">Sourcing</Link></li>
              <li><Link to="/underwriting" className="hover:text-[#FAFAF9] transition-colors">Underwriting</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#FAFAF9] transition-colors">Portfolio Monitoring</Link></li>
              <li><Link to="/security" className="hover:text-[#FAFAF9] transition-colors">Security &amp; Trust</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold text-[#E5E5E5]/40 uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-5 text-sm text-[#E5E5E5]/55">
              <li><Link to="/about" className="hover:text-[#FAFAF9] transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-[#FAFAF9] transition-colors">Careers</Link></li>
              <li><Link to="/news" className="hover:text-[#FAFAF9] transition-colors">Press &amp; News</Link></li>
              <li><Link to="/contact" className="hover:text-[#FAFAF9] transition-colors">Contact</Link></li>
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

        <div className="border-t border-[#1E1F2E] pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-[#E5E5E5]/35">
            &copy; {new Date().getFullYear()} Capsa AI, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-8 text-xs text-[#E5E5E5]/55">
            <Link to="/privacy" className="hover:text-[#FAFAF9] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#FAFAF9] transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-[#FAFAF9] transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}