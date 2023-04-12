import { ExportModalState, PageState } from "../../state";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { toJSON } from "../../utils/utils";
import { WebContainer } from '@webcontainer/api';
import { files } from "../../utils/files.js";

export default function ExportModal() {
  const shown = ExportModalState((state) => state.shown);
  const setShown = ExportModalState((state) => state.setShown);
  const componentsList = PageState((state) => state.componentsList);
  const pageOptions = PageState((state) => state.pageOptions);

  function handleExportData() {
    const zip = new JSZip();
    zip.file("portfolio.json", toJSON({componentsList, pageOptions}));
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "portfolio.zip");
    });
  }

  function containerExists(){
    return Array.from(document.getElementsByTagName('iframe')).some(element => element.src.includes('stackblitz'))
  }

  async function handleExportWebsite(){
    // only boot webcontainer if it does not exist
    if (!window.webcontainerInstance && !containerExists()){
      window.webcontainerInstance = await WebContainer.boot();
    }
    
    // load webcontainer filesystem
    await window.webcontainerInstance.mount(files);
    // load pageState elements into webcontainer filesystem
    await window.webcontainerInstance.fs.writeFile('/src/pageData.js', 'export const pageData = ' + toJSON({componentsList, pageOptions}))
    
    // install project dependencies
    const installExit = await installDependencies();
    if (installExit !== 0){
      alert('Error: Website could not be exported');
      return;
    }

    // build project
    const buildExit = await buildWebsite();
    if (buildExit !== 0){
      alert('Build Error: Website could not be exported');
      return;
    }

    // create zip file
    const siteZip = new JSZip();
    // create sub folder for dist directory
    let distFolder = siteZip.folder('dist');
    // process and zip web container dist directory that was created by build step above
    await zipFolder('/dist', distFolder);
    // save the siteZip folder to the user
    siteZip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "portfolio.zip");
    });

  }

  async function zipFolder(folder, zipDir){
    // get files in directory
    let distFiles = await readContainerDir(folder);
    // process each file in directory
    for (const file of distFiles){
      // if the file is a directory then call function recursively
      if (file.isDirectory()){
        // create new sub directory in zip
        let subDir = zipDir.folder(file.name);
        // call recursively to process and zip all files in sub directory
        await zipFolder(`${folder}/${file.name}`, subDir);
      } else { // if the file is a file then simply add it to the current zip directory
        let fileContents = await readContainerFile(`${folder}/${file.name}`);
        zipDir.file(file.name, fileContents);
      }
    }
  }
  
  async function readContainerFile(filename) {
    const file = await window.webcontainerInstance.fs.readFile(filename, 'utf-8');
    return file || '';
  }

  async function readContainerDir(directory) {
    const files = await window.webcontainerInstance.fs.readdir(directory, {encoding: 'utf-8', withFileTypes: true});
    return files || [];
  }

  async function installDependencies(){
    const installProcess = await window.webcontainerInstance.spawn('npm', ['install']);
    return installProcess.exit;
  }

  async function buildWebsite() {
    const buildProcess = await window.webcontainerInstance.spawn('npm', ['run', 'build']);

    buildProcess.output.pipeTo(new WritableStream({
      write(data) {
        console.log(data);
      }
    }));

    return buildProcess.exit;
  }

  return (
    <div
      className={`${
        shown ? "block" : "hidden"
      } fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-black/40`}
    >
      <div className="w-4/5 max-w-sm bg-white mx-auto mt-[25%] -translate-y-1/4 p-9 rounded-lg">
        <button
          className="absolute top-4 right-4"
          onClick={() => setShown(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-[3px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Export Buttons */}
        <button onClick={() => handleExportData()} className="py-2 px-4 bg-blue-400 mx-auto mb-4 rounded-lg block font-bold text-white hover:bg-blue-600">Export Data</button>
        <button onClick={() => handleExportWebsite()} className="py-2 px-4 bg-blue-400 mx-auto rounded-lg block font-bold text-white hover:bg-blue-600">Export Website</button>
      </div>
    </div>
  );
}