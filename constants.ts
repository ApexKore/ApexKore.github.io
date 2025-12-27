import { Project, NavItem } from './types';

export const BRAND_COLORS = {
  orange: '#ff6600',
  black: '#000000',
  white: '#ffffff',
};

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'APEX KORE',
    description: 'The operating system for your ambition. Apex Kore strips away the noise of traditional planners to focus purely on output volume and consistency. Engineered to turn invisible daily grinding into tangible, trackable leverage. Zero bloat, pure signal.',
    status: 'Coming Soon',
    techStack: ['MERN + Native', 'Python'],
    image: 'apex.png',
  },
  {
    id: 'p2',
    title: 'ISL Connect',
    description: 'A dual-purpose engine for Indian Sign Language. Combines real-time gesture translation with an interactive learning module for mastering ISL. Powered by Sequential Pattern Mining to decode complex syntax instantly. Bridging the gap between silent communication and vocal understanding.',
    status: 'Beta',
    techStack: ['MERN + Native', 'Python', 'MediaPipe', 'Tensorflow'],
    image: 'isl.png',
  }
  
];

export const NAV_LINKS: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WORKS', href: '#projects' },
  { label: 'VISION', href: '#vision' },
];