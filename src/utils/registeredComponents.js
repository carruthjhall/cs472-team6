import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";
import ServiceWrapper from "../components/ServiceWrapper/ServiceWrapper";
import ServiceWrapperPreview from "../components/ServiceWrapper/ServiceWrapperPreview.png";
import ServiceWrapperOptions from "../components/ServiceWrapper/ServiceWrapperOptions";
import Component from "../models/Component";
import { Gradients } from "./utils";

export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})],
    ['Service Wrapper', new Component('Service Wrapper', ServiceWrapper, ServiceWrapperOptions, ServiceWrapperPreview, {Title: 'Web Design', Text: "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id m", ButtonText: "Contact Me", ButtonLink: "https://www.google.com/", gradient: Gradients.default, ImageLink: "https://i.imgur.com/0vBgKva.jpeg", Invert: "Image Left"})]
]);