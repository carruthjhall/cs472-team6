import fs from 'node:fs';
import path from 'node:path';

const baseFiles = [
  'webcontainer/package.json',
  'webcontainer/postcss.config.js',
  'webcontainer/vite.config.js',
  'index.html',
  'tailwind.config.cjs',
]

const publicFiles = [
  'public/vite.svg'
]

const srcFiles = [
  'src/index.css',
  'src/main.jsx',
  'webcontainer/App.jsx',
  'webcontainer/registeredComponents.js'
]

const componentFiles = new Map([
  ['Banner', [
    'src/components/Banner/Banner.jsx',
    'src/components/Banner/star.svg'
  ]],
]);

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
// add base files
for (const file of baseFiles){
  files[path.basename(file)] = new File(Array.from(fs.readFileSync(path.join('./', file))));
}

// add public directory
files['public'] = new Directory();
// add public files
for (const file of publicFiles){
  files['public'].addFile(path.basename(file), Array.from(fs.readFileSync(path.join('./', file))));
}

// add src files
files['src'] = new Directory();
for (const file of srcFiles){
  files['src'].addFile(path.basename(file), Array.from(fs.readFileSync(path.join('./', file))));
}

files['src'].addDir('components');
let componentsFolder = files['src'].directory['components'];
for (const [folder, files] of componentFiles){
  componentsFolder.addDir(folder);
  let componentFolder = componentsFolder.directory[folder];
  for (const file of files){
    componentFolder.addFile(path.basename(file), Array.from(fs.readFileSync(path.join('./', file))));
  }
}

fs.writeFileSync('./src/utils/files.js', "export const files = " + JSON.stringify(files));