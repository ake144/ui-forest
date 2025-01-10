import path from "path";
import fs from "fs";
import matter from "gray-matter";

const componentsDirectory = path.join(process.cwd(), "content/components");


export function getAllComponents() {
  const files = fs.readdirSync(componentsDirectory);

  return files.map((filename) => {
    const filePath = path.join(componentsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.mdx$/, ""),
      ...data,
    };
  });
}

export async function getComponentBySlug(slug: string) {
  const filePath = path.join(componentsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { data, content };
}
