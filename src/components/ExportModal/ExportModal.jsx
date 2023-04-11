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

  let webcontainerInstance;

  function handleExportData() {
    const zip = new JSZip();
    zip.file("portfolio.json", toJSON({componentsList, pageOptions}));
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "portfolio.zip");
    });
  }

  async function handleExportWebsite(){

    webcontainerInstance = await WebContainer.boot();
    await webcontainerInstance.mount(files);

    const packageJSON = await webcontainerInstance.fs.readFile('package.json', 'utf-8');
    console.log(packageJSON);
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