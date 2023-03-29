import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import SocialMedia from './SocialMedia';
// import SocialMediaOptions from './SocialMediaOptions';

let options = {
    title: "Follow Me", body: "Im Katrik Bansal, a designer who works with startups to build brands.", 
    image: "https://i.imgur.com/TY7YztC.png", gradient: Gradients.default,
    FbLink: "https://www.facebook.com", LiLink: "https://www.linkedin.com", 
    TwLink: "https://www.twitter.com", InLink: "https://www.instagram.com",
    DrLink: "https://www.dribbble.com", BhLink: "https://www.behance.net"
}

describe('SocialMedia Component', () => {
    it('Text renders', () => {
        
        
        const component = renderer.create(
            <SocialMedia options={options}/>
        )

        let SocialMediaDiv = component.toJSON();

        let TextRenders = SocialMediaDiv.children[0].children[1].children[0];

        // renderedText = renderedText.children[0]

        let titleText = TextRenders.children[0].children[0]
        
        let bodyText = TextRenders.children[1].children[0]

        expect(titleText).toEqual(options.title);
        expect(bodyText).eq(options.body);
    })
    it('SocialMedia Input Value Renders', () => {
        
        const component = renderer.create(
            <SocialMedia options={options}/>
        )
        

        let SocialMediaDiv = component.toJSON();
        
        let SocialMediaLinks = SocialMediaDiv.children[0].children[1].children[0].children[3];

        // for(let i = 0; i < 6 ; i++){
        //     let InputLink = SocialMediaLinks.children[i]
        //     expect (InputLink.props.href).toEqual(options)
        // } 

        let FacebookL = SocialMediaLinks.children[0]
        let LinkedinL = SocialMediaLinks.children[1]
        let TwitterL = SocialMediaLinks.children[2]
        let InstagramL = SocialMediaLinks.children[3]
        let DribbbleL = SocialMediaLinks.children[4]
        let BehanceL = SocialMediaLinks.children[5]

        expect(FacebookL.props.href).toEqual(options.FbLink)
        expect(LinkedinL.props.href).toEqual(options.LiLink)
        expect(TwitterL.props.href).toEqual(options.TwLink)
        expect(InstagramL.props.href).toEqual(options.InLink)
        expect(DribbbleL.props.href).toEqual(options.DrLink)
        expect(BehanceL.props.href).toEqual(options.BhLink)
    })
    // it('SocialMedia handleChange function', () =>{
    //     const TestOptions={
    //         title: "Test Title", body: "Test Body", 
    //         image: "https://i.imgur.com/TY7YztC.png", gradient: Gradients['green-blue'],
    //         FbLink: "https://google.com", LiLink: "https://google.com", 
    //         TwLink: "https://www.bing.com/", InLink: "https://www.bing.com/",
    //         DrLink: "https://www.yahoo.com/", BhLink: "https://www.yahoo.com/"
    //     }
    //     const component = renderer.create(
    //         <SocialMedia options={options} updateComponent={(change) =>
    //         expect(JSON.stringify(change)).eq(JSON.stringify(TestOptions))}    
    //         />
    //     )
    //     let handleChange = component.toTree().rendered.rendered.rendered[1].props.onChange;

    //     handleChange({
    //         target: {
    //             name: 'text',
    //             value: Gradients['green-blue']
    //         }
    //     })
            
    // })
})