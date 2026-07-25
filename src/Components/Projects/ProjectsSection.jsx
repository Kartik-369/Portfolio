import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ShapViz from './ShapViz';
import NeuralNetViz from './NeuralNetViz';

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState(null);

  const handleToggle = (id) => {
    setOpenProject(prev => prev === id ? null : id);
  };

  const projects = [
    {
      id: 'neurobusiness',
      title: 'NeuroBusiness — B2B ML Platform',
      link: 'http://github.com/kartik-369/Neuro_Business',
      stack: 'FastAPI · React · XGBoost · SHAP · Gemini API',
      tag: 'Full-stack + ML',
      blocks: [
        { label: 'Problem', text: 'B2B teams lacked visibility into customer churn. They could see when a customer canceled, but not the leading indicators or the actionable steps required to intervene in time.' },
        { label: 'Approach', text: 'Built a secure, async churn prediction platform that uses XGBoost and SHAP to identify at-risk customers. Developed a scalable backend architecture that delivers high-performance insights while maintaining robust security.' },
        { label: 'Result', text: 'Integrated the Gemini API to automate personalized 3-step retention strategies, turning raw risk data into actionable customer engagement plans to directly help businesses reduce subscription cancellations.' }
      ],
      vizComponent: ShapViz
    },
    {
      id: 'neuralnet',
      title: 'Neural Networks from Scratch',
      link: 'https://github.com/Kartik-369/Perceptron-NN-_from_scratch',
      stack: 'Python · NumPy',
      tag: 'ML fundamentals',
      blocks: [
        { label: 'Problem', text: "It's easy to call model.fit(). It's harder to know exactly what that call is doing — so I built it myself, with no framework to hide behind." },
        { label: 'Approach', text: 'Built Deep Learning architectures (Perceptron and MNIST Digit Classifier) from scratch using pure NumPy and matrix calculus. Implemented custom forward pass, backpropagation, and loss functions (MSE, Cross-Entropy) to optimize weights.' },
        { label: 'Result', text: 'Validated the architecture on the Kaggle Digit Recognizer competition, where the network trained from raw matrix math reached 96.2% accuracy against held-out digits.' }
      ],
      vizComponent: NeuralNetViz
    }
  ];

  return (
    <section id="work" className="py-[110px] border-t border-zinc-200 relative">
      <div className="wrap">
        <div className="section-head reveal flex justify-between items-end gap-[24px] mb-[64px] flex-wrap">
          <div>
            <div className="eyebrow">SELECTED WORK</div>
            <h2 className="section-title font-display font-normal text-[clamp(32px,4.5vw,52px)] m-0 mt-[16px] tracking-[-0.015em]">
              Two projects, two different proofs.
            </h2>
          </div>
          <p className="section-note text-[15px] text-zinc-500 max-w-[280px] text-right leading-[1.4] m-0 max-[700px]:text-left max-[700px]:max-w-full">
            One shows I can ship a real product end to end. The other shows I understand what's happening under the hood. Click either to open the case study.
          </p>
        </div>

        <div>
          {projects.map((proj) => (
            <div className="reveal" key={proj.id}>
              <ProjectCard 
                {...proj} 
                isOpen={openProject === proj.id} 
                onToggle={() => handleToggle(proj.id)} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
