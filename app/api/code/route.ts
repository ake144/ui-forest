import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { path: requestedPath } = await req.json();

    console.log('Requested path:', requestedPath);

    // Ensure the path includes the `.tsx` extension
    const sanitizedPath = requestedPath.endsWith('.tsx')
      ? requestedPath
      : `${requestedPath}.tsx`;

    // Resolve the file path securely
    const resolvedPath = path.resolve(process.cwd(), sanitizedPath);

    // Check if the file exists
    const fileExists = await fs.access(resolvedPath).then(() => true).catch(() => false);
    if (!fileExists) {
      throw new Error(`File does not exist: ${resolvedPath}`);
    }

    console.log(resolvedPath)
    // Read the file content
    const fileContent = await fs.readFile(resolvedPath, 'utf8');

    return NextResponse.json({ code: fileContent });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json(
      { error: `Could not read the file. Error: ${error}` },
      { status: 500 }
    );
  }
}
