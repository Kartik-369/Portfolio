import React from 'react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-[110px] border-t border-zinc-200 relative">
      <div className="wrap">
        <div className="section-head reveal flex justify-between items-end gap-[24px] mb-[64px] flex-wrap">
          <div>
            <div className="eyebrow">EXPERIENCE</div>
            <h2 className="section-title font-display font-normal text-[clamp(32px,4.5vw,52px)] m-0 mt-[16px] tracking-[-0.015em]">
              Where I've worked.
            </h2>
          </div>
          <p className="section-note text-[15px] text-zinc-500 max-w-[280px] text-right leading-[1.4] m-0 max-[700px]:text-left max-[700px]:max-w-full">
            Applied, not just theoretical — turning unlabeled customer data into decisions someone downstream could actually use.
          </p>
        </div>

        <div className="reveal">
          <div className="exp-row grid grid-cols-[200px_1fr] gap-[40px] py-[32px] border-t border-zinc-200 transition-all duration-300 hover:bg-emerald-50 hover:mx-[-24px] hover:px-[24px] max-md:hover:mx-0 max-md:hover:px-4 border-b max-[700px]:grid-cols-1 max-[700px]:gap-[16px]">
            <div className="exp-date font-mono text-[13px] text-zinc-500 mt-[6px]">Jul 2025 — Oct 2025</div>
            <div>
              <h3 className="exp-role font-display text-[24px] m-0 mb-[8px] tracking-[-0.01em]">Machine Learning Intern</h3>
              <div className="exp-org font-mono text-[13.5px] text-emerald-600 mb-[18px] inline-flex items-center gap-[12px]">
                Feynn Labs 
                <a href="https://github.com/Kartik-369/Feynn-labs" target="_blank" rel="noopener noreferrer" className="text-zinc-500 text-[11px] underline uppercase tracking-[0.05em] transition-colors duration-200 hover:text-zinc-900">
                  GitHub ↗
                </a>
              </div>
              <ul className="exp-list m-0 pl-[18px] text-zinc-600 text-[15px]">
                <li className="mb-[8px] pl-[6px]">Implemented customer segmentation models using unsupervised clustering to identify distinct market segments.</li>
                <li className="mb-[8px] pl-[6px]">Processed and analyzed large-scale datasets to extract actionable business insights for targeted marketing strategies.</li>
                <li className="mb-[8px] pl-[6px]">Collaborated with cross-functional teams to deliver data-driven recommendations for market positioning.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}