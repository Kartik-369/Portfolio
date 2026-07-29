import { useEffect } from 'react';

export default function useScrollReveal(options = { threshold: 0.12 }) {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, options);

    revealEls.forEach((el) => {
      io.observe(el);
    });

    return () => {
      revealEls.forEach((el) => io.unobserve(el));
      io.disconnect();
    };
  }, [options.threshold]);
}
