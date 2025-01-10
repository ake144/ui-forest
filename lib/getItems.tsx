'use server'

import { components } from '@/components/component/data'
// import { ComponentSlug } from './components';


export type ComponentSlug = string;

export async function getComponentData(slug: ComponentSlug) {
  const component = components.find((comp) => comp.slug === slug);
  if (!component) {
    throw new Error(`Component with slug ${slug} not found`);
  }
  return component;
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