import React from 'react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="pt-[140px] pb-[60px] relative">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">GET IN TOUCH</div>
          <h2 className="contact-headline font-display text-[clamp(36px,6vw,72px)] font-normal tracking-[-0.015em] max-w-[860px] m-[24px_0_56px] leading-[1.05]">
            Looking for an ML or backend intern who ships? <em className="italic text-emerald-600">Let's talk.</em>
          </h2>
          <div className="contact-links flex flex-wrap gap-[16px] mb-[100px]">
            <a className="contact-link font-mono text-[14px] border border-zinc-200 bg-zinc-100/60 backdrop-blur-[4px] px-[20px] py-[12px] no-underline transition-all duration-300 hover:border-emerald-600 hover:bg-white hover:-translate-y-[2px]" href="mailto:kartikbpadia0707@gmail.com">
              kartikbpadia0707@gmail.com
            </a>
            <a className="contact-link font-mono text-[14px] border border-zinc-200 bg-zinc-100/60 backdrop-blur-[4px] px-[20px] py-[12px] no-underline transition-all duration-300 hover:border-emerald-600 hover:bg-white hover:-translate-y-[2px]" href="https://linkedin.com/in/kartike-padia" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a className="contact-link font-mono text-[14px] border border-zinc-200 bg-zinc-100/60 backdrop-blur-[4px] px-[20px] py-[12px] no-underline transition-all duration-300 hover:border-emerald-600 hover:bg-white hover:-translate-y-[2px]" href="https://github.com/kartik-369" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="foot-bottom flex justify-between items-center font-mono text-[12.5px] text-zinc-500 flex-wrap gap-[16px] pt-[32px] border-t border-zinc-200">
          <div>Kartik Padia — Rājkot, Gujarat, India</div>
          <div> © 2026</div>
        </div>
      </div>
    </footer>
  );
}
