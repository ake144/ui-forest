

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
  


  

export default function ComponentPage({ params }: { params: paramsType }) {

  const component = components.find(c => c.slug === params.slug)


  console.log(component, params.slug)

  if (!component) return null

  return (
    <div className="dark">
     <ComponentsPage  component={component}/>
    </div>
  )
}


