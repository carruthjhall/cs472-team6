import Component from "../models/Component";
import { Gradients } from "./utils";

import AboutHeadSection from "../components/AboutHeadSection/AboutHeadSection";
import AboutHeadSectionOptions from "../components/AboutHeadSection/AboutHeadSectionOptions";
import AboutHeadSectionPreview from "../components/AboutHeadSection/AboutHeadSectionPreview.png";

export const AboutHeadSectionComponent = new Component(

    'AboutHeadSection', 
    AboutHeadSection, 
    AboutHeadSectionOptions, 
    AboutHeadSectionPreview, 
    {   name: 'Kartik Bansal', 
        gradient: Gradients.default,
        description: `Over the past 12 years, I\'ve worked with a diverse range of clients, from startups to Fortune 500 companies. 
                        I love crafting interfaces that delight users and help businesses grow.`
    }