import { Users, Lightbulb, MessageSquare } from 'lucide-react';
import {
  SiJavascript,
  SiReact,
  SiMysql,
  SiGit,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
  SiGithub,
  SiVite,
} from 'react-icons/si';
import type { EducationEntry, SoftSkill, TechnicalSkill } from '@/types/content';

export const education: EducationEntry[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'University of Cebu - Main Campus',
    year: '2022 - 2026',
  },
];

export const coursework: string[] = ['Web Development', 'UI/UX Design', 'Computer Networks'];

export const technicalSkills: TechnicalSkill[] = [
  { name: 'React', icon: SiReact, color: '#0099ff' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38b2ac' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'Vite', icon: SiVite, color: '#8824ca' },
  { name: 'GitHub', icon: SiGithub, color: '#4b4242' },
  { name: 'Git', icon: SiGit, color: '#fc6602' },
  { name: 'Figma', icon: SiFigma, color: '#c35dff' },
  { name: 'Photoshop', icon: SiAdobephotoshop, color: '#034acc' },
  { name: 'Premiere Pro', icon: SiAdobepremierepro, color: '#8146b9' },
];

export const softSkills: SoftSkill[] = [
  { name: 'Team Collaboration', icon: Users },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Communication', icon: MessageSquare },
  { name: 'Adaptability', icon: Users },
];
