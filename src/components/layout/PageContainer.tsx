import React from 'react';
import { Container, ContainerProps } from '@mantine/core';

interface PageContainerProps extends ContainerProps {
  children: React.ReactNode;
  bg?: string;
  paddingY?: string | number;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  bg = 'transparent',
  paddingY = 0,
  size = 'xl',
  style,
  ...props
}) => {
  return (
    <div style={{ backgroundColor: bg, width: '100%', padding: `${paddingY} 0` }}>
      <Container
        size={size}
        style={{
          maxWidth: '1360px',
          paddingLeft: '24px',
          paddingRight: '24px',
          ...style,
        }}
        {...props}
      >
        {children}
      </Container>
    </div>
  );
};

export default PageContainer;
