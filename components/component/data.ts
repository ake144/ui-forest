import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IconH2 } from '@tabler/icons-react';
import { ComponentCode, ComponentDetails } from '@/lib/types';

const dirname = path.join(process.cwd(), 'components', 'component');

function getComponentCode(componentPath: string): ComponentCode {
  return {
    tsx: fs.readFileSync(path.join(componentPath, 'index.tsx'), 'utf-8') || '',
    html: fs.readFileSync(path.join(componentPath, 'template.html'), 'utf-8') || '',
    css: fs.readFileSync(path.join(componentPath, 'styles.css'), 'utf-8') || '',
  };
}

export const components: ComponentDetails[] = [
  {
    name: 'Button',
    description: 'A customizable button component.',
    slug: 'button',
    pro: false,
    code: getComponentCode(path.join(dirname, 'button')),
    documentation: '',
  },
  {
    name: 'Animated Hero',
    description: 'A dynamic hero section with a mouse-following gradient background',
    slug: 'hero',
    pro: false,
    code: getComponentCode(path.join(dirname, 'hero')),
    documentation: '',
  },
  {
    name: 'Newsletter Form',
    description: 'A form for subscribing to newsletters with validation and animations.',
    slug: 'newsletter-form',
    pro: false,
    code: getComponentCode(path.join(dirname, 'newsletter-form')),
    documentation: '',
  },
  {
    name: 'Animated Skill Bars',
    description: 'A component displaying skill levels with animated progress bars.',
    slug: 'progress-bar',
    pro: false,
    code: getComponentCode(path.join(dirname, 'progress-bar')),
    documentation: '',
  },
];