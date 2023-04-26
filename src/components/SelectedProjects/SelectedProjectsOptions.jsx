export default function SelectedProjectsOptions({options, updateComponent}){
    let  {header, descr, image1, image2, projName, projField, btn1, btn1Link, btn2, btn2Link, gradient} = options 

    function handleChange(h) {
        updateComponent({ [h.target.name]: h.target.value});
    }

    return (
        <div className="p-3">
            
            <label className="block">Display Header:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="header" value={header} onChange={(handleChange)} />


            <label className="block">Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>

        </div>
    )


}