'use client';

export default function Flag({ country, size = 'md', className = '' }) {
  const width = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
  const height = size === 'sm' ? 11 : size === 'lg' ? 17 : 14;

  if (country === 'PS') {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 24 12" 
        className={className}
        style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', marginRight: '6px' }}
      >
        <rect width="24" height="12" fill="#007A3D" />
        <rect width="24" height="8" fill="#FFF" />
        <rect width="24" height="4" fill="#000" />
        <polygon points="0,0 0,12 8,6" fill="#E4312B" />
      </svg>
    );
  }

  if (country === 'TN') {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 24 16" 
        className={className}
        style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', marginRight: '6px' }}
      >
        <rect width="24" height="16" fill="#E20E17" />
        <circle cx="12" cy="8" r="4.5" fill="#FFF" />
        <path d="M 13.5 5.5 A 3 3 0 1 0 13.5 10.5 A 2.4 2.4 0 1 1 13.5 5.5 Z" fill="#E20E17" />
        <polygon points="13.2,7 13.7,8.5 15.2,8.5 14,9.4 14.5,10.9 13.2,10 11.9,10.9 12.4,9.4 11.2,8.5 12.7,8.5" fill="#E20E17" />
      </svg>
    );
  }

  return null;
}
