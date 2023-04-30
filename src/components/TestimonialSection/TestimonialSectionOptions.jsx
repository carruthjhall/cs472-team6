import React from "react";
import GradientSelect from "../GradientSelect/GradientSelect";

export default function TestimonialSectionOptions({options, updateComponent}){
    const {gradient, noOfTestimonials, testimonialList} = options;

    function handleChange(event){
        updateComponent({[event.target.name]: event.target.value});
    }

    function handleTestimonialChange(index, event){
        let newTestimonials = [...testimonialList];
        newTestimonials[index] = {...newTestimonials[index], [event.target.name]: event.target.value};

        updateComponent({testimonialList: newTestimonials});
    }

    function handleImageChange(index, event){
        if(event.target.files.length > 0){
            let newTestimonials = [...testimonialList];
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                newTestimonials[index] = {...newTestimonials[index], [event.target.name]: reader.result};
                updateComponent({testimonialList: newTestimonials});
            };
        }
    }

    return(
        <div className="p-3">
            <label className="block">Number of Testimonials:</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="noOfTestimonials" value={noOfTestimonials} min="1" max="8" onChange={(handleChange)}/>
            <GradientSelect name={"gradient"} value={gradient} handleChange={handleChange} />
            <details className="bg-white mx-1 rounded-lg" open>
                <summary className="mb-2 mt-2 cursor-pointer">Testimonial List</summary>
            {testimonialList.slice(0,noOfTestimonials).map((testimonial, index) => {
                    return(
                        <SingleTestimonialOptions key={index} index={index} testimonial={testimonial} handleTestimonialChange={handleTestimonialChange} handleImageChange={handleImageChange}/>
                    )
                })}
            </details>
        </div>
    )
}

function SingleTestimonialOptions({testimonial,index, handleImageChange, handleTestimonialChange}){
    return(
        <div className="flex flex-col flex-1 px-1">
        <details className="bg-white mx-1 rounded-lg">
            <summary className="mb-3 cursor-pointer">Testimonial {index + 1}</summary>
            <div className="p-3">
            <label className="block">Stars:</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="stars" value={testimonial.stars} min="1" max="5" onChange={event => handleTestimonialChange(index, event)}/>
            <label className="block">Testimonial Body Text</label>
            <textarea className="block mb-3 p-2 rounded-lg bg-gray-200" rows="5" type="text" name="testimonialBody" value={testimonial.testimonialBody} onChange={event => handleTestimonialChange(index, event)}></textarea>
            <label className="block">Customer Picture</label>
            <input className="block mb-3" type="file" accept="image/png, image/jpeg, image/svg+xml" name="custPicture" onChange={event => handleImageChange(index, event)}></input>
            <p className="mt-2 ml-1 text-xs">PNG, JPG, or SVG</p>
            <label className="block">Customer Name</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="text" name="custName" value={testimonial.custName} onChange={event => handleTestimonialChange(index, event)}></input>
            <label className="block">Customer Position</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="text" name="custPosition" value={testimonial.custPosition} onChange={event => handleTestimonialChange(index, event)}></input>
        </div>
        </details>
        </div>
    )
}