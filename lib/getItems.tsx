'use server'

import { components } from '@/components/component/data'
import { serialize } from 'next-mdx-remote/serialize';

// import { ComponentSlug } from './components';


export type ComponentSlug = string;

export async function getComponentData(slug: ComponentSlug) {
  const component = components.find((comp) => comp.slug === slug);
  if (!component) {
    throw new Error(`Component with slug ${slug} not found`);
  }

  // const mdxSource = component.preview
  // ? await serialize(component.preview)
  // : null;


  return {component
  }
}


export async function getAllComponentSlugs() {
  try {
    return components.map(({ name, description, pro, slug }) => ({
      name,
      description,
      pro,
      slug,
    }));
  } catch (error) {
    console.error("Error fetching component slugs:", error);
    return [];
  }
}