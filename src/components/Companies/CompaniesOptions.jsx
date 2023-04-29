import GradientSelect from "../GradientSelect/GradientSelect.jsx";

export default function CompaniesOptions({options, updateComponent}){
    const {gradient, noOfLogos, logoList} = options;

    function handleChange(event){
        updateComponent({[event.target.name]: event.target.value});
    }

    function handleLogoChange(index, event){
        let newLogos = [...logoList];
        newLogos[index] = {...newLogos[index], [event.target.name]: event.target.value};

        updateComponent({logoList: newLogos});
    }

    function handleImageChange(index, event){
        if(event.target.files.length > 0){
            let newLogos = [...logoList];
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                newLogos[index] = {...newLogos[index], [event.target.name]: reader.result};
                updateComponent({logoList: newLogos});
            };
        }
    }

    return(
        <div className="p-3">
        <label className="block">Number of Companies</label>
        <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="noOfLogos" value={noOfLogos} min="1" max="12" onChange={(handleChange)}/>
        <GradientSelect name={"gradient"} value={gradient} handleChange={handleChange}/>
        <details className="mt-3">
            <summary className="mb-3">Logos</summary>
                {logoList.slice(0,noOfLogos).map((company, index) => {
                        return(
                            <CompanyOptions key={index} index={index} company={company} handleLogoChange={handleLogoChange} handleImageChange={handleImageChange}/>
                        )
                })}
        </details>
        </div>
    );
}

function CompanyOptions({company, index, handleLogoChange, handleImageChange}){
    const {url, darkUrl} = company;
return(
    <details className="bg-white mx-1 pl-4 rounded-lg">
        <summary className="mb-1 cursor-pointer">Logo {index + 1}</summary>
        <div className="pl-7 mb-3">
            <label className="block">Upload Logo {index + 1}</label>
            <input className="block mb-3" type="file" accept="image/png, image/jpeg, image/svg+xml" name="url" onChange={event => handleImageChange(index, event)}></input>
            <p className="mt-2 ml-1 text-xs">PNG, JPG, or SVG</p>
        </div>
    </details>
);
}