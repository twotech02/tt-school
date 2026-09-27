import React, { useState } from 'react';
import { Grid, Box, Text } from '@mantine/core';
import { Facility } from '../../data/facilities';
import FacilityCard from './FacilityCard';
import FacilityFilter from './FacilityFilter';

interface FacilityGalleryProps {
  facilities: Facility[];
}

export const FacilityGallery: React.FC<FacilityGalleryProps> = ({ facilities }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = selectedCategory === 'All'
    ? facilities
    : facilities.filter((f) => f.category === selectedCategory);

  return (
    <Box>
      <FacilityFilter
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <Grid gutter={32}>
        {filtered.map((facility) => (
          <Grid.Col key={facility.id} span={{ base: 12, sm: 6, lg: 4 }}>
            <FacilityCard facility={facility} />
          </Grid.Col>
        ))}
      </Grid>

      {filtered.length === 0 && (
        <Box style={{ padding: '60px 0', textAlign: 'center' }}>
          <Text size="md" c="dimmed">
            No facilities currently categorized in this section.
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default FacilityGallery;
