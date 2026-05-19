'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Effects.module.css';

export default function Effects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const mouseCoords = useRef({ x: -100, y: -100 });
  const trailCoords = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // 1. Scroll progress and show-to-top detection
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Responsive pointer check
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // 3. High-performance Ref-based mouse tracker (Zero React Renders!)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let reqId;
    const updateTrail = () => {
      const dx = mouseCoords.current.x - trailCoords.current.x;
      const dy = mouseCoords.current.y - trailCoords.current.y;
      
      trailCoords.current.x += dx * 0.08;
      trailCoords.current.y += dy * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${trailCoords.current.x}px, ${trailCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      reqId = requestAnimationFrame(updateTrail);
    };
    reqId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(reqId);
    };
  }, [isMobile]);

  // 4. Canvas Cosmic Particles logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Initialize particles
    const particleCount = isMobile ? 25 : 60;
    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.04,
      speedY: (Math.random() - 0.5) * 0.04,
      alpha: Math.random() * 0.4 + 0.2,
      pulse: Math.random() * 0.001 + 0.0003,
      pulseDirection: Math.random() > 0.5 ? 1 : -1,
    }));

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLightTheme = document.documentElement.classList.contains('light');
      const baseColor = isLightTheme ? '71, 85, 105' : '99, 102, 241'; // slate / indigo

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        p.alpha += p.pulse * p.pulseDirection;
        if (p.alpha > 0.7 || p.alpha < 0.2) p.pulseDirection *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor}, ${p.alpha})`;
        ctx.shadowBlur = p.size * 2;
        ctx.shadowColor = `rgba(${baseColor}, 0.5)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Circular progress dimensions
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Top glowing progress bar */}
      <div 
        className={styles.scrollBar} 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Cosmic particle background */}
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Interactive mouse elements (Desktop only) */}
      {!isMobile && (
        <>
          <div 
            ref={dotRef}
            className={styles.cursorDot}
          />
          <div 
            ref={glowRef}
            className={styles.cursorGlow}
          />
        </>
      )}

      {/* Floating circular progress scroll top button */}
      <button 
        className={`${styles.scrollTopBtn} ${showScrollTop ? styles.showBtn : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="46" height="46" viewBox="0 0 46 46" className={styles.svgCircle}>
          <circle 
            className={styles.circleBg}
            cx="23" 
            cy="23" 
            r={radius} 
            strokeWidth="3.5"
          />
          <circle 
            className={styles.circleProgress}
            cx="23" 
            cy="23" 
            r={radius} 
            strokeWidth="3.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <span className={styles.arrow}>↑</span>
      </button>
    </>
  );
}
