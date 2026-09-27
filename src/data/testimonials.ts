export interface Testimonial {
  id: string;
  category: 'Parents' | 'Students' | 'Alumni';
  quote: string;
  author: string;
  role: string;
  detail: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    category: 'Parents',
    quote: 'Our daughter transitioned to Everfield in Grade 7. Within months, we witnessed a profound transformation in her confidence and curiosity. The teachers do not just teach syllabus; they inspire students to understand why what they are learning matters in the world.',
    author: 'Evelyn & David Chen',
    role: 'Parents of Chloe, Grade 9',
    detail: 'Enrolled since 2022',
  },
  {
    id: '2',
    category: 'Students',
    quote: 'Being able to work on real computer vision algorithms in the Robotics Lab while also performing in the school orchestra taught me that I did not have to choose between science and art. Everfield gives you the freedom and mentorship to pursue all your passions.',
    author: 'Aiden Takahashi',
    role: 'Head Student, Class of 2026',
    detail: 'National Robotics Finalist & Cellist',
  },
  {
    id: '3',
    category: 'Alumni',
    quote: 'The academic rigor, independent research projects, and global outlook at Everfield prepared me for the demanding pace of Cambridge Computer Science like nothing else could have. I entered university already knowing how to collaborate and think critically.',
    author: 'Sarah Al-Mansoor',
    role: 'Alumna, Class of 2024',
    detail: 'Now studying Computer Science at Cambridge University',
  },
  {
    id: '4',
    category: 'Parents',
    quote: 'The pastoral care and focus on emotional wellbeing sets Everfield miles apart from other schools. In a high-achieving environment, knowing that mental health and empathy are equally prized gives us immense peace of mind.',
    author: 'Jonathan & Maria Hayes',
    role: 'Parents of Liam & Sophia, Grades 4 & 6',
    detail: 'Enrolled since 2021',
  },
  {
    id: '5',
    category: 'Students',
    quote: 'Our teachers treat our questions with genuine intellectual respect. In science seminars, we debate current research and run our own hypothesis tests rather than simply memorizing textbook answers.',
    author: 'Maya Lin',
    role: 'Grade 11 Student',
    detail: 'Environmental Action Taskforce Leader',
  },
  {
    id: '6',
    category: 'Alumni',
    quote: 'Everfield taught me that leadership is about lifting others up. The startup incubator gave me the conviction to launch my first clean-tech venture right after graduating from Stanford.',
    author: 'Lucas Vance',
    role: 'Alumnus, Class of 2021',
    detail: 'Co-Founder & CEO, TerraGrid Solutions',
  },
];
