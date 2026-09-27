import IMAGES from '../assets/images';

export interface InnovationArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  image: string;
}

export const INNOVATION_AREAS: InnovationArea[] = [
  {
    id: 'ai-machine-learning',
    title: 'Artificial Intelligence & Neural Networks',
    subtitle: 'From algorithmic principles to responsible deployment',
    description: 'Students dissect the inner workings of large language models, computer vision systems, and predictive neural networks, learning to train custom edge models while critically debating AI ethics, bias, and societal impact.',
    technologies: ['PyTorch', 'Hugging Face', 'Computer Vision (OpenCV)', 'Edge AI TPU acceleration'],
    metrics: [
      { label: 'Student Projects', value: '45+' },
      { label: 'Research Papers', value: '12 Published' },
    ],
    image: IMAGES.smartClassroom,
  },
  {
    id: 'maker-prototyping',
    title: 'Rapid Prototyping & Digital Fabrication',
    subtitle: 'Transforming ideas into physical hardware',
    description: 'Equipped with industrial-grade laser cutters, 6-axis CNC mills, and dual-extrusion 3D printers, students learn mechanical CAD design, tolerance analysis, and iterative physical engineering.',
    technologies: ['Autodesk Fusion 360', 'SLA & FDM 3D Printing', 'CO2 Laser Cutters', 'CNC Milling'],
    metrics: [
      { label: 'Prototypes Fabricated', value: '320+' },
      { label: 'Patents Pending', value: '3' },
    ],
    image: IMAGES.roboticsLab,
  },
  {
    id: 'sustainability-clean-tech',
    title: 'Clean Energy & Environmental Computing',
    subtitle: 'Engineering climate resilience',
    description: 'Using campus weather stations, IoT soil sensors, and solar micro-grids, students measure real-time environmental metrics and build automated conservation systems.',
    technologies: ['Solar Microgrids', 'LoRaWAN Long-Range IoT', 'Atmospheric Sensors', 'GIS Mapping'],
    metrics: [
      { label: 'Campus Energy Tracked', value: '100%' },
      { label: 'Water Saved Annually', value: '25,000L' },
    ],
    image: IMAGES.heroCampus,
  },
];

export const SMART_CLASSROOM_FEATURES = [
  {
    title: 'Interactive 4K Display Arrays',
    description: 'Multi-touch digital boards with ultra-low latency stylus input, allowing synchronous whiteboard sharing between in-class and remote participants.',
  },
  {
    title: 'AI-Assisted Formative Feedback',
    description: 'Adaptive diagnostic platforms that identify student conceptual stumbling blocks in real time and suggest tailored practice problems.',
  },
  {
    title: 'Virtual & Augmented Reality Pods',
    description: 'Immersive exploration of atomic structures, astrophysical phenomena, and historical architecture via stereoscopic spatial headsets.',
  },
  {
    title: 'Acoustic & Bioclimatic Optimization',
    description: 'Automated CO2 regulation, daylight-balanced spectrum lighting, and noise-canceling architectural paneling for optimal cognitive focus.',
  },
];
