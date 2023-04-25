import React from 'react'
import {LangCodes} from '../../utils/LangCodes';

export default function LanguageSelect({name, value, handleChange}) {
    return (
        <div>
            <label className="block">Language:</label>
            <select value={value} name={name} onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(LangCodes)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>   
        </div>
    )
}


