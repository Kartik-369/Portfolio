import { useEffect } from 'react';

export default function useInkTrailCanvas() {
  useEffect(() => {
    const isFine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!isFine || reduced) return;

    const trailCanvas = document.getElementById('trailCanvas');
    if (!trailCanvas) return;

    const tctx = trailCanvas.getContext('2d');
    let animationId;
    
    // Start at top-left for the entry whip
    const mouse = { x: 0, y: 0 };
    let latestUserX = window.innerWidth / 2;
    let latestUserY = window.innerHeight / 2;
    
    let isIdle = true;
    let phase = 'infinity'; // 'infinity' or 'letterK'
    let time = 0;
    
    // Tracking completion
    let userInteracted = false;
    let hasCompletedSequence = false;
    
    function sizeTrail() { 
      trailCanvas.width = window.innerWidth; 
      trailCanvas.height = window.innerHeight; 
    }
    sizeTrail();
    window.addEventListener('resize', sizeTrail);

    const TRAIL_LEN = 30;
    const trail = [];
    for(let i = 0; i < TRAIL_LEN; i++){
      trail.push({x: 0, y: 0});
    }

    function handleMouseMove(e) {
      latestUserX = e.clientX; 
      latestUserY = e.clientY;
      userInteracted = true;
    }

    window.addEventListener('mousemove', handleMouseMove);

    function getKPoint(progress) {
      const pts = [
        [0, 0],             // 0: Start center
        [0.2, -0.5],        // 1: Ascender loop up-right
        [-0.1, -0.9],       // 2: Ascender loop top-left
        [-0.3, -0.4],       // 3: Ascender loop down
        [-0.1, 0.6],        // 4: Bottom of stem
        [-0.1, 0.0],        // 5: Retrace up stem
        [0.3, -0.4],        // 6: Upper arm
        [0.0, 0.0],         // 7: Middle tiny loop back
        [0.4, 0.6],         // 8: Lower leg
        [0.6, 0.4],         // 9: Kick out hook
        [0, 0]              // 10: Return to center
      ];
      const total = pts.length - 1;
      const scaled = progress * total;
      const idx = Math.floor(scaled);
      if (idx >= total) return pts[total];
      const t = scaled - idx;
      
      const ease = t * t * (3 - 2 * t);
      
      const p1 = pts[idx];
      const p2 = pts[idx + 1];
      return [
        p1[0] + (p2[0] - p1[0]) * ease,
        p1[1] + (p2[1] - p1[1]) * ease
      ];
    }

    function animateCursor(){
      if (isIdle) {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        
        const scaleX = window.innerWidth * 0.4;
        const scaleY = window.innerHeight * 0.4;

        if (phase === 'infinity') {
          time += 0.025;
          mouse.x = cx + Math.sin(time) * scaleX;
          mouse.y = cy + Math.sin(time * 2) * (scaleY * 0.7);

          if (time >= Math.PI * 2) {
            phase = 'letterK';
            time = 0;
          }
        } else if (phase === 'letterK') {
          time += 0.005;
          if (time >= 1) {
            hasCompletedSequence = true; // Mark that one full Infinity -> K sequence is done
            phase = 'infinity';
            time = 0;
          } else {
            const [kx, ky] = getKPoint(time);
            mouse.x = cx + kx * scaleX;
            mouse.y = cy + ky * scaleY;
          }
        }
        
        // Relinquish control only if the first sequence has fully completed AND the user has moved their mouse
        if (hasCompletedSequence && userInteracted) {
          isIdle = false;
        }
      }
      
      // If idle is over, mouse directly tracks user input
      if (!isIdle) {
        mouse.x = latestUserX;
        mouse.y = latestUserY;
      }

      trail[0].x = mouse.x;
      trail[0].y = mouse.y;
      
      for(let i = 1; i < TRAIL_LEN; i++){
        const spring = 0.4; 
        trail[i].x += (trail[i-1].x - trail[i].x) * spring;
        trail[i].y += (trail[i-1].y - trail[i].y) * spring;
      }

      tctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);

      const dx = trail[0].x - trail[TRAIL_LEN-1].x;
      const dy = trail[0].y - trail[TRAIL_LEN-1].y;
      const spread = Math.sqrt(dx*dx + dy*dy);

      if(spread > 1 || isIdle){
        tctx.lineCap = 'round';
        tctx.lineJoin = 'round';
        
        for(let i = 0; i < TRAIL_LEN - 1; i++){
          const pt1 = trail[i];
          const pt2 = trail[i+1];
          
          const width = 10 * Math.pow((1 - i/(TRAIL_LEN-1)), 1.5);
          if(width < 0.5) continue; 

          tctx.beginPath();
          tctx.moveTo(pt1.x, pt1.y);
          tctx.lineTo(pt2.x, pt2.y);
          
          tctx.strokeStyle = 'rgba(255, 255, 255, 1)';
          tctx.lineWidth = width;
          tctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animateCursor);
    }
    animateCursor();

    return () => {
      window.removeEventListener('resize', sizeTrail);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);
}
