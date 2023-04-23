import { Gradients } from "../../utils/utils";
import TestimonialOptions from "../Testimonial/TestimonialOptions";
import React from "react";



export default function TestimonialSectionOptions({options, updateComponent}){
    const {gradient, noOfTestimonials, testimonialList} = options;

    //const allTestimonialOptions = Array.from({length: 8}, () => {<TestimonialOptions></TestimonialOptions>})
    function handleChange(event){
        updateComponent({[event.target.name]: event.target.value});
    }

    function handleTestimonialChange(index, event){
        let newTestimonials = [...testimonialList];
        newTestimonials[index] = {...newTestimonials[index], [event.target.name]: event.target.value};

        updateComponent({testimonialList: newTestimonials});
    }

    return(
        <div className="p-3">
            <label className="block">Number of Testimonials:</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="noOfTestimonials" value={noOfTestimonials} min="1" max="8" onChange={(handleChange)}/>
            <label className="block">Gradient:</label>
            <select value={gradient} name="gradient" className="p-2 rounded-lg bg-gray-200" onChange={(handleChange)}>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}></option>)}
            </select>
            <details className="bg-white mx-1 rounded-lg" open>
                <summary className="mb-2 mt-2 cursor-pointer">Testimonial List</summary>
            {testimonialList.slice(0,noOfTestimonials).map((testimonial, index) => {
                    return(
                        <SingleTestimonialOptions key={index} index={index} testimonial={testimonial} handleTestimonialChange={handleTestimonialChange}/>
                    )
                })}
            </details>
        </div>
    )
}

function SingleTestimonialOptions({testimonial,index, handleTestimonialChange}){
    return(
        <div className="flex flex-col flex-1 px-1">
        <details className="bg-white mx-1 rounded-lg">
            <summary className="mb-3 cursor-pointer">Testimonial {index + 1}</summary>
            <div className="p-3">
            <label className="block">Stars:</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="stars" value={testimonial.stars} min="1" max="5" onChange={event => handleTestimonialChange(index, event)}/>
            {/*<label className="block">Star Gradient:</label>
            <select value={starGradient} name="starGradient" className="p-2 rounded-lg bg-gray-200" onChange={(handleChange)}>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}></option>)}
            </select>*/}
            <label className="block">Testimonial Body Text</label>
            <textarea className="block mb-3 p-2 rounded-lg bg-gray-200" rows="5" type="text" name="testimonialBody" value={testimonial.testimonialBody} onChange={event => handleTestimonialChange(index, event)}></textarea>
            <label className="block">Customer Picture</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="url" name="custPicture" value={testimonial.custPicture} onChange={event => handleTestimonialChange(index, event)}></input>
            <label className="block">Customer Name</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="text" name="custName" value={testimonial.custName} onChange={event => handleTestimonialChange(index, event)}></input>
            <label className="block">Customer Position</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="text" name="custPosition" value={testimonial.custPosition} onChange={event => handleTestimonialChange(index, event)}></input>
        </div>
        </details>
        </div>
    )
}