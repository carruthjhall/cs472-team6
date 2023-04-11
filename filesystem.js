import fs from 'node:fs';
import path from 'node:path';

const baseFiles = [
  'webcontainer/package.json'
]

class Directory {
  directory = {};

  addFile(filename, contents) {
    this.directory[filename] = new File(contents);
  }

  addDir(dirname){
    this.directory[dirname] = new Directory();
  }
}

class File {
  file = {};

  constructor(contents){
    this.file.contents = contents;
  }
}

const files = {};

for (const file of baseFiles){
  files[path.basename(file)] = new File(new Uint8Array(fs.readFileSync(path.join('./', file))))
}


// files['public'] = new Directory();

// files['public'].addFile('vite.svg', new Uint8Array(readFileSync('./public/vite.svg')))


fs.writeFileSync('./src/utils/files1.js', "export const files = " + JSON.stringify(files))