import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";
import { TestimonialComponent } from "../components/Testimonial/TestimonialComponent";
import Component from "../models/Component";
import { Gradients } from "./utils";

export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})],
    ['Testimonial', TestimonialComponent]
]);