import React from 'react';

export default function EducationSection() {
  const certifications = [
    {
      title: 'CS50: Introduction to Computer Science — Harvard',
      link: 'https://certificates.cs50.io/233e9cfd-23a9-4a01-9092-cfcb12137c56.pdf?size=letter',
    },
    {
      title: 'AI Python for Beginners — DeepLearning.AI',
      link: 'https://learn.deeplearning.ai/accomplishments/95837d52-f854-4574-82b2-53b1ec9ccea4?usp=sharing',
    },
    {
      title: 'Introduction to Kubernetes',
      link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTA0MzY0MjJfMTA3NTY5MjlfMTc4MzM1MTA5NDkzMi5wbmciLCJ1c2VybmFtZSI6IkthcnRpayBQYWRpYSJ9',
    },
    {
      title: 'C++ Programming — GeeksforGeeks',
      link: 'https://media.geeksforgeeks.org/courses/certificates/429e8c557bf03659b623a233c03995a8.pdf',
    },
    {
      title: 'Deep Learning Fundamentals',
      link: 'https://courses.cognitiveclass.ai/certificates/1d2d90c57ae0445d909edb0bf242bb06',
    },
    {
      title: 'n8n Automation — LetsUpgrade',
      link: 'https://verify.letsupgrade.in/certificate/LUENCCJUL125105',
      id: 'LUENCCJUL125105'
    }
  ];

  return (
    <section id="education" className="py-[110px] border-t border-zinc-200 relative">
      <div className="wrap">
        <div className="section-head reveal flex justify-between items-end gap-[24px] mb-[64px] flex-wrap">
          <div>
            <div className="eyebrow">EDUCATION & CERTIFICATIONS</div>
            <h2 className="section-title font-display font-normal text-[clamp(32px,4.5vw,52px)] m-0 mt-[16px] tracking-[-0.015em]">
              Still building the foundation.
            </h2>
          </div>
        </div>
        <div className="edu-grid grid grid-cols-2 gap-[64px] max-[760px]:grid-cols-1 max-[760px]:gap-[40px]">
          <div className="reveal">
            <div className="edu-degree font-display text-[26px] m-0 mb-[8px] tracking-[-0.01em]">B.Tech, Computer Science</div>
            <div className="edu-school font-mono text-[13.5px] text-emerald-600 mb-[6px]">Darshan University</div>
            <div className="edu-date font-mono text-[13px] text-zinc-500">Expected August 2028</div>
          </div>
          <div className="reveal">
            <ul className="cert-list m-0 p-0 list-none">
              {certifications.map((cert, idx) => (
                <li key={idx} className="py-[16px] border-t border-zinc-200 text-[15px] flex justify-between gap-[16px] items-center last:border-b">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="no-underline transition-colors duration-200 block leading-[1.4] hover:text-emerald-600"
                  >
                    {cert.title}
                  </a>
                  {cert.id && (
                    <span className="cert-id font-mono text-[11.5px] text-zinc-500 whitespace-nowrap bg-zinc-100/80 px-[8px] py-[4px] rounded-[2px]">
                      ID: {cert.id}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
