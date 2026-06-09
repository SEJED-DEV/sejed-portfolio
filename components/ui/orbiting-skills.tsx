"use client"
import React, { useEffect, useState, memo, useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';

// --- Types ---
type IconType = 'javascript' | 'typescript' | 'python' | 'react' | 'nextjs' | 'node' | 'mongodb' | 'docker' | 'git';
type GlowColor = 'cyan' | 'indigo' | 'purple';

interface SkillItem {
  id: string;
  iconType: IconType;
  label: string;
}

interface OrbitLayer {
  radius: number;
  speed: number;
  glowColor: GlowColor;
  items: SkillItem[];
}

interface TrailDot {
  angle: number;
  radius: number;
  opacity: number;
}

// --- SVG Icons ---
const icons: Record<IconType, { svg: () => React.JSX.Element; color: string }> = {
  javascript: {
    svg: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330"/>
      </svg>
    ),
    color: '#F7DF1E'
  },
  typescript: {
    svg: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#3178C6"/>
        <path d="M3 3h18v18H3V3zm10.08 9.96h-2.46v6.9H8.94v-6.9H6.5v-1.66h6.58v1.66zm.6 5.72v-1.7c.45.35 1.02.6 1.66.6.38 0 .64-.12.64-.42 0-.24-.16-.4-.7-.6-.85-.3-1.42-.74-1.42-1.5 0-.86.7-1.48 1.82-1.48.76 0 1.34.2 1.76.56l-.44 1.3c-.36-.24-.8-.4-1.28-.4-.36 0-.6.12-.6.36 0 .28.2.4.78.64.86.32 1.34.78 1.34 1.5 0 .92-.74 1.54-1.96 1.54-.84 0-1.52-.24-1.96-.6z" fill="#fff"/>
      </svg>
    ),
    color: '#3178C6'
  },
  python: {
    svg: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.91 0C6.29 0 6.1 2.35 6.1 2.68l.01 2.76h5.92v.84H4.07c-1.57 0-2.95.97-3.38 2.82-.49 2.13-.51 3.46 0 5.69.38 1.67 1.31 2.82 2.88 2.82h1.88v-2.66c0-1.86 1.64-3.5 3.48-3.5h5.59c1.55 0 2.79-1.28 2.79-2.83V4.66c0-1.49-1.26-2.56-2.79-2.88C13.87.09 12.87 0 11.91 0zM9.25 1.82c.63 0 1.15.52 1.15 1.16 0 .64-.52 1.16-1.15 1.16-.64 0-1.16-.52-1.16-1.16 0-.64.52-1.16 1.16-1.16z" fill="#3776AB"/>
        <path d="M16.04 5.84v2.55c0 1.98-1.67 3.6-3.5 3.6H6.98c-1.57 0-2.77 1.36-2.77 2.9v5.44c0 1.54 1.3 2.45 2.77 2.86 1.75.5 3.43.59 5.59 0 1.43-.39 2.77-1.18 2.77-2.86v-2.17h-2.78v1.36c0 .75-.72 1.06-1.39 1.06H7.82v-5.4h9.73c1.57 0 2.19-1.07 2.77-2.86.42-1.3.4-2.55 0-5.43-.3-2.07-1.24-2.86-2.77-2.86h-1.51zM13.9 20.04c.63 0 1.15.53 1.15 1.17 0 .64-.52 1.16-1.15 1.16-.64 0-1.16-.52-1.16-1.16 0-.64.52-1.17 1.16-1.17z" fill="#FFD43B"/>
      </svg>
    ),
    color: '#3776AB'
  },
  react: {
    svg: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
    color: '#61DAFB'
  },
  nextjs: {
    svg: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <circle cx="12" cy="12" r="12" fill="#000"/>
        <path d="M18.665 19.547A11.94 11.94 0 0112 24c-4.8 0-8.943-2.82-10.855-6.871l8.416-11.55h2.878l-3.66 5.023 5.073 7.33 3.88-5.317-.023 11.932z" fill="url(#nextjs-gradient)"/>
        <path fill="#fff" d="M18.665 19.547A11.94 11.94 0 0112 24C5.383 24 0 18.617 0 12 0 5.383 5.383 0 12 0c3.18 0 6.07 1.238 8.215 3.254A11.97 11.97 0 0124 12c0 3.18-1.238 6.07-3.254 8.215l-7.63-10.46H11.57v7.157h1.326v-5.25l5.77 7.885z"/>
        <defs>
          <linearGradient id="nextjs-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff"/>
            <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    color: '#000000'
  },
  node: {
    svg: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z" fill="#339933"/>
      </svg>
    ),
    color: '#339933'
  },
  mongodb: {
    svg: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M17.193 9.555c-1.546-4.043-3.048-6.065-4.21-7.404-.397-.523-.78-.946-1.077-1.252-.275-.283-.457-.338-.534-.321-.13.028-.154.175-.153.35.002.574.13 1.469.306 2.407.23 1.224.578 2.734.787 3.535.004.014.094.003.108-.002 1.04-.5 2.336-1.124 2.336-1.124s.087.083.185.23c.292.436.566.984.826 1.613.59 1.432.993 3.083.993 4.705 0 3.18-1.407 5.924-3.293 7.392-.107.082-.234.17-.354.252.055.042.105.09.153.14.385.405.746.84 1.074 1.306.353.5.63 1.016.81 1.532.06.17.104.334.116.48 0 .023.016.048.03.048.008 0 .023-.004.023-.04.44-2.305.666-4.638.666-6.982 0-2.036-.33-3.965-.868-5.653z" fill="#47A248"/>
        <path d="M9.923 21.613c-.043-.02-.082-.056-.12-.09-.034-.032-.067-.064-.1-.094-1.01-1.092-1.802-2.768-2.32-4.6-.322-1.137-.5-2.323-.5-3.51 0-1.73.467-3.45 1.276-5.002.348-.667.758-1.28 1.21-1.806.1-.115.2-.225.306-.33.052-.05.105-.1.16-.147.013-.013.034-.022.054-.03.016-.006.032-.008.048-.002l.103.044.037.032c.02.02.038.04.053.06.074.093.147.19.215.29.3.432.56.917.775 1.437.03.072.058.144.085.218l.172-.09c.22-.115.437-.234.648-.357l.118-.07c.468-.282.893-.582 1.24-.908.176-.164.323-.334.42-.515.03-.056.04-.106.03-.148s-.05-.075-.12-.092c-.238-.06-.962-.26-1.59-.396-.34-.074-.646-.14-.828-.184-.054-.013-.098-.022-.117-.025l-.057-.02-.033-.014c-.022-.01-.04-.02-.054-.034l-.023-.025-.01-.018-.008-.03v-.064c0-.014.003-.027.008-.04.01-.027.027-.05.05-.07.022-.017.05-.03.082-.037.028-.006.06-.008.09-.008.115.002.484.002.836.003.36 0 .7.004.84.005.022 0 .047.008.074.02.07.03.133.075.188.128.176.17.35.348.514.535.13.148.255.305.377.467l.048.063c.245.328.476.68.693 1.047.212.36.405.737.574 1.125.16.367.295.74.398 1.11.17.613.25 1.208.25 1.75 0 1.62-.55 3.18-1.61 4.52-.53.67-1.16 1.23-1.88 1.66-.14.08-.28.16-.43.23-.06.03-.12.06-.18.08-.2.08-.4.14-.61.2-.1.03-.21.05-.31.08-.07.02-.14.03-.21.05l-.003.003z" fill="#47A248"/>
      </svg>
    ),
    color: '#47A248'
  },
  docker: {
    svg: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M13.983 11.078h2.119v-1.836h-2.119v1.836zm0-3.205h2.119V6.038h-2.119v1.835zm-3.237 3.205h2.119v-1.836h-2.119v1.836zm0-3.205h2.119V6.038h-2.119v1.835zm-3.236 3.205h2.118v-1.836H7.51v1.836zm0-3.205h2.118V6.038H7.51v1.835zm-3.066 3.205h2.118v-1.836H4.444v1.836zm0-3.205h2.118V6.038H4.444v1.835zm10.702-2.704h2.119V4.333h-2.119v1.836zm3.238 3.205h2.118v-1.836h-2.118v1.836z" fill="#099CEC"/>
        <path d="M15.093 20.068c-1.805 0-3.378-.472-4.668-1.408-1.29-.936-2.007-2.21-2.093-3.796h9.71c.12 0 .234-.045.326-.127.09-.082.146-.196.156-.32.056-.7.056-1.418 0-2.113-.01-.124-.066-.238-.156-.32-.092-.082-.206-.127-.326-.127H8.332c.002-.288.014-.578.044-.871.06-.6.31-1.515.782-2.625.56-1.318 1.365-2.54 2.39-3.624.12-.126.145-.32.06-.478-.083-.16-.275-.244-.446-.19-1.122.336-2.174.86-3.11 1.546.074-.407.177-.817.31-1.228.064-.198-.062-.41-.263-.46-.198-.052-.407.07-.48.265-.672 1.79-1.068 3.694-1.174 5.624h-.142c-1.49 0-2.837.474-3.945 1.388-.438.36-.816.775-1.122 1.24-1.31 1.994-1.38 4.424-.196 6.498.708 1.24 1.752 2.25 3.045 2.96 1.297.71 2.795 1.075 4.394 1.075h6.42c1.665 0 3.016-.6 4.072-1.786 1.057-1.186 1.575-2.73 1.575-4.6v-1.423h-.762c.015.237.015.473 0 .71v.003c.015.237.015.474 0 .71 0 1.54-.43 2.802-1.276 3.784-.847.982-2.02 1.48-3.503 1.48z" fill="#099CEC"/>
      </svg>
    ),
    color: '#099CEC'
  },
  git: {
    svg: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.716.72.716 1.882 0 2.6-.719.719-1.881.719-2.6 0-.539-.54-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.722.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-1.999L7.452 3.696 1.073 10.073c-.604.604-.604 1.584 0 2.188l10.478 10.479c.604.604 1.582.604 2.188 0l9.807-9.807c.604-.603.604-1.584 0-2.187z" fill="#F05032"/>
      </svg>
    ),
    color: '#F05032'
  }
};

// --- Default orbit configuration ---
const defaultOrbits: OrbitLayer[] = [
  {
    radius: 90,
    speed: 0.8,
    glowColor: 'cyan',
    items: [
      { id: 'javascript', iconType: 'javascript', label: 'JavaScript' },
      { id: 'typescript', iconType: 'typescript', label: 'TypeScript' },
      { id: 'python', iconType: 'python', label: 'Python' },
    ]
  },
  {
    radius: 150,
    speed: -0.5,
    glowColor: 'indigo',
    items: [
      { id: 'react', iconType: 'react', label: 'React' },
      { id: 'nextjs', iconType: 'nextjs', label: 'Next.js' },
      { id: 'node', iconType: 'node', label: 'Node.js' },
    ]
  },
  {
    radius: 210,
    speed: 0.35,
    glowColor: 'purple',
    items: [
      { id: 'mongodb', iconType: 'mongodb', label: 'MongoDB' },
      { id: 'docker', iconType: 'docker', label: 'Docker' },
      { id: 'git', iconType: 'git', label: 'Git' },
    ]
  }
];

const glowPalette: Record<GlowColor, { ring: string; trail: string; glow: string; border: string }> = {
  cyan: {
    ring: 'rgba(6, 182, 212, 0.35)',
    trail: 'rgba(6, 182, 212, 0.5)',
    glow: 'rgba(6, 182, 212, 0.15)',
    border: 'rgba(6, 182, 212, 0.25)'
  },
  indigo: {
    ring: 'rgba(99, 102, 241, 0.35)',
    trail: 'rgba(99, 102, 241, 0.5)',
    glow: 'rgba(99, 102, 241, 0.15)',
    border: 'rgba(99, 102, 241, 0.25)'
  },
  purple: {
    ring: 'rgba(168, 85, 247, 0.35)',
    trail: 'rgba(168, 85, 247, 0.5)',
    glow: 'rgba(168, 85, 247, 0.15)',
    border: 'rgba(168, 85, 247, 0.25)'
  }
};

// --- Sub-components ---

const SkillIcon = memo(({ type }: { type: IconType }) => {
  const Icon = icons[type]?.svg;
  return Icon ? <Icon /> : null;
});
SkillIcon.displayName = 'SkillIcon';

const OrbitingNode = memo(({ item, angle, radius, color, index }: {
  item: SkillItem;
  angle: number;
  radius: number;
  color: string;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const size = 42;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: hovered ? 30 : 10,
      }}
    >
      <div
        className={cn(
          'relative w-full h-full rounded-full flex items-center justify-center',
          'backdrop-blur-sm transition-all duration-300 cursor-pointer',
          'p-2',
          hovered
            ? 'scale-125 shadow-2xl bg-gray-700/95'
            : 'shadow-lg hover:shadow-xl bg-gray-800/85'
        )}
        style={{
          boxShadow: hovered
            ? `0 0 30px ${color}50, 0 0 60px ${color}25`
            : undefined
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SkillIcon type={item.iconType} />
        {hovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900/95 backdrop-blur-sm rounded-md text-xs text-white whitespace-nowrap pointer-events-none font-medium tracking-wide">
            {item.label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingNode.displayName = 'OrbitingNode';

const GlowRing = memo(({ radius, glowColor, time }: {
  radius: number;
  glowColor: GlowColor;
  time: number;
}) => {
  const c = glowPalette[glowColor];

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 35%, ${c.glow} 65%, transparent 100%)`,
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
      {/* Dashed rotating ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        style={{ animation: `spin-ring 20s linear infinite` }}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <defs>
          <linearGradient id={`ring-grad-${radius}-${glowColor}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.ring} stopOpacity="1" />
            <stop offset="50%" stopColor={c.ring} stopOpacity="0.3" />
            <stop offset="100%" stopColor={c.ring} stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle
          cx={radius}
          cy={radius}
          r={radius - 1}
          fill="none"
          stroke={`url(#ring-grad-${radius}-${glowColor})`}
          strokeWidth="1.5"
          strokeDasharray="6 8"
          strokeLinecap="round"
        />
      </svg>
      {/* Inner subtle ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: `1px solid ${c.border}`, boxShadow: `inset 0 0 30px ${c.glow}` }}
      />
    </div>
  );
});
GlowRing.displayName = 'GlowRing';

// --- Connection beam from center to orbital position ---
const ConnectionBeam = memo(({ angle, radius, color, time }: {
  angle: number;
  radius: number;
  color: string;
  time: number;
}) => {
  const pulse = Math.sin(time * 2 + angle) * 0.3 + 0.7;

  return (
    <div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{
        width: '2px',
        height: `${radius}px`,
        transform: `translate(-50%, -50%) rotate(${angle}rad) translateY(${radius / 2}px)`,
        opacity: pulse * 0.4,
        background: `linear-gradient(to top, ${color}, transparent)`,
        transformOrigin: 'center center',
      }}
    />
  );
});
ConnectionBeam.displayName = 'ConnectionBeam';

// --- Trail particle ---
const TrailParticle = memo(({ x, y, opacity }: { x: number; y: number; opacity: number }) => (
  <div
    className="absolute top-1/2 left-1/2 pointer-events-none rounded-full"
    style={{
      width: '4px',
      height: '4px',
      transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
      opacity,
      backgroundColor: '#06B6D4',
      boxShadow: '0 0 6px #06B6D4',
    }}
  />
));
TrailParticle.displayName = 'TrailParticle';

// --- Main component ---

export interface OrbitingSkillsProps {
  orbits?: OrbitLayer[];
  size?: number;
  onSkillClick?: (id: string, label: string) => void;
  className?: string;
}

export default function OrbitingSkills({
  orbits = defaultOrbits,
  size = 480,
  onSkillClick,
  className
}: OrbitingSkillsProps) {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Animation loop ---
  useEffect(() => {
    if (paused) return;
    let frame: number;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setTime(t => t + dt);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  // --- 3D tilt on mouse move ---
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setTilt({ x: dy * 12, y: -dx * 12 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  // --- Build trail positions ---
  const trails: TrailDot[] = [];
  orbits.forEach((orbit) => {
    orbit.items.forEach((item, idx) => {
      const angle = time * orbit.speed + (idx * Math.PI * 2) / orbit.items.length;
      for (let t = 1; t <= 4; t++) {
        const trailAngle = angle - t * 0.06;
        trails.push({
          angle: trailAngle,
          radius: orbit.radius,
          opacity: 0.3 - t * 0.07,
        });
      }
    });
  });

  const maxR = Math.max(...orbits.map(o => o.radius));

  return (
    <div
      ref={containerRef}
      className={cn(
        'w-full flex items-center justify-center overflow-hidden select-none',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setPaused(true)}
      onMouseOut={() => setPaused(false)}
      style={{ perspective: '800px' }}
    >
      <div
        className="relative transition-transform duration-200 ease-out"
        style={{
          width: size,
          height: size,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Subtle background glow */}
        <div
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Orbit rings */}
        {orbits.map((orbit) => (
          <GlowRing key={orbit.radius} radius={orbit.radius} glowColor={orbit.glowColor} time={time} />
        ))}

        {/* Connection beams */}
        {orbits.map((orbit) =>
          orbit.items.map((item, idx) => {
            const angle = time * orbit.speed + (idx * Math.PI * 2) / orbit.items.length;
            const c = glowPalette[orbit.glowColor];
            return (
              <ConnectionBeam
                key={`beam-${item.id}`}
                angle={angle}
                radius={orbit.radius}
                color={c.trail}
                time={time}
              />
            );
          })
        )}

        {/* Trail particles */}
        {trails.map((trail, i) => {
          const tx = Math.cos(trail.angle) * trail.radius;
          const ty = Math.sin(trail.angle) * trail.radius;
          return (
            <TrailParticle key={`trail-${i}`} x={tx} y={ty} opacity={trail.opacity} />
          );
        })}

        {/* Central hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          {/* Outer glow rings */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl animate-pulse" />
          <div
            className="absolute inset-0 rounded-full bg-purple-500/15 blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          {/* Rotating ring around center */}
          <div
            className="absolute -inset-4 rounded-full border border-cyan-400/20"
            style={{ animation: 'spin-ring 8s linear infinite' }}
          />
          <div
            className="absolute -inset-8 rounded-full border border-purple-400/10"
            style={{ animation: 'spin-ring 12s linear infinite reverse' }}
          />
          {/* Core circle */}
          <div className="relative w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-2xl border border-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="url(#center-grad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="center-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>

        {/* Orbiting nodes */}
        {orbits.map((orbit) =>
          orbit.items.map((item, idx) => {
            const angle = time * orbit.speed + (idx * Math.PI * 2) / orbit.items.length;
            const c = glowPalette[orbit.glowColor];
            return (
              <div
                key={item.id}
                onClick={() => onSkillClick?.(item.id, item.label)}
                role={onSkillClick ? 'button' : undefined}
                tabIndex={onSkillClick ? 0 : undefined}
              >
                <OrbitingNode
                  item={item}
                  angle={angle}
                  radius={orbit.radius}
                  color={c.trail}
                  index={idx}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
