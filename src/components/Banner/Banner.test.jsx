import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import Banner from './Banner';


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
})