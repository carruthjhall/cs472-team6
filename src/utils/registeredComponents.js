import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";
import Testimonial from "../components/Testimonial/Testimonial";
import TestimonialOptions from "../components/Testimonial/TestimonialOptions";
import TestimonialPreview from "../components/Testimonial/TestimonialPreviewLight.png";
import defaultPFP from "../components/Testimonial/Default_pfp.svg";
import Component from "../models/Component";
import { Gradients } from "./utils";

export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})],
    ['Testimonial', new Component('Testimonial', Testimonial, TestimonialOptions, TestimonialPreview, {stars: 5, starGradient: Gradients.default, testimonialBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.", custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png", custName: "Insert customer name here", custPosition: "Insert customer position here"})]
]);