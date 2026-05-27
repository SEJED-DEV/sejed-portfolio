'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Effects.module.css';

export default function Effects({ fx = 'particles' }) {
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
    let scrollTicking = false;
    let scrollRafId;
    const handleScroll = () => {
      if (!scrollTicking) {
        scrollRafId = window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            setScrollProgress((window.scrollY / totalScroll) * 100);
          }
          setShowScrollTop(window.scrollY > 300);
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Responsive pointer check
    let resizeTicking = false;
    let resizeRafId;
    const checkMobile = () => {
      if (!resizeTicking) {
        resizeRafId = window.requestAnimationFrame(() => {
          setIsMobile(window.matchMedia('(pointer: coarse)').matches);
          resizeTicking = false;
        });
        resizeTicking = true;
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      if (scrollRafId) cancelAnimationFrame(scrollRafId);
      if (resizeRafId) cancelAnimationFrame(resizeRafId);
    };
  }, []);

  // 3. High-performance animation loop (Combined for perfection & clean cleanup)
  useEffect(() => {
    // Event listener for mouse move
    const handleMouseMove = (e) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Canvas setup
    const canvas = canvasRef.current;
    let ctx = null;
    let particles = [];
    let resizeRafId;

    const resizeCanvas = () => {
      cancelAnimationFrame(resizeRafId);
      resizeRafId = requestAnimationFrame(() => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      });
    };

    if (canvas && fx !== 'static') {
      ctx = canvas.getContext('2d');
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas, { passive: true });

      const isNebula = fx === 'nebulas';
      const particleCount = isNebula ? (isMobile ? 3 : 5) : (isMobile ? 25 : 60);
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: isNebula ? Math.random() * 150 + 100 : Math.random() * 1.5 + 0.5,
        speedX: isNebula ? (Math.random() - 0.5) * 0.1 : (Math.random() - 0.5) * 0.04,
        speedY: isNebula ? (Math.random() - 0.5) * 0.1 : (Math.random() - 0.5) * 0.04,
        alpha: isNebula ? Math.random() * 0.1 + 0.05 : Math.random() * 0.4 + 0.2,
        pulse: isNebula ? 0 : Math.random() * 0.001 + 0.0003,
        pulseDirection: Math.random() > 0.5 ? 1 : -1,
      }));
    }

    let animationFrameId;
    const animate = () => {
      // Mouse trail logic
      if (!isMobile) {
        const dx = mouseCoords.current.x - trailCoords.current.x;
        const dy = mouseCoords.current.y - trailCoords.current.y;
        trailCoords.current.x += dx * 0.08;
        trailCoords.current.y += dy * 0.08;
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${trailCoords.current.x}px, ${trailCoords.current.y}px, 0) translate(-50%, -50%)`;
        }
      }

      // Canvas particles logic
      if (ctx && fx !== 'static' && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const isLightTheme = document.documentElement.classList.contains('light');
        const baseColor = isLightTheme ? '71, 85, 105' : '99, 102, 241';

        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < -p.size || p.x > canvas.width + p.size) p.speedX *= -1;
          if (p.y < -p.size || p.y > canvas.height + p.size) p.speedY *= -1;

          if (fx === 'particles') {
            p.alpha += p.pulse * p.pulseDirection;
            if (p.alpha > 0.7 || p.alpha < 0.2) p.pulseDirection *= -1;
          }

          if (fx === 'nebulas') {
            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
            gradient.addColorStop(0, `rgba(${baseColor}, ${p.alpha})`);
            gradient.addColorStop(0.5, `rgba(${baseColor}, ${p.alpha * 0.4})`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = `rgba(${baseColor}, ${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      cancelAnimationFrame(resizeRafId);
    };
  }, [isMobile, fx]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <div className={styles.scrollBar} style={{ width: `${scrollProgress}%` }} />
      <canvas ref={canvasRef} className={styles.canvas} />
      {!isMobile && (
        <>
          <div ref={dotRef} className={styles.cursorDot} />
          <div ref={glowRef} className={styles.cursorGlow} />
        </>
      )}
      <button 
        className={`${styles.scrollTopBtn} ${showScrollTop ? styles.showBtn : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="46" height="46" viewBox="0 0 46 46" className={styles.svgCircle}>
          <circle className={styles.circleBg} cx="23" cy="23" r={radius} strokeWidth="3.5" />
          <circle 
            className={styles.circleProgress}
            cx="23" cy="23" r={radius} strokeWidth="3.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <span className={styles.arrow}>↑</span>
      </button>
    </>
  );
}
