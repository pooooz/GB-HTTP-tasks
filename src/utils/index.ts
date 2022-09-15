import fs, { lstatSync } from 'fs';
import path from 'path';

export const getFileNames = (route: string) =>
  fs.readdirSync(path.resolve(route))
    .filter((fileOrDir) => lstatSync(path.resolve(route, fileOrDir)).isFile());
