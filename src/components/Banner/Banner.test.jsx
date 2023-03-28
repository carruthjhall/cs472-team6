import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import Banner from './Banner';
import { registeredComponents } from '../../utils/registeredComponents';


describe('Banner Component', () => {
    it('Text renders properly', () => {
        let options = {
            words: 'Design,Develop,Discover', 
            gradient: Gradients.default
        }

        // render the component
        const component = renderer.create(
            <Banner options={options}/>
        )

        // get component version of dom
        let displayedWords = component.toJSON();
        // get rotated div that contains words and stars;
        displayedWords = displayedWords.children[1];
        // get words and stars elements and then filter to only contain word divs (only get first 3 since we are only testing with 3 words)
        displayedWords = displayedWords.children.filter(element => element.type === 'div').slice(0, 3);
        // convert displayed words into same format as options.words
        displayedWords = displayedWords.map(element => element.children[0]).join(',')
        
        // expect the rendered/displayed words to match the options passed into the component
        expect(displayedWords).eq(options.words);
    })

    it('BannerOptions show correct input values',()=>{
        // get the Banner registered component
        let BannerComponent = registeredComponents.get('Banner');
        let OptionsComponent = BannerComponent.optionsComponent;
        let defaultOptions = BannerComponent.defaultOptions;

        // render the BannerOptions component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )


        let optionsComponentJSON = component.toJSON();

        // get the input components from the json
        let wordsInput = optionsComponentJSON.children[1];
        let gradientInput = optionsComponentJSON.children[3];

        // make sure that the value of the words input was set properly
        expect(wordsInput.props.value).eq(defaultOptions.words);
        // make sure that the value of the gradient input was set properly
        expect(gradientInput.props.value).eq(defaultOptions.gradient);
    })

    it('BannerOptions handleChange function',()=>{
        // get the Banner registered component
        let BannerComponent = registeredComponents.get('Banner');
        let OptionsComponent = BannerComponent.optionsComponent;
        let defaultOptions = BannerComponent.defaultOptions;

        // render the BannerOptions component
        // In updateComponent prop make sure that component handleChange function is working as expected
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )

        // Get handle change function from component
        let handleChange = component.toTree().rendered.rendered[1].props.onChange;

        // simulate a input change, specifically the gradient changing
        handleChange({target: {
            name: 'gradient',
            value: Gradients["green-blue"]
        }})
    })
})