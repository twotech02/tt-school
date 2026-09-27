import React from 'react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowUpRight, IconArrowRight } from '@tabler/icons-react';

export interface AnimatedButtonProps {
  variant?: 'solid' | 'outline' | 'white' | 'ghost';
  to?: string;
  href?: string;
  arrow?: 'right' | 'upRight' | 'none';
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e?: React.MouseEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  visibleFrom?: 'sm' | 'md' | 'lg' | 'xl';
  hiddenFrom?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'solid',
  to,
  href,
  arrow = 'none',
  children,
  type = 'button',
  onClick,
  loading = false,
  disabled = false,
  style,
  className,
  visibleFrom,
  hiddenFrom,
}) => {
  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.01em',
      borderRadius: '0px',
      padding: '0 24px',
      height: '46px',
      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    };

    switch (variant) {
      case 'solid':
        return {
          ...base,
          backgroundColor: '#1F1F1F',
          color: '#FFFFFF',
          border: '1px solid #1F1F1F',
        };
      case 'white':
        return {
          ...base,
          backgroundColor: '#FFFFFF',
          color: '#1F1F1F',
          border: '1px solid #FFFFFF',
        };
      case 'outline':
        return {
          ...base,
          backgroundColor: 'transparent',
          color: '#1F1F1F',
          border: '1px solid #1F1F1F',
        };
      case 'ghost':
        return {
          ...base,
          backgroundColor: 'transparent',
          color: '#1F1F1F',
          border: '1px solid transparent',
          padding: '0 12px',
        };
      default:
        return base;
    }
  };

  const renderIcon = () => {
    if (arrow === 'upRight') return <IconArrowUpRight size={16} stroke={1.75} style={{ marginLeft: 6 }} />;
    if (arrow === 'right') return <IconArrowRight size={16} stroke={1.75} style={{ marginLeft: 6 }} />;
    return null;
  };

  if (to) {
    return (
      <Button
        component={Link}
        to={to}
        onClick={onClick}
        loading={loading}
        disabled={disabled}
        visibleFrom={visibleFrom}
        hiddenFrom={hiddenFrom}
        className={className}
        style={getStyles()}
      >
        {children}
        {renderIcon()}
      </Button>
    );
  }

  if (href) {
    return (
      <Button
        component="a"
        href={href}
        onClick={onClick}
        loading={loading}
        disabled={disabled}
        visibleFrom={visibleFrom}
        hiddenFrom={hiddenFrom}
        className={className}
        style={getStyles()}
      >
        {children}
        {renderIcon()}
      </Button>
    );
  }

  return (
    <Button
      type={type}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      visibleFrom={visibleFrom}
      hiddenFrom={hiddenFrom}
      className={className}
      style={getStyles()}
    >
      {children}
      {renderIcon()}
    </Button>
  );
};

export default AnimatedButton;
