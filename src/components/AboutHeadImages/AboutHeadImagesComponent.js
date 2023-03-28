import AboutHeadImages from "../components/AboutHeadImages/AboutHeadImages";
import AboutHeadImagesOptions from "../components/AboutHeadImages/AboutHeadImagesOptions";
import AboutHeadImagesPreview from "../components/AboutHeadImages/AboutHeadImagesPreview.png";

import Component from "../models/Component";
import { Gradients } from "../../utils/utils";

import image1 from "../components/AboutHeadImages/aboutImage1.svg";
import image2 from "../components/AboutHeadImages/aboutImage2.svg";
import image3 from "../components/AboutHeadImages/aboutImage3.svg";
import image4 from "../components/AboutHeadImages/aboutImage4.svg";

export const AboutHeadImagesComponent = new Component(
    'AboutHeadSection', 
    AboutHeadSection, 
    AboutHeadSectionOptions, 
    AboutHeadSectionPreview, 
    {   
    	name: 'Kartik Bansal', 
        gradient: Gradients.default,
        description: `Over the past 12 years, I\'ve worked with a diverse range 
        of clients, from startups to Fortune 500 companies. I love crafting 
        interfaces that delight users and help businesses grow.`
    }
);