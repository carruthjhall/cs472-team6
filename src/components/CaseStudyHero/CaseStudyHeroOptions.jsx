import { Gradients } from "../../utils/utils";

export default function CaseStudyHeroOptions({options, updateComponent}){
    let {clientName, projTask, role, location, projPreview, briefDescr, extendDescr, gradient} = options;
    
    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }
    
    return (
        <div className="p-3">
            <details className="pb-1">
                <summary>Header</summary>
                    <div className="pl-4">
                        <label className="block">Project Task:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="projTask" value={projTask}     onChange={handleChange} />

                        <label className="block">Client Name:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="clientName" value={clientName} onChange={handleChange} />

                        <label className="block">Role:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="role" value={role} onChange={handleChange} />

                        <label className="block">Location:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="location" value={location} onChange={handleChange} />
                    </div>
            </details>

            <details>
                <summary>About Project</summary>
                <div className="pl-4">
                    <label className="block">Brief Project Description:</label>
                    <textarea className={`block mb-3 p-2 rounded-lg bg-gray-200 w-[95%] h-24`} type="text" name="briefDescr" value={briefDescr} onChange={handleChange} />

                    <label className="block">Extended Project Description:</label>
                    <textarea className={`block mb-3 p-2 rounded-lg bg-gray-200 w-[95%] h-24`} type="text" name="extendDescr" value={extendDescr} onChange={handleChange} />
                </div>
            </details>

            <label className="block" title="Use an image upload site such as imgur.com to showcase your work.">Project Picture(URL):</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="url" name="projPreview" value={projPreview} onChange={(handleChange)}></input>

            <label className="block">Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
        </div>
    )
}