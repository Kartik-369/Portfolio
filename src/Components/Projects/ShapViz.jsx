import React, { useEffect, useState } from 'react';

export default function ShapViz({ active }) {
  const [widths, setWidths] = useState([0, 0, 0, 0, 0]);
  const targets = [86, 71, 54, 38, 22];

  useEffect(() => {
    if (active) {
      const timeouts = targets.map((_, i) => 
        setTimeout(() => {
          setWidths(prev => {
            const next = [...prev];
            next[i] = targets[i];
            return next;
          });
        }, i * 90)
      );
      return () => timeouts.forEach(clearTimeout);
    } else {
      setWidths([0, 0, 0, 0, 0]);
    }
  }, [active]);

  const rows = [
    { label: 'support_tickets', val: '0.86' },
    { label: 'payment_delay', val: '0.71' },
    { label: 'monthly_usage', val: '0.54' },
    { label: 'contract_type', val: '0.38' },
    { label: 'tenure_months', val: '0.22' }
  ];

  return (
    <div className="viz-panel bg-zinc-100/85 backdrop-blur-[8px] border border-zinc-200 p-8 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
      <div className="viz-title font-mono text-[11.5px] text-zinc-500 mb-[22px] uppercase tracking-[0.08em]">
        Why the model flagged this account
      </div>
      <div className="shap-rows">
        {rows.map((row, i) => (
          <div key={row.label} className="shap-row flex items-center gap-[14px] mb-[12px]">
            <div className="shap-label font-mono text-[12px] w-[135px] text-zinc-600 shrink-0">{row.label}</div>
            <div className="shap-track flex-1 bg-zinc-200 h-[10px] relative">
              <div 
                className="shap-fill h-full bg-emerald-600 transition-[width] duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)]" 
                style={{ width: `${widths[i]}%` }}
              ></div>
            </div>
            <div className="shap-val font-mono text-[12px] text-zinc-500 w-[40px] text-right">{row.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
