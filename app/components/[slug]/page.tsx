

import ComponentsPage from "@/components/component/component-page"
import { components } from "@/lib/data";

export async function generateStaticParams() {
  return components.map(component => ({
      slug: component.slug, 
  }));
}

  type paramsType = {
    slug:string  
  }

  type PageDetails = {
    slug: string;
    name: string;
    description: string;
    pro:Boolean;
  };


  export async function generateMetadata({
    params: { slug },
  }: {
    params: paramsType;
  }) {

    const pageDetails = components.find(
      (item) => item.slug === slug
  ) as PageDetails;
  
    return {
      metadataBase: new URL("https://ui-forest.com"),
      alternates: {
        canonical: `/components/${slug}`,
      },
      title: pageDetails
        ? `${pageDetails.name} - Tailwind CSS Components`
        : "Page Not Found",
      description: (pageDetails && pageDetails.description) || "",
      openGraph: {
        title: pageDetails
          ? `${pageDetails.name} - Tailwind CSS Components`
          : "",
        description: (pageDetails && pageDetails.description) || "",
      },
      twitter: {
        title: pageDetails
          ? `${pageDetails.name} - Tailwind CSS Components`
          : "",
        description: (pageDetails && pageDetails.description) || "",
      },
    };
  }
  


  

export default async function ComponentPage({ params }: { params: Promise<paramsType> }) {

          const SlugParams =  (await params).slug

  const component = components.find(c => c.slug === SlugParams)
 

  if (!component) return null

  return (
    <div className="dark">
     <ComponentsPage  component={component}/>
    </div>
  )
}


