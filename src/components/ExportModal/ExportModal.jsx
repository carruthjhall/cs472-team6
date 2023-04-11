import { ExportModalState } from "../../state";

export default function ExportModal() {
  const shown = ExportModalState((state) => state.shown);
  const setShown = ExportModalState((state) => state.setShown);

  return (
    <div
      className={`${
        shown ? "block" : "hidden"
      } fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-black/40`}
    >
      <div className="w-4/5 max-w-lg bg-white mx-auto mt-[25%] -translate-y-1/4 p-9 rounded-lg">
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

        {/* TODO: Export Buttons */}

      </div>
    </div>
  );
}