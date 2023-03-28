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

    it('StatsWrapperOptions inputs render correct values', () => {
        // render component
        const component = renderer.create(
            <StatsWrapperOptions options={options} />
        )

        // get json version of rendered component
        let componentJSON = component.toJSON();

        // for each stat make sure that its corresponding inputs have the correct values that were passed in
        for(let i = 0; i < options.stats.length; i++){
            // get statsOptions element (grouping of stats options inputs)
            let statOptions = componentJSON.children[i];

            // get number input and its value
            let numberInput = statOptions.children[1];
            let numberValue = numberInput.props.value;
            // get text input and its value
            let textInput = statOptions.children[3];
            let textValue = textInput.props.value;

            // test that the number/text values match the corresponding options passed in
            expect(numberValue).eq(options.stats[i].number);
            expect(textValue).eq(options.stats[i].text);
        }
    })

    it('StatsWrapperOptions handleChange function', () => {
        // render component and test that handle change function returns the correct object value
        const component = renderer.create(
            <StatsWrapperOptions options={options} updateComponent={(change) => {expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}} />
        )

        // get reference to handle change function of component
        let handleChange = component.toTree().rendered.rendered[3].props.handleChange;

        // simulate an imput change
        handleChange({target: {
            name: 'gradient',
            value: Gradients['green-blue']
        }})
    })

    it('StatsWrapperOptions handleStatChange/onChange function for text input', () => {
        // create test object that the input handler should match
        const changeTest = {
            stats: [
                { number: '30+', text: 'Years of Experience in Design' },
                { number: '100+', text: 'Successfully Completed Projects' },
                { number: '50+', text: 'Global Customers' }
            ]
        }
        
        // render component
        const component = renderer.create(
            <StatsWrapperOptions options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify(changeTest))} />
        )

        // get reference to text onChange function
        let numberOnChange = component.toTree().rendered.rendered[0].rendered.rendered[1].props.onChange
        // simulate input change
        numberOnChange({
            target: {
                name: 'number',
                value: '30+'
            }
        })
    })

    it('StatsWrapperOptions handleStatChange/onChange function for number input', () => {
        // create test object that the input handler should match
        const changeTest = {
            stats: [
                { number: '12+', text: 'Years of Hard Work' },
                { number: '100+', text: 'Successfully Completed Projects' },
                { number: '50+', text: 'Global Customers' }
            ]
        }
        
        // render component
        const component = renderer.create(
            <StatsWrapperOptions options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify(changeTest))} />
        )

        // get reference to text onChange function
        let textOnChange = component.toTree().rendered.rendered[0].rendered.rendered[3].props.onChange
        // simulate input change
        textOnChange({
            target: {
                name: 'text',
                value: 'Years of Hard Work'
            }
        })
    })
})