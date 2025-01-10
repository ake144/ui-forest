import { MDXRemoteSerializeResult } from "next-mdx-remote";


export type TemplateType = {
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  export type TemplatesType = TemplateType & {
    link: string;
    repo: string;
    stack: string[];
  }
  
  export type ComponentCode = {
    tsx: string;
    html?: string;
    css?: string;
  };

  export type ComponentDetails = {
    name: string;
    description: string;
    slug: string;
    pro: boolean;
    code: ComponentCode;
    documentation: string; // MDX content if needed
  };
  


  export interface ComponentExample {
    title: string; // Title of the example
    preview: string; // JSX/HTML preview of the example
    code: string; // Code snippet for the example
  }
  
  export interface Component {
    slug: string; // Unique identifier for the component
    name: string; // Display name of the component
    description: string; // Brief description of the component
    pro: boolean; // Indicates if the component is part of a pro plan
    code: string; // Full code of the component (React, CSS, or HTML)
    examples?: ComponentExample[]; // Optional examples showcasing the component
  }
  
  export interface CodeBlock {
    language: "react" | "css" | "html"; // Language of the code (React, CSS, HTML)
    content: string; // The actual code content
  }

  

export interface CodeBlock {
  path: string; // Path to the code file
  mdxSource: MDXRemoteSerializeResult; // Serialized MDX content for rendering
}

// export interface ComponentDetails {
//   sectionName: string; // Section name for the component
//   createdAt?: string; // Optional creation date for sorting or metadata
// }

export interface ComponentData extends Component, CodeBlock {}
