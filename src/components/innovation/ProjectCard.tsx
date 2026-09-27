import React from 'react';
import { Box, Title, Text } from '@mantine/core';
import { RoboticsProject } from '../../data/robotics';
import ImageReveal from '../common/ImageReveal';

interface ProjectCardProps {
  project: RoboticsProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Box
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #ECEAE5',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color 0.25s ease, transform 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#1F1F1F';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#ECEAE5';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div>
        <ImageReveal
          src={project.image}
          alt={project.title}
          aspectRatio="16/10"
          style={{ borderBottom: '1px solid #ECEAE5' }}
        />

        <Box style={{ padding: '24px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#888', marginBottom: '8px' }}>
            <span style={{ fontWeight: 600, color: '#1F1F1F' }}>{project.category}</span>
            <span>·</span>
            <span>{project.gradeLevel}</span>
          </div>

          <Title order={4} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.15rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '10px' }}>
            {project.title}
          </Title>

          <Text size="sm" style={{ color: '#555555', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif', marginBottom: '16px' }}>
            {project.description}
          </Text>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.technologies.map((t) => (
              <span key={t} style={{ fontSize: '0.72rem', padding: '3px 8px', backgroundColor: '#F7F7F5', border: '1px solid #ECEAE5', color: '#444' }}>
                {t}
              </span>
            ))}
          </div>
        </Box>
      </div>

      {project.award && (
        <Box style={{ padding: '12px 20px', borderTop: '1px solid #ECEAE5', backgroundColor: '#FAFAF8' }}>
          <Text size="xs" style={{ color: '#2C6237', fontWeight: 600, fontFamily: 'DM Sans, sans-serif' }}>
            ★ {project.award}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ProjectCard;
