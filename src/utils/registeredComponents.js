import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";

import AboutHeadSection from "../components/AboutHeadSection/AboutHeadSection";
import AboutHeadSectionOptions from "../components/AboutHeadSection/AboutHeadSectionOptions";
import AboutHeadSectionPreview from "../components/AboutHeadSection/AboutHeadSectionPreview.png";

import AboutHeadImages from "../components/AboutHeadImages/AboutHeadImages";
import AboutHeadImagesOptions from "../components/AboutHeadImages/AboutHeadImagesOptions";
import AboutHeadImagesPreview from "../components/AboutHeadImages/AboutHeadImagesPreview.png";
import image1 from "../components/AboutHeadImages/aboutImage1.svg";
import image2 from "../components/AboutHeadImages/aboutImage2.svg";
import image3 from "../components/AboutHeadImages/aboutImage3.svg";
import image4 from "../components/AboutHeadImages/aboutImage4.svg";

import Component from "../models/Component";
import { Gradients } from "./utils";

export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})],

    ['AboutHeadSection', new Component('AboutHeadSection', AboutHeadSection, AboutHeadSectionOptions, AboutHeadSectionPreview, 
        {   name: 'Kartik Bansal', 
            gradient: Gradients.default,
            description: `Over the past 12 years, I\'ve worked with a diverse range of clients, from startups to Fortune 500 companies. 
                            I love crafting interfaces that delight users and help businesses grow.`
        })
    ],
    ['AboutHeadImages', new Component('AboutHeadImages', AboutHeadImages, AboutHeadImagesOptions, AboutHeadImagesPreview, 
        {   image1: {image1}, 
            image2: {image2},
            image3: {image3},
            image4: {image4}

        })
    ],
]);