import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";
import AboutHeadSection from "../components/AboutHeadSection/AboutHeadSection";
import AboutHeadSectionOptions from "../components/AboutHeadSection/AboutHeadSectionOptions";
import AboutHeadSectionPreview from "../components/AboutHeadSection/AboutHeadSectionPreview.png";
import Component from "../models/Component";
import { Gradients } from "./utils";

export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})],
    ['AboutHeadSection', new Component('AboutHeadSection', AboutHeadSection, AboutHeadSectionOptions, AboutHeadSectionPreview, 
        {   name: 'Kartik Bansal', 
            description: `Over the past 12 years, I\'ve worked with a diverse range of clients, from startups to Fortune 500 companies. 
                            I love crafting interfaces that delight users and help businesses grow.`
        }],
]);