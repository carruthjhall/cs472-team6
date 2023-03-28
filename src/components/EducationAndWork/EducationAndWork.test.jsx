import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import EducationWorkExperience from './EducationAndWork';
import { registeredComponents } from '../../utils/registeredComponents';

describe('EducationAndWork Component', () => {
    it('Text renders properly', () => {
        let options = {
            school1: 'School 1; Degree; Date',
            school2: '',
            school3: 'School 3; Degree; Date',
            job1: 'Company 1; Title; ',
            job2: '',
            job3: '',
            gradient: Gradients.default
        }

        // render the component
        const component = renderer.create(
            <EducationWorkExperience options={options}/>
        )

        // get component version of dom
        let renderedEntries = component.toJSON();
        
        // gets school and job entries that are rendered
        renderedEntries = renderedEntries.children[0].children[0].children;
        
        let optionsStrings = [options.school1, options.school2, options.school3, options.job1, options.job2, options.job3];
        let renderedStrings = [];

        //Parses through entries to grab name, titles, and dates
        for (let i = 2; i < 8; i++) {
            let result = '';
        
            if(renderedEntries[i].children != null){
            
                let text1 = "";
                let text2 = "";
                let text3 = "";

                if(renderedEntries[i].children[0].children[1] != null){
                    text1 = renderedEntries[i].children[0].children[1];
                }
                if(renderedEntries[i].children[1].children[1] != null){
                    text2 = renderedEntries[i].children[1].children[1];
                }
                if(renderedEntries[i].children[2].children[3] != null){
                    text3 = renderedEntries[i].children[2].children[3];
                }
                
                result = text1.concat("; ", text2, "; ", text3);
            
            }

            renderedStrings.push(result);
        }

        // expect the rendered strings to match the options passed into the component
        expect(renderedStrings.sort()).toEqual(optionsStrings.sort());
    })

    it('EducationAndWorkOptions show correct input values',()=>{
        // get the Education and Work registered component
        let EducationAndWorkComponent = registeredComponents.get('Education and Work');
        let OptionsComponent = EducationAndWorkComponent.optionsComponent;
        let defaultOptions = EducationAndWorkComponent.defaultOptions;
        let defaultStrings = [defaultOptions.school1, defaultOptions.school2, defaultOptions.school3, defaultOptions.job1, defaultOptions.job2, defaultOptions.job3];

        // render the EducationAndWorkOptions component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )

        let optionsComponentJSON = component.toJSON();

        // get the input components from the json
        let educationInput = optionsComponentJSON.children[0].children[1].children.filter(element => element.type === 'input');
        let workInput = optionsComponentJSON.children[1].children[1].children.filter(element => element.type === 'input');
        let gradientInput = optionsComponentJSON.children[3];
        let stringInput = [];

        // grabs the string values
        for(let i = 0; i < educationInput.length; i++){
            stringInput.push(educationInput[i].props.value);
        }
        for(let i = 0; i < workInput.length; i++){
            stringInput.push(workInput[i].props.value);
        }

        // make sure that the value of the string input was set properly
        expect(stringInput).toEqual(defaultStrings);
        // make sure that the value of the gradient input was set properly
        expect(gradientInput.props.value).eq(defaultOptions.gradient);
    })

    it('EducationAndWorkOptions handleChange function',()=>{
        // get the Education and Work registered component
        let EducationAndWorkComponent = registeredComponents.get('Education and Work');
        let OptionsComponent = EducationAndWorkComponent.optionsComponent;
        let defaultOptions = EducationAndWorkComponent.defaultOptions;

        // render the EducationAndWorkOptions component
        // In updateComponent prop make sure that component handleChange function is working as expected
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )

        // Get handle change function from component
        let handleChange = component.toTree().rendered.rendered[3].props.onChange;

        // simulate a input change, specifically the gradient changing
        handleChange({target: {
            name: 'gradient',
            value: Gradients["green-blue"]
        }})
    })

})