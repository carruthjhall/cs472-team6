import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import MoreProjects from './MoreProjects';
import MoreProjectsOptions from './MoreProjectsOptions';

let options= {
        title: "More", gradientTitle: "Projects", 
        image: "", 
        image2: "", 
        body: "More", description: "Projects", 
        gradient: Gradients.default, buttonText: "More", button2Text: "Projects"
}


describe('MoreProjects Component', () => {
    it('MoreProjects text renders properly', () => {
        const component = renderer.create(
            <MoreProjects options={options} updateComponent={() => null} />
        )
        let MoreProjectsComponentJSON = component.toJSON();
        
        let textRenders = MoreProjectsComponentJSON.children[1].children[0].children[1].children[0];
        
        let titleRender = textRenders.children[0];
        let gradientTitleRender = textRenders.children[1].children[0];



        expect(titleRender).eq(options.title);
        expect(gradientTitleRender).eq(options.gradientTitle);

    })

    it('MoreProjectsOptions Input Value Renders', ()=> {
        const component = renderer.create(
            <MoreProjectsOptions options={options} />
        )

        let MoreProjectsComponentJSON = component.toJSON();

        let textOptions = MoreProjectsComponentJSON.children[5].children[5];
        let bodyOptions = textOptions.children[2];
        let descriptionOp = textOptions.children[4];


        expect(bodyOptions.props.value).eq(options.body);
        expect(descriptionOp.props.value).eq(options.description);
    })

    it('MoreProjectOptions handleChange function', () => {
        const component = renderer.create(
            <MoreProjectsOptions options={options} updateComponent={(change) => {expect(JSON.stringify(change)).eq(JSON.stringify({Body: "More"}))}} />
        )

        let handleChange = component.toTree().rendered.rendered[5].rendered[5].rendered[2];
    
        expect(handleChange.props.value).eq(options.body);
    })


})