import React, { useEffect, useState } from 'react';

export default function NeuralNetViz({ active }) {
  const [count, setCount] = useState(0);
  const [litNodes, setLitNodes] = useState([]);
  
  useEffect(() => {
    let animationFrame;
    if (active) {
      // Counter animation
      const target = 96.2;
      const dur = 1100;
      let start = null;
      
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        setCount((target * p).toFixed(1));
        if (p < 1) animationFrame = requestAnimationFrame(step);
      };
      animationFrame = requestAnimationFrame(step);
      
      // Node lighting animation
      const totalNodes = 10; 
      const timeouts = Array.from({length: totalNodes}).map((_, i) => 
        setTimeout(() => {
          setLitNodes(prev => [...prev, i]);
        }, 250 + i * 140)
      );
      
      return () => {
        cancelAnimationFrame(animationFrame);
        timeouts.forEach(clearTimeout);
      };
    } else {
      setCount(0);
      setLitNodes([]);
    }
  }, [active]);

  let nodeIndex = 0;
  const renderLayer = (numNodes) => (
    <div className="layer flex flex-col gap-[10px]">
      {Array.from({length: numNodes}).map(() => {
        const i = nodeIndex++;
        const isLit = litNodes.includes(i);
        return (
          <div 
            key={i} 
            className={`node w-[10px] h-[10px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isLit ? 'bg-amber-500 scale-130 shadow-[0_0_12px_rgba(232,154,43,0.4)]' : 'bg-zinc-200'}`}
          ></div>
        );
      })}
    </div>
  );

  return (
    <div className="viz-panel bg-zinc-100/85 backdrop-blur-[8px] border border-zinc-200 p-8 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
      <div className="viz-title font-mono text-[11.5px] text-zinc-500 mb-[22px] uppercase tracking-[0.08em]">
        Training result
      </div>
      <div className="acc-wrap flex items-center gap-[26px]">
        <div>
          <div className="acc-num font-display text-[56px] font-normal text-emerald-600 tracking-[-0.02em]">
            {count}%
          </div>
          <div className="acc-sub font-mono text-[12.5px] text-zinc-500">
            Kaggle Digit Recognizer
          </div>
        </div>
      </div>
      <div className="layer-diagram flex justify-between mt-[28px] px-[10px]">
        {renderLayer(4)}
        {renderLayer(3)}
        {renderLayer(2)}
        {renderLayer(1)}
      </div>
    </div>
  );
}
