import { Gradients } from "../../utils/utils";

export default function TestimonialOptions({options, updateComponent}) {
    const {stars, starGradient, testimonialBody, custPicture, custName, custPosition} = options;

    function handleChange(event){
        updateComponent({[event.target.name]: event.target.value});
    }

    return (
        <div className="p-3">
            <label className="block">Stars:</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="stars" value={stars} min="1" max="5" onChange={(handleChange)}/>
            {/*<label className="block">Star Gradient:</label>
            <select value={starGradient} name="starGradient" className="p-2 rounded-lg bg-gray-200" onChange={(handleChange)}>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}></option>)}
            </select>*/}
            <label className="block" >Testimonial Body Text</label>
            <textarea className="block mb-3 p-2 rounded-lg bg-gray-200" rows="5" type="text" name="testimonialBody" value={testimonialBody} onChange={(handleChange)}></textarea>
            <label className="block">Customer Picture</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="url" name="custPicture" value={custPicture} onChange={(handleChange)}></input>
            <label className="block">Customer Name</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="text" name="custName" value={custName} onChange={(handleChange)}></input>
            <label className="block">Customer Position</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="text" name="custPosition" value={custPosition} onChange={(handleChange)}></input>
        </div>
    )
}