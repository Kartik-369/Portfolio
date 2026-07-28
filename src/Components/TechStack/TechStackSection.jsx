import React from 'react';

export default function TechStackSection() {
  const stack = [
    { icon: 'devicon-python-plain colored', name: 'Python' },
    { icon: 'devicon-cplusplus-plain colored', name: 'C++' },
    { icon: 'devicon-c-plain colored', name: 'C' },
    { icon: 'devicon-csharp-plain colored', name: 'C#' },
    { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
    { icon: 'devicon-react-original colored', name: 'React' },
    
    { icon: 'devicon-fastapi-plain colored', name: 'FastAPI' },
    { icon: 'devicon-dotnetcore-plain colored', name: 'ASP.NET Core' },
    { icon: 'devicon-tensorflow-original colored', name: 'TensorFlow' },
    { icon: 'devicon-pytorch-original colored', name: 'PyTorch' },
    // Fixed class name: scikitlearn (no hyphen)
    { icon: 'devicon-scikitlearn-plain colored', name: 'Scikit-Learn' },
    { icon: 'devicon-numpy-plain colored', name: 'NumPy' },
    
    { icon: 'devicon-pandas-plain colored', name: 'Pandas' },
    { icon: 'devicon-opencv-plain colored', name: 'OpenCV' },
    { fallback: 'API', name: 'REST APIs' },
    { icon: 'devicon-mongodb-plain colored', name: 'MongoDB' },
    { icon: 'devicon-docker-plain colored', name: 'Docker' },
    { icon: 'devicon-kubernetes-plain colored', name: 'Kubernetes' },
    
    { icon: 'devicon-git-plain colored', name: 'Git' },
    { icon: 'devicon-linux-plain colored', name: 'Linux' },
    { fallback: 'n8n', name: 'n8n' },
  ];

  return (
    <section id="skills" className="py-[110px] border-t border-zinc-200 relative">
      {/* Make sure to include this stylesheet in your public/index.html or root layout head: */}
      {/* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" /> */}

      <div className="wrap">
        <div className="section-head reveal flex justify-between items-end gap-[24px] mb-[64px] flex-wrap">
          <div>
            <div className="eyebrow">TECH STACK</div>
            <h2 className="section-title font-display font-normal text-[clamp(32px,4.5vw,52px)] m-0 mt-[16px] tracking-[-0.015em]">
              Tools I reach for.
            </h2>
          </div>
          <p className="section-note text-[15px] text-zinc-500 max-w-[280px] text-right leading-[1.4] m-0 max-[700px]:text-left max-[700px]:max-w-full">
            Python-first, with the frameworks and infra to take a model from notebook to product.
          </p>
        </div>
        
        <div className="stack-grid relative z-[2] grid grid-cols-6 gap-[16px] max-[900px]:grid-cols-4 max-[560px]:grid-cols-3">
          {stack.map((item, idx) => (
            <div className="reveal" key={item.name} style={{ transitionDelay: `${0.05 * ((idx % 6) + 1)}s` }}>
              <div 
                className="stack-tile flex flex-col items-center justify-center gap-[12px] p-[28px_12px] bg-zinc-100/70 backdrop-blur-[4px] border border-zinc-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-[6px] hover:border-emerald-600 hover:bg-[rgba(255,255,255,0.9)] hover:shadow-[0_16px_32px_-12px_rgba(5,150,105,0.15)] group h-full"
              >
                {item.icon ? (
                  <i className={`${item.icon} text-[34px] leading-none`}></i>
                ) : (
                  <span className="stack-fallback font-mono text-[14px] font-semibold text-zinc-900 w-[34px] h-[34px] flex items-center justify-center">
                    {item.fallback}
                  </span>
                )}
                <span className="font-mono text-[12px] text-zinc-600 text-center">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}