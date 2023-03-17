export default function AboutHeadSectionOptions({options, updateComponent}) {
    let {name, description} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    
    return (
        <div className="p-3">
            <label className="block">Name:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="name" value={name} onChange={(handleChange)} />

            <label className="block">Description:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="description" value={description} onChange={(handleChange)} />
        </div>
    )
}