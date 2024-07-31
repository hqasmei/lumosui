import fs from 'fs/promises';
import path from 'path';

export async function getComponentSource(
  componentPath: string,
): Promise<string> {
  const fullPath = path.join(
    process.cwd(),
    'src',
    'components',
    `${componentPath}.tsx`,
  );
  try {
    const source = await fs.readFile(fullPath, 'utf-8');
    return source;
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return 'Unable to load component source code.';
  }
}
