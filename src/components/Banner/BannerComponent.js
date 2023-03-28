import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import Banner from "./Banner";
import BannerOptions from "./BannerOptions";
import BannerPreview from "./BannerPreview.png";

export const BannerComponent = new Component(
    'Banner', 
    Banner, 
    BannerOptions, 
    BannerPreview, 
    {
        words: 'Design,Develop,Discover', 
        gradient: Gradients.default
    }
);