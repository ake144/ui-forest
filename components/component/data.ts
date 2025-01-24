
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
    slug: 'pricing2',
    pro: false,
    code: getComponentCode(path.join(dirname, 'pricing2')),
    documentation: '',
    preview: 'pricing2',
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
    name: 'Blog Section',
    description: 'A customizable and ready to use blog post page',
    slug: 'blog-page',
    pro: false,
    code: getComponentCode(path.join(dirname, 'blog-page')),
    documentation: '',

    preview: 'blog-page',
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
    name: 'Animated Skill Bars',
    description: 'A component displaying skill levels with animated progress bars.',
    slug: 'progress-bar',
    pro: false,
    code: getComponentCode(path.join(dirname, 'progress-bar')),
    documentation: '',
    preview: 'progress-bar',
  },
  {
    name: 'Animated CTA',
    description: 'A dynamic Animated Call to Action with configurable options',
    slug: 'cta',
    pro: false,
    code: getComponentCode(path.join(dirname, 'cta')),
    documentation: '',
    preview: 'cta',
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
    name: 'Interactive Timeline',
    description: 'An interactive, horizontal timeline to show progress or milestones.',
    slug: 'timeline',
    pro: false,
    code: getComponentCode(path.join(dirname, 'timeline')),
    documentation: '',
    preview: 'timeline',
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
    name: 'Pricing Calculator',
    description: 'A dynamic pricing calculator with configurable options.',
    slug: 'pricing',
    pro: false,
    code: getComponentCode(path.join(dirname, 'pricing')),
    documentation: '',
    preview: 'pricing',
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

