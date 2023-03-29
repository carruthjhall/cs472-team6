import GradientSelect from "../GradientSelect/GradientSelect.jsx";

export default function CompaniesOptions({options, updateComponent}){
    const {gradient, noOfLogos, logoList} = options;

    function handleChange(event){
        updateComponent({[event.target.name]: event.target.value});
    }

    return(
        <div>
        <label className="block">Number of Companies</label>
        <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="noOfLogos" value={noOfLogos} min="1" max="12" onChange={(handleChange)}/>
        <GradientSelect name={"gradient"} value={gradient} handleChange={handleChange}/>
        {logoList.slice(0,noOfLogos).map((company, index) => {
                    return(
                        <CompanyOptions key = {index} index = {index} company={company} handleChange={handleChange}/>
                    )
                })}
        </div>
    );
}

function CompanyOptions({company, index, handleChange}){
    const {url, darkUrl} = company;
return(
    <div>
        <label className="block">Logo {index + 1} URL</label>
        <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="url" name={`logo ${index + 1}`} value={url} onChange={(handleChange)}></input>
    </div>
);
}