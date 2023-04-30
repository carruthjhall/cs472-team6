import TestimonialSection from "./TestimonialSection";
import TestimonialSectionOptions from "./TestimonialSectionOptions";
import TestimonialSectionPreview from "./TestimonialSectionLight.png";
import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";

export const TestimonialSectionComponent = new Component(
    'Testimonial Section',
    TestimonialSection,
    TestimonialSectionOptions,
    TestimonialSectionPreview,
    {gradient: Gradients.default,
     noOfTestimonials: 8,
     testimonialList: [
        {
            stars: 5, 
            starGradient: Gradients.default, 
            testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", 
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here", 
            custPosition: "Insert customer position here"
        },
        {
            stars: 5, 
            starGradient: Gradients.default, 
            testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", 
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here", 
            custPosition: "Insert customer position here"
        },
        {
            stars: 5, 
            starGradient: Gradients.default, 
            testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", 
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here", 
            custPosition: "Insert customer position here"
        },
        {
            stars: 5, 
            starGradient: Gradients.default, 
            testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", 
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here", 
            custPosition: "Insert customer position here"
        },
        {
            stars: 5, 
            starGradient: Gradients.default, 
            testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", 
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here", 
            custPosition: "Insert customer position here"
        },
        {
            stars: 5, 
            starGradient: Gradients.default, 
            testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", 
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here", 
            custPosition: "Insert customer position here"
        },
        {
            stars: 5, 
            starGradient: Gradients.default, 
            testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", 
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here", 
            custPosition: "Insert customer position here"
        },
        {
            stars: 5, 
            starGradient: Gradients.default, 
            testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", 
            custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
            custName: "Insert customer name here", 
            custPosition: "Insert customer position here"
        }
     ]
    }
);