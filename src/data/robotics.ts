import IMAGES from '../assets/images';

export interface RoboticsProject {
  id: string;
  title: string;
  category: string;
  gradeLevel: string;
  description: string;
  technologies: string[];
  image: string;
  award?: string;
}

export const ROBOTICS_PILLARS = [
  {
    tag: 'BUILD',
    title: 'Precision Mechanical Engineering',
    description: 'Students design, machine, and assemble complex physical robots using industrial aluminum extrusions, gear trains, pneumatics, and customized 3D-printed chassis.',
  },
  {
    tag: 'CODE',
    title: 'Embedded Systems & AI Logic',
    description: 'Writing clean, real-time control software in C++, Python, and ROS (Robot Operating System). Integrating PID feedback loops and computer vision models.',
  },
  {
    tag: 'EXPERIMENT',
    title: 'Sensors, IoT & Telemetry',
    description: 'Interfacing LiDAR, ultrasonic ranging, IMUs, torque sensors, and IoT wireless radios to collect high-fidelity telemetry during trial runs.',
  },
  {
    tag: 'CREATE',
    title: 'Real-World Solution Deployment',
    description: 'Taking technology out of the sandbox to solve ecological, civic, and biomedical dilemmas through functional working prototypes.',
  },
];

export const ROBOTICS_CURRICULUM_STAGES = [
  {
    stage: 'Grades 1 – 3',
    title: 'Early Spatial Logic & Tangible Coding',
    tools: ['Lego Education SPIKE Prime', 'Scratch Blocks', 'Tinkercad'],
    focus: 'Kinematic motion, gear ratios, spatial sequencing, and algorithmic problem-solving.',
  },
  {
    stage: 'Grades 4 – 6',
    title: 'Microcontrollers & Applied Sensors',
    tools: ['BBC micro:bit', 'Arduino Uno', 'Blockly & Python Intro'],
    focus: 'Closed-loop feedback, electronic circuit breadboards, light/sound sensors, and motor drivers.',
  },
  {
    stage: 'Grades 7 – 9',
    title: 'VEX Robotics & Autonomous Navigation',
    tools: ['VEX V5 System', 'C++', 'Fusion 360 CAD', '3D Printing'],
    focus: 'Autonomous path planning, PID control algorithms, aluminum chassis fabrication, and competition match strategy.',
  },
  {
    stage: 'Grades 10 – 12',
    title: 'Advanced AI, ROS & FIRST Tech Challenge',
    tools: ['Raspberry Pi 5', 'OpenCV / YOLO Vision', 'ROS2', 'SolidWorks'],
    focus: 'Neural networks on edge devices, SLAM navigation, complex manipulator arms, and university research papers.',
  },
];

export const STUDENT_ROBOTICS_PROJECTS: RoboticsProject[] = [
  {
    id: 'autonomous-solar-rover',
    title: 'Autonomous Solar Agritech Rover',
    category: 'Robotics & AI',
    gradeLevel: 'Grade 11 Team',
    description: 'An autonomous field scout rover utilizing computer vision to detect early crop leaf blight and deliver precision micro-treatments without chemical overspray.',
    technologies: ['Raspberry Pi 5', 'TensorFlow Lite', 'Python', 'Solar Photovoltaics', 'Chassis CAD'],
    image: IMAGES.roboticsLab,
    award: '1st Place, National Youth STEM Innovators 2025',
  },
  {
    id: 'bionic-prosthetic-hand',
    title: 'Affordable 3D-Printed Myoelectric Hand',
    category: 'Biomedical & Robotics',
    gradeLevel: 'Grade 12 Capstone',
    description: 'A 3D-printed bionic prosthetic hand driven by surface EMG muscle sensors, costing under $120 to manufacture and capable of fine pinch and adaptive grasp.',
    technologies: ['EMG Sensor Arrays', 'Arduino Nano', 'Tendon Cable Mechanics', 'PETG 3D Printing'],
    image: IMAGES.smartClassroom,
    award: 'Finalist, Global High School Innovation Summit',
  },
  {
    id: 'subsea-microplastics-drone',
    title: 'Autonomous Submersible Water Sampler',
    category: 'Marine Robotics',
    gradeLevel: 'Grade 10 Team',
    description: 'An underwater remotely operated vehicle (ROV) with motorized ballast and filtration chambers to collect and log microplastic concentrations in coastal waters.',
    technologies: ['Waterproof Thrusters', 'ESP32 IoT', 'Real-Time Telemetry', 'Spectroscopy Sensor'],
    image: IMAGES.scienceLab,
    award: 'Regional Environmental Science Gold Medal',
  },
];
