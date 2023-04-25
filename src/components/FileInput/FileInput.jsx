import React, { useRef } from 'react';
import Icon from "../Icon/Icon";

export default function FileInput() {
    const inputRef = useRef(null);
    return (
        <div>
            <button className="py-2 px-4 bg-blue-400 ml-auto mr-4 rounded-lg"><Icon name="arrow-up-tray" /></button>
            <input type="file" classname="hidden" name="data-input" accept=".json" ref={inputRef} />
        </div>
    )
}

