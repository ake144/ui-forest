export type TemplateType = {
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  export type TemplatesType = TemplateType & {
    link: string;
    buyLink: string;
    stack: string[];
  }
  