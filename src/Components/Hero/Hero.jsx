import React from 'react';

export default function Hero() {
  return (
    <section className="hero relative pt-[50px] pb-[120px] border-t-0 overflow-hidden">
      {/* Absolute positioned image container for the right space */}
      <div className="absolute right-0 top-60 lg:right-12 md:top-0 h-30 md:h-90 pointer-events-none lg:h-150">
        <img
          src="/wolf_hero.png"
          alt="Hero background graphic"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="wrap hero-inner relative z-10">
        <div className="eyebrow mb-8">
          RĀJKOT, GUJARAT · FULL-STACK ENGINEER & ML PRACTITIONER
        </div>
        <h1 className="hero-line font-display font-normal text-[clamp(42px,6.8vw,92px)] leading-[1.05] tracking-[-0.02em] m-0 mb-8 max-w-[960px]">
          <span className="hero-reveal"><span>I build backends</span></span>
          <span className="hero-reveal"><span>that scale, and <em className="italic font-medium text-emerald-600">models</em></span></span>
          <span className="hero-reveal"><span>that explain themselves.</span></span>
        </h1>
        <p className="hero-sub text-[18.5px] text-zinc-600 max-w-[680px] m-0 mb-12 opacity-0 animate-[fadeUp_0.9s_ease_forwards]" style={{ animationDelay: '0.7s' }}>
          Full-stack engineer and ML practitioner specializing in scalable FastAPI/React architectures. Proven experience building end-to-end B2B platforms and deploying intelligent features using LLM APIs. Looking to drive immediate engineering value in a fast-paced team.
        </p>
        <div className="hero-actions flex gap-4 flex-wrap opacity-0 animate-[fadeUp_0.9s_ease_forwards]" style={{ animationDelay: '0.85s' }}>
          <a className="btn primary font-mono text-[13.5px] px-6 py-[14px] no-underline border border-zinc-900 bg-white text-black transition-all duration-300 inline-flex items-center gap-2 hover:bg-emerald-600 hover:border-emerald-600 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_-8px_rgba(5,150,105,0.4)]" href="#work">
            View projects
          </a>
          <a className="btn ghost font-mono text-[13.5px] px-6 py-[14px] no-underline border border-zinc-900 bg-zinc-50/50 backdrop-blur-[4px] transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-[2px] hover:bg-zinc-100" href="mailto:kartikbpadia0707@gmail.com">
            Email me
          </a>
          <a className="btn ghost font-mono text-[13.5px] px-6 py-[14px] no-underline border border-zinc-900 bg-zinc-50/50 backdrop-blur-[4px] transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-[2px] hover:bg-zinc-100" href="https://github.com/kartik-369" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
        <div className="hero-meta mt-[72px] flex gap-12 flex-wrap font-mono text-[12.5px] text-zinc-500 opacity-0 animate-[fadeUp_0.9s_ease_forwards]" style={{ animationDelay: '1.05s' }}>
          <div><strong className="text-zinc-900 font-medium">2</strong> shipped projects</div>
          <div><strong className="text-zinc-900 font-medium">96.2%</strong> Kaggle digit accuracy, from scratch</div>
          <div><strong className="text-zinc-900 font-medium">1</strong> ML internship, Feynn Labs</div>
        </div>
      </div>
    </section>
  );
}
