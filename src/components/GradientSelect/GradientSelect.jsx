import { Gradients } from "../../utils/utils";

export default function GradientSelect({name, value, handleChange}) {
    return (
        <div>
            <label className="block">Gradient:</label>
            <select value={value} name={name} onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>   
        </div>
    )
}