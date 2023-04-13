import { useRef } from "react";
import GradientSelect from "../GradientSelect/GradientSelect";

export default function ServicesSectionOptions({options, updateComponent}) {
    let {header, services} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    function handleServiceChange(index, e){
        let newServices = [...services];
        newServices[index] = {...newServices[index], [e.target.name]: e.target.value};

        updateComponent({ services: newServices });
    }

    
    return (
        <div className="p-3">
            <label className="options-label">Header:</label>
            <input type="text" name="header" className="options-input" value={header} onChange={handleChange} />
            <button className="options-btn bg-blue-500 hover:bg-blue-700 font-bold text-white">Add Item</button>
            {services.map((service, index) => <ServiceOptions key={index} service={service} index={index} handleChange={handleServiceChange}  />)}
        </div>
    )
}

function ServiceOptions({index, service, handleChange}){
    const { name, gradient, picture, url } = service;
    const imageInput = useRef(null);

    // handles updating state (saving the image) after the user has selected an image
    function handleImageImport() {
        if (imageInput !== null && imageInput.current !== null){
            let input = imageInput.current;
            if (input.files !== null && input.files.length > 0){
                const image = input.files[0];
                const reader = new FileReader();

                reader.onabort = () => alert("ERROR: Image could not be imported");
                reader.onerror = () => alert("ERROR: Image could not be imported");
                reader.onload = () => {
                    const imageURL = reader.result || '';
                    handleChange(index, { target: { name: "picture", value: imageURL } })
                }

                // read the image file as Base64
                reader.readAsDataURL(image);
            }
        }
    }

    // used to click the hidden input element (this allows us to have a custom file input button)
    function handleSelect(){
        if (imageInput !== null && imageInput.current !== null){
            let input = imageInput.current;
            input.click();
        }
    }

    return (
        <div className="mt-3">
            <label className="options-label font-bold">Item {index+1}:</label>
            <label className="options-label">Name:</label>
            <input type="text" className="options-input" name="name" value={name} onChange={e => handleChange(index, e)} />
            <label className="options-label">URL:</label>
            <input type="text" className="options-input" name="url" value={url} onChange={e => handleChange(index, e)} />
            <label className="options-label">Image:</label>
            <input name="picture" type="text" className="options-input" value={picture} onChange={e => handleChange(index, e)}/>
            <p className="font-bold">OR</p>
            <input ref={imageInput} name="picture" onChange={handleImageImport} className="hidden" type="file" accept="image/jpeg, image/png, image/jpg"></input>
            <button className="options-btn" onClick={handleSelect}>Select Image</button>
            <GradientSelect name={"gradient"} value={gradient} handleChange={e => handleChange(index, e)} />
        </div>
    )
}