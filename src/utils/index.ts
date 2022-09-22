import fs, { lstatSync } from 'fs';
import path from 'path';

export const getFilenames = (route: string) =>
  fs.readdirSync(path.resolve(route))
    .filter((fileOrDir) => lstatSync(path.resolve(route, fileOrDir)).isFile());

export const deleteFileByName = (filename: string) =>
  fs.unlinkSync(path.resolve('./src/assets/files', filename));

export const createFile = (filename: string) =>
  fs.appendFileSync(path.resolve('./src/assets/files', filename), 'Generated file');
