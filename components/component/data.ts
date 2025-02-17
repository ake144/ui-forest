
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
    name: 'Tabs',
    description: 'A responsive navigation tabs component with animated transitions.',
    slug: 'tabs',
    pro: false,
    code: getComponentCode(path.join(dirname, 'tabs')),
    documentation: '',
    preview: 'tabs',
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
    name: 'Animated Hero',
    description: 'A dynamic hero section with a mouse-following gradient background',
    slug: 'hero',
    pro: false,
    code: getComponentCode(path.join(dirname, 'hero')),
    documentation: '',
    preview: 'hero',
  },
  {
    name: 'Stars on Github',
    description: 'An interactive contact widget with a form and social links.',
    slug: 'star-button',
    pro: false,
    code: getComponentCode(path.join(dirname, 'star-button')),
    documentation: '',
    preview: 'star-button',
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
    name: 'Gradual Spacing',
    description: 'Text animation that increases letter spacing gradually.',
    slug: 'gradual-spacing',
    pro: false,
    code: getComponentCode(path.join(dirname, 'gradual-spacing')),
    documentation: '',
    preview: 'gradual-spacing',
  },

  {
    name: 'Wavy Text',
    description: 'Text animation where the text moves in a wavy motion.',
    slug: 'wavy-text',
    pro: false,
    code: getComponentCode(path.join(dirname, 'wavy-text')),
    documentation: '',
    preview: 'wavy-text',
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
    name: 'Buttons ',
    description: 'A collection of buttons with different styles and animations.',
    slug: 'buttons',
    pro: false,
    code: getComponentCode(path.join(dirname, 'buttons')),
    documentation: '',
    preview: 'buttons',
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
    name: 'Password Torch',
    description: 'An interactive password input with a torch effect.',
    slug: 'password-torch',
    pro: false,
    code: getComponentCode(path.join(dirname, 'password-torch')),
    documentation: '',
    preview: 'password-torch',
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

