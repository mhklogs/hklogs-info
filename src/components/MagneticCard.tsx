import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { gsap } from 'gsap';

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  speed?: number;
  enableGlow?: boolean;
  glowColor?: string;
  onClick?: () => void;
}

export default function MagneticCard({
  children,
  className = '',
  intensity = 20,
  speed = 0.3,
  enableGlow = false,
  glowColor = '#E50914',
  onClick,
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setGlowPosition({ x: x * 100, y: y * 100 });

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rotateX = (y - 0.5) * intensity;
      const rotateY = (0.5 - x) * intensity;
      const scale = isHovered ? 1.02 : 1;

      gsap.to(cardRef.current, {
        rotateX,
        rotateY,
        scale,
        transformPerspective: 1000,
        duration: speed,
        ease: 'power2.out',
      });

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: (x - 0.5) * 10,
          y: (y - 0.5) * 10,
          duration: speed * 1.5,
          ease: 'power2.out',
        });
      }
    });
  }, [intensity, speed, isHovered]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.03,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    }
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    }
    setGlowPosition({ x: 50, y: 50 });
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden cursor-pointer ${className}`}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {enableGlow && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}25 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      
      <div
        ref={contentRef}
        className="relative z-10 h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
      
      {enableGlow && (
        <div
          className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}10 0%, transparent 50%)`,
            opacity: isHovered ? 0.8 : 0,
          }}
        />
      )}
    </div>
  );
}