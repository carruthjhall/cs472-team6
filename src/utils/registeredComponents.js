import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";
import Component from "../models/Component";
import { Gradients } from "./utils";
import CtaSection from "../components/CtaSection/CtaSection";
import CtaSectionOptions from "../components/CtaSection/CtaSectionOptions";
import CtaSectionPreview from "../components/CtaSection/CtaSectionPreview.png";
import Ctatest from "../components/CtaSection/Ctatest";
import CtatestOptions from "../components/CtaSection/CtatestOptions";
export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})]
    ['Test', new Component('Test', Ctatest, CtatestOptions, CtaSectionPreview, {word: 'Design,Develop,Discover'})]
]);