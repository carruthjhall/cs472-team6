import { Gradients } from '../../utils/utils';
import { describe, expect, it} from 'vitest';
import TestimonialSection from './TestimonialSection';
import React from 'react';
import renderer from 'react-test-renderer';

//default test options
let options = {
    gradient: Gradients.default,
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



describe('TestimonialSection Component', () => {
    it('Customer images render properly', ()=> {
        const testTestimonials = renderer.create(
            <TestimonialSection options={options}/>
        )

        let testimonialsJSON = testTestimonials.toJSON();
        for(let i = 0; i < options.noOfTestimonials; i++){
            console.log(testimonialsJSON.children[1].children[0].children[2].children[0].props.src);
            //Accesses rendered url for each customer image in JSON
            const URLRendered = testimonialsJSON.children[1].children[0].children[2].children[0].props.src;

            //Does the expected URL match the rendered URL?
            expect(URLRendered).eq(options.testimonialList[i].custPicture);
        }
        testTestimonials.unmount();
    })

    /*it('URL changes on user input', ()=> { 
        const testTestimonials = renderer.create(
            <TestimonialSection options={options}/>
        )
        //JSON representation of component
        let testimonialsJSON = testTestimonials.toJSON();

        //Shows the rows of logos in logo wrapper div
        let companyRows = companiesJSON.children[1].children;

        //Does the logo wrapper div have 4 rows of logos?
        expect(companyRows).to.have.lengthOf(4);
})*/
})