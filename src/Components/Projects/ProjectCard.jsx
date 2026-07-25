import React, { useRef, useState, useEffect } from 'react';

export default function ProjectCard({ 
  title, 
  link, 
  stack, 
  tag, 
  blocks, 
  vizComponent: VizComponent,
  isOpen,
  onToggle 
}) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`project border-t border-zinc-200 mx-[-24px] px-[24px] transition-colors duration-400 hover:bg-emerald-50 last:border-b ${isOpen ? 'open' : ''}`}>
      <button 
        className="project-head py-[36px] grid grid-cols-[1fr_auto_auto] gap-[24px] items-center cursor-pointer bg-transparent border-none w-full text-left font-inherit text-inherit group"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <div className="project-title-block flex flex-col gap-[10px]">
          <div className="project-name font-display text-[clamp(24px,3.5vw,34px)] font-medium tracking-[-0.01em] transition-all duration-300 group-hover:translate-x-[4px] group-hover:text-emerald-600">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="no-underline hover:underline hover:decoration-1 hover:underline-offset-4"
              onClick={handleLinkClick}
            >
              {title} ↗
            </a>
          </div>
          <div className="project-stack font-mono text-[12.5px] text-zinc-500 tracking-[0.02em] transition-transform duration-300 group-hover:translate-x-[4px]">
            {stack}
          </div>
        </div>
        <div className="project-tag font-mono text-[11.5px] text-zinc-600 border border-zinc-200 px-[12px] py-[6px] whitespace-nowrap justify-self-end bg-zinc-50/80">
          {tag}
        </div>
        <div className={`project-toggle w-[38px] h-[38px] border border-zinc-900 rounded-full flex items-center justify-center relative shrink-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:border-emerald-600 ${isOpen ? 'bg-zinc-900 border-zinc-900 scale-100' : ''}`}>
          <div className={`absolute bg-zinc-900 w-[14px] h-[1.5px] transition-all duration-300 ${isOpen ? 'bg-white' : ''}`}></div>
          <div className={`absolute bg-zinc-900 w-[1.5px] h-[14px] transition-all duration-300 ${isOpen ? 'scale-y-0' : ''}`}></div>
        </div>
      </button>
      
      <div 
        className="project-body overflow-hidden transition-[max-height] duration-600 ease-[cubic-bezier(.2,.8,.2,1)]"
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
      >
        <div className="project-body-inner pt-[8px] pb-[56px] grid grid-cols-[1.1fr_0.9fr] gap-[56px] max-[800px]:grid-cols-1" ref={contentRef}>
          <div>
            {blocks.map((block, idx) => (
              <div key={idx} className="case-block mb-[28px]">
                <div className="case-label font-mono text-[11.5px] uppercase tracking-[0.08em] text-emerald-600 mb-[10px]">{block.label}</div>
                <p className="case-text text-[15.5px] text-zinc-600 max-w-[48ch] m-0">{block.text}</p>
              </div>
            ))}
          </div>
          {VizComponent && <VizComponent active={isOpen} />}
        </div>
      </div>
    </div>
  );
}
