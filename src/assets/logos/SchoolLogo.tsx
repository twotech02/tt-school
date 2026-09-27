import React from 'react';

interface SchoolLogoProps {
  color?: string;
  subtextColor?: string;
  size?: number;
  showText?: boolean;
  light?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  color,
  subtextColor,
  size = 32,
  showText = true,
  light = false,
}) => {
  const primaryColor = color || (light ? '#FFFFFF' : '#1F1F1F');
  const secondaryColor = subtextColor || (light ? 'rgba(255, 255, 255, 0.75)' : '#666666');

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      {/* Geometric ribbon E monogram inspired by reference image */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <path
          d="M6 13C6 9.13401 9.13401 6 13 6H24C27.866 6 31 9.13401 31 13C31 16.866 27.866 20 24 20H12"
          stroke={primaryColor}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 20H28C31.866 20 35 23.134 35 27C35 30.866 31.866 34 28 34H13C9.13401 34 6 30.866 6 27"
          stroke={primaryColor}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 20H21"
          stroke={primaryColor}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              fontSize: `${Math.max(16, size * 0.5)}px`,
              letterSpacing: '-0.02em',
              color: primaryColor,
            }}
          >
            Everfield
          </span>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: `${Math.max(10, size * 0.3)}px`,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: secondaryColor,
            }}
          >
            International School
          </span>
        </div>
      )}
    </div>
  );
};

export default SchoolLogo;
