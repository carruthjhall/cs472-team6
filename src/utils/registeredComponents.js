import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";
import Sm from "../components/Sm/Sm";
import SmOptions from "../components/Sm/SmOptions";
import SmPreview from "../components/Sm/SmPreview.png";
import Component from "../models/Component";
import { Gradients } from "./utils";

export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})],
    ['Sm', new Component('Sm', Sm, SmOptions, SmPreview, 
        {title: "Follow Me", body: "Im Katrik Bansal, a designer who works with startups to build brands.", image: "https://i.imgur.com/TY7YztC.png", gradient: Gradients.default,
        FbLink: "https://www.facebook.com", LiLink: "https://www.linkedin.com", TwLink: "https://www.twitter.com", InLink: "https://www.instagram.com",
        DrLink: "https://www.dribbble.com", BhLink: "https://www.behance.net"

    })]
]);
