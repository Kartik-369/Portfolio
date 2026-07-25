import { useEffect } from 'react';

export default function useTesseractCanvas() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = document.getElementById('node-canvas');
    if (!canvas || reduced) return;

    const ctx = canvas.getContext('2d');
    let w, h;
    let animationId;

    const vertices4D = [];
    for (let vi = 0; vi < 16; vi++) {
      vertices4D.push([
        (vi & 1) ? 1 : -1,
        (vi & 2) ? 1 : -1,
        (vi & 4) ? 1 : -1,
        (vi & 8) ? 1 : -1
      ]);
    }
    
    function popcount(n) { 
      let c = 0; 
      while (n) { c += n & 1; n >>= 1; } 
      return c; 
    }

    const edges = [];
    for (let a = 0; a < 16; a++) {
      for (let b = a + 1; b < 16; b++) {
        if (popcount(a ^ b) === 1) edges.push([a, b]);
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      
      ctx.scale(dpr, dpr);
    }

    function rotate4D(v, angleXW, angleYZ) {
      const x = v[0], y = v[1], z = v[2], wc = v[3];
      const cosA = Math.cos(angleXW), sinA = Math.sin(angleXW);
      const x1 = x * cosA - wc * sinA;
      const w1 = x * sinA + wc * cosA;
      const cosB = Math.cos(angleYZ), sinB = Math.sin(angleYZ);
      const y1 = y * cosB - z * sinB;
      const z1 = y * sinB + z * cosB;
      return [x1, y1, z1, w1];
    }

    function project(v, scale, cx, cy) {
      const wDist = 2.6;
      const f1 = wDist / (wDist - v[3]);
      const x3 = v[0] * f1, y3 = v[1] * f1, z3 = v[2] * f1;
      const zDist = 3.4;
      const f2 = zDist / (zDist - z3);
      return {
        x: cx + x3 * f2 * scale,
        y: cy + y3 * f2 * scale,
        depth: v[3]
      };
    }

    function tick(t) {
      ctx.clearRect(0, 0, w, h);
      
      const cx = w * 0.5;
      const cy = h * 0.5;
      const scale = Math.min(w, h) * 0.35; 
      
      const angleXW = t * 0.00012;
      const angleYZ = t * 0.00008;

      const projected = vertices4D.map(v => {
        return project(rotate4D(v, angleXW, angleYZ), scale, cx, cy);
      });

      edges.forEach(e => {
        const p1 = projected[e[0]], p2 = projected[e[1]];
        const avgDepth = (p1.depth + p2.depth) / 2;
        const alpha = 0.1 + (1 - (avgDepth + 1) / 2) * 0.2;
        
        ctx.strokeStyle = `rgba(21, 21, 15, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 2.5; 
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });
      
      projected.forEach(p => {
        const alphaNode = 0.6 + (1 - (p.depth + 1) / 2) * 0.5; 
        
        ctx.fillStyle = `rgba(90, 60, 30, ${alphaNode.toFixed(6)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6.0, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(tick);
    }
    
    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
}