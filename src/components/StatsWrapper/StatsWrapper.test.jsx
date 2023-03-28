import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import StatsWrapper from './StatsWrapper';
import StatsWrapperOptions from './StatsWrapperOptions';

// test options
let options = {
    stats: [
        {
            number: "12+", 
            text: "Years of Experience in Design"
        },    
        {
            number: "100+", 
            text: "Successfully Completed Projects"
        },
        {
            number: "50+", 
            text: "Global Customers"
        }
    ],
    gradient: Gradients.default
}

describe('StatsWrapper Component', () => {
    it('Stats text renders properly', () => {
        
        // render component
        const component = renderer.create(
            <StatsWrapper options={options} updateComponent={() => null} />
        )

        // get JSON version of rendered component
        let statsWrapperComponentJSON = component.toJSON();

        // for each stat provided in the options object stat array, check that the rendered number/text matches
        for(let i = 0; i < options.stats.length; i++){
            // get stat element
            const stat = statsWrapperComponentJSON.children[i];

            // get number and text elements
            const [number, text] = stat.children[0].children;
        
            // extract rendered number and text from respective elements
            const numberRendered = number.children[0];
            const textRendered = text.children[0];

            // test that rendered text/number matches the passed in options
            expect(numberRendered).eq(options.stats[i].number);
            expect(textRendered).eq(options.stats[i].text);
        } 
    })
})