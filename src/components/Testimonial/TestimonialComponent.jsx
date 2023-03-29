import Component from "../../models/Component";
import Testimonial from "./Testimonial";
import TestimonialOptions from "./TestimonialOptions";
import TestimonialPreview from "./TestimonialPreviewLight.png";
import { Gradients } from "../../utils/utils";


export const TestimonialComponent = new Component(
    'Testimonial',
    Testimonial,
    TestimonialOptions,
    TestimonialPreview,
    {
        stars: 5, 
        starGradient: Gradients.default, 
        testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", 
        custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
        custName: "Insert customer name here", 
        custPosition: "Insert customer position here"
    }

)