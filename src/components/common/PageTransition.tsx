import React from 'react';
import { Box } from '@mantine/core';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <Box
      style={{
        animation: 'fadeIn 0.4s ease-out',
        minHeight: '100vh',
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {children}
    </Box>
  );
};

export default PageTransition;
