import { Gradients } from '../../utils/utils';
import { describe, expect, it} from 'vitest';
import TestimonialSection from './TestimonialSection';
import TestimonialSectionOptions from './TestimonialSectionOptions';
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
            //Accesses rendered url for each customer image in JSON
            const URLRendered = testimonialsJSON.children[1].children[0].children[2].children[0].props.src;

            //Does the expected URL match the rendered URL?
            expect(URLRendered).eq(options.testimonialList[i].custPicture);
        }
        testTestimonials.unmount();
    })

    it('URL changes on user input', ()=> { 

        const newTestimonialList = { 
            testimonialList: [
            {
                stars: 5, 
                starGradient: Gradients.default, 
                testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", 
                custPicture: "test.png",
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
         ]};

        const testTestimonials = renderer.create(
            <TestimonialSectionOptions options={options} updateComponent={(cEvent) => expect(JSON.stringify(cEvent)).eq(JSON.stringify({custPicture: "test.png"}))} />
        )

        //JSON representation of component
        let testimonialsJSON = testTestimonials.toJSON();
        
        //reference to handleImageChange in TestimonialSectionOptions
        let handleImageChange = testimonialsJSON.children[3].children[1].children[0].children[1].children[5].props.onChange;

        let originalFile = new File(['test1'], "test1.png", {type: "image/png"});

        handleImageChange({
            target: {
                name: 'url',
                value: 'test.png',
                files: [originalFile]
            }
        })

        handleImageChange({
            target: {
                name: 'url',
                value: 'test.png',
                files: ''
            }
        })
        testTestimonials.unmount();
    })

    it('TestimonialSectionOptions handleTestimonialChange function', ()=> { 

        const newTestimonialList = { 
            testimonialList: [
            {
                stars: 3, 
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
         ]};

        const testTestimonials = renderer.create(
            <TestimonialSectionOptions options={options} updateComponent={(cEvent) => expect(JSON.stringify(cEvent)).eq(JSON.stringify(newTestimonialList))} />
        )

        //JSON representation of component
        let testimonialsJSON = testTestimonials.toJSON();
        
        //reference to handleTestimonialChange in TestimonialSectionOptions
        let handleTestimonialChange = testimonialsJSON.children[3].children[1].children[0].children[1].children[1].props.onChange;

        handleTestimonialChange({
            target: {
                name: 'stars',
                value: 3
            }})
    })
})