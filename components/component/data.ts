
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IconH2 } from '@tabler/icons-react';
import { ComponentCode, ComponentDetails } from '@/lib/types';
// import { serialize } from 'v8';
// import { serialize } from 'next-mdx-remote/serialize';

const dirname = path.join(process.cwd(), 'components', 'component');




function getComponentCode(componentPath: string): ComponentCode {
  return {
    tsx: fs.readFileSync(path.join(componentPath, 'index.tsx'), 'utf-8') || '',
    html: fs.readFileSync(path.join(componentPath, 'template.html'), 'utf-8') || '',
    css: fs.readFileSync(path.join(componentPath, 'styles.css'), 'utf-8') || '',
  };
}

function getPreview(componentPath: string): string {
  const previewPath = path.join(componentPath, 'index.tsx');

  console.log(previewPath)
  return fs.existsSync(previewPath) ? fs.readFileSync(previewPath, 'utf-8') : '';
}


export const components: ComponentDetails[] = [
  
  {
    name: 'Pricing',
    description: 'An interactive pricing component with configurable options.',
    slug: 'pricing',
    pro: false,
    code: getComponentCode(path.join(dirname, 'pricing')),
    documentation: '',
    preview: 'pricing',
  },
  {
    name: 'Button',
    description: 'A customizable button component.',
    slug: 'button',
    pro: false,
    code: getComponentCode(path.join(dirname, 'button')),
    documentation: '',

    preview: 'button',
  },

  {
    name: 'ContactWidget',
    description: 'An interactive contact widget with a form and social links.',
    slug: 'contact-widget',
    pro: false,
    code: getComponentCode(path.join(dirname, 'contact-widget')),
    documentation: '',
    preview: 'contact-widget',
  },
  {
    name: 'Form',
    description: 'A customizable and ready to use  sign-in form to start your project.',
    slug: 'form',
    pro: false,
    code: getComponentCode(path.join(dirname, 'form')),
    documentation: '',

    preview: 'form',
  },
  {
    name: 'Animated Hero',
    description: 'A dynamic hero section with a mouse-following gradient background',
    slug: 'hero',
    pro: false,
    code: getComponentCode(path.join(dirname, 'hero')),
    documentation: '',
    preview: 'hero',
  },
  {
    name: 'Newsletter Form',
    description: 'A form for subscribing to newsletters with validation and animations.',
    slug: 'newsletter-form',
    pro: false,
    code: getComponentCode(path.join(dirname, 'newsletter-form')),
    documentation: '',
    preview: 'newsletter-form',
  },
  {
    name: 'Stats',
    description: 'A component displaying stats',
    slug: 'stats',
    pro: false,
    code: getComponentCode(path.join(dirname, 'stats')),
    documentation: '',
    preview: 'stats',
  },
 
  {
    name: 'Text',
    description: 'A customizable text component with typography options.',
    slug: 'text',
    pro: false,
    code: getComponentCode(path.join(dirname, 'text')),
    documentation: '',

    preview: 'text',
  },
  {
    name: 'Text Effect',
    description: 'A customizable styled text with modern features',
    slug: 'text2',
    pro: false,
    code: getComponentCode(path.join(dirname, 'text2')),
    documentation: '',

    preview: 'text2',
  },

  {
    name: 'Navbar',
    description: 'A responsive navigation bar with links and a mobile-friendly menu.',
    slug: 'navbar',
    pro: false,
    code: getComponentCode(path.join(dirname, 'navbar')),
    documentation: '',
    preview: 'navbar',
  },
  {
    name: 'Footer',
    description: 'A simple footer with links and copyright information.',
    slug: 'footer',
    pro: false,
    code: getComponentCode(path.join(dirname, 'footer')),
    documentation: '',
    preview: 'footer',
  },
  {
    name: 'MorphingSearchBar',
    description: 'A morphing search bar with animation and a clear button.',
    slug: 'search-bar',
    pro: false,
    code: getComponentCode(path.join(dirname, 'search-bar')),
    documentation: '',
    preview: 'search-bar',
  },
  {
    name: 'FAQ',
    description: 'An interactive FAQ component with collapsible answers.',
    slug: 'faq',
    pro: false,
    code: getComponentCode(path.join(dirname, 'faq')),
    documentation: '',
    preview: 'faq',
  },
  
  {
    name: 'Notifications',
    description: 'A modern notification component with customizable options.',
    slug: 'notifications',
    pro: false,
    code: getComponentCode(path.join(dirname, 'notifications')),
    documentation: '',
    preview: 'notifications',
  },
  {
    name: 'Testimonials',
    description: 'An interactive testimonials sections to include custmer testimoney',
    slug: 'testimonials',
    pro: false,
    code: getComponentCode(path.join(dirname, 'testimonials')),
    documentation: '',
    preview: 'testimonials',
  },
  {
    name: 'Floating CTA Banner',
    description: 'A dynamic CTA that drives user to take some action ',
    slug: 'floating-cta',
    pro: false,
    code: getComponentCode(path.join(dirname, 'floating-cta')),
    documentation: '',
    preview: 'floating-cta',
  },
];

