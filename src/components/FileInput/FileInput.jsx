import React, { useRef } from 'react';
import Icon from "../Icon/Icon";

export default function FileInput({name, onChange}) {
    const inputRef = useRef(null);

    function handleClick() {
        if (inputRef !== null && inputRef.current !== null) {
            let input = inputRef.current;
            input.click();
        }
    }

    function handleImport() {
        if (inputRef !== null && inputRef.current !== null) {
            let input = inputRef.current;
            if (input.files !== null && input.files.length > 0) {
                const file = input.files[0];
                const reader = new FileReader();

                reader.onabort = () => alert("File reading was aborted");
                reader.onerror = () => alert("File reading has failed");
                reader.onload = () => {
                    let fileContents = "";
                    // make sure that result is defined and that is a string
                    if (reader.result && typeof reader.result === "string") {
                        fileContents = reader.result;
                    }
                    
                    onChange(fileContents);
                };

                reader.readAsText(file);
            }
        }
    }

    return (
        <div>
            <button onClick={handleClick} className="py-2 px-4 bg-blue-400 ml-auto mr-4 rounded-lg"><Icon name="arrow-up-tray" /></button>
            <input type="file" className="hidden" name={name} accept=".json" ref={inputRef} onChange={handleImport}/>
        </div>
    )
}

