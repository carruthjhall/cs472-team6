import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import RecentInsights from './RecentInsights';
import { registeredComponents } from '../../utils/registeredComponents';


describe('RecentInsights Component', () => {
    it('Text renders properly', () => {
        let options = {
            gradient: Gradients.default,
            buttonLink1: "http://www.google.com",
            buttonLink2: "http://www.google.com",
            buttonLink3: "http://www.google.com", 
            buttonLink4: "http://www.google.com",
            buttonText1: "All Posts", 
            buttonText2: "Design",
            buttonText3: "Technology",
            buttonText4: "Webflow",
            img1: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/RecentInsightsImg1.png?raw=true",
            img2: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/RecentInsightsImg2.png?raw=true",
            img3: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/RecentInsightsImg3.png?raw=true",
            img4: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/RecentInsightsImg4.png?raw=true",
            img5: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/RecentInsightsImg5.png?raw=true",
            postLink11: "http://www.google.com", 
            postLink12: "http://www.google.com", 
            postLink21: "http://www.google.com", 
            postLink22: "http://www.google.com", 
            postLink31: "http://www.google.com", 
            postLink32: "http://www.google.com", 
            postLink41: "http://www.google.com", 
            postLink42: "http://www.google.com", 
            postLink51: "http://www.google.com", 
            postLink52: "http://www.google.com",
            postText11: "UI/UX",
            postText21: "UI/UX",
            postText31: "UI/UX",
            postText41: "UI/UX",
            postText51: "UI/UX",
            postText12: "Web Design",
            postText22: "Web Design",
            postText32: "Web Design",
            postText42: "Web Design",
            postText52: "Web Design",
            description1: "Lorem ipsum dolor sit amet consectetur. Ac praesent",
            description2: "Lorem ipsum dolor sit amet consectetur. Ac praesent", 
            description3: "Lorem ipsum dolor sit amet consectetur. Ac praesent", 
            description4: "Lorem ipsum dolor sit amet consectetur. Ac praesent", 
            description5: "Lorem ipsum dolor sit amet consectetur. Ac praesent",  
            author1: "By Kartik Bansal",
            author2: "By Kartik Bansal",
            author3: "By Kartik Bansal",
            author4: "By Kartik Bansal",
            author5: "By Kartik Bansal"
        }

        const component = renderer.create(
            <RecentInsights options={options}/>
        )

        let displayedWords = component.toJSON();
        let showedButtonText1 = displayedWords.children[0].children[1].children[0].children[0].children[0];
        expect(showedButtonText1).eq(options.buttonText1);
    })

    it('RecentInsightsOptions show correct input values',()=>{
        let RecentInsightsComponent = registeredComponents.get('Recent Insights');
        let OptionsComponent = RecentInsightsComponent.optionsComponent;
        let defaultOptions = RecentInsightsComponent.defaultOptions;

        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )

        let optionsComponentJSON = component.toJSON();

        let wordsInput = optionsComponentJSON.children[1];
        let gradientInput = optionsComponentJSON.children[3];

        expect(wordsInput.props.value).eq(defaultOptions.gradient);
    })

    it('MoreArticlesOptions handleChange function',()=>{
        let RecentInsightsComponent = registeredComponents.get('Recent Insights');
        let OptionsComponent = RecentInsightsComponent.optionsComponent;
        let defaultOptions = RecentInsightsComponent.defaultOptions;

        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )

        let handleChange = component.toTree().rendered.rendered[1].props.onChange;

        handleChange({target: {
            name: 'gradient',
            value: Gradients["green-blue"]
        }})
    })
})