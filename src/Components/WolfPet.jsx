import { useEffect, useRef } from 'react';
import wolfSprite from '../assets/wolf.png';
export default function WolfPet() {
  const petRef = useRef(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isReducedMotion || isTouchDevice) return;

    const pet = petRef.current;
    if (!pet) return;

    let mousePosX = 0;
    let mousePosY = 0;
    let petPosX = window.innerWidth / 2;
    let petPosY = window.innerHeight / 2;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation = null;
    let idleAnimationFrame = 0;
    const speed = 10; // ~10px per frame chase speed
    const spriteSets = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratch: [[-5, 0], [-6, 0], [-7, 0]],
      tired: [[-3, -2]],
      sleeping: [[-2, 0], [-2, -1]],
      N: [[-1, -2], [-1, -3]],
      NE: [[0, -2], [0, -3]],
      E: [[-3, 0], [-3, -1]],
      SE: [[-5, -1], [-5, -2]],
      S: [[-6, -3], [-7, -2]],
      SW: [[-5, -3], [-6, -1]],
      W: [[-4, -2], [-4, -3]],
      NW: [[-1, 0], [-1, -1]],
    };
    const setSprite = (name, frame) => {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      pet.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };

    const handleMouseMove = (e) => {
      mousePosX = e.clientX;
      mousePosY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const frameLoop = setInterval(() => {
      const diffX = petPosX - mousePosX;
      const diffY = petPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < speed || distance < 48) {
        idleTime += 1;
        
        if (idleTime > 10 && idleTime < 20) {
          setSprite('alert', 0);
          return;
        }
        if (idleTime > 20) {
          if (!idleAnimation) {
            const idleActions = ['sleeping', 'scratch', 'tired'];
            idleAnimation = idleActions[Math.floor(Math.random() * idleActions.length)];
          }
          switch (idleAnimation) {
            case 'sleeping':
              if (idleAnimationFrame < 8) setSprite('tired', 0);
              else setSprite('sleeping', Math.floor(idleAnimationFrame / 4));
              break;
            case 'scratch':
              setSprite('scratch', idleAnimationFrame);
              if (idleAnimationFrame > 9) {
                idleAnimation = null;
                idleAnimationFrame = 0;
              }
              break;
            default:
              setSprite('idle', 0);
              break;
          }
          idleAnimationFrame += 1;
        } else {
          setSprite('idle', 0);
        }
        return;
      }
      idleAnimation = null;
      idleAnimationFrame = 0;
      idleTime = 0;
      let direction = '';
      if (diffY / distance > 0.5) direction = 'N';
      else if (diffY / distance < -0.5) direction = 'S';
      if (diffX / distance > 0.5) direction += 'W';
      else if (diffX / distance < -0.5) direction += 'E';
      petPosX -= (diffX / distance) * speed;
      petPosY -= (diffY / distance) * speed;

      pet.style.left = `${petPosX - 16}px`;
      pet.style.top = `${petPosY - 16}px`;

      setSprite(direction, frameCount);
      frameCount += 1;
    }, 100); // 100ms animation

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(frameLoop);
    };
  }, []);

  return (
    <div
      ref={petRef}
      style={{
        width: '32px',
        height: '32px',
        position: 'fixed',
        pointerEvents: 'none',
        backgroundImage: `url(${wolfSprite})`,
        imageRendering: 'pixelated',
        zIndex: 9998,
        left: '-32px',
        top: '-32px'
      }}
    />
  );
}