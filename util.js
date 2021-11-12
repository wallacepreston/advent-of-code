import {promises} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';



export const getInput = async (url, filePath) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const buf = await promises.readFile(path.join(__dirname, filePath));
  return buf.toString('utf8');
};

export const textToNumbers = text => {
  const numStrings = text.split('\n');
  const nums = numStrings.map(numStr => Number(numStr))
  return [...nums];
}