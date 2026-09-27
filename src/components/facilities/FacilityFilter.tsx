import React from 'react';
import { Box } from '@mantine/core';
import { FACILITY_CATEGORIES } from '../../data/facilities';

interface FacilityFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const FacilityFilter: React.FC<FacilityFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '16px',
        borderBottom: '1px solid #ECEAE5',
        marginBottom: '40px',
      }}
    >
      {FACILITY_CATEGORIES.map((cat) => {
        const isSelected = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            style={{
              padding: '8px 18px',
              fontSize: '0.85rem',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: isSelected ? 600 : 400,
              color: isSelected ? '#1F1F1F' : '#666666',
              backgroundColor: isSelected ? '#FFFFFF' : 'transparent',
              border: isSelected ? '1px solid #1F1F1F' : '1px solid #ECEAE5',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </button>
        );
      })}
    </Box>
  );
};

export default FacilityFilter;
