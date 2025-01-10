import { serialize } from 'next-mdx-remote/serialize';

export type ComponentSlug =
  | 'cta'
  | 'hero'
  | 'progress-bar'
  | 'newsletter-form'
  | 'navbar'
  | 'footer'
  | 'interactive-timeline'
  | 'search-bar'
  | 'stat-counter'
  | 'faq'
  | 'price';


 const components = {
  cta: {
    name: "Animated CTA",
    description: "A dynamic Animated Call to Action with configurable options.",
    importPath:'@/components/component/AnimatedCTA',
    mdxSource: await serialize(`
<div className="bg-zinc-900 p-8 rounded-lg text-center">
<h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
<p className="mb-6">Join thousands of satisfied customers and take your company to the next level.</p>
<button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
  Get Started Now →
</button>
</div>
    `),
    code: {
      tsx: `
// Code for Animated CTA
export default function AnimatedCTA() {
return (
  <div className="bg-zinc-900 p-8 rounded-lg text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
    <p className="mb-6">Join thousands of satisfied customers and take your company to the next level.</p>
    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
      Get Started Now →
    </button>
  </div>
);
}
      `,
      html: `
<div class="bg-zinc-900 p-8 rounded-lg text-center">
<h2 class="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
<p class="mb-6">Join thousands of satisfied customers and take your company to the next level.</p>
<button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
  Get Started Now →
</button>
</div>
      `,
      css: `
.cta-container {
background-color: #18181b;
padding: 2rem;
border-radius: 0.5rem;
text-align: center;
}
.cta-title {
font-size: 1.875rem;
font-weight: bold;
margin-bottom: 1rem;
}
.cta-description {
margin-bottom: 1.5rem;
}
.cta-button {
background-color: #9333ea;
color: white;
font-weight: bold;
padding: 0.5rem 1rem;
border-radius: 0.25rem;
transition: background-color 0.3s;
}
.cta-button:hover {
background-color: #7e22ce;
}
      `,
    },
    documentation: await serialize(`
## Animated CTA Component

The Animated CTA (Call to Action) component is designed to create engaging and interactive call-to-action sections in your web application. It features a bold headline, descriptive text, and a prominent action button.

### Usage
\`\`\`jsx
import AnimatedCTA from './AnimatedCTA';

function MyPage() {
return (
  <div>
    <h1>Welcome to My Page</h1>
    <AnimatedCTA />
  </div>
);
}
\`\`\`
    `),
  },
  "hero": {
    name: "Animated Hero",
    description: "A dynamic hero section with a mouse-following gradient background.",
    mdxSource: await serialize(`
<AnimatedHero />
    `),
    code: {
      tsx: `
// Code for Animated Hero
import { useState, useEffect } from 'react';

export function AnimatedHero() {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };
  window.addEventListener('mousemove', updateMousePosition);
  return () => {
    window.removeEventListener('mousemove', updateMousePosition);
  };
}, []);
return (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
    <motion.div
      className="absolute inset-0 opacity-50"
      style={{
        background: \`radial-gradient(circle at \${mousePosition.x}px \${mousePosition.y}px, rgba(100, 100, 255, 0.3) 0%, rgba(0, 0, 0, 0) 50%)\`,
      }}
    />
    <div className="relative z-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Revolutionize Your Business
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
      >
        Empower your brand with cutting-edge solutions and unparalleled customer experiences.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white mr-4">
          Get Started
        </Button>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
          Learn More
        </Button>
      </motion.div>
    </div>
  </section>
);
}
      `,
    },
    examples: [
      {
        title: "Basic Example",
        preview: `<AnimatedHero />`,
        code: `<AnimatedHero />`,
      },
    ],
  },
  "progress-bar": {
    name: 'Animated Skill Bars',
description: 'A component displaying skill levels with animated progress bars.',
mdxSource: await serialize(`
<AnimatedSkillBars skills={[{name: 'JavaScript', level: 90, color: '#f7df1e'}]} />
`),
code: {
  tsx: `
import React from 'react';

export function AnimatedSkillBars({ skills }) {
return (
  <div className="space-y-4">
    {skills.map((skill) => (
      <div key={skill.name}>
        <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="h-4 rounded-full"
            style={{
              width: \`\${skill.level}%\`,
              backgroundColor: skill.color || '#4caf50',
            }}
          />
        </div>
      </div>
    ))}
  </div>
);
}
  `,
  html: `
<div class="space-y-4">
<div>
  <h3 class="text-lg font-bold text-gray-800">JavaScript</h3>
  <div class="w-full bg-gray-300 rounded-full h-4">
    <div class="h-4 rounded-full" style="width: 90%; background-color: #f7df1e;" />
  </div>
</div>
</div>
  `,
  css: `
.skill-bar {
background-color: #f3f4f6;
border-radius: 0.375rem;
height: 1rem;
}

.skill-bar-level {
height: 100%;
border-radius: 0.375rem;
}
  `
},
documentation: await serialize(`
## Animated Skill Bars Component

The Animated Skill Bars component is designed to visually display skill levels using progress bars with animations. The bars can be customized to represent different skills and their proficiency levels.

### Usage
To use the Animated Skill Bars component, simply pass an array of skills, each with a name, proficiency level, and color:

\`\`\`jsx
import { AnimatedSkillBars } from './AnimatedSkillBars';

function MyPage() {
return (
  <div>
    <h1>My Skills</h1>
    <AnimatedSkillBars skills={[{ name: 'JavaScript', level: 90, color: '#f7df1e' }]} />
  </div>
);
}
\`\`\`

### Customization

You can customize the skill bars by changing the \`name\`, \`level\`, and \`color\` properties of each skill.

Example:

\`\`\`jsx
<AnimatedSkillBars skills={[{ name: 'React', level: 80, color: '#61dafb' }]} />
\`\`\`

### Styling

The component uses Tailwind CSS classes for styling, but you can replace these with your own custom CSS.
`)
  },
  "newsletter-form": {
    name: 'Newsletter Form',
description: 'A form for subscribing to newsletters with validation and animations.',
mdxSource: await serialize(`
<div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
<div className="max-w-3xl mx-auto px-4">
  <h2 className="text-3xl font-bold text-white text-center mb-8">Stay Updated with Our Newsletter</h2>
  <form className="flex flex-col sm:flex-row gap-4">
    <input type="email" placeholder="Enter your email" className="flex-grow p-3 rounded-md" />
    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md">Subscribe</button>
  </form>
</div>
</div>
`),
code: {
  tsx: `
import { useState } from 'react';

export function NewsletterForm() {
const [email, setEmail] = useState("");
const [status, setStatus] = useState("idle");

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  setTimeout(() => {
    if (email.includes("@")) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }, 1500);
};

return (
  <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Stay Updated with Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-grow p-3 rounded-md" />
        <button type="submit" disabled={status !== "idle"} className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md">
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status === "success" && <p className="mt-4 text-green-300">Successfully subscribed!</p>}
      {status === "error" && <p className="mt-4 text-red-300">Please enter a valid email address.</p>}
    </div>
  </div>
);
}
  `,
  html: `
<div class="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
<div class="max-w-3xl mx-auto px-4">
  <h2 class="text-3xl font-bold text-white text-center mb-8">Stay Updated with Our Newsletter</h2>
  <form class="flex flex-col sm:flex-row gap-4">
    <input type="email" placeholder="Enter your email" class="flex-grow p-3 rounded-md" />
    <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md">Subscribe</button>
  </form>
</div>
</div>
  `,
  css: `
.newsletter-form {
background: linear-gradient(to right, #7b39ed, #00c4ff);
padding: 4rem 0;
}

.newsletter-title {
font-size: 2rem;
font-weight: bold;
color: white;
text-align: center;
margin-bottom: 2rem;
}

.newsletter-input {
padding: 1rem;
border-radius: 0.375rem;
margin-right: 0.5rem;
}

.newsletter-button {
background-color: #0079ff;
color: white;
padding: 1rem 2rem;
border-radius: 0.375rem;
cursor: pointer;
transition: background-color 0.3s ease;
}

.newsletter-button:hover {
background-color: #005bb5;
}
  `
},
documentation: await serialize(`
## Newsletter Form Component

The Newsletter Form component allows users to easily subscribe to your newsletter. It includes basic validation and provides feedback to the user based on the submitted email.

### Usage
To use the NewsletterForm component, simply import it into your React component and render it:

\`\`\`jsx
import { NewsletterForm } from './NewsletterForm';

function MyPage() {
return (
  <div>
    <h1>Welcome to My Page</h1>
    <NewsletterForm />
  </div>
);
}
\`\`\`

### Customization

You can customize the Newsletter Form component by passing props or modifying the styles.

- \`status\`: Displays the current state of the form (loading, success, or error).
- \`onSubmit\`: A function to handle the form submission.

Example:

\`\`\`jsx
<NewsletterForm onSubmit={(email) => console.log(email)} />
\`\`\`

### Styling

The component uses Tailwind CSS classes for styling, but you can replace these with your own custom CSS.
`)
},
   "navbar": {
  name: 'Navbar',
  description: 'A responsive navigation bar with links and a mobile-friendly menu.',
  mdxSource: await serialize(`
<div className="bg-gray-800 text-white py-4">
  <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
    <div className="text-xl font-bold">MyBrand</div>
    <div className="hidden md:flex space-x-6">
      <a href="#home" className="hover:text-gray-400">Home</a>
      <a href="#services" className="hover:text-gray-400">Services</a>
      <a href="#about" className="hover:text-gray-400">About</a>
      <a href="#contact" className="hover:text-gray-400">Contact</a>
    </div>
    <div className="md:hidden">
      <button className="text-white">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  </div>
</div>
  `),
  code: {
    tsx: 
    ` import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">MyBrand</div>
        <div className={\`md:flex space-x-6 \${isOpen ? 'block' : 'hidden'}\`}>
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  );
}`
,
    html: `
<div class="bg-gray-800 text-white py-4">
  <div class="max-w-screen-xl mx-auto flex justify-between items-center px-4">
    <div class="text-xl font-bold">MyBrand</div>
    <div class="hidden md:flex space-x-6">
      <a href="#home" class="hover:text-gray-400">Home</a>
      <a href="#services" class="hover:text-gray-400">Services</a>
      <a href="#about" class="hover:text-gray-400">About</a>
      <a href="#contact" class="hover:text-gray-400">Contact</a>
    </div>
    <div class="md:hidden">
      <button class="text-white">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
</div>
    `,
    css: `
.navbar {
  background-color: #2d3748;
  padding: 1rem 0;
}

.navbar .brand-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.navbar .nav-links {
  display: flex;
  gap: 1.5rem;
}

.navbar .nav-links a {
  color: white;
  transition: color 0.3s;
}

.navbar .nav-links a:hover {
  color: #e2e8f0;
}

.navbar .hamburger-menu {
  display: none;
}

@media (max-width: 768px) {
  .navbar .nav-links {
    display: none;
  }
  
  .navbar .hamburger-menu {
    display: block;
  }
}
    `
  },
  documentation: await serialize(`
## Navbar Component

The Navbar component is a responsive navigation bar that includes a brand name, multiple links, and a mobile-friendly hamburger menu.

### Usage

To use the Navbar component, simply import it into your React component and render it:

\`\`\`jsx
import { Navbar } from './Navbar';

function MyPage() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My Page</h1>
    </div>
  );
}
\`\`\`

### Customization

You can customize the Navbar component by modifying the links or changing the brand name. The hamburger menu toggles the visibility of the links on small screens.

- \`links\`: An array of objects where each object contains \`name\` and \`href\` properties to customize the navigation links.

Example:

\`\`\`jsx
<Navbar links={[{ name: 'Home', href: '#home' }, { name: 'About', href: '#about' }]} />
\`\`\`

### Styling

The component uses Tailwind CSS classes for styling, but you can replace these with your own custom CSS.
  `)
},
"footer": {
  name: 'Footer',
description: 'A simple footer with links and copyright information.',
mdxSource: await serialize(`
<div className="bg-gray-800 text-white py-8">
<div className="max-w-screen-xl mx-auto px-4 flex justify-between">
  <div className="text-sm">© 2025 MyBrand. All rights reserved.</div>
  <div className="flex space-x-6">
    <a href="#privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
    <a href="#terms-of-service" className="hover:text-gray-400">Terms of Service</a>
    <a href="#contact" className="hover:text-gray-400">Contact</a>
  </div>
</div>
</div>
`),
code: {
  tsx: `
export function Footer() {
return (
  <div className="bg-gray-800 text-white py-8">
    <div className="max-w-screen-xl mx-auto px-4 flex justify-between">
      <div className="text-sm">© 2025 MyBrand. All rights reserved.</div>
      <div className="flex space-x-6">
        <a href="#privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
        <a href="#terms-of-service" className="hover:text-gray-400">Terms of Service</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </div>
  </div>
);
}
  `,
  html: `
<div class="bg-gray-800 text-white py-8">
<div class="max-w-screen-xl mx-auto px-4 flex justify-between">
  <div class="text-sm">© 2025 MyBrand. All rights reserved.</div>
  <div class="flex space-x-6">
    <a href="#privacy-policy" class="hover:text-gray-400">Privacy Policy</a>
    <a href="#terms-of-service" class="hover:text-gray-400">Terms of Service</a>
    <a href="#contact" class="hover:text-gray-400">Contact</a>
  </div>
</div>
</div>
  `,
  css: `
.footer {
background-color: #2d3748;
padding: 2rem 0;
}

.footer .footer-links a {
color: white;
transition: color 0.3s;
}

.footer .footer-links a:hover {
color: #e2e8f0;
}

.footer .copyright {
font-size: 0.875rem;
color: #a0aec0;
}
  `
},
documentation: await serialize(`
## Footer Component

The Footer component contains copyright information and links to privacy policy, terms of service, and contact pages.

### Usage

To use the Footer component, simply import it into your React component and render it:

\`\`\`jsx
import { Footer } from './Footer';

function MyPage() {
return (
  <div>
    <Footer />
    <h1>Welcome to My Page</h1>
  </div>
);
}
\`\`\`

### Customization

You can customize the Footer component by modifying the links or the copyright text. The footer uses Tailwind CSS for styling, but you can replace it with your own custom styles.

- \`links\`: An array of objects where each object contains \`name\` and \`href\` properties for the links.

Example:

\`\`\`jsx
<Footer links={[{ name: 'Privacy Policy', href: '#privacy-policy' }]} />
\`\`\`

### Styling

The component uses Tailwind CSS classes for styling, but you can replace these with your own custom CSS.
`)
},

"search-bar": {
  name: 'MorphingSearchBar',
  description: 'A morphing search bar with animation and a clear button.',
  mdxSource: await serialize(`
import { MorphingSearchBar } from './components/component/SearchBar';


<MorphingSearchBar />
  `),
  code: {
    tsx: `
import { MorphingSearchBar } from './components/component/SearchBar';


export function SearchPage() {
  return (
    <div>
      <MorphingSearchBar />
    </div>
  );
}
   `,
    html: `
<!-- MorphingSearchBar HTML structure -->
<div class="morphing-search-bar">
  <form class="flex items-center justify-end bg-primary rounded-full overflow-hidden" onsubmit="handleSubmit(event)">
    <!-- Check if expanded or collapsed -->
    <div id="expanded-form" class="expanded">
      <input
        type="text"
        placeholder="Search..."
        class="flex-grow border-none bg-primary text-primary-foreground placeholder:text-primary-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
        value=""
        onchange="handleSearch(event)"
      />
      <button
        type="button"
        class="text-primary-foreground"
        onclick="setIsExpanded(false)"
      >
        <i class="lucide lucide-x h-4 w-4"></i>
      </button>
    </div>
    <div id="collapsed-form" class="collapsed">
      <button
        type="button"
        class="bg-primary text-primary-foreground"
        onclick="setIsExpanded(true)"
      >
        <i class="lucide lucide-search h-4 w-4"></i>
      </button>
    </div>
  </form>
</div>
    `,
    css: `
/* Basic Styling for MorphingSearchBar */
.morphing-search-bar {
  position: relative;
  display: inline-block;
}

.morphing-search-bar form {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--primary);
  border-radius: 9999px;
  overflow: hidden;
  transition: width 0.3s ease;
}

.morphing-search-bar input {
  width: 100%;
  padding: 0.5rem;
  border: none;
  background-color: var(--primary);
  color: var(--primary-foreground);
  placeholder-color: var(--primary-foreground);
}

.morphing-search-bar button {
  border: none;
  background: none;
  cursor: pointer;
  color: var(--primary-foreground);
}

.morphing-search-bar button i {
  font-size: 16px;
}

/* Specific animations for expanded/collapsed states */
.morphing-search-bar form.expanded {
  width: 300px;
}

.morphing-search-bar form.collapsed {
  width: 48px;

/* Styling for the search icon and close button */
.morphing-search-bar form > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
    `
  },
  documentation: await serialize(`
## MorphingSearchBar Component

The MorphingSearchBar component expands and contracts with a smooth animation. It includes a search input field and a clear button that appears when the input is expanded.

### Usage

To use the MorphingSearchBar component, simply import it into your React component and render it:

\`\`\`jsx
import { MorphingSearchBar } from './MorphingSearchBar';

function MyPage() {
  return (
    <div>
      <MorphingSearchBar />
    </div>
  );
}
\`\`\`

### Customization

You can customize the MorphingSearchBar component by adjusting the placeholder text or modifying the animation duration. The search button uses Lucide icons, which can be customized.

Example:

\`\`\`jsx
<MorphingSearchBar placeholder="Type to search..." />
\`\`\`

### Styling

The component uses Tailwind CSS classes for styling. You can replace them with custom styles or modify the current ones to fit your design.
  `)
},

"interactive-timeline": {
  name: 'Interactive Timeline',
  description: 'An interactive, horizontal timeline to show progress or milestones.',
  mdxSource: await serialize(`
<div className="relative">
  <div className="flex items-center">
    <div className="w-1/4 p-4 text-center">
      <div className="text-lg font-bold">2020</div>
      <div className="text-sm">Started project</div>
    </div>
    <div className="w-1/4 p-4 text-center">
      <div className="text-lg font-bold">2021</div>
      <div className="text-sm">Major milestone</div>
    </div>
    <div className="w-1/4 p-4 text-center">
      <div className="text-lg font-bold">2022</div>
      <div className="text-sm">Product launch</div>
    </div>
  </div>
  <div className="absolute top-1/2 w-full h-1 bg-gray-400 -translate-y-1/2"></div>
</div>
  `),
  code: {
    tsx: `
export function InteractiveTimeline() {
  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="w-1/4 p-4 text-center">
          <div className="text-lg font-bold">2020</div>
          <div className="text-sm">Started project</div>
        </div>
        <div className="w-1/4 p-4 text-center">
          <div className="text-lg font-bold">2021</div>
          <div className="text-sm">Major milestone</div>
        </div>
        <div className="w-1/4 p-4 text-center">
          <div className="text-lg font-bold">2022</div>
          <div className="text-sm">Product launch</div>
        </div>
      </div>
      <div className="absolute top-1/2 w-full h-1 bg-gray-400 -translate-y-1/2"></div>
    </div>
  );
}
    `,
    html: `
<div class="relative">
  <div class="flex items-center">
    <div class="w-1/4 p-4 text-center">
      <div class="text-lg font-bold">2020</div>
      <div class="text-sm">Started project</div>
    </div>
    <div class="w-1/4 p-4 text-center">
      <div class="text-lg font-bold">2021</div>
      <div class="text-sm">Major milestone</div>
    </div>
    <div class="w-1/4 p-4 text-center">
      <div class="text-lg font-bold">2022</div>
      <div class="text-sm">Product launch</div>
    </div>
  </div>
  <div class="absolute top-1/2 w-full h-1 bg-gray-400 -translate-y-1/2"></div>
</div>
    `,
    css: `
.timeline {
  position: relative;
}

.timeline .timeline-item {
  width: 25%;
  padding: 1rem;
  text-align: center;
}

.timeline .timeline-line {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: #d1d5db;
  transform: translateY(-50%);
}
    `
  },
  documentation: await serialize(`
## Interactive Timeline Component

The Interactive Timeline component displays progress or milestones along a horizontal timeline, ideal for representing projects or events over time.

### Usage

To use the Interactive Timeline component, simply import it into your React component and render it:

\`\`\`jsx
import { InteractiveTimeline } from './InteractiveTimeline';

function MyPage() {
  return (
    <div>
      <InteractiveTimeline />
    </div>
  );
}
\`\`\`

### Customization

You can customize the timeline by adjusting the year, event title, and description. Additional styling can be added to highlight the current milestone.

Example:

\`\`\`jsx
<InteractiveTimeline milestones={[
  { year: '2020', title: 'Started project' },
  { year: '2021', title: 'Major milestone' }
]} />
\`\`\`

### Styling

The component uses Tailwind CSS classes for styling, but you can replace them with your own custom styles.
  `)

},
"faq":{
  name: 'FAQ',
  description: 'An interactive FAQ component with collapsible answers.',
  mdxSource: await serialize(`
<div className="space-y-4">
  <div className="border-b">
    <button className="w-full text-left py-3 font-medium">What is your return policy?</button>
    <div className="pl-4 pb-3 text-gray-600">We offer a 30-day return policy for all products.</div>
  </div>
  <div className="border-b">
    <button className="w-full text-left py-3 font-medium">How long does shipping take?</button>
    <div className="pl-4 pb-3 text-gray-600">Shipping typically takes 5-7 business days.</div>
  </div>
  <div className="border-b">
    <button className="w-full text-left py-3 font-medium">Do you ship internationally?</button>
    <div className="pl-4 pb-3 text-gray-600">Yes, we offer international shipping to select countries.</div>
  </div>
</div>
  `),
  code: {
    tsx: `
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'How do I place an order?', answer: 'To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information.' },
  { question: 'What payment methods do you accept?', answer: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for your convenience.' },
  { question: 'How long does shipping take?', answer: 'Shipping times vary depending on your location. Typically, domestic orders arrive within 3-5 business days, while international orders may take 7-14 business days.' },
  { question: 'What is your return policy?', answer: 'We offer a 30-day return policy for most items. Products must be in their original condition with tags attached. Please refer to our Returns page for more details.' }
];

export function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl text-gray-700 font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg text-gray-600 font-medium">{faq.question}</span>
                <ChevronDown className={\`w-5 h-5 transition-transform \${activeIndex === index ? 'transform rotate-180' : ''}\`} />
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="p-4 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
   
`,
    html: `
<div class="space-y-4">
  <div class="border-b">
    <button class="w-full text-left py-3 font-medium">What is your return policy?</button>
    <div class="pl-4 pb-3 text-gray-600">We offer a 30-day return policy for all products.</div>
  </div>
  <div class="border-b">
    <button class="w-full text-left py-3 font-medium">How long does shipping take?</button>
    <div class="pl-4 pb-3 text-gray-600">Shipping typically takes 5-7 business days.</div>
  </div>
  <div class="border-b">
    <button class="w-full text-left py-3 font-medium">Do you ship internationally?</button>
    <div class="pl-4 pb-3 text-gray-600">Yes, we offer international shipping to select countries.</div>
  </div>
</div>
    `,
    css: `
.faq {
  margin-top: 1rem;
}

.faq .question {
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem;
  text-align: left;
}

.faq .answer {
  padding-left: 1.5rem;
  padding-bottom: 1rem;
  color: #4b5563;
}

.faq .question:hover {
  cursor: pointer;
}
    `
  },
  documentation: await serialize(`
## FAQ Component

The FAQ component allows you to display frequently asked questions with collapsible answers for a clean and interactive experience.

### Usage

To use the FAQ component, simply import it into your React component and render it:

\`\`\`jsx
import { FAQ } from './FAQ';

function MyPage() {
  return (
    <div>
      <FAQ />
    </div>
  );
}
\`\`\`

### Customization

You can customize the FAQ component by modifying the questions and answers. The component can display as many questions as needed.

Example:

\`\`\`jsx
<FAQ faqs={[
  { question: 'What is your return policy?', answer: 'We offer a 30-day return policy.' },
  { question: 'How long does shipping take?', answer: '5-7 business days.' }
]} />
\`\`\`

### Styling

The FAQ component uses Tailwind CSS classes, but feel free to modify them to suit your style.
  `)
},
"price":{

  name: 'Pricing Calculator',
  description: 'A dynamic pricing calculator with configurable options.',
  mdxSource: await serialize(`
<section id="pricing" className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <motion.h2 
      className="text-3xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Choose Your Plan
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div 
          key={index} 
          className="bg-gray-800 rounded-lg p-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
          <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
          <div className="text-4xl font-bold mb-6">{plan.price}</div>
          <ul className="mb-8 space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center justify-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">Choose Plan</Button>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  `),
  code: {
    tsx: `
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$49",
    features: [
      "5 Templates",
      "20 Components",
      "Basic Support",
      "1 Month Updates"
    ]
  },
  {
    name: "Pro",
    price: "$99",
    features: [
      "20 Templates",
      "100 Components",
      "Priority Support",
      "6 Months Updates",
      "Custom Branding"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Templates",
      "Unlimited Components",
      "24/7 Support",
      "Lifetime Updates",
      "Custom Development"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Choose Your Plan
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-lg p-8 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">Choose Plan</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
    `,
    html: `
<section id="pricing" class="py-20 bg-gray-900">
  <div class="container mx-auto px-4">
    <motion.h2 
      class="text-3xl font-bold text-center mb-12"
      initial="{ opacity: 0, y: 20 }"
      whileInView="{ opacity: 1, y: 0 }"
      transition="{ duration: 0.5 }"
      viewport="{ once: true }"
    >
      Choose Your Plan
    </motion.h2>
    <div class="grid md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div 
          key={index} 
          class="bg-gray-800 rounded-lg p-8 text-center relative overflow-hidden"
          initial="{ opacity: 0, y: 20 }"
          whileInView="{ opacity: 1, y: 0 }"
          transition="{ duration: 0.5, delay: index * 0.1 }"
          viewport="{ once: true }"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
          <h3 class="text-2xl font-semibold mb-4">{plan.name}</h3>
          <div class="text-4xl font-bold mb-6">{plan.price}</div>
          <ul class="mb-8 space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} class="flex items-center justify-center">
                <Check class="h-5 w-5 text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <Button class="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">Choose Plan</Button>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    `,
    css: `
.pricing-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #1f2937;
}

.pricing-section .plan {
  background-color: #2d3748;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.pricing-section .plan .plan-header {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.pricing-section .plan .plan-price {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.pricing-section .plan .plan-features {
  margin-bottom: 2rem;
}

.pricing-section .plan .plan-btn {
  width: 100%;
  background: linear-gradient(90deg, #3b82f6, #9333ea);
  transition: all 0.3s ease;
}
    `
  },
  documentation: await serialize(`
## Pricing Calculator Component

The Pricing Calculator dynamically displays different pricing plans based on user selection.

### Usage

To use the Pricing Calculator, import it into your React component and render it as shown below:

\`\`\`jsx
import { PricingCalculator } from './PricingCalculator';

function MyPage() {
  return (
    <div>
      <PricingCalculator />
    </div>
  );
}
\`\`\`

### Customization

The plans, pricing, and features are configurable. Modify the \`plans\` array to change the pricing details and features.

### Styling

The component uses Tailwind CSS for styling but can be further customized according to your preferences.
  `)

},
"stat-counter":{
  name: 'Animated Stats Counter',
  description: 'A dynamic Animated Stats Counter with configurable options.',
  mdxSource: await serialize(`
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.span
                className="text-4xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
              >
                {hasAnimated ? (
                  <>
                    {stat.prefix}
                    {stat.value.toLocaleString()}
                  </>
                ) : (
                  '0'
                )}
              </motion.span>
              <p className="mt-2 text-xl text-white opacity-80">{stat.label}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </div>
  `),
  code: {
    tsx: `
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: "Happy Customers", value: 10000, prefix: "+" },
  { label: "Products Sold", value: 500000, prefix: "" },
  { label: "5-Star Reviews", value: 25000, prefix: "" },
  { label: "Countries Served", value: 50, prefix: "" },
];

export function AnimatedStatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div ref={ref} className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.span
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                >
                  {hasAnimated ? (
                    <>
                      {stat.prefix}
                      {stat.value.toLocaleString()}
                    </>
                  ) : (
                    '0'
                  )}
                </motion.span>
                <p className="mt-2 text-xl text-white opacity-80">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
    `,
    html: `
<div class="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} class="text-center">
          <motion.div
            initial="{ opacity: 0, y: 20 }"
            animate="{ hasAnimated ? { opacity: 1, y: 0 } : {} }"
            transition="{ duration: 0.8, delay: index * 0.1 }"
          >
            <motion.span
              class="text-4xl font-bold text-white"
              initial="{ opacity: 0 }"
              animate="{ hasAnimated ? { opacity: 1 } : {} }"
              transition="{ duration: 0.8, delay: index * 0.1 + 0.4 }"
            >
              {hasAnimated ? (
                <>
                  {stat.prefix}
                  {stat.value.toLocaleString()}
                </>
              ) : (
                '0'
              )}
            </motion.span>
            <p class="mt-2 text-xl text-white opacity-80">{stat.label}</p>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</div>
    `,
    css: `
.stats-counter {
  background: linear-gradient(to right, #2563eb, #9333ea);
  padding: 4rem 0;
}

.stats-counter .stat {
  text-align: center;
}

.stats-counter .stat span {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
}

.stats-counter .stat p {
  margin-top: 0.5rem;
  font-size: 1.125rem;
  color: white;
  opacity: 0.8;
}
    `
  },
  documentation: await serialize(`
## Animated Stats Counter Component

The Animated Stats Counter component displays dynamic statistics that animate into view when scrolled into the viewport.

### Usage

To use the Animated Stats Counter component, import it and render it as shown below:

\`\`\`jsx
import { AnimatedStatsCounter } from './AnimatedStatsCounter';

function MyPage() {
  return (
    <div>
      <AnimatedStatsCounter />
    </div>
  );
}
\`\`\`

### Customization

The stats data (labels, values, and prefix) is passed as an array of objects and can be easily customized by modifying the \`stats\` array.

### Styling

Tailwind CSS is used for styling, but you can modify the styles as needed.

### Animation

The stats animate into view using the \`framer-motion\` library. If you want to change animation behavior, you can adjust the \`motion\` component settings.
  `)

},
 }



export async function getComponentData(slug: ComponentSlug) {
  // Component data mapping
 

  return components[slug];
}


export async function getAllComponentSlugs() {
  return Object.entries(components).map(([key, component]) => ({
    ...component,
    pro: false,
    slug: key, // Derive slug from the key
  }));

}




