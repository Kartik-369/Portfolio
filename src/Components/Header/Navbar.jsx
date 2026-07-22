import React from 'react';

export default function Navbar() {
  return (
    <header className="site-nav sticky top-0 z-50 bg-[#FCFCF9]/75 backdrop-blur-[16px] border-b border-[var(--line)]">
      <div className="nav-inner max-w-[var(--maxw)] mx-auto px-8 py-5 flex items-center justify-between flex-wrap gap-4 relative z-10 max-[760px]:flex-col max-[760px]:items-start max-[760px]:py-4 max-[760px]:px-6">
        <div className="nav-mark font-mono font-semibold text-[14px] tracking-[0.04em]">
          KARTIK<span className="text-[var(--signal)]">.</span>PADIA
        </div>
        <ul className="nav-links flex gap-8 m-0 p-0 list-none font-mono text-[13px] max-[760px]:gap-5 max-[760px]:w-full max-[760px]:overflow-x-auto max-[760px]:pb-1">
          <li>
            <a href="#work" className="no-underline text-[var(--ink-soft)] relative pb-1 transition-colors duration-200 hover:text-[var(--ink)] 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[var(--ink)] after:transition-[width] after:duration-300 hover:after:w-full">
              Work
            </a>
          </li>
          <li>
            <a href="#experience" className="no-underline text-[var(--ink-soft)] relative pb-1 transition-colors duration-200 hover:text-[var(--ink)] 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[var(--ink)] after:transition-[width] after:duration-300 hover:after:w-full">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="no-underline text-[var(--ink-soft)] relative pb-1 transition-colors duration-200 hover:text-[var(--ink)] 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[var(--ink)] after:transition-[width] after:duration-300 hover:after:w-full">
              Stack
            </a>
          </li>
          <li>
            <a href="#education" className="no-underline text-[var(--ink-soft)] relative pb-1 transition-colors duration-200 hover:text-[var(--ink)] 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[var(--ink)] after:transition-[width] after:duration-300 hover:after:w-full">
              Education
            </a>
          </li>
        </ul>
        <a className="nav-cta font-mono text-[13px] border border-[var(--ink)] px-4 py-2 no-underline transition-all duration-300 hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:-translate-y-[1px] max-[760px]:hidden" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
}
