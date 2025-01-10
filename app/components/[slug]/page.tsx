
import { components } from "@/lib/data";
import {getComponentData } from "@/lib/getItems";
import { ComponentSlug } from "@/lib/components";
import ComponentLayout from "@/components/component/ComponentContentLayout";
import { ComponentDetails } from "@/lib/types";


type Params = {
  slug: string;
};

// type PageDetails = {
//   section_name?: string;
//   name: string;
//   description: string;
//   slug: string;
//   pro: boolean;
//   code: string;
//   examples: {
//     title: string;
//     preview: string;
//     code: string;
//   }[];
// };

type tParams = { slug: string };

// export async function generateStaticParams() {
//   return components.map((item) => ({
//     slug: item.slug.slice(1),
//   }));
// }

export async function generateStaticParams() {
  return components.map((component) => ({ slug: component.slug }));
}


// export async function generateMetadata( props: { params: tParams }) {
//   const { slug } = await props.params;

//   const pageDetails = components.find(
//     (item) => item.slug === slug
//   ) 

//   return {
//     metadataBase: new URL("https://ui-forest.com"),
//     alternates: {
//       canonical: `/components/${slug}`,
//     },
//     title: pageDetails
//       ? `${pageDetails.name} - Tailwind CSS Components`
//       : "Page Not Found",
//     description: (pageDetails && pageDetails.description) || "",
//     openGraph: {
//       title: pageDetails
//         ? `${pageDetails.name} - Tailwind CSS Components`
//         : "",
//       description: (pageDetails && pageDetails.description) || "",
//     },
//     twitter: {
//       title: pageDetails
//         ? `${pageDetails.name} - Tailwind CSS Components`
//         : "",
//       description: (pageDetails && pageDetails.description) || "",
//     },
//   };
// }


export async function generateMetadata({ params }: { params: tParams }) {
  const { slug } = params;

  const pageDetails = components.find((item) => item.slug === slug) || null;

  return {
    metadataBase: new URL("https://ui-forest.com"),
    alternates: {
      canonical: `/components/${slug}`,
    },
    title: pageDetails
      ? `${pageDetails.name} - Tailwind CSS Components`
      : "Component Not Found",
    description: pageDetails?.description || "Component not found",
    openGraph: {
      title: pageDetails
        ? `${pageDetails.name} - Tailwind CSS Components`
        : "Component Not Found",
      description: pageDetails?.description || "Component not found",
    },
    twitter: {
      title: pageDetails
        ? `${pageDetails.name} - Tailwind CSS Components`
        : "Component Not Found",
      description: pageDetails?.description || "Component not found",
    },
  };
}



export default async function Page(props: { params: tParams }) {
  try {
    const { slug } = await props.params;
   
    // console.log('slugs',slug)

    
    const componentData:ComponentDetails = await getComponentData(slug);
    
    // console.log(componentData)

    return    <ComponentLayout component={componentData} />
  
  } catch (err) {
    return <div>Component not found</div>;
  }
}
