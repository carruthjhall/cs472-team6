import { Gradients } from "../../utils/utils";

export default function ContactSectionOptions({options, updateComponent}) {
    let {uEmail,uPhone,displayHeader,displayDescr, gradient} = options;

    function handleChange(h) {
        updateComponent({ [h.target.name]: h.target.value});
    }

    
    return (
        <div className="p-3">
            
            <label className="block">Display Header:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="displayHeader" value={displayHeader} onChange={(handleChange)} />

            <label className="block">Display Description:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="displayDescr" value={displayDescr} onChange={(handleChange)} />
            
            <label className="block">User Email:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="uEmail" value={uEmail} onChange={(handleChange)} />

            <label className="block">User Phone Number:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="uPhone" value={uPhone} onChange={(handleChange)} />

            <label className="block">Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>

        </div>
    )
}