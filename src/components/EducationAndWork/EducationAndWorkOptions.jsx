export default function EducationAndWorkOptions({options, updateComponent}) {
    let {educationItem1, workExperienceItem1} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    
    return (
        <div className="p-3">
            <label className="block">Education:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="educationItem1" value={educationItem1} onChange={(handleChange)} />

            <label className="block">Work Experience:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="workExperienceItem1" value={workExperienceItem1} onChange={(handleChange)} />
        </div>
    )
}