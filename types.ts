export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'Coming Soon' | 'Live' | 'Beta' | 'Concept';
  techStack: string[];
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}